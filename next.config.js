/** @type {import('next').NextConfig} */
const nextMDX = require("@next/mdx");
const remarkGfm = require("remark-gfm");
const rehypePrism = require("@mapbox/rehype-prism");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = nextMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withMDX(nextConfig);

