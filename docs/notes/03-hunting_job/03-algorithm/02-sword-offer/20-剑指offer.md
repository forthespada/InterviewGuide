---
layout:  post
category:  algorithm
title:  No20、包含min函数的栈
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No20、包含min函数的栈
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>



## **No20、包含min函数的栈**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/4c776177d2c04c2494f2555c9fcc1e49?tpId=13&&tqId=11173&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

### **1、一次解决 以前做过**

~~~cpp
class Solution {
public:
    void push(int value) {
        if(st.size()==0&&minSt.size()==0) {
            st.push(value);
            minSt.push(value);
        }else{
            st.push(value);
            if(value<=minSt.top()){
                minSt.push(value);
            }
            else{
                minSt.push(minSt.top());
            }
            
        }
        //st.push(value); #这里应该删除
    }
    void pop() {
        st.pop();
        minSt.pop();
    }
    int top() {
        return st.top();
    }
    int min() {
        return minSt.top();
    }
    stack<int> minSt;
    stack<int> st;
};
~~~

>感谢微信好友“Pikachuts”指出笔误，现在改正，多谢。-2021.06.11

### **二刷：**

### **1、只一个栈来做，维持一个最小值，这种方法毫无疑问是更好一点的**

运行时间：2ms  占用内存：504k

注意函数重名问题

~~~cpp
class Solution {
    int minNum = INT_MAX;
    stack<int> st;
public:
    void push(int value) {
        minNum = std::min(value, minNum);//注意当前类中也有一个min函数，
        //所以我们需要明确此时的min函数是哪个函数
        st.push(minNum);
        st.push(value);
        
    }
    void pop() {
        st.pop();//pop掉当前值
        st.pop();//pop掉当前最小值
        int temp = st.top();
        st.pop();
        if(minNum == st.top()){
            st.push(temp);
        }else{
            minNum = st.top();
            st.pop();
            st.push(minNum);
            st.push(temp);
        }

       
    }
    int top() {
        return st.top();
    }
    int min() {
        return minNum;
    }
};
~~~


<p id = "包含min函数的栈"></p>
