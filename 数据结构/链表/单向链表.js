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
        // 头部
        this.head = null
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
            // 寻找尾部节点
            let current = this.head
            while (current.next != null) {
                current = current.next
            }
            // 将尾部节点的next指向新节点
            current.next = newNode
        }
        this.length++
    }

    // 插入结点
    insert(position, data) {
        // 判断位置是否非法
        if (position < 0 || position > this.length)
            return false
        let newNode = new Node(data)
        if (position === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
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
            this.head = current.next
        } else {
            let index = 0;
            while(index++ < position - 1){
                current = current.next;
            }
            current.next = current.next.next;
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
        let re = ''
        let current = this.head
        while (current != null) {
            re += "," + current.data
            current = current.next
        }
        return re.slice(1)
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