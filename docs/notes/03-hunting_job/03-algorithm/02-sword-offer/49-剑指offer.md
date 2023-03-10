---
layout:  post
category:  algorithm
title:  No49、字符串转化为整数
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No49、字符串转化为整数
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



## **No49、字符串转化为整数**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/1277c681251b4372bdef344468e4f26e?tpId=13&&tqId=11202&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0

**输入描述:**

```
输入一个字符串,包括数字字母符号,可以为空
```

**输出描述:**

```
如果是合法的数值表达则返回该数字，否则返回0
```

### **示例1**

**输入**

```
+2147483647
1a33
```

**输出**

```
2147483647
0
```



### **1、自己思考的一种笨方法,这题用C++   AC 不了**

负数 -1234，正数 +2563的情形 第一个为正负号 要考虑到

第一位为0的也是不是合法的

出现0~9之外的字符也是不合法的

~~~cpp
int StrToInt(string str) {
    long long num = 0;
    if (str.size() == 0) return 0;
    int len = str.size();
    bool isNegative = false,isPositive = false;
    if (str[0] == '-') isNegative=true;
    else if (str[0] == '+') isPositive = true;
    else
        if (str[0]<='0' || str[0]>'9')  return 0;

    int i = 0;
    if (isPositive || isNegative) i = 1;
    for (    ; i <len ; ++i) {
        if (str[i]<'0' || str[i]>'9') return 0;
        else {
            num = num * 10 + str[i] - '0';
        }

    }
    if (isNegative) num = -1 * num;
    if (num <= INT_MAX && num >= INT_MIN) return num;
    return 0;
}
~~~

只通过85.71%的案例。



### **2、第二种精简一点的方法**

~~~cpp
int StrToInt(string str) {
    int len = str.size();
    if (len == 0) return 0;//为空，直接返回即可
    int i = 0, flag = 1,isSingal = 0;// 索引 正负号标志位  正负号出现次数
    long res = 0; //默认flag = 1，正数
    while (i<len && str[i] == ' ') i++; //若str全为空格，str[i] = '\0'(最后一个i)
    if (i >= len) return 0;//全部都是空格，直接返回吧
    if (i < len && str[i] == '-') { flag = -1; ++i; isSingal++; }
    if (i < len && str[i] == '+') { ++i; ++isSingal; }
    if (isSingal > 1) return 0;
    for (  ; i < len ; ++i) {
        if(str[i]<'0' || str[i] > '9') return 0;
        res = res * 10 + (str[i] - '0');
        if (res >= INT_MAX && flag == 1) return  INT_MAX;
        if (res > INT_MAX && flag == -1) return  INT_MIN;
    }
    return flag * res;

}
~~~



### **3、有很多要注意的地方**

~~~cpp
int StrToInt(string str) {
	
	int len = str.size();
	if (len == 0) return 0;
	int  flag=1,singal=0, i = 0;
	long long num = 0;
	while (i < len && str[i] == ' ') i++;//可能一直为空或者前面若干都是 空格，处理空格
	if (i >= len) return 0;//一直为空则返回0
	if (str[i] == '-') { flag = -1; singal++; ++i; }//符号判断，同时千万记得 ++i
	if (str[i] == '+') { singal++; ++i; }//正号判断 ,++ i
	if (singal > 1) return 0;//如果出现两个符号，则是不合法的数字表达了 -+45这样的数字


	for (; i < len; ++i) {
		if (str[i]<'0' || str[i]>'9') return 0;// 是否有不合法数字出现 比如12a454
		else {
			num = num * 10 + str[i] - '0';
			if (num >= INT_MAX && flag==1) return INT_MAX;//注意这里的表达 输入如果是 INT_MAX也就是 2147483647 ，就还好
			if (num > INT_MAX && flag==-1) return INT_MIN;//但是如果输入是 INY_MIN 也就是 -2147483647-1 = -2147483648的话，
															// num因为是正数表达，所以必须num>INT_MAX才能正确判断了
		}

	}
	
	return num*flag;
}
~~~



### **二刷：**

### **1、这种做法更加稳妥**

运行时间：2ms  占用内存：376k

~~~cpp
int StrToInt(string str) {
    int len = str.size();
    if(len == 0) return 0;
    int i = 0,flag = 1,isSignal = 0;
    long res = 0;
    while(i<len && str[i] == ' ') i++;//首先跳过全部的空格
    if(i >= len) return 0;//全部都是空格也不行
    while(i<len && (str[i] == '-' || str[i] == '+'))  {//判断标志位
        if(str[i] == '-') flag = -1;
        i++;
        isSignal++;
        if(isSignal > 1) return 0;//不能出现两个标志位
    }

    for( ; i < len; ++i){
        if(str[i]>'9' || str[i]<'0') return 0;
        res = res*10 + str[i] - '0';
        if(res > INT_MAX && flag == 1) return INT_MAX;
        if(res > INT_MAX+1 && flag == -1)  return INT_MIN;// INT_MAX+1会溢出  ，将1移到左边去就可以了  

    }

    return flag * res;
}
~~~



### **2、考虑负数溢出情况**

运行时间：2ms 占用内存：492k

~~~cpp
int StrToInt(string str) {
    int len = str.size();
    if (len == 0) return 0;
    int i = 0, flag = 1, isSignal = 0;
    long res = 0;
    while (i < len && str[i] == ' ') i++;//首先跳过全部的空格
    if (i >= len) return 0;//全部都是空格也不行
    while (i < len && (str[i] == '-' || str[i] == '+')) {
        if (str[i] == '-') flag = -1;
        i++;
        isSignal++;
        if (isSignal > 1) return 0;//不能出现两个标志位
    }

    for (; i < len; ++i) {
        if (str[i] > '9' || str[i] < '0') return 0;
        res = res * 10 + str[i] - '0';  
        if (res > INT_MAX && flag == 1) return 0;//正数溢出
        if (res-1 > INT_MAX  && flag == -1)  return 0;//负数溢出，这个时候可以将 1 移到左边来，INT_MIN = -1 - 2的31次方 是比INT_MAX的绝对值大一的

    }

    return flag * res;
}
~~~



<p id = "最小的K个数"></p>

