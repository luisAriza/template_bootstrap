const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "js/bundle.js",
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist/"),
    },
    compress: true,
    port: 8090,
  },
  resolve: {
    extensions: [".js"],
    // alias: {
    //   "@components": path.resolve(__dirname, "src/components"),
    //   "@style": path.resolve(__dirname, "src/sass"),
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: path.join(__dirname, "public/index.html"),
      filename: "index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets/icons",
          to: "assets/icons",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
