---
layout:  post
category:  algorithm
title:  No51、构建乘积数组
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No51、构建乘积数组
comment: false
---



## **No51、构建乘积数组**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/94a4d381a68b47b7a8bed86f2975db46?tpId=13&&tqId=11204&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]\*A[1]\*...\*A[i-1]\*A[i+1]\*...\*A[n-1]，不能使用除法。

（注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）

对于A长度为1的情况，B无意义，故而无法构建，因此该情况不会存在。

### **示例1**

**输入**

~~~
[1,2,3,4,5]
~~~
**返回值**

~~~
[120,60,40,30,24]
~~~



### **1、暴力法**

~~~cpp
vector<int> multiply(const vector<int>& A) {
	vector<int> B;
	for (int i = 0; i < A.size(); ++i) {

		int temp = 1;
		for (int j = 0; j < A.size(); ++j) {
			if (j != i) temp *= A[j];
		}
		B.push_back(temp);
	}
	return B;
}
~~~



### **2、一种超级精妙的解法，吹爆了**

~~~cpp
vector<int> multiply(const vector<int>& A) {
	int len = A.size();
	vector<int> B(len,0);
	int temp = 1;
	for (int i = 0; i <len; temp*=A[i],++i) {

		B[i] = temp;
	}

	temp = 1;
	for (int i = len-1; i >= 0; temp *= A[i], --i) {

		B[i] = B[i]*temp;
	}
	return B;
}
~~~



### **二刷：**

### **1、遇到一点问题，还没有很顺利的写出来**

运行时间：2ms  占用内存：376k

~~~cpp
    vector<int> multiply(const vector<int>& A) {
    
	if (A.size() <= 1) return vector<int>();
	int len = A.size();
	vector<int> B(len, 1);
	int left = A[0], right = A[len-1];
	for (int i = 1; i < len; ++i) {//而这里要从第二个开始
		B[i] = left;
		left = left * A[i];
	}

	for (int i = len - 2; i >= 0; --i) {//这里要从倒数第二个开始
		B[i] = B[i] * right;
		right = right * A[i];
	}

	return std::move(B);
    }
~~~


<p id = "构建乘积数组"></p>

