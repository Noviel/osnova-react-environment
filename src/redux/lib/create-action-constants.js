// Created by snov on 12.02.2017.
//
// Generates action constants by app/module/CONSTANT convention
// https://github.com/erikras/ducks-modular-redux
//
/////////////////////////////////////////////////////////////////

const getActionName = (sep, app, module, action) => {
  return app + sep + module + sep + action;
};

export default function createActionConstants(app, module, actions) {
  Object.keys(actions).forEach((e) => {
    actions[e] = getActionName('/', app, module, actions[e]);
  });
  return actions;
}