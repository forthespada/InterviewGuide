---
layout:  post
category:  algorithm
title:  No34、第一个只出现一次的字符
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No34、第一个只出现一次的字符
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
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>


## **No34、第一个只出现一次的字符**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/1c82e8cf713b4bbeb2a5b31cf5b0417c?tpId=13&&tqId=11187&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数） 

### **示例1**

**输入**

~~~
"google"
~~~
**返回值**

~~~
4
~~~



### **1、挺简单的，想多了**

~~~cpp
    int FirstNotRepeatingChar(string str) {	
vector < int > result(58,0);
	for (int i = 0; i < str.size();++i) {
		result[str[i] - 'A'] += 1;
	}

	for (int i = 0; i < str.size(); ++i) {
		if(result[str[i] - 'A']==1)return i;
	}
	return -1;
    }
~~~



### **2、用unordered_map也行**

~~~cpp
    int FirstNotRepeatingChar(string str) {
	unordered_map<char, int> mp;
	for (int i = 0; i < str.size();++i) {
		mp[str[i]] += 1;

	}

	for (int i = 0; i < str.size(); ++i) {
		if(mp[str[i]]==1)return i;
	}
	return -1;
    }
~~~



### **二刷：**

### **1、unordered_map来做，其实用vector也可以**

~~~cpp
    int FirstNotRepeatingChar(string str) {
        
        unordered_map<char,int> unmp;// char index
        
        for( int i = 0;i < str.size(); ++i)
            unmp[str[i]]++;
        
        for(int i = 0;i < str.size(); ++i)
            if(unmp[str[i]] == 1) return i;
        
        return -1;
        
    }
~~~


<p id = "第一个只出现一次的字符"></p>

