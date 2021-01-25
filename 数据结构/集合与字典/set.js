const set = new Set(['abc',4,{a:1}])
set.add(123)
console.log(set,[...set])
set.clear()
console.log(set,[...set])
let tag = Symbol('123')
set.add(tag)
console.log(set.has(tag));
set.add({a:4})
set.add('测试')
console.log('--------------------')
for(let item of set.values()){
    console.log(item)
}
console.log('--------------------')
for(let item of set.keys()){
    console.log(item)
}
console.log('--------------------')
for(let item of set.entries()){
    console.log(item)
}
