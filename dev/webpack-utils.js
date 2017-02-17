// Created by snov on 15.02.2017.
//
// Webpack configurator
//
//=========================================================================
const path = require('path');
const fs = require('fs');

const config = require('./config');
const deepmerge = require('deepmerge');

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

const EmptyPlugin = () => {};

function getFileExtenstion(filename) {
  return filename.split('.').pop();
}

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


function configure(opts, webpackOpts) {
  opts = opts || {};

  let webpackObject = Object.assign({}, webpackOpts);
  webpackObject.context = config.paths.absolute.root;

  if (webpackObject.plugins && webpackObject.plugins.length >= 1) {
    webpackObject.plugins = flatten(webpackObject.plugins);
  }

  const features = opts.features;
  if (features && features.length >= 1) {
    for (let f in features) {
      if (features.hasOwnProperty(f) && typeof features[f] == 'function') {
        const feature = features[f]();
        console.log(`Adding feature: ${feature}`);
        webpackObject = deepmerge(webpackObject, feature);
      }
    }
  }

  console.log(webpackObject);

  return webpackObject;
}

function getAssets() {
  const manifest = JSON.parse(fs.readFileSync(path.resolve(config.paths.output.client, 'manifest.json'), 'utf8'));
  const distPath = config.paths.output.dist;
  const assets = {
    scripts: [],
    styles: [],
    other: []
  };

  for (let v in manifest) {
    if (!manifest.hasOwnProperty(v)) continue;

    const asset = manifest[v];
    const ext = getFileExtenstion(asset);
    const fullName = distPath + asset;

    if (ext.match(/jsx?/)) {
      assets.scripts.push(fullName);
    } else if (ext.match(/css/)) {
      assets.styles.push(fullName);
    } else
      assets.other.push(fullName)
  }

  return assets;
}

const defaultEntryName = 'main';
const mergeOrExclude = (merge, exclude, list) => {
  let result = {};

  if (typeof list == 'string') return list;

  for (let entry in list) {
    if (!list.hasOwnProperty(entry) || entry == exclude) continue;
    if (entry == merge) {
      if (typeof list[entry] == 'string') {
        result[defaultEntryName] = list[entry];
      } else {
        for (let subEntry in list[entry]) {
          if (list[entry].hasOwnProperty(subEntry)) {
            result[subEntry] = list[entry][subEntry];
          }
        }
      }
    } else {
      result[entry] = list[entry];
    }
  }

  return result;
};

const conditionalEntry = (entries, isProduction) => {
  if (!entries) return {};

  isProduction = typeof isProduction !== 'undefined' ?
    isProduction : defaultProductionCheck(isProduction);

  let merge, exclude;

  if (isProduction) {
    merge = '__prod__';
    exclude = '__dev__';
  } else {
    merge = '__dev__';
    exclude = '__prod__';
  }

  return mergeOrExclude(merge, exclude, entries);
};

module.exports = {
  configure,
  getAssets,
  onlyProductionPlugin,
  conditionalEntry,
  flatten,

  setEntry: (args) => () => {
    return {
      entry: conditionalEntry(args)
    };
  },

  setRules: (args) => () => {
    return {
      module: {
        rules: args
      }
    }
  }

};