---
layout:  post
category:  algorithm
title:  No59、按之字形顺序打印二叉树
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No59、按之字形顺序打印二叉树
comment: false
---

## **No59、按之字形顺序打印二叉树**

 <font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/91b69814117f4e8097390d107d2efbe0?tpId=13&&tqId=11212&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。 

### **示例1**

**输入**

~~~
{8,6,10,5,7,9,11}
~~~
**返回值**

~~~
[[8],[10,6],[5,7,9,11]]
~~~



### **1、注意左右子树在两个栈中的入栈顺序**

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
	vector<vector<int>> result;
	if (pRoot == nullptr) return result;
	stack<TreeNode*> left_right_st;
	stack<TreeNode*> right_left_st;
	left_right_st.push(pRoot);
	while (left_right_st.size() ||  right_left_st.size()) {
		if (!left_right_st.empty()) {
			vector<int> temp;
			TreeNode* node;
			while (!left_right_st.empty()) {
				node = left_right_st.top();
				temp.push_back(node->val);
				if (node->left)//这里先左再右
					right_left_st.push(node->left);
				if (node->right)
					right_left_st.push(node->right);
				left_right_st.pop();
			}
			result.push_back(temp);
		}

		if (!right_left_st.empty()) {
			vector<int> temp;
			TreeNode* node;
			while (!right_left_st.empty()) {
				node = right_left_st.top();
				temp.push_back(node->val);
				if (node->right)//这里需要是先右再左
					left_right_st.push(node->right);
				if (node->left)
					left_right_st.push(node->left);
				right_left_st.pop();
			}
			result.push_back(temp);
		}

	}
	return result;
}
~~~



### **2、稍微优化一下代码**

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
	vector<vector<int>> result;
	if (pRoot == nullptr) return result;
	stack<TreeNode*> left_right_st;
	stack<TreeNode*> right_left_st;
	left_right_st.push(pRoot);
	while (left_right_st.size() ||  right_left_st.size()) {
		vector<int> temp;
		TreeNode* node;
		if (!left_right_st.empty()) {
			while (!left_right_st.empty()) {
				node = left_right_st.top();
				temp.push_back(node->val);
				if (node->left)
					right_left_st.push(node->left);
				if (node->right)
					right_left_st.push(node->right);
				left_right_st.pop();
			}
			result.push_back(temp);
			
		}
		vector<int>().swap(temp);
		if (!right_left_st.empty()) {
			while (!right_left_st.empty()) {
				node = right_left_st.top();
				temp.push_back(node->val);
				if (node->right)
					left_right_st.push(node->right);
				if (node->left)
					left_right_st.push(node->left);
				right_left_st.pop();
			}
			result.push_back(temp);
		}

	}
	return result;
}
~~~



### **3、只用一个队列来做，很不错的想法**

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
	vector<vector<int>> result;
	if (pRoot == nullptr) {
		return result;
	}
	queue<TreeNode*> q;
	q.push(pRoot);
	bool isLeft = false;
	while (!q.empty()) {
		int rowLen = q.size();
		vector<int> temp;
		while(rowLen--) {
			TreeNode* curNode = q.front();
			q.pop();
			if (curNode != nullptr) {
				temp.push_back(curNode->val);
				if (curNode->left)q.push(curNode->left);
				if (curNode->right)q.push(curNode->right);
			}
		}
		isLeft = !isLeft;
		if (!isLeft) {
			result.push_back(vector<int>(temp.rbegin(), temp.rend()));//注意这里是翻转一下的
		}
		else {
			result.push_back(temp);
		}
	}
	return result;
}
~~~



### **二刷：**

### **1、算是二叉树的层次遍历的一种变形吧，果然还是第一反应想到这种做法**

运行时间：4ms  占用内存：360k

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
    if(pRoot == nullptr) return vector<vector<int>>();
    vector<vector<int>> result;
    stack<TreeNode*> left_right,right_left;
    left_right.push(pRoot);
    TreeNode*node = nullptr;
    vector<int> temp;
    while(!left_right.empty() || !right_left.empty()){
        vector<int>().swap(temp);
        while(!left_right.empty()){
            node = left_right.top();
            temp.push_back(node->val);
            left_right.pop();
            if(node->left) right_left.push(node->left);
            if(node->right) right_left.push(node->right);
        }
        if(temp.size() > 0)    result.push_back(std::move(temp));

        vector<int>().swap(temp);
        while(!right_left.empty()){
            node = right_left.top();
            temp.push_back(node->val);
            right_left.pop();
            if(node->right) left_right.push(node->right);
            if(node->left) left_right.push(node->left);

        }
        if(temp.size() > 0)   result.push_back(std::move(temp));// 可能走到头了，也就是此时temp是个空，不能把空的放在结果了
    }
    return std::move(result);
}
~~~



### **2、优化一下**

运行时间：3ms  占用内存：504k

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
    if(pRoot == nullptr) return vector<vector<int>>();
    vector<vector<int>> result;
    stack<TreeNode*> left_right,right_left;
    left_right.push(pRoot);
    TreeNode*node = nullptr;

    while(!left_right.empty() || !right_left.empty()){
        if(!left_right.empty()){
            vector<int> temp;
            while(!left_right.empty()){
                node = left_right.top();
                temp.push_back(node->val);
                left_right.pop();
                if(node->left) right_left.push(node->left);
                if(node->right) right_left.push(node->right);
            }
            result.push_back(std::move(temp));
        }

        if(!right_left.empty()){
            vector<int> temp;
            while(!right_left.empty()){
                node = right_left.top();
                temp.push_back(node->val);
                right_left.pop();
                if(node->right) left_right.push(node->right);
                if(node->left) left_right.push(node->left);

            }
            result.push_back(std::move(temp));
        }
    }
    return std::move(result);
}
~~~



<p id = "按之字形顺序打印二叉树"></p>

