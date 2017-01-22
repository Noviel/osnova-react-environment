// Created by snov on 30.08.2016.

const path = require('path');
const env  = process.env;

//==============================================================
// deployment to specific platform settings
//==============================================================
const localSettings = {
  threads: 1,//require('os').cpus().length,

  host: {
    port: env.NODE_PORT || 3333,
    ip: env.NODE_IP || '127.0.0.1'
  },

  database: {
    path: 'mongodb://localhost/',
    name: 'dequartum'
  }
};

const herokuSettings = {
  threads: 1,

  host: {
    port: env.PORT || 5000,
    ip: env.NODE_IP || '0.0.0.0'
  },
  database: {
    uri: 'mongodb://heroku_dmjt0lw7:imacvsv68kif7j9k47s5ec45u6@ds033966.mlab.com:33966/heroku_dmjt0lw7'
  }
};

const openShiftSettings = {
  threads: 1,

  host: {
    port: env.NODE_PORT || 8080,
    ip: env.NODE_IP || '127.0.0.1'
  },
  database: {
    path: env.MONGODB_URL,
    name: 'dequartum'
  }
};

function getDeployTargetConfig() {
  if (env.OPENSHIFT_APP_UUID) {
    return openShiftSettings;
  } else if (env.ON_HEROKU) {
    return herokuSettings;
  }

  return localSettings;
}

const targetConfig = getDeployTargetConfig();

module.exports = exports = targetConfig;