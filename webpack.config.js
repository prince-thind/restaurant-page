const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: 'development',
   entry: {
     index: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       template:'./src/index.html',
     }),
   ],
   devtool: 'inline-source-map',
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),

    clean: true,
    publicPath: '/',
   },
 };
