---
layout:  post
category:  algorithm
title:  No54、字符流中第一个不重复的字符
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No54、字符流中第一个不重复的字符
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

## **No54、字符流中第一个不重复的字符**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/00de97733b8e4f97a3fb5c680ee10720?tpId=13&&tqId=11207&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。

```
如果当前字符流没有存在出现一次的字符，返回#字符。
```



### **1、自己想的一种方法**

~~~cpp
class Solution
{
public:
	//Insert one char from stringstream
	void Insert(char ch)
	{
		v.push_back(ch);
	}
	//return the first appearence once char in current stringstream
	char FirstAppearingOnce()
	{
        if(v.empty())  return '#';
		/*int len = v.size();*/
		for (auto &ch:v) {
			if (count(v.begin(), v.end(), ch) == 1) return ch;
		}
		return '#';
	}

	vector<char> v;
};
~~~



### **2、借助一个unordered_map**

这个方法要慢一些

~~~cpp
class Solution
{
public:
	//Insert one char from stringstream
	void Insert(char ch)
	{
		v.push_back(ch);
		unmp[ch]++;
	}
	//return the first appearence once char in current stringstream
	char FirstAppearingOnce()
	{
		for (auto &ch:v) {
			if (unmp[ch] == 1) return ch;
		}
		return '#';
	}

	vector<char> v;
	unordered_map<char, int> unmp;
};
~~~



### **二刷：**

### **1、简单的方法，复杂度稍微高一些**

运行时间：4ms  占用内存：376k

~~~cpp
class Solution
{
public:
	//Insert one char from stringstream
	void Insert(char ch)
	{
		v.push_back(ch);
	}
	//return the first appearence once char in current stringstream
	char FirstAppearingOnce()
	{
		for (auto &ch:v) {
			if (count(v.begin(),v.end(),ch) == 1) return ch;
		}
		return '#';
	}

	vector<char> v;

};
~~~



### **2、借助一个哈希表，稍微快一点了**

运行时间：4ms  占用内存：376k

~~~cpp
class Solution
{
public:
	//Insert one char from stringstream
	void Insert(char ch)
	{
		v.push_back(ch);
        result[ch]++;
	}
	//return the first appearence once char in current stringstream
	char FirstAppearingOnce()
	{
		for (auto &ch:v) {
			if (result[ch] == 1) return ch;
		}
		return '#';
	}

	vector<char> v;
    unordered_map<char,int> result;

};
~~~


<p id = "字符流中第一个不重复的字符"></p>

