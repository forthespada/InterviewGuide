---
layout:  post
category:  algorithm
title:  No32、把数组排成最小的数
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No32、把数组排成最小的数
comment: false
---



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

