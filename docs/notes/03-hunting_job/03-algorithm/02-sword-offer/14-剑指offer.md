---
layout:  post
category:  algorithm
title:  No14、 链表中倒数第k个结点
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No14、 链表中倒数第k个结点
---



## **No14、 链表中倒数第k个结点**  

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/529d3ae5a407492994ad2a246518148a?tpId=13&&tqId=11167&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一个链表，输出该链表中倒数第k个结点。 

**示例1**

**输入**

```
1,{1,2,3,4,5}
```

**返回值**

```
{5}
```

**1、比较简单的一种方法**

时间复杂度较高，没有二刷的那种方法好

~~~cpp
ListNode* FindKthToTail(ListNode* pListHead, unsigned int k) {
        int count=0;
        ListNode * node=pListHead;
        while(pListHead!=nullptr){
            count++;
            pListHead=pListHead->next;
        }
        count = count-k;
        if(count<0) return nullptr;
        while(count--)
            node=node->next;
        return node;
    }
~~~



**二刷：**

**1、快慢指针，不应该说是先后指针**

3 ms  376K

~~~cpp
    ListNode* FindKthToTail(ListNode* pListHead, unsigned int k) {
    ListNode * slowNode = pListHead;
        while(k != 0){//这里判断 k 一直走到 0 即可
            k--;
            if(pListHead != nullptr) pListHead = pListHead->next;//在其中判断是否出现k 大于链表总长度的情况，
            //比如 【1,2,3,4,5】 6这样的情况，如果出现这样的情况，返回即可
            else
                return nullptr;
        }
        
        while(pListHead != nullptr){//先走的不能为空
            slowNode = slowNode->next;
            pListHead = pListHead->next;
        }
        return slowNode;
    }

~~~

<p id = "链表中倒数第k个结点"></p>

