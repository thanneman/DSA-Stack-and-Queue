const Stack = require('./stack')

// 6. Create a queue using Singly linked list
class _Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    };
  };
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    };
  
    enqueue(data) {
      const node = new _Node(data);
  
      if (this.first === null) {
        this.first = node;
      }
  
      if (this.last) {
        this.last.next = node;
      }
  
      this.last = node;
    }
  
    dequeue() {
      if (this.first === null) {
        return;
      }
  
      const node = this.first;
      this.first = this.first.next;
  
      if (node === this.last) {
        this.last = null;
      }
  
      return node.value;
    };
  };

  function peek(queue) {
    if (!queue.first) {
      return 'Queue is Empty';
    }
  
    return queue.first.value;
  }
  
  function isEmpty(queue) {
    if (queue.first === null) {
      return true;
    }
  
    return false;
  }
  
function display(queue) {
    currNode = queue.first;
    str = '';

    if (!queue.first) {
        return null;
    };

    while (currNode) {
        str = str + currNode.value + ' ';
        currNode = currNode.next;
    }

    return str;
}

const starTrek = new Queue();
starTrek.enqueue('Kirk');
starTrek.enqueue('Spock');
starTrek.enqueue('Uhura');
starTrek.enqueue('Sulu');
starTrek.enqueue('Checkov');

console.log('Peek: ', peek(starTrek));
console.log('isEmpty: ', isEmpty(starTrek));
console.log('Display: ', display(starTrek));

// Create a queue Class using Doubly List List
console.log("Doubly Linked list");

class _DoubleNode {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  };
};

class DoubleLinkedQueue {
  constructor() {
    this.first = null;
    this.last = null;
  };

  // insert at the end
  enqueue(value) {
    if (!this.last) {
      this.last = new _DoubleNode(value, null, null);
      this.first = this.last;
    } else {
      this.last.next = new _DoubleNode(value, null, this.last);
      this.last = this.last.next;
    }
  }
  // remove from the start
  dequeue() {
    if (!this.first) {
      console.log("No more values in queue");
      return;
    } else {
      if (this.first === this.last) {
        this.last = null;
      }

      const tmp = this.first;
      this.first = this.first.next;
      return tmp.value;
    };
  };
};

let dbl_starTrekQ = new DoubleLinkedQueue();
dbl_starTrekQ.enqueue("Kirk");
dbl_starTrekQ.enqueue("Spock");
dbl_starTrekQ.enqueue("Uhura");
dbl_starTrekQ.enqueue("Sula");
dbl_starTrekQ.enqueue("Checkov");
console.log("dbl_starTrekQ");
display(dbl_starTrekQ);
console.log(peek(dbl_starTrekQ));


// 8. Queue implementation using a stack
console.log("Queue using Stack");

class StackQueue {
  constructor() {
    this.stack = new Stack();
  }

  // insert at the end
  enqueue(value) {
    let tmp = new Stack();

    // push all onto temp stack
    while (this.stack.top) {
      tmp.push(this.stack.pop());
    }

    // push new val onto beginning of our stack
    this.stack.push(value);

    // push everything back on top of stack
    while (tmp.top) {
      this.stack.push(tmp.pop());
    }
  }

  // remove from the start
  dequeue() {
    return this.stack.pop();
  }
}

let stack_starTrekQ = new StackQueue();
stack_starTrekQ.enqueue("Kirk");
stack_starTrekQ.enqueue("Spock");
stack_starTrekQ.enqueue("Uhura");
stack_starTrekQ.enqueue("Sula");
stack_starTrekQ.enqueue("Checkov");
console.log("stack_starTrekQ");
display(stack_starTrekQ.stack);
console.log(stack_starTrekQ.dequeue());

// 9. Square dance pairing
console.log("Square Dance Pairs");

class SquareDancePairs {
  constructor() {
    this.men = new Queue();
    this.women = new Queue();
    this.menCount = 0;
    this.womenCount = 0;
  };

  addPerson(name, isMale) {
    if (isMale) {
      this.men.enqueue(name);
      this.menCount++;
    } else {
      this.women.enqueue(name);
      this.womenCount++;
    }

    // just added male or female... check to see if we can make a pair
    if (this.menCount >= 1 && this.womenCount >= 1) {
      console.log(`Pairing ${this.women.dequeue()} (F) with ${this.men.dequeue()} (M). Go square dance!`);
      this.menCount--;
      this.womenCount--
    } else if (this.menCount > 0) {
      console.log(`There ${this.menCount > 1 ? "are" : "is"} ${this.menCount} ${this.menCount > 1 ? "men" : "man"} waiting to dance`);
    } else {
      console.log(`There ${this.womenCount > 1 ? "are" : "is"} ${this.womenCount} ${this.womenCount > 1 ? "women" : "woman"} waiting to dance`);
    };
  };
};

let squares = new SquareDancePairs();
squares.addPerson("Jane", false);
squares.addPerson("Frank", true);
squares.addPerson("John", true);
squares.addPerson("Sherlock", true);
squares.addPerson("Madonna", false);
squares.addPerson("David", true);
squares.addPerson("Christopher", true);
squares.addPerson("Beyonce", false);

// The Ophidian Bank - 25% of peopple in line dont have right paperwork and have to go to the end of the line
console.log('Ohpidian Bank');

class OphidianBank {
  constructor() {
    this.customerQueue = new Queue();
  }

  addCustomer(name) {
    this.customerQueue.enqueue(name);
    console.log(`Customer "${name}" joined the bank line.`);
  }

  serveCustomer() {
    if(!this.customerQueue.first) {
      console.log("All customers have been served.");
      return;
    }

    const customer = this.customerQueue.dequeue();

    if (Math.random() <= 0.25) {
      console.log(`Sorry, ${customer}, your paper work isn't quite right. Back to the end of the line.`);
      this.customerQueue.enqueue(customer);
    }
    else {
      console.log(`Thanks ${customer}, you're all set to go. Thanks for waiting.`);
    }
  }
}

let bank = new OphidianBank();
bank.addCustomer("George");
bank.addCustomer("James");
bank.addCustomer("Logan");
bank.addCustomer("Julia");
bank.addCustomer("Josh");
bank.addCustomer("Janette");
bank.serveCustomer();
bank.serveCustomer();
bank.serveCustomer();
bank.serveCustomer();
bank.serveCustomer();
bank.serveCustomer();
bank.serveCustomer();
bank.serveCustomer();
bank.serveCustomer();
bank.serveCustomer();
bank.serveCustomer();