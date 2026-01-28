import adobeIllustratorImg from "@assets/product_categories_webp/Adobe Illustrator assets.webp";
import aiGraphicsImg from "@assets/product_categories_webp/AI Graphics.webp";
import bioLinkImg from "@assets/product_categories_webp/Bio Link Bundle.webp";
import brochuresImg from "@assets/product_categories_webp/Brochures, business cards & flyers templates.webp";
import businessLegalImg from "@assets/product_categories_webp/Business and Legal Templates.webp";
import businessDbImg from "@assets/product_categories_webp/Business Database.webp";
import canvaMockupsImg from "@assets/product_categories_webp/Canva Mockups.webp";
import canvaTemplatesImg from "@assets/product_categories_webp/Canva Templates.webp";
import carouselImg from "@assets/product_categories_webp/Carousel Bundle.webp";
import coloringBooksImg from "@assets/product_categories_webp/Coloring Books.webp";
import corelDrawImg from "@assets/product_categories_webp/CorelDraw Templates.webp";
import cyberpunkImg from "@assets/product_categories_webp/CyberPunk Collection.webp";
import dfyCoursesImg from "@assets/product_categories_webp/DFY Courses.webp";
import dieCutStickersImg from "@assets/product_categories_webp/Die-Cut Stickers.webp";
import ebooksImg from "@assets/product_categories_webp/eBooks.webp";
import infographicsImg from "@assets/product_categories_webp/Editable Infographics.webp";
import excelImg from "@assets/product_categories_webp/Excel Templates.webp";
import facelessGuidesImg from "@assets/product_categories_webp/Facelss Guides canva Bundle.webp";
import fontsImg from "@assets/product_categories_webp/FONTS.webp";
import frameArtworkImg from "@assets/product_categories_webp/Frame Artwork.webp";
import iconsImg from "@assets/product_categories_webp/ICONS.webp";
import influencersImg from "@assets/product_categories_webp/Influencers Bundle.webp";
import journalsImg from "@assets/product_categories_webp/JOURNALS & PLANNERS.webp";
import lightroomImg from "@assets/product_categories_webp/Lightroom Presets.webp";
import logoTemplatesImg from "@assets/product_categories_webp/LOGO TEMPLATES.webp";
import gymBundleImg from "@assets/product_categories_webp/Mega Gym Bundle.webp";
import mobileAppsImg from "@assets/product_categories_webp/MOBILE APPS Templates.webp";
import nicheArticlesImg from "@assets/product_categories_webp/Niche Article Bundles.webp";
import notionImg from "@assets/product_categories_webp/NOTION TEMPLATES.webp";
import photoshopActionsImg from "@assets/product_categories_webp/Photoshop Actions.webp";
import photoshopBrushesImg from "@assets/product_categories_webp/PHOTOSHOP BRUSH BUNDLE.webp";
import photoshopOverlaysImg from "@assets/product_categories_webp/Photoshop Overlays Bundle.webp";
import powerpointImg from "@assets/product_categories_webp/POWERPOINT TEMPLATEs.webp";
import presetsPhotoshopImg from "@assets/product_categories_webp/presets photoshop.webp";
import wallArtImg from "@assets/product_categories_webp/Printable Wall Art.webp";
import promptsImg from "@assets/product_categories_webp/Prompts Bundle.webp";
import reelsImg from "@assets/product_categories_webp/Reels & Shorts.webp";
import restaurantsImg from "@assets/product_categories_webp/Restaurants Bundle.webp";
import resumeImg from "@assets/product_categories_webp/resume templates.webp";
import audioImg from "@assets/product_categories_webp/Royalty-Free Audio.webp";
import royaltyImagesImg from "@assets/product_categories_webp/ROYALTY-FREE IMAGES.webp";
import royaltyVideosImg from "@assets/product_categories_webp/ROYALTY-FREE VIDEOS.webp";
import socialMediaImg from "@assets/product_categories_webp/Social Media Templates_ads templates.webp";
import sopImg from "@assets/product_categories_webp/SOP Templates.webp";
import svgImg from "@assets/product_categories_webp/SVG Assets.webp";
import tshirtsImg from "@assets/product_categories_webp/T-SHIRTS & Mug Designs.webp";
import videoEditingImg from "@assets/product_categories_webp/Video Editing assets.webp";
import wpTemplatesImg from "@assets/product_categories_webp/WP Templates and Plugins.webp";

export interface ProductCategory {
  image: string;
  title: string;
  description: string;
}

export const productCategories: ProductCategory[] = [
  { image: canvaTemplatesImg, title: "Canva Templates", description: "Professional designs for social media, marketing, and branding" },
  { image: notionImg, title: "Notion Templates", description: "Productivity systems, planners, and workspace templates" },
  { image: ebooksImg, title: "eBooks", description: "Ready-to-sell digital books across popular niches" },
  { image: dfyCoursesImg, title: "DFY Courses", description: "Complete online courses ready to rebrand and sell" },
  { image: journalsImg, title: "Journals & Planners", description: "Printable planners, journals, and organizational tools" },
  { image: socialMediaImg, title: "Social Media Templates", description: "Eye-catching posts, stories, and ad templates" },
  { image: logoTemplatesImg, title: "Logo Templates", description: "Customizable logo designs for any business" },
  { image: powerpointImg, title: "PowerPoint Templates", description: "Professional presentation templates" },
  { image: fontsImg, title: "Fonts", description: "Commercial-use fonts for all your projects" },
  { image: iconsImg, title: "Icons", description: "Icon packs for apps, websites, and designs" },
  { image: aiGraphicsImg, title: "AI Graphics", description: "AI-generated artwork and illustrations" },
  { image: reelsImg, title: "Reels & Shorts", description: "Vertical video templates for social media" },
  { image: royaltyImagesImg, title: "Royalty-Free Images", description: "High-quality stock photos for any use" },
  { image: royaltyVideosImg, title: "Royalty-Free Videos", description: "Stock video clips for your projects" },
  { image: audioImg, title: "Royalty-Free Audio", description: "Music and sound effects for content creation" },
  { image: lightroomImg, title: "Lightroom Presets", description: "Photo editing presets for stunning images" },
  { image: photoshopActionsImg, title: "Photoshop Actions", description: "One-click photo effects and enhancements" },
  { image: photoshopBrushesImg, title: "Photoshop Brushes", description: "Creative brushes for digital art" },
  { image: photoshopOverlaysImg, title: "Photoshop Overlays", description: "Layer effects for stunning compositions" },
  { image: presetsPhotoshopImg, title: "Photoshop Presets", description: "Professional color grading presets" },
  { image: adobeIllustratorImg, title: "Illustrator Assets", description: "Vector graphics and illustrations" },
  { image: svgImg, title: "SVG Assets", description: "Scalable vector graphics for web and print" },
  { image: infographicsImg, title: "Editable Infographics", description: "Visual data presentations and graphics" },
  { image: excelImg, title: "Excel Templates", description: "Spreadsheets for business and personal use" },
  { image: resumeImg, title: "Resume Templates", description: "Professional CV and resume designs" },
  { image: brochuresImg, title: "Brochures & Flyers", description: "Marketing materials ready to customize" },
  { image: businessLegalImg, title: "Business & Legal Templates", description: "Contracts, agreements, and business docs" },
  { image: sopImg, title: "SOP Templates", description: "Standard operating procedures for businesses" },
  { image: businessDbImg, title: "Business Database", description: "Lead lists and business contacts" },
  { image: wallArtImg, title: "Printable Wall Art", description: "Digital art prints for home decor" },
  { image: frameArtworkImg, title: "Frame Artwork", description: "Mockups and framed art templates" },
  { image: coloringBooksImg, title: "Coloring Books", description: "Printable coloring pages and books" },
  { image: dieCutStickersImg, title: "Die-Cut Stickers", description: "Sticker designs for print-on-demand" },
  { image: tshirtsImg, title: "T-Shirt & Mug Designs", description: "Print-on-demand ready graphics" },
  { image: mobileAppsImg, title: "Mobile App Templates", description: "App UI kits and design templates" },
  { image: wpTemplatesImg, title: "WordPress Templates", description: "Themes and plugins for WordPress" },
  { image: videoEditingImg, title: "Video Editing Assets", description: "Transitions, effects, and overlays" },
  { image: nicheArticlesImg, title: "Niche Articles", description: "Pre-written content for blogs and sites" },
  { image: promptsImg, title: "AI Prompts Bundle", description: "Curated prompts for AI tools" },
  { image: facelessGuidesImg, title: "Faceless Guides", description: "Content creation without showing face" },
  { image: carouselImg, title: "Carousel Bundle", description: "Instagram carousel templates" },
  { image: bioLinkImg, title: "Bio Link Bundle", description: "Link-in-bio page templates" },
  { image: influencersImg, title: "Influencers Bundle", description: "Content for social media influencers" },
  { image: gymBundleImg, title: "Mega Gym Bundle", description: "Fitness content and workout plans" },
  { image: restaurantsImg, title: "Restaurants Bundle", description: "Menu templates and restaurant graphics" },
  { image: cyberpunkImg, title: "CyberPunk Collection", description: "Futuristic neon-style graphics" },
  { image: corelDrawImg, title: "CorelDraw Templates", description: "Vector designs for CorelDraw" },
  { image: canvaMockupsImg, title: "Canva Mockups", description: "Product mockup templates for Canva" },
];
