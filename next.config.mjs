/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization (necessary for static export)
  },
  // Optionally, you can add other configurations like basePath or trailingSlash
};

export default nextConfig;
