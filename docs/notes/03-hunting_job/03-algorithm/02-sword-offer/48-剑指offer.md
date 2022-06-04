---
layout:  post
category:  algorithm
title:  No48、求两个数相加
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No48、求两个数相加
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 



## **No48、求两个数相加**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/59ac416b4b944300b617d4f7f111b215?tpId=13&&tqId=11201&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、\/四则运算符号。

### **示例1**

**输入**

~~~
1,2
~~~
**返回值**

~~~
3
~~~

### **1、这种解法真的太厉害了**

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



### **二刷：**

### **1、不太理解，记住模板吧**

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

