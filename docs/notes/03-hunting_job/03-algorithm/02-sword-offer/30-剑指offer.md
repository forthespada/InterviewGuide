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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202302042310919.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/07-resources/01-free/04-schoolSchample.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




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

