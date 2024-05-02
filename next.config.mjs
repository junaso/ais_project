/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/registrations',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
