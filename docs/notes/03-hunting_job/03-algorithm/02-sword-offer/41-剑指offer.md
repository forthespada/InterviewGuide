---
layout:  post
category:  algorithm
title:  No41、和为S的连续整数序列
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No41、和为S的连续整数序列
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.html#_4、阿秀-如何才能联系到你)</font>;免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.html)</font>;如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




## **No41、和为S的连续整数序列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/c451a3fd84b64cb19485dad758a55ebe?tpId=13&&tqId=11194&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck! 

**输出描述:**

```
输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序
```

输入
~~~
9
~~~
**返回值**

~~~
[[2,3,4],[4,5]]
~~~



### **1、牛客解法，很厉害，类似于TCP滑动窗口**

~~~cpp
vector<vector<int> > FindContinuousSequence(int sum) {
    vector<vector<int>> result;
    int low=1,high=2;//两个起点，相当于动态窗口的两边，根据其窗口内的值的和来确定窗口的位置和大小
    while(low<high){
        int sumTemp = (low+high) *(high-low +1)/2;
        //由于是连续的，差为1的一个序列，那么求和公式是(a0+an)*n/2
        if(sumTemp == sum){  //相等，那么就将窗口范围的所有数添加进结果集
            vector<int> resultTemp;
            for(int i=low;i<=high;++i)
            {resultTemp.push_back(i);}
            result.push_back(resultTemp);
            low++;
        }else if(sumTemp<sum){ //如果当前窗口内的值之和小于sum，那么右边窗口右移一下
            high++;
        }
        else{  //如果当前窗口内的值之和大于sum，那么左边窗口右移一下
            low++;
        }
    }
    return result;
}
~~~



### **2、暴力解法**

~~~cpp
vector<vector<int> > FindContinuousSequence(int sum) {
    vector<vector<int> > result;
    for (int n = sqrt(2 * sum); n >= 2; --n) {
        if (((n & 1) == 1 && sum % n == 0) || (sum % n * 2 == n)) {
            vector<int> res;
            //j用于计数，k用于遍历求值
            for (int j = 0, k = sum / n - (n - 1) / 2; j < n; j++, k++)//注意看k的求法
                res.push_back(k);
            result.push_back(res);
        }
    }
    return result;
}
~~~



### **二刷：**

### **1、滑动窗口，直接用数学公式来进行计算**

运行时间：3ms  占用内存：496k

~~~cpp
vector<vector<int> > FindContinuousSequence(int sum) {
    vector<vector<int>> result;
    int low = 1,high = 2;
    while(low < high){
        int sumTemp = (low + high) * (high - low + 1)/2;
        if(sumTemp == sum){
            vector<int> temp;
            for(int i = low;i <= high; ++i)
                temp.push_back(i);
            result.push_back(std::move(temp));
            low++;//即使当前满足，那么依然要前进的，这有点滑动窗口的意思吧
        }else if(sumTemp < sum) high++;
        else
            low++;
    }
    return std::move(result);//借助C++11的move函数，总体时间会更短    
}
~~~



### <font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[力扣网原题链接](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/)</font>

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：6.9 MB, 在所有 C++ 提交中击败了39.52%的用户

~~~cpp
vector<vector<int>> findContinuousSequence(int target) {

    vector<vector<int>> result;
    int low = 1,high = 2;
    while(low < high){
        int sumTemp = (low + high) * (high - low + 1)/2;
        if(sumTemp == target){
            vector<int> temp;
            for(int i = low;i <= high; ++i)
                temp.push_back(i);
            result.push_back(std::move(temp));
            low++;
        }else if(sumTemp < target) high++;
        else
            low++;
    }
    return std::move(result);//借助C++11的move函数，总体时间会更短    
}
~~~


<p id = "和为S的连续整数序列"></p>

