// Created by snov on 16.02.2017.
//
// Application component
//
//=========================================================================

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from '../../../config/app';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Helmet {...config.head}/>
        <div>I am rendered on the server! [PID={process.pid}]</div>
        <div id='counter'></div>
      </div>
    );
  }
}