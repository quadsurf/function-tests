window.onload = function() {
  var assert = chai.assert;
  mocha.setup('tdd');

  suite('sum', function() {
    test('adds a bunch of numbers', function() {
      assert.strictEqual(sum([]), 0);
      assert.strictEqual(sum([1, 2, 3, 4]), 10);
      assert.strictEqual(sum([1, -1, 2, -3]), -1);
    });
  });

  suite('product', function() {
    test('multiplies bunch of numbers', function() {
      assert.strictEqual(product([]), 1);
      assert.strictEqual(product([1, 2, 3, 4]), 24);
      assert.strictEqual(product([1, 2, 3, 4, 0]), 0);
    });
  });

  suite('concatenate', function() {
    test('concatenates an array of strings', function() {
      assert.strictEqual(concatenate([]), '');
      assert.strictEqual(concatenate(['Hello', 'world', 'Seattle']), 'HelloworldSeattle');
    });
  });

  suite('filterPassingGrades', function() {
    test('filters all passing grades', function() {
      assert.deepEqual(filterPassingGrades([]), []);
      assert.deepEqual(filterPassingGrades([100, 45, 90, 60]), [100, 90]);
      assert.deepEqual(filterPassingGrades([100, 45, 70]), [100, 70]);
      assert.deepEqual(filterPassingGrades([0, 45, 40]), []);
    });
  });

  suite('flatten', function() {
    test('flattens an array of arrays', function() {
      assert.deepEqual(flatten([]), []);
      assert.deepEqual(flatten([[1], [2], [3], [4]]), [1, 2, 3, 4]);
      assert.deepEqual(flatten([[1], [2, 3], [4]]), [1, 2, 3, 4]);
      assert.deepEqual(flatten([[1], [2], [3, [[4]]]]), [1, 2, 3, [[4]]]);
    });
  });

  suite('max', function() {
    test('calculates the max number in an array', function() {
      assert.strictEqual(max([1, 2, 3, 4, 3]), 4);
      assert.strictEqual(max([1, 2, 3, -4, 3]), 3);
      assert.strictEqual(max([]), -Infinity);
    });
  });

  suite('min', function() {
    test('calculates the min number in an array', function() {
      assert.strictEqual(min([1, 2, 3, 4, 3]), 1);
      assert.strictEqual(min([1, 2, 3, -4, 3]), -4);
      assert.strictEqual(min([]), Infinity);
    });
  });

  suite('fromPairs', function() {
    test('returns a new object where each key-value pair is an element in an array', function() {
      assert.deepEqual(fromPairs([['a', 1]]), {a: 1});
      assert.deepEqual(fromPairs([['a', 1], ['b', 2]]), {a: 1, b: 2});
      assert.deepEqual(fromPairs([]), {});
    });
  });

  suite('pluck', function() {
    test('grabs the values from an array of object for a specific key', function() {
      var stooges = [
        { name: 'moe', age: 40 },
        { name: 'larry', age: 50 },
        { name: 'curly', age: 60 }
      ];

      assert.deepEqual(pluck([], 'foo'), []);
      assert.deepEqual(pluck(stooges, 'name'), ['moe', 'larry', 'curly']);
    });
  });

  mocha.run();
};
