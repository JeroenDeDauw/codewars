'use strict';

// http://www.codewars.com/dojo/katas/52c82f219e8eaab84700025f/train/javascript

Array.prototype.splice = function (from, count) {
	function getArrayKeys(a) {
		var keys = [];

		for (var key in a) {
			keys.push(key);
		}

		return keys;
	}

	var keys = getArrayKeys(this);
	var poppedValues = [];

	for(var keyPosition in keys) {
		if (keyPosition < from) {
			continue;
		}

		poppedValues.push(this.pop());
	}

	var removedValues = [];

	for (var i = count ; i > 0 ; i-- ) {
		removedValues.unshift(poppedValues.shift());
	}

	var args = Array.prototype.slice.call(arguments);
	args.shift();
	args.shift();

	for (var n in args) {
		this.push(args[n]);
	}

	for (var x in poppedValues) {
		this.unshift(poppedValues[x]);
	}

	return removedValues;
};


module.exports = Array.prototype.splice;