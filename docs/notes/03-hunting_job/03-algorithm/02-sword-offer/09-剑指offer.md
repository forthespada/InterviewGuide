---
layout:  post
category:  algorithm
title:  No9、变态跳台阶
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No9、变态跳台阶
---





## **No9、变态跳台阶**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/22243d016f6b47f2a6928b4313c85387?tpId=13&&tqId=11162&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。



**1、看了讲解豁然开朗**

因为n级台阶，第一步有n种跳法：跳1级、跳2级、到跳n级
跳1级，剩下n-1级，则剩下跳法是f(n-1)
跳2级，剩下n-2级，则剩下跳法是f(n-2)
所以f(n)=f(n-1)+f(n-2)+...+f(1)
因为f(n-1)=f(n-2)+f(n-3)+...+f(1)
所以f(n)=2*f(n-1)

~~~cpp
int jumpFloorII(int number) {

    if(number==1) return 1;
    return 2*jumpFloorII(number-1);
}
~~~



**2、第二种方法**

~~~cpp
    int jumpFloorII(int number) {

        if(number==1) return 1;
        int count=0,a=1;
        for(int i=2;i<=number;++i){
            count=a*2;
            a=count;
        }
        return count;
    }
~~~



**二刷：还行，找好规律**

运行时间：4ms 占用内存：488k

~~~cpp
int jumpFloorII(int number) {

    if( number <= 1) return number;
    return pow(2, number-1);
}
~~~

<p id = "矩阵覆盖"></p>

