---
layout:  post
category:  algorithm
title:  No2、替换空格
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No2、替换空格
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本)</font> ; 如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.html#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.html)</font>




## **No2、替换空格**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423?tpId=13&&tqId=11155&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。 

### 1、首先统计出长度，然后从后向前替换

~~~cpp
void replaceSpace(char *str,int length) {//int length是指当前的长度
    int spaceCount = 0;
    int totalLen = length;
    for(int i = 0; i < length; ++i){
        if(str[i] == ' ') spaceCount++;
    }

    totalLen += spaceCount*2;
    for(int i = length-1; i>=0 &&totalLen != i; --i){//当 i = totalLen的时候说明前面已经
        //都没有空格了，可以节约一部分时间，而不是一直赋值下去
        if(str[i] != ' ') str[--totalLen] = str[i];
        else{
            str[--totalLen] = '0';
            str[--totalLen] = '2';
            str[--totalLen] = '%';                
        }

    }
}
~~~

<p id ="从头到尾打印链表"></p>
