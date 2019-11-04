const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withSass({
    cssModules: true,
    webpack(config, _options) {
      config.resolve.alias['~'] = path.join(__dirname);
      return config;
    },
  }),
);
