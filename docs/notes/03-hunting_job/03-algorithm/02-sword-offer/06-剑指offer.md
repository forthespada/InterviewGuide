---
layout:  post
category:  algorithm
title:  No6、旋转数组
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No6、旋转数组
---





## **No6、旋转数组**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题连接](https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba?tpId=13&&tqId=11159&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>



**题目描述**

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。

NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。 



**1、常规做法**

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



**2、二分法 很不错**

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



**二刷**

**2-1、常规做法**

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



**2-2、二分法变种**

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

