// Created by snov on 11.02.2017.
//
// Redux store entry point
//
//=========================================================================

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk)
);

export default configureStore;
