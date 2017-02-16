// Created by snov on 15.02.2017.
//
// Webpack configurator
//
//=========================================================================
const path = require('path');
const fs = require('fs');

const config = require('./config');

/*
function merge(target, array) {
  let result = [];
  if (target && target.length >= 1) {
    result = [].concat.apply([], target);
  }
  if (array && array.length >= 1) {
    result = [].concat.apply([], result, array);
  }
  return result;
}
*/

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}


function getFileExtenstion(filename) {
  return filename.split('.').pop();
}

const EmptyPlugin = () => {};

const defaultProductionCheck = (value) => {
  if (typeof value == 'undefined')
    return process.env.NODE_ENV === 'production';
  return value;
};

const onlyProductionPlugin = (plugins, isProduction) => {
  isProduction = defaultProductionCheck(isProduction);

  if (!plugins || !isProduction) return EmptyPlugin;

  return flatten(plugins);
};


function configureWebpack(opts, webpackOpts) {
  opts = opts || {};

  const webpackObject = Object.assign({}, webpackOpts);
  webpackObject.context = config.paths.absolute.root;

  if (webpackObject.plugins && webpackObject.plugins.length >= 1) {
    webpackObject.plugins = flatten(webpackObject.plugins);
  }

  return webpackObject;
}

function getAssets() {
  const manifest = JSON.parse(fs.readFileSync(path.resolve(config.paths.output.client, 'manifest.json'), 'utf8'));
  const assets = {
    distPath: config.paths.output.distPath,
    scripts: [],
    styles: [],
    other: []
  };

  for (let a in manifest) {
    if (!manifest.hasOwnProperty(a)) continue;

    const asset = manifest[a];
    const ext = getFileExtenstion(asset);
    if (ext.match(/jsx?/)) {
      assets.scripts.push(asset)
    } else if (ext.match(/css/)) {
      assets.styles.push(asset);
    } else
      assets.other.push(asset)
  }

  return assets;
}

const mergeExclude = (merge, exclude, list) => {

  let result = {};

  for (let entry in list) {
    if (!list.hasOwnProperty(entry) || entry == exclude) continue;
    if (entry == merge) {
      for (let subEntry in list[entry]) {
        if (list[entry].hasOwnProperty(subEntry))
          result[subEntry] = list[entry][subEntry];
      }
    } else {
      result[entry] = list[entry];
    }
  }

  return result;
};

const mergeExcludeEntries = (list, production) => {
  let merge, exclude;

  if (production) {
    merge = '__prod__';
    exclude = '__dev__';
  } else {
    merge = '__dev__';
    exclude = '__prod__';
  }

  return mergeExclude(merge, exclude, list);
};

const conditionalEntries = (opts, isProduction) => {
  opts = opts || {};
  isProduction = defaultProductionCheck(isProduction);

  if (isProduction) return mergeExcludeEntries(opts, true);

  return mergeExcludeEntries(opts, false);
};

module.exports = {
  configure: configureWebpack,
  getAssets: getAssets,
  onlyProductionPlugin: onlyProductionPlugin,
  entries: conditionalEntries
};