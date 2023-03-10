---
layout:  post
category:  algorithm
title:  No31、整数中1出现的次数
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No31、整数中1出现的次数
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是四则或许对你有帮助的讯息</p>
  <p>1、👉 最近发现了一个每日推送都会最新校招咨询的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，无偿分享一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和留下的<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，好好走下去基本都能拿到不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>



## **No31、整数中1出现的次数（ 从1 到 n 中1出现的次数 ）**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/bd7f978302044eee894445e244c7eee6?tpId=13&&tqId=11184&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

求出1-13的整数中1出现的次数,并算出100-1300的整数中1出现的次数？

为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。

ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。 

**输入**

```
13
```
**返回值**

```
6
```



### **1、经典方法吗，真的想不到这种方法，我服了**

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：5.8 MB, 在所有 C++ 提交中击败了100.00%的用户

分两种情况，例如：1234和2234，high为最高位，pow为最高位权重
在每种情况下都将数分段处理，即0-999，1000-1999，...，剩余部分

 case1：最高位是1，则最高位的1的次数为last+1（1000-1234）
               每阶段即0-999的1的个数1*countDigitOne(pow-1)
               剩余部分1的个数为countDigitOne(last)--最高位已单独计算了

 case2：最高位不是1，则最高位的1的次数为pow（1000-1999）
               每阶段除去最高位即0-999，1000-1999中1的次数为high*countDigitOne(pow-1)
               剩余部分1的个数为countDigitOne(last)
              发现两种情况仅差别在最高位的1的个数，因此单独计算最高位的1（cnt），合并处理两种情况

~~~cpp
 int NumberOf1Between1AndN_Solution(int n)
    {
    if (n <= 0) return 0;
	if (n < 10) return 1;
	int high = n, pow = 1;// // 取出最高位 以及 最高位的权重
	while (high >= 10) {
		high /= 10;
		pow *= 10;
	}
	int last = n - high * pow;// 除最高位的数字
	int cnt = high == 1 ? last + 1 : pow;// high是否为1，最高位的1个数不同
	return cnt + high * NumberOf1Between1AndN_Solution(pow - 1) + NumberOf1Between1AndN_Solution(last);

    }
~~~



### **二刷：**

### **超级好的方法**

运行时间：2ms  占用内存：376k

~~~cpp
    int NumberOf1Between1AndN_Solution(int n)
    {
        if(n <= 0) return 0;
        if(n < 10) return 1;
        int high = n,pow = 1;//首选求的最高位high和权重pow 10 还是100 还是 100 呢
        while(high>=10){
            high = high /10;
            pow = pow * 10;
        }
        int last = n - high*pow;
        int cut = (high == 1? last + 1:pow );
        return cut + high*NumberOf1Between1AndN_Solution(pow - 1) + NumberOf1Between1AndN_Solution(last);
    }
~~~



### **三刷：**

~~~cpp
    int NumberOf1Between1AndN_Solution(int n)
    {
        if(n <= 0) return 0;
        if(n< 10 ) return 1;
        if(n == 10) return 2;
        int pow = 1, high = n,last = 0;
        while(high >= 10){
            high = high/10;
            pow *=10;
        }
        last = n - high*pow;// 除去最高位的数字，还剩下多少 0-999 1000- 1999 2000-2999 3000 3345
        int cut = high == 1 ? last+1: pow;
        
        return cut + high*NumberOf1Between1AndN_Solution(pow-1) + NumberOf1Between1AndN_Solution(last);

    }
~~~

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[力扣](https://leetcode-cn.com/problems/number-of-digit-one/submissions/)</font>上有类似的题目


<p id = "整数中1出现的次数"></p>

