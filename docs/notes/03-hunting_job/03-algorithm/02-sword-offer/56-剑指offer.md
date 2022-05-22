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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.html#_4、阿秀-如何才能联系到你)</font>;免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.html)</font>;如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 

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
