---
layout:  post
category:  algorithm
title:  No50、数组中重复的数字
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No50、数组中重复的数字
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.html#_4、阿秀-如何才能联系到你)</font>;免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.html)</font>;如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




## **No50、数组中重复的数字**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/623a5ac0ea5b4e5f95552655361ae0a8?tpId=13&&tqId=11203&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中第一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。

**返回描述：**

如果数组中有重复的数字，函数返回true，否则返回false。

如果数组中有重复的数字，把重复的数字放到参数duplication[0]中。（ps:duplication已经初始化，可以直接赋值使用。）



### **1、用unordered_map保存即可**

~~~cpp
bool duplicate(int numbers[], int length, int* duplication) {
	unordered_map<int, int> unmp;
	unmp.reserve(length);
	for (int i = 0; i < length; ++i) {
		if (unmp.find(numbers[i]) == unmp.end()) {
			unmp.insert({ numbers[i],1 });
		}
		else
		{
			*duplication = numbers[i];
			return true;
		}
	}
	return false;
}
~~~



### **2、减少内存，降低内存复杂度**

用 vector\<char>来存 

~~~cpp
bool duplicate(int numbers[], int length, int* duplication) {
    vector<bool> result(length,false);
    for (int i = 0; i < length; ++i) {
        if (result[numbers[i]] == false) {
            result[numbers[i]] = true;
        }
        else
        {
            duplication[0] = numbers[i];
            return true;
        }
    }
    return false;
}
~~~



### **3、不占用任何空间的一种做法**

题目里写了数组里数字的范围保证在0 ~ n-1   之间，所以可以利用现有数组设置标志，当一个数字被访问过后，可以设置对应位上的数 +   n，之后再遇到相同的数时，会发现对应位上的数已经大于等于n了，那么直接返回这个数即可。  

~~~cpp
bool duplicate(int numbers[], int length, int* duplication) {
	for (int i = 0; i < length; ++i) {
		int index = numbers[i];
		if (index >= length) index -= length;
		if (numbers[index] >= length) {
			duplication[0] = index;
			return true;
		}
		numbers[index] += length;
	}
	return false;
}
~~~



### **二刷：**

### **1、常规做法就是哈希表，使用一个vector的bool型数组会节约不少空间**

运行时间：2ms  占用内存：508k

~~~cpp
bool duplicate(int numbers[], int length, int* duplication) {
    vector<bool> result(length,false);
    for (int i = 0; i < length; ++i) {
        if (result[numbers[i]] == false) {
            result[numbers[i]] = true;
        }
        else
        {
            duplication[0] = numbers[i];
            return true;
        }
    }
    return false;
    }
~~~



### **2、另一种原地做法**

运行时间：2ms  占用内存：476k

~~~cpp
bool duplicate(int numbers[], int length, int* duplication) {
    for(int i = 0;i < length; ++i){//这个方法妙在对于依次遍历过的每个数，都能在数组里记忆它出现过了。
        //比如{2,2,1,0}，第一次循环index = 2,a[2]=a[2] + 4 = 5,这样，a[2]=5 > 数组长度4,就说明2这个数字出现过了。
        int index = numbers[i]%length;
        if( numbers[index] >= length){
            duplication[0] = index;
            return true;
        }
        numbers[index] += length;
    }

    return false;
}
~~~

注释：和Top100中 [448](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/) 很像，做法差不多


<p id = "数组中重复的数字"></p>

