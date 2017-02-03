// Created by snov on 19.09.2016.

import OSNOVA from 'osnova';

module.exports = () => {

  const osnova = OSNOVA({
    master: true,
    modules: [],
    core: require('./osnova-core-config')
  });

  osnova.start(() => { console.log('I WAS CALLED FROM WORKER. GZ'); });
};