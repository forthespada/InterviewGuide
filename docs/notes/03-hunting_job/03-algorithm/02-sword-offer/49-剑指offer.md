---
layout:  post
category:  algorithm
title:  No49、字符串转化为整数
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No49、字符串转化为整数
comment: false
---



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

