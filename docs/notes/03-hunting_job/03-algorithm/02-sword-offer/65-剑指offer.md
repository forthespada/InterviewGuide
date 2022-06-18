---
layout:  post
category:  algorithm
title:  No65、矩阵中的路径
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No65、矩阵中的路径
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202206190108471.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 

## **No65、矩阵中的路径**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/c61c6999eecb4b8f88a98f66b273a3cc?tpId=13&&tqId=11218&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。

### **示例1**

**输入**

```
"ABCESFCSADEE",3,4,"ABCCED"
```

**返回值**

~~~
true
~~~

**示例2**

**输入**

```
"ABCESFCSADEE",3,4,"ABCB"
```

**返回值**

```
false
```



### **1、DFS**

这道题是典型的深度优先遍历DFS的应用，原二维数组就像是一个迷宫，可以  //上下左右四个方向行走
我们的二维数组board中每个数都作为起点和给定的字符串做匹配，我们需要
一个和原二维数组board等大小的visited数组，是bool型的，用来记录当前位置
是否被访问过。因为题目要求一个cell只能被访问一次。
如果二维数组的当前字符和目标字符串str对应的字符相等，则对其上下左右四个邻字
符串分别调用dfs的递归函数，只要有一个返回true，那么就表示找到对应的字符串 

~~~cpp


bool dfs(vector<vector<char>> &board, char* str, int index, int x, int y,
	vector<vector<bool>>& visited) 

{
	if (index == strlen(str)) return true;//搜寻超过路径长度，符合条件，返回true，//此时已经超过最大程度了 strlen返回不带 ‘\0’的长度，此时str[k]已经越界了，所以这个判断一定要放在函数开头，如果放在if之后，str[k]会越界
	if ((x < 0) || (y < 0) || (x >= board.size()) || (y >= board[0].size()))
		return false;//访问越界，终止，返回false
	if (visited[x][y]) return false;//之前访问过，剪枝
	if (board[x][y] != str[index]) return false;//不相等，剪枝
	visited[x][y] = true;
	if (dfs(board, str, index + 1, x, y - 1, visited) || //上
		dfs(board, str, index + 1, x, y + 1, visited) ||     //下
		dfs(board, str, index + 1, x - 1, y, visited) ||     //左
		dfs(board, str, index + 1, x + 1, y, visited))      //右
		return true; //有符合要求的

	visited[x][y] = false;//记得此处改回false，以方便下一次遍历搜索。
	return false;
}

bool hasPath(char* matrix, int rows, int cols, char* str)
{
	if (str == NULL || rows <= 0 || cols <= 0)
		return false;
	vector<vector<char>> board(rows, vector<char>(cols));
	for (int i = 0; i < rows; ++i) {//将matrix装入二维数组board中
		for (int j = 0; j < cols; ++j) {
			board[i][j] = matrix[i * cols + j];
		}
	}
	vector<vector<bool>> visited(rows, vector<bool>(cols, false));
	for (int i = 0; i < rows; ++i) {
		for (int j = 0; j < cols; ++j) {
			if (dfs(board, str, 0, i, j, visited) == true)
				return true;//以矩阵board中的每个字符为起点进行广度优先搜索
			//找到一个符合条件的即返回true.
		}
	}
	return false;//遍历完都没找到匹配的路径，返回false
}

~~~



### **2、回溯法  写法非常的好啊**

~~~cpp
/*参数说明  k 字符串索引初始为0即先判断字符串的第一位*/
bool judge(char* matrix, int rows, int cols, int i, int j, char* str, int k, bool* flag)
{
	//因为是一维数组存放二维的值，index值就是相当于二维数组的（i，j）在一维数组的下标
	int index = i * cols + j;
	//flag[index]==true,说明被访问过了，那么也返回true;
	if (i < 0 || i >= rows || j < 0 || j >= cols || matrix[index] != str[k] || flag[index] == true)
		return false;
	//字符串已经查找结束，说明找到该路径了
	if (str[k + 1] == '\0') return true;
	//向四个方向进行递归查找,向左，向右，向上，向下查找
	flag[index] = true;//标记访问过 //要走的第一个位置置为true，表示已经走过了0

	  //回溯，递归寻找，每次找到了就给k加一，找不到，还原
	if (judge(matrix, rows, cols, i - 1, j, str, k + 1, flag)
		|| judge(matrix, rows, cols, i + 1, j, str, k + 1, flag)
		|| judge(matrix, rows, cols, i, j - 1, str, k + 1, flag)
		|| judge(matrix, rows, cols, i, j + 1, str, k + 1, flag))
	{
		return true;
	}

	//走到这，说明这一条路不通，还原，再试其他的路径
	flag[index] = false;
	return false;
}

bool hasPath(char* matrix, int rows, int cols, char* str)
{
	if (matrix == NULL || rows < 1 || cols < 1 || str == NULL) return false;
	bool* flag = new bool[rows * cols];
	memset(flag, false, rows * cols);
	for (int i = 0; i < rows; i++)
	{
		for (int j = 0; j < cols; j++)
		{
			if (judge(matrix, rows, cols, i, j, str, 0, flag))
			{
				return true;
			}
		}
	}
	delete[] flag;
	return false;
}
~~~



### **二刷：**

### **1、很经典的题目**

~~~cpp
bool hasPathCore(vector<vector<char>>& matrix, char* str, int row, int col,int index , vector<vector<bool>> &visit) {

	if (str[index] == '\0') return true;
	if (row<0 || row >= matrix.size() || col<0 || col >= matrix[0].size() || visit[row][col] == true || str[index] != matrix[row][col]) return false;
	visit[row][col] = true;

	if (hasPathCore(matrix, str, row + 1, col, index + 1,visit) ||
		hasPathCore(matrix, str, row - 1, col, index + 1, visit) ||
		hasPathCore(matrix, str, row, col + 1, index + 1, visit) ||
		hasPathCore(matrix, str, row, col - 1, index + 1, visit))
		return true;

	visit[row][col] = false;
	return false;
}

bool hasPath(char* matrix, int rows, int cols, char* str)
{
	vector<vector<char>> matri(rows, vector<char>(cols, ' '));
	for (int i = 0; i < rows; ++i) {
		for (int j = 0; j < cols; ++j) {
			matri[i][j] = matrix[i * cols + j];
		}
	}

	vector<vector<bool>> visit(rows, vector<bool>(cols, false));
	for (int i = 0; i < rows; i++) {
		for (int j = 0; j < cols; ++j) {
			if (hasPathCore(matri, str, i, j, 0,visit)) return true;
		}
	}
	return false;
}
~~~


<p id = "矩阵中的路径"></p>

