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
