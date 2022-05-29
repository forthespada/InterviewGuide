---
layout:  post
category:  hunting_job
title: 剑指 Offer 66. 构建乘积数组
tagline:  by 阿秀
tags:
    - 原创
    - LeetCode
    - 校招
    - 社招
    - 阿秀
excerpt: 精选力扣300+题目之数组
comment: false
---





## 剑指 Offer 66. 构建乘积数组

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/)

给定一个数组 `A[0,1,…,n-1]`，请构建一个数组 `B[0,1,…,n-1]`，其中 `B` 中的元素 `B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]`。不能使用除法。

 

**示例:**

```cpp
输入: [1,2,3,4,5]
输出: [120,60,40,30,24]
```

 

**提示：**

- 所有元素乘积之和不会溢出 32 位整数
- `a.length <= 100000`

### 1、一种绝妙的作法

执行用时：36 ms, 在所有 C++ 提交中击败了88.82%的用户

内存消耗：24.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
vector<int> constructArr(vector<int>& a) {
  int len = a.size();
  int temp=1;
  vector<int> b(len);
  for(int i=0;i<len;temp*=a[i],++i)
    b[i] = temp;

  temp=1;
  for(int i=len-1;i>=0;temp*=a[i],--i)
    b[i] *=temp;

  return b;
}
~~~

### 2、暴力解法  会超时

舍弃

