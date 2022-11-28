---
layout:  post
category:  algorithm
title:  No42、和为S的两个数字
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No42、和为S的两个数字
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202206190108471.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/07-resources/01-free/04-schoolSchample.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




## **No42、和为S的两个数字**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/390da4f7a00f44bea7c2f3d19491311b?tpId=13&&tqId=11195&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

**输出描述:**

```
对应每个测试案例，输出两个数，小的先输出
```

### **示例1**

**输入**

~~~
[1,2,4,7,11,15],15
~~~
**返回值**

~~~
[4,11]
~~~



### **1、很简单的一个问题**

~~~cpp
vector<int> FindNumbersWithSum(vector<int> array,int sum) {        
    vector<int>  result;
    if (array.size() == 0)  return result;
    int low = 0, high = array.size() - 1;

    while (low < high) {
        if (array[low] + array[high] == sum) {
            result.push_back(array[low]);
            result.push_back(array[high]);
            return result;
        }
        else if (array[low] + array[high] < sum)  low++;
        else {
            high--;
        }
    }
    return result;
}
~~~



### **二刷：**

### **1、滑动窗口来做**

运行时间：3ms  占用内存：512k

~~~cpp
 vector<int> FindNumbersWithSum(vector<int> array,int sum) {
       int low= 0, high = array.size()-1;
       int minResult = INT_MAX;
       vector<int> result;
       while(low < high){
           int sumTemp = array[low] + array[high];
           if(sumTemp == sum){
               if( array[low] * array[high] < minResult){
                  result.clear();
                  result.push_back(array[low]);
                  result.push_back(array[high]);
                  minResult = array[low] * array[high];//这里其实可以直接返回的，因为同比情况下，两个数字相差越远，他们的乘积越小的，约靠近相差的乘积就越大
               }
               
               low++;
           }else if(sumTemp > sum) high--;
           else
               low++;
       }
       return result;
    }
~~~



### **优化一下**

运行时间：2ms  占用内存：476k

~~~cpp
vector<int> FindNumbersWithSum(vector<int> array,int sum) {
       int low= 0, high = array.size()-1;
       vector<int> result;
       while(low < high){
           int sumTemp = array[low] + array[high];
           if(sumTemp == sum){
               result.push_back(array[low]);
               result.push_back(array[high]);
               return result;

           }else if(sumTemp > sum) high--;
           else
               low++;
       }
       return result;
    }
~~~


<p id = "和为S的两个数字"></p>

