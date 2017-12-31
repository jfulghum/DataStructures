

var toHash = function(key, value) {
	this.key = key;
	this.value = value;
};

toHash.prototype.valueOf = function() {
	return this.key;
};

var Hash = function() {
	// should have 25 buckets
	this.numBuckets = 25;
	this.items = [];
};

// should store values
// should handle collisions
// should overwrite keys
Hash.prototype.set = function(key, value) {
	if (typeof(key) !== "string") {
		throw Error("Keys must be strings");
	}
	if (this.hasKey(key)) {
		return this.items[key];
	} else {
		return undefined;
	}
	// var toHash = this._hash(key);
	// this.items[toHash] = {key: value};
	var index = this._hash(key);
	var toHash = new Node({key:value});
	this.items[index] = toHash;
};

// should retrieve values
// should handle collisions
Hash.prototype.get = function(key) {
	// if (this.items.hasKey(key)) { //issue
	// 	return this.items[key];
	// }
	// if (this._has(key))
	var toHash = this._hash(key);
	return this.items[toHash].value.key;
};

// should return booleans for #hasKey
Hash.prototype.hasKey = function(value) {
	for (var i = 0; i < this.items.length; i++) {
		if (this.items[i].key === value) {
			return false;
		}
	}
	return true;
};

Hash.prototype._hash = function(input) {
	var sum = 0;
	for (var i = 0; i < input.length; i++) {
		sum += input.charCodeAt(i);
	}
	return sum % 25;
};
