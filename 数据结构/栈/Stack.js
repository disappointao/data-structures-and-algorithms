class Stack {
    constructor(props) {
        //初始化栈
        this.items = []
        //初始化栈长度
        this.length = 0
    }
    //入栈
    push(element){
        this.items.push(element)
        this.length++
    }
    //出栈
    pop(){
        this.length === 0 ? this.length = 0 : this.length--
        return this.items.pop()
    }
    //查看栈顶元素
    peek(){
        return this.items[this.length-1]
    }
    //查看栈是否为空
    isEmpty(){
        return this.length === 0
    }
    //清空栈
    clear(){
        this.items = []
    }
    //查看栈元素长度
    size(){
        return this.length
    }
}
module.exports = Stack
