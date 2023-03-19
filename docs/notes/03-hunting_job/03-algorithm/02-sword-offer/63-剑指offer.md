---
layout:  post
category:  algorithm
title:  No63、数据流中的中位数
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No63、数据流中的中位数
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

## **No63、数据流中的中位数**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/9be0172896bd43948f8a32fb954e1be1?tpId=13&&tqId=11216&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。



### **1、自己的想法与做法**

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



### **2、借助两个堆，非常精妙的方法**

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



### **3、将上述代码优化**

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



### **二刷：**

### **1、很经典的大小堆方法**

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



### [剑指 Offer 41. 数据流中的中位数](https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/)

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

<p id = "数据流中的中位数"></p>

