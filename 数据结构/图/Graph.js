//邻接表

class Graph {
    constructor () {
        //图的顶点
        this.vertices = []
        //图的边
        this.edges = new Map()
    }

    // 添加顶点
    addVertex (v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v)
            this.edges.set(v, [])
        }
    }

    // 添加a与b点之间的边
    addEdge (a, b) {
        // 如果图中没有顶点a，先添加顶点a
        !this.edges.has(a) && this.addVertex(a)
        // 如果图中没有顶点b，先添加顶点b
        !this.edges.has(b) && this.addVertex(b)
        this.edges.get(a).push(b)
        this.edges.get(b).push(a)
    }

    //获取顶点
    getVertices(){
        return this.vertices
    }

    //获取边
    getEdges(){
        return this.edges
    }

    toString(){
        let s = ''
        this.vertices.forEach(value=>{
            s += `${value} -> `
            this.edges.get(value).forEach(value=>{
                s += `${value} `
            })
            s += '\n'
        })
        return s
    }
}

let graph = new Graph()
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
myVertices.forEach((v) => {
    graph.addVertex(v)
})
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString())
