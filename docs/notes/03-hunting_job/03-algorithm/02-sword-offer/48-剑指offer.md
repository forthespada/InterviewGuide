---
layout:  post
category:  algorithm
title:  No48、求两个数相加
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No48、求两个数相加
---


## **No48、求两个数相加**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/59ac416b4b944300b617d4f7f111b215?tpId=13&&tqId=11201&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**
写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、\/四则运算符号。

**示例1**

**输入**

~~~
1,2
~~~
**返回值**

~~~
3
~~~

**1、这种解法真的太厉害了**

~~~cpp
int Add(int num1, int num2)
{
    while( num2!=0 ){
        int sum = num1 ^ num2;
        int carray = (num1 & num2) << 1;
        num1 = sum;
        num2 = carray;
    } 
    return num1;
}
~~~

1. **两个数异或**：相当于每一位相加，而不考虑进位；
2. **两个数相与**，并左移一位：相当于求得进位；
3. 将上述两步的结果相加



首先看十进制是如何做的： 5+7=12，三步走 

第一步：相加各位的值，不算进位，得到2。

 第二步：计算进位值，得到10. 如果这一步的进位值为0，那么第一步得到的值就是最终结果。  

第三步：重复上述两步，只是相加的值变成上述两步的得到的结果2和10，得到12。 



 同样我们可以用三步走的方式计算二进制值相加：

5-101，7-111

 第一步：相加各位的值，不算进位，得到010，二进制每位相加就相当于各位做异或操作，101^111。 

 第二步：计算进位值，得到1010，相当于各位做与操作得到101，再向左移一位得到1010，(101&111)<<1。  

第三步重复上述两步， 各位相加 010^1010=1000，进位值为100=(010&1010)<<1。      

继续重复上述两步：1000^100 = 1100，进位值为0，跳出循环，1100为最终结果。   



什么时候进位制为0也就说明两个数相加到了最终点，也就计算结束了



**二刷：**

**1、不太理解，记住模板吧**

运行时间：2ms  占用内存：376k

~~~cpp
int Add(int num1, int num2)
{

    while(num2 != 0){
        int sum = num1 ^num2;
        int carry = (num1 & num2)<<1;
        num1 = sum;
        num2 = carry;

    }
    return num1;
}
~~~


<p id = "求两个数相加"></p>


