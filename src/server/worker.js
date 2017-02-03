// Created by snov on 22.06.2016.

import OSNOVA from 'osnova';
import routes from './routes';

import path from 'path';

module.exports = () => {

  const osnova = OSNOVA({
    modules: [(osnova) => {
      const app = osnova.express;
      const manifest = require(path.resolve(osnova.opts.core.paths.absolute.assets, 'manifest.json'));

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
            <title>Huiuuu</title>
          </head>
          <body>
              <div id="app"></div>
          </body>
          </html>`
        );

      });

      osnova.next();
    }],

    core: require('./osnova-core-config')
  });

  osnova.start(() => { console.log('I WAS CALLED FROM WORKER. GZ'); });
};