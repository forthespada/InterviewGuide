---
layout:  post
category:  algorithm
title:  No59、按之字形顺序打印二叉树
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No59、按之字形顺序打印二叉树
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
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>

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

