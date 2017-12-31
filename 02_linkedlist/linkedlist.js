var Node = function(value){
  this.value = value;
  this.next = null;
  this.previous = null;
}

var LinkedList = function() {
    this.head = undefined
    this.tail = undefined

    this.addToHead = function(value) {
      var newNode = new Node(value)
      if (this.head === undefined){
        this.tail = newNode
        this.head = newNode
      } else {
        var oldHead = this.head
        oldHead.previous = newNode
        this.head = newNode
        this.head.next = oldHead
      }
    }

    this.removeHead = function() {
      if (!this.head){
        return undefined;
      }
      var temp = this.head
      if (temp.next === null){
        this.head = null
        this.tail = null
        return temp.value
      }
      this.head = temp.next
      temp.next.previous = null
      return temp.value
    }

    this.addToTail = function(value) {
      var newNode = new Node(value)
      if (this.tail === undefined){
        this.tail = newNode
        this.head = newNode
      }
      else {
        var oldTail = this.tail
        oldTail.next = newNode
        this.tail = newNode
        this.tail.previous = oldTail
      }
    }
    this.removeTail = function() {
      if (this.tail === undefined){
        return undefined
      }
      var temp = this.tail
      if (temp.previous === null){
        this.head = null
        this.tail = null
        return temp.value
      }
      this.tail = temp.previous
      this.tail.next = null
      return temp.value
    }
    this.search = function(name) {
      var n = this.head;
      while (n){
        if (typeof(name) === "function"){
          if (name(n)){
            return n.value;
          }
        } else {
          if (n.value === name) {
            return n.value;
          } else if (typeof(n.value) === "object"){
            if (n.value.valueOf(name) === name){
              return n.value;
            }
          }
        }
        n = n.next;
      }
      return null;
    }
}
