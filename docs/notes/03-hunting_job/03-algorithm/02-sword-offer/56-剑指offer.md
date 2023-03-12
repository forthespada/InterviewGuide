---
layout:  post
category:  algorithm
title:  No56、删除链表中的重复结点
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No56、删除链表中的重复结点
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
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>
<p id = "删除链表中的重复结点"></p>


## **No56、删除链表中的重复结点**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/fc533c45b73a41b0b44ccba763f866ef?tpId=13&&tqId=11209&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

### **示例1**

**输入**

~~~
{1,2,3,3,4,4,5}
~~~
**返回值**

~~~
{1,2,5}
~~~



### **1、真的是超级笨，我服了，调试了很多遍才通过的**

大概思想：采用vector保存链表中的不重复元素，然后将链表从表头开始挨个对比，一样就将当前结点保存下来，然后index++，不一样就继续向下遍历，注意边界条件。

~~~cpp
ListNode* deleteDuplication(ListNode* pHead)
{
    if (pHead == nullptr || pHead->next == nullptr) return pHead;
    ListNode* node = (ListNode*)malloc(sizeof(struct ListNode));
    node = pHead;
    vector<int> result;
    result.push_back(node->val);
    node = node->next;
    while (node != nullptr) {
        if (result.size()!=0 && result.back() == node->val) {
            while (node!=nullptr && result.back() == node->val) {
                node = node->next;
            }
            result.pop_back();
        }
        else if (result.size() == 0 || (result.size()!=0 && result.back()!=node->val))
        {
            result.push_back(node->val);
            node = node->next;
        }	
        else
            node = node->next;
    }

    if (result.size() == 0) {
        return nullptr;
    }
    node = pHead;
    int index = 0;
    int len = result.size();
    ListNode* resultNode = (ListNode*)malloc(sizeof(struct ListNode));
    while (node != nullptr) {
        if (index<len && node->val == result[index]) {
            index++;
            resultNode = node;
            break;

        } node = node->next;
    }
    pHead = resultNode;
    while (node != nullptr) {
        if (index < len && node->val == result[index]) {
            index++;
            pHead->next = node;
            pHead = pHead->next;

        } node = node->next;
    }
    pHead->next = nullptr;//最后要设置尾点结束
    return resultNode;
}
~~~



### **2、别人的思路和方法，三指针法，取到原来指针的前一个指针**

1. 首先添加一个头节点，以方便碰到第一个，第二个节点就相同的情况

​    2.设置 pre ，cur指针， pre指针指向当前确定不重复的那个节点，而last指针相当于工作指针，一直往后面搜索。

~~~cpp
if (pHead == nullptr || pHead->next == nullptr) { return pHead; }
	ListNode *Head = (ListNode*)malloc(sizeof(struct ListNode));
	ListNode* pre = (ListNode*)malloc(sizeof(struct ListNode));
	ListNode* cur = (ListNode*)malloc(sizeof(struct ListNode));
	Head->next = pHead;
	pre = Head; //pre相当于原来节点的前一个节点
	cur = Head->next; //cur相当于 原来的节点
	while (cur != nullptr) {
		if (cur->next != nullptr && cur->val == cur->next->val) {
			// 找到最后的一个相同节点
			while (cur->next != nullptr && cur->val == cur->next->val) {
				cur = cur->next;
			}
			pre->next = cur->next; //这里等于cur->next真的很棒
			cur = cur->next;
		}
		else {
			pre = pre->next;
			cur = cur->next;
		}
	}
	return Head->next;
~~~



### **二刷：**

### **1、三指针法，可以将元素开辟到栈上**

~~~cpp
ListNode* deleteDuplication(ListNode* pHead)
{

    if(pHead == nullptr || pHead->next == nullptr) return pHead;
    ListNode dummpyHead(0);
    dummpyHead.next = pHead;
    ListNode *pre = &dummpyHead;
    ListNode *cur = dummpyHead.next;//cur是真正工作的节点
    while(cur != nullptr){
        if(cur->next != nullptr && cur->val == cur->next->val){
            while(cur->next != nullptr && cur->val == cur->next->val)
            {
                cur = cur->next;
            }
            pre->next = cur->next;//这里还不要马上把 pre 赋值过来
            cur = cur->next;
        }else{
            pre = pre->next;
            cur = cur->next;
        }
    }
    return dummpyHead.next;
}
~~~



### **变种：删除链表中的重复结点，保留一个重复点**

在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->3->4->5

~~~cpp
ListNode* deleteDuplication(ListNode* pHead)
{
    if (pHead == nullptr) return nullptr;
    ListNode* node = (ListNode*)malloc(sizeof(struct ListNode));
    node = pHead;
    while (node != nullptr) {

        if (node->next!=nullptr && node->val == node->next->val) {//这里千万要判断node->next也不为空才可以
            while (node->next != nullptr && node->val == node->next->val) {
                node->next = node->next->next;
            }
        }
        node = node->next;
    }
    return pHead;
}
~~~



### **另一种写法**

~~~cpp
ListNode* deleteDuplication(ListNode* pHead)
{
	if (pHead == nullptr || pHead->next == nullptr) return pHead;
	ListNode dummpyHead(0);
	dummpyHead.next = pHead;
	ListNode* pre = &dummpyHead;
	ListNode* cur = dummpyHead.next;
	while (cur != nullptr) {
		if (cur->next != nullptr && cur->val == cur->next->val) {
			while (cur->next != nullptr && cur->val == cur->next->val)
			{
				cur = cur->next;
			}
			pre->next = cur;
			pre = pre->next;
			cur = cur->next;
		}
		else {
			pre = pre->next;
			cur = cur->next;
		}

	}
	return dummpyHead.next;
}
~~~
