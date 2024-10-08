/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/listings',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
