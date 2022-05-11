---
layout:  post
category:  algorithm
title:  No3、从尾到头打印链表
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No3、从尾到头打印链表
comment: false
---





## **No3、从尾到头打印链表**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&&tqId=11156&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一个链表，按链表从尾到头的顺序返回一个ArrayList。 

### **1、这题也太傻逼了，从前向后保存，然后reverse不就可以了吗。。。**

运行时间：3ms  占用内存：504k

~~~cpp
vector<int> printListFromTailToHead(ListNode* head) {
    if( head == nullptr) return vector<int>();

    vector<int> result;
    while(head != nullptr){
        result.push_back(head->val);
        head = head->next;
    }

    reverse(result.begin(),result.end());
    return result;

}
~~~



### **2、不用reverse，返回一个逆序也行**

运行时间：2ms  占用内存：480k

~~~cpp
vector<int> printListFromTailToHead(ListNode* head) {
    if( head == nullptr) return vector<int>();

    vector<int> result;
    while(head != nullptr){
        result.push_back(head->val);
        head = head->next;
    }

    // reverse(result.begin(),result.end());
    return vector<int>(result.rbegin(),result.rend());

}
~~~

<p id = "重建二叉树"></p>

