---
layout:  post
category:  algorithm
title:  No25、复杂链表的复制
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No25、复杂链表的复制
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



## **No25、复杂链表的复制**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba?tpId=13&&tqId=11178&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），请对此链表进行深拷贝，并返回拷贝后的头结点。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）。 下图是一个含有5个结点的复杂链表。图中实线箭头表示next指针，虚线箭头表示random指针。为简单起见，指向null的指针没有画出。



![](http://oss.interviewguide.cn/img/202305051042207.png)

示例:

输入:{1,2,3,4,5,3,5,#,2,#}

输出:{1,2,3,4,5,3,5,#,2,#}

解析:我们将链表分为两段，前半部分{1,2,3,4,5}为ListNode，后半部分{3,5,#,2,#}是随机指针域表示。

以上示例前半部分可以表示链表为的ListNode:1->2->3->4->5

后半部分，3，5，#，2，#分别的表示为

1的位置指向3，2的位置指向5，3的位置指向null，4的位置指向2，5的位置指向null

如下图:

![](http://oss.interviewguide.cn/img/202305051042319.png)

**示例1**

输入：

```
{1,2,3,4,5,3,5,#,2,#}
```

复制

返回值：

```
{1,2,3,4,5,3,5,#,2,#}
```





### **1、第一种方法，在节点后复制一个节点，然后再分离开这方法超级棒，太麻烦了，不建议用这种方法**

~~~cpp
/*
struct RandomListNode {
    int label;
    struct RandomListNode *next, *random;
    RandomListNode(int x) :
            label(x), next(NULL), random(NULL) {
    }
};
*/
class Solution {
public:

//复制原始链表的任一节点N并创建新节点N'，再把N'链接到N的后边
void CloneNodes(RandomListNode* pHead)
{
	RandomListNode* pNode = pHead;
	while (pNode != nullptr)
	{
		RandomListNode* pCloned = new RandomListNode(pNode->label);
		pCloned->next = pNode->next;
		pNode->next = pCloned;
		pNode = pCloned->next;
	}
}
//如果原始链表上的节点N的random指向S，则对应的复制节点N'的random指向S的下一个节点S'
void ConnectRandomNodes(RandomListNode* pHead)
{
	RandomListNode* pNode = pHead;
	while (pNode != nullptr)
	{
		RandomListNode* pCloned = pNode->next;
		if (pNode->random != nullptr)
			pCloned->random = pNode->random->next;
		pNode = pCloned->next;
	}
}
//把得到的链表拆成两个链表，奇数位置上的结点组成原始链表，偶数位置上的结点组成复制出来的链表
RandomListNode* ReConnectNodes(RandomListNode* pHead)
{
	RandomListNode* pNode = pHead;
	RandomListNode* pClonedHead = nullptr;
	RandomListNode* pClonedNode = nullptr;

	//初始化
	if (pNode != nullptr)
	{
		pClonedHead = pNode->next;
		pClonedNode = pNode->next;
		pNode->next = pClonedNode->next;
		pNode = pNode->next;

	}
	//循环
	while (pNode != nullptr)
	{
		pClonedNode->next = pNode->next;
		pClonedNode = pClonedNode->next;
		pNode->next = pClonedNode->next;
		pNode = pNode->next;
	}

	return pClonedHead;
}
//三步合一
RandomListNode* Clone(RandomListNode* pHead)
{
	CloneNodes(pHead);
	ConnectRandomNodes(pHead);

	return ReConnectNodes(pHead);
}
};
~~~



### **自己在力扣上复现第一种做法，有很多要注意的地方**

https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/

执行用时：24 ms, 在所有 C++ 提交中击败了21.10%的用户

内存消耗：11.1 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};

class Solution {
public:

	void copyList(Node* head) {
		Node* node = head;
		while (node != nullptr) {
			Node* temp = new Node(node->val);
			temp->next = node->next;
			node->next = temp;
			node = temp->next;
		}
	}
	void connectRandomNodeList(Node* head) {
		Node* node = head;
		Node* copyNode = head->next;
		while (node != nullptr) {
			if (node->random != nullptr) //每当你要进行赋值的时候都要注意进行非空判断
				copyNode->random = node->random->next;
			node = copyNode->next;
			if (node != nullptr) //每当你要进行赋值的时候都要注意进行非空判断
				copyNode = node->next;
		}
	}
	Node* reCopyList(Node* head) {
		Node* node = head;
		Node* copyNode = head->next;
		Node* copyNodeHead = head->next;
		while (node != nullptr) {
			node->next = copyNode->next;
			node = node->next;
			if (node != nullptr)//每当你要进行赋值的时候都要注意进行非空判断
				copyNode->next = node->next;
			copyNode = copyNode->next;
		}

		return copyNodeHead;
	}
	Node* copyRandomList(Node* head) {

		if (head == nullptr) return nullptr;
		copyList(head);
		connectRandomNodeList(head);
		return reCopyList(head);
	}
};
~~~



### **2、哈希表的做法，其实更简单一下啊**

~~~cpp
RandomListNode* Clone(RandomListNode* pHead)
{
	if (pHead == nullptr)
	{
		return nullptr;
	}

	std::unordered_map<RandomListNode*, RandomListNode*> hash_map;

	for (RandomListNode* p = pHead; p != nullptr; p = p->next)
	{
		hash_map[p] = new RandomListNode(p->label);
	}

	for (RandomListNode* p = pHead; p != nullptr; p = p->next)
	{
		hash_map[p]->next = hash_map[p->next];//这里要注意是 unmp[p->next] 千万注意，好好想想
		hash_map[p]->random = hash_map[p->random];//下同
	}

	return hash_map[pHead];
}

~~~



### **在力扣上复现了一遍**

执行用时：20 ms, 在所有 C++ 提交中击败了49.48%的用户

内存消耗：11.4 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
	Node* copyRandomList(Node* head) {

		if (head == nullptr) return nullptr;
		unordered_map<Node*, Node*> unmp;
		for (Node* p = head; p != nullptr;p=p->next)
		{
			unmp[p] = new Node(p->val);
		}
		for (Node* p = head; p != nullptr; p = p->next)
		{
			unmp[p]->next = unmp[p->next];//这里要注意是 unmp[p->next] 千万注意，好好想想
			unmp[p]->random = unmp[p->random];//下同
		}

		return unmp[head];
	}
~~~



### **3、哈希表的递归写法**

~~~cpp
struct RandomListNode {
	int label;
	struct RandomListNode* next, * random;
	RandomListNode(int x) :
		label(x), next(NULL), random(NULL) {
	}
};


class Solution {
public:
	unordered_map<RandomListNode*, RandomListNode*> unmp;
	RandomListNode* Clone(RandomListNode* pHead)
	{
		if (pHead == NULL) return NULL;
		RandomListNode* head = new RandomListNode(pHead->label);
		unmp[pHead] = head;
		head->next = Clone(pHead->next);  //在这里递归是关键，保证所有节点都已生成，放入map
		head->random = NULL;
		if (pHead->random!=nullptr) head->random = unmp[pHead->random];   //查找map中对应节点
		return head;
	}
};
~~~



### **力扣上复现做法**

执行用时：24 ms, 在所有 C++ 提交中击败了21.10%的用户

内存消耗：11.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};

class Solution {
public:

    unordered_map<Node*, Node*> unmp;
	Node* copyRandomList(Node* head) {

		if (head == NULL) return NULL;
		Node* newHead = new Node(head->val);
		unmp[head] = newHead;
		newHead->next = copyRandomList(head->next);  //在这里递归是关键，保证所有节点都已生成，放入map
		newHead->random = NULL;
		if (head->random != nullptr) newHead->random = unmp[head->random];   //查找map中对应节点
		return newHead;
	}
};
~~~



### **二刷：**

### **1、哈希表递归写法**

运行时间：3ms  占用内存：520k

~~~cpp
class Solution {
public:

  //关键是保存住映射关系，可以说是哈希表和链表的组合吧
    unordered_map<RandomListNode*,RandomListNode*> unmp;
	RandomListNode* Clone(RandomListNode* pHead)
	{
        if(pHead == nullptr) return nullptr;
        RandomListNode* newHead = new RandomListNode(pHead->label);
        unmp[pHead] = newHead;//这里需要保存的是 pHead -》 newHead 的映射关系,必须在这里保存
        newHead->next = Clone(pHead->next);//到这一步，其实所有的点已经全部生成了
        newHead->random = nullptr;//其实默认已经是nullptr了，有没有这一步其实没什么关系
        if(pHead->random != nullptr)  newHead->random = unmp[pHead->random];//这一步，真的是灵魂所在了
        return newHead;
	}
};
~~~



### **2、哈希表迭代写法**

运行时间：2ms  占用内存：492k

~~~cpp
/*
struct RandomListNode {
    int label;
    struct RandomListNode *next, *random;
    RandomListNode(int x) :
            label(x), next(NULL), random(NULL) {
    }
};
*/
class Solution {
public:

  //关键是保存住映射关系，可以说是哈希表和链表的组合吧
	RandomListNode* Clone(RandomListNode* pHead)
	{
        if(pHead == nullptr) return nullptr;
        unordered_map<RandomListNode*,RandomListNode*> unmp;
        for( auto p = pHead; p != nullptr; p=p->next){
            unmp[p] = new RandomListNode(p->label);
        }
        for( auto p = pHead; p != nullptr; p=p->next){
            
            unmp[p]->next = unmp[p->next];
            unmp[p]->random = unmp[p->random];
        }
        
        return unmp[pHead];
	}
};
~~~

<p id = "复杂链表的复制"></p>

