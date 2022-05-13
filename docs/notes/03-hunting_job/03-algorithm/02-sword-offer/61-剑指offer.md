---
layout:  post
category:  algorithm
title:  No61、序列化二叉树
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No61、序列化二叉树
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>


## **No61、序列化二叉树** 

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/cf7e25aa97c04cc1a68c8f040e71fb84?tpId=13&&tqId=11214&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

请实现两个函数，分别用来序列化和反序列化二叉树

二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，从而使得内存中建立起来的二叉树可以持久保存。序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，序列化的结果是一个字符串，序列化时通过 某种符号表示空节点（#），以 ！ 表示一个结点值的结束（value!）。

二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。

例如，我们可以把一个只有根节点为1的二叉树序列化为"1,"，然后通过自己的函数来解析回这个二叉树。



### **1、看的大神的写法，这种写法超级棒，代码逻辑非常好**

但是牛客上并没有考虑到负数的情况，力扣上的题目有负数的限制

~~~C++
class Solution {
private:
	string SerializeCore(TreeNode* root) {
		if (root == nullptr) {
			return "#!";
		}
		string str;
		str = to_string(root->val) + "!";
		str += SerializeCore(root->left);
		str += SerializeCore(root->right);
		return str;
	}

	TreeNode* DeserializeCore(char*& str) {
		if (*str == '#') {
			str++;
			return nullptr;
		}
		int num = 0;
		while (*str != '!') {
			num = num * 10 + *str - '0';
			str++;
		}
		TreeNode* node = new TreeNode(num);
		node->left = DeserializeCore(++str);
		node->right = DeserializeCore(++str);
		return node;
	}
public:
	char* Serialize(TreeNode* root) {
		string str = SerializeCore(root);
		char* res = new char[str.size()];
		for (int i = 0; i < str.size(); i++) {
			res[i] = str[i];
		}
		return res;
	}

	TreeNode* Deserialize(char* str) {
		return DeserializeCore(str);
	}
};
~~~



### **力扣上的要求会有负数的限制**

~~~cpp
class Codec {
public:

	TreeNode* deserializeCore(string& data, int &i) {
	if (data[i] == '#') {
			i++;
			return nullptr;
		}
		int num = 0, negativeFlag=1;
		if (data[i] == '-') {
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



### **二刷：**

### **1、挺好，还是要再刷一下**

​    2ms	488KB

~~~cpp
/*
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
    TreeNode(int x) :
            val(x), left(NULL), right(NULL) {
    }
};
*/
class Solution {
private:
	string SerializeCore(TreeNode* root) {
		if(root == nullptr) {
            return "#!";
        }
        
        string str;
        str +=to_string(root->val) + '!';
        str +=SerializeCore(root->left);
        str +=SerializeCore(root->right);
		return str;
	}

	TreeNode* DeserializeCore(char*& str) {
		if(*str == '#'){
            str++;
            return nullptr;
        }
        int num = 0;
        while( *str != '!'){
            num = num*10 + (*str)-'0';
            str++;
        }
        TreeNode *node = new TreeNode(num);
        node->left = DeserializeCore(++str);
        node->right = DeserializeCore(++str);
        
        return node;
	}

public:
	char* Serialize(TreeNode* root) {
		string str = SerializeCore(root);
        char *chs = new char[str.size()];
        for(int i = 0;i<str.size();++i){
            chs[i] = str[i];
        }
        return chs;

	}

	TreeNode* Deserialize(char* str) {
		return DeserializeCore(str);
	}
};
~~~


<p id = "序列化二叉树"></p>

