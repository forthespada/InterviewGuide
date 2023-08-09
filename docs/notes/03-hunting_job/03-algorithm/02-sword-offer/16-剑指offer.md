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

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是四则或许对你有些许帮助的信息:</p>
  <p>1、👉23年5月份我从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s/zKItpGwIkHKK4g2aOlL2rA" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold">大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
<div align="center">
  <a  style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">  <img src="http://oss.interviewguide.cn/img/202308091638172.png" style="zoom:100%;" /></a>
<p style="font-weight:bold">衷心希望自己开发的这个网站能够帮到更多的人，自己能够以技术服务于大家！</p>
</div>网站地址：<a style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">InterviewGuide大厂面试真题解析网站</a>。点此可以查看该网站的视频介绍：<a style="text-decoration: underline" href="https://www.bilibili.com/video/BV1f94y1C7BL" target="_blank">B站视频讲解</a>   如果可以的话求个B站三连，感谢！
  </p> 
  <p>2、😍
    免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>



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

