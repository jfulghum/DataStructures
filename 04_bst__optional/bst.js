var BinarySearchTree = function(value) {
	var instance = Object.create(BinarySearchTree.prototype);
    instance.value = value;
    instance.right = undefined;
    instance.left = undefined;
  return instance
}

BinarySearchTree.prototype.insert = function(value) {
		var node = BinarySearchTree(value);
	  function recurse(bst) {
	    if (bst.value > value && !bst.left) {
	      bst.left = node;
	    } else if (bst.value > value) {
	      recurse(bst.left);
	    } else if (bst.value < value && !bst.right) {
	      bst.right = node;
	    } else if (bst.value < value) {
	      recurse(bst.right);
	    }
	  }
	  recurse(this);
	};

BinarySearchTree.prototype.contains = function(value) {
		var doesContain = false;
	  function check(bst) {
	    if (bst.value === value) {
	      doesContain = true;;
	    } else if (bst.left && value < bst.value) {
	      check(bst.left);
	    } else if (bst.right && value > bst.value) {
	      check(bst.right)
	    }
	  }
	  check(this);
	  return doesContain;
	};

BinarySearchTree.prototype.depthFirstForEach = function(callback) {
		function dfs(bst) {
		 callback.call(bst, bst.value)
		 if (bst.left) {
			 dfs(bst.left)
		 }
		 if (bst.right) {
			 dfs(bst.right);
		 }
	 }
 dfs(this);
};

BinarySearchTree.prototype.size = function() {
	var node = this;
	 var size = 0
	 function count(node){
		 if (node.value) {
			 size ++
			 if (node.left) {
				 count(node.left);
			 }
			 if (node.right) {
			 count(node.right)
		 	}
		}
	 }
	 count(node)
	 return size
};

BinarySearchTree.prototype.breadthFirstForEach = function(callback) {
	var node = this;
	var queue = [node];
	while (node = queue.shift()){
		callback.call(node, node.value)
		node.left && queue.push(node.left)
		node.right && queue.push(node.right)
	}
};