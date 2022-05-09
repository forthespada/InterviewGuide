---
layout:  post
category:  algorithm
title:  No33、第N个丑数
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No33、第N个丑数
---


## **No33、第N个丑数**

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


<p id="丑数"></p>

