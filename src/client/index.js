// Created by snov on 27.08.2016.

import React from 'react';
import { render } from 'react-dom';
import Caption from '../components/Caption';
import Counter from '../components/Counter';
import io from 'socket.io-client';

import createStore from '../redux/store';
import { increment, decrement } from '../redux/modules/counter';

import defineGlobals from '../../config/global';

defineGlobals(true);

let socket = null;


const initSocket = () => {
  socket = io('');
  socket.emit('client-message', 'Priffki :****');

  socket.on('counter-updated', (payload) => {
    if (payload === 1) {
      store.dispatch(increment());
    } else if (payload === -1) {
      store.dispatch(decrement());
    } else {
      console.log(`Unsupported payload ${payload}`);
    }
  });
};

const doIncrement = () => {
  socket.emit('counter-increment');
};

const doDecrement = () => {
  socket.emit('counter-decrement');
};

const store = createStore({
  counter: 100
});

const updateApp = () => {
  render(
    <div>
      <Caption text="OPA OPA OPA PA"/>
      <Counter value={store.getState().counter}
               onIncrement={() => { doIncrement(); }}
               onDecrement={() => { doDecrement(); }}
      />
    </div>,
    document.getElementById('counter')
  );
};

store.subscribe(updateApp);

document.addEventListener('DOMContentLoaded', () => {
  initSocket();
  updateApp();
});