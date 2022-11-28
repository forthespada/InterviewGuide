---
layout:  post
category:  algorithm
title:  No66、机器人的运动范围
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No66、机器人的运动范围
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202206190108471.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/07-resources/01-free/04-schoolSchample.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 

## **No66、机器人的运动范围**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/6e5207314b5241fb83f2329e89fdecc8?tpId=13&&tqId=11219&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

### **示例1**

**输入**

~~~
5,10,10
~~~
**返回值**

~~~
21
~~~



### **1、借助标记法，看的解释，其实很好理解和明白**

~~~cpp
bool canReach(int threshold, int x, int y) {
	int sum = 0;
	while (x > 0) {
		sum += x % 10;
		x /= 10;
	}
	while (y > 0) {
		sum += y % 10;
		y /= 10;
	}
	return sum <= threshold;
}

int movingCountCore(int threshold, int i, int rows,int j ,int cols, vector<vector<bool>>&visit) {
	if (i < 0 || i >= rows || j < 0 || j >= cols || !canReach(threshold, i, j) || visit[i][j] == true) return 0;
	//边界值不满足，不能到达或者已经走过了，也到达不了，返回0
	visit[i][j] = true; // 当前已经走过了，并且满足要求，所有后续return 要加上1

	return movingCountCore(threshold, i - 1, rows, j, cols, visit) + //分别是上下左右各个方向判断一下
		movingCountCore(threshold, i + 1, rows, j, cols, visit) +
		movingCountCore(threshold, i , rows, j-1, cols, visit) +
		movingCountCore(threshold, i, rows, j+1, cols, visit) + 1;

}
int movingCount(int threshold, int rows, int cols)
{
	vector<vector<bool>> visit(rows,vector<bool>(cols,false));
	return movingCountCore(threshold, 0,  rows, 0, cols, visit);
	
}
~~~



### **2、标注借助法的简化版**

递归只要俩行就够了，helper(threshold, rows, cols, flags, i + 1, j) +  helper(threshold, rows, cols, flags, i, j + 1) + 1，不需要往回走，然后前面的判断i，j也不会小于零了  

因为是从（0 0 ），开始走的，所以只需要判断向上和向右的情况即可

~~~cpp
bool canReach(int threshold, int x, int y) {
	int sum = 0;
	while (x > 0) {
		sum += x % 10;
		x /= 10;
	}
	while (y > 0) {
		sum += y % 10;
		y /= 10;
	}
	return sum <= threshold;
}

int movingCountCore(int threshold, int i, int rows,int j ,int cols, vector<vector<bool>>&visit) {
	if (i >= rows || j >= cols || !canReach(threshold, i, j) || visit[i][j] == true) return 0;
	//边界值不满足，不能到达或者已经走过了，也到达不了，返回0
	visit[i][j] = true; // 当前已经走过了，并且满足要求，所有后续return 要加上1

	return  movingCountCore(threshold, i + 1, rows, j, cols, visit) +
		movingCountCore(threshold, i, rows, j+1, cols, visit) + 1;

}
int movingCount(int threshold, int rows, int cols)
{
	vector<vector<bool>> visit(rows,vector<bool>(cols,false));
	return movingCountCore(threshold, 0,  rows, 0, cols, visit);
	
}
~~~



### **3、BFS**

~~~cpp
bool canReach(int threshold, int x, int y) {
	int sum = 0;
	while (x > 0) {
		sum += x % 10;
		x /= 10;
	}
	while (y > 0) {
		sum += y % 10;
		y /= 10;
	}
	return sum <= threshold;
}

int movingCount(int threshold, int rows, int cols)
{
	vector<vector<bool>> grid(rows,vector<bool>(cols,false));
	queue<pair<int, int>> que;
	if (canReach(threshold, 0, 0)) {
		que.push(make_pair(0, 0));
		grid[0][0] = true;
	}
	int cnt = 0;
	while (!que.empty()) {
		++cnt;
		int x, y;
		tie(x, y) = que.front();
		que.pop();
		if (x + 1 < rows && !grid[x + 1][y] && canReach(threshold, x + 1, y)) {
			grid[x + 1][y] = true;
			que.push(make_pair(x + 1, y));
		}
		if (y + 1 < cols && !grid[x][y + 1] && canReach(threshold, x, y + 1)) {
			grid[x][y + 1] = true;
			que.push(make_pair(x, y + 1));
		}
	}
	return cnt;
	
}
~~~



### **二刷：**

### **1、还是比较经典的方法**

运行时间：4ms  占用内存：504k

~~~cpp
int getValue(int row, int col) {
	int sum = 0;
	while (row != 0)
	{
		sum += row % 10;
		row = row / 10;
	}

	while (col != 0)
	{
		sum += col % 10;
		col = col / 10;
	}
	return sum;
}

void movingCountCore(int threshold, int rows, int cols, vector<vector<bool>>& visit, int row, int col, int &count) {
	if (row < 0 || col < 0 || row >= rows || col >= cols || visit[row][col] == true) return;
	if (getValue(row, col) > threshold) {
		visit[row][col] = true;
		return;
	}
	visit[row][col] = true;
	count++;

	movingCountCore(threshold, rows, cols, visit, row + 1, col, count);
	movingCountCore(threshold, rows, cols, visit, row - 1, col, count);
	movingCountCore(threshold, rows, cols, visit, row, col + 1, count);
	movingCountCore(threshold, rows, cols, visit, row, col - 1, count);

}


int movingCount(int threshold, int rows, int cols)
{
	if (rows < 0 || cols < 0) return 0;
	vector<vector<bool>> visit(rows, vector<bool>(cols, false));
	int count = 0;
	movingCountCore(threshold, rows, cols, visit, 0, 0, count);
	return count;

}
~~~


<p id = "机器人的运动范围"></p>

