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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202302042310919.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/07-resources/01-free/04-schoolSchample.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 






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

