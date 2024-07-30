/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      PAYMASTER_PROD_URL: process.env.PAYMASTER_PROD_URL,
    },
  };
  
  export default nextConfig;