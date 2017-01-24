// Created by snov on 22.01.2017.

/////////////////////////////////////////
//
// Container
//
/////////////////////////////////////////

function _Container(val) {
  this.val = val;
}

_Container.prototype.map = function(f) {
  return Container(f(this.val));
};

function Container(val) {
  return new _Container(val);
}

/////////////////////////////////////////
//
// Maybe
//
/////////////////////////////////////////

function _Maybe(val) {
  this.val = val;
}

function Maybe(val) {
  return new _Maybe(val);
}

_Maybe.prototype.map = function(f) {
  const isValid = this.val !== undefined && this.val !== null;
  return isValid ? Maybe(f(this.val)) : Maybe(null);
};

/////////////////////////////////////////
//
// Functions
//
/////////////////////////////////////////

const curry = fn => {
  return (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...next) => {
      return fn(...args, ...next);
    }
  }
};

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const map = curry((f, obj) => {
  return obj.map(f);
});

/////////////////////////////////////////
//
// App
//
/////////////////////////////////////////


const people = [
  {name: 'mo', data: { value: 4}},
  {name: 'sosoosa', data: { value: 8}},
  {name: 'ableham-atzi', data: { value: 15}}
];


const get = (prop, obj) => obj[prop];
const cget = curry(get);
const len = x => x.length;
const clen = curry(len);
const checkValue = x => x < 3 ? '<3' : '>3';
const clog = curry(console.log);

console.log(people.map(compose(checkValue, clen, cget('name'))));