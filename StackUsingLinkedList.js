class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.size === 0) {
            return "Underflow";
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.data;
    }

    peek() {
        return this.top ? this.top.data : null;
    }

    display() {
        let current = this.top;
        while (current) {
            console.log(current.data);
            current = current.next; // Move to the next node
        }
    }

    clear() {
        this.top = null;
        this.size = 0;
        console.log("Stack Cleared");
    }
}

let myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.push(50);
myStack.display();

let poppedElement = myStack.pop();
console.log("Popped Element: ", poppedElement);
myStack.display();

let topPeekedElement = myStack.peek();
console.log("Top peeked element: ", topPeekedElement);
myStack.display();

myStack.clear();
myStack.display();
