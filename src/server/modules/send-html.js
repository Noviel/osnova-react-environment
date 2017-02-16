// Created by snov on 10.02.2017.
//
// Generates HTML based on Webpack bundle
//
//=========================================================================

import React from 'react';
/* eslint-disable no-unused-vars */
import reactDOM, { renderToString } from 'react-dom/server';
/* eslint-enable no-unused-vars */

import App from '../../components/App';
import Html from '../../components/Html';

import { getAssets } from '../../../dev/webpack-utils';

const sendHtml = (/*opts*/) => osnova => {
  const app = osnova.express;

  app.get('*', (req, res) => {
    res.send('<!doctype html>\n' + renderToString(<Html assets={ getAssets() } component={<App/>}/>));
  });

  osnova.next();
};

export default sendHtml;