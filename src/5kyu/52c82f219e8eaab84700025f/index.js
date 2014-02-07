Array.prototype.splice = function (from, count, insertItems) {
	var keys = getArrayKeys(this);
	var removedValues = [];
	var valuesToReAdd = [];

	for(var keyPosition in keys) {
		if (keyPosition < from) {
			continue;
		}

		var value = this[keys[keyPosition]];

		if (keyPosition < from + count) {
			removedValues.push(value);
		}
		else {
			valuesToReAdd.push(value);
		}
	}


};

function getArrayKeys(a) {
	var keys = [];

	for (var key in a) {
		keys.push(key);
	}

	return keys;
};