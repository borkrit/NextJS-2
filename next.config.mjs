/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/login-progress',
            destination: '/dashboard',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
