---
layout:  post
category:  algorithm
title:  No27、字符串的排列
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No27、字符串的排列
comment: false
---



## **No27、字符串的排列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/fe6b651b66ae47d7acce78ffdd9a96c7?tpId=13&&tqId=11180&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

**输入描述:**

```
输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
```

### **示例1**

**输入**

~~~
"ab"
~~~
**返回值**

~~~
["ab","ba"]
~~~



### **1、一个很奇特的函数next_permutation** 

返回全排列，使用方法如下所示，必须要进行排序才可以：

执行用时：52 ms, 在所有 C++ 提交中击败了91.01%的用户

内存消耗：17.9 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
    vector<string> permutation(string s) {

    if(s.size()==0) return vector<string>();
        
	vector<string> result;
	sort(s.begin(), s.end());
	do {
		result.push_back(s);
	} while (next_permutation(s.begin(),s.end()));

	return  result;
    }
~~~



~~~cpp
#include <stdio.h>
#include <algorithm>
using namespace std;
int main(){
    int n;
    while(scanf("%d",&n)&&n){
        int a[1000];
        for(int i=0;i<n;i++){
            scanf("%d",&a[i]);
        }
        sort(a,a+n);
        do{
            for(int i=0;i<n;i++)
                printf("%d ",a[i]);
            printf("\n");
        }while(next_permutation(a,a+n));
    }
    return 0;
}
~~~

例如输入

```
3
1 0 2
```

如果有sort()

输出为

```
0 1 2
0 2 1
1 0 2
1 2 0
2 0 1
2 1 0
```

若无

则输出为

```
1 0 2
1 2 0
2 0 1
2 1 0
```

发现函数next_permutation()是按照字典序产生排列的，并且是从数组中当前的字典序开始依次增大直至到最大字典序



### **2、DFS+回溯算法 还没有完全理解**

~~~cpp
class Solution {
public:
    vector<string>  result;
    void PermutationCore(string &s,int begin,int end){
        if(begin == end){
            result.push_back(s);
            return ;
        }
        unordered_map<int,int> visited;
        for(int i = begin; i<= end; ++i){
            if(visited[s[i]] == 1) continue;
            swap(s[i],s[begin]);
            PermutationCore(s,begin+1,end);
            swap(s[i],s[begin]);
            visited[s[i]] =1;

        }

    }
    
    vector<string> Permutation(string str) {
    if(str.size()==0) return vector<string>();
    
    PermutationCore(str,0,str.size()-1);
    sort(result.begin(),result.end());
	return  result;
    }
};
~~~



### **二刷：**

### **1、好题，不开玩笑，最后还要排序，要求是按照字典序输出的**

~~~cpp
class Solution {
public:
    vector<string>  result;
    void PermutationCore(string &s,int begin,int end){
        if(begin == end){
            result.push_back(s);
            return ;
        }
        unordered_map<int,int> visited;
        for(int i = begin; i<= end; ++i){
            if(visited[s[i]] == 1) continue;
            swap(s[i],s[begin]);
            PermutationCore(s,begin+1,end);
            swap(s[i],s[begin]);
            visited[s[i]] =1;
 
        }
 
    }
     
    vector<string> Permutation(string str) {
    if(str.size()==0) return vector<string>();
     
    PermutationCore(str,0,str.size()-1);
    sort(result.begin(),result.end());
    return  result;
    }
};
~~~

<p id = "字符串的排列"></p>

