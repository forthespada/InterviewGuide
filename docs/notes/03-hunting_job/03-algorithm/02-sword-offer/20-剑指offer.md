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

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是四则或许对你有帮助的讯息</p>
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的《校招日程》文档，其中包括<a style="text-decoration: underline" href="https://flowus.cn/share/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">往届补录</a>、<a href="https://flowus.cn/share/5f327c98-1e31-46c8-b86b-5ac6105e021f" target="_blank">应届实习校招</a>信息,比如各种大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>



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
        if(!st.empty()){
            int temp = st.top();
            st.pop();
            minNum = st.top();
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
