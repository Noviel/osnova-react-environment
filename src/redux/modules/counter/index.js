// Created by snov on 12.02.2017.
//
// Counter module
//
//========================================================================

import createActionConstants from '../../lib/create-action-constants';
import createReducer from '../../lib';

// Actions definition
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const ACTIONS = createActionConstants(
  'osnova-react-environment', 'counter',
  [ INCREMENT, DECREMENT ]
);

// Action creators
export function increment(value = 1) {
  return {
    type: ACTIONS[INCREMENT],
    value
  }
}

export function decrement(value = 1) {
  return {
    type: ACTIONS[DECREMENT],
    value
  }
}

const initialState = 0;

// Reducer
export default createReducer(initialState, {

  [ACTIONS.INCREMENT](state, action) {
    return state + action.value;
  },

  [ACTIONS.DECREMENT](state, action) {
    return state - action.value;
  }

});