---
layout:  post
category:  algorithm
title:  No55、链表中环的入口结点
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No55、链表中环的入口结点
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
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的《校招日程》文档，其中包括<a style="text-decoration: underline" href="https://flowus.cn/share/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">往届补录</a>、<a style="text-decoration: underline" href="https://flowus.cn/share/5f327c98-1e31-46c8-b86b-5ac6105e021f" target="_blank">应届实习校招</a>信息,比如各种大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>

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

