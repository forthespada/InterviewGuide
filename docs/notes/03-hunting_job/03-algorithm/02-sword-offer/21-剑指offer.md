---
layout:  post
category:  algorithm
title:  No21、栈的压入弹出序列
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No21、栈的压入弹出序列
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202206190108471.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/07-resources/01-free/04-schoolSchample.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




## **No21、栈的压入弹出序列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/d77d11405cc7470d82554cb392585106?tpId=13&&tqId=11174&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

### **示例1**

**输入**

~~~
[1,2,3,4,5],[4,3,5,1,2]
~~~
**返回值**

~~~
false
~~~



### **1、想岔了，用vector**

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {

       if(pushV.size() == 0) return false;
        vector<int> v;
        for(int i = 0,j = 0 ;i < pushV.size();){
            v.push_back(pushV[i++]);
            while(j < popV.size() && v.back() == popV[j]){
                v.pop_back();
                j++;
            }      
            }
            return v.empty();
    }
~~~



### **2、借助栈**

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {

if (pushV.empty() || popV.empty() || pushV.size() != popV.size())
	return false;
	stack<int> s;
	int j = 0;
	for (int i = 0; i < pushV.size(); ++i) {
		s.push(pushV[i]);
		while (!s.empty() && s.top() == popV[j]) {
			s.pop();
			++j;
		}
	}
	if (s.empty())
		return true;
	return false;
    }
~~~



### **二刷：**

### **1、挺容易的，可以再看一下**

运行时间：3ms  占用内存：508k

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {
	int len = pushV.size();
	int pushIndex = 0, popIndex = 0;
	stack<int>st;
	while (pushIndex < len && popIndex < len) {
		if (pushV[pushIndex] != popV[popIndex]) {
			st.push(pushV[pushIndex++]);
		}
		else {
			popIndex++;
			pushIndex++;
			while (!st.empty() && popIndex<len && st.top() == popV[popIndex]) {
				st.pop();
				popIndex++;
			}
		}
	}

	while (popIndex < len && st.top() == popV[popIndex]) {
		st.pop();
		popIndex++;
	}
	return popIndex == len && st.empty();
    }
~~~



### **2、精练一下代码**

运行时间：3ms  占用内存：380k

~~~cpp
    bool IsPopOrder(vector<int> pushV,vector<int> popV) {
	if(pushV.size() == 0 || popV.size() == 0 || pushV.size() != popV.size()) return false;
    int len = pushV.size();
	int popIndex = 0;
	stack<int>st;
    for(int i = 0; i < len; ++i){
        st.push(pushV[i]);
        while (popIndex < len && !st.empty() &&st.top() == popV[popIndex]) {
			st.pop();
			popIndex++;
		}        
    }
	return st.empty();
    }
~~~

<p id = "栈的压入弹出序列"></p>

