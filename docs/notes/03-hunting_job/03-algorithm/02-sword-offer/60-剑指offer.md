---
layout:  post
category:  algorithm
title:  No60、把二叉树打印成多行
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No60、把二叉树打印成多行
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.html#_4、阿秀-如何才能联系到你)</font>;免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.html)</font>;如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 

## **No60、把二叉树打印成多行**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/445c44d982d04483b04a54f298796288?tpId=13&&tqId=11213&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。 

### **示例1**

**输入**

~~~
{8,6,10,5,7,9,11}
~~~
**返回值**

~~~
[[8],[6,10],[5,7,9,11]]
~~~



### **1、队列做法，保存每层的节点个数**

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
	vector<vector<int>> result;
	if (pRoot == nullptr) return result;
	queue<TreeNode*> q;
	q.push(pRoot);
	while (!q.empty()) {
		int len = q.size();//利用len保存每层的个数
		vector<int> temp;
		while (len--) {
			TreeNode* node = q.front();
			q.pop();
			temp.push_back(node->val);
			if (node->left)	  q.push(node->left);//为空才push进去,而不是if(node) 然后直接push左右两个节点
			if (node->right)  q.push(node->right);;
		}
		result.push_back(temp);
	}
	return result;
}
~~~



### **二刷：**

### **1、跟59题有点像**

运行时间：2ms  占用内存：508k

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
    if(pRoot == nullptr) return vector<vector<int>>();

    queue<TreeNode*> q;
    q.push(pRoot);
    vector<vector<int>> result;
    while(!q.empty()){
        int size = q.size();
        vector<int> temp;
        while(size--){
            pRoot = q.front();
            q.pop();
            temp.push_back(pRoot->val);
            if(pRoot->left)  q.push(pRoot->left);
            if(pRoot->right)  q.push(pRoot->right);

        }
        if(temp.size() > 0) result.push_back(temp);
    }
    return std::move(result);
}
~~~


<p id = "把二叉树打印成多行"></p>



