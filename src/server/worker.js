// Created by snov on 22.06.2016.

import OSNOVA from 'osnova';
import routes from './routes';

module.exports = () => {

  const osnova = OSNOVA({
    modules: [(osnova) => {
      const app = osnova.express;

      app.get('*', (req, res) => {
        res.render('index');
      });

      osnova.moduleReady();
    }],
    start: function() { console.log('I WAS CALLED FROM WORKER. GZ'); },
    core: require('./osnova-core-config')
  });

  osnova.start();
};