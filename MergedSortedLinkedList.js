class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node to the end of the list
    add(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Read and print all nodes in the list
    read() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

function mergeSortedLists(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    while (l1 !== null && l2 !== null) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 === null ? l2 : l1;

    return dummyHead.next;
}

// Creating the first sorted linked list
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

// Creating the second sorted linked list
const list2 = new ListNode(6);
list2.next = new ListNode(7);
list2.next.next = new ListNode(8);
list2.next.next.next = new ListNode(9);
list2.next.next.next.next = new ListNode(10);

// Merging the two sorted linked lists
const mergedList = mergeSortedLists(list1, list2);

// Displaying the merged linked list
let current = mergedList;
while (current) {
    console.log(current.value);
    current = current.next;
}
