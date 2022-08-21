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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202206190108471.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/05-xiustar/01-xiustar_reading_guide/20220822.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




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

