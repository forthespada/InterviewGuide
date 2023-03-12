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

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是四则或许对你有帮助的讯息</p>
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>



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

