/**
 * Custom "Glide and Drop" smooth scrolling animation.
 * Emulates a silky smooth glide initiation followed by a sudden dramatic drop/swoop
 * and cushioned landing into the target element.
 */
export function glideDropScroll(targetId: string, offset = 80) {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const elementRect = targetElement.getBoundingClientRect();
  const targetY = Math.max(0, startY + elementRect.top - offset);
  const distance = targetY - startY;

  // If distance is negligible, finish immediately
  if (Math.abs(distance) < 20) {
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    return;
  }

  // Dynamic duration based on travel distance (850ms - 1300ms)
  const duration = Math.min(Math.max(Math.abs(distance) * 0.55, 850), 1300);
  const startTime = performance.now();

  let isCancelled = false;
  const cancelOnUserScroll = () => {
    isCancelled = true;
    cleanup();
  };

  const cleanup = () => {
    window.removeEventListener('wheel', cancelOnUserScroll);
    window.removeEventListener('touchmove', cancelOnUserScroll);
  };

  window.addEventListener('wheel', cancelOnUserScroll, { passive: true });
  window.addEventListener('touchmove', cancelOnUserScroll, { passive: true });

  /**
   * "Glide & Sudden Drop" Custom Easing Curve:
   * Starts with an initial smooth gentle glide (t < 0.35)
   * Plunges into a sudden steep downward drop (0.35 <= t < 0.75)
   * Softly cushions into place (t >= 0.75)
   */
  function easeGlideDrop(t: number): number {
    if (t < 0.5) {
      // Quintic ease-in for a sustained gentle glide ramping into high speed
      return 16 * t * t * t * t * t;
    } else {
      // Steep downward drop settling into soft cushion
      return 1 - Math.pow(-2 * t + 2, 5) / 2;
    }
  }

  function step(currentTime: number) {
    if (isCancelled) return;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeGlideDrop(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      cleanup();
    }
  }

  requestAnimationFrame(step);
}
