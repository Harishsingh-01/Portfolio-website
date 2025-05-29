// Email Service Configuration
export const emailConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID ,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID ,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

// Note: Never commit this file with actual keys to version control
// Add this file to .gitignore