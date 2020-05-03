const path = require("path");

module.exports = {
  context: __dirname,
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    mainFields: ["module", "webpack", "web", "main"],
    extensions: [".js", ".jsx", ".json", "*"],
  },
};
