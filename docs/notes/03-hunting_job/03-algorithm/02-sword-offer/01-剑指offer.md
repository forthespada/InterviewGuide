---
layout:  post
category:  algorithm
title:  No1、二维数组中的查找
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No1、二维数组中的查找
---





<p id="带你快速刷完67道剑指offer"></p>

<h1 align="center">《带你快速刷完67道剑指offer》</h1>

> 算法部分的目录结构是按照不同人群分类的，如果你不知道该看哪个部分的算法题，可以先看一下这里，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;" target="_blank">[戳我直达](Doc/Knowledge/算法/适用人群.md)</font>。

以下是本部分正文：

**前言**



> 以下所有题目均来自于《何海涛. 剑指 Offer[M]. 电子工业出版社, 2012.》一书中

刷题网站推荐：[力扣网](https://www.nowcoder.com/ta/coding-interviews?from=cyc_github)、[牛客网](https://leetcode-cn.com/problemset/lcof/)

因本人主要在牛客网上刷的剑指offer，所以本专栏题目顺序与牛客网顺序保持一致，每道题目下也给出了相应的牛客网链接。

**本专栏介绍**

-  本资料适合于校招、社招工作党以及打算转行做计算机的 C++ 技术栈人士。
-  本资料是阿秀本人在秋招前的刷题记录，基本汇集了牛客网与力扣网上剑指offer专题的各种**精妙解法**
-  文中有适量代码注释，不少题目都有自己四刷五刷的记录，如果你想要在最短时间内刷完剑指offer，本专栏是你绝对不应该错过的！

关于更多本专栏的介绍可以点此了解阿秀的<font style="font-weight:bold; color:#4169E1;text-decoration:underline;" target="_blank">[**秋招找工作经历与个人介绍**](Doc/Other/ContactMe/ContactMe.md#关于阿秀)</font>。

该剑指offer刷题笔记是由<font style="font-weight:bold; color:#4169E1;text-decoration:underline;" target="_blank">**阿秀原创**</font>，后期整理并发布，未经其本人许可不得擅自发布在互联网上，如需引用请标注出处并<font style="font-weight:bold; color:#4169E1;text-decoration:underline;" target="_blank">[**告知本人**](Doc/Other/ContactMe/ContactMe.md#联系阿秀)</font>。

另，因个人水准不同，下面题目中的一些见解不免涉及一些个人主观判断，但也仅代表本人个人意见，与他人无关~

最后祝愿大家都能拿到好 **offer** ~加油！奥利给！

<br>





## **No1、二维数组中的查找**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13&&tqId=11154&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

~~~
[

 [1,2,8,9],
 [2,4,9,12],
 [4,7,10,13],
 [6,8,11,15]

]
~~~

给定 target = 7，返回 true。

给定 target = 3，返回 false。

**示例1**

**输入**

```
7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
```

**返回值**

```
true
```

说明

```
存在7，返回true
```

**示例2**

**输入**

```
3,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
```

**返回值**

```
false
```

**说明**

```
不存在3，返回false
```

**1、第一种方法**

右上角逐渐逼近左下角 很好

- 如果当前位置元素比target小，则row++
- 如果当前位置元素比target大，则col--
- 如果相等，返回true
- 如果越界了还没找到，说明不存在，返回false

~~~cpp
    bool Find(int target, vecianzhtor<vector<int> > array) {
        if(array.empty() || array[0].empty()) return false;
        int row = array[0].size(), col = array.size();
 
        int w=row-1,h=0;
        while(w>=0&&h<col){           
            if(array[h][w]>target) w--;
            else if(array[h][w]<target) h++;
            else 
                return true;
        }
        return false;        
    }
~~~



**2、第二种方法**

每轮用二分法替换 挺不错

执行用时 :60 ms, 在所有 C++ 提交中击败了32.07%的用户

内存消耗 :13.2 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
bool hasFound(vector<int>& array, int target) {

	int start = 0, end = array.size() - 1;
	while (start + 1 < end) {
		int mid = start + (end - start) /2;
		//cout << array[mid] << " "<<start<<" "<<mid<<" "<<end<<" ";
		if (array[mid] == target) return true;
		else if (array[mid] > target) end = mid;
		else
			start = mid;
	}
	if (array[start] == target || array[end] == target) return true;
	return false;

}



bool findNumberIn2DArray(vector<vector<int>>& matrix, int target) {
	if (matrix.empty() || matrix[0].empty()) return false;
	for (int i = 0; i < matrix.size(); ++i) {
		if (hasFound(matrix[i], target)) return true;
	}
	return false;

}
~~~



**二刷：依然不会，没有头绪...**

**1、从右上像左下查找慢慢逼近**

因为这样就断了它变大或者变小的两条路径了，
变大只能向下走，就是h++,变小只能w--了

~~~cpp
    bool Find(int target, vector<vector<int> > array) {
        if(array.size() == 0 || array[0].size() == 0) return false;//条件判断
        int row = array.size(), col = array[0].size();
        int w = col-1, h = 0;//因为这样就断了它变大或者变小的两条路径了，
        //变大只能向下走，就是h++,变小只能w--了
        while( w>=0 && h<row){
            if( array[h][w] > target ) w--;
            else if( array[h][w] < target) h++;
            else
                return true;
        }
        return false;
    }
~~~



**2、每个数组用二分法代替**

~~~cpp
    bool hasFind(vector<int>&nums, int target){
        int low = 0,high = nums.size()-1;
        while(low + 1 < high){
            int mid = low + (high - low)/2;
            if(nums[mid] > target) high = mid;
            else if(nums[mid] < target) low = mid;
            else
                return true;
        }
        
        if(nums[low] == target || nums[high] == target) return true;
        
        return false;        
        
    }
    bool Find(int target, vector<vector<int> > array) {
        if(array.size() == 0 || array[0].size() == 0) return false;//条件判断
        int row = array.size();
        for(int i = 0; i < row; ++i){
            if(hasFind(array[i], target)) return true;
        }
        return false;
    }
~~~

<p id = "替换空格"></p>
