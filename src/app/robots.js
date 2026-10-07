// src/app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/dashboard/',
        '/api/',
        '/login',
        '/signup',
        '/private/',   
      ],
    },
    sitemap: 'https://www.xdevutilities.com/sitemap.xml',
  };
}