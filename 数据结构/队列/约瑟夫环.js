// //约瑟夫环（丢手绢问题） 队列实现
let Queue = require('./Queue')
function JosephRing(names,num){
    let queue = new Queue(),
        time = 1,
        name = ''
    for(let name of names){
        queue.enqueue(name)
    }
    while (queue.size() > 1){
        console.log('执行了')
        for (let i = 0; i <num-1 ; i++) {
            queue.enqueue(queue.dequeue())
        }
        name = queue.dequeue()
        console.log(`第${time}轮，淘汰：${name}`)
        time++
    }
    console.log('最后获胜者：' + queue.front())
}

JosephRing(['a','b','c','d'],5)