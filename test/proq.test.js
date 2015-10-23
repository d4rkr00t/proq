import proq from '../src/lib/';

describe('proq', () => {
  it('should return promise', () => {
    assert.isFunction(proq([]).then);
  });

  it('should be rejected if there is no sequence passed to proq', done => {
    proq().catch(() => done());
  });

  it('should pass initial params to first function', done => {
    const params = {};
    const f1 = p => {
      assert.equal(p, params);
      done();
    };

    proq([f1], params).then(null, done);
  });

  it('should wrap not array sequence into array', done => {
    proq(() => done()).then(null, done);
  });

  it('should call all steps of sequence in correct order', done => {
    const params = [];
    const seq = new Array(10).fill('').map((item, i) => p => {
      p.push(i);

      if (i % 2 === 0) return p;

      return new Promise(resolve => setTimeout(() => resolve(p), 5));
    });

    proq(seq, params)
      .then((result) => {
        assert.deepEqual(result, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        done();
      }, done);
  });
});
