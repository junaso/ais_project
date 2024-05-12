/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/registration',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
