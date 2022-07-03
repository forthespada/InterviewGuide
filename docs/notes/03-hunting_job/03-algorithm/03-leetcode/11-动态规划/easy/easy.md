<p id="最大子序和"></p>



### 53. 最大子序和

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/maximum-subarray/)

给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。



#### 第一版，自己写的



执行用时 :8 ms, 在所有 C++ 提交中击败了88.63%的用户

内存消耗 :9.2 MB, 在所有 C++ 提交中击败了87.17%的用户



```c++
int maxSubArray(vector<int>& nums) {
	int result = nums[0],sum=0;//需要有初值
	for (auto a : nums) {
		if (sum + a > a) sum += a;//更容易理解
		else sum = a;

		result = sum > result ? sum : result;
	}
	return result;

}
```







#### 第二版，DP

执行用时 :8 ms, 在所有 cpp 提交中击败了86.55%的用户

内存消耗 :9.2 MB, 在所有 cpp 提交中击败了81.21%的用户

```c++
int maxSubArray(vector<int>& nums) {
	if (nums.empty()) return 0;

	vector<int> res(nums.size());
	res[0] = nums[0];
	int result = res[0];
	for (int i = 1; i < nums.size(); ++i) {
		res[i] = max(0, res[i - 1]) + nums[i];
		result = max(result, res[i]);
	}

	return result;


}
```

<p id="爬楼梯"></p>



### 70. 爬楼梯

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/climbing-stairs/)

假设你正在爬楼梯。需要 *n* 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 *n* 是一个正整数。

**示例 1：**

```
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```

**示例 2：**

```
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```



#### 第一版，其实很巧妙的题目

执行用时 :4 ms, 在所有 cpp 提交中击败了67.85%的用户

内存消耗 :8.5 MB, 在所有 cpp 提交中击败了35.19%的用户







```c++
	if (n == 0) return 0;
	if (n == 1) return 1;
	vector<int> res(n+1, 0);
	res[1] = 1;
	res[2] = 2;
	for (int i = 3; i <= n; ++i) {
		res[i] = res[i - 1] + res[i - 2];
	}
	return res[n];
```





#### 第二版，稍微改进一下

执行用时 :4 ms, 在所有 cpp 提交中击败了67.85%的用户

内存消耗 :8.2 MB, 在所有 cpp 提交中击败了81.26%的用户



```c++
    int climbStairs(int n) {
        if (n == 1) {
            return 1;
        }
        int first = 1;
        int second = 2;
        for (int i = 3; i <= n; i++) {
            int third = first + second;
            first = second;
            second = third;
        }
        return second;

    }
```

<p id="买卖股票的最佳时机"></p>



### 121. 买卖股票的最佳时机

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

给定一个数组，它的第 *i* 个元素是一支给定股票第 *i* 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

**示例 1:**

```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

**示例 2:**

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```



#### 第一版，DP

执行用时 :4 ms, 在所有 cpp 提交中击败了98.60%的用户

内存消耗 :9.5 MB, 在所有 cpp 提交中击败了40.18%的用户

```c++
  int maxProfit(vector<int>& prices) {
   	if (prices.size() <= 1)
		return 0;
	int minNum = prices[0], maxNum = 0;
	//动态规划 前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
	for (int i = 1; i < prices.size(); i++) {
		maxNum = max(maxNum, prices[i] - minNum);
		minNum = min(minNum, prices[i]);
		//cout << maxNum << " " << minNum << endl;
	}
	return maxNum;
    }
```

<p id="我的买卖股票的最佳时机"></p>





### 122. 买卖股票的最佳时机 II

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

给定一个数组，它的第 *i* 个元素是一支给定股票第 *i* 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

**注意：**你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

**示例 1:**

```
输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
```

**示例 2:**

```
输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
```

**示例 3:**

```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```



#### 第一版，挺有道理的

执行用时 :8 ms, 在所有 cpp 提交中击败了80.22%的用户

内存消耗 :9.5 MB, 在所有 cpp 提交中击败了27.00%的用户



**`[7, 1, 5, 6]` 第二天买入，第四天卖出，收益最大（6-1），所以一般人可能会想，怎么判断不是第三天就卖出了呢? 这里就把问题复杂化了，根据题目的意思，当天卖出以后，当天还可以买入，所以其实可以第三天卖出，第三天买入，第四天又卖出（（5-1）+ （6-5） === 6 - 1）。所以算法可以直接简化为只要今天比昨天大，就卖出。**





**只要今天价格小于明天价格就在今天买入然后明天卖出，时间复杂度`O(n)`**



```C++
if (prices.size() == 0) return 0;
int temp = prices[0], sum = 0;
for (auto& a : prices) {

	if (a > temp) {
		sum += a - temp;
		temp = a;
	}
	else
		temp = a;
}
return sum;
```





#### 第二版 动态规划，看的解法

DP动态规划，第`i`天只有两种状态，不持有或持有股票，当天不持有股票的状态可能来自昨天卖出或者昨天也不持有，同理，当天持有股票的状态可能来自昨天买入或者昨天也持有中，取最后一天的不持有股票状态就是问题的解

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0
        n = len(prices)
        dp = [[0]*2 for _ in range(n)]
        # dp[i][0]表示第i天不持有股票, dp[i][1]表示第i天持有股票
        dp[0][0], dp[0][1] = 0, - prices[0]
        for i in range(1, n):
            dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
            dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
        return dp[n-1][0]
```





#### 第三版 DP，自己写的

执行用时 :8 ms, 在所有 cpp 提交中击败了80.18%的用户

内存消耗 :9.8 MB, 在所有 cpp 提交中击败了5.21%的用户

```c++
int maxProfit(vector<int>& prices) {

	if (prices.size() == 0) return 0;
	int n=prices.size();
	vector<int> hold(n, 0), sold(n, 0);
	hold[0] = -prices[0];
	sold[0] = 0;
	for (int i = 1; i < n; ++i) {
		sold[i] = max(sold[i-1], hold[i-1] + prices[i]);
		hold[i] = max(hold[i-1], sold[i-1] - prices[i]);

	}

	return sold[n-1];

}

```

<p id="你的买卖股票的最佳时机"></p>



### 123. 买卖股票的最佳时机 III

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)

给定一个数组，它的第 *i* 个元素是一支给定的股票在第 *i* 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 *两笔* 交易。

**注意:** 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

**示例 1:**

```
输入: [3,3,5,0,0,3,1,4]
输出: 6
解释: 在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
     随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
```

**示例 2:**

```
输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。   
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
```

**示例 3:**

```
输入: [7,6,4,3,1] 
输出: 0 
解释: 在这个情况下, 没有交易完成, 所以最大利润为 0。
```





#### 第一版，看了总结再写的

执行用时 :12 ms, 在所有 cpp 提交中击败了65.84%的用户

内存消耗 :9.5 MB, 在所有 cpp 提交中击败了71.34%的用户



```c++
    int maxProfit(vector<int>& prices) {
    if (prices.empty()) return 0;

	int sold_2 = 0, hold_2 = -prices[0];// 最多2次机会，股票不在手，在手
	int sold_1 = 0, hold_1 = -prices[0];// 最多1次机会，股票不在手，在手

	for (auto& a : prices) {

		sold_2 = max(sold_2, hold_2 + a);
		hold_2 = max(hold_2, sold_1 - a);

		sold_1 = max(sold_1,  hold_1 + a);
		hold_1 = max(hold_1, - a);
	}

	return sold_2;
        
    }
```









#### 第二版，优化一下

执行用时 :4 ms, 在所有 cpp 提交中击败了99.16%的用户

内存消耗 :9.6 MB, 在所有 cpp 提交中击败了50.30%的用户



```c++
int maxProfit(vector<int>& prices) {
	if (prices.empty()) return 0;

	int sold_2 = 0, hold_2 = -prices[0];
	int sold_1 = 0, hold_1 = -prices[0];

	for (int i = 1; i < prices.size();++i) {

		sold_2 = max(sold_2, hold_2 + prices[i]);
		hold_2 = max(hold_2, sold_1 - prices[i]);

		sold_1 = max(sold_1,  hold_1 + prices[i]);
		hold_1 = max(hold_1, -prices[i]);
	}

	return sold_2;

}
```



#### 第三版，如果套模板的话，时间比较久

执行用时 :32 ms, 在所有 cpp 提交中击败了20.87%的用户

内存消耗 :18.1 MB, 在所有 cpp 提交中击败了5.18%的用户

```c++
    int maxProfit(vector<int>& prices) {
	int i_max = prices.size();
	int k_max = 2;
	if (i_max == 0)
		return 0;
	vector<vector<vector<int>>> dp(i_max, vector<vector<int>>(k_max+1, vector<int>(2, 0)));

	for (int i = 0; i < i_max; i++) {
		for (int k = 1; k <= k_max; k++) {
			if (i == 0)
			{
				dp[i][k][0] = 0;
				dp[i][k][1] = -prices[i];
				continue;
			}
			dp[i][k][0] = max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
			dp[i][k][1] = max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
		}
	}
	return dp[i_max - 1][k_max][0];

    }
```

<p id="他的买卖股票的最佳时机"></p>





### 188. 买卖股票的最佳时机 IV 最难的一种了

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)

给定一个数组，它的第 *i* 个元素是一支给定的股票在第 *i* 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 **k** 笔交易。

**注意:** 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

**示例 1:**

```
输入: [2,4,1], k = 2
输出: 2
解释: 在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
```

**示例 2:**

```
输入: [3,2,6,5,0,3], k = 2
输出: 7
解释: 在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
```

#### 第一版，模板

执行用时 :36 ms, 在所有 cpp 提交中击败了33.51%的用户

内存消耗 :19.5 MB, 在所有 cpp 提交中击败了5.23%的用户

当k>= prices的一半时，就变成普通的股票问题，也就是不限次数



```c++
   int maxProfit(vector<int>& prices) {

	int sum = 0,temp=prices[0];
	for (auto& p : prices) {
		if (p > temp) {
			sum += p - temp;
			temp = p;
		}
		else
			temp = p;

	}

	return sum;
}


int maxProfit(int k, vector<int>& prices) {
	int i_max = prices.size();
	if (i_max == 0)
		return 0;
	if (k * 2 > i_max) return maxProfit(prices);
	vector<vector<vector<int>>> dp(i_max, vector<vector<int>>(k + 1, vector<int>(2, 0)));

	for (int i = 0; i < i_max; i++) {
		for (int j = 1; j <= k; j++) {
			if (i == 0)
			{
				dp[i][j][0] = 0;
				dp[i][j][1] = -prices[i];
				continue;
			}
			dp[i][j][0] = max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
			dp[i][j][1] = max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
		}
	}
	return dp[i_max - 1][k][0];


}
```





#### 第二版，改进版本，只存储相邻一天的情况



执行用时 :8 ms, 在所有 cpp 提交中击败了91.97%的用户

内存消耗 :9.3 MB, 在所有 cpp 提交中击败了20.91%的用户



```c++
   int maxProfit(vector<int>& prices) {

	int sum = 0,temp=prices[0];
	for (auto& p : prices) {
		if (p > temp) {
			sum += p - temp;
			temp = p;
		}
		else
			temp = p;

	}

	return sum;
}

int maxProfit(int k, vector<int>& prices) {
	if (prices.size() < 2 || k < 1) return 0;
	int N = prices.size();
	if (k >= N / 2) {
		return maxProfit(prices);
	}
	vector<vector<int> > dp(k + 1, vector<int>{0, INT_MIN});
	for (int i = 0; i < N; ++i) {
		for (int j = k; j > 0; --j) {
			dp[j][0] = max(dp[j][0], dp[j][1] + prices[i]);
			dp[j][1] = max(dp[j][1], dp[j - 1][0] - prices[i]);
		}
	}
	return dp[k][0];
}
```



#### 第三版，最终版，确实好很多

执行用时 :8 ms, 在所有 cpp 提交中击败了91.97%的用户

内存消耗 :9.2 MB, 在所有 cpp 提交中击败了22.22%的用户



```c++
   int maxProfit(vector<int>& prices) {

	int sum = 0,temp=prices[0];
	for (auto& p : prices) {
		if (p > temp) {
			sum += p - temp;
			temp = p;
		}
		else
			temp = p;

	}

	return sum;
}


int maxProfit(int k, vector<int>& prices) {
	if (prices.size() < 2 || k < 1) return 0;
	int N = prices.size();
	if (k >= N / 2) {
		return maxProfit(prices);
	}
	vector<vector<int> > dp(k + 1, vector<int>{0, INT_MIN});
	for (int i = 0; i < N; ++i) {
		for (int j = 1; j <= k; ++j) {
			dp[j][0] = max(dp[j][0], dp[j][1] + prices[i]);
			dp[j][1] = max(dp[j][1], dp[j - 1][0] - prices[i]);
		}
	}
	return dp[k][0];
}
```

<p id="打家劫舍"></p>





### 198. 打家劫舍

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/house-robber/)

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你**在不触动警报装置的情况下，**能够偷窃到的最高金额。

**示例 1:**

```
输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

**示例 2:**

```
输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```





#### 第一版，自己写的，得意洋洋~

执行用时 :0 ms, 在所有 cpp 提交中击败了100.00%的用户

内存消耗 :8.5 MB, 在所有 cpp 提交中击败了91.08%的用户



```c++
int rob(vector<int>& nums) {
        
    int n = nums.size();
	if (n == 0)  return 0;
	else if (n == 1) return nums[0];
	else if (n == 2) return max(nums[0], nums[1]);
	vector<int> res(n + 1, 0);
	res[1] = nums[0];
	res[2] = nums[1];
	for (int i = 2; i < n; i++) {
		res[i + 1] = max(res[i - 1], res[i - 2]) + nums[i];


	}


	return max(res[n],res[n-1]);
        
    }
```

<p id="我的打家劫舍"></p>



### 213. 打家劫舍 II

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/house-robber-ii/)

你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都**围成一圈，**这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你**在不触动警报装置的情况下，**能够偷窃到的最高金额。

**示例 1:**

```
输入: [2,3,2]
输出: 3
解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
```

**示例 2:**

```
输入: [1,2,3,1]
输出: 4
解释: 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
```



#### 第一版，看的思路

执行用时 :0 ms, 在所有 cpp 提交中击败了100.00%的用户

内存消耗 :8.4 MB, 在所有 cpp 提交中击败了93.31%的用户

```c++
    int rob(vector<int>& nums) {
        
    if (nums.empty())
		return 0;
	int len = nums.size();
	if (len == 1)
		return nums[0];
	vector<int> dp1(len, 0);
	vector<int> dp2(len, 0);
	dp1[1] = nums[0], dp2[1] = nums[1];

	for (int i = 2; i < len; ++i) { //抢 0~n-1
		dp1[i] = max(dp1[i - 1], nums[i - 1] + dp1[i - 2]);
	}

	for (int i = 2; i < len; ++i) { //抢 1~n
		dp2[i] = max(dp2[i - 1], nums[i] + dp2[i - 2]);
	}

	return max(dp1[len - 1], dp2[len - 1]);
    }
```

<p id="区域和检索"></p>



### 303. 区域和检索 - 数组不可变

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/range-sum-query-immutable/)

给定一个整数数组  *nums*，求出数组从索引 *i* 到 *j*  (*i* ≤ *j*) 范围内元素的总和，包含 *i,  j* 两点。

**示例：**

```
给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```



#### 第一版，自己写的，效果比较差

执行用时 :612 ms, 在所有 cpp 提交中击败了5.09%的用户

内存消耗 :518.1 MB, 在所有 cpp 提交中击败了5.10%的用户

```c++
class NumArray {
public:
    NumArray(vector<int>& nums) {
    int n = nums.size();
	// vector<vector<int>> res(n,vector<int>(n,0));
    res.resize(n);
	for (int i = 0; i < n; ++i) {
		res[i].resize(n);
	}
	if (n == 0) return;
    if (n == 1) { res[0][0] = nums[0]; return;}
	for (int i = 0; i < n - 1; ++i) {
		res[i][i] = nums[i];
		for (int j = i; j < n-1; ++j) {
			
			res[i][j+1] = res[i][j] + nums[j + 1];
			//cout << i << " " << j << " ";
			//cout << res[i][j] << " " << nums[i + 1] << " " << res[i][j+1] << endl;
		}
	}

	//cout << "ooo" << endl;
	//res[n - 1][0] = nums[0];
	for (int i = 0; i < n; ++i) {
		res[i][n-1] = res[i][n-2] + nums[n-1];
	}
        
	// for (auto a : res) {
	// 	for (auto b : a) {
	// 		cout << b << " ";
	// 	}
	// 	cout << endl;
	// }
        
        
        
    }
    
    int sumRange(int i, int j) {
        return res[i][j];
    }
    
    vector<vector<int>> res;
};
```





#### 第二版，时间还是比较久

执行用时 :220 ms, 在所有 cpp 提交中击败了28.08%的用户

内存消耗 :17.1 MB, 在所有 cpp 提交中击败了80.26%的用户

```c++
class NumArray {
public:
	NumArray(vector<int>& nums) {
		res.assign(nums.begin(), nums.end());
			// for (auto a : res)
			// cout << a << " ";

	}

	int sumRange(int i, int j) {
        if(i==j) return res[i];
		return accumulate(i+res.begin(),1+j+res.begin(),0);
	}

	vector<int> res;
};
```





#### 第三版，真的厉害,速度也上来了

执行用时 :40 ms, 在所有 cpp 提交中击败了75.29%的用户

内存消耗 :17.3 MB, 在所有 cpp 提交中击败了24.84%的用户



```c++
class NumArray {
public:
	 NumArray(vector<int>& nums) {
        if(!nums.empty())
        {
            res.push_back(nums[0]);
            for(int i=1;i<nums.size();i++)
                res.push_back(sum[i-1]+nums[i]);
        }
    }
    
    int sumRange(int i, int j) {
        if(i==0) return res[j];
        else return res[j]-res[i-1];
    }
	vector<int> res;
};
```

<p id="最佳买卖股票时机含冷冻期"></p>



### 309. 最佳买卖股票时机含冷冻期

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

给定一个整数数组，其中第 *i* 个元素代表了第 *i* 天的股票价格 。

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

- 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
- 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。

**示例:**

```
输入: [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
```







#### 第一版，详解

https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/309-zui-jia-mai-mai-gu-piao-shi-ji-han-leng-dong-q/





执行用时 :8 ms, 在所有 cpp 提交中击败了54.17%的用户

内存消耗 :8.8 MB, 在所有 cpp 提交中击败了74.60%的用户





```c++
int maxProfit(vector<int>& prices) {

	if (prices.size() == 0) return 0;
	int n=prices.size();
	vector<int> hold(n, 0), sold(n, 0),rest(n,0);
	hold[0] = -prices[0];
	sold[0] = 0;
	for (int i = 1; i < n; ++i) {
		sold[i] = hold[i-1] + prices[i];
		hold[i] = max(hold[i-1], rest[i-1] - prices[i]);
		rest[i] = max(rest[i - 1], sold[i - 1]);

	}
	return  max(sold[n-1],rest[n-1]);

}

```



#### 第二版，更简洁一些



执行用时 :4 ms, 在所有 cpp 提交中击败了86.49%的用户

内存消耗 :8.5 MB, 在所有 cpp 提交中击败了97.35%的用户

```c++
    int maxProfit(vector<int>& prices) {
  	if (prices.size() == 0) return 0;
	int hold = -prices[0], sold = 0, rest = 0,pre_sold;

	for (auto &p:prices) {
		pre_sold = sold;
		sold = hold + p;
		hold = max(hold, rest - p);
		rest  = max(pre_sold, rest);

	}
	return  max(sold,rest);
        
    }
```

<p id="买卖股票的最佳时机含手续费"></p>



### 714. 买卖股票的最佳时机含手续费

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

给定一个整数数组 `prices`，其中第 `i` 个元素代表了第 `i` 天的股票价格 ；非负整数 `fee` 代表了交易股票的手续费用。

你可以无限次地完成交易，但是你每次交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

返回获得利润的最大值。

**示例 1:**

```
输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
输出: 8
解释: 能够达到的最大利润:  
在此处买入 prices[0] = 1
在此处卖出 prices[3] = 8
在此处买入 prices[4] = 4
在此处卖出 prices[5] = 9
总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
```

**注意:**

- `0 < prices.length <= 50000`.
- `0 < prices[i] < 50000`.
- `0 <= fee < 50000`.



#### 第一版，动态规划，优化

执行用时 :128 ms, 在所有 cpp 提交中击败了80.36%的用户

内存消耗 :19.7 MB, 在所有 cpp 提交中击败了24.70%的用户



```c++
当天买入的最大收益是：1、昨天买入的最大收益，即当天不买入。2、昨天卖出的最大收益-当天股票价格-手续费。

当天卖出的最大收益是：1、昨天卖出的最大收益，即当天无法卖出。2、昨天买入的最大收益+当天股票价格。

手续费算在买入和卖出里都是一样的结果。
思路：动态规划

代码


class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
      if (prices.empty()) return 0;

	int size = prices.size();
	vector<int> hold(size), sold(hold);
	hold[0] = -prices[0];
	for (int i = 1; i < size; ++i) {
		//表示没有股票在手时，身上含有的金额,状态的变化。
		sold[i] = max(sold[i - 1], hold[i - 1] + prices[i] - fee);
		//表示有股票在手时，含有的金额状态的变化
		hold[i] = max(hold[i - 1], sold[i - 1] - prices[i]);
	}
	return sold[size - 1];
};
优化空间
class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
        if (prices.empty()) return 0;
        int size = prices.size();
        int sold = 0, hold = -prices[0];        
        for (int i = 1; i < size; ++i) {
            sold = max(sold, hold + prices[i] - fee);
            hold = max(hold, sold - prices[i]);
        }
        return sold;
    }
};
```







#### 第二版，贪心算法



```c++
public int maxProfit(int[] prices, int fee) {
		 int len = prices.length;
		 if(len == 0 || len == 1) return 0;//边界条件
		 int sum = 0,cur=0;
		 int max = prices[0],min = prices[0];
		 for(int i=1;i<len;i++) {
			 min = Math.min(min, prices[i]);//记录当前最小值
			 max = Math.max(max, prices[i]);//记录当前的最大值
			 cur = Math.max(cur, prices[i]-min-fee);//记录当前可能的最大收益
			 if(max - prices[i] > fee) {//如果掉价超过了手续费还不如花手续费买卖股票
				 sum += cur;//赶紧抛出手中股票，能转多少是多少，然后又重新开始
				 min = prices[i];
				 max = prices[i];
				 cur = 0;
			 }
		 }
		 sum += cur;
		 return sum;
	 }
```

<p id="使用最小花费爬楼梯"></p>



### 746. 使用最小花费爬楼梯

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)

数组的每个索引做为一个阶梯，第 `i`个阶梯对应着一个非负数的体力花费值 `cost[i]`(索引从0开始)。

每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。

您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。

**示例 1:**

```
输入: cost = [10, 15, 20]
输出: 15
解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。
```

 **示例 2:**

```
输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
输出: 6
解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。
```

**注意：**

1. `cost` 的长度将会在 `[2, 1000]`。
2. 每一个 `cost[i]` 将会是一个Integer类型，范围为 `[0, 999]`。





#### 第一版，题意不是很好理解，在尾部添加一个0作为辅助项

执行用时 :4 ms, 在所有 cpp 提交中击败了97.94%的用户

内存消耗 :9.1 MB, 在所有 cpp 提交中击败了74.24%的用户

```c++
    int minCostClimbingStairs(vector<int>& cost) {
	cost.push_back(0);
	int n = cost.size();
	vector<int> res(n, 0);
	res[0] = cost[0];
	res[1] = cost[1];
	for (int i = 2; i < n; ++i ) {

		int d1 = res[i-1] + cost[i];
		int d2 = res[i - 2] + cost[i];
		res[i] = min(d1, d2);
		
	}

	return res[n-1];
    }
```





#### 第二版，内存改进一点了

执行用时 :4 ms, 在所有 cpp 提交中击败了97.94%的用户

内存消耗 :8.7 MB, 在所有 cpp 提交中击败了90.06%的用户



```C++

    int minCostClimbingStairs(vector<int>& cost) {
	cost.push_back(0);
	int n = cost.size();

	vector<int> res(3,0);
	res[0] = cost[0];
	res[1] = cost[1];

	for (int i = 2; i < n; ++i ) {

		int d1 = res[(i-1)%3] + cost[i];
		int d2 = res[(i - 2) % 3] + cost[i];
		res[i%3] = min(d1, d2);
	
	}

	return res[(n-1)%3];
    }
```

<p id="除数博弈"></p>



### 1025. 除数博弈

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/divisor-game/)

爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

最初，黑板上有一个数字 `N` 。在每个玩家的回合，玩家需要执行以下操作：

- 选出任一 `x`，满足 `0 < x < N` 且 `N % x == 0` 。
- 用 `N - x` 替换黑板上的数字 `N` 。

如果玩家无法执行这些操作，就会输掉游戏。

只有在爱丽丝在游戏中取得胜利时才返回 `True`，否则返回 `false`。假设两个玩家都以最佳状态参与游戏。

 



**示例 1：**

```
输入：2
输出：true
解释：爱丽丝选择 1，鲍勃无法进行操作。
```

**示例 2：**

```
输入：3
输出：false
解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
```

 

**提示：**

1. `1 <= N <= 1000`





#### 第一版，什么题啊，有点垃圾

执行用时 :0 ms, 在所有 cpp 提交中击败了100.00%的用户

内存消耗 :8.1 MB, 在所有 cpp 提交中击败了100.00%的用户

```C++
bool divisorGame(int N) {
    if (N==1) return false;
    return !divisorGame(N-1);
    
}
```