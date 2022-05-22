---
layout:  post
category:  algorithm
title:  No39、平衡二叉树
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No39、平衡二叉树
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本)</font> ; 如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.html#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.html)</font>



## **No39、平衡二叉树**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/8b3b95850edb4115918ecebdf1b4d222?tpId=13&&tqId=11192&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一棵二叉树，判断该二叉树是否是平衡二叉树。

在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树

**输入**

~~~
{1,2,3,4,5,6,7}
~~~
**返回值**

~~~
true
~~~

## **1、暴力法，笨方法**

最直接的做法，遍历每个结点，借助一个获取树深度的递归函数，根据该结点的左右子树高度差判断是否平衡，然后递归地对左右子树进行判断。

~~~cpp
int maxDepth(TreeNode* node) {

	if (node == nullptr)  return 0;
	return 1 + max(maxDepth(node->left), maxDepth(node->right));
}

bool IsBalanced_Solution(TreeNode* pRoot) {
	if (pRoot == nullptr) return true;//这里是返回true 而不再是false
	return abs(maxDepth(pRoot->left) - maxDepth(pRoot->right)) <= 1 &&
		IsBalanced_Solution(pRoot->left) && IsBalanced_Solution(pRoot->right);
}
~~~

return 后面不需要加两个&&来递归他左子树和右子树. 这样想, 有一个函数得到了他的深度, 那么只要根的左子树和右子树深度不超过1就可以了.  后面判断的没有什么必要



## **2、改进版，很好的方法，只遍历一次，画个二叉树就知道了**

 上面这种做法有很明显的问题，在判断上层结点的时候，会多次重复遍历下层结点，增加了不必要的开销。如果改为从下往上遍历，如果子树是平衡二叉树，则返回子树的高度；如果发现子树不是平衡二叉树，则直接停止遍历，这样至多只对每个结点访问一次。  

~~~cpp
int getDepth(TreeNode* node) {

	if (node == nullptr)  return 0;
	int leftDept = getDepth(node->left);
	if (leftDept == -1) return -1;
	int rightDept = getDepth(node->right);
	if (rightDept == -1) return -1;
	if (abs(leftDept - rightDept) > 1) 
		return -1;
	else
		return 1 + max(leftDept,rightDept);
}

bool IsBalanced_Solution(TreeNode* pRoot) {
	if (pRoot == nullptr) return true;//这里是返回true 而不再是false
	return getDepth(pRoot)!=-1;
}
~~~

这种做法有很明显的问题，在判断上层结点的时候，会多次重复遍历下层结点，增加了不必要的开销。如果改为从下往上遍历，如果子树是平衡二叉树，则返回子树的高度；如果发现子树不是平衡二叉树，则直接停止遍历，这样至多只对每个结点访问一次。  



## **二刷：**

所谓平衡二叉树就是他的左孩子和右孩子的深度之差不能超过1

## **1、迭代方法 仔细想一下**

~~~cpp
int getDepth(TreeNode * node){

    if(node == nullptr) return 0;
    int left = getDepth(node->left),right = getDepth(node->right);

    return 1 + max(left,right);
}

bool IsBalanced_Solution(TreeNode* pRoot) {

    if(pRoot == nullptr) return true;//这里返回的是true，为空的话就应该是

    return abs(getDepth(pRoot->left) - getDepth(pRoot->right))<=1;
}
~~~



## **2、迭代法改进版本，从下往上便利，这种方法好一点**

~~~cpp
int getDepth(TreeNode * node){

    if(node == nullptr) return 0;
    int left = getDepth(node->left);
    if(left == -1)  return -1;

    int right = getDepth(node->right);
    if(right == -1) return -1;

    if(abs(left - right) > 1) return -1;
    else
        return 1 + max(left,right);
}

bool IsBalanced_Solution(TreeNode* pRoot) {

    if(pRoot == nullptr) return true;

    return getDepth(pRoot) != -1;
}
~~~

<p id = "平衡二叉树"></p>

