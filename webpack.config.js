const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, './src/index.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public')
  },
  devServer: {
    static: path.resolve(__dirname, './public'),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'

        ]
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
}