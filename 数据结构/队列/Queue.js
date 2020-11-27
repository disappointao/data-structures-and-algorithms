class Queue {
    constructor(props) {
        this.items = []
    }
    //入列
    enqueue(element) {
        this.items.push(element)
    }
    //出列
    dequeue() {
        return this.items.shift()
    }
    //查看列头
    front() {
        return this.items[0]
    }
    //判断是否为空队列
    isEmpty() {
        return this.items.length === 0
    }
    //查看队列长度
    size() {
        return this.items.length
    }
    //查看整个队列
    print() {
        console.log(this.items);
    }
}
module.exports = Queue