//防止内存泄漏
//dom元素上添加数据时可用 WeakMap,用 WeakMap 好处是当该 DOM 元素被清除，对应的 WeakMap记录就会自动被移除
const wm = new WeakMap();
const ele = document.getElementById('example');
const handler = ()=>{}
wm.set(ele, 'some information');
wm.get(ele) //"some information"
//
// //注册监听事件的listener对象很适合用WeakMap来实现
const listener = new WeakMap();
listener.set(ele, handler);
ele.addEventListener('click', listener.get(ele), false);

//WeekMap 实现类中的私有属性
//目前使用三种方法来实现：闭包（版本1）=》Symbol（版本2）=》WeakMap（版本3）

//闭包实现,但各实例共享私有属性
const testFn = (function () {
    let data;

    class Test {
        constructor(val) {
            data = val
        }
        getData() {
            return data;
        }
    }
    return Test;
})()

// let test1 = new testFn(3);
// console.log(test1.getData());
// let test2 = new testFn(4);
// console.log(test2.getData());
// console.log(test1.getData());

//使用symbol的方式，但可以通过Object.getOwnPropertySymbols方法得到symbol
const testFn2 = (function () {
    let data = Symbol('data')

    class Test {
        constructor(val) {
            this[data] = val
        }
        getData() {
            return this[data]
        }
    }
    return Test;
})()

// let test3 = new testFn2(3)
// console.log(test3.getData())
// let test4 = new testFn2(4)
// console.log(test4.getData())
// console.log(test3.getData())
// console.log(test3[Object.getOwnPropertySymbols(test3)[0]])
// console.log(test4[Object.getOwnPropertySymbols(test4)[0]])

//使用WeekMap实现
const testFn3 = (function () {
    let data = new WeakMap()

    class Test {
        constructor(val) {
            data.set(this, val)
        }
        getData() {
            return data.get(this)
        }
    }
    return Test;
})();

let test5 = new testFn3(3)
console.log(test5.getData())
let test6 = new testFn3(4)
console.log(test6.getData())
console.log(test5.getData())
