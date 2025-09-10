/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ijmupkeqsqxrtbdidovc.supabase.co", 
      "images.unsplash.com",
      "data.openasset.com",
      "drive.google.com" // necessário para imagens do Google Drive
    ],
  },
};

export default nextConfig;
