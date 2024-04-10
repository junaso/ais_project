/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/employee',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
