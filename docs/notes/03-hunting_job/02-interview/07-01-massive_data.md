---
layout:  post
category:  hunting_job
title:  海量数据处理01-05
tagline:  by 阿秀
tags:
    - 原创
    - 智力题
    - 场景题
    - 八股文
    - 社招
    - 校招
    - 阿秀
excerpt: 海量数据处理面试题
comment: false
---

<h1 align="center">海量数据处理面试题</h1>





<p id="智力题情景题"></p>

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是六则或许对你有些许帮助的信息:</p>
<p>1、阿秀在工作之余开发了一个<span style="font-weight:bold;color:red">编程资源网站</span>，目前已经收集了很多不错的学习资源和黑科技（附带下载地址），如你有意<a href="https://www.cxypron.com/home" target="_blank">欢迎体验以及推荐自己认为不错的资源</a>，众人拾柴火焰高，我为人人，人人为我🔥！</p>  <p>2、👉23年5月份我从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s/zKItpGwIkHKK4g2aOlL2rA" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold;color:red">互联网中大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
<div align="center">
</div>网站地址：<a style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">InterviewGuide大厂面试真题解析网站</a>。点此可以查看该网站的视频介绍：<a style="text-decoration: underline" href="https://www.bilibili.com/video/BV1f94y1C7BL" target="_blank">B站视频讲解</a>   如果可以的话求个B站三连，感谢！
  </p>3、😊
    分享一个学弟发给我的<span style="font-weight:bold;color:red">20T网盘资源合集</span>，<a style="text-decoration: underline" href="https://docs.qq.com/sheet/DY3VPVklVaFFMcUZ4?tab=9h5afr" target="_blank">点此白嫖</a>，主要是各类高清影视、电视剧、音乐、副业、纪录片、英语四六级考试、考研考公等资源。
  </p>
  <p>4、😍免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>
  </p>
  <p>5、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>6、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>


其实互联网招聘中，经常会被问到关于海量数据处理的问题，阿秀这里也为大家总结了一些经典的海量数据处理面试题！

## 1、如何从大量的 URL 中找出相同的 URL？

- 题目描述

  给定 a、b 两个文件，各存放 50 亿个 URL，每个 URL 各占 64B，内存限制是 4G。请找出 a、b 两个文件共同的 URL。

  ### 解答思路

  #### 1. 分治策略

  每个 URL 占 64B，那么 50 亿个 URL 占用的空间大小约为 320GB。

  > 5, 000, 000, 000 _ 64B ≈ 5GB _ 64 = 320GB

  由于内存大小只有 4G，因此，我们不可能一次性把所有 URL 加载到内存中处理。对于这种类型的题目，一般采用**分治策略**，即：把一个文件中的 URL 按照某个特征划分为多个小文件，使得每个小文件大小不超过 4G，这样就可以把这个小文件读到内存中进行处理了。

  **思路如下**：

  首先遍历文件 a，对遍历到的 URL 求 `hash(URL) % 1000` ，根据计算结果把遍历到的 URL 存储到 a0, a1, a2, ..., a999，这样每个大小约为 300MB。使用同样的方法遍历文件 b，把文件 b 中的 URL 分别存储到文件 b0, b1, b2, ..., b999 中。这样处理过后，所有可能相同的 URL 都在对应的小文件中，即 a0 对应 b0, ..., a999 对应 b999，不对应的小文件不可能有相同的 URL。那么接下来，我们只需要求出这 1000 对小文件中相同的 URL 就好了。

  接着遍历 ai( `i∈[0,999]` )，把 URL 存储到一个 HashSet 集合中。然后遍历 bi 中每个 URL，看在 HashSet 集合中是否存在，若存在，说明这就是共同的 URL，可以把这个 URL 保存到一个单独的文件中。

  #### 2. 前缀树

  一般而言，URL 的长度差距不会不大，而且前面几个字符，绝大部分相同。这种情况下，非常适合使用**字典树**（trie tree） 这种数据结构来进行存储，降低存储成本的同时，提高查询效率。

  ### 方法总结

  #### 分治策略

  1. 分而治之，进行哈希取余；
  2. 对每个子文件进行 HashSet 统计。

  #### 前缀树

  1. 利用字符串的公共前缀来降低存储成本，提高查询效率。




##  2、如何从大量数据中找出高频词？

### 题目描述

有一个 1GB 大小的文件，文件里每一行是一个词，每个词的大小不超过 16B，内存大小限制是 1MB，要求返回频数最高的 100 个词(Top 100)。

### 解答思路

由于内存限制，我们依然无法直接将大文件的所有词一次读到内存中。因此，同样可以采用**分治策略**，把一个大文件分解成多个小文件，保证每个文件的大小小于 1MB，进而直接将单个小文件读取到内存中进行处理。

**思路如下**：

首先遍历大文件，对遍历到的每个词 x，执行 `hash(x) % 5000` ，将结果为 i 的词存放到文件 ai 中。遍历结束后，我们可以得到 5000 个小文件。每个小文件的大小为 200KB 左右。如果有的小文件大小仍然超过 1MB，则采用同样的方式继续进行分解。

接着统计每个小文件中出现频数最高的 100 个词。最简单的方式是使用 HashMap 来实现。其中 key 为词，value 为该词出现的频率。具体方法是：对于遍历到的词 x，如果在 map 中不存在，则执行 `map.put(x, 1)` ；若存在，则执行 `map.put(x, map.get(x)+1)` ，将该词频数加 1。

上面我们统计了每个小文件单词出现的频数。接下来，我们可以通过维护一个**小顶堆**来找出所有词中出现频数最高的 100 个。具体方法是：依次遍历每个小文件，构建一个**小顶堆**，堆大小为 100。如果遍历到的词的出现次数大于堆顶词的出现次数，则用新词替换堆顶的词，然后重新调整为**小顶堆**，遍历结束后，小顶堆上的词就是出现频数最高的 100 个词。

### 方法总结

1. 分而治之，进行哈希取余；
2. 使用 HashMap 统计频数；
3. 求解**最大**的 TopN 个，用**小顶堆**；求解**最小**的 TopN 个，用**大顶堆**。

<p  id="给定随机函数生成别的随机数"></p>

## 3、如何找出某一天访问百度网站最多的 IP？

### 题目描述

现有海量日志数据保存在一个超大文件中，该文件无法直接读入内存，要求从中提取某天访问百度次数最多的那个 IP。

### 解答思路

这道题只关心某一天访问百度最多的 IP，因此，可以首先对文件进行一次遍历，把这一天访问百度 IP 的相关信息记录到一个单独的大文件中。接下来采用的方法与上一题一样，大致就是先对 IP 进行哈希映射，接着使用 HashMap 统计重复 IP 的次数，最后计算出重复次数最多的 IP。

> 注：这里只需要找出出现次数最多的 IP，可以不必使用堆，直接用一个变量 max 即可。

### 方法总结

1. 分而治之，进行哈希取余；

2. 使用 HashMap 统计频数；

3. 求解**最大**的 TopN 个，用**小顶堆**；求解**最小**的 TopN 个，用**大顶堆**。

   

##  4、如何在大量的数据中找出不重复的整数？

### 题目描述

在 2.5 亿个整数中找出不重复的整数。注意：内存不足以容纳这 2.5 亿个整数。

### 解答思路

#### 方法一：分治法

与前面的题目方法类似，先将 2.5 亿个数划分到多个小文件，用 HashSet/HashMap 找出每个小文件中不重复的整数，再合并每个子结果，即为最终结果。

#### 方法二：位图法

**位图**，就是用一个或多个 bit 来标记某个元素对应的值，而键就是该元素。采用位作为单位来存储数据，可以大大节省存储空间。

位图通过使用位数组来表示某些元素是否存在。它可以用于快速查找，判重，排序等。不是很清楚？我先举个小例子。

假设我们要对 `[0,7]` 中的 5 个元素 (6, 4, 2, 1, 5) 进行排序，可以采用位图法。0~7 范围总共有 8 个数，只需要 8bit，即 1 个字节。首先将每个位都置 0：

```
0 0 0 0 0 0 0 0Copy to clipboardErrorCopied
```

然后遍历 5 个元素，首先遇到 6，那么将下标为 6 的位的 0 置为 1；接着遇到 4，把下标为 4 的位 的 0 置为 1：

```
0 0 0 0 1 0 1 0Copy to clipboardErrorCopied
```

依次遍历，结束后，位数组是这样的：

```
0 1 1 0 1 1 1 0Copy to clipboardErrorCopied
```

每个为 1 的位，它的下标都表示了一个数：

```
for i in range(8):
    if bits[i] == 1:
        print(i)Copy to clipboardErrorCopied
```

这样我们其实就已经实现了排序。

对于整数相关的算法的求解，**位图法**是一种非常实用的算法。假设 int 整数占用 4B，即 32bit，那么我们可以表示的整数的个数为 $2^32$。

**那么对于这道题**，我们用 2 个 bit 来表示各个数字的状态：

- 00 表示这个数字没出现过；
- 01 表示这个数字出现过一次（即为题目所找的不重复整数）；
- 10 表示这个数字出现了多次。

那么这 $2^32$ 个整数，总共所需内存为 $2^32$*2b=1GB。因此，当可用内存超过 1GB 时，可以采用位图法。假设内存满足位图法需求，进行下面的操作：

遍历 2.5 亿个整数，查看位图中对应的位，如果是 00，则变为 01，如果是 01 则变为 10，如果是 10 则保持不变。遍历结束后，查看位图，把对应位是 01 的整数输出即可。

当然，本题中特别说明：**内存不足以容纳这 2.5 亿个整数**，2.5 亿个整数的内存大小为：2.5e8/1024/1024/1024 * 4=3.72GB， 如果内存大于 1GB，是可以通过位图法解决的。

### 方法总结

**判断数字是否重复的问题**，位图法是一种非常高效的方法，当然前提是：内存要满足位图法所需要的存储空间。

<p  id="利用空瓶换饮料最多喝几瓶"></p>

## 5、如何在大量的数据中判断一个数是否存在？

### 题目描述

给定 40 亿个不重复的没排过序的 unsigned int 型整数，然后再给定一个数，如何快速判断这个数是否在这 40 亿个整数当中？

### 解答思路

#### 方法一：分治法

依然可以用分治法解决，方法与前面类似，就不再次赘述了。

#### 方法二：位图法

由于 unsigned int 数字的范围是 `[0, 1 << 32)`，我们用 `1<<32=4,294,967,296` 个 bit 来表示每个数字。初始位均为 0，那么总共需要内存：4,294,967,296b≈512M。

我们读取这 40 亿个整数，将对应的 bit 设置为 1。接着读取要查询的数，查看相应位是否为 1，如果为 1 表示存在，如果为 0 表示不存在。

### 方法总结

**判断数字是否存在、判断数字是否重复的问题**，位图法是一种非常高效的方法。6、毒药毒白鼠，找出哪个瓶子中是毒药

有1000个一模一样的瓶子，其中有999瓶是普通的水，有1瓶是毒药。任何喝下毒药的生命都会在一星期之后死亡。现在你只有10只小白鼠和1个星期的时间，如何检验出哪个瓶子有毒药？ 
