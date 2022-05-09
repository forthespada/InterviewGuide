---
layout:  post
category:  algorithm
title:  No62、二叉搜索树的第K个节点
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No62、二叉搜索树的第K个节点
---


## **No62、二叉搜索树的第K个节点**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/ef068f602dde4d28aab2b210e859150a?tpId=13&&tqId=11215&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

**示例1**

**输入**

~~~c
{5,3,7,2,4,6,8},3
~~~
**返回值**

~~~c
{4}
~~~
说明
按结点数值大小顺序第三小结点的值为4 



**1、笨方法，全部保存下来**

会超时，这个方法不行



**2、中序遍历其实就是从小到大的排列顺序**

~~~cpp
class situation {
public:
	int count=0;

	TreeNode* KthNode(TreeNode* pRoot, int k)
	{
		if (pRoot == nullptr) return nullptr;
		TreeNode* left_node = KthNode(pRoot->left, k);
		if (left_node) return left_node;
		count++;
		if (k == count) {
			return pRoot;
		}
		TreeNode* right_node = KthNode(pRoot->right, k);
		if (right_node) return right_node;
		return nullptr;
	}
}
~~~



**3、中序遍历模板解法**

~~~cpp
TreeNode* KthNode(TreeNode* pRoot, int k)
	{
		if (pRoot == nullptr) return nullptr;
		stack<TreeNode*> s;
		s.push(pRoot);
		while (!s.empty() || pRoot != nullptr) {
			if (pRoot != nullptr) {
				s.push(pRoot);
				pRoot = pRoot->left;
			}
			else {
				pRoot = s.top();
				s.pop();
				k--;
				if (k == 0) return pRoot;
				pRoot = pRoot->right;
			}
		}
		return nullptr;
	}
~~~



二刷：

**1、其实就是中序遍历**

运行时间：3ms  占用内存：504k

~~~cpp
TreeNode* KthNode(TreeNode* pRoot, int k)
{
    if(pRoot == nullptr) return nullptr;
    stack<TreeNode*> st;
    while(!st.empty() || pRoot!=nullptr){

        while(pRoot != nullptr){
            st.push(pRoot);
            pRoot = pRoot->left;
        }
        pRoot = st.top();
        st.pop();
        if(--k == 0) return pRoot;
        pRoot = pRoot->right;
    }

    return nullptr;
}
~~~


<p id = "二叉搜索树的第K个节点"></p>

