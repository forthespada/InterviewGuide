---
layout:  post
category:  algorithm
title:  No29、最小的K个数
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No29、最小的K个数
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>


## **No29、最小的K个数**

 <font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/6a296eb82cf844ca8539b57c23e6e9bf?tpId=13&&tqId=11182&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。 

### **示例1**

**输入**

~~~
[4,5,1,6,2,7,3,8],4
~~~
**返回值**

~~~
[1,2,3,4]

~~~



### **1、优先队列来做，最小，用大顶堆来做**

priority_queue<int,vector\<int>,less\<int>>

~~~cpp
    vector<int> GetLeastNumbers_Solution(vector<int> input, int k) {
    if(k > input.size()) return vector<int>();
    priority_queue<int, vector<int>, greater<int>> pq;
	for (auto a : input)
		pq.push(a);
	vector<int> result;
	while (k--) {
		result.push_back(pq.top());
		pq.pop();
	}
	return result;
    }
~~~


<p id = "最小的K个数"></p>

