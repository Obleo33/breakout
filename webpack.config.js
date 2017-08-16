const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, exclude: /node_modules/, 
        loader: 'babel-loader',
        query: { presets: ['es2015'] } 
      },
      { 
        test: /\.css$/, 
        loader: "style!css" 
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  }
};
