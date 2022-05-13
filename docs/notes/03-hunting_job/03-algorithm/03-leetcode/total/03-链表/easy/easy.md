

<p id="合并两个有序链表"></p>



### 21. 合并两个有序链表

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

**示例：**

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```



#### 第一版，熟悉一下怎么写的再说

执行用时 :12 ms, 在所有 cpp 提交中击败了77.75%的用户

内存消耗 :9 MB, 在所有 cpp 提交中击败了76.64%的用户



```c++
struct ListNode {

	int val;
	ListNode* next;
	ListNode(int x) :val(x), next(nullptr) {}
};

ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
	if (l1 == nullptr) return l2;
	if (l2 == nullptr)  return l1;

	ListNode* res=nullptr;

	if (l1->val <= l2->val) {

		res = l1;
		l1 = l1->next;

	}
	else {

		res = l2;
		l2 = l2->next;
	}

	ListNode* head = res;

	while (l1 && l2) {
		if (l1->val <= l2->val) {

			res->next = l1;		
			l1 = l1->next;
			res = res->next;

		} else {
			res->next = l2;
			l2 = l2->next;
			res = res->next;
		}

	}

	res->next = l1 == nullptr ? l2 : l1;
	return head;
}
```

<p id="反转链表"></p>



### 206. 反转链表

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/reverse-linked-list/)

反转一个单链表。

**示例:**

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

**进阶:**
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？





#### 第一版，反转

执行用时 :12 ms, 在所有 cpp 提交中击败了78.92%的用户

内存消耗 :9.2 MB, 在所有 cpp 提交中击败了20.28%的用户



```c++
struct ListNode {

	int val;
	ListNode* next;
	ListNode(int x) :val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {

	ListNode* pre = nullptr;
	ListNode* curr = head;
	ListNode* next = nullptr;
	while (curr) {
		next = curr->next;
		curr->next = pre;
		pre = curr;
		curr = next;
	}

	return pre;

}
```



<p id="删除链表中的节点"></p>





### 237. 删除链表中的节点

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)

请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。

现有一个链表 -- head = [4,5,1,9]，它可以表示为:

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/01/19/237_example.png)

 

**示例 1:**

```
输入: head = [4,5,1,9], node = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

**示例 2:**

```
输入: head = [4,5,1,9], node = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```

 

**说明:**

- 链表至少包含两个节点。
- 链表中所有节点的值都是唯一的。
- 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
- 不要从你的函数中返回任何结果。
- 

#### 第一版，替身攻击那种

执行用时 :12 ms, 在所有 cpp 提交中击败了98.53%的用户

内存消耗 :9.2 MB, 在所有 cpp 提交中击败了47.23%的用户

```c++
    void deleteNode(ListNode* node) {
         node->val = node->next->val;
        node->next = node->next->next;
        
    }
```




