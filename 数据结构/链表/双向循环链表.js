class DoublyNode {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null // 新的属性
    }
}

class DoublyCList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // 追加方法
    append(data) {
        // 创建新节点
        let newNode = new DoublyNode(data)
        if (this.head == null) {
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

    //  插入方法
    insert(position, data) {
        // 越界判断
        if (position < 0 || position > this.length) return false
        let newNode = new DoublyNode(data)
        // 0 length 中间位置
        if (position == 0) {
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
        } else if (position == this.length) {
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
    }
    //  删除方法
    removeAt(position) {
        // 越界判断
        if (position < 0 || position > this.length - 1) return false
        if (position == 0) {
            if (this.length == 1) {
                this.head = null
                this.tail = null
            } else {
                this.head.next.prev = this.tail
                this.tail.next = this.head.next

                this.head.next = null
                this.head.prev = null

                this.head = this.tail.next


            }
        } else if (position == this.length - 1) {
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
        // 1. 将head节点单独判断
        // if (this.head.data == data) {
        //     return 0
        // }
        // let index = 1
        // let current = this.head.next
        // while (current != this.head) {
        //     if (current.data == data) {
        //         return index
        //     }
        // }
        // return -1
        // 2.将最后一个节点单独判断
        let index = 0
        let current = this.head
        while (current.next != this.head) {
            if (current.data == data) {
                return index
            }
            current = current.next
            index++
        }
        return this.tail.data == data ? this.length - 1 : -1
    }

}