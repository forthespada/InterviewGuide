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





<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202206190108471.png">
  </a></div>



> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 





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



