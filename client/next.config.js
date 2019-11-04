const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = {
  // webpack (config, _options) {
  //   config.resolve.alias['~'] = __dirname;
  //   return config;
  // },
  ...withSass({
    cssModules: true,
  }),
}
