class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}
class TwoWayLoopLinkList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    append(data) {
        let newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
            newNode.next = this.head
            newNode.prev = this.tail
        } else {
            newNode.next = this.head
            newNode.prev = this.tail
            this.tail.next = newNode
            this.head.prev = newNode
            this.tail = newNode
        }
        this.length++
        return true
    }
    insert(position, data) {
        if (position < 0 || position > this.length)
            return false
        let newNode = new Node(data)
        if (position === 0) {
            //头部插入
            if (this.head == null) {
                this.head = newNode
                this.tail = newNode
                newNode.next = this.head
                newNode.prev = this.tail
            } else {
                newNode.next = this.head
                newNode.prev = this.tail
                this.head.prev = newNode
                this.tail.next = newNode
                this.head = newNode
            }
        } else if (position === this.length) {
            //尾部插入
            newNode.next = this.head
            newNode.prev = this.tail
            this.tail.next = newNode
            this.head.prev = newNode
            this.tail = newNode
        } else {
            let index = 0
            let current = this.head
            while (index++ < position) {
                current = current.next
            }
            newNode.next = current
            newNode.prev = current.prev
            current.prev.next = newNode
            current.prev = newNode

        }
        this.length++
        return true
    }
    removeAt(position) {
        if (position < 0 || position > this.length - 1)
            return false
        if (position === 0) {
            if (this.length === 1) {
                this.head = null
                this.tail = null
            } else {
                this.head.next.prev = this.tail
                this.tail.next = this.head.next
                this.head.next = null
                this.head.prev = null
                this.head = this.tail.next
            }
        } else if (position === this.length - 1) {
            this.tail.prev.next = this.head
            this.head.prev = this.tail.prev
            this.tail = this.tail.prev
        } else {
            let index = 0
            let current = this.head
            while (index++ < position) {
                current = current.next
            }
            current.prev.next = current.next
            current.next.prev = current.prev
        }
        this.length--
        return true
    }
    indexOf(data) {
        let index = 0
        let current = this.head
        while (current.next !== this.head) {
            if (current.data === data) {
                return index
            }
            current = current.next
            index++
        }
        return this.tail.data === data ? this.length - 1 : -1
    }
    remove(data) {
        let position = this.indexOf(data);
        return this.removeAt(position);
    }

    size() {
        return this.length;
    }
    forwardTraversal() {
        if (this.head !== null) {
            let print = '';
            let current = this.head;
            while (current.next !== this.head) {
                print += ',' + current.data;
                current = current.next;
            }
            print += ',' + current.data;
            return print.slice(1);
        }
        return false;
    }
    reverseTraversal() {
        if (this.head !== null) {
            let print = '';
            let current = this.tail;
            while (current.prev !== this.tail) {
                print += ',' + current.data;
                current = current.prev;
            }
            print += ',' + current.data;
            return print.slice(1);
        }
        return false;
    }
}
module.exports = TwoWayLoopLinkList;
let linkList = new TwoWayLoopLinkList();
linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);
linkList.append(5);
console.log(linkList.forwardTraversal());
linkList.insert(0,-1);
console.log(linkList.forwardTraversal());
linkList.removeAt(4);
console.log(linkList.forwardTraversal());
console.log(linkList.indexOf(3));
console.log(linkList.remove(3));
console.log(linkList.forwardTraversal());
console.log(linkList.size());
console.log(linkList.forwardTraversal());
console.log(linkList.reverseTraversal());