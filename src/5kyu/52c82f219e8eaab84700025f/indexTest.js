'use strict';

Array.prototype.splice = require('./index.js');

exports.testCase = {

	setUp: function(done) {
		done();
	},

	'no args': function(test) {
		test.expect(1);

		var a = [];
		test.deepEqual( a.splice(), [42]);
		test.done();
	}

};
