---
layout:  post
category:  algorithm
title:  No53、表示数值的字符串
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No53、表示数值的字符串
---



## **No53、表示数值的字符串**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank"> [牛客网原题链接](https://www.nowcoder.com/practice/6f8c901d091949a5837e24bb82a731f2?tpId=13&&tqId=11206&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

**示例1**

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

**1、看的写法，很好**

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



**二刷：**

**1、还是不会**

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

