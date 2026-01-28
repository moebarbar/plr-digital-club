import adobeIllustratorImg from "@assets/product_categories_compressed/Adobe Illustrator assets.jpg";
import aiGraphicsImg from "@assets/product_categories_compressed/AI Graphics.jpg";
import bioLinkImg from "@assets/product_categories_compressed/Bio Link Bundle.jpg";
import brochuresImg from "@assets/product_categories_compressed/Brochures, business cards & flyers templates.jpg";
import businessLegalImg from "@assets/product_categories_compressed/Business and Legal Templates.jpg";
import businessDbImg from "@assets/product_categories_compressed/Business Database.jpg";
import canvaMockupsImg from "@assets/product_categories_compressed/Canva Mockups.jpg";
import canvaTemplatesImg from "@assets/product_categories_compressed/Canva Templates.jpg";
import carouselImg from "@assets/product_categories_compressed/Carousel Bundle.jpg";
import coloringBooksImg from "@assets/product_categories_compressed/Coloring Books.jpg";
import corelDrawImg from "@assets/product_categories_compressed/CorelDraw Templates.jpg";
import cyberpunkImg from "@assets/product_categories_compressed/CyberPunk Collection.jpg";
import dfyCoursesImg from "@assets/product_categories_compressed/DFY Courses.jpg";
import dieCutStickersImg from "@assets/product_categories_compressed/Die-Cut Stickers.jpg";
import ebooksImg from "@assets/product_categories_compressed/eBooks.jpg";
import infographicsImg from "@assets/product_categories_compressed/Editable Infographics.jpg";
import excelImg from "@assets/product_categories_compressed/Excel Templates.jpg";
import facelessGuidesImg from "@assets/product_categories_compressed/Facelss Guides canva Bundle.jpg";
import fontsImg from "@assets/product_categories_compressed/FONTS.jpg";
import frameArtworkImg from "@assets/product_categories_compressed/Frame Artwork.jpg";
import iconsImg from "@assets/product_categories_compressed/ICONS.jpg";
import influencersImg from "@assets/product_categories_compressed/Influencers Bundle.jpg";
import journalsImg from "@assets/product_categories_compressed/JOURNALS & PLANNERS.jpg";
import lightroomImg from "@assets/product_categories_compressed/Lightroom Presets.jpg";
import logoTemplatesImg from "@assets/product_categories_compressed/LOGO TEMPLATES.jpg";
import gymBundleImg from "@assets/product_categories_compressed/Mega Gym Bundle.jpg";
import mobileAppsImg from "@assets/product_categories_compressed/MOBILE APPS Templates.jpg";
import nicheArticlesImg from "@assets/product_categories_compressed/Niche Article Bundles.jpg";
import notionImg from "@assets/product_categories_compressed/NOTION TEMPLATES.jpg";
import photoshopActionsImg from "@assets/product_categories_compressed/Photoshop Actions.jpg";
import photoshopBrushesImg from "@assets/product_categories_compressed/PHOTOSHOP BRUSH BUNDLE.jpg";
import photoshopOverlaysImg from "@assets/product_categories_compressed/Photoshop Overlays Bundle.jpg";
import powerpointImg from "@assets/product_categories_compressed/POWERPOINT TEMPLATEs.jpg";
import presetsPhotoshopImg from "@assets/product_categories_compressed/presets photoshop.jpg";
import wallArtImg from "@assets/product_categories_compressed/Printable Wall Art.jpg";
import promptsImg from "@assets/product_categories_compressed/Prompts Bundle.jpg";
import reelsImg from "@assets/product_categories_compressed/Reels & Shorts.jpg";
import restaurantsImg from "@assets/product_categories_compressed/Restaurants Bundle.jpg";
import resumeImg from "@assets/product_categories_compressed/resume templates.jpg";
import audioImg from "@assets/product_categories_compressed/Royalty-Free Audio.jpg";
import royaltyImagesImg from "@assets/product_categories_compressed/ROYALTY-FREE IMAGES.jpg";
import royaltyVideosImg from "@assets/product_categories_compressed/ROYALTY-FREE VIDEOS.jpg";
import socialMediaImg from "@assets/product_categories_compressed/Social Media Templates_ads templates.jpg";
import sopImg from "@assets/product_categories_compressed/SOP Templates.jpg";
import svgImg from "@assets/product_categories_compressed/SVG Assets.jpg";
import tshirtsImg from "@assets/product_categories_compressed/T-SHIRTS & Mug Designs.jpg";
import videoEditingImg from "@assets/product_categories_compressed/Video Editing assets.jpg";
import wpTemplatesImg from "@assets/product_categories_compressed/WP Templates and Plugins.jpg";

export interface ProductCategory {
  image: string;
  title: string;
  description: string;
}

export const productCategories: ProductCategory[] = [
  { image: canvaTemplatesImg, title: "Canva Templates", description: "Ready-to-edit designs for social posts, presentations, and marketing" },
  { image: notionImg, title: "Notion Templates", description: "Productivity systems, planners, and workspace templates" },
  { image: journalsImg, title: "Journals & Planners", description: "Digital planners, goal trackers, and productivity journals" },
  { image: ebooksImg, title: "eBooks", description: "Done-for-you ebooks across trending niches" },
  { image: dfyCoursesImg, title: "DFY Courses", description: "Complete online courses ready to sell" },
  { image: socialMediaImg, title: "Social Media Templates", description: "Instagram, TikTok, and Facebook ad templates" },
  { image: promptsImg, title: "AI Prompts Bundle", description: "ChatGPT, Midjourney, and AI tool prompts" },
  { image: businessDbImg, title: "Business Database", description: "Email lists and lead generation resources" },
  { image: aiGraphicsImg, title: "AI Graphics", description: "AI-generated graphics and visual assets" },
  { image: canvaMockupsImg, title: "Canva Mockups", description: "Product mockups for marketing materials" },
  { image: reelsImg, title: "Reels & Shorts", description: "Ready-made video content for social media" },
  { image: infographicsImg, title: "Editable Infographics", description: "Professional infographic templates" },
  { image: logoTemplatesImg, title: "Logo Templates", description: "Customizable logo designs for any brand" },
  { image: resumeImg, title: "Resume Templates", description: "Professional CV and resume designs" },
  { image: brochuresImg, title: "Brochures & Flyers", description: "Business cards, flyers, and marketing materials" },
  { image: wallArtImg, title: "Printable Wall Art", description: "Digital art prints for home decor" },
  { image: excelImg, title: "Excel Templates", description: "Spreadsheets for business and finance" },
  { image: sopImg, title: "SOP Templates", description: "Standard operating procedure documents" },
  { image: powerpointImg, title: "PowerPoint Templates", description: "Professional presentation designs" },
  { image: nicheArticlesImg, title: "Niche Article Bundles", description: "Pre-written blog content packs" },
  { image: businessLegalImg, title: "Business & Legal Templates", description: "Contracts, agreements, and business docs" },
  { image: coloringBooksImg, title: "Coloring Books", description: "Printable coloring pages and books" },
  { image: dieCutStickersImg, title: "Die-Cut Stickers", description: "Ready-to-print sticker designs" },
  { image: tshirtsImg, title: "T-Shirts & Mug Designs", description: "Print-on-demand ready graphics" },
  { image: fontsImg, title: "Fonts", description: "Commercial-use font collections" },
  { image: iconsImg, title: "Icons", description: "Icon packs for web and mobile" },
  { image: svgImg, title: "SVG Assets", description: "Scalable vector graphics for any project" },
  { image: adobeIllustratorImg, title: "Adobe Illustrator Assets", description: "Vector graphics and design elements" },
  { image: photoshopActionsImg, title: "Photoshop Actions", description: "One-click photo editing effects" },
  { image: photoshopBrushesImg, title: "Photoshop Brushes", description: "Creative brush packs for designers" },
  { image: photoshopOverlaysImg, title: "Photoshop Overlays", description: "Photo enhancement overlays" },
  { image: presetsPhotoshopImg, title: "Photoshop Presets", description: "Professional editing presets" },
  { image: lightroomImg, title: "Lightroom Presets", description: "Photo editing presets for photographers" },
  { image: frameArtworkImg, title: "Frame Artwork", description: "Gallery-ready digital art frames" },
  { image: corelDrawImg, title: "CorelDraw Templates", description: "Professional design templates" },
  { image: royaltyImagesImg, title: "Royalty-Free Images", description: "High-quality stock photos" },
  { image: royaltyVideosImg, title: "Royalty-Free Videos", description: "Stock video footage collection" },
  { image: audioImg, title: "Royalty-Free Audio", description: "Music and sound effects library" },
  { image: videoEditingImg, title: "Video Editing Assets", description: "Transitions, LUTs, and effects" },
  { image: wpTemplatesImg, title: "WordPress Templates", description: "Themes and plugins for websites" },
  { image: mobileAppsImg, title: "Mobile App Templates", description: "App UI kits and templates" },
  { image: bioLinkImg, title: "Bio Link Bundle", description: "Link-in-bio page templates" },
  { image: carouselImg, title: "Carousel Bundle", description: "Instagram carousel templates" },
  { image: influencersImg, title: "Influencers Bundle", description: "Content creator resources" },
  { image: facelessGuidesImg, title: "Faceless Guides", description: "Anonymous content creation guides" },
  { image: gymBundleImg, title: "Mega Gym Bundle", description: "Fitness and workout templates" },
  { image: restaurantsImg, title: "Restaurants Bundle", description: "Food business marketing assets" },
  { image: cyberpunkImg, title: "CyberPunk Collection", description: "Futuristic design assets" },
];
