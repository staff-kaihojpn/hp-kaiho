import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

const withMDX = nextMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
})

export default withMDX(nextConfig)
