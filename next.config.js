/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "jsonkeeper.com", "a0.muscache.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoid2hhdGV2ZXI3NzciLCJhIjoiY2xjM2pwZW5zMGszaDNvbzVwNmUxajViYSJ9.tKboEuLUoeAvGMyPf32qCA",
  },
};

module.exports = nextConfig;
