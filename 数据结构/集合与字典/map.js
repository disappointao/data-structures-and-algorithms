const map = new Map([
    [0,1],
    ['demo',123],
    [{a:123},2]
])
console.log(map,[...map])
map.delete(0)
console.log(map,[...map])
map.clear()
map.set(Symbol('123'),123)
map.set(0,12)
map.set(0,'demo')
map.set({a:'12c'},{a:1})
console.log(map,[...map])
console.log('--------------------')
for(let item of map.values()){
    console.log(item)
}
console.log('--------------------')
for(let item of map.keys()){
    console.log(item)
}
console.log('--------------------')
for(let item of map.entries()){
    console.log(item)
}
