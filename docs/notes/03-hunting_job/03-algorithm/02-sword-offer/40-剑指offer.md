---
layout:  post
category:  algorithm
title:  No40、数组中只出现一次的数字
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No40、数组中只出现一次的数字
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 



## **No40、数组中只出现一次的数字**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/e02fdb54d7524710a7d664d082bb7811?tpId=13&&tqId=11193&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。 



### **1、常规做法**

~~~cpp
void FindNumsAppearOnce(vector<int> data,int* num1,int *num2) {
    unordered_map<int, int> unmp;
    for (int i = 0; i < data.size(); ++i) {
        unmp[data[i]] += 1;
    }


    auto it = unmp.begin();
    while (it != unmp.end()) {
        if (it->second == 1) {
            *num1 = it->first;
            ++it;
            break;
        }
        ++it;
    }

    while (it != unmp.end()) {
        if (it->second == 1) {
            *num2 = it->first;
            break;
        }
        ++it;
    }
}
~~~



### **二刷：**

### **1、hash表的笨方法**

运行时间：3ms  占用内存：376k

~~~cpp
void FindNumsAppearOnce(vector<int> data,int* num1,int *num2) {
    unordered_map<int,int> unmp;
    for(auto a:data){
        unmp[a]++;
    }

    auto beg = unmp.begin();
    while(beg != unmp.end())
    {
        if(beg->second == 1)
        {
            *num1 = beg->first;
            beg++;
            break;
        }
        beg++;

    }

    while(beg != unmp.end())
    {
        if(beg->second == 1)
        {
            *num2 = beg->first;
            break;
        }
        beg++;

    }
}
~~~



### **2、异或做法，很棒**

  当**只有一个数出现一次**时，我们把数组中所有的数，依次异或运算，最后剩下的就是落单的数，因为成对儿出现的都抵消了。 

依照这个思路，我们来看两个数（我们假设是AB）出现一次的数组。我们首先还是先异或，剩下的数字肯定是A、B异或的结果，**这个结果的二进制中的1，表现的是A和B的不同的位**。我们就取第一个1所在的位数，假设是第3位，接着把原数组分成**两组**，分组标准是第3位是否为1。如此，**相同的数肯定在一个组**，因为相同数字所有位都相同，而不同的数，**肯定不在一组**。然后把这两个组按照最开始的思路，依次异或，剩余的两个结果就是这两个只出现一次的数字。

运行时间：3ms 占用内存：376k

~~~cpp
void FindNumsAppearOnce(vector<int> data,int* num1,int *num2) {


    if (data.size() < 2) return;

    int totalNum = 0;
    for (int i = 0; i < data.size(); i++) {
        totalNum ^= data[i];//所有数异或，结果为不同的两个数字的异或
    }

    int sign = 0;//标志位，记录totalNum中的第一个1出现的位置
    for (; sign < data.size(); sign++) {
        if ((totalNum & (1 << sign)) != 0) { //左移 sign 位，将所有数字进行左移sign位，而低位补上0
            break;
        }
    }
    cout << sign << endl;
    num1[0] = 0;
    num2[0] = 0;
    for (int i = 0; i < data.size(); i++) {
        if ((data[i] & (1 << sign)) == 0) {//标志位为0的为一组，异或后必得到一个数字（这里注意==的优先级高于&，需在前面加（））
            num1[0] ^= data[i];
            cout << "0 "<<data[i] << " " << (1<<sign) << endl;
        }
        else {
            num2[0] ^= data[i];//标志位为1的为一组
            cout << "1 " << data[i] << " " << (1 << sign) << endl;
        }
    }
    cout << num1[0] << num2[0] << endl;       
}
~~~


<p id = "数组中只出现一次的数字"></p>

