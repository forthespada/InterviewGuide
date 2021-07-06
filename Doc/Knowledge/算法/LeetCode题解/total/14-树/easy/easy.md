<p id="对称的二叉树"></p>



#### 剑指 Offer 28. 对称的二叉树

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

~~~
    1
   / \
  2   2
 / \ / \
3  4 4  3
~~~



但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

```C++
    1
   / \
  2   2
   \   \
   3    3
```

 

**示例 1：**

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

**示例 2：**

```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

 

**限制：**

```
0 <= 节点个数 <= 1000
```



##### 1、递归法

执行用时：12 ms, 在所有 C++ 提交中击败了32.98%的用户

内存消耗：16.3 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
 bool isEqual(TreeNode*node1,TreeNode*node2){

        if(node1==nullptr && node2 ==nullptr)  return true;
        if(node1==nullptr && node2!=nullptr) return false;
        if(node2==nullptr && node1!=nullptr) return false;
        if(node1->val == node2->val) {
            return isEqual(node1->left,node2->right) && isEqual(node1->right,node2->left);

        }else
            return false;

    }
    bool isSymmetric(TreeNode* root) {

        if(root==nullptr) return true;
        return isEqual(root->left,root->right);

    }
~~~

##### 2、递归法、稍微改进一点

执行用时：8 ms, 在所有 C++ 提交中击败了67.83%的用户

内存消耗：16.4 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
 bool isEqual(TreeNode*node1,TreeNode*node2){

        if(node1==nullptr && node2 ==nullptr)  return true;
        if(node1 ==nullptr || node2==nullptr) return false;//减少判断
        if(node1->val == node2->val) {
            return isEqual(node1->left,node2->right) && isEqual(node1->right,node2->left);

        }else
            return false;

    }
    bool isSymmetric(TreeNode* root) {

        if(root==nullptr) return true;
        return isEqual(root->left,root->right);

    }
~~~

##### 3、迭代法，借助栈  太麻烦了，不值得借鉴



~~~
    1
   / \
  2   2
   \   \
   3    3

 
~~~





~~~C++
    bool isSymmetric(TreeNode* root) {
        if(!root){
            return true;
        }
        queue<TreeNode *> que1;
        que1.push(root);
        while(!que1.empty()){
            int size = que1.size();
            vector<TreeNode *> tmp;//判断虽然不是镜像节点，但是值依然相等的情况，比如上述情况
            while(size > 0){
                TreeNode *fronts = que1.front();
                que1.pop();
                tmp.push_back(fronts->left);
                if(fronts->left){
                    que1.push(fronts->left);
                }
                tmp.push_back(fronts->right);
                if(fronts->right){
                    que1.push(fronts->right);
                }
                size --;
            }
            int i=0;
            int j=tmp.size()-1;
            while(i<j){
                if(tmp[i] != nullptr && tmp[j] != nullptr){
                    if(tmp[i]->val != tmp[j]->val){
                        return false;
                    }
                }
                else if(tmp[i] == nullptr && tmp[j] == nullptr){
                }
                else{
                    return false;
                }
                i++;
                j--;
            }
        }
        return true;
    }
~~~

