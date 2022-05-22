---
layout:  post
category:  algorithm
title:  No13、调整数组顺序使奇数位于偶数前面
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No13、调整数组顺序使奇数位于偶数前面
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.html#_4、阿秀-如何才能联系到你)</font>;免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.html)</font>;如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 



## **No13、调整数组顺序使奇数位于偶数前面**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/beb5aa231adc45b2a5dcc5b62c93f593?tpId=13&&tqId=11166&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。 



### **1、暴力解法，新开辟一个数组保存数据**

~~~cpp
void reOrderArray(vector<int>& array) {
	
	
	vector<int> temp(array.size(), 0);
	int low = 0;
	for (int i = 0; i < array.size(); ++i) {
		if ((array[i] & 1) == 1) { temp[low++] = array[i]; }
	}

	for (int i = 0; i < array.size(); ++i) {
		if ((array[i] & 1) == 0) { temp[low++] = array[i]; }
	}
	array.assign(temp.begin(), temp.end());
}
~~~



### **2、一种很巧妙的解法，空间复杂度o1的做法，时间复杂度是on^2**

~~~cpp
void reOrderArray(vector<int>& array) {
	
	for (int i = 0; i < array.size(); i++)
	{
		//for (auto a : array) {
		//	cout << a << " ";
		//}
		cout << endl;
		for (int j = array.size() - 1; j > i; j--)
		{
			if (array[j] % 2 == 1 && array[j-1] % 2 == 0) //前偶后奇就进行交换，这样一趟下来可以将第一个奇数放在首位，同时最后一个偶数放在末尾
			{
				swap(array[j], array[j - 1]);
			}
		}
	}
}
~~~



### **3、时间和空间都是on的做法，只保存偶数部分**

~~~cpp
    void reOrderArray(vector<int> &array) {
    vector<int> temp(array.size(), 0);
	int oddIndex = 0, evenIndex = 0;
	for (auto a : array) {
		if ((a & 1) == 1) array[oddIndex++] = a;
		else
			temp[evenIndex++] = a;
	}

	for (int i = 0; i < evenIndex; ++i)
		array[oddIndex + i] = temp[i];
    }
~~~



### **二刷：**

### **1、笨方法另外开辟一个数组，先保存奇数，再保存偶数**

~~~cpp
    void reOrderArray(vector<int> &array) {
        
        int len = array.size();
        if(len <= 1) return;
        int index = 0;
        vector<int> temp(len,0);
        for(int i=0;i<len;++i){
            if(array[i] %2 == 1) temp[index++] = array[i];
        }
        
       for(int i=0;i<len;++i){
            if(array[i] %2 == 0) temp[index++] = array[i];
        }
        
        array.assign(temp.begin(), temp.end());
    }
~~~



### **2、一种原地解法，很巧妙，从后向前进行修正，类似于冒泡法，同时对一刷的时候进行改进**

运行时间：2ms  占用内存：480k

~~~cpp
    void reOrderArray(vector<int> &array) {
        
	int len = array.size();
	if (len <= 1) return;
	for (int i = 0; i <= len/2; ++i) {

		for (int j = len - 1; j > i; --j) {
			if ( (array[j]&1) == 1 && (array[j - 1]&1) == 0)  swap(array[j], array[j - 1]);//前偶后奇就进行交换，并且一次就可以固定最前面的奇数位置后最后面的偶数位置，所以最多只需要遍历一般数组的长度即可，所以i<=len/2即可
		}
	}
    }
~~~



### **3、第三种解法，但是并不是原地解法，至少比第一种要好一点，只保存偶数数据**

运行时间：3ms 占用内存：484k  odd奇数：even偶数

~~~cpp
    void reOrderArray(vector<int> &array) {
        
	int len = array.size(),evenIndex = 0,oddIndex = 0;
	if (len <= 1) return;        
    vector<int> temp(len/2+1,0);
	for (int i = 0; i <len; ++i) {

		if ( (array[i]&1) == 1)  array[oddIndex++] = array[i];
        else{
            temp[evenIndex++] = array[i];//将偶数另外保存起来
        }

	}
        
    for(int j = 0;j < evenIndex; ++j){
        array[j + oddIndex] = temp[j];
    }
    }
~~~

<p id = "调整数组顺序使奇数位于偶数前面"></p>

