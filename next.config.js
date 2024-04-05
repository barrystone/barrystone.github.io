const debug = process.env.NODE_ENV !== "production";

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  assetPrefix: !debug ? "" : "",
  output: "export",
};
