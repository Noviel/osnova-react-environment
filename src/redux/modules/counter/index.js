// Created by snov on 12.02.2017.
//
// Counter module
//
/////////////////////////////////////////////////////////////////

import createActionConstants from '../../lib/create-action-constants';
import createReducer from '../../lib';

/////////////////////////////////////////////////////////////////
// Actions definition
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const ACTIONS = createActionConstants(
  'osnova-react-environment', 'counter',
  {
    INCREMENT, DECREMENT
  }
);

/////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////
// Reducer
export default createReducer({value: 0}, {

  [ACTIONS.INCREMENT](state, action) {
    return Object.assign({}, state, { value: state.value + action.value });
  },

  [ACTIONS.DECREMENT](state, action) {
    return Object.assign({}, state, { value: state.value - action.value });
  }

});