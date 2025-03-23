---
layout:  post
category:  algorithm
title:  必备算法基础
tagline:  by 阿秀
tags:
    - 原创
    - 算法
    - 数据结构与算法
    - 基础
    - 社招
    - 校招
    - 阿秀
excerpt: 必备算法基础
comment: false
---


<h1 align="center">算法基础</h1>


<p id="算法基础"></p>


> 阿秀自己刷过的算法部分经过整理后是按照不同基础、不同人群分类的，如果你不知道自己该看哪个部分的算法题，可以先看一下这里，[戳我直达](/notes/03-hunting_job/03-algorithm/01-basic-algorithm/01-introduce.md)。

以下是本部分正文：

这里简单为大家讲解一下一些算法基础知识与十大排序，在面试考察中十大排序出现的频率是非常高的，特别是冒泡排序、快速排序、归并排序等，[**具体可点击这里**](/notes/03-hunting_job/03-algorithm/04-high_frquency_algorithm/01-high_frquency_algorithm.md)

#### 算法基本知识铺垫

有些人可能不知道什么是稳定排序、原地排序、时间复杂度、空间复杂度，我这里先简单解释一下：

1、稳定排序：如果 a 原本在 b 的前面，且 a == b，排序之后 a 仍然在 b 的前面，则为稳定排序。

2、非稳定排序：如果 a 原本在 b 的前面，且 a == b，排序之后 a 可能不在 b 的前面，则为非稳定排序。

3、原地排序：原地排序就是指在排序过程中不申请多余的存储空间，只利用原来存储待排数据的存储空间进行比较和交换的数据排序。

4、非原地排序：需要利用额外的数组来辅助排序。

5、时间复杂度：一个算法执行所消耗的时间。

6、空间复杂度：运行完一个算法所需的内存大小



#### 十大排序一图总览

![](./picture/202205072325169.png)



#### 十大排序中的稳定排序

冒泡排序（bubble sort） — O(n2)
插入排序 （insertion sort）— O(n2)
归并排序 （merge sort）— O(n log n)
　　

#### 十大排序中的非稳定排序

> 面试考察中一般问快排，选择，希尔，堆这几种非稳定排序

选择排序 （selection sort）— O(n2)
希尔排序 （shell sort）— O(n log n)
堆排序 （heapsort）— O(n log n)
快速排序 （quicksort）— O(n log n)

<p id="冒泡排序"></p>

