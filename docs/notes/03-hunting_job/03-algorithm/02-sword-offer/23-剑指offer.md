---
layout:  post
category:  algorithm
title:  No23、二叉搜索树的后序遍历序列
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No23、二叉搜索树的后序遍历序列
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
  <p>这是四则或许对你有帮助的讯息</p>
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的《校招日程》文档，其中包括<a style="text-decoration: underline" href="https://flowus.cn/share/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">往届补录</a>、<a href="https://flowus.cn/share/5f327c98-1e31-46c8-b86b-5ac6105e021f" target="_blank">应届实习校招</a>信息,比如各种大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>



## **No23、二叉搜索树的后序遍历序列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/a861533d45854474ac791d90e447bafd?tpId=13&&tqId=11176&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

从上往下打印出二叉树的每个节点，同层节点从左至右打印。

### **示例1**

**输入**

~~~
{5,4,#,3,#,2,#,1}
~~~
**返回值**

~~~
[5,4,3,2,1]
~~~



### **1、递归写法，树主要的做法就是递归**

~~~cpp
bool VerifySquenceOfBST(vector<int> sequence) {
	if (sequence.empty())  return false;
	if (sequence.size() == 1) return true;
	return VerifySquenceOfBSTCore(sequence, 0, sequence.size()-1);
}

bool VerifySquenceOfBSTCore(vector<int>& sequence, int start, int end) {
	if (start >= end) return true;
	int low = start;
	while (low < end && sequence[low] < sequence[end])  ++low;

	for (int i = low; i < end; ++i) {
		if (sequence[i] <= sequence[end]) return false;
	}

	return  VerifySquenceOfBSTCore(sequence, start,low-1) &&
		VerifySquenceOfBSTCore(sequence, low,end-1);
}

~~~



### **二刷：依然没有思路，值得再看一遍**

1、并没有想象中的难，下次应该仔细想一想的

~~~cpp
    bool VerifySquenceOfBSTCore(vector<int>&sequence,int low,int high){
        if(low >= high) return true;
        int start = low;
        while(start < high && sequence[start] < sequence[high]) ++start;//二叉搜索树，左右根，左子树全部小于根
        //右子树全部打大于根，找到第一个大于根的元素，那么在他之前都是左子树，之后都是右子树
        for(int i = start;i < high; ++i)
            if(sequence[i] <= sequence[high]) return false; //右子树必须全部大于根，否则就是假
        return VerifySquenceOfBSTCore(sequence, low, start-1) //判断当前节点的其左子树
            && VerifySquenceOfBSTCore(sequence, start, high-1);//判断当前节点的其右子树

    }
    bool VerifySquenceOfBST(vector<int> sequence) {

        if(sequence.empty()) return false;//为空，则为假
        if(sequence.size() == 1) return true;//只有一个元素，为真
        
        return VerifySquenceOfBSTCore(sequence,0,sequence.size()-1);
    }
~~~

<p id = "二叉搜索树的后序遍历序列"></p>

