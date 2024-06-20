/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
            },
        ],
    },
    env: {
        CONTENTFUL_SPACE_ID: "qvf2n9em2vsr",
        CONTENTFUL_ACCESS_TOKEN: "p81JmFfX0KD6QiotJ7ByCaBOVtpTP2FpKRhkVK8PzeA",
    }
};

export default nextConfig;
