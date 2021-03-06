/**
 * Promise Seqence.
 * Proq function gets list of functions wich return promises and get result of previous one.
 *
 * @param {Array} seq - list of functions which returns promise.
 * @param {*} params - Any params which will be passed to first function from seq array.
 *
 * @returns {Promise}
 */
export default function proq(seq, params) {
  if (!seq) return Promise.reject(new Error('Seq is required!'));

  seq = Array.isArray(seq) ? seq : [seq];

  let queue = Promise.resolve(params);

  queue = seq.reduce((q, step) => q.then(result => step(result)), queue);

  return queue;
}
