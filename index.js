console.log("Jay Shri Krishna");
// Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const myNode = new Node(7);
console.log(myNode);

// LinkedList
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // push method
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(77);

console.log(myLinkedList.push(4));
