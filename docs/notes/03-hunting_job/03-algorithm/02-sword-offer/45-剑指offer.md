---
layout:  post
category:  algorithm
title:  No45、扑克牌顺子
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No45、扑克牌顺子
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>




## **No45、扑克牌顺子**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/762836f4d43d43ca9deb273b3de8e1f4?tpId=13&&tqId=11198&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...

他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！

“红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。

LL决定去买体育彩票啦。 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 如果牌能组成顺子就输出true，否则就输出false。

为了方便起见,你可以认为大小王是0。 

### **示例1**

**输入**

```
[6,0,2,0,4]
```

**返回值**

```
true
```

**示例2**

**输入**

```
[0,3,2,6,4]
```

**返回值**

```
true
```

**示例3**

**输入**

```
[1,0,0,1,0]
```

**返回值**

```
false
```

**示例4**

**输入**

```
[13,12,11,0,1]
```

**返回值**

```
false
```

### **1、比较容易想到的一种方法**

1、排序 

2、计算所有相邻数字间隔总数 

3、计算0的个数 

4、如果2、3相等，就是顺子 

5、如果出现对子，则不是顺子

~~~cpp
    bool IsContinuous( vector<int> numbers ) {
        int len = numbers.size();
        if(len<5) return false;
        sort(numbers.begin(),numbers.end());
        int numOfZreo = 0,numOfInner=0;
        for(int i=0;i<len-1;++i){
            if(numbers[i]==0)  ++numOfZreo;
            else if(numbers[i]==numbers[i+1]){
                return false;
            }
            else{
                numOfInner += numbers[i+1] - numbers[i] -1;//这里千万注意要减去1
            }
            //cout<<numOfZreo<<" "<<numOfInner<<endl;
        }
        if(numOfZreo>=numOfInner) return true;
        return false;
    }
~~~



### **2、第二种方法**

max 记录 最大值
 min 记录  最小值
 min ,max 都不记0
 满足条件 1 max - min   <5
                2 除0外没有重复的数字(牌)
                3 数组长度 为5  

~~~cpp
 bool IsContinuous( vector<int> numbers ) {
	int maxNum = -1, minNum = 14;
	if (numbers.size() < 5)//小于5则为false
		return false;
	vector<int> result(14, 0);
	result[0] = -5;
	for (int i = 0; i < numbers.size(); ++i)
	{  
		result[numbers[i]]++;
		if (numbers[i] == 0)//出现0则跳过
			continue;
		if (result[numbers[i]] > 1) return false;
		if (numbers[i] > maxNum)
			maxNum = numbers[i];//取最大数
		if (numbers[i] < minNum)
			minNum = numbers[i];//取最小数
	}
	if (maxNum - minNum < 5)
		return true;//判断是否小于5
	eturn false;
    }
~~~



下面的代码有问题，无法判断是否有重复的数字，比如1,2,4,5,4就无法判断

~~~cpp
    bool IsContinuous( vector<int> numbers ) {
	int maxNum = -1, minNum = 14;
	if (numbers.size() < 5)//小于5则为false
		return false;
	for (int i = 0; i < numbers.size(); i++)
	{   //判断是是否小于0和大于13以及有没有重复数字
		if (numbers[i] < 0 || numbers[i]>13 || numbers[i] == maxNum || numbers[i] == minNum)
			return false;
		if (numbers[i] == 0)//出现0则跳过
			continue;
		if (numbers[i] > maxNum)
			maxNum = numbers[i];//取最大数
		if (numbers[i] < minNum)
			minNum = numbers[i];//取最小数
	}
	if (maxNum - minNum < 5)
		return true;//判断是否小于5
	return false;
    }
~~~



### **二刷：**

### **先排序，再进行操作即可，挺好**

运行时间：3ms 占用内存：504k

~~~cpp
    bool IsContinuous( vector<int> numbers ) {
if (numbers.size() <= 4) return false;
	sort(numbers.begin(), numbers.end());
	int countZero = 0;
	int index = 0;
	while (index < numbers.size() && numbers[index] == 0) {
		countZero++;
		index++;
	}
	//cout << index << endl;
	//cout << countZero << endl;
	for (int i = index; i < numbers.size() - 1; ++i) {
		if (numbers[i] == numbers[i+1]) return false;
		else if ( (numbers[i]+1) == numbers[i+1]) {
			continue;
		}
		else {
			countZero -= (numbers[i+1] - numbers[i] - 1);
		}
		//cout << countZero << endl;
		if (countZero < 0) return false;
	}


	return countZero >= 0;
    }
~~~

<p id = "扑克牌顺子"></p>

