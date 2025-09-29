export const APP_CONFIG = {
  // App URLs
  baseUrl: "https://vital-herb-sync.lovable.app/",
  productionUrl: "https://AyurNutri.com", // Your future custom domain
  
  // App Information
  appName: "AyurNutri",
  appDescription: "Comprehensive cloud-based practice management & nutrient analysis software for Ayurvedic dietitians, tailored for Ayurveda-focused diet plans",
  
  // API Configuration
  apiVersion: "v1",
  
  // Contact Information
  supportEmail: "support@ayurnutri.com",
  
  // Social Media
  social: {
    twitter: "@AyurNutri",
    facebook: "AyurNutri",
    instagram: "AyurNutri"
  }
} as const;

// Helper function to get current base URL
export const getCurrentBaseUrl = () => {
  // Use production URL if available, otherwise use staging URL
  return process.env.NODE_ENV === 'production' && APP_CONFIG.productionUrl 
    ? APP_CONFIG.productionUrl 
    : APP_CONFIG.baseUrl;
};

// Helper function to build full URLs
export const buildUrl = (path: string = '') => {
  const baseUrl = getCurrentBaseUrl();
  return `${baseUrl.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
};