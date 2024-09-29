/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "api.dicebear.com" }],
  },
};

export default nextConfig;
