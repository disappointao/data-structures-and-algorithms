class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

    insert(data) {
        let newNode = new Node(data)
        // 插入根节点
        if (this.root == null) {
            this.root = newNode
        } else {
            // 插入非根节点
            // 递归: 自己调用自己,要有结束条件,否者会死循环
            // 传入新节点,和第一个比较的根节点
            this.insetNode(newNode, this.root)
        }

    }
    // 传入新节点,和要比较的节点
    insetNode(newNode, node) {
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode
            } else {
                this.insetNode(newNode, node.left)
            }

        } else {

            if (node.right == null) {
                node.right = newNode
            } else {
                this.insetNode(newNode, node.right)
            }

        }
    }

    // 先序遍历  根  左子树  右子树
    // 11 7 5 3 9 8 10 15 13 12 14 20 18 25
    preOrderTraversal(callBack) {
        this.preOrderTraversalNode(this.root, callBack)
    }
    // 中序遍历 左子树 根  右子树
    // 3 5 7 8 9 10 11 12 13 14 15 18 20 25
    preOrderTraversalNode(node, callBack) {
        if (node == null) {
            return
        }
        callBack(node.data)
        this.preOrderTraversalNode(node.left, callBack)
        this.preOrderTraversalNode(node.right, callBack)
    }

    inOrderTraversal() {
        this.inOrderTraversalNode(this.root)
    }
    inOrderTraversalNode(node) {
        if (node == null) {
            return
        }
        this.inOrderTraversalNode(node.left)
        console.log(node.data)
        this.inOrderTraversalNode(node.right)
    }


    // 后序遍历 左子树 右子树 根
    // 3 5 8 10 9 7 12 14 13 18 25 20 15 11
    postOrderTraversal() {
        this.postOrderTraversalNode(this.root)
    }
    postOrderTraversalNode(node) {
        if (node == null) {
            return
        }
        this.postOrderTraversalNode(node.left)
        this.postOrderTraversalNode(node.right)
        console.log(node.data)
    }

    getMin() {
        let current = this.root
        while (current.left != null) {
            current = current.left
        }
        return current.data
    }

    getMax() {
        let current = this.root
        while (current.right != null) {
            current = current.right
        }
        return current.data
    }

    searchKey(data) {
        let current = this.root
        while (current != null) {
            if (data < current.data) {
                current = current.left
            } else if (data > current.data) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }

    remove(data) { // 8
        let current = this.root
        let parent = null
        let isLeft = false
        while (current.data !== data) {
            if (data < current.data) {
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

    getSuccessor(delNode) {
        let current = delNode.right
        let successor = null
        let successorParent = null
        while (current != null) {
            successorParent = successor
            successor = current
            current = current.left
        }

        if (successor !== delNode.right) {
            successorParent.left = successor.right
            successor.right = delNode.right
        }


        return successor
    }
}

const bst = new BST()

// 插入数据
bst.insert(11)
bst.insert(7)
bst.insert(15)
// bst.insert(5)
// bst.insert(3)
// bst.insert(9)
// bst.insert(8)
// bst.insert(10)
// bst.insert(13)
// bst.insert(12)
// bst.insert(14)
bst.insert(20)
// bst.insert(18)
// bst.insert(25)
// bst.insert(19)
let re = ''
bst.preOrderTraversal((data) => {
    re += "," + data
})

console.log(re.slice(1));
console.log(bst.remove(11));