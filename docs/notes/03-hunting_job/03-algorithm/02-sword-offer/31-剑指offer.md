---
layout:  post
category:  algorithm
title:  No31、整数中1出现的次数
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No31、整数中1出现的次数
---



## **No31、整数中1出现的次数（ 从1 到 n 中1出现的次数 ）**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/bd7f978302044eee894445e244c7eee6?tpId=13&&tqId=11184&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

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



**1、经典方法吗，真的想不到这种方法，我服了**

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



**二刷：**

**超级好的方法**

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



**三刷：**

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

