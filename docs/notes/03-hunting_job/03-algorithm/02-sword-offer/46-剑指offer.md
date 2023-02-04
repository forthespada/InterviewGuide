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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202302042310919.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/07-resources/01-free/04-schoolSchample.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




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

