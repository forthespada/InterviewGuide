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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 



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

