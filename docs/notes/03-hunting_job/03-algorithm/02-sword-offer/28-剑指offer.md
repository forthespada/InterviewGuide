---
layout:  post
category:  algorithm
title:  No28、数组中出现次数超过一半的数字
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No28、数组中出现次数超过一半的数字
---



## **No28、数组中出现次数超过一半的数字**

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

<p id = "数组中出现次数超过一半的数字"></p>

