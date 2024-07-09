class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head){
    if(!head || !head.next){
        return false;
    }

    let slow = head;
    let fast = head.next;

    while(slow != fast){
        if(!fast || !fast.next){
            return false; // Reaches the end of the cycle
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true; // Fast and slow pointers meet, indicating a cycle
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head.next; // Creating a cycle

console.log(hasCycle(head));