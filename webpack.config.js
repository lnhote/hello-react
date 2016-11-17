const CWD = process.cwd()
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  debug: true,

  devtool: 'eval-source-map',

  entry: {
    'main': [
      path.resolve(CWD, 'src', 'pages')
    ],
    'vendor': ['react', 'react-dom', 'react-router', 'antd']
  },
  output: {
    path: path.resolve(CWD, 'dist'),
    publicPath: '/',
    chunkFilename: 'js/[name]-[chunkhash:8].js',
    filename: 'js/[name].js'
  },

  devServer: {
    host: 'localhost',
    inline: true,
    hot: true,
    port: 8081,
    colors: true,
    historyApiFallback: true,
    contentBase: path.resolve(CWD, 'devServer')
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: [path.resolve(CWD, 'node_modules')]
      },
      {
        test: /\.jsx?$/,
        exclude: path.resolve(CWD, 'node_modules'),
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer',
        include: [path.resolve(CWD, 'less')]
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer!less?sourceMap' +
          '&includePaths[]=' + path.resolve(CWD, 'node_modules') +
          '&includePaths[]=' + path.resolve(CWD, 'src')),
        include: [path.resolve(CWD, 'src/less')]
      },
      {
        test: /\.less$/,
        exclude: [path.resolve(CWD, 'src/less')],
        loader: 'style!css!autoprefixer!less?sourceMap' +
          '&includePaths[]=' + path.resolve(CWD, 'node_modules') +
          '&includePaths[]=' + path.resolve(CWD, 'src')
      }
    ]
  },

  resolveLoader: {
    root: path.resolve(CWD, 'node_modules'),
    fallback: [path.resolve(CWD, 'node_modules')]
  },

  resolve: {
    root: CWD,
    alias: {
      less: 'src/less',
      assets: 'src/assets',
      pages: 'src/pages',
      components: 'src/components'
    },
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.json', '.jsx', '.css', '.less'],
    fallback: [path.resolve(CWD, 'node_modules')]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'js/commons.bundle.js',
      minChunks: 3, // shared within at least 3 modules
      minSize: 10 * 1000, // 10k
      children: true // include all chunks
    }),
    new ExtractTextPlugin('css/[name]-[contenthash:8].css'),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['main', 'vendor'],
      filename: 'index.html',
      title: 'HelloReact',
      keywords: '',
      description: '',
      template: path.resolve(CWD, 'src/assets/template.html'),
      favicon: ''
    })
  ]
}
