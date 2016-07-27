module.exports = {
  entry: './src/index.js',
  output: {
      path: '../flashcards/src/main/resources/static',
      filename: 'bundle.js'
  },
  module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel'
        }
      ]
  }
};
