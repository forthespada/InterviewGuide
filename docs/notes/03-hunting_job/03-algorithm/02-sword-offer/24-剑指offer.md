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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202302042310919.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/07-resources/01-free/04-schoolSchample.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




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

