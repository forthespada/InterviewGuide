<p id="最长回文子串"></p>



### 5. 最长回文子串

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/longest-palindromic-substring/)

给定一个字符串 `s`，找到 `s` 中最长的回文子串。你可以假设 `s` 的最大长度为 1000。

**示例 1：**

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

**示例 2：**

```
输入: "cbbd"
输出: "bb"
```





#### 第一版，中间向外扩展法，自己写的

执行用时 :124 ms, 在所有 cpp 提交中击败了47.66%的用户

内存消耗 :46.8 MB, 在所有 cpp 提交中击败了32.27%的用户

```c++
void Substrings(string &s,string &longestStr,int i,int j) {

	string left = "", right = "";
	if (i == j) {
		right += s[j++];
		i--;
	}
	while ( i>=0 && j<s.size() && s[i]==s[j]) {
		left +=s[i--];
		right+=s[j++];

	}

	if (left.size() + right.size() > longestStr.size()) {
		reverse(left.begin(), left.end());
		longestStr = left + right;
	}

}

string longestPalindrome(string s) {
	if (s.size() <= 1) return s;
	string longestStr = "";
	for (int i = 0; i < s.size(); ++i) {
		Substrings(s, longestStr, i, i);
		Substrings(s, longestStr, i, i+1);

		if (longestStr.size() == s.size()) break;//自身就是个回文子串，直接break就行
	}

	return longestStr;

}
```

#### 第二版，标准DP解法

执行用时 :244 ms, 在所有 cpp 提交中击败了29.93%的用户

内存消耗 :18.9 MB, 在所有 cpp 提交中击败了39.03%的用户

```c++
string longestPalindrome(string s) {
	if (s.size() <= 1) return s;
	int n = s.size(),low=0,high=0,longLen=0;
	vector<vector<bool>> dp(n, vector<bool>(n, false));
	for (int i = n-1; i >=0; --i) {
		for (int j = i; j < n; ++j) {
			if (s[i] == s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
				dp[i][j] = true;
				if (j - i > longLen) {
					longLen = j - i;
					low = i;
					high = j;
				}
			}
		}	
	}

	string longestStr = "";
	while (low <= high)
		longestStr += s[low++];
	return longestStr;

}
```

<p id="不同路径"></p>





<p id="三角形最小路径和"></p>























