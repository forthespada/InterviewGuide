---
layout:  post
category:  algorithm
title:  No47、求1+2+3+...+N
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No47、求1+2+3+...+N
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>


## No47、求1+2+3+...+N

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/7a0da8fc483247ff8800059e12d7caf1?tpId=13&&tqId=11200&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

### **示例1**

**输入**

~~~
5
~~~

**返回值**

~~~
15
~~~

### **1、他妈的，我服了**

~~~cpp
int Sum_Solution(int n) {
    bool a[n][n+1];
    return sizeof(a)>>1;
}
~~~

因为bool类型的为1个字节，或者换为char的也行，他们都是一个字节，如果是short(2),int(4)就不行了

### **2、这个方法真的很妙**

解题思路：
1.需利用逻辑与的短路特性实现递归终止。 
2.当n == 0时，(n > 0) && ((sum += Sum_Solution(n - 1)) > 0)只执行前面的判断，为false，然后直接返回0；
3.当n > 0时，执行sum += Sum_Solution(n - 1)，实现递归计算Sum_Solution(n)。

~~~cpp
    int Sum_Solution(int n) {
	int sumNum = n;
	bool ans = (n > 0) && ((sumNum += Sum_Solution(n - 1)) > 0);
	return sumNum;
    }
~~~

### **二刷：**

### **1、很棒的方法啊**

1.需利用逻辑与的短路特性实现递归终止。 
2.当n == 0时，(n > 0) && ((sum += Sum_Solution(n - 1)) > 0)只执行前面的判断，为false，然后直接返回0；
3.当n > 0时，执行sum += Sum_Solution(n - 1)，实现递归计算Sum_Solution(n)。

运行时间：3ms  占用内存：508k

~~~cpp
    int Sum_Solution(int n) {
        
    int sumNum = n;
	n > 0 && (sumNum += Sum_Solution(n - 1));
	return sumNum;    
        
    }
~~~


<p id = "求总和"></p>

