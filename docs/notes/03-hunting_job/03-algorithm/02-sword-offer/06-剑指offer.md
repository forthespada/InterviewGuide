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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 






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

