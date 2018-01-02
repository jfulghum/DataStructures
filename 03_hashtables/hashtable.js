var Hash = function() {
	this.numBuckets = 25;
	this.items = [];
	this.keys = []

	this.set = function(key, value) {

		if (typeof(key) !== "string") {
			throw "Keys must be strings";
		}
		if (this.hasKey(key)) {
			// handle collisions
		} 
		this.keys.push(key)
		var index = this._hash(key);
		this.items[index] = value;
	};
	
	this.get = function(key) {
		var index = this._hash(key);
		return this.items[index]
	};
	
	this.hasKey = function(key) {
		if (this.keys.includes(key)){
			return true;
		}
		return false;
	};

	this._hash = function(input) {
		var sum = 0;
		for (var i = 0; i < input.length; i++) {
			sum += input.charCodeAt(i);
		}
		console.log('sum', sum)
		return sum % 25;
	}
}
