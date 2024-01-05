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
  <p>这是六则或许对你有些许帮助的信息:</p>
<p>1、阿秀在工作之余开发了一个<span style="font-weight:bold;color:red">编程资源网站</span>，目前已经收集了很多不错的学习资源和黑科技（附带下载地址），如你有意<a href="https://www.cxypron.com/home" target="_blank">欢迎体验以及推荐自己认为不错的资源</a>，众人拾柴火焰高，我为人人，人人为我🔥！</p>  <p>2、👉23年5月份我从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s/zKItpGwIkHKK4g2aOlL2rA" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold;color:red">互联网中大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
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

