// 1. Create a stack class
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;

    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        //create a new node with data and set it as the new top
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        //reassign the top to the next item in stack to remove top item
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

// 2. Useful methods for a stack
function peek(stack) {
    if (stack.top === null) {
        return 'Stack is empty'
    }
    return stack.top.data
}

function isEmpty (stack) {
    if (stack.top === null) {
        return true
    }
    return false
}

function display(stack) {
    if (!stack.top) {
        return 'Empty Stack';
    }

    let current = stack.top;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
    return;
}

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

console.log('Peek: ', peek(starTrek));

console.log('isEmpty: ', isEmpty(starTrek));

display(starTrek);

// 3. Check for palindromes using a stack
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    const tStack = new Stack();
    let reverseString = '';
    for (let i = 0; i < s.length; i++) {
        tStack.push(s[i]);
    }
    while (tStack.top !== null) {
        reverseString += tStack.pop();
    }
    return reverseString;
}

        // True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

//4. Matching parentheses in an expression
function matchParen(string) {
    const testStack = new Stack();
  
      for (let i = 0; i < string.length; i++) {
          //loop starts
          if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
              testStack.push(string[i]);
          }
      }

      //while j is less than length
      let j = 0;
      while (j < string.length) {
          if (string[j] === ')' || string[j] === ']' || string[j] === '}') {
              testStack.pop();
          }
          j++;
      }
  
      if (testStack.top === null) {
          return true;
      } else {
          return false;
      }
  }
  
  console.log(matchParen('(([{}]))')); //true
  console.log(matchParen('(([]))')); //true
  console.log(matchParen('(([{}))')); //false

  // 5. Sort Stack
function sortStack(stack) {
    let tempStack = new Stack();

    while (!isEmpty(stack)) {
        let temp = stack.pop();

        while (!isEmpty(tempStack) && peek(tempStack) < temp) {
        stack.push(tempStack.pop());
        }

        tempStack.push(temp);
    }
    return tempStack;
}

module.exports = Stack;