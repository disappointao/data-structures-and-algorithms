// 节点类
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LoopLinkList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    // 追加节点
    append(data) {
        //  创建新节点
        let newNode = new Node(data)

        if (this.head == null) {
            this.head = newNode
            //结点next指针指向头部结点
            newNode.next = this.head
        } else {
            let current = this.head
            while (current.next !== this.head) {
                current = current.next
            }
            current.next = newNode
            newNode.next = this.head
        }
        this.tail = newNode
        this.length++
        return true
    }

    insert(position, data) {
        // 判断位置是否非法
        if (position < 0 || position > this.length)
            return false
        let newNode = new Node(data)
        if (position === 0) {
            if (this.head == null) {
                this.head = newNode
                this.tail = newNode
                newNode.next = this.head
            } else {
                // let current = this.head
                // while (current.next !== this.head) {
                //     current = current.next
                // }
                //
                // newNode.next = this.head
                // current.next = newNode
                // this.head = newNode
                newNode.next = this.head
                this.head = newNode
                this.tail.next = newNode
            }
        } else if (position === this.length){
            this.tail.next = newNode
            newNode.next = this.head
        }
        else {
            //待优化
            let index = 0
            let current = this.head
            while (index++ < position - 1) {
                current = current.next
            }

            newNode.next = current.next
            current.next = newNode
        }
        this.length++
        return true
    }

    removeAt(position) {
        // 判断位置是否非法
        if (position < 0 || position > this.length - 1)
            return false
        if (position === 0) {
            if (this.length === 1) {
                this.head = null
                this.tail = null
            } else {
                // let current = this.head
                // while (current.next !== this.head) {
                //     current = current.next
                // }
                // current.next = this.head.next
                // this.head = this.head.next
                this.tail.next = this.head.next
                this.head = this.head.next
            }
        }else {
            let index = 0
            let current = this.head
            let previous = null
            while (index++ < position ) {
                previous = current
                current = current.next
            }
            previous.next = current.next
            if(position === this.length-1){
                this.tail = previous
            }
        }
        this.length--
        return true
    }
    indexOf(data){
        let index = 0;
        let current = this.head;
        while(current.next !== this.head){
            if(current.data === data){
                return index;
            }
            current = current.next;
            index++;
        }
        return current.data === data ? this.length - 1: -1;
    }
    //根据结点值删除链表中的该结点
    remove(data){
        let position = this.indexOf(data);
        this.removeAt(position);
    }
    //判空
    isEmpty(){
        return this.head == null;
    }
    //长度
    size(){
        return this.length;
    }
    //打印链表
    toString(){
        if(this.head != null){
            let print = '';
            let current = this.head;
            while(current.next !== this.head){
                print += ',' + current.data;
                current = current.next;
            }
            print += ',' + current.data;
            return print.slice(1);
        }
        return null;
    }
}
module.exports = LoopLinkList
let linkList = new LoopLinkList()

linkList.append(0)
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
linkList.remove(4)
linkList.remove(3)
linkList.remove(2)
console.log(linkList.isEmpty())
console.log(linkList)
console.log(linkList.size())
console.log(linkList.toString())
linkList.insert(1,5)
console.log(linkList.toString())