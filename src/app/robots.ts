// src/app/robots.ts

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
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