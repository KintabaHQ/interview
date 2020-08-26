"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// https://developer.mozilla.org/en/docs/Web/API/Fetch_API
function exampleFetch() {
  return _exampleFetch.apply(this, arguments);
}

function _exampleFetch() {
  _exampleFetch = _asyncToGenerator(function* () {
    var result = yield fetch('/api');
    return result.text();
  });
  return _exampleFetch.apply(this, arguments);
}

var App = () => {
  // React is in the `React` global, e.g.
  var [foo, setFoo] = React.useState("foo");
  return /*#__PURE__*/React.createElement("strong", null, "Your app goes here! ", foo);
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#root'));