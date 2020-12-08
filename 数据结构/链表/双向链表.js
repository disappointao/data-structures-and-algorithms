class DoublyNode {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null // 新的属性
    }
}

class DoublyLinkList {
    constructor() {
        this.head = null
        this.length = 0
        this.tail = null // 尾部
    }
    append(data) {
        //    创建新节点
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
        // 越界判断
        if (position < 0 || position > this.length) return false

        //  创建新节点
        let newNode = new DoublyNode(data)
        // 在0位置插入
        if (position == 0) {
            //     空链表
            if (this.head == null) {
                this.head = newNode
                this.tail = newNode
            } else { //     非空链表
                newNode.next = this.head
                this.head.prev = newNode
                this.head = newNode
            }
        }

        //  在尾部插入   this.length  追加元素
        else if (position == this.length) {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        //  中间插入
        else {
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
    // 根据position的落点在前半截还是在后半截,
    // 进行删除遍历的判断(从前开始还是从后开始)
    removeAt(position) {
        // 判断位置是否非法
        if (position < 0 || position > this.length - 1) return false
        if (position == 0) {
            // 只有一个节点
            if (this.length == 1) {
                this.head = null
                this.tail = null
            } else {
                this.head.next.prev = null
                this.head = this.head.next
            }
        } else if (position == this.length - 1) {
            this.tail.prev.next = null
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

    // 找到某个元素的位置 indexOf
    indexOf(data) {
        let index = 0
        let current = this.head
        while (current) {
            if (current.data == data) {
                return index
            }
            current = current.next
            index++
        }
        return -1

    }
    // 删除某个元素节点 remove
    remove(data){

    }
    // 遍历  正向遍历  current = current.next
    forwordString() {
        let re = ''
        let current = this.head
        while (current) {
            re += ',' + current.data
            current = current.next
        }
        return re.slice(1)
    }


}