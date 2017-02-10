// Created by snov on 10.02.2017.
//
// Generates HTML based on Webpack bundle
//
/////////////////////////////////////////////////////////////////

import path from 'path';
import fs from 'fs';


/* eslint-disable no-unused-vars */
import React from 'react';
import reactDOM, { renderToString } from 'react-dom/server';

import Caption from '../../components/caption';

const generateHtmlString = (opts) => {
  const manifest = JSON.parse(fs.readFileSync(path.resolve(opts.assetsPath, opts.distPath, 'manifest.json'), 'utf8'));

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href=${opts.distPath+manifest['index.css']}>
  <script rel="script" src=${opts.distPath+manifest['manifest.js']}></script>
  <script rel="script" src=${opts.distPath+manifest['vendor.js']}></script>
  <script rel="script" src=${opts.distPath+manifest['index.js']}></script>
  <title>Osnova-react-environment application</title>
</head>
<body>
    <div id="app"></div>
    ${renderToString(<Caption text="hello?"/>)}
</body>
</html>
`
};

const sendHtml = opts => osnova => {
  const app = osnova.express;
  const htmlString = generateHtmlString({
    assetsPath: osnova.opts.core.paths.assets,
    distPath: './dist/'
  });

  app.get('*', (req, res) => {
    res.send(htmlString);
  });

  osnova.next();
};

export default sendHtml;
module.exports = sendHtml;