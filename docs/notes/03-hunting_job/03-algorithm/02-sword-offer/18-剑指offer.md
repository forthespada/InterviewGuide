---
layout:  post
category:  algorithm
title:  No18、二叉树的镜像
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No18、二叉树的镜像
comment: false
---



## **No18、二叉树的镜像**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/564f4c26aa584921bc75623e48ca3011?tpId=13&&tqId=11171&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

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

