class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
        this.parentNode = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        const node = new Node(val)
        // 判断根节点是否为空
        if (this.root === null) {
            this.root = node
            return
        }
        //插入非根节点
        this.insetNode(node, this.root)
    }

    //插入非根节点处理函数
    insetNode(node, root) {
        if (node.val < root.val) {
            if (root.left == null) {
                root.left = node
                node.parentNode = root
            } else {
                this.insetNode(node, root.left)
            }

        } else if (node.val === root.val){
            console.log('当前二叉树中已存在插入节点，插入节点失败')
        } else {
            if (root.right == null) {
                root.right = node
                node.parentNode = root
            } else {
                this.insetNode(node, root.right)
            }
        }
    }

    //先序遍历
    preorderTraversal(cb) {
        if (this.root === null) {
            console.log('当前为空树无法进行遍历')
            return
        }
        this.preorderTraversalNode(this.root, cb)
    }

    //先序遍历递归逻辑剥离
    preorderTraversalNode(node, cb) {
        if (node == null) {
            return
        }
        cb(node.val)
        this.preorderTraversalNode(node.left, cb)
        this.preorderTraversalNode(node.right, cb)
    }

    //中序遍历
    inorderTraversal(cb) {
        if (this.root === null) {
            console.log('当前为空树无法进行遍历')
            return
        }
        this.inorderTraversalNode(this.root,cb)
    }

    //中序遍历递归逻辑剥离
    inorderTraversalNode(node, cb) {
        if (node == null) {
            return
        }
        this.inorderTraversalNode(node.left, cb)
        cb(node.val)
        this.inorderTraversalNode(node.right, cb)
    }


    //后序遍历
    postorderTraversal(cb) {
        if (this.root === null) {
            console.log('当前为空树无法进行遍历')
            return
        }
        this.postorderTraversalNode(this.root,cb)
    }

    //后序遍历递归逻辑剥离
    postorderTraversalNode(node, cb) {
        if (node == null) {
            return
        }
        this.postorderTraversalNode(node.left, cb)
        this.postorderTraversalNode(node.right, cb)
        cb(node.val)
    }

    //DFS深度优先非递归遍历
    dfs(){
        if (this.root === null) {
            console.log('当前为空树无法进行遍历')
            return
        }
        this.dfsNode(this.root)
    }
    dfsNode(root){
        let stack = [];
        stack.push(root);

        while (stack.length !== 0) {
            let node = stack.pop();
            console.log(node.val);
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }

        }
    }

    //广度优先非递归遍历
    bfs(){
        if (this.root === null) {
            console.log('当前为空树无法进行遍历')
            return
        }
        this.bfsNode(this.root)
    }

    bfsNode(root){
        let queue = [];
        queue.push(root);
        while (queue.length !== 0) {
            let node = queue.shift();
            console.log(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    //获取当前树中的最小值
    getMin(){
        if(this.root ==null){
            console.log('当前为空树无最小值')
            return
        }
        return this.getMinNode(this.root)
    }

    //查找递归逻辑抽离
    getMinNode(node){
        if( node.left === null ){
            return node;
        }else{
            return this.getMinNode(node.left);
        }
    }

    // //获取当前树中的最大值
    // getMax(){
    //     if(this.root ==null){
    //         console.log('当前为空树无最大值')
    //         return
    //     }
    //     return this.getMaxNode(this.root)
    // }
    //
    // //查找递归逻辑抽离
    getMaxNode(node){
        if( node.right === null ){
            return node;
        }else{
            return this.getMaxNode(node.right);
        }
    }

    // getMin() {
    //     if(this.root ==null){
    //         console.log('当前为空树无最小值')
    //         return
    //     }
    //     let current = this.root
    //     while (current.left != null) {
    //         current = current.left
    //     }
    //     return current.val
    // }
    //

    //获取二叉树中的最大值
    getMax() {
        if(this.root ==null){
            console.log('当前为空树无最大值')
            return
        }
        let current = this.root
        while (current.right != null) {
            current = current.right
        }
        return current.val
    }

    //通过结点值查找节点
    search(val) {
        if(this.root == null) return null;
        let current = this.root
        let flag = false
        while (current !== null) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                flag = true
                break
            }
        }
        return flag ? current : null
    }

    //获取前驱
    getPredessor(val){
        let node = this.search(val)
        if(!node){
            return null
        }
        if(node.left !==null){
            return this.getMaxNode(node.left)
        }
        let parent = node.parentNode
        let current = node
        while (parent !==null && current === parent.left){
            current = parent
            parent = current.parentNode
        }
        return parent?parent:null
    }


    //获取后继
    getSuccessor(val) {
        let node = this.search(val)
        if (!node) {
            return null
        }
        if (node.right !== null) {
            return this.getMinNode(node.right)
        }

        let parent = node.parentNode
        let current = node
        while (parent !== null && current === parent.right) {
            current = parent
            parent = current.parentNode
        }
        return parent ? parent : null
    }

    remove(val) { // 8
        let current = this.root
        let parent = null
        let isLeft = false
        while (current.val !== val) {
            if (val < current.val) {
                parent = current
                current = current.left
                isLeft = true
            } else {
                parent = current
                current = current.right
                isLeft = false
            }
            if (current == null) return false
        }
        // 要删除的节点是current
        // 叶子节点和只有一个根的情况
        if (current.left === null && current.right == null) {
            if (current === this.root) {
                this.root = null
            } else if (isLeft) {
                parent.left = null
            } else {
                parent.right = null
            }

        }
            // 只有一个节点的情况
        // 只有左子树 没有右子树
        else if (current.left != null && current.right == null) {
            if (current === this.root) {
                this.root = current.left
            } else if (isLeft) {
                parent.left = current.left
            } else {
                parent.right = current.left
            }

        }
            // 只有一个节点的情况
        // 只有右子树 没有左子树
        else if (current.left == null && current.right != null) {
            if (current === this.root) {
                this.root = current.right
            } else if (isLeft) {
                parent.left = current.right
            } else {
                parent.right = current.right
            }

        } else {
            // 找到后继节点
            let successor = this.getSuccessor(current)// 15
            if (current === this.root) {
                this.root = successor
            }else if(isLeft){
                parent.left = successor
            }else {
                parent.right = successor
            }
            successor.left = current.left
        }

    }
}

const bst = new BST()

let arr = [41,20,65,11,29,50,91,32,72,99]
arr.forEach(val=>bst.insert(val))
// console.log('先序遍历----------------------------------')
// bst.preorderTraversal(val=>console.log(val))
// console.log('中序遍历----------------------------------')
// bst.inorderTraversal(val=>console.log(val))
// console.log('后序遍历----------------------------------')
// bst.postorderTraversal(val=>console.log(val))

// console.log(bst.getPredessor(72));
// console.log(bst.getSuccessor(65));
bst.dfs()
bst.bfs()
