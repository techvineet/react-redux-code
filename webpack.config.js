// For inspiration on your webpack configuration, see:
// https://github.com/shakacode/react_on_rails/tree/master/spec/dummy/client
// https://github.com/shakacode/react-webpack-rails-tutorial/tree/master/client
/* global require module */

const webpack = require("webpack");
const { resolve } = require("path");

const ManifestPlugin = require("webpack-manifest-plugin");
const webpackConfigLoader = require("react-on-rails/webpackConfigLoader");

const configPath = resolve("..", "config");
const { devBuild, manifest, webpackOutputPath, webpackPublicOutputDir } =
  webpackConfigLoader(configPath);

const Dotenv = require("dotenv-webpack");

const config = {

  context: resolve(__dirname),

  entry: {
    "babel-bundle": [
      "es5-shim/es5-shim",
      "es5-shim/es5-sham",
      "babel-polyfill"
    ],
    "auth-bundle": "./app/startup/auth",
    "users-profile-bundle": "./app/startup/users-profile"
  },

  output: {
    // Name comes from the entry section.
    filename: "[name]-[hash].js",

    // Leading slash is necessary
    publicPath: `/${webpackPublicOutputDir}`,
    path: webpackOutputPath,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new Dotenv({
      path: "../.env.development", // Path to .env file (this is the default)
      safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // use "development" unless process.env.NODE_ENV is defined
      DEBUG: false,
      API_URL: null,
      HOST_URL: null
    }),
    new ManifestPlugin({ fileName: manifest, writeToFileEmit: true })
  ],

  module: {
    rules: [
      {
        test: require.resolve("react"),
        use: {
          loader: "imports-loader",
          options: {
            shim: "es5-shim/es5-shim",
            sham: "es5-shim/es5-sham",
          },
        },
      },
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=25000"
      }
    ],
  },
};

module.exports = config;

if (devBuild) {
  console.log("Webpack dev build for Rails"); // eslint-disable-line no-console
  module.exports.devtool = "eval-source-map";
} else {
  console.log("Webpack production build for Rails"); // eslint-disable-line no-console
}
