// Created by snov on 19.09.2016.

import OSNOVA from 'osnova';

module.exports = () => {

  const osnova = OSNOVA({
    master: true,

    modules: [],

    core: require('./osnova-core-config'),

    start: function() { console.log('I WAS CALLED FROM MASTER. GZ'); }
  });

/*
  osnova.add((osnova) => {
    const dqnt = new DQNT(osnova);
    osnova.moduleReady();
  });
*/

  osnova.start();
};