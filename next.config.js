/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};

module.exports = nextConfig;
