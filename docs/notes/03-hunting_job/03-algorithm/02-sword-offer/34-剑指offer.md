---
layout:  post
category:  algorithm
title:  No34、第一个只出现一次的字符
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No34、第一个只出现一次的字符
comment: false
---


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

