---
layout:  post
category:  algorithm
title:  No16、合并两个有序链表
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No16、合并两个有序链表
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




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

