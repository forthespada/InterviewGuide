---
layout:  post
category:  algorithm
title:  No55、链表中环的入口结点
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No55、链表中环的入口结点
comment: false
---



## **No55、链表中环的入口结点**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4?tpId=13&&tqId=11208&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。



### **1、老办法，借助unordered_map**

~~~cpp
ListNode* EntryNodeOfLoop(ListNode* pHead)
{
	if (pHead == nullptr) return NULL;
	unordered_map<ListNode*, int> unmp;//注意是ListNode*，不是ListNode
	while (pHead != NULL) {

		unmp[pHead]++;
		if (unmp[pHead] == 2) return pHead;
		pHead = pHead->next;
	}
	return NULL;
}
~~~

借助se't其实也可以，但是set和map底层其实差不多，而且set里的两个元素类型相同，sizeof（listnode）肯定比 sizeof要大

~~~cpp
ListNode* EntryNodeOfLoop(ListNode* pHead)
{
    set<ListNode*> s;
    ListNode* node = pHead;
    while(node!=NULL){
        if(s.insert(node).second)
            node = node->next;
        else
            return node;
    }
    return node;

}
~~~



### **2、有个快慢指针的做法**

先说个定理：两个指针一个fast、一个slow同时从一个链表的头部出发
fast一次走2步，slow一次走一步，如果该链表有环，两个指针必然在环内相遇
此时只需要把其中的一个指针重新指向链表头部，另一个不变（还在环内），
这次两个指针一次走一步，相遇的地方就是入口节点。
这个定理可以自己去网上看看证明。

~~~C++
ListNode* EntryNodeOfLoop(ListNode* pHead)
{
    ListNode*fast=pHead,*low=pHead;
    while(fast&&fast->next){
        fast=fast->next->next;
        low=low->next;
        if(fast==low)
            break;
    }
    if(!fast||!fast->next)return NULL;
    low=pHead;//low从链表头出发
    while(fast!=low){//fast从相遇点出发
        fast=fast->next;
        low=low->next;
    }
    return low;
}
~~~



### **二刷：**

### **1、快慢指针，常规题**

运行时间：3ms  占用内存：376k

~~~cpp
ListNode* EntryNodeOfLoop(ListNode* pHead)
{

    if(pHead == nullptr || pHead->next == nullptr) return nullptr;
    ListNode*fast = pHead, *slow = pHead;
    while(fast != nullptr && fast->next != nullptr)
    {
        fast = fast->next->next;
        slow = slow->next;
        if(fast == slow) break;
    }

    if(fast == nullptr || fast->next == nullptr) return nullptr;
    slow = pHead;
    while(fast != slow){
        fast = fast->next;
        slow = slow->next;
    }
    return fast;      
}
~~~

<p id = "链表中环的入口结点"></p>

