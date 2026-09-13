/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
};
module.exports = Object.assign(nextConfig, { async headers(){ return [ { source: "/:path*.html", headers: [{ key: "Cache-Control", value: "no-cache, no-store, must-revalidate, max-age=0" }] }, { source: "/:path((?!_next/static|_next/image|favicon.ico|icons|assets).*)", headers: [{ key: "Cache-Control", value: "no-cache, no-store, must-revalidate, max-age=0" }] }, { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] } ]; } });
