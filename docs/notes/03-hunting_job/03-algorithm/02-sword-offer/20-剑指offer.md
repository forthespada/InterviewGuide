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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202206190108471.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/05-xiustar/01-xiustar_reading_guide/20220822.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




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
        minNum = st.top();
        st.push(temp);
       
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
