---
layout:  post
category:  algorithm
title:  No22、从上往下打印二叉树
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No22、从上往下打印二叉树
---



## **No22、从上往下打印二叉树**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/7fe2212963db4790b57431d9ed259701?tpId=13&&tqId=11175&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

从上往下打印出二叉树的每个节点，同层节点从左至右打印。 

**示例1**

**输入**

~~~
{5,4,#,3,#,2,#,1}
~~~
**返回值**

~~~
[5,4,3,2,1]
~~~



**1、迭代做法，借助队列，比较简单**

~~~cpp
    vector<int> PrintFromTopToBottom(TreeNode* root) {

    vector<int> result;
	if (root == nullptr) return result;
	queue<TreeNode*>  q;
	q.push(root);
	TreeNode* node;
	while (!q.empty()) {
		node = .front();
		result.push_back(node->val);
		if (node->left) q.push(node->left);
		if (node->right) q.push(node->right);
		q.pop();
	}
    return result;
    }
~~~



**二刷：**

**1、借助队列来做，简单**

运行时间：2ms  占用内存：528k

~~~cpp
    vector<int> PrintFromTopToBottom(TreeNode* root) {
        if(root == nullptr) return vector<int>();
        queue<TreeNode*>q;
        q.push(root);
        TreeNode *node = nullptr;
        vector<int> result;
        while(!q.empty()){
             
            node = q.front();
            q.pop();
            result.push_back(node->val);
            if(node->left) q.push(node->left);
            if(node->right) q.push(node->right);
        }
        
        return result;
    }
~~~

<p id = "从上往下打印二叉树"></p>

