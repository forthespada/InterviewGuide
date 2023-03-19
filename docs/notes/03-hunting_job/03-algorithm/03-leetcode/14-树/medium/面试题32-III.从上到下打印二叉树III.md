---
layout:  post
category:  hunting_job
title: 面试题 32 - III. 从上到下打印二叉树 III
tagline:  by 阿秀
tags:
    - 原创
    - LeetCode
    - 校招
    - 社招
    - 阿秀
excerpt: 面试题 32 - III. 从上到下打印二叉树 III
comment: false
---





<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是四则或许对你有帮助的讯息</p>
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的《校招日程》文档，其中包括<a style="text-decoration: underline" href="https://flowus.cn/share/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">往届补录</a>、<a href="https://flowus.cn/share/5f327c98-1e31-46c8-b86b-5ac6105e021f" target="_blank">应届实习校招</a>信息,比如各种大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>




## [面试题 32 - III. 从上到下打印二叉树 III](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)



请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

例如:
给定二叉树: `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```
[
  [3],
  [20,9],
  [15,7]
]
```

 

**提示：**

1. `节点总数 <= 1000`

### 1、剑指offer上的题目，两个栈来回导出

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：12.8 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
	vector<vector<int>> levelOrder(TreeNode* root) {
		vector<vector<int>> result;
		if (root == nullptr) return result;
		stack<TreeNode*> left_right, right_left;
		left_right.push(root);
		TreeNode* node;
		while (!left_right.empty() || !right_left.empty()) {
			vector<int> temp;
			while (!left_right.empty()) {
				node = left_right.top();
				left_right.pop();
				temp.push_back(node->val);
				if (node->left)  //注意这里是先左再右
				right_left.push(node->left);
				if (node->right)  right_left.push(node->right);
			}
			if (temp.size()) {
				result.push_back(temp);
				temp.clear();
			}

			while (!right_left.empty()) {
				node = right_left.top();
				right_left.pop();
				temp.push_back(node->val);
                if (node->right) //这里是先右再左
                    left_right.push(node->right);
				if (node->left)  left_right.push(node->left);
	
			}
			if (temp.size()) {
				result.push_back(temp);
			}

		}
        return result;
	}
~~~

### 2、一个栈也可以做

执行用时：8 ms, 在所有 C++ 提交中击败了56.60%的用户

内存消耗：12.9 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
vector<vector<int>> levelOrder(TreeNode* root) {
		vector<vector<int>> ans;
	if (root == nullptr) {
		return ans;
	}
	queue<TreeNode*> q;
	q.push(root);
	bool isLeft = false;
	while (!q.empty()) {
		int rowLen = q.size();
		vector<int> temp;
		for (int i = 0; i < rowLen; ++i) {
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
			ans.push_back(vector<int>(temp.rbegin(), temp.rend()));//注意这里是要翻转一下的，这样就做到了从右向左
		}
		else {
			ans.push_back(temp);
		}
	}
	return ans;
	}
~~~



