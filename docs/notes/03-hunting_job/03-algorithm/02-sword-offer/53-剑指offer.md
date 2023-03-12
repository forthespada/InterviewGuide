---
layout:  post
category:  algorithm
title:  No53、表示数值的字符串
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No53、表示数值的字符串
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

## **No53、表示数值的字符串**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/6f8c901d091949a5837e24bb82a731f2?tpId=13&&tqId=11206&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

### **示例1**

**输入**

```
"123.45e+6"
```

**返回值**

```
true
```

**示例2**

**输入**

```
"1.2.3"
```

**返回值**

```
false
```

### **1、看的写法，很好**

~~~cpp
bool isNumeric(char* string)
{
    // 正反标记符号、小数点、e是否出现过
    bool sign = false, decimal = false, hasE = false;
    for (int i = 0; i < strlen(string); ++i) {
        if (string[i] == 'e' || string[i] == 'E') {
            if (i == strlen(string) - 1) return false; // e后面一定要接数字
            if (hasE) return false;  // 不能同时存在两个e
            hasE = true;
        }
        else if (string[i] == '+' || string[i] == '-') {
            // 第二次出现+-符号，则必须紧接在e之后
            if (sign && string[i - 1] != 'e' && string[i - 1] != 'E') return false;
            // 第一次出现+-符号，且不是在字符串开头，则也必须紧接在e之后
            if (!sign && i > 0 && string[i - 1] != 'e' && string[i - 1] != 'E') return false;
            sign = true;
        }
        else if (string[i] == '.') {
            // e后面不能接小数点，小数点不能出现两次
            if (hasE || decimal) return false;
            decimal = true;
        }
        else if (string[i] < '0' || string[i] > '9') // 不合法字符
            return false;
    }
    return true;

}
~~~



### **二刷：**

### **1、还是不会**

运行时间：2ms  占用内存：380k

1、e后面必须是数字 只能有一个e

2、正负号只能出现一次，即使出现第二次了，那他的前面也要是 e/ E ,出现第一次的话必须在开头或者在E的后面

3、小数点也只能出现一次，且不能再E的后面

4、合法字符的判断 除了 e +-  . 以及数字之外 其余的字符都是错的。

~~~cpp
bool isNumeric(char* string)
{
    bool sign = false, decimal = false,hasE = false;//正负号 小数点 e
    int len = strlen(string);
    for(int i = 0; i < len; ++i){
        if(string[i] == 'e' || string[i] == 'E'){
            if( i == len - 1) return false;//e 的后面必须要出现数字 对应 12e
            if(hasE) return false;//只能有一个e
            hasE = true;

        }else if(string[i] == '+' || string[i] == '-'){                
            if(!sign && i>0 && string[i-1] !='e' && string[i-1] != 'E')// 12e+5 如果第一次出现，且不是在开头，那么也要紧跟在e/E之后
                return false;
            if(sign && string[i-1] !='e' && string[i-1] !='E')// +5e-6  第二次出现，那也要跟在 e/E之后
                return false;
            sign = true;
        }else if(string[i] == '.'){
            if(decimal) return false; 
            if(hasE) return false;// E后面不能跟小数点  12e+4.3

            decimal = true;

        }else if(string[i] < '0' || string[i] > '9')//不合法字符
            return false;

    }
    return true;
}
~~~


<p id = "表示数值的字符串"></p>

