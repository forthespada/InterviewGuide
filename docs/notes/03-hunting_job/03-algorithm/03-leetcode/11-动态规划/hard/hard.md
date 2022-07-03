<p id="正则表达式匹配"></p>



### 剑指 Offer 19. 正则表达式匹配

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/)

请实现一个函数用来匹配包含`'. '`和`'*'`的正则表达式。模式中的字符`'.'`表示任意一个字符，而`'*'`表示它前面的字符可以出现任意次（含0次）。在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串`"aaa"`与模式`"a.a"`和`"ab*ac*a"`匹配，但与`"aa.a"`和`"ab*a"`均不匹配。

**示例 1:**

```
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
```

**示例 2:**

```
输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```

**示例 3:**

```
输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```

**示例 4:**

```
输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
```

**示例 5:**

```
输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
```

- `s` 可能为空，且只包含从 `a-z` 的小写字母。
- `p` 可能为空，且只包含从 `a-z` 的小写字母以及字符 `.` 和 `*`，无连续的 `'*'`。

#### 1、牛课上大佬写法

执行用时：20 ms, 在所有 C++ 提交中击败了53.68%的用户

内存消耗：6.1 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
bool isMatchCore( const char* s,  const char* p) {
	if (*s=='\0' && *p=='\0') return true;
	if (*s != '\0' && *p == '\0') return false;
	if (*(p+1) != '*') {
		if (*s == *p || (*s != '\0' && *p == '.'))  return isMatchCore(s + 1, p + 1);
		else
			return false;
	}
	else {
		if (*s == *p || (*s != '\0' && *p == '.')) return isMatchCore(s, p + 2) || isMatchCore(s + 1, p);
		else
			return isMatchCore(s, p + 2);
	}

}

bool isMatch(string s, string p) {
	
	return isMatchCore(s.c_str(), p.c_str());
}
~~~

<p id="最长有效括号"></p>



### 32. 最长有效括号 这个真的难

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/longest-valid-parentheses/)

### 字节面试4连击

https://mp.weixin.qq.com/s/ONRJviXVqmKimchyZLeJjg

给定一个只包含 `'('` 和 `')'` 的字符串，找出最长的包含有效括号的子串的长度。

**示例 1:**

```
输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
```

**示例 2:**

```
输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"
```





#### 第一版，自己写的，完全错误，没有意识到这是个DP问题

**"()(()"**

**4**

**2**





```c++
    int longestValidParentheses(string s) {
    stack<char> res;
	int cut = 0;
	for (auto& a : s) {
		if (res.empty() || a == '(') res.push(a);
		else if (a == ')') {
			if (res.top() == '(') {
				cut++;
				res.pop();
			}
		}


	}

	return 2 * cut;
        
    }
```



我这样的算法相当于计算s中有多少个匹配的括号，并没有想到序列问题



#### 第二版本，借助栈





执行用时 :4 ms, 在所有 cpp 提交中击败了96.32%的用户

内存消耗 :9.5 MB, 在所有 cpp 提交中击败了82.19%的用户



这道题的优化版本我们仍然是用栈来做，不过入栈的时候，不是让 "(" 入栈，而是让 "(" 的下标入栈。步骤如下：

1、先把 -1 放入栈内。（至于为什么？看到后面你就知道了）
2、、对于遇到的每个 '(' ，我们将它的**下标**放入栈中。
3、对于遇到的每个 ‘)’ ，我们弹出栈顶的元素并将当前元素的**下标**与弹出元素下标**作差**，得出**当前有效括号字符串的长度**。

通过这种方法，我们继续计算有效子字符串的长度，并最终返回最长有效子字符串的长度。

看不懂？没事，我弄个例子画几个图，例如 s = "( ) ) ( ( ) )"，并且用变量 max 来保存最长有效字符串的程度，i 表示当前字符串的下标

0、初始化：max = 0; i = 0。-1 放入栈内

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/b95QHPkcOMBibBm3hJdVqiazmbxT7yDWUo4XDenEf514s9BKRb9oLKpR5Mnz63EBwlEIDO3xP9o0hMzefWKcHibYg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

1、i = 0，s[i] = '('，下标 i = 0  入栈

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/b95QHPkcOMBibBm3hJdVqiazmbxT7yDWUoD0cpPz4ZasKUH6bnv02kx7uUiaS0FUablE4eRBAicHpY0zxAnicy8nibmw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

2、i = 1，s[i] = ')'，出栈; i - 栈顶元素 = 1 - (-1) = 2，此时 max = 2

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/b95QHPkcOMBibBm3hJdVqiazmbxT7yDWUo0E58M5cj12BfFPOq5ZLnpsoWj5huQKYg07Axn95N9jUCHI4Lic5zylA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)


3、i = 2，s[i] = ')'，出栈；：由于 -1 出栈后，栈顶没有元素了，所以这个时候我们必须把 ')' 的下标入栈，相当于最开始的初始化。

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/b95QHPkcOMBibBm3hJdVqiazmbxT7yDWUo7gz2SQicfB7IsiaGt1A4QdIqaHiancK0UcnMq4Ph6WKN4Hp0OBsd3fRfA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)


4、i = 3，s[i] = '('，入栈;

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/b95QHPkcOMBibBm3hJdVqiazmbxT7yDWUoiaZEQ97KiaQiaF2CSLWmcvForr5LgcZq5jflK1vjfQcRJV2gQdnanwFdw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)


5、i = 4，s[i] = '('，入栈;

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/b95QHPkcOMBibBm3hJdVqiazmbxT7yDWUofNfXSF7DibzJAkT0qn3ibs5lzYianUHJUCCpq9TVAKQRF0mdLib2TxEoOA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)


6、i = 5，s[i] = ')'，出栈；i - 栈顶 = 5 - 3 = 2；此时 max = 2;

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/b95QHPkcOMBibBm3hJdVqiazmbxT7yDWUoytnmb4pxnyhq6TZATIpBQw72depkhlt1QJ0OZ8yiaShJJNwEoqYYdFg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)


7、i = 6，s[i] = ')'，出栈；i - 栈顶 = 6 - 2 = 4；此时 max = 4;

![在这里插入图片描述](https://mmbiz.qpic.cn/mmbiz_png/b95QHPkcOMBibBm3hJdVqiazmbxT7yDWUohwE7wQae2SZicp6C4u15reGlDVLLLAX9n080Vm1noOoBAChK5QcS1bw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

8、遍历结束，最长有效括号为 4。





```c++
    int longestValidParentheses(string s) {
	stack<int> res;
	int len = s.size(),maxNum=0;
	res.push(-1);
	for (int i = 0; i < len; ++i) {
		
		if (s[i] == '(') {
			//下标入栈
			res.push(i);
		}
		else {
			// 出栈
			res.pop();
			// 看栈顶是否为空，为空的话就不能作差了
			if (res.empty()) {
				res.push(i);
			}
			else {
				// i - 栈顶，获得档期有效括号长度
				maxNum = max(maxNum, i - res.top());
			}
		}
	}
		
	return maxNum;
        
    }
```





#### 第二种栈的解法，其实更慢一点了

执行用时 :12 ms, 在所有 cpp 提交中击败了40.53%的用户

内存消耗 :11.7 MB, 在所有 cpp 提交中击败了5.54%的用户


对于这种括号匹配问题，一般都是使用栈

我们先找到所有可以匹配的索引号，然后找出最长连续数列！

例如：s = )(()())，我们用栈可以找到，

位置 2 和位置 3 匹配，

位置 4 和位置 5 匹配，

位置 1 和位置 6 匹配，

这个数组为：2,3,4,5,1,6 这是通过栈找到的，我们按递增排序！1,2,3,4,5,6

找出该数组的最长连续数列的长度就是最长有效括号长度！

所以时间复杂度来自排序：O(nlogn)

```c++
int longestValidParentheses(string s) { //   ())(())

	stack<int> res;
	vector<int> num;
	int len = s.size(),maxNum=0;
	for (int i = 0; i < len; ++i) {
		
		if (s[i] == '(') {
			//下标入栈
			res.push(i);
		}
		else {		
			// 出栈
			if (res.empty()) {
				res.push(i);
			}
			else if(s[res.top()]=='('){ //这一步很重要
				num.push_back(res.top());
				res.pop();
				num.push_back(i);
			}
		}
	}
	
	//for (auto& a : num) {
	//	cout << a<<endl;
	//}

	sort(num.begin(), num.end());

	//for (auto& a : num) {
	//	cout << a << endl;
	//}

	stack<int>().swap(res);
	for (auto& a : num) {
		if (res.empty())
			res.push(a);
		else if (a - res.top() == 1) {
			res.push(a);
		}
		else {

			maxNum = max(maxNum, static_cast<int>(res.size()));
			stack<int>().swap(res);
			res.push(a);
		}
	}
	maxNum = max(maxNum, static_cast<int>(res.size()));

	return maxNum;
}
```





#### 第三版本，用变量代替栈的一个解法

用变量来代替栈来优化，不过这个时候我们需要两个变量，我们假设变量为 left 和 right。

我们在从从左到右遍历字符串的过程中，用 left 记录 '(' 的数量，用 right 记录 ')' 的数量。并且在遍历的过程中：

1、如果 left >= right，显然这个时候 right 个 ')' 都将一定能够得到匹配。所以当前的有效括号长度为 2 * right。然后更新 max。

2、如果 left < right，显然这个时候部分 ')' 一定得不到匹配，此时我们把 left 和 right 都置为 0。

**当遍历完字符串，我们是否就得到最大长度的有效括号了呢？**大家可以想一下

答是不可以的，我们还需要**从右到左**遍历计算一下。

**为什么呢？**

因为实际上 '(' 和 ')' 其实是等价的，为什么就不可以倒过来遍历计算呢？所以，千万别忽略了哈。



执行用时 :4 ms, 在所有 cpp 提交中击败了96.32%的用户

内存消耗 :9 MB, 在所有 cpp 提交中击败了98.50%的用户



```c++
int longestValidParentheses(string s) { //   ())(())

	int left = 0, right = 0, maxNum = 0;
	// 从左到右
	for (int i = 0; i < s.length(); i++) {
		if (s[i] == '(') {
			left++;
		}
		else {
			right++;
		}
		if (left == right) {
			maxNum = max(maxNum, 2 * right);
		}
		else if (right > left) {
			left = right = 0;
		}
	}
	left = right = 0;
	// 从右到左
	for (int i = s.length() - 1; i >= 0; i--) {
		if (s[i] == '(') {
			left++;
		}
		else {
			right++;
		}
		if (left == right) {
			maxNum =max(maxNum, 2 * left);
		}
		else if (left > right) {
			left = right = 0;
		}
	}
	return maxNum;
}

```



这个问题可以通过动态规划解决。我们定义一个 \text{dp}dp 数组，其中第 ii 个元素表示以下标为 ii 的字符结尾的最长有效子字符串的长度。我们将 \text{dp}dp 数组全部初始化为 0 。现在，很明显有效的子字符串一定以 \text{‘)’}‘)’ 结尾。这进一步可以得出结论：以 \text{‘(’}‘(’ 结尾的子字符串对应的 \text{dp}dp 数组位置上的值必定为 0 。所以说我们只需要更新 \text{‘)’}‘)’ 在 \text{dp}dp 数组中对应位置的值。

<p id="鸡蛋掉落"></p>



### 887. 鸡蛋掉落   谷歌微软经典题目

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/super-egg-drop/)

你将获得 `K` 个鸡蛋，并可以使用一栋从 `1` 到 `N`  共有 `N` 层楼的建筑。

每个蛋的功能都是一样的，如果一个蛋碎了，你就不能再把它掉下去。

你知道存在楼层 `F` ，满足 `0 <= F <= N` 任何从高于 `F` 的楼层落下的鸡蛋都会碎，从 `F` 楼层或比它低的楼层落下的鸡蛋都不会破。

每次*移动*，你可以取一个鸡蛋（如果你有完整的鸡蛋）并把它从任一楼层 `X` 扔下（满足 `1 <= X <= N`）。

你的目标是**确切地**知道 `F` 的值是多少。

无论 `F` 的初始值如何，你确定 `F` 的值的最小移动次数是多少？

 



**示例 1：**

```
输入：K = 1, N = 2
输出：2
解释：
鸡蛋从 1 楼掉落。如果它碎了，我们肯定知道 F = 0 。
否则，鸡蛋从 2 楼掉落。如果它碎了，我们肯定知道 F = 1 。
如果它没碎，那么我们肯定知道 F = 2 。
因此，在最坏的情况下我们需要移动 2 次以确定 F 是多少。
```

**示例 2：**

```
输入：K = 2, N = 6
输出：3
```

**示例 3：**

```
输入：K = 3, N = 14
输出：4
```

 

**提示：**

1. `1 <= K <= 100`
2. `1 <= N <= 10000`





#### 第0版 最好懂，可是会超时



```c++
int superEggDrop(int K, int N)
{
	if (N == 0 || N == 1 || K == 1) {
		return N;
	}

	int minNum = N;
	for (int i = 1; i <= N; i++) {
		int tMin = max(superEggDrop(K - 1, i - 1), superEggDrop(K, N - i));
		minNum = min(minNum, 1 + tMin);
	}
	return minNum;
}
```



#### 第一版，公众号解析

https://mp.weixin.qq.com/s/7PEBnUfIpiuw26lVeihlhA







#### 第二版，换个思路解题

执行用时 :8 ms, 在所有 cpp 提交中击败了68.65%的用户

内存消耗 :8.3 MB, 在所有 cpp 提交中击败了93.34%的用户



**从多少楼层多少个蛋最少要扔几次，转变为有多少个蛋扔几次可以测试出多少楼层。**







执行用时 :8 ms, 在所有 cpp 提交中击败了68.65%的用户

内存消耗 :8.1 MB, 在所有 cpp 提交中击败了97.84%的用户



```c++
int help(int i, int K) {
	return (i == 1 || K == 1) ? i : help(i - 1, K - 1) + help(i - 1, K) + 1;
}


int superEggDrop(int K, int N) {
	int count = 1;
	while (help(count, K) < N) {
		count++;
	}
	return count;
}

```

#### 第二版的第二种解释



上面的方法的思路，都还是顺着题目的思路的进行的，其实我们可以换一个思路来想：“求k个鸡蛋在m步内可以测出多少层”。我们令dp [k] [m]表示k个鸡蛋在m步内可以测出的最多的层数，那么当我们在第X层扔鸡蛋的时候，就有两种情况：

鸡蛋碎了，我们少了一颗鸡蛋，也用掉了一步，此时测出N - X + dp   [k-1]  [m-1]层，X和它上面的N-X层已经通过这次扔鸡蛋确定大于F；
鸡蛋没碎，鸡蛋的数量没有变，但是用掉了一步，剩余X + dp [k] [m-1]，X层及其以下已经通过这次扔鸡蛋确定不会大于F；
也就是说，我们每一次扔鸡蛋，不仅仅确定了下一次扔鸡蛋的楼层的方向，也确定了另一半楼层与F的大小关系，所以在下面的关键代码中，使用的不再是max，而是加法（这里是重点）。评论里有人问到为什么是相加，其实这里有一个惯性思维的误区，上面的诸多解法中，往往求max的思路是“两种方式中较大的那一个结果”，其实这里的相加，不是鸡蛋碎了和没碎两种情况的相加，而是“本次扔之后可能测出来的层数 + 本次扔之前已经测出来的层数”。





假设我们有 k 个鸡蛋可以移动 m 步，考虑某一步 t 应该在哪一层丢鸡蛋？一个正确的选择是在 dp [k-1] [t-1] + 1 层丢鸡蛋，结果分两种情况：

1. 如果鸡蛋碎了，我们首先排除了该层以上的所有楼层（不管这个楼有多高），而对于剩下的 dp [k-1] [t-1] 层楼，我们一定能用 k-1 个鸡蛋在 t-1 步内求解。因此这种情况下，我们总共可以求解无限高的楼层。可见，这是一种非常好的情况，但并不总是发生。
2. 如果鸡蛋没碎，我们首先排除了该层以下的 dp [k-1] [t-1] 层楼，此时我们还有 k 个蛋和 t-1 步，那么我们去该层以上的楼层继续测得 dp [k] [t-1] 层楼。因此这种情况下，我们总共可以求解 dp [k-1] [t-1] + dp [k] [t-1] + 1 层楼。

容易想象，在所有 m 步中只要有一次出现了第一种情况，那么我们就可以求解无限高的楼层。但“保证求解”的定义要求我们排除一切运气成分，因此我们只得认为每次移动都遇到第二种情况。于是得到递推公式：

dp [k ] [t] = dp [k-1] [t-1] + dp [k] [t-1] + 1







执行用时 :8 ms, 在所有 cpp 提交中击败了68.65%的用户

内存消耗 :31.8 MB, 在所有 cpp 提交中击败了25.89%的用户

```c++
int superEggDrop(int K, int N)
{
	vector<vector<int>>  dp(K + 1,vector<int>(N + 1,0));
	//当N=0时，K等于多少都是0，或者当K=1时，只能有K种解法了
	//dp[0][m] = 0; // zero egg
	for (int n = 1; n <= N; n++) {
		for (int k = 1; k <= K; k++) {
			dp[k][n] = dp[k][n - 1] + dp[k - 1][n - 1] + 1;
			if (dp[k][n] >= N) {
				return n;
			}
		}
	}
	return N;
}
```







```c++

```












