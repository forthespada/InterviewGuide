---
layout:  post
category:  algorithm
title:  No1、二维数组中的查找
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No1、二维数组中的查找
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本)</font> ; 如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.html#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.html)</font>

## **No1、二维数组中的查找**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13&&tqId=11154&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>



### 题目描述

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

### **示例1**

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

### **示例2**

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

### 1、第一种方法

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

### 2、第二种方法

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

### 二刷：依然不会，没有头绪...

### 1、从右上像左下查找慢慢逼近

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

### 2、每个数组用二分法代替

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
