// Created by snov on 22.06.2016.

import OSNOVA from 'osnova';
import path from 'path';
import fs from 'fs';

const webpackGeneratedHtml2 = (opts) => (osnova) => {
  const app = osnova.express;
  const assetsPath = osnova.opts.core.paths.assets;
  const manifest = JSON.parse(fs.readFileSync(path.resolve(assetsPath, 'manifest.json'), 'utf8'));

  app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html');

    res.send(
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href=${manifest['index.css']}>
  <script rel="script" src=${manifest['manifest.js']}></script>
  <script rel="script" src=${manifest['vendor.js']}></script>
  <script rel="script" src=${manifest['index.js']}></script>
  <title>Osnova-react-environment application</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>`
    );
  });

  osnova.next();
};

module.exports = () => {

  const osnova = OSNOVA({
    modules: [webpackGeneratedHtml2()],

    core: require('../../config/core')
  });

  osnova.start(() => { console.log('I WAS CALLED FROM WORKER. GZ'); });
};