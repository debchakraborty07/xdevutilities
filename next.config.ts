/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: false,

  async redirects() {
    return [
      { source: '/privacy', destination: '/legal/privacy', permanent: true },
      { source: '/about', destination: '/legal/aboutus', permanent: true },
      { source: '/resources/legal/:path*', destination: '/legal/:path*', permanent: true },

      // Redirect broken links into 301 (AdSense & SEO Protection)
      { source: '/blog/smart-shopping-hacks', destination: '/blog/price-comparison-guide', permanent: true },
      { source: '/blog/aes-256-encryption-explained', destination: '/blog/message-encryption-guide', permanent: true },
      { source: '/blog/social-media-design-safe-zones', destination: '/blog/safe-zone-checker-guide', permanent: true },
      { source: '/blog/digital-redaction-guide', destination: '/blog/privacy-blur-guide', permanent: true },
      { source: '/blog/developer-personal-branding-tips', destination: '/blog/ats-resume-scanner-guide', permanent: true },

      {
        source: '/:path(code-to-image|color-palette|message-encryptor|metadata-cleaner|passport-photo|price-comparison|privacy-blur|resume-scanner|safe-zone-checker|sql-mermaid)',
        destination: '/tools/:path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;