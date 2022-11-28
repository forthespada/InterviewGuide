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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202206190108471.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸经历](/notes/05-xiustar/09-question_answer/20220817.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[校招总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[阿里、字节、腾讯、美团等一二线大厂真实面经](/notes/07-resources/01-free/04-schoolSchample.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 

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

