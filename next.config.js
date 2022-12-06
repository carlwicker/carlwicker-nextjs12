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
  },
};

module.exports = nextConfig;
