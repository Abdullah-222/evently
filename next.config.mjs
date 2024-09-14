// next.config.js
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          pathname: '/**', // Allows all paths from this domain
        },
      ],
    },
  };
  
export default nextConfig;  