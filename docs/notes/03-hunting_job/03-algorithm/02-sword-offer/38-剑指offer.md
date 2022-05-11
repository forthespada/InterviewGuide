---
layout:  post
category:  algorithm
title:  No38、二叉树的深度
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No38、二叉树的深度
comment: false
---


## **No38、二叉树的深度**

 <font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/435fb86331474282a3499955f0a41e8b?tpId=13&&tqId=11191&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

### **示例1**

**输入**

```
{1,2,3,4,5,#,6,#,#,7}
```
**返回值**

```
4
```



### **1、BFS，迭代版本**

~~~cpp
int TreeDepth(TreeNode* pRoot)
{
	if (pRoot == nullptr) return 0;
	queue<pair<TreeNode*, int>> q;
	q.push(make_pair(pRoot, 1));
	int maxDept = 1;
	while (!q.empty()) {
		TreeNode* curNode = q.front().first;
		int curDepth = q.front().second;
		q.pop();
		if (curNode) {
			maxDept = max(maxDept, curDepth);
			q.push({ curNode->left,curDepth + 1 });
			q.push({ curNode->right,curDepth + 1 });
		}
	}
	return maxDept;
}
~~~



### **2、递归法**

~~~cpp
int TreeDepth(TreeNode* pRoot)
{
	if (pRoot == nullptr) return 0;
	int leftDept = TreeDepth(pRoot->left) + 1, rightDept = TreeDepth(pRoot->right) + 1;
	return max(leftDept, rightDept;
}
~~~



### **二刷：**

### **1、很简单的递归方法**

运行时间：2ms 占用内存：504k

~~~cpp
int TreeDepth(TreeNode* pRoot)
{    
    if(pRoot == nullptr) return 0;
    int leftDepth = TreeDepth(pRoot->left);
    int rightDepth = TreeDepth(pRoot->right);
    return 1 + max(leftDepth,rightDepth);
}
~~~


<p id = "二叉树的深度"></p>

