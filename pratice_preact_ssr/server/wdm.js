import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js';

const webpackCompiler = webpack(webpackConfig);

export const WDM = webpackDevMiddleware(webpackCompiler, {
  lazy: false,

  watchOptions: {
    aggregateTimeout: 150,
    poll: true
  },

  publicPath: '/dist',

  stats: {
    colors: true
  },
  serverSideRender: true,
});
