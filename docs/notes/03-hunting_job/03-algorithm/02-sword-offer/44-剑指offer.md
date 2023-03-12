---
layout:  post
category:  algorithm
title:  No44、反转单词序列
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No44、反转单词序列
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




## **No44、反转单词序列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/3194a4f4cf814f63919d0790578d51f3?tpId=13&&tqId=11197&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“student. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a student.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？

### **示例1**

**输入**

~~~
"nowcoder. a am I"
~~~
**返回值**

~~~
"I am a nowcoder."
~~~

### **1、别想太多，能做出来就好**

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

### **2、借助栈 反而会出错，直接第一种方法就可以**



### **二刷：**

### **直接做就行**

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

