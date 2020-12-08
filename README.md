### 数据结构
---
#### 栈
1.  **栈的定义**

栈：栈是一种遵从后进先出（LIFO）原则的有序集合。如下图所示，先进去的数据在底部，最后取出，后进去的数据在顶部，最先被取出。

![栈](img/栈.png)

2.  **常用方法**
+   `push(element)`：添加一个或者多个元素到栈顶
+   `pop()`：移除栈顶的元素，同时返回该元素
+   `peek()`：查看栈顶的元素
+   `isEmpty()`：判断栈是否空了，是则返回`true`，否则返回`false`
+   `clear()`：清除栈中的所有元素
+   `size()`：返回栈里的元素个数，方法和`length`类似

3.  **运用场景**
+   进制转换
    1.  已知 10 进制的数为 n。
    2.  将 n 每次取余 2 的值放入栈底部。
    3.  将 n 每次除于 2 的值当成下一次循环的数字（向下取整，舍弃小数部位）。
    4.  循环步骤 2 和步骤 3，直至 n 等于 0 为止。
    5.  将栈的数值依序推出来，从而得到最终结果。
+   括号匹配
    
    拿` ()[]{} `举例：
    1.  判断 ( 不是闭合括号，所以推入栈，stack = [ '(' ]；
    2.  判断 ) 是闭合括号，所以推出栈，stack = []；
    3.  判断 [ 不是闭合括号，所以推入栈，stack = [ '[' ]；
    4.  判断 ] 是闭合括号，所以推出栈，stack = []；
    5.  判断 { 不是闭合括号，所以推入栈，stack = [ '{' ];
    6.  判断 } 是闭合括号，所以推出栈，stack = []；
    
---
#### 队列
1.  **队列的定义**
    
队列：队列与栈结构类似，队列是遵循先进先出原则的一组有序的项，与栈不同的是，栈不管是入栈还是出栈操作都是在栈顶操作。而队列则是在队尾添加元素，队顶移出。如下图所示：
   
![栈](img/队列.png)

优先级队列：在队列的基础上，每个元素都会有各自的优先级，在插入的时候会根据优先级的高低顺序进行插入操作。入队时如果队列为空直接加入队列，否则进行比较，优先级越高（较小的数字具有较高优先级）的放在队列的越前面，如下图所示：

![栈](img/优先级队列.png)

   
2.  **常用方法**
+   `enqueue(element)`：添加一个或者多个元素到队列尾部
+   `dequeue()`：移除队列的第一(即排在队列最前面的)项，并返回被移除的元素
+   `front()`：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何改动
+   `isEmpty()`：判断队列中是否包含元素，是则返回`true`，否则返回`false`
+   `size()`：返回队列中的元素个数，方法和e`length`类似

3.  **运用场景**   
+   约瑟夫环（丢手绢）
    
    约瑟夫问题是个有名的问题：N个人围成一圈，从第一个开始报数，第M个将被杀掉，最后剩下一个，其余人都将被杀掉。例如N=6，M=5，被杀掉的顺序是：5，4，6，2，3。
    
    可以将参与游戏的人压入队列中，从头开始报过数的人出队列，然后从队尾进入队列。当到报数序号时，将队列头部元素进行出列，循环直至最后一人。
    
#### 链表
1.  **链表的定义**

链表是一种物理存储单元上非连续、非顺序的存储结构。链表由一系列结点组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。

+   单向链表
    
    用一组任意的内存空间去存储数据元素，每个节点(node)都由数据本身和一个指向后续节点的指针组成，整个链表的存取必须从头指针开始，头指针指向第一个节点，最后一个节点的指针指向空（NULL）。
    ![栈](img/单向链表.png)
+   单向循环链表
    
    在单向链表的基础上，最后一个节点的的指针指向链表头部，而不是NULL。
    在单向链表的基础上
+   双向链表
    双向链表在单向链表的基础上每个节点都有一个指向上一个节点的指针(prev)与指向下一个节点的指针(next)。
    ![栈](img/双向链表.png)
+   双向循环链表

    在双向链表的基础上，最后一个节点的后指针指向头结点，头结点的前指针指向尾部节点。
    

    
    