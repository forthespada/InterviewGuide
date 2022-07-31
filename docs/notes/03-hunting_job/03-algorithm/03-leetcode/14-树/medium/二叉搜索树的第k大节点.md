---
layout:  post
category:  hunting_job
title: 二叉搜索树的第k大节点
tagline:  by 阿秀
tags:
    - 原创
    - LeetCode
    - 校招
    - 社招
    - 阿秀
excerpt: 二叉搜索树的第k大节点
comment: false
---





<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202206190108471.png">
  </a></div>



> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 





## [二叉搜索树的第k大节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

给定一棵二叉搜索树，请找出其中第k大的节点。

 

**示例 1:**

```
输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
```

**示例 2:**

```
输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
```

 

**限制：**

1 ≤ k ≤ 二叉搜索树元素个数

### 1、后序遍历递归写法

执行用时：32 ms, 在所有 C++ 提交中击败了62.54%的用户

内存消耗：24.3 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
class Solution {
public:

	int count=0,result = 0;
	void kthLargestCore(TreeNode* root, int k) {
		if (root == nullptr) return ;
		if (root->right) kthLargestCore(root->right, k);
		count++;
		if (count == k) { result = root->val; return; }
		if (root->left) kthLargestCore(root->left, k);
		return;
	}
	int kthLargest(TreeNode* root, int k) {
		
		kthLargestCore(root, k);		
		return result;;
	}
};
~~~



### 2、后序遍历递归写法，改进一点

~~~C++
class Solution {
public:
	int result = 0;
	void kthLargestCore(TreeNode* root, int &k) {
		if (root == nullptr) return ;
		if (root->right) kthLargestCore(root->right, k);
		k--;
		if (k == 0) { result = root->val; return; }
		if (root->left) kthLargestCore(root->left, k);
		return;
	}
	int kthLargest(TreeNode* root, int k) {
		
		kthLargestCore(root, k);		
		return result;;
	}
};
~~~









### 3、后序遍历迭代模板写法，这种方法还是比较快

执行用时：28 ms, 在所有 C++ 提交中击败了80.90%的用户

内存消耗：24.1 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
 int kthLargest(TreeNode* root, int k) {

        if (root == nullptr) return 0;
		int count = 0;
		stack<TreeNode*>s;
		while (!s.empty() || root != nullptr) {

			if (root != nullptr) {
				s.push(root);
				root = root->right;
			}
			else {
				root = s.top();
				s.pop();
				k--;
				if (k == 0) return root->val;
				root = root->left;

			}
		}
		return 0;

    }
~~~



