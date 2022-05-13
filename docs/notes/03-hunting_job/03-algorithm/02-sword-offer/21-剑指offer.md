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
            while(j < popV.size() && v.back() == popV[j]){
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

