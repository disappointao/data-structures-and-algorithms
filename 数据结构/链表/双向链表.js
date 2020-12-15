class DoublyNode {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class TwoWayLinkList {
    constructor() {
        //头部结点
        this.head = null
        //尾部节点
        this.tail = null
        this.length = 0
    }
    append(data) {
        let newNode = new DoublyNode(data)
        // 空链表处理
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
    }

    insert(position, data) {
        if (position < 0 || position > this.length)
            return false
        let newNode = new DoublyNode(data)
        if (position === 0) {
            //空链表
            if (this.head == null) {
                this.head = newNode
                this.tail = newNode
            } else {
                //非空链表
                newNode.next = this.head
                this.head.prev = newNode
                this.head = newNode
            }
        } else if (position === this.length) {
            //链表尾部插入
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        } else {
            //链表中间插入
            let index = 0
            let current = this.head
            while (index++ < position) {
                current = current.next
            }
            // 将新节点放在当前节点的前面
            newNode.next = current
            newNode.prev = current.prev
            current.prev.next = newNode
            current.prev = newNode
        }
        this.length++
        return true
    }

    // 删除某个位置上的节点 removeAt
    removeAt(position) {
        // 判断位置是否非法
        if (position < 0 || position > this.length - 1)
            return false
        //链表头部删除
        if (position === 0) {
            // 只有一个节点
            if (this.length === 1) {
                this.head = null
                this.tail = null
            } else {
                //当前头部的下一个结点的前置指针置空
                this.head.next.prev = null
                this.head = this.head.next
            }
        } else if (position === this.length - 1) { //链表尾部删除
            this.tail.prev.next = null
            this.tail = this.tail.prev
        } else { // 中间部分进行删除
            // 可以根据position的落点在前半截还是在后半截，进行删除遍历的判断(从前开始还是从后开始)
            if(position < Math.floor(this.length / 2)){
                let index = 0;
                let current = this.head;
                while (index++ < position) {
                    current = current.next;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }else{
                let index = this.length - 1;
                let current = this.tail;
                while (index-- > position) {
                    current = current.prev;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
        }
        this.length--
        return true
    }
    indexOf(data) {
        let index = 0
        let current = this.head
        while (current) {
            if (current.data === data) {
                return index
            }
            current = current.next
            index++
        }
        return -1

    }
    // 删除某个元素节点 remove
    remove(data){
        let position = this.indexOf(data);
        return this.removeAt(position);
    }
    isEmpty() {
        return this.head == null;
    }
    size() {
        return this.length;
    }
    //正向遍历链表
    forwardTraversal() {
        let print = '';
        let current = this.head;
        while (current) {
            print += ',' + current.data;
            current = current.next;
        }
        return print.slice(1);
    }
    //反向遍历链表
    reverseTraversal() {
        let print = '';
        let current = this.tail;
        while (current) {
            print += ',' + current.data;
            current = current.prev;
        }
        return print.slice(1);
    }
}
module.exports = TwoWayLinkList;
let list = new TwoWayLinkList()
list.append(0);
list.append(1);
list.append(2);
list.insert(0, -1);
list.insert(4, 5);
// list.removeAt(4)
console.log(list);
list.removeAt(1)
console.log(list);
// console.log(list.indexOf(0));
// console.log(list.forwardTraversal());
// console.log(list.reverseTraversal());
// console.log(list.size());
// list.clear()
// console.log(list);
// console.log(list.isEmpty());
// console.log(list.size());