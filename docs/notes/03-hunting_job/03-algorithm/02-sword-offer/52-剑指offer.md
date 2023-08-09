---
layout:  post
category:  algorithm
title:  No52、正则表达式匹配
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No52、正则表达式匹配
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
  <p>1、👉23年5月份我从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s/zKItpGwIkHKK4g2aOlL2rA" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold">大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
<div align="center">
  <a  style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">  <img src="http://oss.interviewguide.cn/img/202308091638172.png" style="zoom:100%;" /></a>
<p style="font-weight:bold">衷心希望自己开发的这个网站能够帮到更多的人，自己能够以技术服务于大家！</p>
</div>网站地址：<a style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">InterviewGuide大厂面试真题解析网站</a>。点此可以查看该网站的视频介绍：<a style="text-decoration: underline" href="https://www.bilibili.com/video/BV1f94y1C7BL" target="_blank">B站视频讲解</a>   如果可以的话求个B站三连，感谢！
  </p> 
  <p>2、😍
    免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>

## **No52、正则表达式匹配**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/45327ae22b7b413ea21df13ee7d6429c?tpId=13&&tqId=11205&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配

### **示例1**

**输入**

```
"aaa","a*a"
```

**返回值**

```
true
```

### **1、太他吗难了，不会不会，老子不会**

~~~cpp
//字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
bool match(char* str, char* pattern)
{
	int len1 = strlen(str), len2 = strlen(pattern);
	int low1 = 0, low2 = 0;
	while (low1 < len1 && low2 < len2) {
		if (str[low1] == pattern[low2]) {

			if (low2 + 1 < len2 && pattern[low2 + 1] == '*') {
				while (str[low1] == pattern[low2]) { low1++; }
				low2++;//跳过 * 
			}
			else {
				low1++;
				low2++;
			}
			
		}
		else if (str[low1] != pattern[low2]) {
			cout << "111" << endl;
			if (pattern[low2] == '.' && low2 + 1 < len2 && pattern[low2 + 1] != '*') { low1++; low2++; }
			else if (pattern[low2] == '.' && low2 + 1 < len2 && pattern[low2 + 1] == '*')  return true;
			else if (low2 + 1 < len2 && pattern[low2 + 1] == '*') {//出现 aa 与 ab*a这样的情况
				low2+=2;
			}
				return false;
		}
	}
	return low1 == len1 && low2 == len2;
}
~~~



### **2、看的思路**

​       解这题需要把题意仔细研究清楚，反正我试了好多次才明白的。

​       首先，**考虑特殊情况**： 1>两个字符串都为空，返回true 2>当第一个字符串不空，而第二个字符串空了，返回false（因为这样，就无法 匹配成功了,而如果第一个字符串空了，第二个字符串非空，还是可能匹配成 功的，比如第二个字符串是“aaaa”,由于‘’之前的元素可以出现0次， 所以有可能匹配成功） 之后就开始匹配第一个字符，这里有两种可能：**匹配成功或匹配失败**。

​      但考虑到pattern 下一个字符可能是‘’， 这里我们分两种情况讨论：pattern下一个字符为‘’或 不为‘’： 1>pattern下一个字符不为‘’：这种情况比较简单，直接匹配当前字符。如果 匹配成功，继续匹配下一个；如果匹配失败，直接返回false。

​      注意这里的 “匹配成功”，除了两个字符相同的情况外，还有一种情况，就是pattern的 当前字符为‘.’,同时str的当前字符不为‘\0’。 2>pattern下一个字符为‘’时，稍微复杂一些，因为‘’可以代表0个或多个。 

​      这里把这些情况都考虑到： a>当‘’匹配0个字符时，str当前字符不变，pattern当前字符后移两位， 跳过这个‘’符号； b>当‘’匹配1个或多个时，str当前字符移向下一个，pattern当前字符 不变。

   （这里匹配1个或多个可以看成一种情况，因为：当匹配一个时， 由于str移到了下一个字符，而pattern字符不变，就回到了上边的情况a； 当匹配多于一个字符时，相当于从str的下一个字符继续开始匹配） 之后再写代码就很简单了。

~~~cpp
 bool match(char* str, char* pattern)
    {
        if (*str == '\0' && *pattern == '\0')
            return true;
        if (*str != '\0' && *pattern == '\0')
            return false;
        //if the next character in pattern is not '*'
        if (*(pattern+1) != '*')
        {
            if (*str == *pattern || (*str != '\0' && *pattern == '.'))
                return match(str+1, pattern+1);
            else
                return false;
        }
        //if the next character is '*'
        else
        {
            if (*str == *pattern || (*str != '\0' && *pattern == '.'))
                return match(str, pattern+2) || match(str+1, pattern);
            else
                return match(str, pattern+2);
        }
    }
~~~

**讲解:**

首先能够匹配的情况就是两种：1、两者相等，2、s!='\0' && p=='.'

只有这两种情况

1、p[1] != * ,那么可能是 ba与.a 或者 ba ba这两种形式，那就直接s+1 p+1，递归到下一层，否则就是false了

2、p[1] == *,有 * 过来捣乱，如果匹配的话也就是两者相等或者**s!=‘\0’并且p==‘.’的话，前者比如 abc 与 a****abc直接 s p+2 ，要跳过pattern的匹配部分，因为有个 星号 *      后者就是aaabc 与 .*bc这样，直接s+1,p，s向前走一步逐渐递归到下次

如果不匹配的话那就是 abc  b*abc这样的，p向前走两步，走到后面的p再去匹配



### **3、另一种写法**

~~~cpp
/*
要分为几种情况：（状态机）
匹配只可能是：两者相等 或者  S！=‘\0’ && p == .

（1）当第二个字符不为‘*’时：匹配就是将字符串和模式的指针都下移一个，不匹配就直接返回false
（2）当第二个字符为'*'时：
        匹配：
                a.字符串下移一个，模式不动  abc  a*bc
                c.字符串不动，模式下移两个   abc  .*abc或者 .*bc
        不匹配：字符串下移不动，模式下移两个   abc  b*abc
搞清楚这几种状态后，用递归实现即可：
*/
class Solution {
public:
    bool match(char* str, char* pattern){
        if(str[0]=='\0'&&pattern[0]=='\0')
            return true;
        else if(str[0]!='\0'&&pattern[0]=='\0')
            return false;
        if(pattern[1]!='*'){
            if(str[0]==pattern[0]||(pattern[0]=='.'&&str[0]!='\0'))
                return match(str+1,pattern+1);
            else
                return false;
        }
        else{
            if(str[0]==pattern[0]||(pattern[0]=='.'&&str[0]!='\0'))
                return match(str,pattern+2)||match(str+1,pattern);
            else
                return match(str,pattern+2);
        }
    }
};
~~~



### **二刷：**

### **1、很好，依然不会，哈哈，递归的方法**

运行时间：3ms  占用内存：492k

~~~cpp
/*
要分为几种情况：（状态机）
匹配只可能是：两者相等 或者  S！=‘\0’ && p == .

（1）当第二个字符不为‘*’时：匹配就是将字符串和模式的指针都下移一个，不匹配就直接返回false
（2）当第二个字符为'*'时：
        匹配：
                a.字符串下移一个，模式不动  abc  a*bc
                c.字符串不动，模式下移两个   abc  .*abc或者 .*bc
        不匹配：字符串下移不动，模式下移两个   abc  b*abc
搞清楚这几种状态后，用递归实现即可：
*/
class Solution {
public:
    bool match(char* str, char* pattern){
        if(str[0]=='\0'&&pattern[0]=='\0')
            return true;
        else if(str[0]!='\0'&&pattern[0]=='\0')
            return false;
        if(pattern[1]!='*'){
            if(str[0]==pattern[0]||(pattern[0]=='.'&&str[0]!='\0'))
                return match(str+1,pattern+1);
            else
                return false;
        }
        else{
            if(str[0]==pattern[0]||(pattern[0]=='.'&&str[0]!='\0'))
                return match(str,pattern+2)||match(str+1,pattern);
            else
                return match(str,pattern+2);
        }
    }
};
~~~


<p id = "正则表达式匹配"></p>

