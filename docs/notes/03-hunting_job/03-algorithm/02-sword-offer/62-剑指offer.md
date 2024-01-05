---
layout:  post
category:  algorithm
title:  No62、二叉搜索树的第K个节点
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No62、二叉搜索树的第K个节点
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

## **No62、二叉搜索树的第K个节点**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/ef068f602dde4d28aab2b210e859150a?tpId=13&&tqId=11215&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

### **示例1**

**输入**

~~~c
{5,3,7,2,4,6,8},3
~~~
**返回值**

~~~c
{4}
~~~
说明
按结点数值大小顺序第三小结点的值为4 



### **1、笨方法，全部保存下来**

会超时，这个方法不行



### **2、中序遍历其实就是从小到大的排列顺序**

~~~cpp
class situation {
public:
	int count=0;

	TreeNode* KthNode(TreeNode* pRoot, int k)
	{
		if (pRoot == nullptr) return nullptr;
		TreeNode* left_node = KthNode(pRoot->left, k);
		if (left_node) return left_node;
		count++;
		if (k == count) {
			return pRoot;
		}
		TreeNode* right_node = KthNode(pRoot->right, k);
		if (right_node) return right_node;
		return nullptr;
	}
}
~~~



### **3、中序遍历模板解法**

~~~cpp
TreeNode* KthNode(TreeNode* pRoot, int k)
	{
		if (pRoot == nullptr) return nullptr;
		stack<TreeNode*> s;
		s.push(pRoot);
		while (!s.empty() || pRoot != nullptr) {
			if (pRoot != nullptr) {
				s.push(pRoot);
				pRoot = pRoot->left;
			}
			else {
				pRoot = s.top();
				s.pop();
				k--;
				if (k == 0) return pRoot;
				pRoot = pRoot->right;
			}
		}
		return nullptr;
	}
~~~



### 二刷：

### **1、其实就是中序遍历**

运行时间：3ms  占用内存：504k

~~~cpp
TreeNode* KthNode(TreeNode* pRoot, int k)
{
    if(pRoot == nullptr) return nullptr;
    stack<TreeNode*> st;
    while(!st.empty() || pRoot!=nullptr){

        while(pRoot != nullptr){
            st.push(pRoot);
            pRoot = pRoot->left;
        }
        pRoot = st.top();
        st.pop();
        if(--k == 0) return pRoot;
        pRoot = pRoot->right;
    }

    return nullptr;
}
~~~


<p id = "二叉搜索树的第K个节点"></p>

