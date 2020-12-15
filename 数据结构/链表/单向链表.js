// 节点类
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
// 链表类
class LinkList {
    constructor() {
        //头部节点
        this.head = null
        //尾部节点
        this.tail= null
        // 长度
        this.length = 0
    }
    // 追加节点
    append(data) {
        let newNode = new Node(data)
        // 判断当前列表是否为空
        if (this.head == null) {
            this.head = newNode
        } else {
            // 寻找尾部节点(若链表不存在尾部节点属性)
            // let current = this.head
            // while (current.next != null) {
            //     current = current.next
            // }
            // // 将尾部节点的next指向新节点
            // current.next = newNode

            this.tail.next = newNode
        }
        this.tail = newNode
        this.length++
    }

    // 插入结点
    insert(position, data) {
        // 判断位置是否非法
        if (position < 0 || position > this.length)
            return false
        let newNode = new Node(data)
        if (position === 0) {
            if(this.length === 0){
                this.head = newNode
                this.tail = newNode
            }else{
                newNode.next = this.head
                this.head = newNode
            }
        } else if (position === this.length) {
            this.tail.next = newNode
            this.tail = newNode
        }
        else {
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
    //根据指定位置删除结点
    removeAt(position) {
        // 判断位置是否非法
        if (position < 0 || position > this.length - 1)
            return false
        let current = this.head
        if (position === 0) {
            if(this.length === 1){
                this.head = null
                this.tail = null
            }else{
                this.head = current.next
            }
        } else {
            let index = 0;
            while(index++ < position - 1){
                current = current.next;
            }
            current.next = current.next.next;
            if(index === this.length-1){
                this.tail = current
            }
        }
        this.length--
        return true
    }
    //根据结点值查找结点所在链表位置
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
    //根据结点值删除链表中的该结点
    remove(data) {
        let position = this.indexOf(data)
        return this.removeAt(position)
    }
    //判空
    isEmpty() {
        return this.head == null
    }
    //长度
    size() {
        return this.length
    }
    //打印链表
    toString() {
        let print = ''
        let current = this.head
        while (current != null) {
            print += "," + current.data
            current = current.next
        }
        return print.slice(1)
    }

}
module.exports = LinkList

let linkList = new LinkList()
for(let i = 0; i < 5; i++){
    linkList.append(i);
}

linkList.insert(5,"aa");
linkList.removeAt(1);
console.log(linkList.toString());
console.log(linkList.indexOf("aa"));
linkList.insert(1,4)
linkList.insert(0,5)
console.log(linkList.toString());
linkList.remove(3);
console.log(linkList.toString());
