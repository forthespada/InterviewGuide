---
layout:  post
category:  algorithm
title:  No6、旋转数组
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No6、旋转数组
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
<p>1、阿秀在工作之余开发了一个<span style="font-weight:bold;color:red">编程资源网站</span>，目前已经收集了很多不错的学习资源和黑科技（附带下载地址），如你有意<a href="https://www.cxypron.com/home" target="_blank">欢迎体验以及推荐自己认为不错的资源</a>，众人拾柴火焰高，我为人人，人人为我🔥！</p>  <p>2、👉23年5月份我从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s/zKItpGwIkHKK4g2aOlL2rA" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold;color:red">互联网中大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
<div align="center">
</div>网站地址：<a style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">InterviewGuide大厂面试真题解析网站</a>。点此可以查看该网站的视频介绍：<a style="text-decoration: underline" href="https://www.bilibili.com/video/BV1f94y1C7BL" target="_blank">B站视频讲解</a>   如果可以的话求个B站三连，感谢！
  </p>
  <p>3、😍
    免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>
  </p>
  <p>4、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>5、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>





## **No6、旋转数组**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题连接](https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba?tpId=13&&tqId=11159&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>



### **题目描述**

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。

NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。 



### **1、常规做法**

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



### **2、二分法 很不错**

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



### **二刷**

### **2-1、常规做法**

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



### **2-2、二分法变种**

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

