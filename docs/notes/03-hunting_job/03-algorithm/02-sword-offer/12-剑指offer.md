---
layout:  post
category:  algorithm
title:  No12、数值的整数次方
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No12、数值的整数次方
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 



## **No12、数值的整数次方**  

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00?tpId=13&&tqId=11165&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

保证base和exponent不同时为0。不得使用库函数，同时不需要考虑大数问题，也不用考虑小数点后面0的位数。

### **示例1**

**输入**

```
2.00000,3
```

**返回值**

```
8.00000
```

**示例2**

**输入**

```
2.10000,3
```

**返回值**

```
9.26100
```

**示例3**

**输入**

```
2.00000,-2
```

**返回值**

```
0.25000
```

**说明**

```
2的-2次方等于1/4=0.25
```

### **1、主要要注意正负数的情况，要注意分开**

运行时间：3ms  占用内存：520k

~~~cpp
    double Power(double base, int exponent) {
        if( exponent == 0) return 1.0;
        if( base == 0.0 ) return 0.0;//保证不同时为0，先处理各自为0的情况
        
        bool flag = false;//判断指数是否为负
        if( exponent < 0) {
            flag = true;
            exponent *=-1;//如果为负数，则将指数转正
        }
        double res = base; 
        for(int i = 2;i <= exponent; ++i){
            res *=base;//逐渐递乘
        }
        
        if(flag) return 1.0/res;
        else
            return res;
    }
~~~



### **2、快速幂算法，值得好好看看，力扣上的要求更严谨一些**

 https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/ 

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：5.9 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
    double myPow(double x, int n) {
        if( n == 0) return 1;
        if( x == 0.0) return 0;
        long  exp = n;//
        if(n < 0) {
            exp = n* (-1.0);//，当n == INT_MIN时正数时大于INT_MAX的，所以要用一个大于 INT_MAX的类型来保存，同时在将他转正的时候， n*(-1)的结果依然是一个 int，此时的int是个隐藏类型，然后才将这个结果赋值给 exp，所以用来保存结果值的不应该是个int型，我们用double型的 -1 ,这样就可以将相乘的结果值保存为一个 double类型了，然后再进行赋值
        } 
        
        double res = 1.0;
        while(exp != 0){
            if( (exp &1) == 1 ){
                res *=x;
            }
            x *=x;
            exp >>= 1;
        }

        return n<0 ? 1/res: res;

    }
~~~

<p id = "数值的整数次方"></p>

