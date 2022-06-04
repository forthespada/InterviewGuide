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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 



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

