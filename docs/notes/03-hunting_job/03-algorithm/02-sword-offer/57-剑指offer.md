---
layout:  post
category:  algorithm
title:  No57、二叉树的下一个结点
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No57、二叉树的下一个结点
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
  <p>这是五则或许对你有些许帮助的信息:</p>
<p>0、经常看到有人问哪里有汇总好的校招投递公司信息汇总？甚至还有的人花钱去买这类信息，更有甚者<span style="font-weight:bold;color:red">还有被骗的</span>。。。其实这类信息真的很多，牛客网、前程无忧这些招聘网站都帮你总结好了，这里分享一下一位学弟告知的前程无忧推出的校招信息汇总，他们每天都会在群里发招聘公司、行业、岗位等，<a href="https://mp.weixin.qq.com/s/XVrkXg5P0Z7rWhDAWkJDWA" target="_blank">点此免费获取前程无忧总结好的校招资讯汇总</a></p>  <p>1、👉23年5月份我从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s/zKItpGwIkHKK4g2aOlL2rA" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold">大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
<div align="center">
  <a  style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">  <img src="http://oss.interviewguide.cn/img/202308091638172.png" style="zoom:100%;" /></a>
<p style="font-weight:bold">衷心希望自己开发的这个网站能够帮到更多的人，自己能够以技术服务于大家！</p>
</div>网站地址：<a style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">InterviewGuide大厂面试真题解析网站</a>。点此可以查看该网站的视频介绍：<a style="text-decoration: underline" href="https://www.bilibili.com/video/BV1f94y1C7BL" target="_blank">B站视频讲解</a>   如果可以的话求个B站三连，感谢！
  </p> 
  <p>2、😍
    免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>

## **No57、二叉树的下一个结点**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/9023a0c988684a53960365b889ceaf5e?tpId=13&&tqId=11210&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。 



### **1、没有思路，自己瞎写的，错误**

~~~cpp
TreeLinkNode* GetNext(TreeLinkNode* pNode)
{
    if (pNode == nullptr) return nullptr;
    if (pNode->next == nullptr) {
        if (pNode->right == nullptr) return nullptr;
        else
            return pNode->right;
    } 
    if (pNode->left == nullptr && pNode->right == nullptr) return pNode->next;
    if (pNode->left == nullptr) return pNode->right;
    if (pNode->right == nullptr) return pNode->next;
}
~~~

画了图来分析，没有父亲节点再分情况讨论

如果无左右孩子，则返回父亲节点

无左孩子返回右孩子，无右孩子则返回父亲节点



### **2、牛客网上做法**

分析可知：

 1.二叉树为空，则返回空； 

  2.节点右孩子存在，则设置一个指针从该节点的右孩子出发，一直沿着指向左子结点的指针找到的叶子节点即为下一个节点； 

   3.右孩子不存在，如果节点不是根节点，如果该节点是其父节点的左孩子，则返回父节点；否则继续向上遍历其父节点的父节点，重复之前的判断，返回结果。

~~~cpp
TreeLinkNode* GetNext(TreeLinkNode* pNode)
{
	if (pNode == nullptr)
			return nullptr;
	if (pNode->right != nullptr)
	{
		pNode = pNode->right;
		while (pNode->left != nullptr)
			pNode = pNode->left;
		return pNode;
	}
	while (pNode->next != nullptr)
	{
		TreeLinkNode* proot = pNode->next;
		if (proot->left == pNode)
			return proot;
		pNode = pNode->next;
	}
	return nullptr;
}
~~~



### **3、第二种写法的变种**

~~~cpp
TreeLinkNode* GetNext(TreeLinkNode* pNode)
    {
	if (pNode == nullptr)
		return nullptr;
	TreeLinkNode* node = nullptr;
	if (pNode->right != nullptr) {//如果当前节点有右子树,则右子树最左边的那个节点就是
		node = pNode->right;
		while (node->left != nullptr)
			node = node->left;
		return node;
	}
	node = pNode;
	while (node->next != nullptr && node == node->next->right) {//找到当前节点是其父亲节点的左孩子的那个节点，然后返回其父亲节点，如果当前节点没有右子树
		node = node->next;
	}
	return node->next;
    }
~~~



### **二刷：**

### **1、继续刷起来，也是很好的题目**

运行时间：2ms   占用内存：480k

~~~cpp
TreeLinkNode* GetNext(TreeLinkNode* pNode)
{
    if(pNode == nullptr) return nullptr;
    TreeLinkNode *node = nullptr;
    if(pNode->right != nullptr){
        node = pNode->right;
        while(node->left != nullptr){
            node = node->left;
        }
        return node;
    }

    node = pNode;
    while(node->next != nullptr && node == node->next->right)
        node = node->next;
    return node->next;
}
~~~


<p id = "二叉树的下一个结点"></p>

