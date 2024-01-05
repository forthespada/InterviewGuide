---
layout:  post
category:  algorithm
title:  No4、重建二叉树
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No4、重建二叉树
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
<p>1、阿秀在工作之余开发了一个<span style="font-weight:bold;color:red">编程资源网站</span>，目前已经收集了很多不错的学习资源和黑科技（附带下载地址），如你有意<a href="https://www.cxypron.com/home" target="_blank">欢迎体验以及推荐自己认为不错的资源</a>，众人拾柴火焰高，我为人人，人人为我🔥！</p>  <p>2、👉23年5月份我从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s/zKItpGwIkHKK4g2aOlL2rA" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold;color:red">互联网中大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
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





## **No4、重建二叉树**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6?tpId=13&&tqId=11157&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

## **题目描述**

好题 绝对的好题

输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。



## **1、力扣上的一种解法**

需要首先熟悉二叉树先序遍历与中序遍历的规则。
先找到preorder中的起始元素作为根节点，在inorder中找到根节点的索引mid；那么，preorder[1:mid + 1]为左子树，preorder[mid + 1:]为右子树；inorder[0:mid]为左子树，inorder[mid + 1:]为右子树。递归建立二叉树。

~~~cpp
TreeNode* reConstructBinaryTree(vector<int> pre,vector<int> vin) {
         if (pre.size() == 0 || vin.size() == 0) {
            return NULL;
        }
        TreeNode* treeNode = new TreeNode(pre[0]);
        int mid = distance(begin(vin), find(vin.begin(), vin.end(), pre[0]));
        vector<int> left_pre(pre.begin() + 1, pre.begin() + mid + 1);
        vector<int> right_pre(pre.begin() + mid + 1, pre.end());
        vector<int> left_in(vin.begin(), vin.begin() + mid);
        vector<int> right_in(vin.begin() + mid + 1, vin.end());

        treeNode->left = reConstructBinaryTree(left_pre, left_in);
        treeNode->right = reConstructBinaryTree(right_pre, right_in);
        return treeNode;
    }
~~~



## **2、借助哈希来进行加速的一种做法**

~~~cpp
TreeNode* reConstructBinaryTree(vector<int> pre, vector<int> vin) {

	unordered_map<int, int> unmp;
	for (int i = 0; i < pre.size(); ++i) {
		unmp.insert({ vin[i],i });
	}
	return reConstructBinaryTreeCore(pre, unmp, 0, 0, pre.size() - 1);
}
TreeNode* reConstructBinaryTreeCore(vector<int>& preorder, unordered_map<int, int>& unmp, int root, int start, int end) {//前序的root  中序的start和end
	if (start > end) return NULL;
	TreeNode* tree = new TreeNode(preorder[root]);
	int in_root_index = unmp[preorder[root]];

	tree->left = reConstructBinaryTreeCore(preorder, unmp, root + 1, start, in_root_index - 1);
	tree->right = reConstructBinaryTreeCore(preorder, unmp, (root + 1) + (in_root_index - 1 - start) + 1, in_root_index + 1, end);//左子树的根的位置，加上左子树的长度就等于前序中右子树根的索引
	return tree;
}
~~~





## **二刷：借助hash来进行加速**

3 ms	496K

~~~cpp
TreeNode* reConstructBinaryTreeCore(unordered_map<int, int> &hashMap,vector<int>& pre, int low1, vector<int>& vin, int low2, int high2) {

    if (low1 > (int)pre.size() || low2 > high2) return nullptr;//注意这里是可以等于的，千万记得是可以等于的
	TreeNode* root = new TreeNode(pre[low1]);
	int index = hashMap[pre[low1]];
	root->left = reConstructBinaryTreeCore(hashMap, pre, low1 + 1, vin, low2, index - 1);
	root->right = reConstructBinaryTreeCore(hashMap, pre, low1 + 1 + index - low2, vin, index + 1, high2);
	return root;
}

TreeNode* reConstructBinaryTree(vector<int> pre, vector<int> vin) {

	unordered_map<int,int> hashMap;
    int len = vin.size();
	for (int i = 0; i < len; ++i) {
		hashMap.insert(make_pair(vin[i],i));//这里在insert时候是要make_pair一下的
	}

	return reConstructBinaryTreeCore(hashMap, pre, 0, vin, 0, vin.size()-1);
}
~~~

<p id = "用两个栈来实现一个队列"></p>

