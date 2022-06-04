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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 

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

