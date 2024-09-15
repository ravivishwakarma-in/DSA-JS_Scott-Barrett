console.log("Jay Shri Krishna");
// Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

  // pop method
  pop() {
    if (!this.head) {
      // if there is no node in the LinkedList
      return undefined;
    } else {
      // if there are multiple nodes in the LinkedList
      let temp = this.head;
      let pre = this.head;
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        // if there is one node in the LinkedList
        this.head = null;
        this.tail = null;
      }
      return temp;
    }
  }

  // unshift method
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // shift method
  shift() {
    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return temp;
    }
  }

  // get method
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}

const myLinkedList = new LinkedList(0);
console.log(myLinkedList.push(1));
console.log(myLinkedList.push(2));
console.log(myLinkedList.push(3));
// console.log(myLinkedList.pop());
// console.log(myLinkedList.unshift(6));
// console.log(myLinkedList.shift());
console.log(myLinkedList.get(-1));
console.log(myLinkedList);
