---
layout:  post
category:  algorithm
title:  No27、字符串的排列
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No27、字符串的排列
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202206190108471.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 




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

