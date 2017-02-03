// Created by snov on 03.02.2017.

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
    name: 'osnova'
  }
};

const herokuSettings = {
  threads: 1,

  host: {
    port: env.PORT || 5000,
    ip: env.NODE_IP || '0.0.0.0'
  },
  database: {
    // https://devcenter.heroku.com/articles/mongolab/
    // console command:
    // $ heroku config:get MONGODB_URI -app [your-app-name]
    uri: 'mongodb://user:passs@x.mlab.com:33966/user'
  }
};

function getDeployTargetConfig() {
  //$ heroku config:set ON_HEROKU=true
  if (env.ON_HEROKU) {
    return herokuSettings;
  }

  return localSettings;
}

const targetConfig = getDeployTargetConfig();

module.exports = exports = targetConfig;