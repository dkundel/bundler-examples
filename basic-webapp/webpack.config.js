const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    // Tells Webpack which file to start the process with
    main: './src/main.ts',
  },
  module: {
    // Specifies rules for Webpack on how to treat different
    // file extensions and how to treat them as modules
    rules: [
      {
        // anything that ends in .ts or .tsx shoud be loaded with ts-loader
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        // anything ending with .scss should be treated with these loaders
        test: /\.scss$/,
        use: [
          {
            // Alternative for the generic "style-loader"
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // Actual CSS loader
            loader: 'css-loader',
          },
          {
            // The actual SASS loader
            loader: 'sass-loader',
            options: {
              // Use the `sass` implementation instead of `node-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    // inform Webpack about the .ts and .tsx extensions
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    // Specify the output file path
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // This plugin will take all CSS it encounters and bundle it into a CSS file
    // rather than bundling it into the JS (default)
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    // This plugin will take the `src/index.html` file as input
    // and then output a new `index.html` with the bundle.js and styles
    // injected in to it
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ],
};
