//优先级队列
class PriorityQueue{
    constructor(props) {
        //初始化优先级队列
        this.items = []
        //初始优先级化队列长度
        this.length = 0
    }
    //生成优先级对垒元素
    queueElement(element,priority){
        return {
            element,
            priority
        }
    }
    //入队
    enqueue(element,priority){
        this.length++
        let queueElement = this.queueElement(element,priority),
            added = false
        for (let i = 0; i < this.items.length; i++) {
            if(queueElement.priority < this.items[i].priority){
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
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
        for (let ele of this.items) {
            console.log(`${ele.element} ${ele.priority}`);
        }
    }
}
module.exports = PriorityQueue
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('a', 1)
priorityQueue.enqueue('b', 3)
priorityQueue.enqueue('c', 1)
priorityQueue.enqueue('d', 2)
priorityQueue.enqueue('d', 4)
priorityQueue.print();

