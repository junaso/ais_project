/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/example-page',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
