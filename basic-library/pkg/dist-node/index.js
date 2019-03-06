'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ms = _interopDefault(require('ms'));

function pandafy(input) {
  return input.replace(/\bpanda\b/gi, '🐼');
}
function sleep(time) {
  const timeInMilliseconds = ms(time);
  return new Promise(resolve => {
    setTimeout(resolve, timeInMilliseconds);
  });
}

exports.pandafy = pandafy;
exports.sleep = sleep;
