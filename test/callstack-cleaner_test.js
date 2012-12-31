var callstack_cleaner = require('../lib/index.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['callstack-cleaner'] = {
  setUp: function(done) {
    done();
  },
  'handles empty string': function(t){
    var s = "";
    t.equal(callstack_cleaner(s), s);
    t.done();
  },
  'handles string': function(t){
    var s = "bla bla\nblabla";
    t.equal(callstack_cleaner(s), s);
    t.done();
  },
  'handles empty error object': function(t){
    var s = "";
    t.equal(callstack_cleaner(new Error(s)), s);
    t.done();
  },
  'handle error object': function(t){
    var s = "bla bla\nblabla";
    t.equal(callstack_cleaner(new Error(s)), s);
    t.done();
  },
  'with callstack inside error message': function(t){
    // Extracted from node_redis
    // https://github.com/mranney/node_redis/blob/c3ea30ebea7b9eddba3534fcd357e3ec04fd9683/index.js#L267
    var _err = new Error("plop");
    var err = new Error("Redis reply parser error: " + _err.stack);
    t.equal(callstack_cleaner(err), "Redis reply parser error: Error: plop");
    t.done();
  }
};
