---
layout:  post
category:  algorithm
title:  No44、反转单词序列
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No44、反转单词序列
---




## **No44、反转单词序列**

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
<p id = "反转单词序列"></p>

