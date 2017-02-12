// Created by snov on 12.02.2017.
//
// Counter react component
//
/////////////////////////////////////////////////////////////////

import React, { PropTypes } from 'react';

const counterProps = {
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};

const Counter = ({ value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

Counter.propTypes = counterProps;

export default Counter;