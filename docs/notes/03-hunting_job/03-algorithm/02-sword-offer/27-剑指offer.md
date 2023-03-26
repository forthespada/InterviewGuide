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

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是四则或许对你有些许帮助的信息:</p>
  <p>1、👉 最近我发现了一个每日都会推送最新校招资讯的《校招日程》文档，其中包括<a style="text-decoration: underline" href="https://flowus.cn/share/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">往届补录</a>、<a style="text-decoration: underline" href="https://flowus.cn/share/5f327c98-1e31-46c8-b86b-5ac6105e021f" target="_blank">应届实习校招</a>信息，比如各种大厂、国企、银行、事业编等信息都会定期更新，帮忙扩散一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>



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

