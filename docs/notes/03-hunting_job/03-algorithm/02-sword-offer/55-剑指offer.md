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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202206190108471.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/07-resources/01-free/04-schoolSchample.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 

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

