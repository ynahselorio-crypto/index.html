class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    display() {
        let current = this.head;
        let output = "";

        while (current !== null) {
            output += current.data + ", ";
            current = current.next;
        }
        document.getElementById("output").textContent = output;
    }
}
