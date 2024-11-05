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
  <p>这是六则或许对你有些许帮助的信息:</p>
<p>⭐️1、阿秀与朋友合作开发了一个<span style="font-weight:bold;color:red">编程资源网站</span>，目前已经收录了很多不错的学习资源和黑科技（附带下载地址），如过你想要寻求合适的编程资源，<a href="https://tools.interviewguide.cn/home" style="text-decoration: underline" target="_blank">欢迎体验</a>以及推荐自己认为不错的资源，众人拾柴火焰高，我为人人，人人为我🔥！</p>  <p>2、👉23年5月份阿秀从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s?__biz=Mzk0ODU4MzEzMw==&mid=2247512170&idx=1&sn=c4a04a383d2dfdece676b75f17224e78" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold;color:red">互联网中大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
<div align="center">
</div>网站地址：<a style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">InterviewGuide大厂面试真题解析网站</a>。点此可以查看该网站的视频介绍：<a style="text-decoration: underline" href="https://www.bilibili.com/video/BV1f94y1C7BL" target="_blank">B站视频讲解</a>   如果可以的话求个B站三连，感谢！
  </p>3、😊
    分享一个学弟发给我的<span style="font-weight:bold;color:red">20T网盘资源合集</span>，<a style="text-decoration: underline" href="https://docs.qq.com/sheet/DY3VPVklVaFFMcUZ4?tab=9h5afr" target="_blank">点此白嫖</a>，主要是各类高清影视、电视剧、音乐、副业、纪录片、英语四六级考试、考研考公等资源。
  </p>
  <p>4、😍免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>
  </p>
  <p>5、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>6、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>

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

