const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, "dist"),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};