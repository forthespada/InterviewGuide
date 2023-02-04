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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202302042310919.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/07-resources/01-free/04-schoolSchample.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




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

