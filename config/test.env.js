'use strict';
const merge = require('webpack-merge');
const devEnv = require('./dev.env');

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  BASE_API: '"http://10.2.64.230:8090"',
  APP_ORIGIN: '""'
});
