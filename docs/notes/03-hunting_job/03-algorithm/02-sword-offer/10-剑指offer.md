---
layout:  post
category:  algorithm
title:  No10、矩阵覆盖
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No10、矩阵覆盖
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本)</font> ; 如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.html#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.html)</font>



## **No10、矩阵覆盖**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6?tpId=13&&tqId=11163&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

我们可以用2\*1的小矩形横着或者竖着去覆盖更大的矩形。

请问用n个2\*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

比如n=3时，2*3的矩形块有3种覆盖方法：

![](https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205072310734.png)



### **1、其实很简单，画画图就知道了。。。**

~~~cpp
    int rectCover(int number) {

        if(number<=2) return number;       
        return rectCover(number-1)+rectCover(number-2);
    }
~~~



### **2、循环很快**

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



### **二刷：感觉还是斐波那契数列的变种**

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

