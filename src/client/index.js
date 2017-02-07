// Created by snov on 27.08.2016.
import React, { Component } from 'react';
import { render } from 'react-dom';
import Caption from './components/caption';
import styles from './style.css';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <div>
      <div className={styles.main}>Hello :)</div>
      <Caption text="OPA OPA OPA PA"/>
    </div>,
    document.getElementById('app')
  );
});