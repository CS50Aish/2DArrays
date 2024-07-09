class ListNode {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class DoublyCircularLinkedList {
    constructor() {

    }

    add(data) {
    const newNode = new ListNode(data);
    if (!this.head) {
        this.head = newNode;
        newNode.next = newNode;
        newNode.prev = newNode;
    } else {
        newNode.prev = this.head.prev;
        newNode.next = this.head;
        this.head.prev.next = newNode;
        this.head.prev = newNode;
        }

    }

    read() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head)
    }

    delete(position){
        if(!this.head){
            return;
        }

        if(this.head.next === this.head){
            if(position === 0){
                this.head = null;
            }
            return;
        }

        let current = this.head;
        let count = 0;

        do{
            if(count === position){
                current.prev.next = current.next;
                current.next.prev = current.prev;
                if(position === 0){
                    this.head = current.next;
                }
                return;
            }
            current = current.next;
            count++;
        }
        while(current != this.head)
        console.log("Position not found!!");
    }

    update(position, data){
        if(!this.head){
            return;
        }

        let current = this.head;
        let count = 0;

        do{
            if(count === position){
                current.data = data;
                return;
            }
            current = current.next;
            count++;
        }
        while(current !== this.head)

        console.log("Position Not Found!!");
    }
}

const list = new DoublyCircularLinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.add(6)
list.add(7)
list.add(8)
list.read()