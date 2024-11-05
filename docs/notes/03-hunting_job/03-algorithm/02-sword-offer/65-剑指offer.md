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

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是六则或许对你有些许帮助的信息:</p>
<p>⭐️1、阿秀与朋友合作开发了一个<span style="font-weight:bold;color:red">编程资源网站</span>，目前已经收录了很多不错的学习资源和黑科技（附带下载地址），如过你想要寻求合适的编程资源，<a href="https://tools.interviewguide.cn/home" style="text-decoration: underline" target="_blank">欢迎体验</a>以及推荐自己认为不错的资源，众人拾柴火焰高，我为人人，人人为我🔥！</p>  <p>2、👉23年5月份阿秀从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s?__biz=Mzk0ODU4MzEzMw==&mid=2247512170&idx=1&sn=c4a04a383d2dfdece676b75f17224e78" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold;color:red">互联网中大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
<div align="center">
</div>网站地址：<a style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">InterviewGuide大厂面试真题解析网站</a>。点此可以查看该网站的视频介绍：<a style="text-decoration: underline" href="https://www.bilibili.com/video/BV1f94y1C7BL" target="_blank">B站视频讲解</a>   如果可以的话求个B站三连，感谢！
  </p>3、😊
    分享一个学弟发给我的<span style="font-weight:bold;color:red">20T网盘资源合集</span>，<a style="text-decoration: underline" href="https://docs.qq.com/sheet/DY3VPVklVaFFMcUZ4?tab=9h5afr" target="_blank">点此白嫖</a>，主要是各类高清影视、电视剧、音乐、副业、纪录片、英语四六级考试、考研考公等资源。
  </p>
  <p>4、😍免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>
  </p>
  <p>5、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>6、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>

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

