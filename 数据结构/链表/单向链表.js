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

    // 插入
    insert(position, data) {
        // 判断位置是否非法
        if (position < 0 || position > this.length) return false
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

    removeAt(position) {
        // 判断位置是否非法
        if (position < 0 || position > this.length - 1) return false
        let current = this.head
        if (position === 0) {
            this.head = current.next
        } else {
            let index = 0
            let previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
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

    remove(data) {
        let position = this.indexOf(data)
        return this.removeAt(position)
    }

    // 判空
    isEmpty() {
        return this.head == null
    }

    //  长度
    size() {
        return this.length
    }

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