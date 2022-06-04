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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 


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

