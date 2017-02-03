// Created by snov on 27.08.2016.
import React, { Component } from 'react';
import { render } from 'react-dom';
import Caption from './components/caption';
import styles from './style.css';

class Sosok {
  static obs = { value: 1800 };

  static message() {
    return Sosok.obs;
  }

  constructor(what = 'that!') {

  }
}

document.addEventListener('DOMContentLoaded', () => {
  const c = new Sosok();
  console.log(styles, '?????');
  render(
    <div>IT IS ADVANCED OSNOVA APPLICATION WITH CONFIGURED WEBPACK FOR WORK WITH REACT
      <Caption text="OPA OPA OPA PA"/>
    </div>,
    document.getElementById('app')
  );
});