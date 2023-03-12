---
layout:  post
category:  algorithm
title:  No11、二进制中1的个数
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No11、二进制中1的个数
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
  <p>1、👉 最近我发现了一个每日推送都会最新校招咨询的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和留下的<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，好好走下去基本都能拿到不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>

## **No11、二进制中1的个数** 

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8?tpId=13&&tqId=11164&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。

### **示例1**

**输入**

~~~c
10
~~~
**返回值**

~~~c
2
~~~



### **1、自己写的，错误的想法**

~~~cpp
int  NumberOf1(int n) {

	if (n == 0) return 0;
	if (n > 0) {//正数
		int count = 0;
		while (n!=0) {
			if (n == 1) {
				return ++count;
			}
			if (n % 2 == 1) { 
				count++; 
			    n = n / 2;
			}
			else
				n = n / 2;			
		}
		return count;
	}
	else {//负数
		n = n * (-1) -1;//负数的补码等于它的正数部分减一，取反即可
		int count = 0;
		while (n != 0) {
			if (n == 1) {
				++count;
				break;
			}
			if (n % 2 == 0) {
				count++;
				n = n / 2;
			}
			else
				n = n / 2;
		}
		return count;


	}
}
~~~

-9的补码是32位的，而不是6位 （1  0111），所以有1的个数也不是四位，int是32位的



### **2、bitset的运用**

~~~cpp
int  NumberOf1(int n) {
	return bitset<32>(n).count();
	}
~~~



### **3、牛客大神的做法**

~~~cpp

 int NumberOf1(int n) {
        int count = 0;
        while(n!= 0){
            count++;
            n = n & (n - 1);
         }
        return count;
    }
~~~

如果一个整数不为0，那么这个整数至少有一位是1。如果我们把这个整数减1，那么原来处在整数最右边的1就会变为0，原来在1后面的所有的0都会变成1(如果最右边的1后面还有0的话)。其余所有位将不会受到影响。    

**举个例子**：一个二进制数1100，从右边数起第三位是处于最右边的一个1。减去1后，第三位变成0，它后面的两位0变成了1，而前面的1保持不变，因此得到的结果是1011.我们发现减1的结果是把最右边的一个1开始的所有位都取反了。

这个时候如果我们再把原来的整数和减去1之后的结果做与运算，从原来整数最右边一个1那一位开始所有位都会变成0。如1100&1011=1000.也就是说，把一个整数减去1，再和原整数做与运算，会把该整数最右边一个1变成0.那么一个整数的二进制有多少个1，就可以进行多少次这样的操作。



### **二刷：1、bitset用法：**

主要是将 n 转化为 32位表示，int 最大也就是 2^32次方，然后利用bitset。count（）函数，返回 其中 1 的数量

bitset<4> bitset1;　　//无参构造，长度为４，默认每一位为０

```cpp
bitset<8> bitset2(12);　　//长度为８，二进制保存，前面用０补充

string s = "100101";
bitset<10> bitset3(s);　　//长度为10，前面用０补充

char s2[] = "10101";
bitset<13> bitset4(s2);　　//长度为13，前面用０补充

cout << bitset1 << endl;　　//0000
cout << bitset2 << endl;　　//00001100
cout << bitset3 << endl;　　//0000100101
cout << bitset4 << endl;　　//0000000010101

bitset<8> foo ("10011011");
 
cout << foo.count() << endl;　　//5　　（count函数用来求bitset中1的位数，foo中共有５个１
cout << foo.size() << endl;　　 //8　　（size函数用来求bitset的大小，一共有８位

cout << foo.test(0) << endl;　　//true　　（test函数用来查下标处的元素是０还是１，并返回false或true，此处foo[0]为１，返回true
cout << foo.test(2) << endl;　　//false　　（同理，foo[2]为０，返回false
  
cout << foo.any() << endl;　　//true　　（any函数检查bitset中是否有１
cout << foo.none() << endl;　　//false　　（none函数检查bitset中是否没有１
cout << foo.all() << endl;　　//false　　（all函数检查bitset中是全部为１
```



运行时间：2ms  占用内存：496k

~~~cpp
int  NumberOf1(int n) {

	bitset<32> bit(n);//将其初始化为 32 位，不足 32 位的前面补齐即可
	return bit.count();// 返回其中为 1 的个数
}
~~~



### **2、温习一下牛客大神的做法**

如果一个整数不为0，那么这个整数至少有一位是1。如果我们把这个整数减1，那么原来处在整数最右边的1就会变为0，原来在1后面的所有的0都会变成1(如果最右边的1后面还有0的话)。其余所有位将不会受到影响。    

**举个例子**：一个二进制数1100，从右边数起第三位是处于最右边的一个1。减去1后，第三位变成0，它后面的两位0变成了1，而前面的1保持不变，因此得到的结果是1011.我们发现减1的结果是把最右边的一个1开始的所有位都取反了。

这个时候如果我们再把原来的整数和减去1之后的结果做与运算，从原来整数最右边一个1那一位开始所有位都会变成0。如1100&1011=1000.也就是说，把一个整数减去1，再和原整数做与运算，会把该整数最右边一个1变成0.那么一个整数的二进制有多少个1，就可以进行多少次这样的操作。

运行时间：3ms 占用内存：376k

~~~cpp
int  NumberOf1(int n) {

	int res = 0;
    while(n != 0){
        n = n&(n-1);
        res++;
    }
	return res;
}
~~~
<p id = "二进制中1的个数"></p>

