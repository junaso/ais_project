/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/agreement',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
