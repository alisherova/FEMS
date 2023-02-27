/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    ignoreDuringBuilds: true,
    ignoreBuildErrors: true,
    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "",
                port: "",
                pathname: "/source/**"
            },
            {
                protocol: "https",
                hostname: "",
                port: "",
                pathname: "/source/**"
            }
        ]
    }
};

module.exports = nextConfig;
