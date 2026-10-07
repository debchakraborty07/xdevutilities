// src/app/sitemap.js

import { tools } from '@/lib/tools-data';

export default function sitemap() {
  const baseUrl = 'https://www.xdevutilities.com';

  // 1. Core Routes (Static Pages)
  const coreRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/tools', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/resources/documentation', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/resources/faq', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/resources/usage-guide', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/legal/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/legal/privacy', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/legal/terms', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/legal/aboutus', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/feedback', priority: 0.5, changeFrequency: 'monthly' },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. Blog Posts (Only if they are directly accessible without redirects)
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

  // 3. Core Tools Pages (High Priority Product URLs)
  const toolRoutes = tools.map((tool) => {
    // Prevent duplicate or missing slashes
    const toolHref = tool.href.startsWith('/') ? tool.href : `/${tool.href}`;
    return {
      url: `${baseUrl}${toolHref}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    };
  });

  return [...coreRoutes, ...toolRoutes, ...blogRoutes];
}