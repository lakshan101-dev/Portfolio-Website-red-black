ts
export interface DesignProject {
  id: string; // Project ID (e.g., "01", "02")

  designName: string; // Design Name (e.g., "Promotional Poster", "Brand Identity Kit")

  coreCategory: string; // Core Category (e.g., "Layout & Typography", "Brand Identity", "Ad Creative", "Office Support")

  softwareTools: string; // Software Tools (e.g., "Photoshop", "Illustrator", "Microsoft Office 365")

  impactMetric: string; // Impact Metric (e.g., "150+ assets executed", "98% client satisfaction")

  thumbnailImageUrl: string; // Main thumbnail image

  images?: string[]; // Optional gallery images for the project slider

  liveReviewLink: string; // Live Review Link (Google Drive / Behance)

  dimensions?: string; // Optional layout metadata (e.g., "A1 Print Poster", "1080x1920 Mobile")

  description?: string; // Short brief

  featuredSpan?: 'normal' | 'tall' | 'wide'; // For Bento visual rhythm
}

export type CoreCategory =
  | 'All Categories'
  | 'Layout & Typography'
  | 'Brand Identity'
  | 'Ad Creative'
  | 'Office Support & Presentation';


The key addition is simply:

ts
images?: string[];


So now a project can have:

ts
thumbnailImageUrl: CNT1,

images: [
  CNT1,
  CNT2,
  CNT3,
  CNT4,
  LEV11,
  LEVELZERO9,
  LEVELZERO9_1,
  LEVELZERO10,
  THEME_REVEAL
],


The `?` means **projects don't have to have multiple images**. A project with only one image can continue using just:

ts
thumbnailImageUrl: SOME_IMAGE


So this won't break your existing projects. The next step is modifying the **actual project card/detail component** to use `images` as a slider.
