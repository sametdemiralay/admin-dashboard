const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "comicvine.gamespot.com",
      },
    ],
  },
};

module.exports = nextConfig;
