class ListNode{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class CircularLinkedList{
    constructor(){
        this.head = null
    }

    add(data){
        const newNode = new ListNode(data)
        if(!this.head){
            this.head = newNode
            newNode.next = this.head
        }
        else{
            let current = this.head
            while(current.next !== this.head){
                current = current.next
            }
            current.next = newNode
            newNode.next = this.head
        }
    }

    read(){
        if(!this.head){
            return
        }
        let current = this.head
        do{
            console.log(current.data)
            current = current.next
        }while(current !== this.head)
    }

    update(position, data){
        let current = this.head
        let count = 0;

        while(current){
            if(count == position){
                current.data = data
                return
            }
            current = current.next
            count++
        }
        console.log("Position not found")
    }

    delete(position){
        if(position === 0){
            this.head = this.head.next
            if(this.head){
                this.head.prev = null
            }
            else{
                this.tail = null
            }
            return
        }

        let current = this.head
        let count = 0

        while(current){
            if(count === position){
                if(current.next){
                    current.next.prev = current.prev
                }
                else{
                    this.tail = current.prev
                }
                if(current.prev){
                    current.prev.next = current.next
                }
                else{
                    this.head = current.next
                }
            }
            current = current.next
            count++
        }
        console.log("Position not found")
    }
}

const list = new CircularLinkedList()

list.add(1)
list.add(2)
list.add(3)

list.read()