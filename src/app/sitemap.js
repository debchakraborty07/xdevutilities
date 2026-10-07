// src/app/sitemap.js

import { tools } from '@/lib/tools-data';

export default function sitemap() {
  const baseUrl = 'https://www.xdevutilities.com';

  // 1. Main Route
  const routes = ['', '/tools', '/blog', '/resources/usage-guide', '/resources/documentation', '/resources/faq', '/legal/privacy', '/legal/terms', '/legal/aboutus', '/feedback'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    })
  );

  // 2. Blog post link
  const blogSlugs = [
    'pdf-metadata-privacy',
    'ats-resume-scanner-guide',
    'passport-photo-guide',
    'color-palette-theory',
    'sql-mermaid-visualization',
    'code-to-image-guide',      
    'message-encryption-guide', 
    'price-comparison-guide',   
    'privacy-blur-guide',       
    'safe-zone-checker-guide',  
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 3. Tools Link
  const toolRoutes = tools.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes,...blogRoutes,...toolRoutes];
}