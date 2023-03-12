---
layout:  post
category:  algorithm
title:  No32、把数组排成最小的数
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No32、把数组排成最小的数
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
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，过去22届和23届的小伙伴好好跟着走下去的，最后基本都拿到了不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>



## **No32、把数组排成最小的数**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/8fecd3f8ba334add803bf2a06af1b993?tpId=13&&tqId=11185&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

### **示例1**

**输入**

```
[3,32,321]
```

**返回值**

```
"321323"
```

### **1、很精妙绝伦的一种排序方法**

执行用时：12 ms, 在所有 C++ 提交中击败了92.42%的用户

内存消耗：11.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
string minNumber(vector<int>& nums) {

    vector<string> temp;
    for (auto num : nums) {
        temp.push_back(to_string(num));
    }

    sort(temp.begin(), temp.end(), [](const string& a, const string& b) { return a + b < b + a; });
    string result;
    for (auto& t : temp) {
        result += t;
    }
    return result;
}
~~~



### **2、第二种做法，与第一种又有点不一样，但是速度比第一种要慢不少**

sort函数要定义为静态或者全局函数

sort中的比较函数compare要声明为静态成员函数或全局函数，不能作为普通成员函数，否则会报错。 因为：非静态成员函数是依赖于具体对象的，而std::sort这类函数是全局的，因此无法再sort中调用非静态成员函数。静态成员函数或者全局函数是不依赖于具体对象的, 可以独立访问，无须创建任何对象实例就可以访问。同时静态成员函数不可以调用类的非静态成员。

执行用时：28 ms, 在所有 C++ 提交中击败了22.65%的用户

内存消耗：11.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp

/*对vector容器内的数据进行排序，按照 将a和b转为string后
 若 a＋b<b+a  a排在在前 的规则排序,
 如 2 21 因为 212 < 221 所以 排序后为 21 2 
  to_string() 可以将int 转化为string
*/ class Solution {
 public:
     static bool cmp(int a,int b){
         string A=""，B="";
         A+=to_string(a);
         A+=to_string(b);
         B+=to_string(b);
         B+=to_string(a);      
         return A<B;
     }
     string PrintMinNumber(vector<int> numbers) {
         string  answer="";
         sort(numbers.begin(),numbers.end(),cmp);
         for(int i=0;i<numbers.size();i++){
             answer+=to_string(numbers[i]);
         }
         return answer;
     }
 };
~~~



### **二刷：**

### **1、超强比较方法**

运行时间：2ms 占用内存：492k

~~~cpp
    string PrintMinNumber(vector<int> numbers) {
    
	vector<string> temp;
	for (auto a : numbers) {
		temp.push_back(std::move(to_string(a)));
	}

	sort(temp.begin(), temp.end(), [](const string& a, const string& b) {return a + b < b + a; });
	string result;
	for (auto& s : temp) {
		result += std::move(s);
	}

	return result;
    }
~~~

<p id = "把数组排成最小的数"></p>

