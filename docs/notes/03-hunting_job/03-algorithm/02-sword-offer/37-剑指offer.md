---
layout:  post
category:  algorithm
title:  No37、 统计一个数字在排序数组中出现的次数
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No37、 统计一个数字在排序数组中出现的次数
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
  <p>这是四则或许对你有些许帮助的信息:</p>
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的《校招日程》文档，其中包括<a style="text-decoration: underline" href="https://flowus.cn/share/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">往届补录</a>、<a style="text-decoration: underline" href="https://flowus.cn/share/5f327c98-1e31-46c8-b86b-5ac6105e021f" target="_blank">应届实习校招</a>信息，比如各种大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>



## **No37、 统计一个数字在排序数组中出现的次数**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/70610bf967994b22bb1c26f9ae901fa2?tpId=13&&tqId=11190&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

统计一个数字在升序数组中出现的次数。

### **示例1**

**输入**

```
[1,2,3,3,3,3,4,5],3
```
**返回值**

```
4
```



### **1、STL中取巧的一种写法，直接调equal_range() 方法**

~~~cpp
int GetNumberOfK(vector<int> data ,int k) {
    auto pos = equal_range(data.begin(),data.end(),k);
    return pos.second - pos.first;
    }
~~~



### **2、二分法，找到第一次出现的位置和最后一次出现的位置，还是记这种二分法模板吧**

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


<p id = "统计一个数字在排序数组中出现的次数"></p>

