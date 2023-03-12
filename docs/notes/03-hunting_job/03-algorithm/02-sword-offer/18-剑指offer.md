---
layout:  post
category:  algorithm
title:  No18、二叉树的镜像
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No18、二叉树的镜像
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



## **No18、二叉树的镜像**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/a9d0ecbacef9410ca97463e4a5c83be7?tpId=265&tqId=39229&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D13&difficulty=undefined&judgeStatus=undefined&tags=&title=)</font>

### **题目描述**

操作给定的二叉树，将其变换为源二叉树的镜像。 

### **输入描述:**

二叉树的镜像定义：源二叉树 

~~~
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11  9 7  5                
~~~

### **1、借助队列来做，跟上面一题中的迭代版本很像**

~~~cpp
void Mirror(TreeNode* pRoot) {
	if (pRoot == nullptr) return;
	queue<TreeNode*> q;
	q.push(pRoot);
	while (!q.empty()) {
		TreeNode* node = q.front();
		q.pop();
		if (node)
		{
			q.push(node->left);
			q.push(node->right);
			swap(node->left, node->right);
		}
	}
}
~~~

### **2、不使用swap函数的迭代版本**

~~~cpp
void Mirror(TreeNode* pRoot) {
	if (pRoot == nullptr) return;
	queue<TreeNode*> q;
	q.push(pRoot);
	while (!q.empty()) {
		TreeNode* node = q.front();
		q.pop();
		if (node)
		{
			q.push(node->left);
			q.push(node->right);
			//swap(node->left, node->right);
			TreeNode* temp = node->left;
			node->left = node->right;
			node->right = temp;
		}
	}
}
~~~

### **3、递归版本**

~~~cpp
    void Mirror(TreeNode *pRoot) {
	if (pRoot == nullptr) return;
	TreeNode* temp = pRoot->left;
	pRoot->left = pRoot->right;
	pRoot->right = temp;
	Mirror(pRoot->right);
	Mirror(pRoot->left);
    }
~~~

### **4、栈的迭代版本**

~~~cpp
void Mirror(TreeNode* pRoot) {
	if (pRoot == nullptr) return;
	stack<TreeNode*> s;
	s.push(pRoot);
	while (!s.empty()) {
		TreeNode* node = s.top();
		s.pop();
		if (node) {
			s.push(node->left);
			s.push(node->right);
			swap(node->left, node->right);
		}
	}
}
~~~



### **二刷：**

### **1、迭代版本，想多了**

运行时间：2ms  占用内存：376k

队列来做，有点类似于层次遍历的意思

~~~cpp
    void Mirror(TreeNode *pRoot) {//有点类似于二叉树的层次遍历
        if(pRoot == nullptr) return;
        queue<TreeNode*> q;
        TreeNode *node = nullptr;
        q.push(pRoot);
        while(!q.empty()){
                node = q.front();
                q.pop();
            if(node != nullptr)
            {   q.push(node->left);
                q.push(node->right);                
                swap(node->left,node->right);
            }
        }
    }
~~~



### **2、递归版本，而更容易理解一些，也更好写**

运行时间：2ms  占用内存：504k

~~~cpp
    void Mirror(TreeNode *pRoot) {//有点类似于二叉树的层次遍历
        if(pRoot == nullptr) return;             
        swap(pRoot->left,pRoot->right);
        Mirror(pRoot->left);
        Mirror(pRoot->right);
    }
~~~


<p id = "二叉树的镜像"></p>

