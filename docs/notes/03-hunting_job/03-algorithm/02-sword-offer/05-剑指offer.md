---
layout:  post
category:  algorithm
title:  No5、 用两个栈来实现一个队列
tagline:  by 阿秀
tag: [数据结构与算法]
excerpt: No5、 用两个栈来实现一个队列
---



## **No5、 用两个栈来实现一个队列**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=13&&tqId=11158&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

**题目描述**

完成队列的Push和Pop操作。 队列中的元素为int类型。 

**1、很简单的一道题**

运行时间：3ms 占用内存：376k

~~~cpp
public:
    void push(int node) {
        stack1.push(node);
    }

    int pop() {
        while(stack1.size() != 1){
            stack2.push(stack1.top());
            stack1.pop();
            
        }
        int value = stack1.top();
        stack1.pop();
        while(!stack2.empty()){
            stack1.push(stack2.top());
            stack2.pop();
        }
        
        return value;        
    }

private:
    stack<int> stack1;//保存元素
    stack<int> stack2;//辅助栈
};
~~~

<p id = "旋转数组"></p>
