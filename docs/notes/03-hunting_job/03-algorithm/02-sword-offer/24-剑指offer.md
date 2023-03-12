---
layout:  post
category:  algorithm
title:  No24、二叉树中和为某一值的路径
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No24、二叉树中和为某一值的路径
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
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>



## **No24、二叉树中和为某一值的路径**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/b736e784e3e34731af99065031301bca?tpId=13&&tqId=11177&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。 

### **示例1**

**输入**

```
{10,5,12,4,7},22
```

**返回值**

```
[[10,5,7],[10,12]]
```

**示例2**

**输入**

```
{10,5,12,4,7},15
```

**返回值**

```
[]
```

### **1、带有回溯性质的解法**

~~~cpp
void FindPathCore(vector<vector<int>>&result, vector<int>  &temp, TreeNode* root, int sum) {
	if (root == nullptr) return;
	temp.push_back(root->val);
	if (root->left == nullptr && root->left == nullptr && sum == root->val) {
		result.push_back(temp);
	}
	else { 
		if (root->left) {
			FindPathCore(result, temp, root->left, sum-root->val);
		}
		if (root->right) {
			FindPathCore(result, temp, root->right, sum - root->val);
		}
	}
	temp.pop_back();//走到这里了，说明当前节点不满足要求，pop掉，返回其父亲节点

}
vector<vector<int> > FindPath(TreeNode* root, int expectNumber) {
	vector<vector<int>>  result;
	vector<int>  temp;
	FindPathCore(result, temp, root, expectNumber);
	return result;
}
~~~



但这题是要求按照字典序返回结果的，所以最后应该是将result进行排序，优先返回那些长度较长的路径。所以最后应该再判断一下，可以用lambda表达式或者重载一个 （） 也可以

~~~cpp
void FindPathCore(vector<vector<int>>&result, vector<int>  temp, TreeNode* root, int sum) {
	if (root == nullptr) return;
	temp.push_back(root->val);
	if (root->left == nullptr && root->left == nullptr && sum == root->val) {
		result.push_back(temp);
	}
	else { 
		if (root->left) {
			FindPathCore(result, temp, root->left, sum-root->val);
		}
		if (root->right) {
			FindPathCore(result, temp, root->right, sum - root->val);
		}
	}
	temp.pop_back();//走到这里了，说明当前节点不满足要求，pop掉，返回其父亲节点

}
vector<vector<int> > FindPath(TreeNode* root, int expectNumber) {
	vector<vector<int>>  result;
	vector<int>  temp;
	FindPathCore(result, temp, root, expectNumber);
    sort(result.begin(),result.end(),[&](vector<int> v1,vector<int>v2){ return v1.size()>v2.size();});
	return result;
}
~~~

或者重载 （） 

~~~cpp
struct compare {

	bool operator()(vector<int>& left, vector<int>& right) {
		return left.size() > right.size();
	}

};

void FindPathCore(vector<vector<int>>&result, vector<int>  temp, TreeNode* root, int sum) {
	if (root == nullptr) return;
	temp.push_back(root->val);
	if (root->left == nullptr && root->left == nullptr && sum == root->val) {
		result.push_back(temp);
	}
	else { 
		if (root->left) {
			FindPathCore(result, temp, root->left, sum-root->val);
		}
		if (root->right) {
			FindPathCore(result, temp, root->right, sum - root->val);
		}
	}
	temp.pop_back();//走到这里了，说明当前节点不满足要求，pop掉，返回其父亲节点

}
vector<vector<int> > FindPath(TreeNode* root, int expectNumber) {
	vector<vector<int>>  result;
	vector<int>  temp;
	FindPathCore(result, temp, root, expectNumber);
    sort(result.begin(),result.end(),compare());
	return result;
}
~~~



### **二刷：**

### **二刷也不太会，哭了，仔细想想其实也不太难，哎还是太菜了**

运行时间：2ms  占用内存：484k

~~~cpp
void FindPathCore(TreeNode*root,vector<vector<int>>&result,vector<int>temp,int sumNum){//这一这里 temp是引用方式传值，所以当前节点不符合，还要删除掉
        if(root == nullptr) return;
        temp.push_back(root->val);
        if(root->left == nullptr && root->right == nullptr &&  sumNum == root->val)
        {
            result.push_back(temp);
        }
        else{
            if(root->left)  
                FindPathCore(root->left,result,temp,sumNum-root->val);
            if(root->right)  
                FindPathCore(root->right,result,temp,sumNum-root->val);
            
        }
        temp.pop_back();//如果不是引用方式，而是值传递，这一步是可以删掉的，是引用方式就必须要pop掉

    }
    vector<vector<int> > FindPath(TreeNode* root,int expectNumber) {
        if(root == nullptr) return vector<vector<int>>();
        
        vector<vector<int>> result;
        vector<int>temp;
        FindPathCore(root,result,temp,expectNumber);
        
        sort(result.begin(),result.end(),[](const vector<int>&a,const vector<int>&b){ return a.size()>b.size();});
        return result;

    }
~~~

<p id = "二叉树中和为某一值的路径"></p>

