---
layout:  post
category:  algorithm
title:  No37、 统计一个数字在排序数组中出现的次数
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No37、 统计一个数字在排序数组中出现的次数
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>



## **No37、 统计一个数字在排序数组中出现的次数**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/70610bf967994b22bb1c26f9ae901fa2?tpId=13&&tqId=11190&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

统计一个数字在升序数组中出现的次数。

### **示例1**

**输入**

```
[1,2,3,3,3,3,4,5],3
```
**返回值**

```
4
```



### **1、STL中取巧的一种写法，直接调equal_range() 方法**

~~~cpp
int GetNumberOfK(vector<int> data ,int k) {
    auto pos = equal_range(data.begin(),data.end(),k);
    return pos.second - pos.first;
    }
~~~



### **2、二分法，找到第一次出现的位置和最后一次出现的位置，还是记这种二分法模板吧**

low<=high  low = mid+1,high = mid-1;

运行时间：2ms  占用内存：504k

~~~cpp
int GetNumberOfK(vector<int> data, int k) {

	int low = 0, high = data.size() - 1;
	if (high == -1) return 0;//data为空


	while (low  <= high) {
		int mid = low + (high - low)/2;
		if (data[mid] > k) high = mid -1 ;
		else if (data[mid] < k) low = mid + 1;
		else {//已经找到
				int count = 0;
            count++;
			int index = mid-1;
			while (index >= 0 && data[index] == k) {
				count++;
				index--;
			}
			index = mid + 1;
			while (index <=data.size()-1&& data[index] == k) {
				count++;
				index++;
			}
			return count;
		}
	}
	return 0;//没有找到，直接返回 0 吧
}
~~~


<p id = "统计一个数字在排序数组中出现的次数"></p>

