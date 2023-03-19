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

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是四则或许对你有帮助的讯息</p>
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的《校招日程》文档，其中包括<a style="text-decoration: underline" href="https://flowus.cn/share/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">往届补录</a>、<a href="https://flowus.cn/share/5f327c98-1e31-46c8-b86b-5ac6105e021f" target="_blank">应届实习校招</a>信息,比如各种大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>


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

return 后面注意需要加两个&&来递归他左子树和右子树，一层一层递归下去。



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

