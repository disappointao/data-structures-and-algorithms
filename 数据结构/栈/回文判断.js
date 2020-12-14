//判断字符串是否为回文 如 'abcba'
let Stack = require('./Stack')

function isBackToText(str){
    let arr = str.split('');
    let stack = new Stack();
    for(let i = 0; i < arr.length; i++){
        stack.push(arr[i]);
    }
    let reverseStr = '';
    for(let i = 0; i < arr.length; i++){
        reverseStr += stack.pop();
    }
    return reverseStr === str
}

console.log(isBackToText('ABCCBA'))
console.log(isBackToText('ABCBA'))
console.log(isBackToText('123324'))