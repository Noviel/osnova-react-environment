// Created by snov on 12.02.2017.
//
// Counter react component
//
//=========================================================================

import React, { PropTypes } from 'react';
import styles from './style.css';

const counterProps = {
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};

const Counter = ({ value, onIncrement, onDecrement}) => (
  <div>
    <h1 className={styles.label}>{value}</h1>
    <button className={styles.button} onClick={onIncrement}>+</button>
    <button className={styles.button} onClick={onDecrement}>-</button>
  </div>
);

Counter.propTypes = counterProps;

export default Counter;