---
layout:  post
category:  algorithm
title:  No4、重建二叉树
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No4、重建二叉树
---





## **No4、重建二叉树**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6?tpId=13&&tqId=11157&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

好题 绝对的好题

输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。



**1、力扣上的一种解法**

需要首先熟悉二叉树先序遍历与中序遍历的规则。
先找到preorder中的起始元素作为根节点，在inorder中找到根节点的索引mid；那么，preorder[1:mid + 1]为左子树，preorder[mid + 1:]为右子树；inorder[0:mid]为左子树，inorder[mid + 1:]为右子树。递归建立二叉树。

~~~cpp
TreeNode* reConstructBinaryTree(vector<int> pre,vector<int> vin) {
         if (pre.size() == 0 || vin.size() == 0) {
            return NULL;
        }
        TreeNode* treeNode = new TreeNode(pre[0]);
        int mid = distance(begin(vin), find(vin.begin(), vin.end(), pre[0]));
        vector<int> left_pre(pre.begin() + 1, pre.begin() + mid + 1);
        vector<int> right_pre(pre.begin() + mid + 1, pre.end());
        vector<int> left_in(vin.begin(), vin.begin() + mid);
        vector<int> right_in(vin.begin() + mid + 1, vin.end());

        treeNode->left = reConstructBinaryTree(left_pre, left_in);
        treeNode->right = reConstructBinaryTree(right_pre, right_in);
        return treeNode;
    }
~~~



**2、借助哈希来进行加速的一种做法**

~~~cpp
TreeNode* reConstructBinaryTree(vector<int> pre, vector<int> vin) {

	unordered_map<int, int> unmp;
	for (int i = 0; i < pre.size(); ++i) {
		unmp.insert({ vin[i],i });
	}
	return reConstructBinaryTreeCore(pre, unmp, 0, 0, pre.size() - 1);
}
TreeNode* reConstructBinaryTreeCore(vector<int>& preorder, unordered_map<int, int>& unmp, int root, int start, int end) {//前序的root  中序的start和end
	if (start > end) return NULL;
	TreeNode* tree = new TreeNode(preorder[root]);
	int in_root_index = unmp[preorder[root]];

	tree->left = reConstructBinaryTreeCore(preorder, unmp, root + 1, start, in_root_index - 1);
	tree->right = reConstructBinaryTreeCore(preorder, unmp, (root + 1) + (in_root_index - 1 - start) + 1, in_root_index + 1, end);//左子树的根的位置，加上左子树的长度就等于前序中右子树根的索引
	return tree;
}
~~~





**二刷：借助hash来进行加速**

3 ms	496K

~~~cpp
TreeNode* reConstructBinaryTreeCore(unordered_map<int, int> &hashMap,vector<int>& pre, int low1, vector<int>& vin, int low2, int high2) {

    if (low1 > (int)pre.size() || low2 > high2) return nullptr;//注意这里是可以等于的，千万记得是可以等于的
	TreeNode* root = new TreeNode(pre[low1]);
	int index = hashMap[pre[low1]];
	root->left = reConstructBinaryTreeCore(hashMap, pre, low1 + 1, vin, low2, index - 1);
	root->right = reConstructBinaryTreeCore(hashMap, pre, low1 + 1 + index - low2, vin, index + 1, high2);
	return root;
}

TreeNode* reConstructBinaryTree(vector<int> pre, vector<int> vin) {

	unordered_map<int,int> hashMap;
    int len = vin.size();
	for (int i = 0; i < len; ++i) {
		hashMap.insert(make_pair(vin[i],i));//这里在insert时候是要make_pair一下的
	}

	return reConstructBinaryTreeCore(hashMap, pre, 0, vin, 0, vin.size()-1);
}
~~~

<p id = "用两个栈来实现一个队列"></p>

