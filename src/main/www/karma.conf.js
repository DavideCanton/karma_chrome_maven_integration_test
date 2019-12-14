var baseConf = require('./karma.base-config');

module.exports = function (config) {
  var conf = baseConf(config);
  config.set(baseConf);
};
