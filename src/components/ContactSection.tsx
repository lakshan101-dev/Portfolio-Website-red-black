import React, { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Copy, Check, Send, MessageSquare, Clock, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Brand Identity & Graphic Design',
    message: '',
  });

  const email = 'chamudithalakshan264@gmail.com';
  const phone = '+94 76 963 1658';

  const copyText = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link with prefilled subject and body
    const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.service} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Chamuditha,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject Details:\n${formData.message}\n\nSent via chamuditha-portfolio`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Channels & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
                Let&apos;s Work Together on Your Next Project
              </h2>
              <p className="text-sm sm:text-base text-[#888888] mt-4 leading-relaxed">
                Available for full-time remote roles, long-term agency retainers, and selective contract projects. Let&apos;s discuss your creative goals.
              </p>

              {/* Direct Channels */}
              <div className="mt-8 space-y-4">
                {/* Email Card */}
                <div className="p-4 sm:p-5 glass-panel glass-panel-hover rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-[#E50914] shadow-[0_0_15px_rgba(229,9,20,0.2)]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#888888]">Email Address</div>
                      <a
                        href={`mailto:${email}`}
                        className="text-sm font-bold text-[#FFFFFF] hover:text-[#E50914] transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => copyText(email, 'email')}
                      className="p-2 text-[#888888] hover:text-[#FFFFFF] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-md transition-all cursor-pointer"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-[#E50914]" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={`mailto:${email}`}
                      className="p-2 text-[#888888] hover:text-[#FFFFFF] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-md transition-all"
                      title="Send email"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp Card */}
                <div className="p-4 sm:p-5 glass-panel glass-panel-hover rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-[#E50914] shadow-[0_0_15px_rgba(229,9,20,0.2)]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#888888]">Phone / WhatsApp</div>
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="text-sm font-bold text-[#FFFFFF] hover:text-[#E50914] transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => copyText(phone, 'phone')}
                      className="p-2 text-[#888888] hover:text-[#FFFFFF] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-md transition-all cursor-pointer"
                      title="Copy phone number"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-[#E50914]" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#888888] hover:text-[#FFFFFF] bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-md transition-all"
                      title="Open WhatsApp chat"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability & Response Time */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-6 text-xs text-[#888888]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E50914]" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#E50914]" />
                <span>Global Remote Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form with Frosted Glass Panel */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl">
            <h3 className="text-xl font-bold text-[#FFFFFF] tracking-tight mb-2">
              Send a Project Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] mb-6">
              Fill out the details below and I will get back to you promptly with availability and estimates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-white/[0.04] backdrop-blur-md text-[#FFFFFF] placeholder-[#666666] border border-white/[0.1] focus:border-[#E50914] focus:bg-white/[0.07] rounded-md p-3 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full bg-white/[0.04] backdrop-blur-md text-[#FFFFFF] placeholder-[#666666] border border-white/[0.1] focus:border-[#E50914] focus:bg-white/[0.07] rounded-md p-3 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-1.5">
                  Project or Service Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-neutral-900/90 backdrop-blur-md text-[#FFFFFF] border border-white/[0.1] focus:border-[#E50914] rounded-md p-3 outline-none transition-colors"
                >
                  <option value="Brand Identity & Graphic Design">Brand Identity &amp; Graphic Design</option>
                  <option value="Promotional & Event Poster Campaign">Promotional &amp; Event Poster Campaign</option>
                  <option value="Digital Ad Creatives & Social Assets">Digital Ad Creatives &amp; Social Assets</option>
                  <option value="Executive C-Suite Presentation Deck">Executive C-Suite Presentation Deck</option>
                  <option value="Corporate Documentation & Reports">Corporate Documentation &amp; Reports</option>
                  <option value="Full-Time Remote / Retainer Role">Full-Time Remote / Retainer Role</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-1.5">
                  Brief Project Overview &amp; Timeline
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a few details about your scope, deliverables, deadline, or team needs..."
                  className="w-full bg-white/[0.04] backdrop-blur-md text-[#FFFFFF] placeholder-[#666666] border border-white/[0.1] focus:border-[#E50914] focus:bg-white/[0.07] rounded-md p-3 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#E50914] hover:bg-[#ff1e27] active:scale-[0.99] text-[#FFFFFF] font-semibold text-sm rounded-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(229,9,20,0.35)] hover:shadow-[0_6px_28px_rgba(229,9,20,0.55)] mt-2"
              >
                {formSubmitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Inquiry Prepared! Opening Email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Chamuditha</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
