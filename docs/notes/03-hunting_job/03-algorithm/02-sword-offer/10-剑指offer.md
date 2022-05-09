---
layout:  post
category:  algorithm
title:  No10、矩阵覆盖
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No10、矩阵覆盖
---


## **No10、矩阵覆盖**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6?tpId=13&&tqId=11163&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

我们可以用2\*1的小矩形横着或者竖着去覆盖更大的矩形。

请问用n个2\*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

比如n=3时，2*3的矩形块有3种覆盖方法：

![](https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205072310734.png)



**1、其实很简单，画画图就知道了。。。**

~~~cpp
    int rectCover(int number) {

        if(number<=2) return number;       
        return rectCover(number-1)+rectCover(number-2);
    }
~~~



**2、循环很快**

~~~cpp
    int rectCover(int number) {
	if (number <= 2) {
		return number;
	}
	int first = 1, second = 2, third = 3;
	for (int i = 3; i <= number; ++i) {
		third = first + second;
		first = second;
		second = third;
	}
	return third;
    }
~~~



**二刷：感觉还是斐波那契数列的变种**

运行时间：3ms  占用内存：464k

~~~cpp
    int rectCover(int number) {
        if( number <= 2) return number;
        int first = 1, second = 2, third = 0;
        for(int i = 3;i <= number; ++i){
            third = first + second;
            first = second;
            second = third;
        }       
        return third;
    }
~~~
<p id = "矩阵覆盖"></p>

