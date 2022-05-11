---
layout:  post
category:  algorithm
title:  No8、 跳台阶
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No8、 跳台阶
comment: false
---





## **No8、 跳台阶**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4?tpId=13&&tqId=11161&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

## **题目描述**

一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。 



## **1、递归做法，真的很耗时**

~~~cpp
    int jumpFloor(int number) {
        if(number==1) return 1;
        if(number==2) return 2;
        return jumpFloor(number-1) + jumpFloor(number-2);
        
    }
~~~



## **2、直接循环会好很多**

~~~cpp
    int jumpFloor(int number) {
        if (number == 1) {
            return 1;
        }
        int first = 1;
        int second = 2;
        for (int i = 3; i <= number; ++i) {
            int third = first + second;
            first = second;
            second = third;
        }
        return second;        
    }
~~~



## **二刷：其实就是斐波那契数列**

运行时间：3ms 占用内存：376k

~~~cpp
    int jumpFloor(int number) {
        
        if( number <= 2) return number;//0 1 2 直接返回即可
        int first = 1, second = 2,third = 0;
        for(int i = 3;i <= number; ++i){
            third = first + second;
            first = second;
            second = third;
        }
        return third;
    }
~~~

<p id = "变态跳台阶"></p>

