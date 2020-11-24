//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串中的阔号是否匹配
//示例： 输入“()” 输出 true , 输入 “({})” 输出 true , 输入 “(){}[]” 输出 true, 输入 ”([)]“ 输出 false
let Stack = require('./Stack')

/**
 * 利用栈结构，括号匹配
 * @param str
 * @returns {boolean}
 */
function bracketsMatch(str){
    let leftBrackets = '({[',
        rightBrackets = ')}]',
        stack = new Stack(),
        i = 0,
        result = true
    while (i < str.length){
        if(leftBrackets.includes(str[i])){
            stack.push(str[i])
        }else{
            let pop = stack.pop()
            if(pop !== leftBrackets[rightBrackets.indexOf(str[i])]){
                result = false
                break
            }
        }
        i++
    }
    if(!stack.isEmpty()){
        result = false
    }
    return result
}

/**
 * 方法一基础上进行简化
 * @param s
 * @returns {boolean}
 */
const isValid = (s) => {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (
            (s[i] === ')' && stack[stack.length - 1] === '(')
            || (s[i] === ']' && stack[stack.length - 1] === '[')
            || (s[i] === '}' && stack[stack.length - 1] === '{')
        ) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    console.log(stack)
    return stack.length === 0
}
console.log(bracketsMatch('(())'))
console.log(bracketsMatch('({})'))
console.log(bracketsMatch('(){}[]'))
console.log(bracketsMatch('({)}'))