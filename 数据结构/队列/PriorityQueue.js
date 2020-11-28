//优先级队列
class PriorityQueue{
    constructor(props) {
        this.items = []
    }
    queueElement(element,priority){
        return {
            element,
            priority
        }
    }
    enqueue(element,priority){
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

