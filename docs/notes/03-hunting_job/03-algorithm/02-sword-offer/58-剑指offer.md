---
layout:  post
category:  algorithm
title:  No58、对称的二叉树
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No58、对称的二叉树
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>


## **No58、对称的二叉树**

 <font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/ff05d44dfdb04e1d83bdbdab320efbcb?tpId=13&&tqId=11211&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

请实现一个函数，用来判断一棵二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。 

### **示例1**

**输入**

~~~
{8,6,6,5,7,7,5}
~~~
**返回值**

~~~
true
~~~
**示例2**

**输入**

~~~
{8,6,9,5,7,7,5}
~~~
**返回值**

~~~
false
~~~



### **1、递归法比较好做，也很方便**

~~~cpp
bool isEqual(TreeNode*node1,TreeNode*node2){
    if(node1==nullptr && node2 ==nullptr)  return true;
    if(node1 ==nullptr || node2==nullptr) return false;//减少逻辑判断
    if(node1->val == node2->val) {
        return isEqual(node1->left,node2->right) && isEqual(node1->right,node2->left);//注意这里是右左，左右来进行判断

    }else
        return false;
}
bool isSymmetrical(TreeNode* pRoot) {
    if(pRoot==nullptr) return true;//这里是返回true的
    return isEqual(pRoot->left,pRoot->right);
}
~~~



### **二刷：**

### **1、对称 是指 8 6 6 5 7 7 5这样的对称，我的左子树要跟你的右子树一样才叫对称**

运行时间：2ms 占用内存：380k

~~~cpp
bool isEqual(TreeNode*node1, TreeNode*node2){
    if(node1 == nullptr && node2 == nullptr) return true;
    if(node1 == nullptr || node2 == nullptr) return false;
    if(node1->val != node2->val) return false;

    return isEqual(node1->left, node2->right) && isEqual(node1->right, node2->left);
}

bool isSymmetrical(TreeNode* pRoot)
{
    if(pRoot == nullptr) return true;
    return isEqual(pRoot->left, pRoot->right);
}
~~~

<p id = "对称的二叉树"></p>

