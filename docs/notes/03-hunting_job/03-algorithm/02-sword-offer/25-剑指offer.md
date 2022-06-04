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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




## **No25、复杂链表的复制**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba?tpId=13&&tqId=11178&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），请对此链表进行深拷贝，并返回拷贝后的头结点。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空） 

### **示例1**

**输入**

~~~
{10,5,12,4,7},22
~~~
**返回值**

~~~
[[10,5,7],[10,12]]
~~~
**示例2**
**输入**

~~~
{10,5,12,4,7},15
~~~
**返回值**

~~~
[]
~~~



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

