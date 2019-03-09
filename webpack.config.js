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
        test: /\.(html|css|svg|png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]" }
          }
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  watch: true
};
