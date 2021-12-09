const devConfig = {
  target: ['web'],
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules|dist)/,
        use: 'babel-loader',
      },
    ],
  },
};

module.exports = devConfig;
