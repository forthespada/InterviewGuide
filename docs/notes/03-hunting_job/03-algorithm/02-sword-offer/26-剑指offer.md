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

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是六则或许对你有些许帮助的信息:</p>
<p>⭐️1、阿秀与朋友合作开发了一个<span style="font-weight:bold;color:red">编程资源网站</span>，目前已经收录了很多不错的学习资源和黑科技（附带下载地址），如过你想要寻求合适的编程资源，<a href="https://tools.interviewguide.cn/home" style="text-decoration: underline" target="_blank">欢迎体验</a>以及推荐自己认为不错的资源，众人拾柴火焰高，我为人人，人人为我🔥！</p>  <p>2、👉23年5月份阿秀从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s?__biz=Mzk0ODU4MzEzMw==&mid=2247512170&idx=1&sn=c4a04a383d2dfdece676b75f17224e78" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold;color:red">互联网中大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
<div align="center">
</div>网站地址：<a style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">InterviewGuide大厂面试真题解析网站</a>。点此可以查看该网站的视频介绍：<a style="text-decoration: underline" href="https://www.bilibili.com/video/BV1f94y1C7BL" target="_blank">B站视频讲解</a>   如果可以的话求个B站三连，感谢！
  </p>3、😊
    分享一个学弟发给我的<span style="font-weight:bold;color:red">20T网盘资源合集</span>，<a style="text-decoration: underline" href="https://docs.qq.com/sheet/DY3VPVklVaFFMcUZ4?tab=9h5afr" target="_blank">点此白嫖</a>，主要是各类高清影视、电视剧、音乐、副业、纪录片、英语四六级考试、考研考公等资源。
  </p>
  <p>4、😍免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>
  </p>
  <p>5、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>6、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>


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

