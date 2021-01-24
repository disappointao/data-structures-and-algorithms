class Set {
    constructor() {
        this.items = {}
    }
    has(value) {
        // hasOwnProperty 判断value值是否为这个对象的属性
        return this.items.hasOwnProperty(value)
    }
    add(value) {

        if (this.has(value)) {
            return
        }
        this.items[value] = value
    }
    remove(value) {
        if (!this.has(value)) {
            return false
        }

        delete this.items[value]
        return true
    }

    clear() {
        this.items = {}
    }

    size() {
        return Object.keys(this.items).length
    }

    values() {
        return Object.keys(this.items)
    }

    // 并集
    union(otherSet) {
        let unionSet = new Set()
        let values = this.values() // 数组
        let length = values.length
        for (let i = 0; i < length; i++) {
            unionSet.add(values[i])
        }
        values = otherSet.values()
        length = values.length
        for (let i = 0; i < length; i++) {
            unionSet.add(values[i])
        }
        return unionSet
    }
    //交集
    intersection(otherSet) {
        let intersectionSet = new Set()
        let values = this.values() // 数组
        let length = values.length
        for (let i = 0; i < length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }
    //差集
    difference(otherSet) {
        let differenceSet = new Set()
        let values = this.values() // 数组
        let length = values.length
        for (let i = 0; i < length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }


        return differenceSet
    }
    subset(otherSet){
        let differenceSet = new Set()
        let values = this.values() // 数组
        let length = values.length
        for (let i = 0; i < length; i++) {
            if(!otherSet.has(values[i])){
                return false
            }
        }
        return true
    }
}

// 测试和使用集合类
const set1 = new Set()
set1.add(1)
set1.add(2)
set1.add(3)
const set2 = new Set()
set2.add(2)
set2.add(3)
// set2.add(4)
console.log(set1.union(set2).values());
console.log(set1.intersection(set2).values()); // 2 3
console.log(set2.difference(set1).values()); // 4
console.log(set2.subset(set1)); // false