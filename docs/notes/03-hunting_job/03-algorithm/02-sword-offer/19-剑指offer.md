---
layout:  post
category:  algorithm
title:  No19、顺时针打印矩阵
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No19、顺时针打印矩阵
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.html#_4、阿秀-如何才能联系到你)</font>;免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.html)</font>;如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




## **No19、顺时针打印矩阵**



<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a?tpId=13&&tqId=11172&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10. 

### **示例1**

**输入**

```
[[1,2],[3,4]]
```

**返回值**

```
[1,2,4,3]
```

### **1、有点难，在力扣上写了好久**

主要就是分析清楚上下左右的情况

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：6.7 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
vector<int> spiralOrder(vector<vector<int>>& matrix) {
	if (matrix.size()==0) return vector<int>();
	if (matrix.size() == 1) return matrix[0];
	int row = matrix.size(), col = matrix[0].size();
	int left = 0, right = 0, top = 0, bottom = 0;
	vector<int> result;
	while (left + right < col && top + bottom < row) {
		
		for (int i = left; i < col - left - right + left; ++i) {
			//cout << matrix[top][i];
			result.push_back(matrix[top][i]);
		}

		top++;
		//cout << " top " <<top<<bottom<< endl;
		if (top + bottom == row) break;


		for (int i = top; i < row - top - bottom + top; ++i) {
			//cout << matrix[i][col - right - 1];
			result.push_back(matrix[i][col - right - 1]);
		}		
		right++;
		//cout << "right"<<left<<right<<endl;
		if (left + right == col) break;


		for (int i = col-right-1; i >= left ; --i) {
			//cout << matrix[row - bottom - 1][i];
			result.push_back(matrix[row - bottom - 1][i]);
		}
		bottom++;
		//cout << " bottom " << top << bottom << endl;
		if (top + bottom == row) break;
		

		for (int i = row-bottom-1; i >= top; --i) {
			//cout << matrix[i][left];
			result.push_back(matrix[i][left]);
		}
		left++;
		//cout << "left" << left << right << endl;
	}
	return result;
}
~~~



### **2、新的写法，这种其实更好理解**

执行用时：24 ms, 在所有 C++ 提交中击败了56.85%的用户

内存消耗：10 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector <int> res;
        if(matrix.empty()) return res;
        int rl = 0, rh = matrix.size()-1; //记录待打印的矩阵上下边缘
        int cl = 0, ch = matrix[0].size()-1; //记录待打印的矩阵左右边缘
        while(1){
            for(int i=cl; i<=ch; i++) res.push_back(matrix[rl][i]);//从左往右
            if(++rl > rh) break; //若超出边界，退出
            for(int i=rl; i<=rh; i++) res.push_back(matrix[i][ch]);//从上往下
            if(--ch < cl) break;
            for(int i=ch; i>=cl; i--) res.push_back(matrix[rh][i]);//从右往左
            if(--rh < rl) break;
            for(int i=rh; i>=rl; i--) res.push_back(matrix[i][cl]);//从下往上
            if(++cl > ch) break;
        }
        return res;
    }
~~~



### **3、改进一下第二种写法，快上不少**

执行用时：12 ms, 在所有 C++ 提交中击败了98.41%的用户

内存消耗：10.3 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
vector<int> spiralOrder(vector<vector<int>>& matrix) {
	vector <int> res;
	if (matrix.empty()) return res;
	int top = 0, bottom = matrix.size() - 1; //记录待打印的矩阵上下边缘
	int left = 0, right = matrix[0].size() - 1; //记录待打印的矩阵左右边缘
	while (1) {
		for (int i = left; i <= right; ++i) res.push_back(matrix[top][i]);//从左往右
		if (++top > bottom) break; //若超出边界，退出

		for (int i = top; i <= bottom; ++i) res.push_back(matrix[i][right]);//从上往下
		if (--right < left) break;

		for (int i = right; i >= left; --i) res.push_back(matrix[bottom][i]);//从右往左
		if (--bottom < top) break;

		for (int i = bottom; i >= top; --i) res.push_back(matrix[i][left]);//从下往上
		if (++left > right) break;
	}
	return res;
}
~~~



### **二刷：**

### **1、最快的做法，注意中间的判断条件不可少**

运行时间：3ms  占用内存：496k

~~~cpp
 vector<int> printMatrix(vector<vector<int> > matrix) {

if (matrix.size() == 0 || matrix[0].size() == 0) return vector<int>();
	int left = 0, right = matrix[0].size() - 1, top = 0, bottom = matrix.size() - 1;
	vector<int> result;
	while (left <= right && top <= bottom) {
		for (int i = left; i <= right; ++i)
		{
			//cout << matrix[top][i] << " ";
			result.push_back(matrix[top][i]);

		}
		if (++top > bottom) break;
		for (int i = top; i <= bottom; ++i)
		{
			//cout << matrix[i][right] << " ";
			result.push_back(matrix[i][right]);

		}
		if (--right < left) break;
		for (int i = right ; i >= left; --i) {
			//cout << matrix[bottom][i] << " ";
			result.push_back(matrix[bottom][i]);
		}
		if (--bottom < top) break;
		for (int i = bottom; i >= top; --i) {
			//cout << matrix[i][left] << " ";
			result.push_back(matrix[i][left]);
		}
		if (++left > right) break;
	}

	return result;
    }
~~~


<p id = "顺时针打印矩阵"></p>

