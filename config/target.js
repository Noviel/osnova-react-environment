// Created by snov on 03.02.2017.
//
// deployment to specific platform settings
//

//=========================================================================

const env  = process.env;

const localSettings = {
  threads: 1,//require('os').cpus().length,

  host: {
    port: env.NODE_PORT || 3322,
    ip: env.NODE_IP || '127.0.0.1'
  },

  database: {
    uri: 'mongodb://localhost/osnovareactenvironment'
  }
};

//=========================================================================
// for development mode in heroku
// $ heroku config:set NPM_CONFIG_PRODUCTION=false
const herokuSettings = {
  threads: 1,

  host: {
    port: env.PORT || 5000,
    ip: env.NODE_IP || '0.0.0.0'
  },

  database: {
    // https://devcenter.heroku.com/articles/mongolab/
    // $ heroku config:get MONGODB_URI
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

module.exports = exports = {
  host: targetConfig.host,
  database: targetConfig.database,
  threads: targetConfig.threads
};