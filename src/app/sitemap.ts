// src/app/sitemap.ts

import { MetadataRoute } from 'next';
import { tools } from '@/lib/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.xdevutilities.com';

  // 1. Main Route
  const routes = ['', '/tools', '/blog', '/resources/usage-guide', '/resources/documentation', '/resources/faq', '/legal/privacy', '/legal/terms', '/legal/aboutus', '/feedback'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  // 2. Bolg post link
  const blogSlugs = [
    'pdf-metadata-privacy',
    'ats-resume-scanner-guide',
    'passport-photo-guide',
    'color-palette-theory',
    'sql-mermaid-visualization'
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Tools Link
  const toolRoutes = tools.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes, ...toolRoutes];
}