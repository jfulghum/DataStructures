

var BinarySearchTree = function(value) {
	var instance = Object.create(BinarySearchTree.prototype);
		
    instance.value = value;
    // a BST where all values are higher than than the current value.
    instance.right = undefined;
    // a binary search tree (BST) where all values are lower than than the current value.
    instance.left = undefined;
		
  return instance
	// should have methods named 'insert', 'contains', and 'depthFirstForEach"
	// should make nodes on the correct branches
	// should sort values when adding
	// should return true if a contains is passed a value in the tree
}
BinarySearchTree.prototype.insert = function(value) {
		var node = BinarySearchTree(value);
	  function recurse(bst) {
	    if (bst.value > value && bst.left === undefined) {
	      bst.left = node;
	    } else if (bst.value > value) {
	      recurse(bst.left);
	    } else if (bst.value < value && bst.right === undefined) {
	      bst.right = node;
	    } else if (bst.value < value) {
	      recurse(bst.right);
	    }
	  }

	  recurse(this);
	};

BinarySearchTree.prototype.contains = function(value) {
		var doesContain = false;
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
	  function recurse(bst) {
	    if (bst.value === value) {
	      doesContain = true;;
	    } else if (bst.left !== undefined && value < bst.value) {
	      recurse(bst.left);
	    } else if (bst.right !== undefined && value > bst.value) {
	      recurse(bst.right)
	    }
	  }

	  recurse(this);
	  return doesContain;
	};
	// should run depth first when depthFirstForEach() is run
BinarySearchTree.prototype.depthFirstForEach = function(callback) {
		function recurse(bst) {
		 callback.call(bst, bst.value)

		 if (bst.left !== undefined) {
			 recurse(bst.left)
		 }

		 if (bst.right !== undefined) {
			 recurse(bst.right);
		 }
	 }

 recurse(this);
};
	// should take values and report size correctly
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
	// should run breadth first when breadthFirstForEach() is run
BinarySearchTree.prototype.breadthFirstForEach = function() {

};
