---
layout:  post
category:  hunting_job
title: 目录
tagline:  by 阿秀
tags:
    - 原创
    - LeetCode
    - 校招
    - 社招
    - 阿秀
excerpt: 目录
comment: false
---







<h1 align="center">精选力扣300+题目之动态规划</h1>

## 字符匹配类动态规划心得总结

它的题目特征其实特别明显，比如：

- 输入是两个字符串，问是否通过一定的规则相匹配
- 输入是两个字符串，问两个字符串是否存在包含被包含的关系
- 输入是两个字符串，问一个字符串怎样通过一定规则转换成另一个字符串
- 输入是两个字符串，问它们的共有部分

这类问题的难点在于**问题的拆解**上面，也就是如何找到当前问题和子问题的联系。

往往这类问题的状态比较好找，你可以先假设状态 **`dp[i][j]` 就是子问题`str1(0...i) str2(0...j)`  的状态。拆解问题主要思考 `dp[i][j]` 和子问题的状态`dp[i - 1][j]`，`dp[i - 1][j]` 以及 `dp[i - 1][j - 1]` 的联系，**因为字符串会存在空串的情况，所以动态规划状态数组往往会多开一格。

当然，对于这类问题，如果你还是没有什么思路或者想法，我给你的建议是 **画表格**，我们结合实际题目一起来看看。

<p id="我的零钱兑换"></p>





<p id="easy"></p>

### Easy

- [53.最大子序和](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/53.最大子序和.md)
- [70. 爬楼梯](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/70.爬楼梯.md)

- [121. 买卖股票的最佳时机](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/121.买卖股票的最佳时机.md)

- [122. 买卖股票的最佳时机 II](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/122.买卖股票的最佳时机II.md)

- [123. 买卖股票的最佳时机 III](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/123.买卖股票的最佳时机III.md)

- [188. 买卖股票的最佳时机 IV 最难的一种了](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/188.买卖股票的最佳时机IV.md)

- [198. 打家劫舍](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/198.打家劫舍.md)

- [213. 打家劫舍 II](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/213.打家劫舍II.md)

- [303. 区域和检索 - 数组不可变](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/303.区域和检索-数组不可变索.md)

- [309. 最佳买卖股票时机含冷冻期](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/309.最佳买卖股票时机含冷冻期.md)

- [714. 买卖股票的最佳时机含手续费](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/714.买卖股票的最佳时机含手续费.md)

- [746. 使用最小花费爬楼梯](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/746.使用最小花费爬楼梯.md)

- [1025. 除数博弈](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/easy/1025.除数博弈.md)

<p id="medium"></p>

### Medium

- [5.最长回文子串](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/5.最长回文子串.md)

- [62. 不同路径](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/62.不同路径.md)

- [63. 不同路径 II](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/63.不同路径II.md)

- [64. 最小路径和](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/64.最小路径和.md)

- [72. 编辑距离 非常经典的DP问题](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/72.编辑距离.md)

- [91. 解码方法](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/91.解码方法.md)

- [120. 三角形最小路径和](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/120.三角形最小路径和.md)

- [139. 单词拆分](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/139.单词拆分.md)

- [140. 单词拆分 II](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/140.单词拆分II.md)

- [152. 乘积最大子序列 同样经典的问题](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/152.乘积最大子序列.md)

- [221. 最大正方形](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/211.最大正方形.md)

- [263. 丑数](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/263.丑数.md)

- [264. 丑数 II](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/264.丑数II.md)

- [300. 最长上升子序列](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/300.最长上升子序列.md)

- [322. 零钱兑换](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/322.零钱兑换.md)

- [413. 等差数列划分](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/413.等差数列划分.md)

- [516. 最长回文子序列 依然经典](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/516.最长回文子序列.md)

- [518. 零钱兑换 II](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/518.零钱兑换II.md)

- [583. 两个字符串的删除操作](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/583.两个字符串的删除操作.md)

- [638. 大礼包 未做](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/638.大礼包.md)

- [647. 回文子串](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/647.回文子串.md)

- [712. 两个字符串的最小ASCII删除和](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/712.两个字符串的最小ASCII删除和.md)

- [877. 石子游戏](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/877.#石子游戏.md)

- [931. 下降路径最小和 经典DP问题](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/931.下降路径最小和.md)

- [1143. 最长公共子序列 经典](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/1143.最长公共子序列.md)

- [1277. 统计全为 1 的正方形子矩阵 很好的题目](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/1277.统计全为1的正方形子矩阵.md)

- [5454. 统计全 1 子矩形 超级好题](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/medium/5454.统计全1子矩形.md)

<p id="hard"></p>

### Hard

- [剑指offer19.正则表达式匹配](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/hard/剑指Offer19.正则表达式匹配..md)

- [32.最长有效括号](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/hard/32.最长有效括号.md)

- [887.鸡蛋掉落-谷歌微软经典题目](/notes/03-hunting_job/03-algorithm/03-leetcode/11-动态规划/hard/887.鸡蛋掉落-谷歌微软经典题目.md)

