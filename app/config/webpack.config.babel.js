import webpack            from 'webpack';
import path               from 'path';
import webpackMerge       from 'webpack-merge';


const ROOT_PATH           = path.resolve(__dirname, "..");
const APP_PATH            = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH          = path.resolve(ROOT_PATH, 'dist');

const ownPackageNames = ['p1', 'p2', 'p3'];

const APP = {
  entry: path.resolve(APP_PATH, 'index.js'),
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  }
};

const LOADERS = [{
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: APP_PATH,
},{
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: ownPackageNames.map(name => path.resolve(ROOT_PATH, 'node_modules', name)),
}];


const COMMON = {
  module: {
    loaders: LOADERS,
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ["node_modules"],
    alias: {}
  }
};

const config = webpackMerge(APP, COMMON);

export default config;

