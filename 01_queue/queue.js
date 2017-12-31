var Queue = function() {
  var size = 0
  var head = 0
  var tail = 0 
  var arr = []
  this.enqueue = function(item) {
    arr[tail] = item
    tail++
    size++
  }
  this.dequeue = function() {
    if (!size){
      return undefined
    }
    var item = arr[head]
    head++
    size--
    return item
  }
  this.size = function() {
    return size
  }

}