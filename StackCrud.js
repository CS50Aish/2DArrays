class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.items.length === 0){
            return "Underflow;"
        }
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    display(){
        console.log("Stack Items: ", this.items);
    }

    clear(){
        this.items = [];
        console.log("Stack cleared");
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