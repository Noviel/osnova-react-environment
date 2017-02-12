// Created by snov on 12.02.2017.
//
// Core utility library
//
///////////////////////////////////////////////////////////////

// Converts array of strings to an object with these strings as keys.
//
// @param strings { Array }
// @param initializer { any } optional, default = undefined:
//    - undefined: the every key will be set to itself
//    - function {key => value}: it will be executed on the every key to produce the value
//    - other: the every key will be set to initializer.
// @returns { Object }
//
// f(['a', 'b', 'c'], 1) == { a: 1, b: 1, c: 1 }
// f(['a', 'b', 'c']) == { a: 'a', b: 'b', c: 'c' }
// f(['a', 'b', 'c'], v => v + '!') == { a: 'a!', b: 'b!', c: 'c!' }
export function stringsToObjectKeys(strings = [], initializer = undefined) {
  if (typeof strings != 'object' || typeof strings.reduce != 'function') {
    return {};
  }

  return strings.reduce((prev, cur) => {
    if (typeof initializer == 'undefined') {
      prev[cur] = cur
    } else if (typeof initializer == 'function') {
      prev[cur] = initializer(cur);
    } else {
      prev[cur] = initializer;
    }
    return prev;
  }, {});
}