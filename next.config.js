/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [{ source: "/", destination: "/heroes", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/gh/akabab/superhero-api@0.3.0/api/images/sm/**",
      },
    ],
  },
};

module.exports = nextConfig;
