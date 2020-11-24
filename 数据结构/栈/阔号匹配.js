//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串中的阔号是否匹配
//示例： 输入“()” 输出 true , 输入 “（{}）” 输出 true , 输入 “（）{}[]” 输出 true, 输入 ”([)]“ 输出 false
let Stack = require('./Stack')
function bracketsMatch(str){
    let leftBrackets = '({[',
        rightBrackets = ')]}',
        stack = new Stack(),
        i = 0,
        result = true
    if( rightBrackets.includes(str[0]) !== -1){
        return false
    }
    while (i < str.length){
    }

    return result
}
