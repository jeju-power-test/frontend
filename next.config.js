/** @type {import('next').NextConfig} */
const path = require("path");
const withInterceptStdout = require("next-intercept-stdout");

const prod = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: prod,
    styledComponents: {
      ssr: true,
      fileName: true,
      displayName: true,
      pure: true,
    },
  },
  webpack(config) {
    config.resolve = {
      alias: {
        "@pages": path.resolve(__dirname, "pages"),
        "@styles": path.resolve(__dirname, "styles"),
        "@components": path.resolve(__dirname, "src/components"),
        "@constants": path.resolve(__dirname, "src/constants"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@react-query": path.resolve(__dirname, "src/react-query"),
        "@recoil": path.resolve(__dirname, "src/recoil"),
        "@types": path.resolve(__dirname, "src/types"),
      },
      ...config.resolve,
    };
    return config;
  },
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

module.exports = withInterceptStdout(nextConfig, (text) =>
  text.includes("Duplicate atom key") ? "" : text
);
