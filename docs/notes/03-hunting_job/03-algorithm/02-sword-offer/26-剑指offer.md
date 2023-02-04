---
layout:  post
category:  algorithm
title:  No26、二叉搜索树与双向链表
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No26、二叉搜索树与双向链表
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202302042310919.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/07-resources/01-free/04-schoolSchample.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 



## **No26、二叉搜索树与双向链表**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/947f6eb80d944a84850b0538bf0ec3a5?tpId=13&&tqId=11179&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。 



### **0、最笨的一种写法，这也是最容易理解的一种方法了**

中序遍历二叉树，然后用一个数组类保存遍历的结果，这样在数组中节点就按顺序保存了，然后再来修改指针，虽然没有一点技术含量，但是最后竟然还通过了 哈哈哈。。。

~~~cpp
TreeNode* Convert(TreeNode* pRootOfTree)
{
	if (pRootOfTree == NULL) return pRootOfTree;
	vector<TreeNode*> result;
	Convert(pRootOfTree, result);
	return Convert(result);
}

void Convert(TreeNode* node,vector<TreeNode*>&result) {
	if (node->left != nullptr)
		Convert(node->left, result);
	result.push_back(node);
	if (node->right != nullptr)
		Convert(node->right, result);
}

TreeNode* Convert(vector<TreeNode*>& result) {
	for (int i = 0; i < result.size()-1; ++i) {
		result[i]->right = result[i + 1];
		result[i+1]->left = result[i];
}
	return result[0];
}
~~~



### **0-1借助栈和数组类进行数据保存，最后修改指针指向**

关键在于二叉树的层次遍历这一块

~~~cpp
public:
   TreeNode* Convert(TreeNode* pRootOfTree)
{
	if (pRootOfTree == nullptr) return nullptr;
	vector<TreeNode*> result;
	stack<TreeNode*> s;

	// 形成一个中序遍历的结果，并添加指针。
	while (!s.empty() || pRootOfTree != nullptr) {
		if (pRootOfTree != nullptr) {
			s.push(pRootOfTree);
			pRootOfTree = pRootOfTree->left;
		}
		else {
			pRootOfTree = s.top();
			s.pop();
			result.push_back(pRootOfTree);
			pRootOfTree = pRootOfTree->right;
		}
	}
	// 修改链表指针指向。
	for (int i = 0; i < result.size() - 1; ++i) {
		result[i + 1]->left = result[i];
		result[i]->right = result[i+1];
	}
	return result[0];
}
~~~



### **1、借助栈进行节点保存，很厉害的一种写法**

我服啦，采用的是跟剑指offer上一样的写法

1. 明确Convert函数的功能。
   输入：输入一个二叉搜索树的根节点。
   过程：将其转化为一个有序的双向链表。
   输出：返回该链表的头节点。
2. 明确成员变量pLast的功能。
   pLast用于记录当前链表的末尾节点。
3. 明确递归过程。
   递归的过程就相当于按照中序遍历，将整个树分解成了无数的小树，然后将他们分别转化成了一小段一小段的双向链表。再利用pLast记录总的链表的末尾，然后将这些小段链表一个接一个地加到末尾。

~~~cpp
TreeNode* Convert(TreeNode* pRootOfTree)
{
    TreeNode* head = NULL, * pre = NULL;//head 输出，pre记录上一次出栈值
	stack<TreeNode*> s;
	while (pRootOfTree || !s.empty())
	{
		while (pRootOfTree!=nullptr)
		{
			s.push(pRootOfTree);
			pRootOfTree = pRootOfTree->left;
		}
		if (!s.empty())
		{
			pRootOfTree = s.top();
			s.pop();
			if (pre != NULL)
			{
				pre->right = pRootOfTree;
				pRootOfTree->left = pre;
			}
			else//pre为空，表示s第一次出栈，第一次出栈值为最左值，即输出值
			{
				head = pRootOfTree;
			}
			pre = pRootOfTree;
			pRootOfTree = pRootOfTree->right;
		}
	}
	return head;
}
~~~



### **2、复杂一点的递归做法**

先将左子树变为有序的排序链表，再将右子树变为有序的链表，然后将当前结点插入在两个链表中间就可以了，需要注意左子树和右子树为空的情况

~~~cpp
TreeNode* Convert(TreeNode* pRootOfTree)
    {
        if(pRootOfTree == NULL)
            return NULL;
          
        TreeNode* leftTree = Convert(pRootOfTree->left);    // 将左子树变为排序链表
        TreeNode*   rightTree = Convert(pRootOfTree->right);   // 将右子树变为排序链表
        TreeNode* tmp = leftTree;
        if(tmp != NULL)
        {
            while(tmp->right)
            {
                tmp = tmp->right;
            }
            tmp->right     = pRootOfTree;
        }
         
        pRootOfTree->left  = tmp;
        pRootOfTree->right =  rightTree;
        if(rightTree != NULL)
            rightTree->left  = pRootOfTree;
          
        return(leftTree == NULL ? pRootOfTree:leftTree);
    }
~~~



### **3、简单递归做法，精简版**

~~~cpp
TreeNode* Convert(TreeNode* pRootOfTree)
    {
        if(pRootOfTree == NULL) return pRootOfTree;
        pRootOfTree = ConvertNode(pRootOfTree);
        while(pRootOfTree->left) pRootOfTree = pRootOfTree->left;
        return pRootOfTree;
    }
 
    TreeNode* ConvertNode(TreeNode* root)
    {
        if(root == NULL) return root;
        if(root->left)
        {
            TreeNode *left = ConvertNode(root->left);
            while(left->right) left = left->right;
            left->right = root;
            root->left = left;
        }
         
        if(root->right)
        {
            TreeNode *right = ConvertNode(root->right);
            while(right->left) right = right->left;
            right->left = root;
            root->right = right;
        }
        return root;
    }
~~~



### **二刷：**

### **1、借助stack和vector**

运行时间：2ms  占用内存：408k

~~~cpp
    TreeNode* Convert(TreeNode* pRootOfTree)
    {
        if(pRootOfTree == nullptr) return nullptr;
        stack<TreeNode*> st;
        vector<TreeNode*> result;
        while( !st.empty() || pRootOfTree != nullptr){
            if(pRootOfTree != nullptr){
                st.push(pRootOfTree);
                pRootOfTree = pRootOfTree->left;
                
            }
            else{
               pRootOfTree = st.top();
               st.pop();
               result.push_back(pRootOfTree);
                pRootOfTree = pRootOfTree->right;
            }
        }
        
        
       for(int i = 0; i < result.size()-1; ++i){
           
           result[i+1]->left = result[i];
           result[i]->right = result[i+1];
       }
        
        return result[0];
    }
~~~



### **2、依然是栈，不过节约了不少空间，记这种做法，很棒**

运行时间：2ms  占用内存：484k

~~~cpp
 TreeNode* Convert(TreeNode* pRootOfTree)
    {
        if(pRootOfTree == nullptr) return nullptr;
        stack<TreeNode*> st;
        vector<TreeNode*> result;
        TreeNode* head = nullptr,*pre = nullptr;
        while( !st.empty() || pRootOfTree != nullptr){
            while(pRootOfTree != nullptr){
                st.push(pRootOfTree);
                pRootOfTree = pRootOfTree->left;
            }
            if( !st.empty()){
                pRootOfTree = st.top();
                st.pop();
              if(pre == nullptr){//表示第一次出栈，为最左值，记录下最小的元素
                  head = pRootOfTree;
              }
              else{
                  pre->right = pRootOfTree;
                  pRootOfTree->left = pre;
               }
                
                pre = pRootOfTree;
                pRootOfTree = pRootOfTree->right;
            }
        }
        return head;
    }
~~~


<p id = "二叉搜索树与双向链表"></p>

