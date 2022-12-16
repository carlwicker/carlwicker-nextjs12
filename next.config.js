/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    apiKey: "AIzaSyC-9F5ADsRl1ehqvlp5yaGDG0T8K69VqOA",
    authDomain: "carlwicker-nextjs12.firebaseapp.com",
    projectId: "carlwicker-nextjs12",
    storageBucket: "carlwicker-nextjs12.appspot.com",
    messagingSenderId: "54906668271",
    appId: "1:54906668271:web:e5a0ecf6153405d1b1871a",
    SENDGRID_API_KEY:
      "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",
  },
};

module.exports = nextConfig;
