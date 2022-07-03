<p id="最小高度树"></p>



### 面试题 04.02. 最小高度树

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/minimum-height-tree-lcci/)

难度简单10收藏分享切换为英文关注反馈

给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。

**示例:**

```
给定有序数组: [-10,-3,0,5,9],一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：          0          / \        -3   9        /   /      -10  5 
```





#### 1、DFS，看的解析，刚学会一点，注意nums.size()-1,才可以

执行用时 :20 ms, 在所有 C++ 提交中击败了59.96%的用户

内存消耗 :21.8 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {

private:
TreeNode* dfs(vector<int>&nums,int l,int r)
{
    if(l>r)  return    NULL;
    int mid = (l+r)>>1;
    TreeNode *root= new TreeNode(nums[mid]);
    root->left = dfs(nums,l,mid-1);
    root->right = dfs(nums,mid+1,r);

    return root;
}
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {

    if(nums.size()==0) return NULL;
    return dfs(nums,0,nums.size()-1);
    }

};
~~~

<p id="二叉树的最大深度"></p>



### 104. 二叉树的最大深度

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

难度简单480收藏分享切换为英文关注反馈

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

**说明:** 叶子节点是指没有子节点的节点。

**示例：**
给定二叉树 `[3,9,20,null,null,15,7]`，

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。



#### 1、自己写的，速度，时间都不太好啊

执行用时 :20 ms, 在所有 C++ 提交中击败了19.82%的用户

内存消耗 :20.5 MB, 在所有 C++ 提交中击败了5.06%的用户



~~~c++
class Solution {
public:
    int maxDepth(TreeNode* root) {
		if (!root ) return 0;
		if (root->left && root->right) return 1+max(maxDepth(root->right),maxDepth(root->left));
		if (!root->left) return 1+ maxDepth(root->right);
		else return 1+maxDepth(root->left);
    }
};
~~~





#### 2、另一种变种

执行用时 :12 ms, 在所有 C++ 提交中击败了73.48%的用户

内存消耗 :20.7 MB, 在所有 C++ 提交中击败了5.14%的用户



~~~C++
 int maxDepth(TreeNode* root) {
		if (!root ) return 0;
		int left_depth = maxDepth(root->left) + 1, right_depth = maxDepth(root->right) +1;
		return max(left_depth,right_depth);
    }
~~~





#### 3、BFS可以防止爆栈

执行用时 :12 ms, 在所有 C++ 提交中击败了73.48%的用户

内存消耗 :20.8 MB, 在所有 C++ 提交中击败了5.14%的用户

~~~C++
 int maxDepth(TreeNode* root) {
		if (!root) return 0;
		int max_dept = 0;
		queue<pair<TreeNode*, int> > q;
		q.push({ root,1 });
		while (!q.empty()) {
			TreeNode* curr_node = q.front().first;
			int curr_dept = q.front().second;
			q.pop();
			if (curr_node) {
				max_dept = max(max_dept, curr_dept);
				q.push({ curr_node->left,curr_dept + 1 });
				q.push({ curr_node->right,curr_dept + 1 });
			}
		}
		return max_dept;
    }
~~~

<p id="二叉树的最小深度"></p>



### 111. 二叉树的最小深度

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)

难度简单223收藏分享切换为英文关注反馈

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

**说明:** 叶子节点是指没有子节点的节点。

**示例:**

给定二叉树 `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最小深度  2.





#### 1、使用循环递归写的

执行用时 :12 ms, 在所有 C++ 提交中击败了85.15%的用户

内存消耗 :21.7 MB, 在所有 C++ 提交中击败了5.11%的用户

~~~C++
int minDepth(TreeNode* root) {
	if (!root) return 0;
	if (!root->left && !root->right) return 1;
	else if (!root->left && root->right) return 1 + minDepth(root->right);
	else if (!root->right && root->left ) return 1 + minDepth(root->left);
	return min(minDepth(root->left), minDepth(root->right)) + 1;
}
~~~



### [面试题55 - I. 二叉树的深度](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/)

难度简单7收藏分享切换为英文关注反馈

输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 `[3,9,20,null,null,15,7]`，

```
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最大深度 3 。

 

**提示：**

1. `节点总数 <= 10000`

注意：本题与主站 104 题相同：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

#### 1、自己写的，算是递归调用吧

执行用时 :4 ms, 在所有 C++ 提交中击败了99.36%的用户

内存消耗 :20.8 MB, 在所有 C++ 提交中击败了100.00%的用户





~~~C++
class Solution {
public:
    int maxDepth(TreeNode* root) {

		if (!root ) return 0;
		if (root->left && root->right) return 1+max(maxDepth(root->right),maxDepth(root->left));
		if (!root->left) return 1+ maxDepth(root->right);
		else return 1+maxDepth(root->left);
    }
};
~~~

