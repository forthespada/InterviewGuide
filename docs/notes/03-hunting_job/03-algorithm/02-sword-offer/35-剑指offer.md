---
layout:  post
category:  algorithm
title:  No35、数组中的逆排序
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No35、数组中的逆排序
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
  <p>1、👉 最近我发现了一个每日推送都会最新校招咨询的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和留下的<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，好好走下去基本都能拿到不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>



## **No35、数组中的逆排序**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/96bd6684e04a44eb80e6a68efc0ec6c5?tpId=13&&tqId=11188&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

**输入描述**

题目保证输入的数组中没有的相同的数字数据范围：	对于%50的数据,size<=10^4	对于%75的数据,size<=10^5	对于%100的数据,size<=2*10^5

### **示例1**

**输入**

```
1,2,3,4,5,6,7,0
```

**输出**

```
7
```



### **1、只通过50%的笨方法**

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



### **2、牛客上的一种做法，很厉害**

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



### **二刷：**

### **1、很棒的一道题目，建议多刷**

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



### **2、归并排序，归并成从小到大的序列，这种方法更好理解一些**

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



### **力扣上的剑指offer：**

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


<p id = "数组中的逆排序"></p>

