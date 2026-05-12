import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "xnexum.com.br" }],
        destination: "https://www.xnexum.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
