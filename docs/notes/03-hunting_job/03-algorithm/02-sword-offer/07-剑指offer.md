---
layout:  post
category:  algorithm
title:  No7、斐波那契数列
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No7、斐波那契数列
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>





## **No7、斐波那契数列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3?tpId=13&&tqId=11160&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。

**n≤39**

### **示例1**

**输入**

```
4
```

**返回值**

```
3
```



easy不需再刷

### **1、采用三个元素保存数组即可**

~~~cpp
    int Fibonacci(int n) {

	if (n == 1 || n == 2) return 1;//1、1、2、3、5、8、13、21、34
		if (n == 3) return 2;
	vector<int> F(3);
	F[0] = 1;
	F[1] = 1;
	F[2] = 2;
	for (int i = 3; i < n; ++i) {
		F[i % 3] = F[(i - 1) % 3] + F[(i - 2) % 3];


	}
	return F[(n - 1) % 3];
        
    }
~~~



### **2、递归，慢得多**

~~~cpp
int Fibonacci(int n) {

	if(n==0) return 0;
    if (n == 1 || n == 2) return 1;//1、1、2、3、5、8、13、21、34
	return Fibonacci(n-1)+Fibonacci(n-2);
}
~~~

### **二刷：很简单**

三个元素来保存元素，来回替换即可

运行时间：3ms 占用内存：360k

~~~cpp
int Fibonacci(int n) {
    if( n == 0) return 0;
    if( n == 1) return 1;
    int first = 0,second = 1,third = 1;
    for(int i = 2; i <= n; ++i){
        third = first + second;
        first =  second;
        second = third;
    }
    return third;
}
~~~

