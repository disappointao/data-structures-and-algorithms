//队列
class Queue {
    constructor(props) {
        //初始化队列
        this.items = []
        //初始化队列长度
        this.length = 0
    }
    //入列
    enqueue(element) {
        this.length++
        this.items.push(element)
    }
    //出列
    dequeue() {
        this.length === 0 ? this.length = 0 : this.length--
        return this.items.shift()
    }
    //查看列头
    front() {
        return this.items[0]
    }
    //判断是否为空队列
    isEmpty() {
        return this.length === 0
    }
    //查看队列长度
    size() {
        return this.length
    }
    //查看整个队列
    print() {
        console.log(this.items);
    }
}
module.exports = Queue