/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/test",
    // output: "export",  // <=== enables static exports
    // reactStrictMode: true,
};

module.exports = {
    output: 'export',
    trailingSlash: true,
    basePath: '/UmebWebsite',
};