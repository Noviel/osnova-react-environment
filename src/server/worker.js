// Created by snov on 22.06.2016.

import OSNOVA from 'osnova';
import path from 'path';
import fs from 'fs';

import React from 'react';
import reactDOM, { renderToString } from 'react-dom/server';

import Caption from '../client/components/caption';

const webpackGeneratedHtml2 = (opts) => (osnova) => {
  const app = osnova.express;
  const assetsPath = osnova.opts.core.paths.assets;
  const manifest = JSON.parse(fs.readFileSync(path.resolve(assetsPath, './dist/manifest.json'), 'utf8'));


  app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html');

    res.send(
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href=${'dist/'+manifest['index.css']}>
  <script rel="script" src=${'dist/'+manifest['manifest.js']}></script>
  <script rel="script" src=${'dist/'+manifest['vendor.js']}></script>
  <script rel="script" src=${'dist/'+manifest['index.js']}></script>
  <title>Osnova-react-environment application</title>
</head>
<body>
    <div id="app"></div>
    ${renderToString(<Caption text="hello?"/>)}
</body>
</html>`
    );
  });

  osnova.next();
};

const SocketEvents = (osnova) => {
  const io = osnova.io;
  if (io === undefined) {
    throw new Error('osnova.io is undefined. Turn on osnova-module-socket!');
  }

  io.on('client-message', (socket, payload) => {
   console.log('Recieved from client: ' + payload);
  });

  osnova.next();
};

// worker gets listen function from osnova-cluster-launcher(.worker.listen)
module.exports = (listen) => {

  const osnova = OSNOVA({
    modules: [webpackGeneratedHtml2(), SocketEvents],
    core: require('../../config/core'),
    listen
  });

  osnova.start((osnova) => {
    console.log('I WAS CALLED FROM WORKER. GZ');
  });
};