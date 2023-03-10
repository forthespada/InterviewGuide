---
layout:  post
category:  algorithm
title:  No15、反转链表
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No15、反转链表
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是四则或许对你有帮助的讯息</p>
  <p>1、👉 最近发现了一个每日推送都会最新校招咨询的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，无偿分享一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和留下的<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，好好走下去基本都能拿到不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>



## **No15、反转链表**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=13&&tqId=11168&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

 输入一个链表，反转链表后，输出新链表的表头。 

### **示例1**

**输入**

```
{1,2,3}
```

**返回值**

```
{3,2,1}
```

很好的解答

https://blog.csdn.net/qq_42351880/article/details/88637387

### **1、头插法 很经典的做法啊**

~~~cpp
struct ListNode {
	int val;
	struct ListNode* next;
	ListNode(int x) :
		val(x), next(NULL) {
	}
}; 

ListNode* ReverseList(ListNode* pHead) {

	struct ListNode* Head = NULL;
	struct ListNode* node = (ListNode*)malloc(sizeof(struct ListNode));

	while (pHead != nullptr) {
		node = pHead;
		pHead = pHead->next;

		node->next = Head;
		Head = node;
	}
	return Head;
}

void test02()
{
	ListNode* head = (ListNode*)malloc(sizeof(ListNode));
	head->val = 1;

	ListNode* node1 = (ListNode*)malloc(sizeof(ListNode));
	node1->val = 2;

	ListNode* node2 = (ListNode*)malloc(sizeof(ListNode));
	node2->val = 3;

	ListNode* node3 = (ListNode*)malloc(sizeof(ListNode));
	node3->val = 4;

	head->next = node1;
	node1->next = node2;
	node2->next = node3;
	node3->next = nullptr;

	auto node = ReverseList(head);
	while(node!=nullptr){
	
		cout << node->val << endl;
		node = node->next;
	}
	}
~~~



### **2、第二种方法，借助三个结点进行不断更替**

~~~cpp
ListNode* ReverseList(ListNode* pHead) {

	struct ListNode* node0 = NULL;
	struct ListNode* node1 = (ListNode*)malloc(sizeof(struct ListNode));
	struct ListNode* node2 = (ListNode*)malloc(sizeof(struct ListNode));
	node1 = pHead;
	node2 = pHead->next;
	while (node1 != nullptr) {
		node1->next = node0;

		node0 = node1;
		node1 = node2;
		if (node2!= nullptr) {
			node2 = node2 -> next;
		}
	}
	return node0;
}
~~~



### **二刷：**

### **1、头插法来做，将元素开辟在栈上，这样会避免内存泄露**

运行时间：3ms  占用内存：364k

~~~cpp
ListNode* ReverseList(ListNode* pHead) {

	// 头插法
	if (pHead == nullptr || pHead->next == nullptr) return pHead;
	ListNode dummyNode = ListNode(0);
	ListNode* pre = &(dummyNode);
	pre->next = pHead;
	ListNode* cur = pHead->next;
	pHead->next = nullptr;
	//pre = cur;
	ListNode* temp = nullptr;
	while (cur != nullptr) {
		temp = cur;
		cur = cur->next;
		temp->next = pre->next;
		pre->next = temp;
	}
	return dummyNode.next;

}
~~~



### **2、借助三个节点来进行迭代即可**

运行时间：3ms  占用内存：504k

~~~cpp
    ListNode* ReverseList(ListNode* pHead) {


	    if (pHead == nullptr || pHead->next == nullptr) return pHead;
	    ListNode * pre = nullptr,*cur = pHead,*after = pHead->next;
        while(cur != nullptr){//建议画个图看看就知道了
            cur->next = pre;
            pre = cur;
            cur = after;
            if(after != nullptr)
                after = after->next;
        }
        
        return pre;
    }
~~~

<p id = "反转链表"></p>

