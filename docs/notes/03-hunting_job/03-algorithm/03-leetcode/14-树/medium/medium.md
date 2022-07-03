#### 94、二叉树的中序遍历

给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？



##### **前序中序后序遍历时有个模板**

~~~C++
while( 栈非空 || p 非空)
{
    if( p 非空)
    {

    }
	else
    {

    }
}
~~~



##### 1、自己写的方法，递归写法

其实就是左中右的递归写法



执行用时 :4 ms, 在所有 C++ 提交中击败了49.16%的用户

内存消耗 :8.3 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
vector<int> inorderTraversal(TreeNode* root) {
	vector<int> result;
	if (root == nullptr) return result;
	return inorderTraversalCore(result, root);

}
vector<int> inorderTraversalCore(vector<int>& result, TreeNode* root) {
	if (root->left != nullptr)
		inorderTraversalCore(result, root->left);
	result.push_back(root->val);
	if (root->right != nullptr)
		inorderTraversalCore(result, root->right);
	return result;
}
~~~

##### 2、根据栈的模板写的一种方法

~~~C++
vector<int> inorderTraversal(TreeNode* root) {
	stack<TreeNode*> s;
	vector<int> result;
	while (root != nullptr || !s.empty()) {
		if (root != nullptr) {
			s.push(root);
			root = root->left;
		}
		else {
			root = s.top();
			s.pop();
			result.push_back(root->val);
			root = root->right;
		}
	}
	return result;

}
~~~





#### [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

给定一个二叉树，返回它的 *前序* 遍历。

 **示例:**

```
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]
```

**进阶:** 递归算法很简单，你可以通过迭代算法完成吗？

##### **前序中序后序遍历时有个模板**

```C++
while( 栈非空 || p 非空)
{
    if( p 非空)
    {

    }
	else
    {

    }
}
```



##### 1、自己写的，递归写法

执行用时 :4 ms, 在所有 C++ 提交中击败了51.68%的用户

内存消耗 :9.9 MB, 在所有 C++ 提交中击败了16.28%的用户

~~~C++
vector<int> preorderTraversal(TreeNode* root) {
	vector<int> result;
	if (root == nullptr) return result;
	return preorderTraversalCore(result, root);

}
vector<int> preorderTraversalCore(vector<int>& result, TreeNode* root) {
	if(root!=nullptr)
		result.push_back(root->val);
	if (root->left != nullptr)
		preorderTraversalCore(result, root->left);
	if (root->right != nullptr)
		preorderTraversalCore(result, root->right);
	return result;
}
~~~



##### 2、模板写法，这个模板很厉害

执行用时 :0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗 :8.7 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
vector<int> preorderTraversal(TreeNode* root) {
	stack<TreeNode*> s;
	vector<int> result;
	while (root != nullptr || !s.empty()) {
		if (root != nullptr) {
			result.push_back(root->val);
			s.push(root);
			root = root->left;
		}
		else {
			root = s.top();
			s.pop();
			root = root->right;
		}
	}
	return result;
}
~~~

##### 二刷 迭代与递归

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：8.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
vector<int> preorderTraversal(TreeNode* root) {
	if (root == nullptr) return vector<int>();
	stack<TreeNode*> s;
	vector<int> result;
	while (!s.empty() || root != nullptr) {
		if (root != nullptr) {
			result.push_back(root->val);
			s.push(root);
			root = root->left;
		
		}
		else {
			root = s.top();
			s.pop();
			root = root->right;
		}
	}
	return result;
}
~~~

执行用时：4 ms, 在所有 C++ 提交中击败了50.37%的用户

内存消耗：8.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
void preorderTraversalCore(TreeNode* node, vector<int>& result) {
	if (node == nullptr) return;
	result.push_back(node->val);
	if(node->left) preorderTraversalCore(node->left, result);
	if (node->right) preorderTraversalCore(node->right, result);
}

vector<int> preorderTraversal(TreeNode* root) {
	if (root == nullptr) return vector<int>();
	vector<int> result;
	preorderTraversalCore(root, result);
	return result;
}
~~~





#### [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

给定一个二叉树，返回它的 *后序* 遍历。

**示例:**

```
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
```

**进阶:** 递归算法很简单，你可以通过迭代算法完成吗？

##### **前序中序后序遍历时有个模板**

```C++
while( 栈非空 || p 非空)
{
    if( p 非空)
    {

    }
	else
    {

    }
}
```



##### 1、一种巧妙的写法，真的很妙

递归先序，根右左的顺序，然后反转容器

执行用时 :4 ms, 在所有 C++ 提交中击败了52.20%的用户

内存消耗 :8.7 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
vector<int> postorderTraversal(TreeNode* root) {
	vector<int> result;
	if (root == nullptr) return result;
	postorderTraversalCore(result, root);
	reverse(result.begin(), result.end());//千万别忘了反转，后序本来是左右根，现在是根右左，所以要反转一下
	return result;

}
void postorderTraversalCore(vector<int>& result, TreeNode* root) {//根右左，最后再反转一下即可
	if (root != nullptr)
		result.push_back(root->val);
	if (root->right != nullptr)
		postorderTraversalCore(result, root->right);
	if (root->left != nullptr)
		postorderTraversalCore(result, root->left);

}
~~~



##### 2、也可以直接左右根的形式来做递归，这样就不用反转了

执行用时 :0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗 :8.4 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
vector<int> postorderTraversal(TreeNode* root) {
	vector<int> result;
	if (root == nullptr) return result;
	postorderTraversalCore(result, root);
	return result;

}
void postorderTraversalCore(vector<int>& result, TreeNode* root) {
	if (root->left != nullptr)
		postorderTraversalCore(result, root->left);
	if (root->right != nullptr)
		postorderTraversalCore(result, root->right);
	result.push_back(root->val);
}
~~~

##### 3、模板的迭代写法

执行用时 :0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗 :8.7 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
vector<int> postorderTraversal(TreeNode* root) {
	stack<TreeNode*> s;
	vector<int> result;//按照左右根的反转根右左的顺序保存进result中，最后再翻转一下
	while (root != nullptr || !s.empty()) {
		if (root != nullptr) {
			result.push_back(root->val);
			s.push(root);
			root = root->right;
		}
		else {
			root = s.top();
			s.pop();
			root = root->left;
		}
	}
	reverse(result.begin(), result.end());
	return result;
}
~~~



#### [面试题07. 重建二叉树](https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/)



输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

例如，给出

```
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
```

返回如下的二叉树：

```
    3
   / \
  9  20
    /  \
   15   7
```

 

**限制：**

```
0 <= 节点个数 <= 5000
```



##### 1、很经典的建树问题，看的解析，很厉害

执行用时 :20 ms, 在所有 C++ 提交中击败了92.50%的用户

内存消耗 :25.8 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {

	unordered_map<int, int> unmp;
	for (int i = 0; i < preorder.size(); ++i) {
		unmp.insert({ inorder[i],i });
	}
	return build(preorder, unmp, 0, 0, inorder.size() - 1);
}
TreeNode* build(vector<int>& preorder, unordered_map<int, int>& unmp, int pre_root, int in_start, int in_end) {//前序的root  中序的start和end
	if (in_start > in_end) return NULL;
	TreeNode* tree = new TreeNode(preorder[pre_root]);
	int in_root_index = unmp[preorder[pre_root]];

	tree->left = build(preorder, unmp, pre_root + 1, in_start, in_root_index - 1);
	tree->right = build(preorder, unmp, (pre_root + 1) + (in_root_index - 1 - in_start) + 1, in_root_index + 1, in_end);//左子树的根的位置，加上左子树的长度就等于前序中右子树根的索引
	return tree;
}
~~~



##### 2、一种更容易懂的递归方法

速度稍差一点，但是从理解上来说更容易懂一点



执行用时 :76 ms, 在所有 C++ 提交中击败了25.46%的用户

内存消耗 :74.3 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {	
	if (preorder.size() == 0 || inorder.size() == 0) {
		return nullptr;
	}
	TreeNode* treeNode = new TreeNode(preorder[0]);
	int mid = distance(begin(inorder), find(inorder.begin(), inorder.end(), preorder[0]));
	vector<int> left_pre(preorder.begin() + 1, preorder.begin() + mid + 1);
	vector<int> right_pre(preorder.begin() + mid + 1, preorder.end());
	vector<int> left_in(inorder.begin(), inorder.begin() + mid);
	vector<int> right_in(inorder.begin() + mid + 1, inorder.end());

	treeNode->left = buildTree(left_pre, left_in);
	treeNode->right = buildTree(right_pre, right_in);
	return treeNode;
}
~~~



#### [面试题33. 二叉搜索树的后序遍历序列](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)



输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 `true`，否则返回 `false`。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：

```
     5
    / \
   2   6
  / \
 1   3
```

**示例 1：**

```
输入: [1,6,3,2,5]
输出: false
```

**示例 2：**

```
输入: [1,3,2,6,5]
输出: true
```

 

**提示：**

1. `数组长度 <= 1000`

##### 1、递归写法

执行用时 :0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗 :6.9 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
bool verifyPostorder(vector<int>& postorder) {
	if (postorder.empty())  return true; //不太对，输入为空，应该返回false的
	return verifyPostorderCore(postorder, 0, postorder.size() - 1);
}

bool verifyPostorderCore(vector<int>& postorder, int start, int end) {
	if (start >= end)return true;
	int left = start;
	while (left < end && postorder[left] < postorder[end])  ++left;

	for (int i = left; i < end; ++i) {
		if (postorder[i] <= postorder[end]) return false;
	}
	return verifyPostorderCore(postorder, start, left-1) &&
		verifyPostorderCore(postorder, left, end-1);;

}
~~~





#### [面试题34. 二叉树中和为某一值的路径](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)

输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

 

**示例:**
给定如下二叉树，以及目标和 `sum = 22`，

```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
```

返回:

```
[
   [5,4,11,2],
   [5,8,4,5]
]
```

 

**提示：**

1. `节点总数 <= 10000`





##### 1、递归做法，有点回溯的意思

执行用时 :12 ms, 在所有 C++ 提交中击败了85.48%的用户

内存消耗 :20.2 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
class Solution {
vector<vector<int>> result;
vector<int> path;
public:
    void  pathSumCore(TreeNode*root,int sum){
        if(root==nullptr) return;
        path.push_back(root->val);
        if(root->left==nullptr && root->right==nullptr && sum == root->val)
            result.push_back(path);
        else{

            if(root->left!=nullptr)   pathSumCore(root->left,sum-root->val);
            if(root->right!=nullptr)   pathSumCore(root->right,sum-root->val);
        }
        path.pop_back();

    }

    vector<vector<int>> pathSum(TreeNode* root, int sum) {

        if(root==nullptr) return result;
        pathSumCore(root,sum);
        return result;
    }
};
~~~

#### [面试题26. 树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

`     3    / \   4   5  / \ 1   2`
给定的树 B：

`   4   / 1`
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

**示例 1：**

```
输入：A = [1,2,3], B = [3,1]
输出：false
```

**示例 2：**

```
输入：A = [3,4,5,1,2], B = [4,1]
输出：true
```

**限制：**

```
0 <= 节点个数 <= 10000
```

##### 1、改了许久的一种写法

执行用时 :72 ms, 在所有 C++ 提交中击败了61.82%的用户

内存消耗 :33.6 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
class Solution {
public:
bool HasSubtreeCore(TreeNode* pRoot1, TreeNode* pRoot2) {
	if (pRoot1 == nullptr && pRoot2 == nullptr)  return true;
	if (pRoot1 == nullptr && pRoot2 != nullptr) return false;
	if (pRoot1 != nullptr && pRoot2 == nullptr) return true;
	if (pRoot1->val == pRoot2->val)
		return HasSubtreeCore(pRoot1->left, pRoot2->left) && HasSubtreeCore(pRoot1->right, pRoot2->right); // 这里必须是 与
	else
		return false;
}
bool isSubStructure(TreeNode* A, TreeNode* B)
{
	if (A == nullptr || B == nullptr) return false;
	return isSubStructure(A->left, B) || isSubStructure(A->right, B) || HasSubtreeCore(A,B);//注意这里的写法是 或
}

};
~~~





稍微优化一点点

执行用时 :64 ms, 在所有 C++ 提交中击败了81.74%的用户

内存消耗 :33.6 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
bool HasSubtreeCore(TreeNode* pRoot1, TreeNode* pRoot2) {
	if (pRoot2 == nullptr)  return true;// p2为空，不管p1是不是空都是正确的
	if (pRoot1 == nullptr) return false;// p1为空，p2不为空，一定是错误的
    
	if (pRoot1->val == pRoot2->val)
		return HasSubtreeCore(pRoot1->left, pRoot2->left) && HasSubtreeCore(pRoot1->right, pRoot2->right);// 这里必须是 与
	else
		return false;
}
bool isSubStructure(TreeNode* A, TreeNode* B)
{
	if (A == nullptr || B == nullptr) return false;
	return isSubStructure(A->left, B) || isSubStructure(A->right, B) || HasSubtreeCore(A,B);//注意这里的写法是 或
}
~~~

##### 2、以下这种写法是不对的，真的要小心

~~~C++
bool HasSubtreeCore(TreeNode* pRoot1, TreeNode* pRoot2) {
	if ( pRoot2 == nullptr)  return true;
	if (pRoot1 == nullptr) return false;
	if (pRoot1->val == pRoot2->val)
		return HasSubtreeCore(pRoot1->left, pRoot2->left) && HasSubtreeCore(pRoot1->right, pRoot2->right);
	else
		return false;
}
bool isSubStructure(TreeNode* A, TreeNode* B)
{
	if (A == nullptr || B == nullptr) return false;
	//先判断p2是否在p1中
	if (A->val == B->val)  return HasSubtreeCore(A->left, B->left) && HasSubtreeCore(A->right, B->right); //不可以在这里直接判断其左右子树，因为有时候树中有可能有重复的数字
	return isSubStructure(A->left, B) || isSubStructure(A->right, B);
}
~~~

**[4,2,3,4,5,6,7,8,9]
[4,8,9]**

这种输入的话，会直接走到  if (A->val == B->val) 这一步，不会走到 isSubStructure(A->left, B) || isSubStructure(A->right, B) 这一步，因此不能这么写





#### [面试题32 - I. 从上到下打印二叉树](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

 

例如:
给定二叉树: `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回：

```
[3,9,20,15,7]
```

 

**提示：**

1. `节点总数 <= 1000`

##### 1、挺容易的，相当于层次遍历吧



执行用时：4 ms, 在所有 C++ 提交中击败了87.16%的用户

内存消耗：12.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
    vector<int> levelOrder(TreeNode* root) {
        vector<int> result;
        if(root==nullptr) return result;
        queue<TreeNode*> q;
        q.push(root);
        TreeNode* node;
        while(!q.empty()){

            node = q.front();
            q.pop();
            result.push_back(node->val);
            if(node->left)  q.push(node->left);
            if(node->right)  q.push(node->right);
        }
        return result;
    }
~~~





#### [面试题32 - II. 从上到下打印二叉树 II](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)



从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 

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
  [9,20],
  [15,7]
]
```

 

**提示：**

1. `节点总数 <= 1000`

##### 1、两个栈，层次遍历即可

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：12.7 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
    vector<vector<int>> levelOrder(TreeNode* root) {

        	vector<vector<int>> result;
	if (root == nullptr) return result;
	queue<TreeNode*> q1,q2;
	q1.push(root);
	TreeNode* node;
	vector<int> temp;
	while (!q1.empty() || !q2.empty()) {	
		temp.clear();
		while (!q1.empty()) {
			node = q1.front();
			q1.pop();
			temp.push_back(node->val);
			if (node->left)  q2.push(node->left);
			if (node->right)  q2.push(node->right);
		}
		if(temp.size())  result.push_back(temp);

		temp.clear();
		while (!q2.empty()) {
			node = q2.front();
			q2.pop();
			temp.push_back(node->val);
			if (node->left)  q1.push(node->left);
			if (node->right)  q1.push(node->right);
		}
		if (temp.size())  result.push_back(temp);
	}
	return result;

    }
~~~

##### 2、改为一个栈也是可以的

执行用时：4 ms, 在所有 C++ 提交中击败了89.74%的用户

内存消耗：12.6 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
vector<vector<int>> levelOrder(TreeNode* root) {

vector<vector<int>> result;
	if (root == nullptr) return result;
	queue<TreeNode*> q;
	q.push(root);
	TreeNode* node;

	while (!q.empty()) {	
		int count = q.size();
		vector<int> temp;
		while (count--) {
				node = q.front();
				q.pop();
				temp.push_back(node->val);
				if (node->left)  q.push(node->left);
				if (node->right)  q.push(node->right);
		}
		result.push_back(temp);
		
	}
	return result;

    }
~~~



#### [面试题 32 - III. 从上到下打印二叉树 III](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)



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

##### 1、剑指offer上的题目，两个栈来回导出

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

##### 2、一个栈也可以做

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



#### [230. 二叉搜索树中第K小的元素](https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/)

给定一个二叉搜索树，编写一个函数 `kthSmallest` 来查找其中第 **k** 个最小的元素。

**说明：**
你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。

**示例 1:**

```
输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 1
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
输出: 3
```

**进阶：**
如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化 `kthSmallest` 函数？

##### 1、自己写的笨方法，先全部保存下来再进行排序，时间复杂度太大

执行用时：36 ms, 在所有 C++ 提交中击败了38.06%的用户

内存消耗：26.3 MB, 在所有 C++ 提交中击败了5.00%的用户



~~~C++
    int kthSmallest(TreeNode* root, int k) {
	map<int, TreeNode*> result;
	queue<TreeNode*> q;
	q.push(root);
	TreeNode* node;
	while (!q.empty()) {
		node = q.front();
		q.pop();
		result.insert({node->val,node});
		if (node->left)  q.push(node->left);
		if (node->right)  q.push(node->right);
	}
	map<int, TreeNode*>::const_iterator it;
	it = result.begin();
	while (--k) it++;
	return it->first;
    }
~~~





##### 2、借助二叉树迭代遍历模板的一种写法

~~~C++
   int kthSmallest(TreeNode* root, int k) {
    stack<TreeNode*> s;
	int num = 0;
	while (!s.empty() || root!=nullptr)
	{
		if (root !=nullptr)
		{
			s.push(root);
			root = root->left;
		}
		else
		{
			root = s.top();
			s.pop();
			num++;
			if (num == k)
				return root->val;
			root = root->right;
		}
	}
	return 0;
    }
~~~



##### 3、二叉树递归遍历的一种写法

执行用时：32 ms, 在所有 C++ 提交中击败了59.00%的用户

内存消耗：24 MB, 在所有 C++ 提交中击败了5.00%的用户

~~~C++
void kthSmallestCore(TreeNode* root, int& k, int& ans) {
	if (root == nullptr) return;
	if (root->left) kthSmallestCore(root->left, k, ans);
	k--;
	if (k == 0) {
		ans = root->val;
	}
	if(root->right) kthSmallestCore(root->right, k, ans);

}

int kthSmallest(TreeNode* root, int k) {
	int ans = 0;
	kthSmallestCore(root, k, ans);
	return ans;
}
~~~

#### [剑指 Offer 54. 二叉搜索树的第k大节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

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

##### 1、后序遍历递归写法

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



##### 2、后序遍历递归写法，改进一点

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









##### 3、后序遍历迭代模板写法，这种方法还是比较快

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



#### [剑指 Offer 37. 序列化二叉树](https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/)

请实现两个函数，分别用来序列化和反序列化二叉树。

**示例:** 

```
你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
```

##### 1、跟牛客上有一点不太一样

执行用时：88 ms, 在所有 C++ 提交中击败了30.97%的用户

内存消耗：39.7 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
class Codec {
private:
	TreeNode* deserializeCore(string& data, int &i) {
		if (data[i] == '#') {
			i++;
			return nullptr;
		}
		int num = 0, negativeFlag=1;
		if (data[i] == '-') {//序号考虑节点值为负数的情况
			negativeFlag = -1;
			i++;
		}
		while (data[i] != '!') {		
			num = num * 10 + data[i] - '0';
			i++;
		}
		num = num * negativeFlag;


		TreeNode* root = new TreeNode(num);
		root->left = deserializeCore(data, ++i);
		root->right = deserializeCore(data, ++i);
		return root;
	}

public:

	// Encodes a tree to a single string.
	string serialize(TreeNode* root) {
		if (root == nullptr) return "#!";
		string str = to_string(root->val) + '!';
		str += serialize(root->left);
		str += serialize(root->right);
		return str;
	}

	// Decodes your encoded data to tree.
	TreeNode* deserialize(string data) {
		int i = 0;
		return deserializeCore(data, i);
	}
};
~~~

