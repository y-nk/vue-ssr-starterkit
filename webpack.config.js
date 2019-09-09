const { resolve } = require('path')

/* basics */
const { HotModuleReplacementPlugin } = require('webpack')
const externals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

/* SSR related */
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

/* core config */
const core = {
  mode: 'development',

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      use: 'vue-loader',
    }, {
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader']
    }]
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: resolve(__dirname, './public/*'),
      to: resolve(__dirname, '.')
    }]),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
      inject: true,
    }),
    new VueLoaderPlugin(),
  ]
}

module.exports = [{
  // client
  ...core,
  target: 'web',
  entry: resolve(__dirname, './src/client.js'),

  optimization: {
    splitChunks: {
      name: "manifest",
      minChunks: Infinity
    }
  },

  devServer: {
    hot: true,
    port: 8081,

    historyApiFallback: true,

    watchOptions: {
      poll: true
    },
  },

  plugins: [
    ...core.plugins,
    new HotModuleReplacementPlugin(),
    new VueSSRClientPlugin({
      filename: 'client-manifest.json'
    })
  ]}, {

  // server
  ...core,
  target: 'node',
  entry: resolve(__dirname, './src/server.js'),

  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  externals: externals({ whitelist: /\.css$/ }),

  plugins: [
    ...core.plugins,
  ]}, {

  // dev server
  ...core,
  target: 'node',
  devtool: 'source-map',
  entry: resolve(__dirname, './src/server.js'),

  output: {
    libraryTarget: 'commonjs2',
  },
  externals: externals({ whitelist: /\.css$/ }),

  plugins: [
    ...core.plugins,
    new VueSSRServerPlugin({
      filename: 'server-bundle.json'
    })
  ]
}]
