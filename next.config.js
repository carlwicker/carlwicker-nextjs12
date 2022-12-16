/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_apiKey: "AIzaSyC-9F5ADsRl1ehqvlp5yaGDG0T8K69VqOA",
    NEXT_PUBLIC_authDomain: "carlwicker-nextjs12.firebaseapp.com",
    NEXT_PUBLIC_projectId: "carlwicker-nextjs12",
    NEXT_PUBLIC_storageBucket: "carlwicker-nextjs12.appspot.com",
    NEXT_PUBLIC_messagingSenderId: "54906668271",
    NEXT_PUBLIC_appId: "1:54906668271:web:e5a0ecf6153405d1b1871a",
    NEXT_PUBLIC_SENDGRID_API_KEY:
      "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",
  },
};

module.exports = nextConfig;
