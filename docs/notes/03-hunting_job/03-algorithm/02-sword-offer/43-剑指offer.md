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

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是四则或许对你有帮助的讯息</p>
  <p>1、👉 最近发现了一个每日推送都会最新校招咨询的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，无偿分享一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和留下的<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，好好走下去基本都能拿到不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>


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

