// Created by snov on 10.02.2017.
//
// Generates HTML based on Webpack bundle
//
//=========================================================================

import path from 'path';
import fs from 'fs';


import React from 'react';
/* eslint-disable no-unused-vars */
import reactDOM, { renderToString } from 'react-dom/server';
/* eslint-enable no-unused-vars */

import Caption from '../../components/caption';
import Counter from '../../components/Counter';

let v = 100;

const getCounter = <Counter value={v}
  onIncrement={() => v++ }
  onDecrement={() => v-- }
/>;

const generateHtmlString = (opts) => {
  const manifest = JSON.parse(fs.readFileSync(path.resolve(opts.assetsPath, opts.distPath, 'manifest.json'), 'utf8'));

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href=${opts.distPath+manifest['index.css']}>
  <title>Osnova-react-environment application</title>
</head>
<body>
    <div id="app"></div>
    <script>window.serverData=${v}</script>
    <script rel="script" src=${opts.distPath+manifest['manifest.js']}></script>
    <script rel="script" src=${opts.distPath+manifest['vendor.js']}></script>
    <script rel="script" src=${opts.distPath+manifest['index.js']}></script>
    ${renderToString(<Caption text="hello?"/>)}
    ${renderToString(getCounter)}
</body>
</html>
`
};

const sendHtml = (/*opts*/) => osnova => {
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