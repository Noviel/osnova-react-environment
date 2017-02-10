// Created by snov on 19.09.2016.

import OSNOVA from 'osnova';

const masterCore = Object.assign({}, require('../../config/core'));

masterCore.modules = {};
masterCore.modules.express = false;
masterCore.modules.socketio = false;
masterCore.modules.session = false;

module.exports = (listen) => {

  const osnova = OSNOVA({
    master: true,
    modules: [],
    core: masterCore,
    listen
  });

  osnova.start(() => { console.log('I WAS CALLED FROM WORKER. GZ'); });
};