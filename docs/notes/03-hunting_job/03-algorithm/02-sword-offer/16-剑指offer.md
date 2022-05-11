---
layout:  post
category:  algorithm
title:  No16、合并两个有序链表
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No16、合并两个有序链表
comment: false
---



## **No16、合并两个有序链表**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337?tpId=13&&tqId=11169&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

### **示例1**

**输入**

```
{1,3,5},{2,4,6}
```

**返回值**

```
{1,2,3,4,5,6}
```

### **1、常规做法，非递归花了好久才做出来**

~~~cpp
struct ListNode {
	int val;
	struct ListNode* next;
	ListNode(int x) :
		val(x), next(NULL) {
	}
}; 


ListNode* Merge(ListNode* pHead1, ListNode* pHead2)
    {
       if (pHead1 == nullptr) return pHead2;
	if (pHead2 == nullptr) return pHead1;

	ListNode* Head = (ListNode*)malloc(sizeof(struct ListNode));

	if (pHead1->val <= pHead2->val) {
		Head = pHead1;
		pHead1 = pHead1->next;
	}else {
		Head = pHead2;
		pHead2 = pHead2->next;
	}

	ListNode* node = (ListNode*)malloc(sizeof(struct ListNode));
	node = Head;

	while (pHead1 && pHead2) {
		if (pHead1->val <= pHead2->val) {
			node->next = pHead1;
			pHead1 = pHead1->next;
			node = node->next;
		}
		else {
			node->next = pHead2;
			pHead2 = pHead2->next;
			node = node->next;
		}

	}
	if (pHead1 != nullptr) {
		node->next = pHead1;
	}
	else {
		node->next = pHead2;
	}
	return Head;
    }
    
    
    void test02()
{
	ListNode* head = (ListNode*)malloc(sizeof(ListNode));
	head->val = 1;

	ListNode* node1 = (ListNode*)malloc(sizeof(ListNode));
	node1->val = 5;

	ListNode* node2 = (ListNode*)malloc(sizeof(ListNode));
	node2->val = 9;

	ListNode* node3 = (ListNode*)malloc(sizeof(ListNode));
	node3->val = 11;
	//node3->next = NULL;

	head->next = node1;
	node1->next = node2;
	node2->next = node3;
	node3->next = nullptr;


	ListNode* head2 = (ListNode*)malloc(sizeof(ListNode));
	head2->val = 3;

	ListNode* node12 = (ListNode*)malloc(sizeof(ListNode));
	node12->val = 3;

	ListNode* node22 = (ListNode*)malloc(sizeof(ListNode));
	node22->val = 4;

	ListNode* node32 = (ListNode*)malloc(sizeof(ListNode));
	node32->val = 9;
	//node3->next = NULL;

	head2->next = node12;
	node12->next = node22;
	node22->next = node32;
	node32->next = nullptr;


	auto node = Merge(head,head2);
	while(node!=nullptr){
	
		cout << node->val << endl;
		node = node->next;
	}
}
~~~



### **2、递归版本**

~~~cpp
 ListNode* Merge(ListNode* pHead1, ListNode* pHead2)
    {
	if (pHead1 == nullptr) return pHead2;
	if (pHead2 == nullptr) return pHead1;


  
	if (pHead1->val <= pHead2->val) {
		pHead1->next = Merge(pHead1->next, pHead2);
		return pHead1;
	}
	else {
		pHead2->next = Merge(pHead1, pHead2->next);
		return pHead2;
	}
    }
~~~



### **二刷：很容易了**

### **1、迭代版本，依然还是迭代版本要快一点**

运行时间：2ms  占用内存：480k

~~~cpp
    ListNode* Merge(ListNode* pHead1, ListNode* pHead2)
    {
        if(pHead1 == nullptr) return pHead2;
        if(pHead2 == nullptr) return pHead1;
        ListNode *newHead = new ListNode(-1),*node = newHead;
        //newHead->next=node;
        while(pHead1 != nullptr && pHead2 != nullptr){
            
            if(pHead1->val > pHead2->val)  swap(pHead1,pHead2);
            node->next = pHead1;
            pHead1 = pHead1->next;
            node = node->next;
        }
        
        node->next = (pHead1 ? pHead1:pHead2);
        return newHead->next;
    }
~~~



### **2、递归版本**

运行时间：3ms  占用内存：504k

~~~cpp
    void MergeCore(ListNode*newHead, ListNode*node1, ListNode*node2){
        if(node1 == nullptr || node2 == nullptr) {
            newHead->next = (node1?node1:node2);
            return ;
        }

        if(node1->val < node2->val){
            newHead->next = node1;
            node1 = node1->next;            
        }
        else{
            newHead->next = node2;
            node2 = node2->next;
            
        }
        newHead = newHead->next;
        MergeCore(newHead,node1,node2);
    }
    
    
    ListNode* Merge(ListNode* pHead1, ListNode* pHead2)
    {
        if(pHead1 == nullptr) return pHead2;
        if(pHead2 == nullptr) return pHead1;
        ListNode *newHead = new ListNode(-1),*node = newHead;
        MergeCore(node, pHead1, pHead2);
        return newHead->next;
    }
~~~

<p id = "合并两个有序链表"></p>

