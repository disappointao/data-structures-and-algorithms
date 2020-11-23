const Stack = require('./Stack')

/**
 * 十进制转换二进制
 * @param number
 * @returns {string}
 */
function decimalToBinary(number){
    let result = '',
        stack = new Stack(),
        rem
    while (number > 0){
        rem = Math.floor(number%2)
        stack.push(rem)
        number = Math.floor(number/2)
    }
    while (!stack.isEmpty()){
        result += stack.pop().toString()
    }
    return result
}

console.log(decimalToBinary(10));

/**
 * 十进制转16、8、2进制
 * @param number
 * @param binary
 * @returns {string}
 */
function baseConversion(number,binary){
    let result = '',
        stack = new Stack(),
        rem,
        digits = '0123456789ABCDEF'
    while (number > 0){
        rem = digits[Math.floor(number%binary)]
        stack.push(rem)
        number = Math.floor(number/binary)
    }
    while (!stack.isEmpty()){
        result += stack.pop().toString()
    }
    return result
}

console.log(baseConversion(123, 2));
console.log(baseConversion(123, 8));
console.log(baseConversion(123, 16));