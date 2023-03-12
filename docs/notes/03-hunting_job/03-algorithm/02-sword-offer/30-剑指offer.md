---
layout:  post
category:  algorithm
title:  No30、连续子数组的最大和
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No30、连续子数组的最大和
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
  <p>1、👉 最近我发现了一个每日推送都会最新校招咨询的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和留下的<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，好好走下去基本都能拿到不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>



## **No30、连续子数组的最大和**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/459bd355da1549fa8a49e350bf3df484?tpId=13&&tqId=11183&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

 HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。今天测试组开完会后,他又发话了:在古老的一维模式识别中,常常需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1) 

### **示例1**

**输入**

~~~
[1,-2,3,10,-4,7,2,-5]
~~~
**返回值**

~~~
18
~~~
**说明**
输入的数组为{1,-2,3,10,—4,7,2,一5}，和最大的子数组为{3,10,一4,7,2}，因此输出为该子数组的和 18。 



### **1、直接在原数组上改，不借用任何内存**

~~~cpp
int FindGreatestSumOfSubArray(vector<int> array) {
	for (int i = 1; i < array.size(); ++i) {
	    array[i] = max(0,array[i-1]) + array[i];
	}
	return *max_element(array.begin(),array.end());
}
~~~



### **2、两个数字保存中间结果 或者一个数字**

~~~cpp
int FindGreatestSumOfSubArray(vector<int> array) {
 
 
    int len = array.size();
    int maxNum = array[0],result=maxNum;
    for (int i = 1; i < len; ++i) {
        if (maxNum + array[i] > array[i])
            maxNum += array[i];
        else
            maxNum = array[i];
        result = max(maxNum, result);
    }
    return result;
}
~~~



~~~cpp
int FindGreatestSumOfSubArray(vector<int> array) {


	int maxNum = array[0];
	for (int i = 1; i <  array.size(); ++i) {
	    array[i] = max(0,array[i-1]) + array[i];
		maxNum = max(maxNum, array[i]);
	}
	return maxNum;
}
~~~



### **二刷：**

### **1、常规DP做法，其实这题是连续上升子序列的**

~~~cpp
    int FindGreatestSumOfSubArray(vector<int> array) {
    
	if (array.size() == 0) return 0;
	int maxNum = array[0];
	vector<int> dp(array.size(), 0);
	dp[0] = array[0];
	for (int i = 1; i < array.size(); ++i) {
		dp[i] = max(array[i], array[i] + dp[i - 1]);
		maxNum = max(maxNum, dp[i]);
	}
	return maxNum;
    }
~~~



### **2、直接在原数组上进行修改，可以节约一点空间**

运行时间：3ms   占用内存：376k

~~~cpp
    int FindGreatestSumOfSubArray(vector<int> array) {
    
	    if (array.size() == 0) return 0;
        int maxNum = array[0];
        for (int i = 1; i < array.size(); ++i) {
            array[i] = max(array[i], array[i] + array[i - 1]);
            maxNum = max(maxNum, array[i]);
        }
        return maxNum;
    }
~~~

<p id = "连续子数组的最大和"></p>

