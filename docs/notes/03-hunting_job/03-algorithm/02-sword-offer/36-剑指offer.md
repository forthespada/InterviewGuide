---
layout:  post
category:  algorithm
title:  No36、返回两个链表中的第一个公共节点
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No36、返回两个链表中的第一个公共节点
---


## **No36、返回两个链表中的第一个公共节点**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46?tpId=13&&tqId=11189&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入两个链表，找出它们的第一个公共结点。（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）



**1、暴力遍历法**

~~~cpp
ListNode* FindFirstCommonNode(ListNode* pHead1, ListNode* pHead2) {
	if (pHead1 == NULL || pHead2 == NULL) return NULL;
	ListNode* node = (ListNode*)malloc(sizeof(ListNode));	
	while (pHead1 != NULL) {

		node = pHead2;
		while (node != NULL) {
			//cout << "node " << node->val << " phead1 " << pHead1->val << endl;
			if (node == pHead1) return node;
			else
				node = node->next;
		}
		//cout << endl;
		pHead1 = pHead1->next;

	}
	return NULL;
}
~~~



**2、大神写法  太厉害了，真的佩服**

朋友们，请一定要珍惜身边的那个 ta 啊！你们之所以相遇，正是因为你走了 ta 走过的路，而 ta 也刚好走了你走过的路。这是何等的缘分！

而当你们携手继续走下去时，你会慢慢变成 ta 的样子，ta 也会慢慢变成你的样子。



a.长度相同的：1. 有公共结点的，第一次就遍历到；2. 没有公共结点的，走到尾部NULL相遇，返回NULL；
b.长度不同的：1. 有公共结点的，第一遍差值就出来了，第二遍就会一起到公共结点；2. 没有公共结点的，第二次遍历一起到结尾NULL。  

~~~cpp
//定义两个指针, 第一轮让两个到达末尾的节点指向另一个链表的头部, 最后如果相遇则为交点(在第一轮移动中恰好抹除了长度差)
        两个指针等于移动了相同的距离, 有交点就返回, 无交点就是各走了两条指针的长度
ListNode* FindFirstCommonNode(ListNode* pHead1, ListNode* pHead2) {
	if (pHead1 == NULL || pHead2 == NULL) return NULL;
	ListNode* p1 = (ListNode*)malloc(sizeof(ListNode));
	ListNode* p2 = (ListNode*)malloc(sizeof(ListNode));
	p1 = pHead1;
	p2 = pHead2;
	while (p1 != p2) {
		p1 = (p1 == NULL ? pHead2 : p1->next);
		p2 = (p2 == NULL ? pHead1 : p2->next);
	}
	return p1;
}

~~~



**二刷：**

1、有个地方要注意

~~~cpp
ListNode* FindFirstCommonNode( ListNode* pHead1, ListNode* pHead2) {
    if(pHead1 == nullptr || pHead2 == nullptr) return nullptr;
    ListNode*p1 = pHead1,*p2 = pHead2;
    while(p1 != p2){
        p1 = (p1 == nullptr?pHead2:p1->next);//这里需要是 p == null 来进行判断，不能是 p->next == nullptr 来判断，因为有可能是最后一个节点是公共节点
        p2 = (p2 == nullptr?pHead1:p2->next);
    }

    return p1;
}
~~~

<p id = "返回两个链表中的第一个公共节点"></p>

