// Created by snov on 27.08.2016.

import React from 'react';
import { render } from 'react-dom';
import Caption from './components/caption';
import styles from './style.css';

const io = require('socket.io-client');
let socket = null;

document.addEventListener('DOMContentLoaded', () => {

  socket = io('');
  socket.emit('client-message', 'Priffki :****');

  render(
    <div>
      <div className={styles.main}>Hello :)</div>
      <Caption text="OPA OPA OPA PA"/>
    </div>,
    document.getElementById('app')
  );
});