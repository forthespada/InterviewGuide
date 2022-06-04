---
layout:  post
category:  algorithm
title:  No38、二叉树的深度
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No38、二叉树的深度
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 



## **No38、二叉树的深度**

 <font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/435fb86331474282a3499955f0a41e8b?tpId=13&&tqId=11191&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

### **示例1**

**输入**

```
{1,2,3,4,5,#,6,#,#,7}
```
**返回值**

```
4
```



### **1、BFS，迭代版本**

~~~cpp
int TreeDepth(TreeNode* pRoot)
{
	if (pRoot == nullptr) return 0;
	queue<pair<TreeNode*, int>> q;
	q.push(make_pair(pRoot, 1));
	int maxDept = 1;
	while (!q.empty()) {
		TreeNode* curNode = q.front().first;
		int curDepth = q.front().second;
		q.pop();
		if (curNode) {
			maxDept = max(maxDept, curDepth);
			q.push({ curNode->left,curDepth + 1 });
			q.push({ curNode->right,curDepth + 1 });
		}
	}
	return maxDept;
}
~~~



### **2、递归法**

~~~cpp
int TreeDepth(TreeNode* pRoot)
{
	if (pRoot == nullptr) return 0;
	int leftDept = TreeDepth(pRoot->left) + 1, rightDept = TreeDepth(pRoot->right) + 1;
	return max(leftDept, rightDept;
}
~~~



### **二刷：**

### **1、很简单的递归方法**

运行时间：2ms 占用内存：504k

~~~cpp
int TreeDepth(TreeNode* pRoot)
{    
    if(pRoot == nullptr) return 0;
    int leftDepth = TreeDepth(pRoot->left);
    int rightDepth = TreeDepth(pRoot->right);
    return 1 + max(leftDepth,rightDepth);
}
~~~


<p id = "二叉树的深度"></p>

