---
layout:  post
category:  algorithm
title:  No43、左旋转字符串
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No43、左旋转字符串
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本)</font> ; 如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.html#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.html)</font>



## **No43、左旋转字符串**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/12d959b108cb42b1ab72cef4d36af5ec?tpId=13&&tqId=11196&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！ 

### **示例1**

**输入**

~~~
"abcXYZdef",3
~~~
**返回值**

~~~
"XYZdefabc"
~~~



### **1、我真的是太傻比了，其实很容易的**

~~~cpp
 string LeftRotateString(string str, int n) {
	int len = str.size();
    if(len==0) return str;//考虑str为空
	if (n >= len) n = n % len;//考虑n比str的长度还要大的情况下
	string temp = str + str;
	string result;
	result.resize(len);
	for (int i = n,index=0; i <len+n; ++i,++index) {
		result[index] = temp[i];
	}
	return result;
    }
~~~



### **2、精简做法**

~~~cpp
string LeftRotateString(string str, int n) {
	int len = str.size();
    if(len==0) return str;
	if (n >= len) n = n % len;
	str += str;
	return str.substr(n,len);
}
~~~



### **二刷：**

### **1、简单的字符串处理函数，记得边界条件**

运行时间：2ms  占用内存：376k

~~~cpp
string LeftRotateString(string str, int n) {
        int len = str.size();
        if(len <= 1) return str;//可能为空
        n = n%len;//并且n有可能比len大的情况
        vector<char> temp(str.begin(),str.end());
        for(int i = 0;i < n;++i)
            temp.push_back(str[i]);
        str.assign(n + temp.begin(),temp.end());
        return std::move(str);
    }
~~~


<p id = "左旋转字符串"></p>

