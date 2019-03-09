const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "index.html" }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "map.css" }
          }
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  watch: true
};
