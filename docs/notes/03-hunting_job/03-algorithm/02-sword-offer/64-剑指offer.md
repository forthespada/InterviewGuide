---
layout:  post
category:  algorithm
title:  No64、滑动窗口的最大值
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No64、滑动窗口的最大值
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
  <p>1、👉 最近发现了一个每日推送都会最新校招咨询的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，无偿分享一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和留下的<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，好好走下去基本都能拿到不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>



## **No64、滑动窗口的最大值**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/1624bc35a45c42c0bc17d17fa0cba788?tpId=13&&tqId=11217&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

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



### **1、自己想的，边界条件很多**

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



### **2、第二种做法，比较水，借助优先队列来做，小顶堆**

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



### **3、借助双端队列来做，最为高效的一种方法**

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



### **二刷：**

### **1、优先队列，其实也就是大顶堆来做**

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



### **2、单调栈来做应该是最快的**

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


<p id = "滑动窗口的最大值"></p>

