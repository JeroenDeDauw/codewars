'use strict';

Array.prototype.splice = require('./index.js');

exports.testCase = {

	setUp: function(done) {
		done();
	},

	'null splicing': function(test) {
		test.expect(6);

		function assertNullSplice(arr) {
			var originalArr = arr.slice(0);
			test.deepEqual( arr.splice(0, 0), [] );
			test.deepEqual( arr, originalArr );
		}

		assertNullSplice([]);
		assertNullSplice([42]);
		assertNullSplice([4, 2, "foo"]);

		test.done();
	},

	'full array splicing without addition': function(test) {
		test.expect(6);

		function assertFullSplice(arr) {
			var originalArr = arr.slice(0);

			test.deepEqual(
				arr.splice(0, originalArr.length),
				originalArr,
				'Return result is full input'
			);

			test.deepEqual(
				arr,
				[],
				'Array is left with no items'
			);
		}

		assertFullSplice([]);
		assertFullSplice([42]);
		assertFullSplice([4, 2, "foo"]);

		test.done();
	},

	'full array splicing with addition': function(test) {
		test.expect(6);

		function assertFullSplice(arr, addition) {
			var originalArr = arr.slice(0);

			test.deepEqual(
				arr.splice.apply(arr, [0, originalArr.length].concat(addition)),
				originalArr,
				'Return result is full input'
			);

			test.deepEqual(
				arr,
				addition,
				'Array is equal to addition'
			);
		}

		assertFullSplice([], []);
		assertFullSplice([42], [1337]);
		assertFullSplice([4, 2, "foo"], ["a", "b"]);

		test.done();
	}

};
