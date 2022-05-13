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

