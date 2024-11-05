---
layout:  post
category:  algorithm
title:  No46、孩子们的游戏
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No46、孩子们的游戏
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



## **No46、孩子们的游戏（圆圈中最后剩下的数）**

[牛客网原题链接](https://www.nowcoder.com/practice/f78a359491e64a50bce2d89cff857eb6?tpId=13&&tqId=11199&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)



### **题目描述**

每年六一儿童节,牛客都会准备一些小礼物去看望孤儿院的小朋友,今年亦是如此。HF作为牛客的资深元老,自然也准备了一些小游戏。其中,有个游戏是这样的:首先,让小朋友们围成一个大圈。然后,他随机指定一个数m,让编号为0的小朋友开始报数。每次喊到m-1的那个小朋友要出列唱首歌,然后可以在礼品箱中任意的挑选礼物,并且不再回到圈中,从他的下一个小朋友开始,继续0...m-1报数....这样下去....直到剩下最后一个小朋友,可以不用表演,并且拿到牛客名贵的“名侦探柯南”典藏版(名额有限哦!!^_^)。请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号是从0到n-1)

如果没有小朋友，请返回-1

### **示例1**

**输入**

```
5,3
```

**返回值**

```
3
```

### **1、时间复杂度太大**

~~~cpp
class Solution {
public:
struct ListNode {
	int val;
	struct ListNode* next;
	ListNode(int v) :val(v), next(NULL) {

	}
};
    
    int LastRemaining_Solution(int n, int m)
    {
    ListNode* root=(ListNode*)malloc(sizeof(ListNode));
	root->val = 0;
	ListNode* node = (ListNode*)(malloc)(sizeof(ListNode));
	node=root;
	for (int i = 1; i < n; ++i) {
		ListNode* temp = (ListNode*)(malloc)(sizeof(ListNode));
		temp->val = i;
		node->next = temp;
		node = node->next;
	}
	node->next = root;

	int count = 0,result=-1;
	while (root != nullptr && n!=1) {
		if (++count == m - 1) {
			result = root->val;
			root = root->next;
			node->next = root;
			count = 0;
			n--;
			continue;
		}

		root = root->next;
		node = node->next;
		
	}
	result = root->val;
	return result;
    }
};
~~~



### **2、约瑟夫环的问题，背模板吧 啥也别说了，背模板吧**

执行用时：4 ms, 在所有 C++ 提交中击败了99.81%的用户

内存消耗：5.8 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
int lastRemaining(int n, int m) {

    if(n <= 0 || m < 0)
        return -1;
    int ans = 0;
    // 最后一轮剩下2个人，所以从2开始反推
    for (int i = 2; i <= n; ++i) {
        ans = (ans + m) % i;
    }
    return ans;
}
~~~



### **3、递归做法，不觉明厉**

~~~cpp
int LastRemaining_Solution(int n, int m)
{
    if(n==0)
        return -1;
    if(n==1)
        return 0;
    else
        return (LastRemaining_Solution(n-1,m)+m)%n;
}
~~~



### **二刷：**

### **1、使用数组代替环，考虑清楚从头开始的情况**

运行时间：58ms 占用内存：496k

~~~cpp
int LastRemaining_Solution(int n, int m)
{

    if(n<1 || m<1)  return -1;
    vector<int> numbers(n,0);
    int index = -1,step = 0, count = n;
    while(count > 0){  //跳出循环时将最后一个元素也设置为了-1

        index++; //指向上一个被删除对象的下一个元素。
        if(index >= n )index = 0; //模拟环。
        if(numbers[index] == -1) continue; //跳过被删除的对象。
        step++; //记录已走过的。向前走一步
        if(step == m){ //找到待删除的对象。

            numbers[index] = -1;
            step = 0;
            count--;
        }
    }
    return index; //返回跳出循环时的index,即最后一个被设置为-1的元素
}
~~~


<p id = "孩子们的游戏"></p>

