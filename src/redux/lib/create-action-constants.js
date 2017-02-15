// Created by snov on 12.02.2017.
//
// Generates action constants by app/module/CONSTANT convention
// https://github.com/erikras/ducks-modular-redux
//
//=========================================================================

const getActionName = (sep, app, module, action) => {
  return app + sep + module + sep + action;
};

export default function createActionConstants(app, module, actions) {
  if (typeof actions != 'object' || typeof actions.reduce != 'function') {
    return {};
  }

  return actions.reduce((prev, curr) => {
    prev[curr] = getActionName('/', app, module, curr);
    return prev;
  }, {});
}