---
layout:  post
category:  algorithm
title:  No1、二维数组中的查找
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No1、二维数组中的查找
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
  <p>这是五则或许对你有些许帮助的信息:</p>
<p>0、经常看到有人问哪里有汇总好的校招投递公司信息汇总？甚至还有的人花钱去买这类信息，更有甚者<span style="font-weight:bold;color:red">还有被骗的</span>。。。其实这类信息真的很多，牛客网、前程无忧这些招聘网站都帮你总结好了，这里分享一下一位学弟告知的前程无忧推出的校招信息汇总，他们每天都会在群里发招聘公司、行业、岗位等，<a href="https://mp.weixin.qq.com/s/XVrkXg5P0Z7rWhDAWkJDWA" target="_blank">点此免费获取前程无忧总结好的校招资讯汇总</a></p>  <p>1、👉23年5月份我从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s/zKItpGwIkHKK4g2aOlL2rA" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold">大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
<div align="center">
  <a  style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">  <img src="http://oss.interviewguide.cn/img/202308091638172.png" style="zoom:100%;" /></a>
<p style="font-weight:bold">衷心希望自己开发的这个网站能够帮到更多的人，自己能够以技术服务于大家！</p>
</div>网站地址：<a style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">InterviewGuide大厂面试真题解析网站</a>。点此可以查看该网站的视频介绍：<a style="text-decoration: underline" href="https://www.bilibili.com/video/BV1f94y1C7BL" target="_blank">B站视频讲解</a>   如果可以的话求个B站三连，感谢！
  </p> 
  <p>2、😍
    免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>





<p id="带你快速刷完67道剑指offer"></p>

<h1 align="center">《带你快速刷完67道剑指offer》</h1>

> 阿秀自己刷过的算法部分经过整理后是按照不同基础、不同人群分类的，如果你不知道自己该看哪个部分的算法题，可以先看一下这里，[戳我直达](/notes/03-hunting_job/03-algorithm/01-basic-algorithm/01-introduce.md)。

以下是本部分正文：

### **前言**



> 以下所有题目均来自于《何海涛. 剑指 Offer[M]. 电子工业出版社, 2012.》一书中

刷题网站推荐：[力扣网](https://www.nowcoder.com/ta/coding-interviews?from=cyc_github)、[牛客网](https://leetcode-cn.com/problemset/lcof/)

因本人主要在牛客网上刷的剑指offer，所以本专栏题目顺序与牛客网顺序保持一致，每道题目下也给出了相应的牛客网链接。

**本专栏介绍**

-  本资料适合于校招、社招工作党以及打算转行做计算机的 C++ 技术栈人士。
-  本资料是阿秀本人在秋招前的刷题记录，基本汇集了牛客网与力扣网上剑指offer专题的各种**精妙解法**
-  文中有适量代码注释，不少题目都有自己四刷五刷的记录，如果你想要在最短时间内刷完剑指offer，本专栏是你绝对不应该错过的！

关于更多本专栏的介绍可以点此了解阿秀的<font style="font-weight:bold; color:#4169E1;text-decoration:underline;" target="_blank">[**秋招找工作经历与个人介绍**](Doc/Other/ContactMe/ContactMe.md#关于阿秀)</font>。

该剑指offer刷题笔记是由<font style="font-weight:bold; color:#4169E1;text-decoration:underline;" target="_blank">**阿秀原创**</font>，后期整理并发布，未经其本人许可不得擅自发布在互联网上，如需引用请标注出处并<font style="font-weight:bold; color:#4169E1;text-decoration:underline;" target="_blank">[**告知本人**](Doc/Other/ContactMe/ContactMe.md#联系阿秀)</font>。

另，因个人水准不同，下面题目中的一些见解不免涉及一些个人主观判断，但也仅代表本人个人意见，与他人无关~

最后祝愿大家都能拿到好 **offer** ~加油！奥利给！

<br>

<p id = "二维数组中的查找"></p>

**No1、二维数组中的查找**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13&&tqId=11154&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

~~~
[

 [1,2,8,9],
 [2,4,9,12],
 [4,7,10,13],
 [6,8,11,15]

]
~~~

给定 target = 7，返回 true。

给定 target = 3，返回 false。

**示例1**

**输入**

```
7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
```

**返回值**

```
true
```

说明

```
存在7，返回true
```

**示例2**

**输入**

```
3,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
```

**返回值**

```
false
```

**说明**

```
不存在3，返回false
```

**1、第一种方法**

右上角逐渐逼近左下角 很好

- 如果当前位置元素比target小，则row++
- 如果当前位置元素比target大，则col--
- 如果相等，返回true
- 如果越界了还没找到，说明不存在，返回false

~~~cpp
    bool Find(int target, vecianzhtor<vector<int> > array) {
        if(array.empty() || array[0].empty()) return false;
        int row = array[0].size(), col = array.size();
 
        int w=row-1,h=0;
        while(w>=0&&h<col){           
            if(array[h][w]>target) w--;
            else if(array[h][w]<target) h++;
            else 
                return true;
        }
        return false;        
    }
~~~



**2、第二种方法**

每轮用二分法替换 挺不错

执行用时 :60 ms, 在所有 C++ 提交中击败了32.07%的用户

内存消耗 :13.2 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
bool hasFound(vector<int>& array, int target) {

	int start = 0, end = array.size() - 1;
	while (start + 1 < end) {
		int mid = start + (end - start) /2;
		//cout << array[mid] << " "<<start<<" "<<mid<<" "<<end<<" ";
		if (array[mid] == target) return true;
		else if (array[mid] > target) end = mid;
		else
			start = mid;
	}
	if (array[start] == target || array[end] == target) return true;
	return false;

}



bool findNumberIn2DArray(vector<vector<int>>& matrix, int target) {
	if (matrix.empty() || matrix[0].empty()) return false;
	for (int i = 0; i < matrix.size(); ++i) {
		if (hasFound(matrix[i], target)) return true;
	}
	return false;

}
~~~



**二刷：依然不会，没有头绪...**

**1、从右上像左下查找慢慢逼近**

因为这样就断了它变大或者变小的两条路径了，
变大只能向下走，就是h++,变小只能w--了

~~~cpp
    bool Find(int target, vector<vector<int> > array) {
        if(array.size() == 0 || array[0].size() == 0) return false;//条件判断
        int row = array.size(), col = array[0].size();
        int w = col-1, h = 0;//因为这样就断了它变大或者变小的两条路径了，
        //变大只能向下走，就是h++,变小只能w--了
        while( w>=0 && h<row){
            if( array[h][w] > target ) w--;
            else if( array[h][w] < target) h++;
            else
                return true;
        }
        return false;
    }
~~~



**2、每个数组用二分法代替**

~~~cpp
    bool hasFind(vector<int>&nums, int target){
        int low = 0,high = nums.size()-1;
        while(low + 1 < high){
            int mid = low + (high - low)/2;
            if(nums[mid] > target) high = mid;
            else if(nums[mid] < target) low = mid;
            else
                return true;
        }
        
        if(nums[low] == target || nums[high] == target) return true;
        
        return false;        
        
    }
    bool Find(int target, vector<vector<int> > array) {
        if(array.size() == 0 || array[0].size() == 0) return false;//条件判断
        int row = array.size();
        for(int i = 0; i < row; ++i){
            if(hasFind(array[i], target)) return true;
        }
        return false;
    }
~~~

<p id = "替换空格"></p>

**No2、替换空格**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423?tpId=13&&tqId=11155&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。 

**1、首先统计出长度，然后从后向前替换**

~~~cpp
void replaceSpace(char *str,int length) {//int length是指当前的长度
    int spaceCount = 0;
    int totalLen = length;
    for(int i = 0; i < length; ++i){
        if(str[i] == ' ') spaceCount++;
    }

    totalLen += spaceCount*2;
    for(int i = length-1; i>=0 &&totalLen != i; --i){//当 i = totalLen的时候说明前面已经
        //都没有空格了，可以节约一部分时间，而不是一直赋值下去
        if(str[i] != ' ') str[--totalLen] = str[i];
        else{
            str[--totalLen] = '0';
            str[--totalLen] = '2';
            str[--totalLen] = '%';                
        }

    }
}
~~~

<p id ="从头到尾打印链表"></p>

**No3、从尾到头打印链表**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&&tqId=11156&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一个链表，按链表从尾到头的顺序返回一个ArrayList。 

**1、这题也太傻逼了，从前向后保存，然后reverse不就可以了吗。。。**

运行时间：3ms  占用内存：504k

~~~cpp
vector<int> printListFromTailToHead(ListNode* head) {
    if( head == nullptr) return vector<int>();

    vector<int> result;
    while(head != nullptr){
        result.push_back(head->val);
        head = head->next;
    }

    reverse(result.begin(),result.end());
    return result;

}
~~~



**2、不用reverse，返回一个逆序也行**

运行时间：2ms  占用内存：480k

~~~cpp
vector<int> printListFromTailToHead(ListNode* head) {
    if( head == nullptr) return vector<int>();

    vector<int> result;
    while(head != nullptr){
        result.push_back(head->val);
        head = head->next;
    }

    // reverse(result.begin(),result.end());
    return vector<int>(result.rbegin(),result.rend());

}
~~~

<p id = "重建二叉树"></p>

**No4、重建二叉树**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6?tpId=13&&tqId=11157&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

好题 绝对的好题

输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。



**1、力扣上的一种解法**

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



**2、借助哈希来进行加速的一种做法**

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





**二刷：借助hash来进行加速**

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

**No5、 用两个栈来实现一个队列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=13&&tqId=11158&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

完成队列的Push和Pop操作。 队列中的元素为int类型。 

**1、很简单的一道题**

运行时间：3ms 占用内存：376k

~~~cpp
public:
    void push(int node) {
        stack1.push(node);
    }

    int pop() {
        while(stack1.size() != 1){
            stack2.push(stack1.top());
            stack1.pop();
            
        }
        int value = stack1.top();
        stack1.pop();
        while(!stack2.empty()){
            stack1.push(stack2.top());
            stack2.pop();
        }
        
        return value;        
    }

private:
    stack<int> stack1;//保存元素
    stack<int> stack2;//辅助栈
};
~~~

<p id = "旋转数组"></p>

**No6、旋转数组**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题连接](https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba?tpId=13&&tqId=11159&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>



**题目描述**

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。

NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。 



**1、常规做法**

~~~cpp
 int minNumberInRotateArray(vector<int> rotateArray) {
    if (rotateArray.size() == 0) return 0;
    int minNum = rotateArray[0], len = rotateArray.size();
    for (int i = 1; i < len; ++i) {
        if (rotateArray[i] < minNum) return rotateArray[i];
    }
    return minNum;
    }
~~~



~~~cpp
    int minNumberInRotateArray(vector<int> rotateArray) {
    if (rotateArray.size() == 0) return 0;
    int  len = rotateArray.size();
    for (int i = 0; i < len-1; ++i) {
        if (rotateArray[i] > rotateArray[i+1]) return rotateArray[i+1];
    }
    return rotateArray[0];
    }
~~~



**2、二分法 很不错**

~~~cpp
int minNumberInRotateArray(vector<int> rotateArray) {
	if (rotateArray.size() == 0) return 0;
	int low = 0, high = rotateArray.size() - 1;
	while (low + 1 < high) {
		int mid = low + (high - low) / 2;
		if (rotateArray[mid] < rotateArray[high]) high = mid;
		else if (rotateArray[mid] == rotateArray[high]) high = high-1;
		else {
			low = mid;
		}
	}
	return min(rotateArray[low], rotateArray[high]);
}
~~~



**二刷**

**2-1、常规做法**

运行时间：26ms   占用内存：1124k

~~~cpp
    int minNumberInRotateArray(vector<int> rotateArray) {
        
        if( rotateArray.size() == 0) return 0;
        if( rotateArray.size() == 1) return rotateArray[0];
        for(int i = 0; i < rotateArray.size()-1; ++i){
            if( rotateArray[i] > rotateArray[i + 1] ) return rotateArray[i+1];
        }
        return rotateArray[0];//走到这一步了，就说明整个数组都是递增或者都是非递减的
    }
~~~



**2-2、二分法变种**

~~~cpp
    int minNumberInRotateArray(vector<int> rotateArray) {       
        if( rotateArray.size() == 0) return 0;
        int low = 0, high = rotateArray.size()-1;
        while(low + 1 < high){
            int mid = low + (high - low)/2;
            if(rotateArray[mid] < rotateArray[high]) high = mid;//说明右边有序，那就向左边走
            else if(rotateArray[mid] == rotateArray[high]) high = high-1;// 这种情况跟是特例只能一个一个的判断
            else
                low = mid;
        }

        return min(rotateArray[low], rotateArray[high]);
    }
~~~

<p id = "斐波那契数列"></p>

**No7、斐波那契数列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3?tpId=13&&tqId=11160&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。

**n≤39**

**示例1**

**输入**

```
4
```

**返回值**

```
3
```



easy不需再刷

**1、采用三个元素保存数组即可**

~~~cpp
    int Fibonacci(int n) {

	if (n == 1 || n == 2) return 1;//1、1、2、3、5、8、13、21、34
		if (n == 3) return 2;
	vector<int> F(3);
	F[0] = 1;
	F[1] = 1;
	F[2] = 2;
	for (int i = 3; i < n; ++i) {
		F[i % 3] = F[(i - 1) % 3] + F[(i - 2) % 3];


	}
	return F[(n - 1) % 3];
        
    }
~~~



**2、递归，慢得多**

~~~cpp
int Fibonacci(int n) {

	if(n==0) return 0;
    if (n == 1 || n == 2) return 1;//1、1、2、3、5、8、13、21、34
	return Fibonacci(n-1)+Fibonacci(n-2);
}
~~~

**二刷：很简单**

三个元素来保存元素，来回替换即可

运行时间：3ms 占用内存：360k

~~~cpp
int Fibonacci(int n) {
    if( n == 0) return 0;
    if( n == 1) return 1;
    int first = 0,second = 1,third = 1;
    for(int i = 2; i <= n; ++i){
        third = first + second;
        first =  second;
        second = third;
    }
    return third;
}
~~~



<p id = "跳台阶"></p>

**No8、 跳台阶**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4?tpId=13&&tqId=11161&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。 



**1、递归做法，真的很耗时**

~~~cpp
    int jumpFloor(int number) {
        if(number==1) return 1;
        if(number==2) return 2;
        return jumpFloor(number-1) + jumpFloor(number-2);
        
    }
~~~



**2、直接循环会好很多**

~~~cpp
    int jumpFloor(int number) {
        if (number == 1) {
            return 1;
        }
        int first = 1;
        int second = 2;
        for (int i = 3; i <= number; ++i) {
            int third = first + second;
            first = second;
            second = third;
        }
        return second;        
    }
~~~



**二刷：其实就是斐波那契数列**

运行时间：3ms 占用内存：376k

~~~cpp
    int jumpFloor(int number) {
        
        if( number <= 2) return number;//0 1 2 直接返回即可
        int first = 1, second = 2,third = 0;
        for(int i = 3;i <= number; ++i){
            third = first + second;
            first = second;
            second = third;
        }
        return third;
    }
~~~

<p id = "变态跳台阶"></p>

**No9、变态跳台阶**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/22243d016f6b47f2a6928b4313c85387?tpId=13&&tqId=11162&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。



**1、看了讲解豁然开朗**

因为n级台阶，第一步有n种跳法：跳1级、跳2级、到跳n级
跳1级，剩下n-1级，则剩下跳法是f(n-1)
跳2级，剩下n-2级，则剩下跳法是f(n-2)
所以f(n)=f(n-1)+f(n-2)+...+f(1)
因为f(n-1)=f(n-2)+f(n-3)+...+f(1)
所以f(n)=2*f(n-1)

~~~cpp

int jumpFloorII(int number) {

    if(number==1) return 1;
    return 2*jumpFloorII(number-1);
}
~~~



**2、第二种方法**

~~~cpp
    int jumpFloorII(int number) {

        if(number==1) return 1;
        int count=0,a=1;
        for(int i=2;i<=number;++i){
            count=a*2;
            a=count;
        }
        return count;
    }
~~~



**二刷：还行，找好规律**

运行时间：4ms 占用内存：488k

~~~cpp
int jumpFloorII(int number) {

    if( number <= 1) return number;
    return pow(2, number-1);
}
~~~

<p id = "矩阵覆盖"></p>

**No10、矩阵覆盖**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6?tpId=13&&tqId=11163&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

我们可以用2\*1的小矩形横着或者竖着去覆盖更大的矩形。

请问用n个2\*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

比如n=3时，2*3的矩形块有3种覆盖方法：

![](http://oss.interviewguide.cn/img/202205072310734.png)



**1、其实很简单，画画图就知道了。。。**

~~~cpp
    int rectCover(int number) {

        if(number<=2) return number;       
        return rectCover(number-1)+rectCover(number-2);
    }
~~~



**2、循环很快**

~~~cpp
    int rectCover(int number) {
	if (number <= 2) {
		return number;
	}
	int first = 1, second = 2, third = 3;
	for (int i = 3; i <= number; ++i) {
		third = first + second;
		first = second;
		second = third;
	}
	return third;
    }
~~~



**二刷：感觉还是斐波那契数列的变种**

运行时间：3ms  占用内存：464k

~~~cpp
    int rectCover(int number) {
        if( number <= 2) return number;
        int first = 1, second = 2, third = 0;
        for(int i = 3;i <= number; ++i){
            third = first + second;
            first = second;
            second = third;
        }       
        return third;
    }
~~~

<p id = "二进制中1的个数"></p>

**No11、二进制中1的个数** 

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8?tpId=13&&tqId=11164&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。

**示例1**

**输入**

~~~c
10
~~~
**返回值**

~~~c
2
~~~



**1、自己写的，错误的想法**

~~~cpp
int  NumberOf1(int n) {

	if (n == 0) return 0;
	if (n > 0) {//正数
		int count = 0;
		while (n!=0) {
			if (n == 1) {
				return ++count;
			}
			if (n % 2 == 1) { 
				count++; 
			    n = n / 2;
			}
			else
				n = n / 2;			
		}
		return count;
	}
	else {//负数
		n = n * (-1) -1;//负数的补码等于它的正数部分减一，取反即可
		int count = 0;
		while (n != 0) {
			if (n == 1) {
				++count;
				break;
			}
			if (n % 2 == 0) {
				count++;
				n = n / 2;
			}
			else
				n = n / 2;
		}
		return count;


	}
}
~~~

-9的补码是32位的，而不是6位 （1  0111），所以有1的个数也不是四位，int是32位的



**2、bitset的运用**

~~~cpp
int  NumberOf1(int n) {
	return bitset<32>(n).count();
	}
~~~



**3、牛客大神的做法**

~~~cpp

 int NumberOf1(int n) {
        int count = 0;
        while(n!= 0){
            count++;
            n = n & (n - 1);
         }
        return count;
    }
~~~

如果一个整数不为0，那么这个整数至少有一位是1。如果我们把这个整数减1，那么原来处在整数最右边的1就会变为0，原来在1后面的所有的0都会变成1(如果最右边的1后面还有0的话)。其余所有位将不会受到影响。    

**举个例子**：一个二进制数1100，从右边数起第三位是处于最右边的一个1。减去1后，第三位变成0，它后面的两位0变成了1，而前面的1保持不变，因此得到的结果是1011.我们发现减1的结果是把最右边的一个1开始的所有位都取反了。

这个时候如果我们再把原来的整数和减去1之后的结果做与运算，从原来整数最右边一个1那一位开始所有位都会变成0。如1100&1011=1000.也就是说，把一个整数减去1，再和原整数做与运算，会把该整数最右边一个1变成0.那么一个整数的二进制有多少个1，就可以进行多少次这样的操作。



**二刷：1、bitset用法：**

主要是将 n 转化为 32位表示，int 最大也就是 2^32次方，然后利用bitset。count（）函数，返回 其中 1 的数量

bitset<4> bitset1;　　//无参构造，长度为４，默认每一位为０

```cpp
bitset<8> bitset2(12);　　//长度为８，二进制保存，前面用０补充

string s = "100101";
bitset<10> bitset3(s);　　//长度为10，前面用０补充

char s2[] = "10101";
bitset<13> bitset4(s2);　　//长度为13，前面用０补充

cout << bitset1 << endl;　　//0000
cout << bitset2 << endl;　　//00001100
cout << bitset3 << endl;　　//0000100101
cout << bitset4 << endl;　　//0000000010101

bitset<8> foo ("10011011");
 
cout << foo.count() << endl;　　//5　　（count函数用来求bitset中1的位数，foo中共有５个１
cout << foo.size() << endl;　　 //8　　（size函数用来求bitset的大小，一共有８位

cout << foo.test(0) << endl;　　//true　　（test函数用来查下标处的元素是０还是１，并返回false或true，此处foo[0]为１，返回true
cout << foo.test(2) << endl;　　//false　　（同理，foo[2]为０，返回false
  
cout << foo.any() << endl;　　//true　　（any函数检查bitset中是否有１
cout << foo.none() << endl;　　//false　　（none函数检查bitset中是否没有１
cout << foo.all() << endl;　　//false　　（all函数检查bitset中是全部为１
```



运行时间：2ms  占用内存：496k

~~~cpp
int  NumberOf1(int n) {

	bitset<32> bit(n);//将其初始化为 32 位，不足 32 位的前面补齐即可
	return bit.count();// 返回其中为 1 的个数
}
~~~



**2、温习一下牛客大神的做法**

如果一个整数不为0，那么这个整数至少有一位是1。如果我们把这个整数减1，那么原来处在整数最右边的1就会变为0，原来在1后面的所有的0都会变成1(如果最右边的1后面还有0的话)。其余所有位将不会受到影响。    

**举个例子**：一个二进制数1100，从右边数起第三位是处于最右边的一个1。减去1后，第三位变成0，它后面的两位0变成了1，而前面的1保持不变，因此得到的结果是1011.我们发现减1的结果是把最右边的一个1开始的所有位都取反了。

这个时候如果我们再把原来的整数和减去1之后的结果做与运算，从原来整数最右边一个1那一位开始所有位都会变成0。如1100&1011=1000.也就是说，把一个整数减去1，再和原整数做与运算，会把该整数最右边一个1变成0.那么一个整数的二进制有多少个1，就可以进行多少次这样的操作。

运行时间：3ms 占用内存：376k

~~~cpp
int  NumberOf1(int n) {

	int res = 0;
    while(n != 0){
        n = n&(n-1);
        res++;
    }
	return res;
}
~~~

<p id = "数值的整数次方"></p>

**No12、数值的整数次方**  

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00?tpId=13&&tqId=11165&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

保证base和exponent不同时为0。不得使用库函数，同时不需要考虑大数问题，也不用考虑小数点后面0的位数。

**示例1**

**输入**

```
2.00000,3
```

**返回值**

```
8.00000
```

**示例2**

**输入**

```
2.10000,3
```

**返回值**

```
9.26100
```

**示例3**

**输入**

```
2.00000,-2
```

**返回值**

```
0.25000
```

**说明**

```
2的-2次方等于1/4=0.25
```

**1、主要要注意正负数的情况，要注意分开**

运行时间：3ms  占用内存：520k

~~~cpp
    double Power(double base, int exponent) {
        if( exponent == 0) return 1.0;
        if( base == 0.0 ) return 0.0;//保证不同时为0，先处理各自为0的情况
        
        bool flag = false;//判断指数是否为负
        if( exponent < 0) {
            flag = true;
            exponent *=-1;//如果为负数，则将指数转正
        }
        double res = base; 
        for(int i = 2;i <= exponent; ++i){
            res *=base;//逐渐递乘
        }
        
        if(flag) return 1.0/res;
        else
            return res;
    }
~~~



**2、快速幂算法，值得好好看看，力扣上的要求更严谨一些**

 https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/ 

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：5.9 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
    double myPow(double x, int n) {
        if( n == 0) return 1;
        if( x == 0.0) return 0;
        long  exp = n;//
        if(n < 0) {
            exp = n* (-1.0);//，当n == INT_MIN时正数时大于INT_MAX的，所以要用一个大于 INT_MAX的类型来保存，同时在将他转正的时候， n*(-1)的结果依然是一个 int，此时的int是个隐藏类型，然后才将这个结果赋值给 exp，所以用来保存结果值的不应该是个int型，我们用double型的 -1 ,这样就可以将相乘的结果值保存为一个 double类型了，然后再进行赋值
        } 
        
        double res = 1.0;
        while(exp != 0){
            if( (exp &1) == 1 ){
                res *=x;
            }
            x *=x;
            exp >>= 1;
        }

        return n<0 ? 1/res: res;

    }
~~~

<p id = "调整数组顺序使奇数位于偶数前面"></p>

**No13、调整数组顺序使奇数位于偶数前面**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/beb5aa231adc45b2a5dcc5b62c93f593?tpId=13&&tqId=11166&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。 



**1、暴力解法，新开辟一个数组保存数据**

~~~cpp
void reOrderArray(vector<int>& array) {
	
	
	vector<int> temp(array.size(), 0);
	int low = 0;
	for (int i = 0; i < array.size(); ++i) {
		if ((array[i] & 1) == 1) { temp[low++] = array[i]; }
	}

	for (int i = 0; i < array.size(); ++i) {
		if ((array[i] & 1) == 0) { temp[low++] = array[i]; }
	}
	array.assign(temp.begin(), temp.end());
}
~~~



**2、一种很巧妙的解法，空间复杂度o1的做法，时间复杂度是on^2**

~~~cpp
void reOrderArray(vector<int>& array) {
	
	for (int i = 0; i < array.size(); i++)
	{
		//for (auto a : array) {
		//	cout << a << " ";
		//}
		cout << endl;
		for (int j = array.size() - 1; j > i; j--)
		{
			if (array[j] % 2 == 1 && array[j-1] % 2 == 0) //前偶后奇就进行交换，这样一趟下来可以将第一个奇数放在首位，同时最后一个偶数放在末尾
			{
				swap(array[j], array[j - 1]);
			}
		}
	}
}
~~~



**3、时间和空间都是on的做法，只保存偶数部分**

~~~cpp
    void reOrderArray(vector<int> &array) {
    vector<int> temp(array.size(), 0);
	int oddIndex = 0, evenIndex = 0;
	for (auto a : array) {
		if ((a & 1) == 1) array[oddIndex++] = a;
		else
			temp[evenIndex++] = a;
	}

	for (int i = 0; i < evenIndex; ++i)
		array[oddIndex + i] = temp[i];
    }
~~~



**二刷：**

**1、笨方法另外开辟一个数组，先保存奇数，再保存偶数**

~~~cpp
    void reOrderArray(vector<int> &array) {
        
        int len = array.size();
        if(len <= 1) return;
        int index = 0;
        vector<int> temp(len,0);
        for(int i=0;i<len;++i){
            if(array[i] %2 == 1) temp[index++] = array[i];
        }
        
       for(int i=0;i<len;++i){
            if(array[i] %2 == 0) temp[index++] = array[i];
        }
        
        array.assign(temp.begin(), temp.end());
    }
~~~



**2、一种原地解法，很巧妙，从后向前进行修正，类似于冒泡法，同时对一刷的时候进行改进**

运行时间：2ms  占用内存：480k

~~~cpp
    void reOrderArray(vector<int> &array) {
        
	int len = array.size();
	if (len <= 1) return;
	for (int i = 0; i <= len/2; ++i) {

		for (int j = len - 1; j > i; --j) {
			if ( (array[j]&1) == 1 && (array[j - 1]&1) == 0)  swap(array[j], array[j - 1]);//前偶后奇就进行交换，并且一次就可以固定最前面的奇数位置后最后面的偶数位置，所以最多只需要遍历一般数组的长度即可，所以i<=len/2即可
		}
	}
    }
~~~



**3、第三种解法，但是并不是原地解法，至少比第一种要好一点，只保存偶数数据**

运行时间：3ms 占用内存：484k  odd奇数：even偶数

~~~cpp
    void reOrderArray(vector<int> &array) {
        
	int len = array.size(),evenIndex = 0,oddIndex = 0;
	if (len <= 1) return;        
    vector<int> temp(len/2+1,0);
	for (int i = 0; i <len; ++i) {

		if ( (array[i]&1) == 1)  array[oddIndex++] = array[i];
        else{
            temp[evenIndex++] = array[i];//将偶数另外保存起来
        }

	}
        
    for(int j = 0;j < evenIndex; ++j){
        array[j + oddIndex] = temp[j];
    }
    }
~~~

<p id = "链表中倒数第k个结点"></p>

**No14、 链表中倒数第k个结点**  

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/529d3ae5a407492994ad2a246518148a?tpId=13&&tqId=11167&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一个链表，输出该链表中倒数第k个结点。 

**示例1**

**输入**

```
1,{1,2,3,4,5}
```

**返回值**

```
{5}
```

**1、比较简单的一种方法**

时间复杂度较高，没有二刷的那种方法好

~~~cpp
ListNode* FindKthToTail(ListNode* pListHead, unsigned int k) {
        int count=0;
        ListNode * node=pListHead;
        while(pListHead!=nullptr){
            count++;
            pListHead=pListHead->next;
        }
        count = count-k;
        if(count<0) return nullptr;
        while(count--)
            node=node->next;
        return node;
    }
~~~



**二刷：**

**1、快慢指针，不应该说是先后指针**

3 ms  376K

~~~cpp
    ListNode* FindKthToTail(ListNode* pListHead, unsigned int k) {
    ListNode * slowNode = pListHead;
        while(k != 0){//这里判断 k 一直走到 0 即可
            k--;
            if(pListHead != nullptr) pListHead = pListHead->next;//在其中判断是否出现k 大于链表总长度的情况，
            //比如 【1,2,3,4,5】 6这样的情况，如果出现这样的情况，返回即可
            else
                return nullptr;
        }
        
        while(pListHead != nullptr){//先走的不能为空
            slowNode = slowNode->next;
            pListHead = pListHead->next;
        }
        return slowNode;
    }

~~~

<p id = "反转链表"></p>

**No15、反转链表**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=13&&tqId=11168&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

 输入一个链表，反转链表后，输出新链表的表头。 

**示例1**

**输入**

```
{1,2,3}
```

**返回值**

```
{3,2,1}
```

很好的解答

https://blog.csdn.net/qq_42351880/article/details/88637387

**1、头插法 很经典的做法啊**

~~~cpp
struct ListNode {
	int val;
	struct ListNode* next;
	ListNode(int x) :
		val(x), next(NULL) {
	}
}; 

ListNode* ReverseList(ListNode* pHead) {

	struct ListNode* Head = NULL;
	struct ListNode* node = (ListNode*)malloc(sizeof(struct ListNode));

	while (pHead != nullptr) {
		node = pHead;
		pHead = pHead->next;

		node->next = Head;
		Head = node;
	}
	return Head;
}

void test02()
{
	ListNode* head = (ListNode*)malloc(sizeof(ListNode));
	head->val = 1;

	ListNode* node1 = (ListNode*)malloc(sizeof(ListNode));
	node1->val = 2;

	ListNode* node2 = (ListNode*)malloc(sizeof(ListNode));
	node2->val = 3;

	ListNode* node3 = (ListNode*)malloc(sizeof(ListNode));
	node3->val = 4;

	head->next = node1;
	node1->next = node2;
	node2->next = node3;
	node3->next = nullptr;

	auto node = ReverseList(head);
	while(node!=nullptr){
	
		cout << node->val << endl;
		node = node->next;
	}
	}
~~~



**2、第二种方法，借助三个结点进行不断更替**

~~~cpp
ListNode* ReverseList(ListNode* pHead) {

	struct ListNode* node0 = NULL;
	struct ListNode* node1 = (ListNode*)malloc(sizeof(struct ListNode));
	struct ListNode* node2 = (ListNode*)malloc(sizeof(struct ListNode));
	node1 = pHead;
	node2 = pHead->next;
	while (node1 != nullptr) {
		node1->next = node0;

		node0 = node1;
		node1 = node2;
		if (node2!= nullptr) {
			node2 = node2 -> next;
		}
	}
	return node0;
}
~~~



**二刷：**

**1、头插法来做，将元素开辟在栈上，这样会避免内存泄露**

运行时间：3ms  占用内存：364k

~~~cpp
ListNode* ReverseList(ListNode* pHead) {

	// 头插法
	if (pHead == nullptr || pHead->next == nullptr) return pHead;
	ListNode dummyNode = ListNode(0);
	ListNode* pre = &(dummyNode);
	pre->next = pHead;
	ListNode* cur = pHead->next;
	pHead->next = nullptr;
	//pre = cur;
	ListNode* temp = nullptr;
	while (cur != nullptr) {
		temp = cur;
		cur = cur->next;
		temp->next = pre->next;
		pre->next = temp;
	}
	return dummyNode.next;

}
~~~



**2、借助三个节点来进行迭代即可**

运行时间：3ms  占用内存：504k

~~~cpp
    ListNode* ReverseList(ListNode* pHead) {


	    if (pHead == nullptr || pHead->next == nullptr) return pHead;
	    ListNode * pre = nullptr,*cur = pHead,*after = pHead->next;
        while(cur != nullptr){//建议画个图看看就知道了
            cur->next = pre;
            pre = cur;
            cur = after;
            if(after != nullptr)
                after = after->next;
        }
        
        return pre;
    }
~~~

<p id = "合并两个有序链表"></p>

**No16、合并两个有序链表**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337?tpId=13&&tqId=11169&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

**示例1**

**输入**

```
{1,3,5},{2,4,6}
```

**返回值**

```
{1,2,3,4,5,6}
```

**1、常规做法，非递归花了好久才做出来**

~~~cpp
struct ListNode {
	int val;
	struct ListNode* next;
	ListNode(int x) :
		val(x), next(NULL) {
	}
}; 


ListNode* Merge(ListNode* pHead1, ListNode* pHead2)
    {
       if (pHead1 == nullptr) return pHead2;
	if (pHead2 == nullptr) return pHead1;

	ListNode* Head = (ListNode*)malloc(sizeof(struct ListNode));

	if (pHead1->val <= pHead2->val) {
		Head = pHead1;
		pHead1 = pHead1->next;
	}else {
		Head = pHead2;
		pHead2 = pHead2->next;
	}

	ListNode* node = (ListNode*)malloc(sizeof(struct ListNode));
	node = Head;

	while (pHead1 && pHead2) {
		if (pHead1->val <= pHead2->val) {
			node->next = pHead1;
			pHead1 = pHead1->next;
			node = node->next;
		}
		else {
			node->next = pHead2;
			pHead2 = pHead2->next;
			node = node->next;
		}

	}
	if (pHead1 != nullptr) {
		node->next = pHead1;
	}
	else {
		node->next = pHead2;
	}
	return Head;
    }
    
    
    void test02()
{
	ListNode* head = (ListNode*)malloc(sizeof(ListNode));
	head->val = 1;

	ListNode* node1 = (ListNode*)malloc(sizeof(ListNode));
	node1->val = 5;

	ListNode* node2 = (ListNode*)malloc(sizeof(ListNode));
	node2->val = 9;

	ListNode* node3 = (ListNode*)malloc(sizeof(ListNode));
	node3->val = 11;
	//node3->next = NULL;

	head->next = node1;
	node1->next = node2;
	node2->next = node3;
	node3->next = nullptr;


	ListNode* head2 = (ListNode*)malloc(sizeof(ListNode));
	head2->val = 3;

	ListNode* node12 = (ListNode*)malloc(sizeof(ListNode));
	node12->val = 3;

	ListNode* node22 = (ListNode*)malloc(sizeof(ListNode));
	node22->val = 4;

	ListNode* node32 = (ListNode*)malloc(sizeof(ListNode));
	node32->val = 9;
	//node3->next = NULL;

	head2->next = node12;
	node12->next = node22;
	node22->next = node32;
	node32->next = nullptr;


	auto node = Merge(head,head2);
	while(node!=nullptr){
	
		cout << node->val << endl;
		node = node->next;
	}
}
~~~



**2、递归版本**

~~~cpp
 ListNode* Merge(ListNode* pHead1, ListNode* pHead2)
    {
	if (pHead1 == nullptr) return pHead2;
	if (pHead2 == nullptr) return pHead1;


  
	if (pHead1->val <= pHead2->val) {
		pHead1->next = Merge(pHead1->next, pHead2);
		return pHead1;
	}
	else {
		pHead2->next = Merge(pHead1, pHead2->next);
		return pHead2;
	}
    }
~~~



**二刷：很容易了**

**1、迭代版本，依然还是迭代版本要快一点**

运行时间：2ms  占用内存：480k

~~~cpp
    ListNode* Merge(ListNode* pHead1, ListNode* pHead2)
    {
        if(pHead1 == nullptr) return pHead2;
        if(pHead2 == nullptr) return pHead1;
        ListNode *newHead = new ListNode(-1),*node = newHead;
        //newHead->next=node;
        while(pHead1 != nullptr && pHead2 != nullptr){
            
            if(pHead1->val > pHead2->val)  swap(pHead1,pHead2);
            node->next = pHead1;
            pHead1 = pHead1->next;
            node = node->next;
        }
        
        node->next = (pHead1 ? pHead1:pHead2);
        return newHead->next;
    }
~~~



**2、递归版本**

运行时间：3ms  占用内存：504k

~~~cpp
    void MergeCore(ListNode*newHead, ListNode*node1, ListNode*node2){
        if(node1 == nullptr || node2 == nullptr) {
            newHead->next = (node1?node1:node2);
            return ;
        }

        if(node1->val < node2->val){
            newHead->next = node1;
            node1 = node1->next;            
        }
        else{
            newHead->next = node2;
            node2 = node2->next;
            
        }
        newHead = newHead->next;
        MergeCore(newHead,node1,node2);
    }
    
    
    ListNode* Merge(ListNode* pHead1, ListNode* pHead2)
    {
        if(pHead1 == nullptr) return pHead2;
        if(pHead2 == nullptr) return pHead1;
        ListNode *newHead = new ListNode(-1),*node = newHead;
        MergeCore(node, pHead1, pHead2);
        return newHead->next;
    }
~~~

<p id = "树的子结构"></p>

**No17、树的子结构**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/6e196c44c7004d15b1610b9afca8bd88?tpId=13&&tqId=11170&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

**示例1**

**输入**

```
{8,8,#,9,#,2,#,5},{8,9,#,2}
```

**返回值**

```
true
```

**1、解析见[力扣-14 树 - medium - 面试题26](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)，讲得很好**

~~~cpp
    bool HasSubtreeCore(TreeNode* pRoot1, TreeNode* pRoot2){
        if(pRoot2==nullptr)  return true;
        if(pRoot1==nullptr) return false;
        if(pRoot1->val == pRoot2->val)
            return HasSubtreeCore(pRoot1->left,pRoot2->left) && HasSubtreeCore(pRoot1->right,pRoot2->right);
        else
            return false;
    }
    bool HasSubtree(TreeNode* pRoot1, TreeNode* pRoot2)
    {
        if(pRoot1==nullptr || pRoot2==nullptr) return false;
        return HasSubtree(pRoot1->left,pRoot2) ||
               HasSubtree(pRoot1->right,pRoot2) || 
                HasSubtreeCore(pRoot1,pRoot2);
            
     }
~~~



**二刷：**

**1、树的题目，大多都是递归来做**

运行时间：2ms  占用内存：484k

~~~cpp
bool HasSubtreeCore(TreeNode* pRoot1, TreeNode* pRoot2){
        
        if(pRoot2 == nullptr) return true;//p2为空 ，那么P1为什么都是相等的了
        if(pRoot1 == nullptr ) return false;//如果p2不为空，但是p1为空，那肯定是不对的
        if(pRoot1->val == pRoot2->val)//当前一样，再判断左右子树，这里必须是 与 的并列关系才行
            return HasSubtreeCore(pRoot1->left,pRoot2->left) && HasSubtreeCore(pRoot1->right,pRoot2->right);
        else{
            return false;
        }
        
    }
    bool HasSubtree(TreeNode* pRoot1, TreeNode* pRoot2)
    {

        if(pRoot1 == nullptr || pRoot2 == nullptr) return false;
        
        return HasSubtree(pRoot1->left, pRoot2) ||//有可能是我的左子树
               HasSubtree(pRoot1->right, pRoot2) || //或则是右子树
                HasSubtreeCore(pRoot1, pRoot2);//或者是当前节点就开始比较，注意这里是 或 的关系

    }
~~~

<p id = "二叉树的镜像"></p>

**No18、二叉树的镜像**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/564f4c26aa584921bc75623e48ca3011?tpId=13&&tqId=11171&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

操作给定的二叉树，将其变换为源二叉树的镜像。 

**输入描述:**
二叉树的镜像定义：源二叉树 

~~~
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11  9 7  5                
~~~

**1、借助队列来做，跟上面一题中的迭代版本很像**

~~~cpp
void Mirror(TreeNode* pRoot) {
	if (pRoot == nullptr) return;
	queue<TreeNode*> q;
	q.push(pRoot);
	while (!q.empty()) {
		TreeNode* node = q.front();
		q.pop();
		if (node)
		{
			q.push(node->left);
			q.push(node->right);
			swap(node->left, node->right);
		}
	}
}
~~~

**2、不使用swap函数的迭代版本**

~~~cpp
void Mirror(TreeNode* pRoot) {
	if (pRoot == nullptr) return;
	queue<TreeNode*> q;
	q.push(pRoot);
	while (!q.empty()) {
		TreeNode* node = q.front();
		q.pop();
		if (node)
		{
			q.push(node->left);
			q.push(node->right);
			//swap(node->left, node->right);
			TreeNode* temp = node->left;
			node->left = node->right;
			node->right = temp;
		}
	}
}
~~~

**3、递归版本**

~~~cpp
    void Mirror(TreeNode *pRoot) {
	if (pRoot == nullptr) return;
	TreeNode* temp = pRoot->left;
	pRoot->left = pRoot->right;
	pRoot->right = temp;
	Mirror(pRoot->right);
	Mirror(pRoot->left);
    }
~~~

**4、栈的迭代版本**

~~~cpp
void Mirror(TreeNode* pRoot) {
	if (pRoot == nullptr) return;
	stack<TreeNode*> s;
	s.push(pRoot);
	while (!s.empty()) {
		TreeNode* node = s.top();
		s.pop();
		if (node) {
			s.push(node->left);
			s.push(node->right);
			swap(node->left, node->right);
		}
	}
}
~~~



**二刷：**

**1、迭代版本，想多了**

运行时间：2ms  占用内存：376k

队列来做，有点类似于层次遍历的意思

~~~cpp
    void Mirror(TreeNode *pRoot) {//有点类似于二叉树的层次遍历
        if(pRoot == nullptr) return;
        queue<TreeNode*> q;
        TreeNode *node = nullptr;
        q.push(pRoot);
        while(!q.empty()){
                node = q.front();
                q.pop();
            if(node != nullptr)
            {   q.push(node->left);
                q.push(node->right);                
                swap(node->left,node->right);
            }
        }
    }
~~~



**2、递归版本，而更容易理解一些，也更好写**

运行时间：2ms  占用内存：504k

~~~cpp
    void Mirror(TreeNode *pRoot) {//有点类似于二叉树的层次遍历
        if(pRoot == nullptr) return;             
        swap(pRoot->left,pRoot->right);
        Mirror(pRoot->left);
        Mirror(pRoot->right);
    }
~~~

<p id = "顺时针打印矩阵"></p>

**No19、顺时针打印矩阵**



<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a?tpId=13&&tqId=11172&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10. 

**示例1**

**输入**

```
[[1,2],[3,4]]
```

**返回值**

```
[1,2,4,3]
```

**1、有点难，在力扣上写了好久**

主要就是分析清楚上下左右的情况

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：6.7 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
vector<int> spiralOrder(vector<vector<int>>& matrix) {
	if (matrix.size()==0) return vector<int>();
	if (matrix.size() == 1) return matrix[0];
	int row = matrix.size(), col = matrix[0].size();
	int left = 0, right = 0, top = 0, bottom = 0;
	vector<int> result;
	while (left + right < col && top + bottom < row) {
		
		for (int i = left; i < col - left - right + left; ++i) {
			//cout << matrix[top][i];
			result.push_back(matrix[top][i]);
		}

		top++;
		//cout << " top " <<top<<bottom<< endl;
		if (top + bottom == row) break;


		for (int i = top; i < row - top - bottom + top; ++i) {
			//cout << matrix[i][col - right - 1];
			result.push_back(matrix[i][col - right - 1]);
		}		
		right++;
		//cout << "right"<<left<<right<<endl;
		if (left + right == col) break;


		for (int i = col-right-1; i >= left ; --i) {
			//cout << matrix[row - bottom - 1][i];
			result.push_back(matrix[row - bottom - 1][i]);
		}
		bottom++;
		//cout << " bottom " << top << bottom << endl;
		if (top + bottom == row) break;
		

		for (int i = row-bottom-1; i >= top; --i) {
			//cout << matrix[i][left];
			result.push_back(matrix[i][left]);
		}
		left++;
		//cout << "left" << left << right << endl;
	}
	return result;
}
~~~



**2、新的写法，这种其实更好理解**

执行用时：24 ms, 在所有 C++ 提交中击败了56.85%的用户

内存消耗：10 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector <int> res;
        if(matrix.empty()) return res;
        int rl = 0, rh = matrix.size()-1; //记录待打印的矩阵上下边缘
        int cl = 0, ch = matrix[0].size()-1; //记录待打印的矩阵左右边缘
        while(1){
            for(int i=cl; i<=ch; i++) res.push_back(matrix[rl][i]);//从左往右
            if(++rl > rh) break; //若超出边界，退出
            for(int i=rl; i<=rh; i++) res.push_back(matrix[i][ch]);//从上往下
            if(--ch < cl) break;
            for(int i=ch; i>=cl; i--) res.push_back(matrix[rh][i]);//从右往左
            if(--rh < rl) break;
            for(int i=rh; i>=rl; i--) res.push_back(matrix[i][cl]);//从下往上
            if(++cl > ch) break;
        }
        return res;
    }
~~~



**3、改进一下第二种写法，快上不少**

执行用时：12 ms, 在所有 C++ 提交中击败了98.41%的用户

内存消耗：10.3 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
vector<int> spiralOrder(vector<vector<int>>& matrix) {
	vector <int> res;
	if (matrix.empty()) return res;
	int top = 0, bottom = matrix.size() - 1; //记录待打印的矩阵上下边缘
	int left = 0, right = matrix[0].size() - 1; //记录待打印的矩阵左右边缘
	while (1) {
		for (int i = left; i <= right; ++i) res.push_back(matrix[top][i]);//从左往右
		if (++top > bottom) break; //若超出边界，退出

		for (int i = top; i <= bottom; ++i) res.push_back(matrix[i][right]);//从上往下
		if (--right < left) break;

		for (int i = right; i >= left; --i) res.push_back(matrix[bottom][i]);//从右往左
		if (--bottom < top) break;

		for (int i = bottom; i >= top; --i) res.push_back(matrix[i][left]);//从下往上
		if (++left > right) break;
	}
	return res;
}
~~~



**二刷：**

**1、最快的做法，注意中间的判断条件不可少**

运行时间：3ms  占用内存：496k

~~~cpp
 vector<int> printMatrix(vector<vector<int> > matrix) {

if (matrix.size() == 0 || matrix[0].size() == 0) return vector<int>();
	int left = 0, right = matrix[0].size() - 1, top = 0, bottom = matrix.size() - 1;
	vector<int> result;
	while (left <= right && top <= bottom) {
		for (int i = left; i <= right; ++i)
		{
			//cout << matrix[top][i] << " ";
			result.push_back(matrix[top][i]);

		}
		if (++top > bottom) break;
		for (int i = top; i <= bottom; ++i)
		{
			//cout << matrix[i][right] << " ";
			result.push_back(matrix[i][right]);

		}
		if (--right < left) break;
		for (int i = right ; i >= left; --i) {
			//cout << matrix[bottom][i] << " ";
			result.push_back(matrix[bottom][i]);
		}
		if (--bottom < top) break;
		for (int i = bottom; i >= top; --i) {
			//cout << matrix[i][left] << " ";
			result.push_back(matrix[i][left]);
		}
		if (++left > right) break;
	}

	return result;
    }
~~~

<p id = "包含min函数的栈"></p>

**No20、包含min函数的栈**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/4c776177d2c04c2494f2555c9fcc1e49?tpId=13&&tqId=11173&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

**1、一次解决 以前做过**

~~~cpp
class Solution {
public:
    void push(int value) {
        if(st.size()==0&&minSt.size()==0) {
            st.push(value);
            minSt.push(value);
        }else{
            st.push(value);
            if(value<=minSt.top()){
                minSt.push(value);
            }
            else{
                minSt.push(minSt.top());
            }
            
        }
        //st.push(value); #这里应该删除
    }
    void pop() {
        st.pop();
        minSt.pop();
    }
    int top() {
        return st.top();
    }
    int min() {
        return minSt.top();
    }
    stack<int> minSt;
    stack<int> st;
};
~~~

>感谢微信好友“Pikachuts”指出笔误，现在改正，多谢。-2021.06.11

**二刷：**

**1、只一个栈来做，维持一个最小值，这种方法毫无疑问是更好一点的**

运行时间：2ms  占用内存：504k

注意函数重名问题

~~~cpp
class Solution {
    int minNum = INT_MAX;
    stack<int> st;
public:
    void push(int value) {
        minNum = std::min(value, minNum);//注意当前类中也有一个min函数，
        //所以我们需要明确此时的min函数是哪个函数
        st.push(minNum);
        st.push(value);
        
    }
    void pop() {
        st.pop();//pop掉当前值
        st.pop();//pop掉当前最小值
        int temp = st.top();
        st.pop();
        if(minNum == st.top()){
            st.push(temp);
        }else{
            minNum = st.top();
            st.pop();
            st.push(minNum);
            st.push(temp);
        }

       
    }
    int top() {
        return st.top();
    }
    int min() {
        return minNum;
    }
};
~~~

<p id = "栈的压入弹出序列"></p>

**No21、栈的压入弹出序列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106?tpId=13&&tqId=11174&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

**示例1**

**输入**

~~~
[1,2,3,4,5],[4,3,5,1,2]
~~~
**返回值**

~~~
false
~~~



**1、想岔了，用vector**

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {

       if(pushV.size() == 0) return false;
        vector<int> v;
        for(int i = 0,j = 0 ;i < pushV.size();){
            v.push_back(pushV[i++]);
            while(j < popV.size() && v.back() == popV[j]){
                v.pop_back();
                j++;
            }      
            }
            return v.empty();
    }
~~~



**2、借助栈**

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {

if (pushV.empty() || popV.empty() || pushV.size() != popV.size())
	return false;
	stack<int> s;
	int j = 0;
	for (int i = 0; i < pushV.size(); ++i) {
		s.push(pushV[i]);
		while (!s.empty() && s.top() == popV[j]) {
			s.pop();
			++j;
		}
	}
	if (s.empty())
		return true;
	return false;
    }
~~~



**二刷：**

**1、挺容易的，可以再看一下**

运行时间：3ms  占用内存：508k

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {
	int len = pushV.size();
	int pushIndex = 0, popIndex = 0;
	stack<int>st;
	while (pushIndex < len && popIndex < len) {
		if (pushV[pushIndex] != popV[popIndex]) {
			st.push(pushV[pushIndex++]);
		}
		else {
			popIndex++;
			pushIndex++;
			while (!st.empty() && popIndex<len && st.top() == popV[popIndex]) {
				st.pop();
				popIndex++;
			}
		}
	}

	while (popIndex < len && st.top() == popV[popIndex]) {
		st.pop();
		popIndex++;
	}
	return popIndex == len && st.empty();
    }
~~~



**2、精练一下代码**

运行时间：3ms  占用内存：380k

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {
	if(pushV.size() == 0 || popV.size() == 0 || pushV.size() != popV.size()) return false;
    int len = pushV.size();
	int popIndex = 0;
	stack<int>st;
    for(int i = 0; i < len; ++i){
        st.push(pushV[i]);
        while (popIndex < len && !st.empty() &&st.top() == popV[popIndex]) {
			st.pop();
			popIndex++;
		}        
    }
	return st.empty();
    }
~~~

<p id = "从上往下打印二叉树"></p>

**No22、从上往下打印二叉树**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/7fe2212963db4790b57431d9ed259701?tpId=13&&tqId=11175&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

从上往下打印出二叉树的每个节点，同层节点从左至右打印。 

**示例1**

**输入**

~~~
{5,4,#,3,#,2,#,1}
~~~
**返回值**

~~~
[5,4,3,2,1]
~~~



**1、迭代做法，借助队列，比较简单**

~~~cpp
    vector<int> PrintFromTopToBottom(TreeNode* root) {

    vector<int> result;
	if (root == nullptr) return result;
	queue<TreeNode*>  q;
	q.push(root);
	TreeNode* node;
	while (!q.empty()) {
		node = .front();
		result.push_back(node->val);
		if (node->left) q.push(node->left);
		if (node->right) q.push(node->right);
		q.pop();
	}
    return result;
    }
~~~



**二刷：**

**1、借助队列来做，简单**

运行时间：2ms  占用内存：528k

~~~cpp
    vector<int> PrintFromTopToBottom(TreeNode* root) {
        if(root == nullptr) return vector<int>();
        queue<TreeNode*>q;
        q.push(root);
        TreeNode *node = nullptr;
        vector<int> result;
        while(!q.empty()){
             
            node = q.front();
            q.pop();
            result.push_back(node->val);
            if(node->left) q.push(node->left);
            if(node->right) q.push(node->right);
        }
        
        return result;
    }
~~~

<p id = "二叉搜索树的后序遍历序列"></p>

**No23、二叉搜索树的后序遍历序列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/a861533d45854474ac791d90e447bafd?tpId=13&&tqId=11176&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

从上往下打印出二叉树的每个节点，同层节点从左至右打印。

**示例1**

**输入**

~~~
{5,4,#,3,#,2,#,1}
~~~
**返回值**

~~~
[5,4,3,2,1]
~~~



**1、递归写法，树主要的做法就是递归**

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



**二刷：依然没有思路，值得再看一遍**

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

<p id = "二叉树中和为某一值的路径"></p>

**No24、二叉树中和为某一值的路径**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/b736e784e3e34731af99065031301bca?tpId=13&&tqId=11177&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。 

**示例1**

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

**1、带有回溯性质的解法**

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



**二刷：**

**二刷也不太会，哭了，仔细想想其实也不太难，哎还是太菜了**

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

<p id = "复杂链表的复制"></p>

**No25、复杂链表的复制**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba?tpId=13&&tqId=11178&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**
输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），请对此链表进行深拷贝，并返回拷贝后的头结点。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空） 

**示例1**

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



**1、第一种方法，在节点后复制一个节点，然后再分离开这方法超级棒，太麻烦了，不建议用这种方法**

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



**自己在力扣上复现第一种做法，有很多要注意的地方**

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



**2、哈希表的做法，其实更简单一下啊**

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



**在力扣上复现了一遍**

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



**3、哈希表的递归写法**

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



**力扣上复现做法**

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



**二刷：**

**1、哈希表递归写法**

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



**2、哈希表迭代写法**

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

<p id = "二叉搜索树与双向链表"></p>

**No26、二叉搜索树与双向链表**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/947f6eb80d944a84850b0538bf0ec3a5?tpId=13&&tqId=11179&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。 



**0、最笨的一种写法，这也是最容易理解的一种方法了**

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



**0-1借助栈和数组类进行数据保存，最后修改指针指向**

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



**1、借助栈进行节点保存，很厉害的一种写法**

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



**2、复杂一点的递归做法**

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



**3、简单递归做法，精简版**

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



**二刷：**

**1、借助stack和vector**

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



**2、依然是栈，不过节约了不少空间，记这种做法，很棒**

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

<p id = "字符串的排列"></p>

**No27、字符串的排列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/fe6b651b66ae47d7acce78ffdd9a96c7?tpId=13&&tqId=11180&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

**输入描述:**

```
输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
```

**示例1**

**输入**

~~~
"ab"
~~~
**返回值**

~~~
["ab","ba"]
~~~



**1、一个很奇特的函数next_permutation** 

返回全排列，使用方法如下所示，必须要进行排序才可以：

执行用时：52 ms, 在所有 C++ 提交中击败了91.01%的用户

内存消耗：17.9 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
    vector<string> permutation(string s) {

    if(s.size()==0) return vector<string>();
        
	vector<string> result;
	sort(s.begin(), s.end());
	do {
		result.push_back(s);
	} while (next_permutation(s.begin(),s.end()));

	return  result;
    }
~~~



~~~cpp
#include <stdio.h>
#include <algorithm>
using namespace std;
int main(){
    int n;
    while(scanf("%d",&n)&&n){
        int a[1000];
        for(int i=0;i<n;i++){
            scanf("%d",&a[i]);
        }
        sort(a,a+n);
        do{
            for(int i=0;i<n;i++)
                printf("%d ",a[i]);
            printf("\n");
        }while(next_permutation(a,a+n));
    }
    return 0;
}
~~~

例如输入

```
3
1 0 2
```

如果有sort()

输出为

```
0 1 2
0 2 1
1 0 2
1 2 0
2 0 1
2 1 0
```

若无

则输出为

```
1 0 2
1 2 0
2 0 1
2 1 0
```

发现函数next_permutation()是按照字典序产生排列的，并且是从数组中当前的字典序开始依次增大直至到最大字典序



**2、DFS+回溯算法 还没有完全理解**

~~~cpp
class Solution {
public:
    vector<string>  result;
    void PermutationCore(string &s,int begin,int end){
        if(begin == end){
            result.push_back(s);
            return ;
        }
        unordered_map<int,int> visited;
        for(int i = begin; i<= end; ++i){
            if(visited[s[i]] == 1) continue;
            swap(s[i],s[begin]);
            PermutationCore(s,begin+1,end);
            swap(s[i],s[begin]);
            visited[s[i]] =1;

        }

    }
    
    vector<string> Permutation(string str) {
    if(str.size()==0) return vector<string>();
    
    PermutationCore(str,0,str.size()-1);
    sort(result.begin(),result.end());
	return  result;
    }
};
~~~



**二刷：**

**1、好题，不开玩笑，最后还要排序，要求是按照字典序输出的**

~~~cpp
class Solution {
public:
    vector<string>  result;
    void PermutationCore(string &s,int begin,int end){
        if(begin == end){
            result.push_back(s);
            return ;
        }
        unordered_map<int,int> visited;
        for(int i = begin; i<= end; ++i){
            if(visited[s[i]] == 1) continue;
            swap(s[i],s[begin]);
            PermutationCore(s,begin+1,end);
            swap(s[i],s[begin]);
            visited[s[i]] =1;
 
        }
 
    }
     
    vector<string> Permutation(string str) {
    if(str.size()==0) return vector<string>();
     
    PermutationCore(str,0,str.size()-1);
    sort(result.begin(),result.end());
    return  result;
    }
};
~~~

<p id = "数组中出现次数超过一半的数字"></p>

**No28、数组中出现次数超过一半的数字**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/e8a1b01a2df14cb2b228b30ee6a92163?tpId=13&&tqId=11181&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,2,5,4}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。

**示例1**



**输入**

~~~
[1,2,3,2,2,2,5,4,2]
~~~
**返回值**

~~~
2
~~~



**1、常规做法，哈希表**

~~~cpp
int MoreThanHalfNum_Solution(vector<int> numbers) {
     
    unordered_map<int, int>unmp;
    int len = numbers.size();
    for (int i = 0; i < len; ++i) {
        unmp[numbers[i]]++;
        if (unmp[numbers[i]] > len / 2) return numbers[i];
    }
    return 0;
    }
~~~



**二刷：**

**1、摩尔投票法的变种，与力扣上[多数元素](https://leetcode-cn.com/problems/majority-element/)是差不多的做法，很高效的一种做法**

运行时间：3ms  占用内存：464k

~~~cpp
    int MoreThanHalfNum_Solution(vector<int> numbers) {
	//摩尔投票法，成立前提就是有出现超过一半的元素，所以最后我们需要判断找到的元素是否出现超过一半了
	int cnt = 0, num = 0;
	for (int i = 0; i < numbers.size(); ++i) {
		if (cnt == 0) {
			num = numbers[i];
			cnt = 1;
		}
		else {
			num == numbers[i] ? cnt++ : cnt--;
		}

	}
	cnt = count(numbers.begin(), numbers.end(), num);
	return cnt > numbers.size() / 2 ? num : 0;
    }
~~~

<p id = "最小的K个数"></p>
**29、最小的K个数**

 <font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/6a296eb82cf844ca8539b57c23e6e9bf?tpId=13&&tqId=11182&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。 

**示例1**
**输入**

~~~
[4,5,1,6,2,7,3,8],4
~~~
**返回值**

~~~
[1,2,3,4]

~~~



**1、优先队列来做，最小，用大顶堆来做**

priority_queue<int,vector\<int>,less\<int>>

~~~cpp
    vector<int> GetLeastNumbers_Solution(vector<int> input, int k) {
    if(k > input.size()) return vector<int>();
    priority_queue<int, vector<int>, greater<int>> pq;
	for (auto a : input)
		pq.push(a);
	vector<int> result;
	while (k--) {
		result.push_back(pq.top());
		pq.pop();
	}
	return result;
    }
~~~

<p id = "连续子数组的最大和"></p>

**No30、连续子数组的最大和**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/459bd355da1549fa8a49e350bf3df484?tpId=13&&tqId=11183&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

 HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。今天测试组开完会后,他又发话了:在古老的一维模式识别中,常常需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1) 

**示例1**

**输入**

~~~
[1,-2,3,10,-4,7,2,-5]
~~~
**返回值**

~~~
18
~~~
**说明**
输入的数组为{1,-2,3,10,—4,7,2,一5}，和最大的子数组为{3,10,一4,7,2}，因此输出为该子数组的和 18。 



**1、直接在原数组上改，不借用任何内存**

~~~cpp
int FindGreatestSumOfSubArray(vector<int> array) {
	for (int i = 1; i < array.size(); ++i) {
	    array[i] = max(0,array[i-1]) + array[i];
	}
	return *max_element(array.begin(),array.end());
}
~~~



**2、两个数字保存中间结果 或者一个数字**

~~~cpp
int FindGreatestSumOfSubArray(vector<int> array) {
 
 
    int len = array.size();
    int maxNum = array[0],result=maxNum;
    for (int i = 1; i < len; ++i) {
        if (maxNum + array[i] > array[i])
            maxNum += array[i];
        else
            maxNum = array[i];
        result = max(maxNum, result);
    }
    return result;
}
~~~



~~~cpp
int FindGreatestSumOfSubArray(vector<int> array) {


	int maxNum = array[0];
	for (int i = 1; i <  array.size(); ++i) {
	    array[i] = max(0,array[i-1]) + array[i];
		maxNum = max(maxNum, array[i]);
	}
	return maxNum;
}
~~~



**二刷：**

**1、常规DP做法，其实这题是连续上升子序列的**

~~~cpp
    int FindGreatestSumOfSubArray(vector<int> array) {
    
	if (array.size() == 0) return 0;
	int maxNum = array[0];
	vector<int> dp(array.size(), 0);
	dp[0] = array[0];
	for (int i = 1; i < array.size(); ++i) {
		dp[i] = max(array[i], array[i] + dp[i - 1]);
		maxNum = max(maxNum, dp[i]);
	}
	return maxNum;
    }
~~~



**2、直接在原数组上进行修改，可以节约一点空间**

运行时间：3ms   占用内存：376k

~~~cpp
    int FindGreatestSumOfSubArray(vector<int> array) {
    
	    if (array.size() == 0) return 0;
        int maxNum = array[0];
        for (int i = 1; i < array.size(); ++i) {
            array[i] = max(array[i], array[i] + array[i - 1]);
            maxNum = max(maxNum, array[i]);
        }
        return maxNum;
    }
~~~

<p id = "整数中1出现的次数"></p>


**No31、整数中1出现的次数（ 从1 到 n 中1出现的次数 ）**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/bd7f978302044eee894445e244c7eee6?tpId=13&&tqId=11184&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

求出1-13的整数中1出现的次数,并算出100-1300的整数中1出现的次数？

为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。

ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。 

**输入**

```
13
```
**返回值**

```
6
```



**1、经典方法吗，真的想不到这种方法，我服了**

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：5.8 MB, 在所有 C++ 提交中击败了100.00%的用户

分两种情况，例如：1234和2234，high为最高位，pow为最高位权重
在每种情况下都将数分段处理，即0-999，1000-1999，...，剩余部分

 case1：最高位是1，则最高位的1的次数为last+1（1000-1234）
               每阶段即0-999的1的个数1*countDigitOne(pow-1)
               剩余部分1的个数为countDigitOne(last)--最高位已单独计算了

 case2：最高位不是1，则最高位的1的次数为pow（1000-1999）
               每阶段除去最高位即0-999，1000-1999中1的次数为high*countDigitOne(pow-1)
               剩余部分1的个数为countDigitOne(last)
              发现两种情况仅差别在最高位的1的个数，因此单独计算最高位的1（cnt），合并处理两种情况

~~~cpp
 int NumberOf1Between1AndN_Solution(int n)
    {
    if (n <= 0) return 0;
	if (n < 10) return 1;
	int high = n, pow = 1;// // 取出最高位 以及 最高位的权重
	while (high >= 10) {
		high /= 10;
		pow *= 10;
	}
	int last = n - high * pow;// 除最高位的数字
	int cnt = high == 1 ? last + 1 : pow;// high是否为1，最高位的1个数不同
	return cnt + high * NumberOf1Between1AndN_Solution(pow - 1) + NumberOf1Between1AndN_Solution(last);

    }
~~~



**二刷：**

**超级好的方法**

运行时间：2ms  占用内存：376k

~~~cpp
    int NumberOf1Between1AndN_Solution(int n)
    {
        if(n <= 0) return 0;
        if(n < 10) return 1;
        int high = n,pow = 1;//首选求的最高位high和权重pow 10 还是100 还是 100 呢
        while(high>=10){
            high = high /10;
            pow = pow * 10;
        }
        int last = n - high*pow;
        int cut = (high == 1? last + 1:pow );
        return cut + high*NumberOf1Between1AndN_Solution(pow - 1) + NumberOf1Between1AndN_Solution(last);
    }
~~~



**三刷：**

~~~cpp
    int NumberOf1Between1AndN_Solution(int n)
    {
        if(n <= 0) return 0;
        if(n< 10 ) return 1;
        if(n == 10) return 2;
        int pow = 1, high = n,last = 0;
        while(high >= 10){
            high = high/10;
            pow *=10;
        }
        last = n - high*pow;// 除去最高位的数字，还剩下多少 0-999 1000- 1999 2000-2999 3000 3345
        int cut = high == 1 ? last+1: pow;
        
        return cut + high*NumberOf1Between1AndN_Solution(pow-1) + NumberOf1Between1AndN_Solution(last);

    }
~~~

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[力扣](https://leetcode-cn.com/problems/number-of-digit-one/submissions/)</font>上有类似的题目

<p id = "把数组排成最小的数"></p>

**No32、把数组排成最小的数**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/8fecd3f8ba334add803bf2a06af1b993?tpId=13&&tqId=11185&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

**示例1**

**输入**

```
[3,32,321]
```

**返回值**

```
"321323"
```

**1、很精妙绝伦的一种排序方法**

执行用时：12 ms, 在所有 C++ 提交中击败了92.42%的用户

内存消耗：11.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
string minNumber(vector<int>& nums) {

    vector<string> temp;
    for (auto num : nums) {
        temp.push_back(to_string(num));
    }

    sort(temp.begin(), temp.end(), [](const string& a, const string& b) { return a + b < b + a; });
    string result;
    for (auto& t : temp) {
        result += t;
    }
    return result;
}
~~~



**2、第二种做法，与第一种又有点不一样，但是速度比第一种要慢不少**

sort函数要定义为静态或者全局函数

sort中的比较函数compare要声明为静态成员函数或全局函数，不能作为普通成员函数，否则会报错。 因为：非静态成员函数是依赖于具体对象的，而std::sort这类函数是全局的，因此无法再sort中调用非静态成员函数。静态成员函数或者全局函数是不依赖于具体对象的, 可以独立访问，无须创建任何对象实例就可以访问。同时静态成员函数不可以调用类的非静态成员。

执行用时：28 ms, 在所有 C++ 提交中击败了22.65%的用户

内存消耗：11.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp

/*对vector容器内的数据进行排序，按照 将a和b转为string后
 若 a＋b<b+a  a排在在前 的规则排序,
 如 2 21 因为 212 < 221 所以 排序后为 21 2 
  to_string() 可以将int 转化为string
*/ class Solution {
 public:
     static bool cmp(int a,int b){
         string A=""，B="";
         A+=to_string(a);
         A+=to_string(b);
         B+=to_string(b);
         B+=to_string(a);      
         return A<B;
     }
     string PrintMinNumber(vector<int> numbers) {
         string  answer="";
         sort(numbers.begin(),numbers.end(),cmp);
         for(int i=0;i<numbers.size();i++){
             answer+=to_string(numbers[i]);
         }
         return answer;
     }
 };
~~~



**二刷：**

**1、超强比较方法**

运行时间：2ms 占用内存：492k

~~~cpp
    string PrintMinNumber(vector<int> numbers) {
    
	vector<string> temp;
	for (auto a : numbers) {
		temp.push_back(std::move(to_string(a)));
	}

	sort(temp.begin(), temp.end(), [](const string& a, const string& b) {return a + b < b + a; });
	string result;
	for (auto& s : temp) {
		result += std::move(s);
	}

	return result;
    }
~~~

<p id="丑数"></p>


**No33、第N个丑数**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/6aa9e04fc3794f68acf8778237ba065b?tpId=13&&tqId=11186&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

**示例1**

**输入**

```
[3,32,321]
```
**返回值**

```
"321323"
```



**1、三指针法  很经典**

1-6之间都是丑数 1 2 3 4 5 6 直接返回即可

维护三个index，采用三index齐头并进的做法。

~~~cpp
int GetUglyNumber_Solution(int index) {
	if(index < 7) return index;
	vector<int> result(index, 0);
	result[0] = 1;
	int indexTwo = 0, indexThree = 0,indexFive = 0;
	for (int i = 1; i < index; ++i) {
		int minNum = min(min(result[indexTwo] * 2, result[indexThree] * 3), result[indexFive] * 5);
		if (minNum == result[indexTwo] * 2) indexTwo++;
		if (minNum == result[indexThree] * 3) indexThree++;
		if (minNum == result[indexFive] * 5) indexFive++;
		result[i] = minNum;
	}
	return result[index - 1];

}
~~~

<p id = "第一个只出现一次的字符"></p>

**No34、第一个只出现一次的字符**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/1c82e8cf713b4bbeb2a5b31cf5b0417c?tpId=13&&tqId=11187&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数） 

**示例1**

**输入**

~~~
"google"
~~~
**返回值**

~~~
4
~~~



**1、挺简单的，想多了**

~~~cpp
    int FirstNotRepeatingChar(string str) {	
vector < int > result(58,0);
	for (int i = 0; i < str.size();++i) {
		result[str[i] - 'A'] += 1;
	}

	for (int i = 0; i < str.size(); ++i) {
		if(result[str[i] - 'A']==1)return i;
	}
	return -1;
    }
~~~



**2、用unordered_map也行**

~~~cpp
    int FirstNotRepeatingChar(string str) {
	unordered_map<char, int> mp;
	for (int i = 0; i < str.size();++i) {
		mp[str[i]] += 1;

	}

	for (int i = 0; i < str.size(); ++i) {
		if(mp[str[i]]==1)return i;
	}
	return -1;
    }
~~~



**二刷：**

**1、unordered_map来做，其实用vector也可以**

~~~cpp
    int FirstNotRepeatingChar(string str) {
        
        unordered_map<char,int> unmp;// char index
        
        for( int i = 0;i < str.size(); ++i)
            unmp[str[i]]++;
        
        for(int i = 0;i < str.size(); ++i)
            if(unmp[str[i]] == 1) return i;
        
        return -1;
        
    }
~~~

<p id = "数组中的逆排序"></p>

**No35、数组中的逆排序**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/96bd6684e04a44eb80e6a68efc0ec6c5?tpId=13&&tqId=11188&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

**输入描述**

题目保证输入的数组中没有的相同的数字数据范围：	对于%50的数据,size<=10^4	对于%75的数据,size<=10^5	对于%100的数据,size<=2*10^5

**示例1**

**输入**

```
1,2,3,4,5,6,7,0
```

**输出**

```
7
```



**1、只通过50%的笨方法**

~~~cpp
    int InversePairs(vector<int> data) {
	if (data.size() <= 1) return 0;
	int len = data.size();
	vector<int> dp(len, 0);
	for (int i = len - 2; i >= 0; --i) {

		for (int j = i + 1; j < len; ++j) {
			if (data[i] > data[j]) { 
				//dp[i] = max(dp[i], dp[j] + 1); 
				dp[i]++;
			}

		}
	}

	return  accumulate(dp.begin(), dp.end(), 0) % 1000000007;
        
    }
~~~



**2、牛客上的一种做法，很厉害**

https://www.nowcoder.com/profile/872855282/codeBookDetail?submissionId=78340272

~~~cpp
int InversePairs(vector<int> data) {
	if (data.size() == 0)
		return 0;
	vector<int> copy(data);    // 辅助数组，每次递归后有序
	return InversePairsCore(data, copy, 0, data.size() - 1);
}

int InversePairsCore(vector<int>& data, vector<int>& copy, int begin, int end) {
	if (begin == end)
		return 0;
	int mid = begin + (end - begin) /2;
	int left = InversePairsCore(copy, data, begin, mid);//这里的一步很绝啊，减少了交换的这一步
	int right = InversePairsCore(copy, data, mid + 1, end);

	int end1 = mid;     // 比较从尾端开始
	int end2 = end;    // 比较从尾端开始
	int index_copy = end;       // 比较结果存入辅助数组尾端
	long res = 0;

	// 归并排序：相当于两个有序数组合成一个有序表（从尾端开始是为了计数）
	while (begin<= end1 && mid + 1<= end2) {
		if (data[end1] > data[end2]) {
			copy[index_copy--] = data[end1--];
			res += end2 - mid;
			res %= 1000000007;
		}
		else
			copy[index_copy--] = data[end2--];
	}

	while (begin<= end1)
		copy[index_copy--] = data[end1--];
	while (mid + 1<= end2)
		copy[index_copy--] = data[end2--];

	return (left + right + res) % 1000000007;
}


~~~

InversePairsCore(copy, data, begin, mid)中 copy和data互换位置好评。。。这样就减少了赋值的那一步了。。。。。



**二刷：**

**1、很棒的一道题目，建议多刷**

~~~cpp
int InversePairsCore(vector<int>& data, vector<int>& copy, int begin, int end) {
	if (begin == end)
		return 0;
	int mid = begin + (end - begin) / 2;
	int low1 = begin, high1 = mid, low2 = mid + 1, high2 = end;
	int left = InversePairsCore(copy, data, low1, high1);//这里的一步很绝啊，减少了交换的这一步
	int right = InversePairsCore(copy, data, low2, high2);

	long res = 0;
	int copyIndex = low1;
	// 归并排序：相当于两个有序数组合成一个有序表
	while (low1 <= high1 && low2 <= high2) {
		if (data[low1] > data[low2]) {
			copy[copyIndex++] = data[low1++];
			res += high2 - low2 + 1;// data[low1] > data[low2]，那么这一次，从a[i]开始到a[mid]必定都是大于这个a[j]的，因为此时分治的两边已经是各自有序了
			res %= 1000000007;
		}
		else
			copy[copyIndex++] = data[low2++];
	}

	while (low1 <= high1)
		copy[copyIndex++] = data[low1++];
	while (low2 <= high2)
		copy[copyIndex++] = data[low2++];

	return (left + right + res) % 1000000007;
}


int InversePairs(vector<int> data) {
	if (data.size() == 0)
		return 0;
	vector<int> copy(data);    // 辅助数组，每次递归后有序
	return InversePairsCore(data, copy, 0, data.size() - 1);
}
~~~



**2、归并排序，归并成从小到大的序列，这种方法更好理解一些**

运行时间：78ms  占用内存：5788k

~~~cpp
int InversePairsCore(vector<int>& data, vector<int>& copy, int begin, int end) {
	if (begin == end)
		return 0;
	int mid = begin + (end - begin) / 2;
	int low1 = begin, high1 = mid, low2 = mid + 1, high2 = end;
	int left = InversePairsCore(copy, data, low1, high1);//这里的一步很绝啊，减少了数据交换的这一步
	int right = InversePairsCore(copy, data, low2, high2);

	long res = 0;
	int copyIndex = low1;
	// 归并排序：相当于两个有序数组合成一个有序表
	//下面就开始两两进行比较，若前面的数大于后面的数，就构成逆序对
	while (low1 <= high1 && low2 <= high2) {
		if (data[low1] < data[low2]) {
			
			copy[copyIndex++] = data[low1++];
		}
		else//data[low1] >= data[low2]
		{
			copy[copyIndex++] = data[low2++];
			res += high1 - low1 + 1;
			res %= 1000000007;
		}
			
	}

	while (low1 <= high1)
		copy[copyIndex++] = data[low1++];
	while (low2 <= high2)
		copy[copyIndex++] = data[low2++];


	return (left + right + res) % 1000000007;
}


int InversePairs(vector<int> data) {
	if (data.size() == 0)
		return 0;
	vector<int> copy(data);    // 辅助数组，每次递归后有序
	int res = InversePairsCore(data, copy, 0, data.size() - 1);
	
	//for (int a : data) {
	//	cout << a << " ";
	//}
	//cout << endl;

	//for (int a : copy) {
	//	cout << a << " ";
	//}
	//cout << endl;
	
	return res;

}
~~~



**力扣上的剑指offer：**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[剑指 Offer 51. 数组中的逆序对](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)</font>

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

**示例 1:**

```
输入: [7,5,6,4]
输出: 5
```



**限制：**

```
0 <= 数组长度 <= 50000
```

执行用时：244 ms, 在所有 C++ 提交中击败了97.32%的用户

内存消耗：44.4 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
 int reversePairsCore(vector<int>&nums, vector<int>&copy, int begin, int end){
        if(begin >= end) return 0;//终止条件
        int mid = begin + (end - begin)/2;
        int low1 = begin, high1 = mid, low2 = mid + 1,high2 = end;
        int leftRes = reversePairsCore(copy, nums, low1, high1);
        int rightRes = reversePairsCore(copy, nums, low2, high2);

        int copyIndex = low1,res = 0;
        while(low1 <= high1 && low2 <= high2){
            if(nums[low1] <= nums[low2])//这里需要保持绝对的小
            {
                copy[copyIndex++] = nums[low1++];
            }else{
                res += high1 - low1 + 1;//说明 [low1,high1]此时都是大于 nums[low2]的
                //这里千万注意要 +1 ，因为high1 - low1 就少一个 比如 3-0 = 4，但其实是4个数
                copy[copyIndex++] = nums[low2++];
            }

        }
        while(low1 <= high1)
            copy[copyIndex++] = nums[low1++];

        while(low2 <= high2)
            copy[copyIndex++] = nums[low2++];

        return res + leftRes + rightRes;

    }



    int reversePairs(vector<int>& nums) {
        if( nums.size() <= 1) return 0;
        vector<int> copy(nums);
        return reversePairsCore(nums,copy,0,nums.size()-1);

    }
~~~

 归并类题目：

力扣第315/327/493道 

<p id = "返回两个链表中的第一个公共节点"></p>

**No36、返回两个链表中的第一个公共节点**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46?tpId=13&&tqId=11189&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入两个链表，找出它们的第一个公共结点。（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）



**1、暴力遍历法**

~~~cpp
ListNode* FindFirstCommonNode(ListNode* pHead1, ListNode* pHead2) {
	if (pHead1 == NULL || pHead2 == NULL) return NULL;
	ListNode* node = (ListNode*)malloc(sizeof(ListNode));	
	while (pHead1 != NULL) {

		node = pHead2;
		while (node != NULL) {
			//cout << "node " << node->val << " phead1 " << pHead1->val << endl;
			if (node == pHead1) return node;
			else
				node = node->next;
		}
		//cout << endl;
		pHead1 = pHead1->next;

	}
	return NULL;
}
~~~



**2、大神写法  太厉害了，真的佩服**

朋友们，请一定要珍惜身边的那个 ta 啊！你们之所以相遇，正是因为你走了 ta 走过的路，而 ta 也刚好走了你走过的路。这是何等的缘分！

而当你们携手继续走下去时，你会慢慢变成 ta 的样子，ta 也会慢慢变成你的样子。



a.长度相同的：1. 有公共结点的，第一次就遍历到；2. 没有公共结点的，走到尾部NULL相遇，返回NULL；
b.长度不同的：1. 有公共结点的，第一遍差值就出来了，第二遍就会一起到公共结点；2. 没有公共结点的，第二次遍历一起到结尾NULL。  

~~~cpp
//定义两个指针, 第一轮让两个到达末尾的节点指向另一个链表的头部, 最后如果相遇则为交点(在第一轮移动中恰好抹除了长度差)
        两个指针等于移动了相同的距离, 有交点就返回, 无交点就是各走了两条指针的长度
ListNode* FindFirstCommonNode(ListNode* pHead1, ListNode* pHead2) {
	if (pHead1 == NULL || pHead2 == NULL) return NULL;
	ListNode* p1 = (ListNode*)malloc(sizeof(ListNode));
	ListNode* p2 = (ListNode*)malloc(sizeof(ListNode));
	p1 = pHead1;
	p2 = pHead2;
	while (p1 != p2) {
		p1 = (p1 == NULL ? pHead2 : p1->next);
		p2 = (p2 == NULL ? pHead1 : p2->next);
	}
	return p1;
}

~~~



**二刷：**

1、有个地方要注意

~~~cpp
ListNode* FindFirstCommonNode( ListNode* pHead1, ListNode* pHead2) {
    if(pHead1 == nullptr || pHead2 == nullptr) return nullptr;
    ListNode*p1 = pHead1,*p2 = pHead2;
    while(p1 != p2){
        p1 = (p1 == nullptr?pHead2:p1->next);//这里需要是 p == null 来进行判断，不能是 p->next == nullptr 来判断，因为有可能是最后一个节点是公共节点
        p2 = (p2 == nullptr?pHead1:p2->next);
    }

    return p1;
}
~~~

<p id = "统计一个数字在排序数组中出现的次数"></p>


**No37、 统计一个数字在排序数组中出现的次数**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/70610bf967994b22bb1c26f9ae901fa2?tpId=13&&tqId=11190&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

统计一个数字在升序数组中出现的次数。

**示例1**

**输入**

```
[1,2,3,3,3,3,4,5],3
```
**返回值**

```
4
```



**1、STL中取巧的一种写法，直接调equal_range() 方法**

~~~cpp
int GetNumberOfK(vector<int> data ,int k) {
    auto pos = equal_range(data.begin(),data.end(),k);
    return pos.second - pos.first;
    }
~~~



**2、二分法，找到第一次出现的位置和最后一次出现的位置，还是记这种二分法模板吧**

low<=high  low = mid+1,high = mid-1;

运行时间：2ms  占用内存：504k

~~~cpp
int GetNumberOfK(vector<int> data, int k) {

	int low = 0, high = data.size() - 1;
	if (high == -1) return 0;//data为空


	while (low  <= high) {
		int mid = low + (high - low)/2;
		if (data[mid] > k) high = mid -1 ;
		else if (data[mid] < k) low = mid + 1;
		else {//已经找到
				int count = 0;
            count++;
			int index = mid-1;
			while (index >= 0 && data[index] == k) {
				count++;
				index--;
			}
			index = mid + 1;
			while (index <=data.size()-1&& data[index] == k) {
				count++;
				index++;
			}
			return count;
		}
	}
	return 0;//没有找到，直接返回 0 吧
}
~~~

<p id = "二叉树的深度"></p>


**No38、二叉树的深度**

 <font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/435fb86331474282a3499955f0a41e8b?tpId=13&&tqId=11191&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

**示例1**

**输入**

```
{1,2,3,4,5,#,6,#,#,7}
```
**返回值**

```
4
```



**1、BFS，迭代版本**

~~~cpp
int TreeDepth(TreeNode* pRoot)
{
	if (pRoot == nullptr) return 0;
	queue<pair<TreeNode*, int>> q;
	q.push(make_pair(pRoot, 1));
	int maxDept = 1;
	while (!q.empty()) {
		TreeNode* curNode = q.front().first;
		int curDepth = q.front().second;
		q.pop();
		if (curNode) {
			maxDept = max(maxDept, curDepth);
			q.push({ curNode->left,curDepth + 1 });
			q.push({ curNode->right,curDepth + 1 });
		}
	}
	return maxDept;
}
~~~



**2、递归法**

~~~cpp
int TreeDepth(TreeNode* pRoot)
{
	if (pRoot == nullptr) return 0;
	int leftDept = TreeDepth(pRoot->left) + 1, rightDept = TreeDepth(pRoot->right) + 1;
	return max(leftDept, rightDept;
}
~~~



**二刷：**

**1、很简单的递归方法**

运行时间：2ms 占用内存：504k

~~~cpp
int TreeDepth(TreeNode* pRoot)
{    
    if(pRoot == nullptr) return 0;
    int leftDepth = TreeDepth(pRoot->left);
    int rightDepth = TreeDepth(pRoot->right);
    return 1 + max(leftDepth,rightDepth);
}
~~~

<p id = "平衡二叉树"></p>


**No39、平衡二叉树**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/8b3b95850edb4115918ecebdf1b4d222?tpId=13&&tqId=11192&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一棵二叉树，判断该二叉树是否是平衡二叉树。

在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树

**输入**

~~~
{1,2,3,4,5,6,7}
~~~
**返回值**

~~~
true
~~~

**1、暴力法，笨方法**

最直接的做法，遍历每个结点，借助一个获取树深度的递归函数，根据该结点的左右子树高度差判断是否平衡，然后递归地对左右子树进行判断。

~~~cpp
int maxDepth(TreeNode* node) {

	if (node == nullptr)  return 0;
	return 1 + max(maxDepth(node->left), maxDepth(node->right));
}

bool IsBalanced_Solution(TreeNode* pRoot) {
	if (pRoot == nullptr) return true;//这里是返回true 而不再是false
	return abs(maxDepth(pRoot->left) - maxDepth(pRoot->right)) <= 1 &&
		IsBalanced_Solution(pRoot->left) && IsBalanced_Solution(pRoot->right);
}
~~~

return 后面不需要加两个&&来递归他左子树和右子树. 这样想, 有一个函数得到了他的深度, 那么只要根的左子树和右子树深度不超过1就可以了.  后面判断的没有什么必要



**2、改进版，很好的方法，只遍历一次，画个二叉树就知道了**

 上面这种做法有很明显的问题，在判断上层结点的时候，会多次重复遍历下层结点，增加了不必要的开销。如果改为从下往上遍历，如果子树是平衡二叉树，则返回子树的高度；如果发现子树不是平衡二叉树，则直接停止遍历，这样至多只对每个结点访问一次。  

~~~cpp
int getDepth(TreeNode* node) {

	if (node == nullptr)  return 0;
	int leftDept = getDepth(node->left);
	if (leftDept == -1) return -1;
	int rightDept = getDepth(node->right);
	if (rightDept == -1) return -1;
	if (abs(leftDept - rightDept) > 1) 
		return -1;
	else
		return 1 + max(leftDept,rightDept);
}

bool IsBalanced_Solution(TreeNode* pRoot) {
	if (pRoot == nullptr) return true;//这里是返回true 而不再是false
	return getDepth(pRoot)!=-1;
}
~~~

这种做法有很明显的问题，在判断上层结点的时候，会多次重复遍历下层结点，增加了不必要的开销。如果改为从下往上遍历，如果子树是平衡二叉树，则返回子树的高度；如果发现子树不是平衡二叉树，则直接停止遍历，这样至多只对每个结点访问一次。  



**二刷：**

所谓平衡二叉树就是他的左孩子和右孩子的深度之差不能超过1

**1、迭代方法 仔细想一下**

~~~cpp
int getDepth(TreeNode * node){

    if(node == nullptr) return 0;
    int left = getDepth(node->left),right = getDepth(node->right);

    return 1 + max(left,right);
}

bool IsBalanced_Solution(TreeNode* pRoot) {

    if(pRoot == nullptr) return true;//这里返回的是true，为空的话就应该是

    return abs(getDepth(pRoot->left) - getDepth(pRoot->right))<=1;
}
~~~



**2、迭代法改进版本，从下往上便利，这种方法好一点**

~~~cpp
int getDepth(TreeNode * node){

    if(node == nullptr) return 0;
    int left = getDepth(node->left);
    if(left == -1)  return -1;

    int right = getDepth(node->right);
    if(right == -1) return -1;

    if(abs(left - right) > 1) return -1;
    else
        return 1 + max(left,right);
}

bool IsBalanced_Solution(TreeNode* pRoot) {

    if(pRoot == nullptr) return true;

    return getDepth(pRoot) != -1;
}
~~~

<p id = "数组中只出现一次的数字"></p>
**No40、数组中只出现一次的数字**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/e02fdb54d7524710a7d664d082bb7811?tpId=13&&tqId=11193&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。 



**1、常规做法**

~~~cpp
void FindNumsAppearOnce(vector<int> data,int* num1,int *num2) {
    unordered_map<int, int> unmp;
    for (int i = 0; i < data.size(); ++i) {
        unmp[data[i]] += 1;
    }


    auto it = unmp.begin();
    while (it != unmp.end()) {
        if (it->second == 1) {
            *num1 = it->first;
            ++it;
            break;
        }
        ++it;
    }

    while (it != unmp.end()) {
        if (it->second == 1) {
            *num2 = it->first;
            break;
        }
        ++it;
    }
}
~~~



**二刷：**

**1、hash表的笨方法**

运行时间：3ms  占用内存：376k

~~~cpp
void FindNumsAppearOnce(vector<int> data,int* num1,int *num2) {
    unordered_map<int,int> unmp;
    for(auto a:data){
        unmp[a]++;
    }

    auto beg = unmp.begin();
    while(beg != unmp.end())
    {
        if(beg->second == 1)
        {
            *num1 = beg->first;
            beg++;
            break;
        }
        beg++;

    }

    while(beg != unmp.end())
    {
        if(beg->second == 1)
        {
            *num2 = beg->first;
            break;
        }
        beg++;

    }
}
~~~



**2、异或做法，很棒**

  当**只有一个数出现一次**时，我们把数组中所有的数，依次异或运算，最后剩下的就是落单的数，因为成对儿出现的都抵消了。 

依照这个思路，我们来看两个数（我们假设是AB）出现一次的数组。我们首先还是先异或，剩下的数字肯定是A、B异或的结果，**这个结果的二进制中的1，表现的是A和B的不同的位**。我们就取第一个1所在的位数，假设是第3位，接着把原数组分成**两组**，分组标准是第3位是否为1。如此，**相同的数肯定在一个组**，因为相同数字所有位都相同，而不同的数，**肯定不在一组**。然后把这两个组按照最开始的思路，依次异或，剩余的两个结果就是这两个只出现一次的数字。

运行时间：3ms 占用内存：376k

~~~cpp
void FindNumsAppearOnce(vector<int> data,int* num1,int *num2) {


    if (data.size() < 2) return;

    int totalNum = 0;
    for (int i = 0; i < data.size(); i++) {
        totalNum ^= data[i];//所有数异或，结果为不同的两个数字的异或
    }

    int sign = 0;//标志位，记录totalNum中的第一个1出现的位置
    for (; sign < data.size(); sign++) {
        if ((totalNum & (1 << sign)) != 0) { //左移 sign 位，将所有数字进行左移sign位，而低位补上0
            break;
        }
    }
    cout << sign << endl;
    num1[0] = 0;
    num2[0] = 0;
    for (int i = 0; i < data.size(); i++) {
        if ((data[i] & (1 << sign)) == 0) {//标志位为0的为一组，异或后必得到一个数字（这里注意==的优先级高于&，需在前面加（））
            num1[0] ^= data[i];
            cout << "0 "<<data[i] << " " << (1<<sign) << endl;
        }
        else {
            num2[0] ^= data[i];//标志位为1的为一组
            cout << "1 " << data[i] << " " << (1 << sign) << endl;
        }
    }
    cout << num1[0] << num2[0] << endl;       
}
~~~

<p id = "和为S的连续整数序列"></p>


**No41、和为S的连续整数序列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/c451a3fd84b64cb19485dad758a55ebe?tpId=13&&tqId=11194&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck! 

**输出描述:**

```
输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序
```

输入
~~~
9
~~~
**返回值**

~~~
[[2,3,4],[4,5]]
~~~



**1、牛客解法，很厉害。类似于TCP滑动窗口**

~~~cpp
vector<vector<int> > FindContinuousSequence(int sum) {
    vector<vector<int>> result;
    int low=1,high=2;//两个起点，相当于动态窗口的两边，根据其窗口内的值的和来确定窗口的位置和大小
    while(low<high){
        int sumTemp = (low+high) *(high-low +1)/2;
        //由于是连续的，差为1的一个序列，那么求和公式是(a0+an)*n/2
        if(sumTemp == sum){  //相等，那么就将窗口范围的所有数添加进结果集
            vector<int> resultTemp;
            for(int i=low;i<=high;++i)
            {resultTemp.push_back(i);}
            result.push_back(resultTemp);
            low++;
        }else if(sumTemp<sum){ //如果当前窗口内的值之和小于sum，那么右边窗口右移一下
            high++;
        }
        else{  //如果当前窗口内的值之和大于sum，那么左边窗口右移一下
            low++;
        }
    }
    return result;
}
~~~



**2、暴力解法**

~~~cpp
vector<vector<int> > FindContinuousSequence(int sum) {
    vector<vector<int> > result;
    for (int n = sqrt(2 * sum); n >= 2; --n) {
        if (((n & 1) == 1 && sum % n == 0) || (sum % n * 2 == n)) {
            vector<int> res;
            //j用于计数，k用于遍历求值
            for (int j = 0, k = sum / n - (n - 1) / 2; j < n; j++, k++)//注意看k的求法
                res.push_back(k);
            result.push_back(res);
        }
    }
    return result;
}
~~~



**二刷：**

**1、滑动窗口，直接用数学公式来进行计算**

运行时间：3ms  占用内存：496k

~~~cpp
vector<vector<int> > FindContinuousSequence(int sum) {
    vector<vector<int>> result;
    int low = 1,high = 2;
    while(low < high){
        int sumTemp = (low + high) * (high - low + 1)/2;
        if(sumTemp == sum){
            vector<int> temp;
            for(int i = low;i <= high; ++i)
                temp.push_back(i);
            result.push_back(std::move(temp));
            low++;//即使当前满足，那么依然要前进的，这有点滑动窗口的意思吧
        }else if(sumTemp < sum) high++;
        else
            low++;
    }
    return std::move(result);//借助C++11的move函数，总体时间会更短    
}
~~~



<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[力扣网原题链接](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/)</font>

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：6.9 MB, 在所有 C++ 提交中击败了39.52%的用户

~~~cpp
vector<vector<int>> findContinuousSequence(int target) {

    vector<vector<int>> result;
    int low = 1,high = 2;
    while(low < high){
        int sumTemp = (low + high) * (high - low + 1)/2;
        if(sumTemp == target){
            vector<int> temp;
            for(int i = low;i <= high; ++i)
                temp.push_back(i);
            result.push_back(std::move(temp));
            low++;
        }else if(sumTemp < target) high++;
        else
            low++;
    }
    return std::move(result);//借助C++11的move函数，总体时间会更短    
}
~~~

<p id = "和为S的两个数字"></p>


**No42、和为S的两个数字**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/390da4f7a00f44bea7c2f3d19491311b?tpId=13&&tqId=11195&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

**输出描述:**

```
对应每个测试案例，输出两个数，小的先输出
```

**示例1**

**输入**

~~~
[1,2,4,7,11,15],15
~~~
**返回值**

~~~
[4,11]
~~~



**1、很简单的一个问题**

~~~cpp
vector<int> FindNumbersWithSum(vector<int> array,int sum) {        
    vector<int>  result;
    if (array.size() == 0)  return result;
    int low = 0, high = array.size() - 1;

    while (low <= high) {
        if (array[low] + array[high] == sum) {
            result.push_back(array[low]);
            result.push_back(array[high]);
            return result;
        }
        else if (array[low] + array[high] < sum)  low++;
        else {
            high--;
        }
    }
    return result;
}
~~~



**二刷：**

**1、滑动窗口来做**

运行时间：3ms  占用内存：512k

~~~cpp
 vector<int> FindNumbersWithSum(vector<int> array,int sum) {
       int low= 0, high = array.size()-1;
       int minResult = INT_MAX;
       vector<int> result;
       while(low <= high){
           int sumTemp = array[low] + array[high];
           if(sumTemp == sum){
               if( array[low] * array[high] < minResult){
                  result.clear();
                  result.push_back(array[low]);
                  result.push_back(array[high]);
                  minResult = array[low] * array[high];//这里其实可以直接返回的，因为同比情况下，两个数字相差越远，他们的乘积越小的，约靠近相差的乘积就越大
               }
               
               low++;
           }else if(sumTemp > sum) high--;
           else
               low++;
       }
       return result;
    }
~~~



**优化一下**

运行时间：2ms  占用内存：476k

~~~cpp
vector<int> FindNumbersWithSum(vector<int> array,int sum) {
       int low= 0, high = array.size()-1;
       vector<int> result;
       while(low <= high){
           int sumTemp = array[low] + array[high];
           if(sumTemp == sum){
               result.push_back(array[low]);
               result.push_back(array[high]);
               return result;

           }else if(sumTemp > sum) high--;
           else
               low++;
       }
       return result;
    }
~~~

<p id = "左旋转字符串"></p>
**No43、左旋转字符串**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/12d959b108cb42b1ab72cef4d36af5ec?tpId=13&&tqId=11196&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！ 

**示例1**

**输入**

~~~
"abcXYZdef",3
~~~
**返回值**

~~~
"XYZdefabc"
~~~



**1、我真的是太傻比了，其实很容易的**

~~~cpp
 string LeftRotateString(string str, int n) {
	int len = str.size();
    if(len==0) return str;//考虑str为空
	if (n >= len) n = n % len;//考虑n比str的长度还要大的情况下
	string temp = str + str;
	string result;
	result.resize(len);
	for (int i = n,index=0; i <len+n; ++i,++index) {
		result[index] = temp[i];
	}
	return result;
    }
~~~



**2、精简做法**

~~~cpp
string LeftRotateString(string str, int n) {
	int len = str.size();
    if(len==0) return str;
	if (n >= len) n = n % len;
	str += str;
	return str.substr(n,len);
}
~~~



**二刷：**

**1、简单的字符串处理函数，记得边界条件**

运行时间：2ms  占用内存：376k

~~~cpp
string LeftRotateString(string str, int n) {
        int len = str.size();
        if(len <= 1) return str;//可能为空
        n = n%len;//并且n有可能比len大的情况
        vector<char> temp(str.begin(),str.end());
        for(int i = 0;i < n;++i)
            temp.push_back(str[i]);
        str.assign(n + temp.begin(),temp.end());
        return std::move(str);
    }
~~~

<p id = "反转单词序列"></p>


**No44、反转单词序列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/3194a4f4cf814f63919d0790578d51f3?tpId=13&&tqId=11197&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a student.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？

**示例1**

**输入**

~~~
"nowcoder. a am I"
~~~
**返回值**

~~~
"I am a nowcoder."
~~~

**1、别想太多，能做出来就好**

~~~cpp
string ReverseSentence(string str) {
	string res = "", tmp = "";
	for (unsigned int i = 0; i < str.size(); ++i) {
		if (str[i] == ' ')
		{
			res = " " + tmp + res;
			tmp = "";
		}
		else tmp += str[i];
	}
	if (tmp.size()) 
		res = tmp + res;
	return res;
}
~~~

**2、借助栈 反而会出错，直接第一种方法就可以**



**二刷：**

**直接做就行**

运行时间：2ms 占用内存：464k

~~~cpp
string ReverseSentence(string str) {
	if (str.size() <= 1) return str;
	string result, temp;
	for (int i = str.size() - 1; i >= 0; --i) {
		if (str[i] != ' ') {
			temp = str[i] + temp;
		}
		else if (str[i] == ' ') {
			result = result + temp + " ";
			temp = "";
		}
	}
	if (temp.size() != 0) result = result + temp;

	return std::move(result);
}
~~~

<p id = "扑克牌顺子"></p>


**No45、扑克牌顺子**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/762836f4d43d43ca9deb273b3de8e1f4?tpId=13&&tqId=11198&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...

他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！

“红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。

LL决定去买体育彩票啦。 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 如果牌能组成顺子就输出true，否则就输出false。

为了方便起见,你可以认为大小王是0。 

**示例1**

**输入**

```
[6,0,2,0,4]
```

**返回值**

```
true
```

**示例2**

**输入**

```
[0,3,2,6,4]
```

**返回值**

```
true
```

**示例3**

**输入**

```
[1,0,0,1,0]
```

**返回值**

```
false
```

**示例4**

**输入**

```
[13,12,11,0,1]
```

**返回值**

```
false
```

**1、比较容易想到的一种方法**

1、排序 

2、计算所有相邻数字间隔总数 

3、计算0的个数 

4、如果2、3相等，就是顺子 

5、如果出现对子，则不是顺子

~~~cpp
    bool IsContinuous( vector<int> numbers ) {
        int len = numbers.size();
        if(len<5) return false;
        sort(numbers.begin(),numbers.end());
        int numOfZreo = 0,numOfInner=0;
        for(int i=0;i<len-1;++i){
            if(numbers[i]==0)  ++numOfZreo;
            else if(numbers[i]==numbers[i+1]){
                return false;
            }
            else{
                numOfInner += numbers[i+1] - numbers[i] -1;//这里千万注意要减去1
            }
            //cout<<numOfZreo<<" "<<numOfInner<<endl;
        }
        if(numOfZreo>=numOfInner) return true;
        return false;
    }
~~~



**2、第二种方法**

max 记录 最大值
 min 记录  最小值
 min ,max 都不记0
 满足条件 1 max - min   <5
                2 除0外没有重复的数字(牌)
                3 数组长度 为5  

~~~cpp
 bool IsContinuous( vector<int> numbers ) {
	int maxNum = -1, minNum = 14;
	if (numbers.size() < 5)//小于5则为false
		return false;
	vector<int> result(14, 0);
	result[0] = -5;
	for (int i = 0; i < numbers.size(); ++i)
	{  
		result[numbers[i]]++;
		if (numbers[i] == 0)//出现0则跳过
			continue;
		if (result[numbers[i]] > 1) return false;
		if (numbers[i] > maxNum)
			maxNum = numbers[i];//取最大数
		if (numbers[i] < minNum)
			minNum = numbers[i];//取最小数
	}
	if (maxNum - minNum < 5)
		return true;//判断是否小于5
	eturn false;
    }
~~~



下面的代码有问题，无法判断是否有重复的数字，比如1,2,4,5,4就无法判断

~~~cpp
    bool IsContinuous( vector<int> numbers ) {
	int maxNum = -1, minNum = 14;
	if (numbers.size() < 5)//小于5则为false
		return false;
	for (int i = 0; i < numbers.size(); i++)
	{   //判断是是否小于0和大于13以及有没有重复数字
		if (numbers[i] < 0 || numbers[i]>13 || numbers[i] == maxNum || numbers[i] == minNum)
			return false;
		if (numbers[i] == 0)//出现0则跳过
			continue;
		if (numbers[i] > maxNum)
			maxNum = numbers[i];//取最大数
		if (numbers[i] < minNum)
			minNum = numbers[i];//取最小数
	}
	if (maxNum - minNum < 5)
		return true;//判断是否小于5
	return false;
    }
~~~



**二刷：**

**先排序，再进行操作即可，挺好**

运行时间：3ms 占用内存：504k

~~~cpp
    bool IsContinuous( vector<int> numbers ) {
if (numbers.size() <= 4) return false;
	sort(numbers.begin(), numbers.end());
	int countZero = 0;
	int index = 0;
	while (index < numbers.size() && numbers[index] == 0) {
		countZero++;
		index++;
	}
	//cout << index << endl;
	//cout << countZero << endl;
	for (int i = index; i < numbers.size() - 1; ++i) {
		if (numbers[i] == numbers[i+1]) return false;
		else if ( (numbers[i]+1) == numbers[i+1]) {
			continue;
		}
		else {
			countZero -= (numbers[i+1] - numbers[i] - 1);
		}
		//cout << countZero << endl;
		if (countZero < 0) return false;
	}


	return countZero >= 0;
    }
~~~

<p id = "孩子们的游戏（圆圈中最后剩下的数）"></p>


**No46、孩子们的游戏（圆圈中最后剩下的数）**

[<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">牛客网原题链接](https://www.nowcoder.com/practice/f78a359491e64a50bce2d89cff857eb6?tpId=13&&tqId=11199&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

每年六一儿童节,牛客都会准备一些小礼物去看望孤儿院的小朋友,今年亦是如此。HF作为牛客的资深元老,自然也准备了一些小游戏。其中,有个游戏是这样的:首先,让小朋友们围成一个大圈。然后,他随机指定一个数m,让编号为0的小朋友开始报数。每次喊到m-1的那个小朋友要出列唱首歌,然后可以在礼品箱中任意的挑选礼物,并且不再回到圈中,从他的下一个小朋友开始,继续0...m-1报数....这样下去....直到剩下最后一个小朋友,可以不用表演,并且拿到牛客名贵的“名侦探柯南”典藏版(名额有限哦!!^_^)。请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号是从0到n-1)

如果没有小朋友，请返回-1

**示例1**

**输入**

```
5,3
```

**返回值**

```
3
```

**1、时间复杂度太大**

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



**2、约瑟夫环的问题，背模板吧 啥也别说了，背模板吧**

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



**3、递归做法，不觉明厉**

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



**二刷：**

**1、使用数组代替环，考虑清楚从头开始的情况**

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

<p id = "求总和"></p>


**No47、求1+2+3+...+N**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/7a0da8fc483247ff8800059e12d7caf1?tpId=13&&tqId=11200&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

**示例1**

**输入**

~~~
5
~~~
**返回值**

~~~
15
~~~

**1、他妈的，我服了**

~~~cpp
int Sum_Solution(int n) {
    bool a[n][n+1];
    return sizeof(a)>>1;
}
~~~

因为bool类型的为1个字节，或者换为char的也行，他们都是一个字节，如果是short(2),int(4)就不行了

**2、这个方法真的很妙**

解题思路：
1.需利用逻辑与的短路特性实现递归终止。 
2.当n == 0时，(n > 0) && ((sum += Sum_Solution(n - 1)) > 0)只执行前面的判断，为false，然后直接返回0；
3.当n > 0时，执行sum += Sum_Solution(n - 1)，实现递归计算Sum_Solution(n)。

~~~cpp
    int Sum_Solution(int n) {
	int sumNum = n;
	bool ans = (n > 0) && ((sumNum += Sum_Solution(n - 1)) > 0);
	return sumNum;
    }
~~~

**二刷：**

**1、很棒的方法啊**

1.需利用逻辑与的短路特性实现递归终止。 
2.当n == 0时，(n > 0) && ((sum += Sum_Solution(n - 1)) > 0)只执行前面的判断，为false，然后直接返回0；
3.当n > 0时，执行sum += Sum_Solution(n - 1)，实现递归计算Sum_Solution(n)。

运行时间：3ms  占用内存：508k

~~~cpp
    int Sum_Solution(int n) {
        
    int sumNum = n;
	n > 0 && (sumNum += Sum_Solution(n - 1));
	return sumNum;    
        
    }
~~~

<p id = "求两个数相加"></p>


**No48、求两个数相加**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/59ac416b4b944300b617d4f7f111b215?tpId=13&&tqId=11201&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**
写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、\/四则运算符号。

**示例1**

**输入**

~~~
1,2
~~~
**返回值**

~~~
3
~~~

**1、这种解法真的太厉害了**

~~~cpp
int Add(int num1, int num2)
{
    while( num2!=0 ){
        int sum = num1 ^ num2;
        int carray = (num1 & num2) << 1;
        num1 = sum;
        num2 = carray;
    } 
    return num1;
}
~~~

1. **两个数异或**：相当于每一位相加，而不考虑进位；
2. **两个数相与**，并左移一位：相当于求得进位；
3. 将上述两步的结果相加



首先看十进制是如何做的： 5+7=12，三步走 

第一步：相加各位的值，不算进位，得到2。

 第二步：计算进位值，得到10. 如果这一步的进位值为0，那么第一步得到的值就是最终结果。  

第三步：重复上述两步，只是相加的值变成上述两步的得到的结果2和10，得到12。 



 同样我们可以用三步走的方式计算二进制值相加：

5-101，7-111

 第一步：相加各位的值，不算进位，得到010，二进制每位相加就相当于各位做异或操作，101^111。 

 第二步：计算进位值，得到1010，相当于各位做与操作得到101，再向左移一位得到1010，(101&111)<<1。  

第三步重复上述两步， 各位相加 010^1010=1000，进位值为100=(010&1010)<<1。      

继续重复上述两步：1000^100 = 1100，进位值为0，跳出循环，1100为最终结果。   



什么时候进位制为0也就说明两个数相加到了最终点，也就计算结束了



**二刷：**

**1、不太理解，记住模板吧**

运行时间：2ms  占用内存：376k

~~~cpp
int Add(int num1, int num2)
{

    while(num2 != 0){
        int sum = num1 ^num2;
        int carry = (num1 & num2)<<1;
        num1 = sum;
        num2 = carry;

    }
    return num1;
}
~~~

<p id = "最小的K个数"></p>

**No49、字符串转化为整数**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/1277c681251b4372bdef344468e4f26e?tpId=13&&tqId=11202&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0

**输入描述:**

```
输入一个字符串,包括数字字母符号,可以为空
```

**输出描述:**

```
如果是合法的数值表达则返回该数字，否则返回0
```

**示例1**

**输入**

```
+2147483647
1a33
```

**输出**

```
2147483647
0
```



**1、自己思考的一种笨方法,这题用C++   AC 不了**

负数 -1234，正数 +2563的情形 第一个为正负号 要考虑到

第一位为0的也是不是合法的

出现0~9之外的字符也是不合法的

~~~cpp
int StrToInt(string str) {
    long long num = 0;
    if (str.size() == 0) return 0;
    int len = str.size();
    bool isNegative = false,isPositive = false;
    if (str[0] == '-') isNegative=true;
    else if (str[0] == '+') isPositive = true;
    else
        if (str[0]<='0' || str[0]>'9')  return 0;

    int i = 0;
    if (isPositive || isNegative) i = 1;
    for (    ; i <len ; ++i) {
        if (str[i]<'0' || str[i]>'9') return 0;
        else {
            num = num * 10 + str[i] - '0';
        }

    }
    if (isNegative) num = -1 * num;
    if (num <= INT_MAX && num >= INT_MIN) return num;
    return 0;
}
~~~

只通过85.71%的案例。



**2、第二种精简一点的方法**

~~~cpp
int StrToInt(string str) {
    int len = str.size();
    if (len == 0) return 0;//为空，直接返回即可
    int i = 0, flag = 1,isSingal = 0;// 索引 正负号标志位  正负号出现次数
    long res = 0; //默认flag = 1，正数
    while (i<len && str[i] == ' ') i++; //若str全为空格，str[i] = '\0'(最后一个i)
    if (i >= len) return 0;//全部都是空格，直接返回吧
    if (i < len && str[i] == '-') { flag = -1; ++i; isSingal++; }
    if (i < len && str[i] == '+') { ++i; ++isSingal; }
    if (isSingal > 1) return 0;
    for (  ; i < len ; ++i) {
        if(str[i]<'0' || str[i] > '9') return 0;
        res = res * 10 + (str[i] - '0');
        if (res >= INT_MAX && flag == 1) return  INT_MAX;
        if (res > INT_MAX && flag == -1) return  INT_MIN;
    }
    return flag * res;

}
~~~



**3、有很多要注意的地方**

~~~cpp
int StrToInt(string str) {
	
	int len = str.size();
	if (len == 0) return 0;
	int  flag=1,singal=0, i = 0;
	long long num = 0;
	while (i < len && str[i] == ' ') i++;//可能一直为空或者前面若干都是 空格，处理空格
	if (i >= len) return 0;//一直为空则返回0
	if (str[i] == '-') { flag = -1; singal++; ++i; }//符号判断，同时千万记得 ++i
	if (str[i] == '+') { singal++; ++i; }//正号判断 ,++ i
	if (singal > 1) return 0;//如果出现两个符号，则是不合法的数字表达了 -+45这样的数字


	for (; i < len; ++i) {
		if (str[i]<'0' || str[i]>'9') return 0;// 是否有不合法数字出现 比如12a454
		else {
			num = num * 10 + str[i] - '0';
			if (num >= INT_MAX && flag==1) return INT_MAX;//注意这里的表达 输入如果是 INT_MAX也就是 2147483647 ，就还好
			if (num > INT_MAX && flag==-1) return INT_MIN;//但是如果输入是 INY_MIN 也就是 -2147483647-1 = -2147483648的话，
															// num因为是正数表达，所以必须num>INT_MAX才能正确判断了
		}

	}
	
	return num*flag;
}
~~~



**二刷：**

**1、这种做法更加稳妥**

运行时间：2ms  占用内存：376k

~~~cpp
int StrToInt(string str) {
    int len = str.size();
    if(len == 0) return 0;
    int i = 0,flag = 1,isSignal = 0;
    long res = 0;
    while(i<len && str[i] == ' ') i++;//首先跳过全部的空格
    if(i >= len) return 0;//全部都是空格也不行
    while(i<len && (str[i] == '-' || str[i] == '+'))  {//判断标志位
        if(str[i] == '-') flag = -1;
        i++;
        isSignal++;
        if(isSignal > 1) return 0;//不能出现两个标志位
    }

    for( ; i < len; ++i){
        if(str[i]>'9' || str[i]<'0') return 0;
        res = res*10 + str[i] - '0';
        if(res > INT_MAX && flag == 1) return INT_MAX;
        if(res > INT_MAX+1 && flag == -1)  return INT_MIN;// INT_MAX+1会溢出  ，将1移到左边去就可以了  

    }

    return flag * res;
}
~~~



**2、考虑负数溢出情况**

运行时间：2ms 占用内存：492k

~~~cpp
int StrToInt(string str) {
    int len = str.size();
    if (len == 0) return 0;
    int i = 0, flag = 1, isSignal = 0;
    long res = 0;
    while (i < len && str[i] == ' ') i++;//首先跳过全部的空格
    if (i >= len) return 0;//全部都是空格也不行
    while (i < len && (str[i] == '-' || str[i] == '+')) {
        if (str[i] == '-') flag = -1;
        i++;
        isSignal++;
        if (isSignal > 1) return 0;//不能出现两个标志位
    }

    for (; i < len; ++i) {
        if (str[i] > '9' || str[i] < '0') return 0;
        res = res * 10 + str[i] - '0';  
        if (res > INT_MAX && flag == 1) return 0;//正数溢出
        if (res-1 > INT_MAX  && flag == -1)  return 0;//负数溢出，这个时候可以将 1 移到左边来，INT_MIN = -1 - 2的31次方 是比INT_MAX的绝对值大一的

    }

    return flag * res;
}
~~~

<p id = "数组中重复的数字"></p>
**No50、数组中重复的数字**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/623a5ac0ea5b4e5f95552655361ae0a8?tpId=13&&tqId=11203&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中第一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。

**返回描述：**

如果数组中有重复的数字，函数返回true，否则返回false。

如果数组中有重复的数字，把重复的数字放到参数duplication[0]中。（ps:duplication已经初始化，可以直接赋值使用。）



**1、用unordered_map保存即可**

~~~cpp
bool duplicate(int numbers[], int length, int* duplication) {
	unordered_map<int, int> unmp;
	unmp.reserve(length);
	for (int i = 0; i < length; ++i) {
		if (unmp.find(numbers[i]) == unmp.end()) {
			unmp.insert({ numbers[i],1 });
		}
		else
		{
			*duplication = numbers[i];
			return true;
		}
	}
	return false;
}
~~~



**2、减少内存，降低内存复杂度**

用 vector\<char>来存 

~~~cpp
bool duplicate(int numbers[], int length, int* duplication) {
    vector<bool> result(length,false);
    for (int i = 0; i < length; ++i) {
        if (result[numbers[i]] == false) {
            result[numbers[i]] = true;
        }
        else
        {
            duplication[0] = numbers[i];
            return true;
        }
    }
    return false;
}
~~~



**3、不占用任何空间的一种做法**

题目里写了数组里数字的范围保证在0 ~ n-1   之间，所以可以利用现有数组设置标志，当一个数字被访问过后，可以设置对应位上的数 +   n，之后再遇到相同的数时，会发现对应位上的数已经大于等于n了，那么直接返回这个数即可。  

~~~cpp
bool duplicate(int numbers[], int length, int* duplication) {
	for (int i = 0; i < length; ++i) {
		int index = numbers[i];
		if (index >= length) index -= length;
		if (numbers[index] >= length) {
			duplication[0] = index;
			return true;
		}
		numbers[index] += length;
	}
	return false;
}
~~~



**二刷：**

**1、常规做法就是哈希表，使用一个vector的bool型数组会节约不少空间**

运行时间：2ms  占用内存：508k

~~~cpp
bool duplicate(int numbers[], int length, int* duplication) {
    vector<bool> result(length,false);
    for (int i = 0; i < length; ++i) {
        if (result[numbers[i]] == false) {
            result[numbers[i]] = true;
        }
        else
        {
            duplication[0] = numbers[i];
            return true;
        }
    }
    return false;
    }
~~~



**2、另一种原地做法**

运行时间：2ms  占用内存：476k

~~~cpp
bool duplicate(int numbers[], int length, int* duplication) {
    for(int i = 0;i < length; ++i){//这个方法妙在对于依次遍历过的每个数，都能在数组里记忆它出现过了。
        //比如{2,2,1,0}，第一次循环index = 2,a[2]=a[2] + 4 = 5,这样，a[2]=5 > 数组长度4,就说明2这个数字出现过了。
        int index = numbers[i]%length;
        if( numbers[index] >= length){
            duplication[0] = index;
            return true;
        }
        numbers[index] += length;
    }

    return false;
}
~~~

注释：和Top100中 [448](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/) 很像，做法差不多

<p id = "构建乘积数组"></p>


**No51、构建乘积数组**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/94a4d381a68b47b7a8bed86f2975db46?tpId=13&&tqId=11204&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]\*A[1]\*...\*A[i-1]\*A[i+1]\*...\*A[n-1]，不能使用除法。

（注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）

对于A长度为1的情况，B无意义，故而无法构建，因此该情况不会存在。

**示例1**

**输入**

~~~
[1,2,3,4,5]
~~~
**返回值**

~~~
[120,60,40,30,24]
~~~



**1、暴力法**

~~~cpp
vector<int> multiply(const vector<int>& A) {
	vector<int> B;
	for (int i = 0; i < A.size(); ++i) {

		int temp = 1;
		for (int j = 0; j < A.size(); ++j) {
			if (j != i) temp *= A[j];
		}
		B.push_back(temp);
	}
	return B;
}
~~~



**2、一种超级精妙的解法，吹爆了**

~~~cpp
vector<int> multiply(const vector<int>& A) {
	int len = A.size();
	vector<int> B(len,0);
	int temp = 1;
	for (int i = 0; i <len; temp*=A[i],++i) {

		B[i] = temp;
	}

	temp = 1;
	for (int i = len-1; i >= 0; temp *= A[i], --i) {

		B[i] = B[i]*temp;
	}
	return B;
}
~~~



**二刷：**

**1、遇到一点问题，还没有很顺利的写出来**

运行时间：2ms  占用内存：376k

~~~cpp
    vector<int> multiply(const vector<int>& A) {
    
	if (A.size() <= 1) return vector<int>();
	int len = A.size();
	vector<int> B(len, 1);
	int left = A[0], right = A[len-1];
	for (int i = 1; i < len; ++i) {//而这里要从第二个开始
		B[i] = left;
		left = left * A[i];
	}

	for (int i = len - 2; i >= 0; --i) {//这里要从倒数第二个开始
		B[i] = B[i] * right;
		right = right * A[i];
	}

	return std::move(B);
    }
~~~

<p id = "正则表达式匹配"></p>


**No52、正则表达式匹配**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/45327ae22b7b413ea21df13ee7d6429c?tpId=13&&tqId=11205&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配

**示例1**

**输入**

```
"aaa","a*a"
```

**返回值**

```
true
```

**1、太他吗难了，不会不会，老子不会**

~~~cpp
//字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
bool match(char* str, char* pattern)
{
	int len1 = strlen(str), len2 = strlen(pattern);
	int low1 = 0, low2 = 0;
	while (low1 < len1 && low2 < len2) {
		if (str[low1] == pattern[low2]) {

			if (low2 + 1 < len2 && pattern[low2 + 1] == '*') {
				while (str[low1] == pattern[low2]) { low1++; }
				low2++;//跳过 * 
			}
			else {
				low1++;
				low2++;
			}
			
		}
		else if (str[low1] != pattern[low2]) {
			cout << "111" << endl;
			if (pattern[low2] == '.' && low2 + 1 < len2 && pattern[low2 + 1] != '*') { low1++; low2++; }
			else if (pattern[low2] == '.' && low2 + 1 < len2 && pattern[low2 + 1] == '*')  return true;
			else if (low2 + 1 < len2 && pattern[low2 + 1] == '*') {//出现 aa 与 ab*a这样的情况
				low2+=2;
			}
				return false;
		}
	}
	return low1 == len1 && low2 == len2;
}
~~~



**2、看的思路**

​       解这题需要把题意仔细研究清楚，反正我试了好多次才明白的。

​       首先，**考虑特殊情况**： 1>两个字符串都为空，返回true 2>当第一个字符串不空，而第二个字符串空了，返回false（因为这样，就无法 匹配成功了,而如果第一个字符串空了，第二个字符串非空，还是可能匹配成 功的，比如第二个字符串是“aaaa”,由于‘’之前的元素可以出现0次， 所以有可能匹配成功） 之后就开始匹配第一个字符，这里有两种可能：**匹配成功或匹配失败**。

​      但考虑到pattern 下一个字符可能是‘’， 这里我们分两种情况讨论：pattern下一个字符为‘’或 不为‘’： 1>pattern下一个字符不为‘’：这种情况比较简单，直接匹配当前字符。如果 匹配成功，继续匹配下一个；如果匹配失败，直接返回false。

​      注意这里的 “匹配成功”，除了两个字符相同的情况外，还有一种情况，就是pattern的 当前字符为‘.’,同时str的当前字符不为‘\0’。 2>pattern下一个字符为‘’时，稍微复杂一些，因为‘’可以代表0个或多个。 

​      这里把这些情况都考虑到： a>当‘’匹配0个字符时，str当前字符不变，pattern当前字符后移两位， 跳过这个‘’符号； b>当‘’匹配1个或多个时，str当前字符移向下一个，pattern当前字符 不变。

   （这里匹配1个或多个可以看成一种情况，因为：当匹配一个时， 由于str移到了下一个字符，而pattern字符不变，就回到了上边的情况a； 当匹配多于一个字符时，相当于从str的下一个字符继续开始匹配） 之后再写代码就很简单了。

~~~cpp
 bool match(char* str, char* pattern)
    {
        if (*str == '\0' && *pattern == '\0')
            return true;
        if (*str != '\0' && *pattern == '\0')
            return false;
        //if the next character in pattern is not '*'
        if (*(pattern+1) != '*')
        {
            if (*str == *pattern || (*str != '\0' && *pattern == '.'))
                return match(str+1, pattern+1);
            else
                return false;
        }
        //if the next character is '*'
        else
        {
            if (*str == *pattern || (*str != '\0' && *pattern == '.'))
                return match(str, pattern+2) || match(str+1, pattern);
            else
                return match(str, pattern+2);
        }
    }
~~~

**讲解:**

首先能够匹配的情况就是两种：1、两者相等，2、s!='\0' && p=='.'

只有这两种情况

1、p[1] != * ,那么可能是 ba与.a 或者 ba ba这两种形式，那就直接s+1 p+1，递归到下一层，否则就是false了

2、p[1] == *,有 * 过来捣乱，如果匹配的话也就是两者相等或者**s!=‘\0’并且p==‘.’的话，前者比如 abc 与 a****abc直接 s p+2 ，要跳过pattern的匹配部分，因为有个 星号 *      后者就是aaabc 与 .*bc这样，直接s+1,p，s向前走一步逐渐递归到下次

如果不匹配的话那就是 abc  b*abc这样的，p向前走两步，走到后面的p再去匹配



**3、另一种写法**

~~~cpp
/*
要分为几种情况：（状态机）
匹配只可能是：两者相等 或者  S！=‘\0’ && p == .

（1）当第二个字符不为‘*’时：匹配就是将字符串和模式的指针都下移一个，不匹配就直接返回false
（2）当第二个字符为'*'时：
        匹配：
                a.字符串下移一个，模式不动  abc  a*bc
                c.字符串不动，模式下移两个   abc  .*abc或者 .*bc
        不匹配：字符串下移不动，模式下移两个   abc  b*abc
搞清楚这几种状态后，用递归实现即可：
*/
class Solution {
public:
    bool match(char* str, char* pattern){
        if(str[0]=='\0'&&pattern[0]=='\0')
            return true;
        else if(str[0]!='\0'&&pattern[0]=='\0')
            return false;
        if(pattern[1]!='*'){
            if(str[0]==pattern[0]||(pattern[0]=='.'&&str[0]!='\0'))
                return match(str+1,pattern+1);
            else
                return false;
        }
        else{
            if(str[0]==pattern[0]||(pattern[0]=='.'&&str[0]!='\0'))
                return match(str,pattern+2)||match(str+1,pattern);
            else
                return match(str,pattern+2);
        }
    }
};
~~~



**二刷：**

**1、很好，依然不会，哈哈，递归的方法**

运行时间：3ms  占用内存：492k

~~~cpp
/*
要分为几种情况：（状态机）
匹配只可能是：两者相等 或者  S！=‘\0’ && p == .

（1）当第二个字符不为‘*’时：匹配就是将字符串和模式的指针都下移一个，不匹配就直接返回false
（2）当第二个字符为'*'时：
        匹配：
                a.字符串下移一个，模式不动  abc  a*bc
                c.字符串不动，模式下移两个   abc  .*abc或者 .*bc
        不匹配：字符串下移不动，模式下移两个   abc  b*abc
搞清楚这几种状态后，用递归实现即可：
*/
class Solution {
public:
    bool match(char* str, char* pattern){
        if(str[0]=='\0'&&pattern[0]=='\0')
            return true;
        else if(str[0]!='\0'&&pattern[0]=='\0')
            return false;
        if(pattern[1]!='*'){
            if(str[0]==pattern[0]||(pattern[0]=='.'&&str[0]!='\0'))
                return match(str+1,pattern+1);
            else
                return false;
        }
        else{
            if(str[0]==pattern[0]||(pattern[0]=='.'&&str[0]!='\0'))
                return match(str,pattern+2)||match(str+1,pattern);
            else
                return match(str,pattern+2);
        }
    }
};
~~~

<p id = "表示数值的字符串"></p>


**No53、表示数值的字符串**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/6f8c901d091949a5837e24bb82a731f2?tpId=13&&tqId=11206&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

**示例1**

**输入**

```
"123.45e+6"
```

**返回值**

```
true
```

**示例2**

**输入**

```
"1.2.3"
```

**返回值**

```
false
```

**1、看的写法，很好**

~~~cpp
bool isNumeric(char* string)
{
    // 正反标记符号、小数点、e是否出现过
    bool sign = false, decimal = false, hasE = false;
    for (int i = 0; i < strlen(string); ++i) {
        if (string[i] == 'e' || string[i] == 'E') {
            if (i == strlen(string) - 1) return false; // e后面一定要接数字
            if (hasE) return false;  // 不能同时存在两个e
            hasE = true;
        }
        else if (string[i] == '+' || string[i] == '-') {
            // 第二次出现+-符号，则必须紧接在e之后
            if (sign && string[i - 1] != 'e' && string[i - 1] != 'E') return false;
            // 第一次出现+-符号，且不是在字符串开头，则也必须紧接在e之后
            if (!sign && i > 0 && string[i - 1] != 'e' && string[i - 1] != 'E') return false;
            sign = true;
        }
        else if (string[i] == '.') {
            // e后面不能接小数点，小数点不能出现两次
            if (hasE || decimal) return false;
            decimal = true;
        }
        else if (string[i] < '0' || string[i] > '9') // 不合法字符
            return false;
    }
    return true;

}
~~~



**二刷：**

**1、还是不会**

运行时间：2ms  占用内存：380k

1、e后面必须是数字 只能有一个e

2、正负号只能出现一次，即使出现第二次了，那他的前面也要是 e/ E ,出现第一次的话必须在开头或者在E的后面

3、小数点也只能出现一次，且不能再E的后面

4、合法字符的判断 除了 e +-  . 以及数字之外 其余的字符都是错的。

~~~cpp
bool isNumeric(char* string)
{
    bool sign = false, decimal = false,hasE = false;//正负号 小数点 e
    int len = strlen(string);
    for(int i = 0; i < len; ++i){
        if(string[i] == 'e' || string[i] == 'E'){
            if( i == len - 1) return false;//e 的后面必须要出现数字 对应 12e
            if(hasE) return false;//只能有一个e
            hasE = true;

        }else if(string[i] == '+' || string[i] == '-'){                
            if(!sign && i>0 && string[i-1] !='e' && string[i-1] != 'E')// 12e+5 如果第一次出现，且不是在开头，那么也要紧跟在e/E之后
                return false;
            if(sign && string[i-1] !='e' && string[i-1] !='E')// +5e-6  第二次出现，那也要跟在 e/E之后
                return false;
            sign = true;
        }else if(string[i] == '.'){
            if(decimal) return false; 
            if(hasE) return false;// E后面不能跟小数点  12e+4.3

            decimal = true;

        }else if(string[i] < '0' || string[i] > '9')//不合法字符
            return false;

    }
    return true;
}
~~~

<p id = "字符流中第一个不重复的字符"></p>


**No54、字符流中第一个不重复的字符**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/00de97733b8e4f97a3fb5c680ee10720?tpId=13&&tqId=11207&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。

```
如果当前字符流没有存在出现一次的字符，返回#字符。
```



**1、自己想的一种方法**

~~~cpp
class Solution
{
public:
	//Insert one char from stringstream
	void Insert(char ch)
	{
		v.push_back(ch);
	}
	//return the first appearence once char in current stringstream
	char FirstAppearingOnce()
	{
        if(v.empty())  return '#';
		/*int len = v.size();*/
		for (auto &ch:v) {
			if (count(v.begin(), v.end(), ch) == 1) return ch;
		}
		return '#';
	}

	vector<char> v;
};
~~~



**2、借助一个unordered_map**

这个方法要慢一些

~~~cpp
class Solution
{
public:
	//Insert one char from stringstream
	void Insert(char ch)
	{
		v.push_back(ch);
		unmp[ch]++;
	}
	//return the first appearence once char in current stringstream
	char FirstAppearingOnce()
	{
		for (auto &ch:v) {
			if (unmp[ch] == 1) return ch;
		}
		return '#';
	}

	vector<char> v;
	unordered_map<char, int> unmp;
};
~~~



**二刷：**

**1、简单的方法，复杂度稍微高一些**

运行时间：4ms  占用内存：376k

~~~cpp
class Solution
{
public:
	//Insert one char from stringstream
	void Insert(char ch)
	{
		v.push_back(ch);
	}
	//return the first appearence once char in current stringstream
	char FirstAppearingOnce()
	{
		for (auto &ch:v) {
			if (count(v.begin(),v.end(),ch) == 1) return ch;
		}
		return '#';
	}

	vector<char> v;

};
~~~



**2、借助一个哈希表，稍微快一点了**

运行时间：4ms  占用内存：376k

~~~cpp
class Solution
{
public:
	//Insert one char from stringstream
	void Insert(char ch)
	{
		v.push_back(ch);
        result[ch]++;
	}
	//return the first appearence once char in current stringstream
	char FirstAppearingOnce()
	{
		for (auto &ch:v) {
			if (result[ch] == 1) return ch;
		}
		return '#';
	}

	vector<char> v;
    unordered_map<char,int> result;

};
~~~

<p id = "链表中环的入口结点"></p>


**No55、链表中环的入口结点**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4?tpId=13&&tqId=11208&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。



**1、老办法，借助unordered_map**

~~~cpp
ListNode* EntryNodeOfLoop(ListNode* pHead)
{
	if (pHead == nullptr) return NULL;
	unordered_map<ListNode*, int> unmp;//注意是ListNode*，不是ListNode
	while (pHead != NULL) {

		unmp[pHead]++;
		if (unmp[pHead] == 2) return pHead;
		pHead = pHead->next;
	}
	return NULL;
}
~~~

借助se't其实也可以，但是set和map底层其实差不多，而且set里的两个元素类型相同，sizeof（listnode）肯定比 sizeof要大

~~~cpp
ListNode* EntryNodeOfLoop(ListNode* pHead)
{
    set<ListNode*> s;
    ListNode* node = pHead;
    while(node!=NULL){
        if(s.insert(node).second)
            node = node->next;
        else
            return node;
    }
    return node;

}
~~~



**2、有个快慢指针的做法**

先说个定理：两个指针一个fast、一个slow同时从一个链表的头部出发
fast一次走2步，slow一次走一步，如果该链表有环，两个指针必然在环内相遇
此时只需要把其中的一个指针重新指向链表头部，另一个不变（还在环内），
这次两个指针一次走一步，相遇的地方就是入口节点。
这个定理可以自己去网上看看证明。

~~~C++
ListNode* EntryNodeOfLoop(ListNode* pHead)
{
    ListNode*fast=pHead,*low=pHead;
    while(fast&&fast->next){
        fast=fast->next->next;
        low=low->next;
        if(fast==low)
            break;
    }
    if(!fast||!fast->next)return NULL;
    low=pHead;//low从链表头出发
    while(fast!=low){//fast从相遇点出发
        fast=fast->next;
        low=low->next;
    }
    return low;
}
~~~



**二刷：**

**1、快慢指针，常规题**

运行时间：3ms  占用内存：376k

~~~cpp
ListNode* EntryNodeOfLoop(ListNode* pHead)
{

    if(pHead == nullptr || pHead->next == nullptr) return nullptr;
    ListNode*fast = pHead, *slow = pHead;
    while(fast != nullptr && fast->next != nullptr)
    {
        fast = fast->next->next;
        slow = slow->next;
        if(fast == slow) break;
    }

    if(fast == nullptr || fast->next == nullptr) return nullptr;
    slow = pHead;
    while(fast != slow){
        fast = fast->next;
        slow = slow->next;
    }
    return fast;      
}
~~~

<p id = "删除链表中的重复结点"></p>


**No56、删除链表中的重复结点**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/fc533c45b73a41b0b44ccba763f866ef?tpId=13&&tqId=11209&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

**示例1**

**输入**

~~~
{1,2,3,3,4,4,5}
~~~
**返回值**

~~~
{1,2,5}
~~~



**1、真的是超级笨，我服了，调试了很多遍才通过的**

大概思想：采用vector保存链表中的不重复元素，然后将链表从表头开始挨个对比，一样就将当前结点保存下来，然后index++，不一样就继续向下遍历，注意边界条件。

~~~cpp
ListNode* deleteDuplication(ListNode* pHead)
{
    if (pHead == nullptr || pHead->next == nullptr) return pHead;
    ListNode* node = (ListNode*)malloc(sizeof(struct ListNode));
    node = pHead;
    vector<int> result;
    result.push_back(node->val);
    node = node->next;
    while (node != nullptr) {
        if (result.size()!=0 && result.back() == node->val) {
            while (node!=nullptr && result.back() == node->val) {
                node = node->next;
            }
            result.pop_back();
        }
        else if (result.size() == 0 || (result.size()!=0 && result.back()!=node->val))
        {
            result.push_back(node->val);
            node = node->next;
        }	
        else
            node = node->next;
    }

    if (result.size() == 0) {
        return nullptr;
    }
    node = pHead;
    int index = 0;
    int len = result.size();
    ListNode* resultNode = (ListNode*)malloc(sizeof(struct ListNode));
    while (node != nullptr) {
        if (index<len && node->val == result[index]) {
            index++;
            resultNode = node;
            break;

        } node = node->next;
    }
    pHead = resultNode;
    while (node != nullptr) {
        if (index < len && node->val == result[index]) {
            index++;
            pHead->next = node;
            pHead = pHead->next;

        } node = node->next;
    }
    pHead->next = nullptr;//最后要设置尾点结束
    return resultNode;
}
~~~



**2、别人的思路和方法，三指针法，取到原来指针的前一个指针**

1. 首先添加一个头节点，以方便碰到第一个，第二个节点就相同的情况

​    2.设置 pre ，cur指针， pre指针指向当前确定不重复的那个节点，而last指针相当于工作指针，一直往后面搜索。

~~~cpp
if (pHead == nullptr || pHead->next == nullptr) { return pHead; }
	ListNode *Head = (ListNode*)malloc(sizeof(struct ListNode));
	ListNode* pre = (ListNode*)malloc(sizeof(struct ListNode));
	ListNode* cur = (ListNode*)malloc(sizeof(struct ListNode));
	Head->next = pHead;
	pre = Head; //pre相当于原来节点的前一个节点
	cur = Head->next; //cur相当于 原来的节点
	while (cur != nullptr) {
		if (cur->next != nullptr && cur->val == cur->next->val) {
			// 找到最后的一个相同节点
			while (cur->next != nullptr && cur->val == cur->next->val) {
				cur = cur->next;
			}
			pre->next = cur->next; //这里等于cur->next真的很棒
			cur = cur->next;
		}
		else {
			pre = pre->next;
			cur = cur->next;
		}
	}
	return Head->next;
~~~



**二刷：**

**1、三指针法，可以将元素开辟到栈上**

~~~cpp
ListNode* deleteDuplication(ListNode* pHead)
{

    if(pHead == nullptr || pHead->next == nullptr) return pHead;
    ListNode dummpyHead(0);
    dummpyHead.next = pHead;
    ListNode *pre = &dummpyHead;
    ListNode *cur = dummpyHead.next;//cur是真正工作的节点
    while(cur != nullptr){
        if(cur->next != nullptr && cur->val == cur->next->val){
            while(cur->next != nullptr && cur->val == cur->next->val)
            {
                cur = cur->next;
            }
            pre->next = cur->next;//这里还不要马上把 pre 赋值过来
            cur = cur->next;
        }else{
            pre = pre->next;
            cur = cur->next;
        }
    }
    return dummpyHead.next;
}
~~~



**变种：删除链表中的重复结点，保留一个重复点**

在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->3->4->5

~~~cpp
ListNode* deleteDuplication(ListNode* pHead)
{
    if (pHead == nullptr) return nullptr;
    ListNode* node = (ListNode*)malloc(sizeof(struct ListNode));
    node = pHead;
    while (node != nullptr) {

        if (node->next!=nullptr && node->val == node->next->val) {//这里千万要判断node->next也不为空才可以
            while (node->next != nullptr && node->val == node->next->val) {
                node->next = node->next->next;
            }
        }
        node = node->next;
    }
    return pHead;
}
~~~



**另一种写法**

~~~cpp
ListNode* deleteDuplication(ListNode* pHead)
{
	if (pHead == nullptr || pHead->next == nullptr) return pHead;
	ListNode dummpyHead(0);
	dummpyHead.next = pHead;
	ListNode* pre = &dummpyHead;
	ListNode* cur = dummpyHead.next;
	while (cur != nullptr) {
		if (cur->next != nullptr && cur->val == cur->next->val) {
			while (cur->next != nullptr && cur->val == cur->next->val)
			{
				cur = cur->next;
			}
			pre->next = cur;
			pre = pre->next;
			cur = cur->next;
		}
		else {
			pre = pre->next;
			cur = cur->next;
		}

	}
	return dummpyHead.next;
}
~~~

<p id = "二叉树的下一个结点"></p>

**No57、二叉树的下一个结点**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/9023a0c988684a53960365b889ceaf5e?tpId=13&&tqId=11210&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。 



**1、没有思路，自己瞎写的，错误**

~~~cpp
TreeLinkNode* GetNext(TreeLinkNode* pNode)
{
    if (pNode == nullptr) return nullptr;
    if (pNode->next == nullptr) {
        if (pNode->right == nullptr) return nullptr;
        else
            return pNode->right;
    } 
    if (pNode->left == nullptr && pNode->right == nullptr) return pNode->next;
    if (pNode->left == nullptr) return pNode->right;
    if (pNode->right == nullptr) return pNode->next;
}
~~~

画了图来分析，没有父亲节点再分情况讨论

如果无左右孩子，则返回父亲节点

无左孩子返回右孩子，无右孩子则返回父亲节点



**2、牛客网上做法**

分析可知：

 1.二叉树为空，则返回空； 

  2.节点右孩子存在，则设置一个指针从该节点的右孩子出发，一直沿着指向左子结点的指针找到的叶子节点即为下一个节点； 

   3.右孩子不存在，如果节点不是根节点，如果该节点是其父节点的左孩子，则返回父节点；否则继续向上遍历其父节点的父节点，重复之前的判断，返回结果。

~~~cpp
TreeLinkNode* GetNext(TreeLinkNode* pNode)
{
	if (pNode == nullptr)
			return nullptr;
	if (pNode->right != nullptr)
	{
		pNode = pNode->right;
		while (pNode->left != nullptr)
			pNode = pNode->left;
		return pNode;
	}
	while (pNode->next != nullptr)
	{
		TreeLinkNode* proot = pNode->next;
		if (proot->left == pNode)
			return proot;
		pNode = pNode->next;
	}
	return nullptr;
}
~~~



**3、第二种写法的变种**

~~~cpp
TreeLinkNode* GetNext(TreeLinkNode* pNode)
    {
	if (pNode == nullptr)
		return nullptr;
	TreeLinkNode* node = nullptr;
	if (pNode->right != nullptr) {//如果当前节点有右子树,则右子树最左边的那个节点就是
		node = pNode->right;
		while (node->left != nullptr)
			node = node->left;
		return node;
	}
	node = pNode;
	while (node->next != nullptr && node == node->next->right) {//找到当前节点是其父亲节点的左孩子的那个节点，然后返回其父亲节点，如果当前节点没有右子树
		node = node->next;
	}
	return node->next;
    }
~~~



**二刷：**

**1、继续刷起来，也是很好的题目**

运行时间：2ms   占用内存：480k

~~~cpp
TreeLinkNode* GetNext(TreeLinkNode* pNode)
{
    if(pNode == nullptr) return nullptr;
    TreeLinkNode *node = nullptr;
    if(pNode->right != nullptr){
        node = pNode->right;
        while(node->left != nullptr){
            node = node->left;
        }
        return node;
    }

    node = pNode;
    while(node->next != nullptr && node == node->next->right)
        node = node->next;
    return node->next;
}
~~~

<p id = "对称的二叉树"></p>


**No58、对称的二叉树**

 <font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/ff05d44dfdb04e1d83bdbdab320efbcb?tpId=13&&tqId=11211&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

请实现一个函数，用来判断一棵二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。 

**示例1**

**输入**

~~~
{8,6,6,5,7,7,5}
~~~
**返回值**

~~~
true
~~~
**示例2**

**输入**

~~~
{8,6,9,5,7,7,5}
~~~
**返回值**

~~~
false
~~~



**1、递归法比较好做，也很方便**

~~~cpp
bool isEqual(TreeNode*node1,TreeNode*node2){
    if(node1==nullptr && node2 ==nullptr)  return true;
    if(node1 ==nullptr || node2==nullptr) return false;//减少逻辑判断
    if(node1->val == node2->val) {
        return isEqual(node1->left,node2->right) && isEqual(node1->right,node2->left);//注意这里是右左，左右来进行判断

    }else
        return false;
}
bool isSymmetrical(TreeNode* pRoot) {
    if(pRoot==nullptr) return true;//这里是返回true的
    return isEqual(pRoot->left,pRoot->right);
}
~~~



**二刷：**

**1、对称 是指 8 6 6 5 7 7 5这样的对称，我的左子树要跟你的右子树一样才叫对称**

运行时间：2ms 占用内存：380k

~~~cpp
bool isEqual(TreeNode*node1, TreeNode*node2){
    if(node1 == nullptr && node2 == nullptr) return true;
    if(node1 == nullptr || node2 == nullptr) return false;
    if(node1->val != node2->val) return false;

    return isEqual(node1->left, node2->right) && isEqual(node1->right, node2->left);
}

bool isSymmetrical(TreeNode* pRoot)
{
    if(pRoot == nullptr) return true;
    return isEqual(pRoot->left, pRoot->right);
}
~~~

<p id = "按之字形顺序打印二叉树"></p>


**No59、按之字形顺序打印二叉树**

 <font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/91b69814117f4e8097390d107d2efbe0?tpId=13&&tqId=11212&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。 

**示例1**

**输入**

~~~
{8,6,10,5,7,9,11}
~~~
**返回值**

~~~
[[8],[10,6],[5,7,9,11]]
~~~



**1、注意左右子树在两个栈中的入栈顺序**

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
	vector<vector<int>> result;
	if (pRoot == nullptr) return result;
	stack<TreeNode*> left_right_st;
	stack<TreeNode*> right_left_st;
	left_right_st.push(pRoot);
	while (left_right_st.size() ||  right_left_st.size()) {
		if (!left_right_st.empty()) {
			vector<int> temp;
			TreeNode* node;
			while (!left_right_st.empty()) {
				node = left_right_st.top();
				temp.push_back(node->val);
				if (node->left)//这里先左再右
					right_left_st.push(node->left);
				if (node->right)
					right_left_st.push(node->right);
				left_right_st.pop();
			}
			result.push_back(temp);
		}

		if (!right_left_st.empty()) {
			vector<int> temp;
			TreeNode* node;
			while (!right_left_st.empty()) {
				node = right_left_st.top();
				temp.push_back(node->val);
				if (node->right)//这里需要是先右再左
					left_right_st.push(node->right);
				if (node->left)
					left_right_st.push(node->left);
				right_left_st.pop();
			}
			result.push_back(temp);
		}

	}
	return result;
}
~~~



**2、稍微优化一下代码**

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
	vector<vector<int>> result;
	if (pRoot == nullptr) return result;
	stack<TreeNode*> left_right_st;
	stack<TreeNode*> right_left_st;
	left_right_st.push(pRoot);
	while (left_right_st.size() ||  right_left_st.size()) {
		vector<int> temp;
		TreeNode* node;
		if (!left_right_st.empty()) {
			while (!left_right_st.empty()) {
				node = left_right_st.top();
				temp.push_back(node->val);
				if (node->left)
					right_left_st.push(node->left);
				if (node->right)
					right_left_st.push(node->right);
				left_right_st.pop();
			}
			result.push_back(temp);
			
		}
		vector<int>().swap(temp);
		if (!right_left_st.empty()) {
			while (!right_left_st.empty()) {
				node = right_left_st.top();
				temp.push_back(node->val);
				if (node->right)
					left_right_st.push(node->right);
				if (node->left)
					left_right_st.push(node->left);
				right_left_st.pop();
			}
			result.push_back(temp);
		}

	}
	return result;
}
~~~



**3、只用一个队列来做，很不错的想法**

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
	vector<vector<int>> result;
	if (pRoot == nullptr) {
		return result;
	}
	queue<TreeNode*> q;
	q.push(pRoot);
	bool isLeft = false;
	while (!q.empty()) {
		int rowLen = q.size();
		vector<int> temp;
		while(rowLen--) {
			TreeNode* curNode = q.front();
			q.pop();
			if (curNode != nullptr) {
				temp.push_back(curNode->val);
				if (curNode->left)q.push(curNode->left);
				if (curNode->right)q.push(curNode->right);
			}
		}
		isLeft = !isLeft;
		if (!isLeft) {
			result.push_back(vector<int>(temp.rbegin(), temp.rend()));//注意这里是翻转一下的
		}
		else {
			result.push_back(temp);
		}
	}
	return result;
}
~~~



**二刷：**

**1、算是二叉树的层次遍历的一种变形吧，果然还是第一反应想到这种做法**

运行时间：4ms  占用内存：360k

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
    if(pRoot == nullptr) return vector<vector<int>>();
    vector<vector<int>> result;
    stack<TreeNode*> left_right,right_left;
    left_right.push(pRoot);
    TreeNode*node = nullptr;
    vector<int> temp;
    while(!left_right.empty() || !right_left.empty()){
        vector<int>().swap(temp);
        while(!left_right.empty()){
            node = left_right.top();
            temp.push_back(node->val);
            left_right.pop();
            if(node->left) right_left.push(node->left);
            if(node->right) right_left.push(node->right);
        }
        if(temp.size() > 0)    result.push_back(std::move(temp));

        vector<int>().swap(temp);
        while(!right_left.empty()){
            node = right_left.top();
            temp.push_back(node->val);
            right_left.pop();
            if(node->right) left_right.push(node->right);
            if(node->left) left_right.push(node->left);

        }
        if(temp.size() > 0)   result.push_back(std::move(temp));// 可能走到头了，也就是此时temp是个空，不能把空的放在结果了
    }
    return std::move(result);
}
~~~



**2、优化一下**

运行时间：3ms  占用内存：504k

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
    if(pRoot == nullptr) return vector<vector<int>>();
    vector<vector<int>> result;
    stack<TreeNode*> left_right,right_left;
    left_right.push(pRoot);
    TreeNode*node = nullptr;

    while(!left_right.empty() || !right_left.empty()){
        if(!left_right.empty()){
            vector<int> temp;
            while(!left_right.empty()){
                node = left_right.top();
                temp.push_back(node->val);
                left_right.pop();
                if(node->left) right_left.push(node->left);
                if(node->right) right_left.push(node->right);
            }
            result.push_back(std::move(temp));
        }

        if(!right_left.empty()){
            vector<int> temp;
            while(!right_left.empty()){
                node = right_left.top();
                temp.push_back(node->val);
                right_left.pop();
                if(node->right) left_right.push(node->right);
                if(node->left) left_right.push(node->left);

            }
            result.push_back(std::move(temp));
        }
    }
    return std::move(result);
}
~~~

<p id = "把二叉树打印成多行"></p>


**No60、把二叉树打印成多行**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/445c44d982d04483b04a54f298796288?tpId=13&&tqId=11213&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。 

**示例1**

**输入**

~~~
{8,6,10,5,7,9,11}
~~~
**返回值**

~~~
[[8],[6,10],[5,7,9,11]]
~~~



**1、队列做法，保存每层的节点个数**

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
	vector<vector<int>> result;
	if (pRoot == nullptr) return result;
	queue<TreeNode*> q;
	q.push(pRoot);
	while (!q.empty()) {
		int len = q.size();//利用len保存每层的个数
		vector<int> temp;
		while (len--) {
			TreeNode* node = q.front();
			q.pop();
			temp.push_back(node->val);
			if (node->left)	  q.push(node->left);//为空才push进去,而不是if(node) 然后直接push左右两个节点
			if (node->right)  q.push(node->right);;
		}
		result.push_back(temp);
	}
	return result;
}
~~~



**二刷：**

**1、跟59有点像**

运行时间：2ms  占用内存：508k

~~~cpp
vector<vector<int> > Print(TreeNode* pRoot) {
    if(pRoot == nullptr) return vector<vector<int>>();

    queue<TreeNode*> q;
    q.push(pRoot);
    vector<vector<int>> result;
    while(!q.empty()){
        int size = q.size();
        vector<int> temp;
        while(size--){
            pRoot = q.front();
            q.pop();
            temp.push_back(pRoot->val);
            if(pRoot->left)  q.push(pRoot->left);
            if(pRoot->right)  q.push(pRoot->right);

        }
        if(temp.size() > 0) result.push_back(temp);
    }
    return std::move(result);
}
~~~

<p id = "序列化二叉树"></p>

**No61、序列化二叉树** 

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/cf7e25aa97c04cc1a68c8f040e71fb84?tpId=13&&tqId=11214&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

请实现两个函数，分别用来序列化和反序列化二叉树

二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，从而使得内存中建立起来的二叉树可以持久保存。序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，序列化的结果是一个字符串，序列化时通过 某种符号表示空节点（#），以 ！ 表示一个结点值的结束（value!）。

二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。

例如，我们可以把一个只有根节点为1的二叉树序列化为"1,"，然后通过自己的函数来解析回这个二叉树。



**1、看的大神的写法，这种写法超级棒，代码逻辑非常好**

但是牛客上并没有考虑到负数的情况，力扣上的题目有负数的限制

~~~C++
class Solution {
private:
	string SerializeCore(TreeNode* root) {
		if (root == nullptr) {
			return "#!";
		}
		string str;
		str = to_string(root->val) + "!";
		str += SerializeCore(root->left);
		str += SerializeCore(root->right);
		return str;
	}

	TreeNode* DeserializeCore(char*& str) {
		if (*str == '#') {
			str++;
			return nullptr;
		}
		int num = 0;
		while (*str != '!') {
			num = num * 10 + *str - '0';
			str++;
		}
		TreeNode* node = new TreeNode(num);
		node->left = DeserializeCore(++str);
		node->right = DeserializeCore(++str);
		return node;
	}
public:
	char* Serialize(TreeNode* root) {
		string str = SerializeCore(root);
		char* res = new char[str.size()];
		for (int i = 0; i < str.size(); i++) {
			res[i] = str[i];
		}
		return res;
	}

	TreeNode* Deserialize(char* str) {
		return DeserializeCore(str);
	}
};
~~~



**力扣上的要求会有负数的限制**

~~~cpp
class Codec {
public:

	TreeNode* deserializeCore(string& data, int &i) {
	if (data[i] == '#') {
			i++;
			return nullptr;
		}
		int num = 0, negativeFlag=1;
		if (data[i] == '-') {
			negativeFlag = -1;
			i++;
		}
		while (data[i] != '!') {		
			num = num * 10 + data[i] - '0';
			i++;
		}
		num = num * negativeFlag;


		TreeNode* root = new TreeNode(num);
		root->left = deserializeCore(data, ++i);
		root->right = deserializeCore(data, ++i);
		return root;
	}

public:

	// Encodes a tree to a single string.
	string serialize(TreeNode* root) {
		if (root == nullptr) return "#!";
		string str = to_string(root->val) + '!';
		str += serialize(root->left);
		str += serialize(root->right);
		return str;
	}

	// Decodes your encoded data to tree.
	TreeNode* deserialize(string data) {
		int i = 0;
		return deserializeCore(data, i);
	}
};
~~~



**二刷：**

**1、挺好，还是要再刷一下**

​    2ms	488KB

~~~cpp
/*
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
    TreeNode(int x) :
            val(x), left(NULL), right(NULL) {
    }
};
*/
class Solution {
private:
	string SerializeCore(TreeNode* root) {
		if(root == nullptr) {
            return "#!";
        }
        
        string str;
        str +=to_string(root->val) + '!';
        str +=SerializeCore(root->left);
        str +=SerializeCore(root->right);
		return str;
	}

	TreeNode* DeserializeCore(char*& str) {
		if(*str == '#'){
            str++;
            return nullptr;
        }
        int num = 0;
        while( *str != '!'){
            num = num*10 + (*str)-'0';
            str++;
        }
        TreeNode *node = new TreeNode(num);
        node->left = DeserializeCore(++str);
        node->right = DeserializeCore(++str);
        
        return node;
	}

public:
	char* Serialize(TreeNode* root) {
		string str = SerializeCore(root);
        char *chs = new char[str.size()];
        for(int i = 0;i<str.size();++i){
            chs[i] = str[i];
        }
        return chs;

	}

	TreeNode* Deserialize(char* str) {
		return DeserializeCore(str);
	}
};
~~~

<p id = "二叉搜索树的第"></p>


**No62、二叉搜索树的第K个节点**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/ef068f602dde4d28aab2b210e859150a?tpId=13&&tqId=11215&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。

**示例1**

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



**1、笨方法，全部保存下来**

会超时，这个方法不行



**2、中序遍历其实就是从小到大的排列顺序**

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



**3、中序遍历模板解法**

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



二刷：

**1、其实就是中序遍历**

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

<p id = "数据流中的中位数"></p>

**No63、数据流中的中位数**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/9be0172896bd43948f8a32fb954e1be1?tpId=13&&tqId=11216&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。



**1、自己的想法与做法**

~~~cpp
class Solution {
public:
	void Insert(int num)
	{
		result.push_back(num);
	}

	double GetMedian()
	{
		sort(result.begin(), result.end());
		int len = result.size();
		if (len % 2 == 0) 
            return (result[len / 2] + result[-1 + len / 2]) / 2.0//注意这里是2.0 这样才能返回值为double
		else
			return result[len / 2];
	}

	vector<int> result;
};
~~~



**2、借助两个堆，非常精妙的方法**

这里讨论两种方法：
一：代码复杂：减少不必要插入，提高效率
二：代码大大简化：可能有不必要插入，效率有所降低
==============思路解析=================================
思考：如何得到一个数据流中的中位数？
如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。
如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
一：代码复杂：
* 分析：对于海量数据和流的数据，用最大堆和最小堆来管理
* 我们希望 数据分为[小]|[大]两个部分，细化一点
[最大堆 |   左边最大 leftMax]
右边最小rightMin | 最小堆]


* 定义一个规则：保证左边和右边个数相差不大于1，且左边小于右边
* 1.数据是偶数的时候 insert的数据进入 [右边，最小堆]中
*  1.1当插入的数字cur > leftMax时，直接插入到[右边，最小堆]中
*  1.2当插入的数字cur < leftMax时，为了保证左边小于右边，
*      先把cur插入[最大堆|左边最大leftMax]中，
*      然后把leftMax放入[右边最小rightMin|最小堆]中
*      就可以保证： 左边 < 右边
* 2.数据是奇数的时候 insert的数据进入 [左边，最大堆]中
*      2.1当插入的数字cur < rightMin时，直接插入到[左边，最小堆]中
*      2.2当插入的数字cur > rightMin时，为了保证左边小于右边，
*      先把cur插入[右边最小rightMin|最小堆]中，
*      然后把rightMin放入[最大堆|左边最大leftMax]中
*      就可以保证： 左边 < 右边
* 最后：
* 如果是偶数：中位数mid= (leftMax+right)/2
* 如果是奇数：中位数mid= leftMax 因为先插入到左边，再插入到右边，为奇数时，中位数就是mid



~~~cpp
class Solution {

public:
void Insert(int num)
	{
	count += 1; //数据是奇数的时候 insert的数据进入 [左边，最大堆]中
	if (count % 2 == 1)//奇数
	{
		if (big_heap.empty())  big_heap.push(num); //直接插入到[左边，最小堆]中
		else {
			int rightMin = small_heap.top();
			if (num <= rightMin)  big_heap.push(num);
			else {
				small_heap.push(num);  //先把cur插入[右边最小rightMin|最小堆]中
				big_heap.push(rightMin);  //然后把rightMin放入[最大堆|左边最大leftMax]中
				small_heap.pop();
			}
		}
	}
	else {

		if (small_heap.empty()) { //当第一个元素 比 第二个元素大的时候，会造成左边比右边大的情形，因此要加上判断
//当第一个数据比第二个大的时候，比如[5,2,3,4,1,6,7,0,8]的情况，会造成最大堆的唯一数据，比最小堆的唯一数据大的情况，这跟思想就不同了，因此需要加上一层判断。
			if (num > big_heap.top())
			{
				small_heap.push(num);
			}
			else
			{
				small_heap.push(big_heap.top());
				big_heap.pop();
				big_heap.push(num);
			}
		}
		else {
			int leftMax = big_heap.top();
			if (num >= leftMax)  small_heap.push(num);//直接插入到[右边，最小堆]中
			else {
				big_heap.push(num);//先把cur插入[右边最小rightMin|最小堆]中，
				small_heap.push(big_heap.top()); //然后把rightMin放入[最大堆|左边最大leftMax]中
				big_heap.pop();
			}
		}
	}		
}

double GetMedian()
{
	if (count & 0x1) {//看见这个0x你肯定知道这就是16进制表示了，而0x1就是最后一位肯定是1。偶数的二进制表示中最后一位肯定是0，
		//如果是奇数那肯定是1，所以一个整数与0x1做按位与运算得到的结果是0或者1就可以判断出这个整数是偶数还是奇数。
		return big_heap.top();
	}
	else {
		return double((small_heap.top() + big_heap.top()) / 2.0);
	}
}
private:
	int count = 0;
	priority_queue<int, vector<int>, less<int>> big_heap;        // 左边一个大顶堆
	priority_queue<int, vector<int>, greater<int>> small_heap;   // 右边一个小顶堆
};
~~~



**3、将上述代码优化**

取消了判断过程，直接插入到对面的堆中，然后再转移到自己的堆中
* 但是！！！时间复杂度提高，每次都插入时间复杂度O(log n)这是很可怕的 
* 定义一个规则：不要判断了，保证小顶堆中最小的数也大于大顶堆中的数据
* 1.数据是偶数的时候 insert的数据进入 [右边，最小堆]中
*      先把cur插入[最大堆|左边最大leftMax]中，
*      然后把leftMax放入[右边最小rightMin|最小堆]中
*      就可以保证： 左边 < 右边
* 2.数据是奇数的时候 insert的数据进入 [左边，最大堆]中
*      先把cur插入[右边最小rightMin|最小堆]中，
*      然后把rightMin放入[最大堆|左边最大leftMax]中
*      就可以保证： 左边 < 右边
* 最后：
* 如果是偶数：中位数mid= (leftMax+right)/2 
* 如果是奇数：中位数mid= leftMax

~~~cpp
class Solution {
public:
void Insert(int num)
	{
		count += 1;
		// 元素个数是偶数时,将大顶堆堆顶放入小顶堆
        if (count % 2 == 0) {
			big_heap.push(num);
			small_heap.push(big_heap.top());
			big_heap.pop();
		}
		else {
			small_heap.push(num);
			big_heap.push(small_heap.top());
			small_heap.pop();
		}
	}

double GetMedian()
{
	if (count & 0x1) {//看见这个0x你肯定知道这就是16进制表示了，而0x1就是最后一位肯定是1。偶数的二进制表示中最后一位肯定是0，
		//如果是奇数那肯定是1，所以一个整数与0x1做按位与运算得到的结果是0或者1就可以判断出这个整数是偶数还是奇数。那就返回左边大顶堆得最小值即可
		return big_heap.top();
	}
	else {
		return double((small_heap.top() + big_heap.top()) / 2.0);
	}
}
private:
	int count = 0;
	priority_queue<int, vector<int>, less<int>> big_heap;        // 左边一个大顶堆
	priority_queue<int, vector<int>, greater<int>> small_heap;   // 右边一个小顶堆
	// 大顶堆所有元素均小于等于小顶堆的所有元素.
};
~~~



**二刷：**

**1、很经典的大小堆方法**

运行时间：3ms  占用内存：484k

~~~cpp
class Solution {
private:
    int count = 0;
    priority_queue<int,vector<int>,less<int>> left_big;
    priority_queue<int,vector<int>,greater<int>> right_small;
public:
    void Insert(int num)
    {
        count++;
        if(count%2 == 1){ //奇数
            right_small.push(num);
            left_big.push(right_small.top());
            right_small.pop();
        }else{
            
            left_big.push(num);
            right_small.push(left_big.top());
            left_big.pop();
        }
    }

    double GetMedian()
    { 
    
        if(count %2 == 1) return left_big.top();
        else{
            return double((left_big.top() + right_small.top())/2.0);
        }
    }

};
~~~



[剑指 Offer 41. 数据流中的中位数](https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/)

如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

- void addNum(int num) - 从数据流中添加一个整数到数据结构中。
- double findMedian() - 返回目前所有元素的中位数。

**示例 1：**

```
输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
```

**示例 2：**

```
输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]
```



执行用时：292 ms, 在所有 C++ 提交中击败了62.18%的用户

内存消耗：41.9 MB, 在所有 C++ 提交中击败了25.00%的用户

~~~cpp
class MedianFinder {
public:
    /** initialize your data structure here. */
    MedianFinder() {
        this->count = 0;
    }
    
    void addNum(int num) {

        count++;
        if(count %2 == 1){//奇数
            right_small.push(num);
            left_big.push(right_small.top());
            right_small.pop();
        }else{
            left_big.push(num);
            right_small.push(left_big.top());
            left_big.pop();
        }
    }
    
    double findMedian() {
        if(count%2 == 1){//输入总数据为奇数，则在左边大顶堆中
        return double(left_big.top());

        }else{

            return double( (left_big.top()+right_small.top())/2.0);
        }
    }

    private:
    int count;
    priority_queue<int,vector<int>,less<int>> left_big;
    priority_queue<int,vector<int>,greater<int>> right_small;
};

~~~

<p id = "滑动窗口的最大值"></p>



**No64、滑动窗口的最大值**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/1624bc35a45c42c0bc17d17fa0cba788?tpId=13&&tqId=11217&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。

例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 

针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个：

 {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
窗口大于数组长度的时候，返回空

**示例1**

**输入**

~~~
[2,3,4,2,6,2,5,1],3
~~~
**返回值**

~~~
[4,4,6,6,6,5]
~~~



**1、自己想的，边界条件很多**

总的来说，利用 low high maxIndex三个指针维护整个数组的情况

1、滑动窗口大小为0，num数组为空，滑动窗口大于 num.size 也不符合规矩，直接返回空

2、先考虑第一个滑动窗口的情况，走一遍，找出最大值的index

~~~cpp
 vector<int> maxInWindows(const vector<int>& num, unsigned int size)
    {
	vector<int> result;
	if (num.size() == 0 || size == 0 || size > num.size()) return result;
	if (size == num.size()) {
        result.push_back(*max_element(num.begin(), num.end())); 
         return result;
      }

	int low = 0, high = size - 1, maxIndex = 0;
	int len = num.size();
	for (int i = 0; i <= high; ++i) {
		if (num[i] > num[maxIndex])  maxIndex = i;
	}
	//result.push_back(num[maxIndex]); //这里不能直接先push，要不然第一个滑动窗口的最大值会push两次
	while (high <= len - 1) {
		if (maxIndex == low - 1) {//如果maxIndex还是上个窗口的最低索引，需要更新
			maxIndex = low;
			for (int i = low; i <= high; ++i)
				if (num[i] > num[maxIndex])  maxIndex = i;

		}
		else if (num[maxIndex] < num[high]) //如果最新添加进来的high索引比原窗口中的所有值都要大，也要更新
		{
			maxIndex = high;
		}
		high++;
		low++;

		result.push_back(num[maxIndex]);

	}
	return result;
    }
~~~



**2、第二种做法，比较水，借助优先队列来做，小顶堆**

~~~cpp
vector<int> maxInWindows(const vector<int>& num, unsigned int size)
{
	vector<int> result;
	if (num.size() == 0 || size == 0 || size > num.size()) return result;
	priority_queue<int> pri_que;
	int count = 0;
	for (int i = 0; i < num.size()-size+1; ++i) {
		while (count < size) {
			pri_que.push(num[count + i]);
			count++;
		}
		count = 0;
		result.push_back(pri_que.top());
		while (!pri_que.empty()) {
			pri_que.pop();
		}
	}
	return result;
}
~~~



**3、借助双端队列来做，最为高效的一种方法**

~~~cpp
vector<int> maxInWindows(const vector<int>& num, unsigned int size)
{
    vector<int>res;
    int len = num.size();
    if (len == 0 || size == 0 || size > len)	return res;
    deque<int>s;  //deque s中存储的是num的下标
    for (int i = 0; i < len; ++i)
    {
        while (!s.empty() && num[s.back()] <num[i])//当前值比队列从后往前的大，成为下一个待选值
            s.pop_back();
        while (!s.empty() && i - s.front() + 1 > size)//最大值已不在窗口中
            s.pop_front();
        s.push_back(i);

        if (i + 1 >= size)//当滑动窗口首地址i大于等于size时才开始写入窗口最大值
            res.push_back(num[s.front()]);
    }
    return res;
}
~~~



**二刷：**

**1、优先队列，其实也就是大顶堆来做**

运行时间：3ms  占用内存：376k

~~~cpp
vector<int> maxInWindows(const vector<int>& num, unsigned int size)
{

    if(size > num.size() || size == 0 || num.size() == 0) return vector<int>();
    int len = num.size(),count = 0;
    priority_queue<int> pq;
    vector<int> result;
    for(int i = 0;i <= len - size; ++i){
        while(count < size){
            pq.push(num[i+count]);
            count++;
        }
        count = 0;
        result.push_back(pq.top());
        while(!pq.empty()){
            pq.pop();
        }

    }
    return result;
}
~~~



**2、单调栈来做应该是最快的**

运行时间：3ms  占用内存：480k

~~~cpp
vector<int> maxInWindows(const vector<int>& num, unsigned int size)
{

    if(size > num.size() || size == 0 || num.size() == 0) return vector<int>();
    int len = num.size();
    vector<int> result;
    deque<int> dq;
    for(int i = 0; i< len; ++i){
        while(!dq.empty() && num[i] > num[dq.back()]){//始终维持队首是最大的，如果新元素比队尾大，
            //那就直接把队尾的元素删掉
            dq.pop_back();
        }
        while(!dq.empty() && i - dq.front() >= size){// 当队列投的值已经是上一个窗口中的最大值后
            dq.pop_front();
        }
        dq.push_back(i);
        if(i + 1 >= size){
            result.push_back(num[dq.front()]);
        }
    }
    return result;
}
~~~

<p id = "矩阵中的路径"></p>


**No65、矩阵中的路径**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/c61c6999eecb4b8f88a98f66b273a3cc?tpId=13&&tqId=11218&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。

**示例1**

**输入**

```
"ABCESFCSADEE",3,4,"ABCCED"
```

**返回值**

~~~
true
~~~

**示例2**

**输入**

```
"ABCESFCSADEE",3,4,"ABCB"
```

**返回值**

```
false
```



**1、DFS**

这道题是典型的深度优先遍历DFS的应用，原二维数组就像是一个迷宫，可以  //上下左右四个方向行走
我们的二维数组board中每个数都作为起点和给定的字符串做匹配，我们需要
一个和原二维数组board等大小的visited数组，是bool型的，用来记录当前位置
是否被访问过。因为题目要求一个cell只能被访问一次。
如果二维数组的当前字符和目标字符串str对应的字符相等，则对其上下左右四个邻字
符串分别调用dfs的递归函数，只要有一个返回true，那么就表示找到对应的字符串 

~~~cpp


bool dfs(vector<vector<char>> &board, char* str, int index, int x, int y,
	vector<vector<bool>>& visited) 

{
	if (index == strlen(str)) return true;//搜寻超过路径长度，符合条件，返回true，//此时已经超过最大程度了 strlen返回不带 ‘\0’的长度，此时str[k]已经越界了，所以这个判断一定要放在函数开头，如果放在if之后，str[k]会越界
	if ((x < 0) || (y < 0) || (x >= board.size()) || (y >= board[0].size()))
		return false;//访问越界，终止，返回false
	if (visited[x][y]) return false;//之前访问过，剪枝
	if (board[x][y] != str[index]) return false;//不相等，剪枝
	visited[x][y] = true;
	if (dfs(board, str, index + 1, x, y - 1, visited) || //上
		dfs(board, str, index + 1, x, y + 1, visited) ||     //下
		dfs(board, str, index + 1, x - 1, y, visited) ||     //左
		dfs(board, str, index + 1, x + 1, y, visited))      //右
		return true; //有符合要求的

	visited[x][y] = false;//记得此处改回false，以方便下一次遍历搜索。
	return false;
}

bool hasPath(char* matrix, int rows, int cols, char* str)
{
	if (str == NULL || rows <= 0 || cols <= 0)
		return false;
	vector<vector<char>> board(rows, vector<char>(cols));
	for (int i = 0; i < rows; ++i) {//将matrix装入二维数组board中
		for (int j = 0; j < cols; ++j) {
			board[i][j] = matrix[i * cols + j];
		}
	}
	vector<vector<bool>> visited(rows, vector<bool>(cols, false));
	for (int i = 0; i < rows; ++i) {
		for (int j = 0; j < cols; ++j) {
			if (dfs(board, str, 0, i, j, visited) == true)
				return true;//以矩阵board中的每个字符为起点进行广度优先搜索
			//找到一个符合条件的即返回true.
		}
	}
	return false;//遍历完都没找到匹配的路径，返回false
}

~~~



**2、回溯法  写法非常的好啊**

~~~cpp
/*参数说明  k 字符串索引初始为0即先判断字符串的第一位*/
bool judge(char* matrix, int rows, int cols, int i, int j, char* str, int k, bool* flag)
{
	//因为是一维数组存放二维的值，index值就是相当于二维数组的（i，j）在一维数组的下标
	int index = i * cols + j;
	//flag[index]==true,说明被访问过了，那么也返回true;
	if (i < 0 || i >= rows || j < 0 || j >= cols || matrix[index] != str[k] || flag[index] == true)
		return false;
	//字符串已经查找结束，说明找到该路径了
	if (str[k + 1] == '\0') return true;
	//向四个方向进行递归查找,向左，向右，向上，向下查找
	flag[index] = true;//标记访问过 //要走的第一个位置置为true，表示已经走过了0

	  //回溯，递归寻找，每次找到了就给k加一，找不到，还原
	if (judge(matrix, rows, cols, i - 1, j, str, k + 1, flag)
		|| judge(matrix, rows, cols, i + 1, j, str, k + 1, flag)
		|| judge(matrix, rows, cols, i, j - 1, str, k + 1, flag)
		|| judge(matrix, rows, cols, i, j + 1, str, k + 1, flag))
	{
		return true;
	}

	//走到这，说明这一条路不通，还原，再试其他的路径
	flag[index] = false;
	return false;
}

bool hasPath(char* matrix, int rows, int cols, char* str)
{
	if (matrix == NULL || rows < 1 || cols < 1 || str == NULL) return false;
	bool* flag = new bool[rows * cols];
	memset(flag, false, rows * cols);
	for (int i = 0; i < rows; i++)
	{
		for (int j = 0; j < cols; j++)
		{
			if (judge(matrix, rows, cols, i, j, str, 0, flag))
			{
				return true;
			}
		}
	}
	delete[] flag;
	return false;
}
~~~



**二刷：**

**1、很经典的题目**

~~~cpp
bool hasPathCore(vector<vector<char>>& matrix, char* str, int row, int col,int index , vector<vector<bool>> &visit) {

	if (str[index] == '\0') return true;
	if (row<0 || row >= matrix.size() || col<0 || col >= matrix[0].size() || visit[row][col] == true || str[index] != matrix[row][col]) return false;
	visit[row][col] = true;

	if (hasPathCore(matrix, str, row + 1, col, index + 1,visit) ||
		hasPathCore(matrix, str, row - 1, col, index + 1, visit) ||
		hasPathCore(matrix, str, row, col + 1, index + 1, visit) ||
		hasPathCore(matrix, str, row, col - 1, index + 1, visit))
		return true;

	visit[row][col] = false;
	return false;
}

bool hasPath(char* matrix, int rows, int cols, char* str)
{
	vector<vector<char>> matri(rows, vector<char>(cols, ' '));
	for (int i = 0; i < rows; ++i) {
		for (int j = 0; j < cols; ++j) {
			matri[i][j] = matrix[i * cols + j];
		}
	}

	vector<vector<bool>> visit(rows, vector<bool>(cols, false));
	for (int i = 0; i < rows; i++) {
		for (int j = 0; j < cols; ++j) {
			if (hasPathCore(matri, str, i, j, 0,visit)) return true;
		}
	}
	return false;
}
~~~

<p id = "机器人的运动范围"></p>


**No66、机器人的运动范围**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/6e5207314b5241fb83f2329e89fdecc8?tpId=13&&tqId=11219&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

**示例1**

**输入**

~~~
5,10,10
~~~
**返回值**

~~~
21
~~~



**1、借助标记法，看的解释，其实很好理解和明白**

~~~cpp
bool canReach(int threshold, int x, int y) {
	int sum = 0;
	while (x > 0) {
		sum += x % 10;
		x /= 10;
	}
	while (y > 0) {
		sum += y % 10;
		y /= 10;
	}
	return sum <= threshold;
}

int movingCountCore(int threshold, int i, int rows,int j ,int cols, vector<vector<bool>>&visit) {
	if (i < 0 || i >= rows || j < 0 || j >= cols || !canReach(threshold, i, j) || visit[i][j] == true) return 0;
	//边界值不满足，不能到达或者已经走过了，也到达不了，返回0
	visit[i][j] = true; // 当前已经走过了，并且满足要求，所有后续return 要加上1

	return movingCountCore(threshold, i - 1, rows, j, cols, visit) + //分别是上下左右各个方向判断一下
		movingCountCore(threshold, i + 1, rows, j, cols, visit) +
		movingCountCore(threshold, i , rows, j-1, cols, visit) +
		movingCountCore(threshold, i, rows, j+1, cols, visit) + 1;

}
int movingCount(int threshold, int rows, int cols)
{
	vector<vector<bool>> visit(rows,vector<bool>(cols,false));
	return movingCountCore(threshold, 0,  rows, 0, cols, visit);
	
}
~~~



**2、标注借助法的简化版**

递归只要俩行就够了，helper(threshold, rows, cols, flags, i + 1, j) +  helper(threshold, rows, cols, flags, i, j + 1) + 1，不需要往回走，然后前面的判断i，j也不会小于零了  

因为是从（0 0 ），开始走的，所以只需要判断向上和向右的情况即可

~~~cpp
bool canReach(int threshold, int x, int y) {
	int sum = 0;
	while (x > 0) {
		sum += x % 10;
		x /= 10;
	}
	while (y > 0) {
		sum += y % 10;
		y /= 10;
	}
	return sum <= threshold;
}

int movingCountCore(int threshold, int i, int rows,int j ,int cols, vector<vector<bool>>&visit) {
	if (i >= rows || j >= cols || !canReach(threshold, i, j) || visit[i][j] == true) return 0;
	//边界值不满足，不能到达或者已经走过了，也到达不了，返回0
	visit[i][j] = true; // 当前已经走过了，并且满足要求，所有后续return 要加上1

	return  movingCountCore(threshold, i + 1, rows, j, cols, visit) +
		movingCountCore(threshold, i, rows, j+1, cols, visit) + 1;

}
int movingCount(int threshold, int rows, int cols)
{
	vector<vector<bool>> visit(rows,vector<bool>(cols,false));
	return movingCountCore(threshold, 0,  rows, 0, cols, visit);
	
}
~~~



**3、BFS**

~~~cpp
bool canReach(int threshold, int x, int y) {
	int sum = 0;
	while (x > 0) {
		sum += x % 10;
		x /= 10;
	}
	while (y > 0) {
		sum += y % 10;
		y /= 10;
	}
	return sum <= threshold;
}

int movingCount(int threshold, int rows, int cols)
{
	vector<vector<bool>> grid(rows,vector<bool>(cols,false));
	queue<pair<int, int>> que;
	if (canReach(threshold, 0, 0)) {
		que.push(make_pair(0, 0));
		grid[0][0] = true;
	}
	int cnt = 0;
	while (!que.empty()) {
		++cnt;
		int x, y;
		tie(x, y) = que.front();
		que.pop();
		if (x + 1 < rows && !grid[x + 1][y] && canReach(threshold, x + 1, y)) {
			grid[x + 1][y] = true;
			que.push(make_pair(x + 1, y));
		}
		if (y + 1 < cols && !grid[x][y + 1] && canReach(threshold, x, y + 1)) {
			grid[x][y + 1] = true;
			que.push(make_pair(x, y + 1));
		}
	}
	return cnt;
	
}
~~~



**二刷：**

**1、还是比较经典的方法**

运行时间：4ms  占用内存：504k

~~~cpp
int getValue(int row, int col) {
	int sum = 0;
	while (row != 0)
	{
		sum += row % 10;
		row = row / 10;
	}

	while (col != 0)
	{
		sum += col % 10;
		col = col / 10;
	}
	return sum;
}

void movingCountCore(int threshold, int rows, int cols, vector<vector<bool>>& visit, int row, int col, int &count) {
	if (row < 0 || col < 0 || row >= rows || col >= cols || visit[row][col] == true) return;
	if (getValue(row, col) > threshold) {
		visit[row][col] = true;
		return;
	}
	visit[row][col] = true;
	count++;

	movingCountCore(threshold, rows, cols, visit, row + 1, col, count);
	movingCountCore(threshold, rows, cols, visit, row - 1, col, count);
	movingCountCore(threshold, rows, cols, visit, row, col + 1, count);
	movingCountCore(threshold, rows, cols, visit, row, col - 1, count);

}


int movingCount(int threshold, int rows, int cols)
{
	if (rows < 0 || cols < 0) return 0;
	vector<vector<bool>> visit(rows, vector<bool>(cols, false));
	int count = 0;
	movingCountCore(threshold, rows, cols, visit, 0, 0, count);
	return count;

}
~~~

<p id = "剪绳子"></p>


**No67、剪绳子**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/57d85990ba5b440ab888fc72b0751bf8?tpId=13&&tqId=33257&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1），每段绳子的长度记为k[1],...,k[m]。请问k[1]x...xk[m]可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

**输入描述:**

```
输入一个数n，意义见题面。（2 <= n <= 60）
```

**输出描述:**

```
输出答案。
```

**示例1**

**输入**

```
8
```

**输出**

```
18
```



**1、很厉害的一种思路**

题目分析：

 * 先举几个例子，可以看出规律来。
 * 4 ： 2*2
 * 5 ： 2*3
 * 6 ： 3*3
 * 7 ： 2\*2\*3 或者4*3
 * 8 ： 2\*3\*3
 * 9 ： 3\*3\*3
 * 10：2\*2\*3\*3 或者4\*3\*3
 * 11：2\*3\*3*3
 * 12：3\*3\*3*3
 * 13：2\*2\*3\*3\*3 或者4\*3\*3\*3

 下面是分析：
 * 首先判断k[0]到k[m]可能有哪些数字，实际上只可能是2或者3。
 * 当然也可能有4，但是4=2*2，我们就简单些不考虑了。
 * 5<2*3,6<3*3,比6更大的数字我们就更不用考虑了，肯定要继续分。
 * 其次看2和3的数量，2的数量肯定小于3个，为什么呢？因为2*2*2<3*3，那么题目就简单了。
 * 直接用n除以3，根据得到的余数判断是一个2还是两个2还是没有2就行了。
 * 由于题目规定m>1，所以2只能是1*1，3只能是2*1，这两个特殊情况直接返回就行了。
 * 乘方运算的复杂度为：O(log n)，用动态规划来做会耗时比较多。


~~~cpp
int cutRope(int number) {

	if (number == 2) {
		return 1;
	}
	if (number == 3) {
		return 2;
	}
	int x = number % 3, y = number / 3;
	if (x == 0) {
		return pow(3, y);
	}
	else if (x == 1) {
		return 2 * 2 * pow(3, y - 1);
	}
	else 
		return 2 * pow(3, y);
	
}
~~~



**1-1、力扣上的一种讲解**

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：6 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
int cuttingRope(int n) {

    if(n<2) return 0;
    if(n<4) return n-1;
    int maxNum=1;
    while(n>4){
        maxNum*=3;
        n-=3;
    }
    maxNum*=n;
    return maxNum;
}
~~~



**2、一种DP讲解方法**

**讲解视频：**

https://www.bilibili.com/video/BV18E411T7dU?from=search&seid=16580267998265505121

~~~cpp
int cutRope(int number) {
    if (number == 2 || number == 3)
        return number - 1;
    vector<int> ans(number + 1,0);
    ans[0] = 1;
    ans[1] = 1;
    for (int i = 2; i <= number; ++i)
    {
        ans[i] = i - 1;//分为2 段 1 * （i-1）
        for (int j = 2; j < i; ++j)
        {
            ans[i] = max(ans[i], j * ans[i - j]); //一种是继续分割的情况
            ans[i] = max(ans[i], j * (i-j));//不在分割 就割成两段
        }
    }
    return ans[number];
}
~~~



**3、这种DP更容易懂一些**

讲解视频：https://www.bilibili.com/video/BV1C7411V7s6?from=search&seid=16580267998265505121

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：6 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
int cutRope(int number) {
    if (number < 2) return -1;
    if (number == 2 || number == 3)
        return number - 1;
    vector<int> ans(number + 1,0);
    int maxNum = -1;
    ans[1] = 1;
    ans[2] = 2;
    ans[3] = 3;//因为长度》=4，他们不需要拆，拆了反而会变小，对于小于4的情况我们直接开头处理
    for (int i = 4; i <= number; ++i)
    {
        for (int j = 1; j <= i/2; ++j)
        {
            maxNum = max(maxNum, ans[j] * ans[i - j]);
            ans[i] = maxNum;

        }

    }
    return ans[number];
}
~~~

j<=i/2 是因为 f(5) = f(1)*f(4)   f(5) = f(2)*****f(3)    f(5) = f(3)*****f(2)  

 f(5) = f(4)*****f(1)  ,可以看到走到后面去了有回来了，所以走一半即可，但一定要走到一半才行，不能小于i/2，必须是小于等于



**二刷：**

运行时间：3ms  占用内存：508k

~~~cpp
int cutRope(int number) {
    if(number <=3 ) return number - 1;
    vector<int> dp(number+1,0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    int maxNum = -1;
    for(int i = 4; i<= number; ++i){
        for(int j = 1; j <= i/2; ++j){
            maxNum = max(maxNum,dp[j] * dp[i-j]);
            dp[i] = maxNum;
        }
    }

    return dp[number];
}
~~~



**剪绳子-2（力扣54题）**

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m] 。

请问 k[0]\*k[1]\*...\*k[m] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：
~~~
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36


提示：

2 <= n <= 1000
~~~



**1、DP会溢出，只能用上述规律这一种方法来做了**

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：6.2 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
int cuttingRope(int n) {
    
    if(n<2) return 0;
    if(n<4) return n-1;
    long maxNum=1,mod = 1000000007;
    while(n>4){
        maxNum*=3;
        maxNum %=mod;
        n-=3;
    }
    maxNum*=n;
    maxNum %=mod;
    return maxNum;
    }
~~~
