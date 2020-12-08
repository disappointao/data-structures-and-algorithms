// 节点类
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class CList {
    constructor() {
        this.head = null
        this.length = 0
    }
    // 追加节点
    append(data) {
        //  创建新节点
        let newNode = new Node(data)

        if (this.head == null) {
            this.head = newNode
            newNode.next = this.head
        } else {
            let current = this.head
            while (current.next != this.head) {
                current = current.next
            }
            current.next = newNode
            newNode.next = this.head
        }

        this.length++
        return true
    }

    insert(position, data) {
        // 判断位置是否非法
        if (position < 0 || position > this.length) return false
        let newNode = new Node(data)
        if (position == 0) {
            if (this.head == null) {
                this.head = newNode
                newNode.next = this.head
            } else {

                let current = this.head
                while (current.next != this.head) {
                    current = current.next
                }

                newNode.next = this.head
                current.next = newNode
                this.head = newNode
            }
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
        if (position == 0) {
            if (this.length == 1) {
                this.head = null
            } else {
                let current = this.head
                while (current.next != this.head) {
                    current = current.next
                }
                current.next = this.head.next
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
        }
        this.length--
        return true
    }

    // indexOf()
    // remove()

}