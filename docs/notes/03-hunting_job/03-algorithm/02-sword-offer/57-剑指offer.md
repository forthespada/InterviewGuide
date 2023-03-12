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
  <p>这是四则或许对你有帮助的讯息</p>
  <p>1、👉 最近我发现了一个每日推送都会最新校招咨询的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和留下的<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，好好走下去基本都能拿到不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>

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

