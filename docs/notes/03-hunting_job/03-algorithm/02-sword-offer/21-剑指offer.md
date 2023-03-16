---
layout:  post
category:  algorithm
title:  No21、栈的压入弹出序列
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No21、栈的压入弹出序列
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
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的《校招日程》文档，其中包括<a href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">往届补录</a>、<a href="https://flowus.cn/5f327c98-1e31-46c8-b86b-5ac6105e021f" target="_blank">应届实习校招</a>信息，比如各种大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>



## **No21、栈的压入弹出序列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106?tpId=13&&tqId=11174&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

### **示例1**

**输入**

~~~
[1,2,3,4,5],[4,3,5,1,2]
~~~
**返回值**

~~~
false
~~~



### **1、想岔了，用vector**

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {

       if(pushV.size() == 0) return false;
        vector<int> v;
        for(int i = 0,j = 0 ;i < pushV.size();){
            v.push_back(pushV[i++]);
            while (j < popV.size() &&!v.empty()&& v.back() == popV[j]) {
                v.pop_back();
                j++;
            }     
            }
            return v.empty();
    }
~~~



### **2、借助栈**

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {

if (pushV.empty() || popV.empty() || pushV.size() != popV.size())
	return false;
	stack<int> s;
	int j = 0;
	for (int i = 0; i < pushV.size(); ++i) {
		s.push(pushV[i]);
		while (!s.empty() && s.top() == popV[j]) {
			s.pop();
			++j;
		}
	}
	if (s.empty())
		return true;
	return false;
    }
~~~



### **二刷：**

### **1、挺容易的，可以再看一下**

运行时间：3ms  占用内存：508k

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {
	int len = pushV.size();
	int pushIndex = 0, popIndex = 0;
	stack<int>st;
	while (pushIndex < len && popIndex < len) {
		if (pushV[pushIndex] != popV[popIndex]) {
			st.push(pushV[pushIndex++]);
		}
		else {
			popIndex++;
			pushIndex++;
			while (!st.empty() && popIndex<len && st.top() == popV[popIndex]) {
				st.pop();
				popIndex++;
			}
		}
	}

	while (popIndex < len && st.top() == popV[popIndex]) {
		st.pop();
		popIndex++;
	}
	return popIndex == len && st.empty();
    }
~~~



### **2、精练一下代码**

运行时间：3ms  占用内存：380k

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {
	if(pushV.size() == 0 || popV.size() == 0 || pushV.size() != popV.size()) return false;
    int len = pushV.size();
	int popIndex = 0;
	stack<int>st;
    for(int i = 0; i < len; ++i){
        st.push(pushV[i]);
        while (popIndex < len && !st.empty() &&st.top() == popV[popIndex]) {
			st.pop();
			popIndex++;
		}        
    }
	return st.empty();
    }
~~~

<p id = "栈的压入弹出序列"></p>

