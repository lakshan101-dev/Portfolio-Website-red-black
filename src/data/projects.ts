import { DesignProject } from '../types';

import CNT1 from './Resources/01CNT1.jpg';
import CNT2 from './Resources/01CNT2.jpg';
import CNT3 from './Resources/01CNT3.jpg';
import CNT4 from './Resources/01CNT4.jpg';
import LEV11 from './Resources/01lev11-02.jpg';
import LEVELZERO9 from './Resources/01LEVELZERO9.jpg';
import LEVELZERO9_1 from './Resources/01LEVELZERO9-1.jpg';
import LEVELZERO10 from './Resources/01LEVELZERO10.jpg';
import THEME_REVEAL from './Resources/01themeReveal.jpg';
import ACCEPTANCE02 from './Resources/02acceptance.jpg';
import FACEBOOK_INVITE02 from './Resources/02facebookinvite.jpg';
import GLASSMORPHISM02 from './Resources/02glassmorphism.png';
import LOGO_CONCEPT02 from './Resources/02logoconcept2.jpg';
import BOOK_COVER_03 from './Resources/03bookcovertemp01.jpg';
import COMPUTER_SHOP_03 from './Resources/03Computershop.jpg';
import LEVELSTAIR_03 from './Resources/03levelstair0301.jpg';
import LIGHT_TUITION_03 from './Resources/03Lighttutionposter.jpg';
import RB_UNOFFICIAL_03 from './Resources/03RBunofficialposter.jpg';
// Project 04
import CV02_04 from './Resources/04cv02.jpg';
import CV03_04 from './Resources/04cv3.jpg';

// Project 05
import F11_POSTER_05 from './Resources/05f11stposter.jpg';
import INVITATION_05 from './Resources/05theinvitation.jpg';
import VIOLET_FLOWER_05 from './Resources/05VioletRetroFlower.png';

// Project 07
import COSMATIC_07 from './Resources/07cosmaticposter.jpg';
import FOOTBALL_07 from './Resources/07Footballpostercmyk.jpg';
import ITALIAN_07 from './Resources/07ITALIAN.jpg';
import JBL_07 from './Resources/07jblposter.jpg';
import LEGEND_07 from './Resources/07LegendontheTrack.jpg';
import NIKE_07 from './Resources/07nike2ndposterfinal.jpg';
import INSTA_07 from './Resources/07posterforinsta.jpg';
import SUPRA_07 from './Resources/07supraposter.jpg';

// Project 09
import COFFEE_CAFE_09 from './Resources/09coffeecafe02.jpg';
import COFFEE_TEST_09 from './Resources/09coffeecafetest.jpg';
import RASABO_09 from './Resources/09rasabojun.jpg';
import RESULT01_09 from './Resources/09result01.png';
import RESULT02_09 from './Resources/09result02.png';

export const INITIAL_PROJECTS: DesignProject[] = [
{
  id: '01',
  designName: 'Level Zero #9: The Game Jam Countdown Graphic',
  coreCategory: 'Layout & Typography',
  softwareTools: 'Photoshop',
  impactMetric: '150+ assets executed across digital & physical print',

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

  imageTitles: [
    'Countdown Graphic — Concept 1',
    'Countdown Graphic — Concept 2',
    'Countdown Graphic — Concept 3',
    'Countdown Graphic — Concept 4',
    'Level 11 Teaser',
    'Level Zero #9 Cover',
    'Level Zero #9 — Alternate',
    'Level Zero #10 Teaser',
    'Theme Reveal'
  ],

featuredSpan: 'square'
},

{
  id: '02',
  designName: 'Creative Partnerships & Community Connections',
  coreCategory: 'Brand Identity',
  softwareTools: 'Illustrator, Photoshop',
  impactMetric: 'Complete 40-page brand guide & corporate stationery suite',
  thumbnailImageUrl: FACEBOOK_INVITE02,
  images: [
        FACEBOOK_INVITE02,
    ACCEPTANCE02,
    GLASSMORPHISM02,
    LOGO_CONCEPT02
  ],

  imageTitles: [
    'Facebook Event Invite',
    'Acceptance Letter Design',
    'Glassmorphism Brand Asset',
    'Logo Concept'
  ],

  featuredSpan: 'wide'
},
{
  id: '03',
  designName: 'Latest Commercial & Promotional Creative Concepts',
  coreCategory: 'Ad Creative',
  softwareTools: 'Photoshop, Illustrator',
  impactMetric: '320k+ impressions & 4.8x CTR engagement lift',

  thumbnailImageUrl: BOOK_COVER_03,

  images: [
    BOOK_COVER_03,
    COMPUTER_SHOP_03,
    LEVELSTAIR_03,
    LIGHT_TUITION_03,
    RB_UNOFFICIAL_03
  ],

  imageTitles: [
    'Book Cover Template',
    'Computer Shop Ad',
    'Level Stair Design',
    'Light Tuition Poster',
    'RB Unofficial Poster'
  ],
  featuredSpan: 'normal'
},
{
  id: '04',
  designName: 'Executive & Creative Professional CV Concepts',
  coreCategory: 'Office Support & Presentation',
  softwareTools: 'Microsoft Office 365, PowerPoint, Excel',
  impactMetric: '45-slide C-suite investor deck finalized under 48h turnaround',

  thumbnailImageUrl: CV02_04,

  images: [
    CV02_04,
    CV03_04
  ],

  imageTitles: [
    'Investor Deck — Cover Slide',
    'Investor Deck — Overview Slide'
  ],

  featuredSpan: 'normal'
},
  {
  id: '05',
  designName: 'Multidisciplinary Print & Digital Media Layouts',
  coreCategory: 'Layout & Typography',
  softwareTools: 'Illustrator, InDesign',
  impactMetric: 'Curated selection for regional design symposium showcase',

  thumbnailImageUrl: F11_POSTER_05,

  images: [
    F11_POSTER_05,
    INVITATION_05,
    VIOLET_FLOWER_05
  ],

  imageTitles: [
    'F11 Poster',
    'The Invitation',
    'Violet Retro Flower'
  ],

  featuredSpan: 'normal'
},
    {
  id: '07',
  designName: 'High-Octane Commercial Art & Sports Graphics Showcase',
  coreCategory: 'Ad Creative',
  softwareTools: 'Photoshop, Illustrator',
  impactMetric: '98% client satisfaction across 24 ad variations delivered',

  thumbnailImageUrl: LEGEND_07,

  images: [
    LEGEND_07,    
    COSMATIC_07,
    FOOTBALL_07,
    ITALIAN_07,
    JBL_07,
    NIKE_07,
    INSTA_07,
    SUPRA_07
  ],

  imageTitles: [
    'Legend on the Track',
    'Cosmetic Campaign Poster',
    'Football Poster (CMYK)',
    'Italian Campaign Ad',
    'JBL Poster',
    'Nike Poster',
    'Instagram Post',
    'Supra Poster'
  ],

 featuredSpan: 'normal'
},
    {
  id: '09',
  designName: 'Brand Identity & Commercial Product Design Showcase',
  coreCategory: 'Brand Identity',
  softwareTools: 'Illustrator, Photoshop',
  impactMetric: '12 SKU retail coffee bean packaging rollout & dieline specs',

  thumbnailImageUrl: COFFEE_CAFE_09,

  images: [
    COFFEE_CAFE_09,
    COFFEE_TEST_09,
    RASABO_09,
    RESULT01_09,
    RESULT02_09
  ],

  imageTitles: [
    'Coffee Cafe Packaging',
    'Coffee Test Print',
    'Rasabo Jun Label',
    'Final Result — Front',
    'Final Result — Back'
  ],

    featuredSpan: 'normal'
},
];
