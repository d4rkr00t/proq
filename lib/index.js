/**
 * Promise Seqence.
 * Proq function gets list of functions wich return promises and get result of previous one.
 *
 * @param {Array} seq - list of functions which returns promise.
 * @param {*} params - Any params which will be passed to first function from seq array.
 *
 * @returns {Promise}
 */
'use strict';

exports.__esModule = true;
exports['default'] = proq;

function proq(seq, params) {
  if (!seq) return Promise.reject(new Error('Seq is required!'));

  seq = Array.isArray(seq) ? seq : [seq];

  var queue = Promise.resolve(params);

  queue = seq.reduce(function (q, step) {
    return q.then(function (result) {
      return step(result);
    });
  }, queue);

  return queue;
}

module.exports = exports['default'];