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

      {
        source: '/:path(code-to-image|color-palette|message-encryptor|metadata-cleaner|passport-photo|price-comparison|privacy-blur|resume-scanner|safe-zone-checker|sql-mermaid)',
        destination: '/tools/:path',
        permanent: true,
      },

    ];
  },
};

export default nextConfig;