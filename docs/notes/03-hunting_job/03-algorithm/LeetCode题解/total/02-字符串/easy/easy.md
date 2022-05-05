<p id="罗马数字转整数"></p>


### 13. 罗马数字转整数

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/roman-to-integer/)

罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 2 写做 `II` ，即为两个并列的 1。12 写做 `XII` ，即为 `X` + `II` 。 27 写做  `XXVII`, 即为 `XX` + `V` + `II` 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 `IIII`，而是 `IV`。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 `IX`。这个特殊的规则只适用于以下六种情况：

- `I` 可以放在 `V` (5) 和 `X` (10) 的左边，来表示 4 和 9。
- `X` 可以放在 `L` (50) 和 `C` (100) 的左边，来表示 40 和 90。 
- `C` 可以放在 `D` (500) 和 `M` (1000) 的左边，来表示 400 和 900。

给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

**示例 1:**

```
输入: "III"
输出: 3
```

**示例 2:**

```
输入: "IV"
输出: 4
```

**示例 3:**

```
输入: "IX"
输出: 9
```

**示例 4:**

```
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

**示例 5:**

```
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```



#### 第一版，比较简单，注意边界条件即可

执行用时 :28 ms, 在所有 cpp 提交中击败了45.95%的用户

内存消耗 :10.3 MB, 在所有 cpp 提交中击败了83.63%的用户



```c++
int romanToInt(string s) {
	unordered_map<char, int> nums = { {'I',1},{'V',5},{'X',10},{'L',50},{'C',100},{'D',500},{'M',1000} };
	int sum = 0, len = s.size();
	for (int i = 0; i < len; ++i) {
		if (s[i] == 'I') {

			if (i<len-1&&s[i+1] == 'V') { sum += 4; i++; } //千万注意i要小于len-1才可以，注意不要越界
			else if (i < len - 1 && s[i+1] == 'X') {
				sum += 9;
				i++;
		}
			else
				sum += 1;
		} else  if (s[i] == 'X') {

			if (i < len - 1 && s[i+1] == 'L') { sum += 40; i++; }
			else if (i < len - 1 && s[i+1] == 'C') {
				sum += 90;
				i++;
			}
			else
				sum += 10;
		}else if (s[i] == 'C') {

			if (i < len - 1 && s[i+1] == 'D') { sum += 400; i++; }
			else if (i < len - 1 && s[i+1] == 'M') {
				sum += 900;
				i++;
			}
			else
				sum += 100;
		}
		else  if (s[i] == 'V') sum += 5;
		else  if (s[i] == 'L') sum += 50;
		else  if (s[i] == 'D') sum += 500;
		else  if (s[i] == 'M') sum += 1000;


	}

	return sum;
}
```



<p id="二进制求和"></p>


### 67. 二进制求和

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/add-binary/)

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为**非空**字符串且只包含数字 `1` 和 `0`。

**示例 1:**

```
输入: a = "11", b = "1"
输出: "100"
```

**示例 2:**

```
输入: a = "1010", b = "1011"
输出: "10101"
```





#### 第一版，其实不难，仔细一点就可以了

执行用时 :8 ms, 在所有 cpp 提交中击败了48.84%的用户

内存消耗 :8.7 MB, 在所有 cpp 提交中击败了45.19%的用户

```c++
    string addBinary(string a, string b) {
	reverse(a.begin(), a.end());
	reverse(b.begin(), b.end());
	if (a.size() < b.size()) swap(a, b);

	vector<char> res;
	int len = b.size(),minus = a.size()-b.size();
	for (int i = 0; i <len; ++i) {
		res.push_back(b[i] - '0' + a[i]);
	}
	//cout << res << endl;
	for (int i = len; i < len+minus; ++i)
		res.push_back(a[i]);
	/*reverse(res.begin(), res.end());
	cout << res << endl;*/
	//for (auto a : res)
	//	cout << a;
	//cout << endl;
	for (int i = 0; i <len+minus-1; ++i) {
		if (res[i] >= '2') {
			res[i + 1] = res[i + 1] + (res[i] - '0')/2;
			res[i] = '0' + (res[i] -'0') % 2;
		}

		//for (auto a : res)
		//	cout << a;
		//cout << endl;
	}
	//cout << res << endl;
	string result;
	for (auto& a : res)
		result += a;

	//cout << result << endl;

	reverse(result.begin(), result.end());
	if (result[0] > '1') {
		result[0] = result[0] -2;
		result = '1' + result;
	}

	//cout << res << endl;
	//while (res[0] > '1') {
	//	res[0] = res[0] - 2;
	//	res = '1' + res;
	//}
	//reverse(res.begin(), res.end());
	return result;
        
    }
```

<p id="字符串中的单词数"></p>



### 434. 字符串中的单词数

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/number-of-segments-in-a-string/)

统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

请注意，你可以假定字符串里不包括任何不可打印的字符。

**示例:**

```
输入: "Hello, my name is John"
输出: 5
```





#### 第一版，这里对单词的定义很不一样。。。

执行用时 :4 ms, 在所有 cpp 提交中击败了65.68%的用户

内存消耗 :8.5 MB, 在所有 cpp 提交中击败了23.30%的用户

```c++
int countSegments(string s) {
	int cut = 0;
	string word;
	for (auto& a : s) {
		if (a == ' ' && word != "") {
			cut++;
			//cout << word << endl;
			word = "";
		}
		else if (a == ' ' && word == "") continue;
		else
		{			
			word += a;
		}

	}
	if (word != "") cut++;
	return cut;
}
```



#### 第二版，利用stringstream来实现

执行用时 :4 ms, 在所有 cpp 提交中击败了65.68%的用户

内存消耗 :8.5 MB, 在所有 cpp 提交中击败了33.50%的用户



**是以空格作为分隔符的，很巧妙的流的概念：stringsstream**

```c++
    int countSegments(string s) {
        string str;
        int count = 0;
        stringstream ss;
        ss << s;
        while (ss >> str) 
            count ++;
        return count;
        
    }
```



<p id="最常见的单词"></p>


### 819. 最常见的单词

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/most-common-word/)

给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。题目保证至少有一个词不在禁用列表中，而且答案唯一。

禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。

 

**示例：**

```
输入: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
输出: "ball"
解释: 
"hit" 出现了3次，但它是一个禁用的单词。
"ball" 出现了2次 (同时没有其他单词出现2次)，所以它是段落里出现次数最多的，且不在禁用列表中的单词。 
注意，所有这些单词在段落里不区分大小写，标点符号需要忽略（即使是紧挨着单词也忽略， 比如 "ball,"）， 
"hit"不是最终的答案，虽然它出现次数更多，但它在禁用单词列表中。
```

 

**说明：**

- `1 <= 段落长度 <= 1000`.
- `1 <= 禁用单词个数 <= 100`.
- `1 <= 禁用单词长度 <= 10`.
- 答案是唯一的, 且都是小写字母 (即使在 `paragraph` 里是大写的，即使是一些特定的名词，答案都是小写的。)
- `paragraph` 只包含字母、空格和下列标点符号`!?',;.`
- 不存在没有连字符或者带有连字符的单词。
- 单词里只包含字母，不会出现省略号或者其他标点符号。



#### 第一版，有的没考虑到

输入：**"a, a, a, a, b,b,b,c, c" ["a"]**

输出：**"bbbc"**

预期：**"b"**

```c++
 string mostCommonWord(string paragraph, vector<string>& banned) {
	string word;
	int len=paragraph.size(),max=1;
	unordered_map<string, int> res;
	for (int i = 0; i < len; ++i) {
		if (paragraph[i] >= 'A' && paragraph[i] <= 'Z') word += paragraph[i] + 'a' - 'A';
		else if (paragraph[i] >= 'a' && paragraph[i] <= 'z') word += paragraph[i];
		else if (paragraph[i] == ' ') {//空格
			if (find(banned.begin(), banned.end(), word) == banned.end()) {
				res[word] += 1;
			}
			word = "";
		}
	}


	for (auto &a : res) {
		if (max <= a.second) { 
			max = a.second;
			word = a.first; 
		}
	}

	return word;
    }
```



#### 第二版，其实不难,也可以再优化一点

执行用时 :8 ms, 在所有 cpp 提交中击败了78.04%的用户

内存消耗 :8.6 MB, 在所有 cpp 提交中击败了97.33%的用户

```c++
    string mostCommonWord(string paragraph, vector<string>& banned) {
	string word;
	int len=paragraph.size(),max=1;
	unordered_map<string, int> res;
	for (auto &p:paragraph) {

		if (p >= 'A' && p <= 'Z') word += p + 'a' - 'A';
		else if (p >= 'a' && p <= 'z') word += p;
		else if(word!="") // && paragraph[i]==' '|| paragraph[i] == '!' || paragraph[i] == '?' || paragraph[i] ==  '\''|| paragraph[i] == ',' || paragraph[i] == ':' || paragraph[i] == '.'
		{
			if (find(banned.begin(), banned.end(), word) == banned.end()) {
				res[word] += 1;
			}
			word = "";
		}
	

	}


	for (auto &a : res) {
		//cout << a.first << " " << a.second << endl;
		if (max <= a.second) { 
			max = a.second;
			word = a.first; 
		}
	}

	return word;
    }
```





#### 第三版，这个反而更快，有点不可思议。。。

执行用时 :4 ms, 在所有 cpp 提交中击败了98.99%的用户

内存消耗 :8.6 MB, 在所有 cpp 提交中击败了100.00%的用户

```c++
    string mostCommonWord(string paragraph, vector<string>& banned) {
    string word;
	int len=paragraph.size(),max=1;
	unordered_map<string, int> res;
	for (auto p:paragraph) {

		if (p >= 'A' && p <= 'Z') word += p + 'a' - 'A';
		else if (p >= 'a' && p <= 'z') word += p;
		else if(word!="") 
		{
			if (find(banned.begin(), banned.end(), word) == banned.end()) {
				res[word] += 1;
			}
			word = "";
		}
	

	}


	for (auto a : res) {
		if (max <= a.second) { 
			max = a.second;
			word = a.first; 
		}
	}

	return word;
    }
```

<p id="亲密字符串"></p>


### 859. 亲密字符串

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/buddy-strings/)

给定两个由小写字母构成的字符串 `A` 和 `B` ，只要我们可以通过交换 `A` 中的两个字母得到与 `B` 相等的结果，就返回 `true` ；否则返回 `false` 。

 

**示例 1：**

```
输入： A = "ab", B = "ba"
输出： true
```

**示例 2：**

```
输入： A = "ab", B = "ab"
输出： false
```

**示例 3:**

```
输入： A = "aa", B = "aa"
输出： true
```

**示例 4：**

```
输入： A = "aaaaaaabc", B = "aaaaaaacb"
输出： true
```

**示例 5：**

```
输入： A = "", B = "aa"
输出： false
```

 

**提示：**

1. `0 <= A.length <= 20000`
2. `0 <= B.length <= 20000`
3. `A` 和 `B` 仅由小写字母构成。



#### 第一版，错误的解法

```c++
 bool buddyStrings(string A, string B) {
    if (A.size() != B.size()) return false;
	int len = A.size(), index = 0;
	unordered_set<char> res;
	string strA, strB;
	for (int i = 0; i < len; ++i) {
		if (A[i] != B[i]) {
			strA += A[i];
			strB += B[i];
		}
		else
			res.insert(A[i]);
	}

	if (res.size() == 1) return true;
	if (strA.size() != 2) return false;
	return strA[0] == strB[1] && strA[1] == strB[0];
    }
```





#### 第二版，看了提示

执行用时 :8 ms, 在所有 cpp 提交中击败了68.31%的用户

内存消耗 :9.2 MB, 在所有 cpp 提交中击败了19.33%的用户



就三种情况

1、长度不一样或者长度小于2，直接false

2、不匹配的个数超过2个，false

3、如果全部一样，则看A中是否有重复的字符，有就是true了，

否则就看两个不匹配的位序上的字符交换后是否一样

```c++
    bool buddyStrings(string A, string B) {
	if (A.size() != B.size() || A.size()<2) return false;
	int len = A.size();
	vector<int> res;
	res.reserve(len);
	for (int i = 0; i < len; ++i) {
		if (A[i] != B[i]) {
			res.push_back(i);
			if (res.size() > 2) return false;
		}
	}


	if (res.size() == 0) {
		unordered_set<char> misMatch(A.begin(), A.end());
		return misMatch.size() < len;
	}
	return A[res[0]] == B[res[1]] && A[res[1]] == B[res[0]];
    }
```

<p id="重复叠加字符串匹配"></p>


### 686. 重复叠加字符串匹配

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/repeated-string-match/)

给定两个字符串 A 和 B, 寻找重复叠加字符串A的最小次数，使得字符串B成为叠加后的字符串A的子串，如果不存在则返回 -1。

举个例子，A = "abcd"，B = "cdabcdab"。

答案为 3， 因为 A 重复叠加三遍后为 “abcdabcdabcd”，此时 B 是其子串；A 重复叠加两遍后为"abcdabcd"，B 并不是其子串。

**注意:**

 `A` 与 `B` 字符串的长度在1和10000区间范围内。





#### 第一版，很精妙,很经典，很厉害

执行用时 :16 ms, 在所有 cpp 提交中击败了92.28%的用户

内存消耗 :9.2 MB, 在所有 cpp 提交中击败了78.79%的用户

```c++
if (A.empty()) {
		return -1;
	}
	string T = A;
	int i = 1;
	while (T.size() < B.size()) {
		T.append(A);
		++i;
	}
	//A的长度大于等于B了
	if (T.find(B) != string::npos) {//顺序增长的就可以了,比如abcd 和 abcdabcdabcd
		return i;
	}
	T.append(A);
	++i;
	if (T.find(B) != string::npos) { //不是按序增长，比如abcd 和 cdabcdabcdabcdab
		return i;
	}
	return -1;

```

<p id="验证回文字符串"></p>


### 680. 验证回文字符串 Ⅱ

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/valid-palindrome-ii/)

给定一个非空字符串 `s`，**最多**删除一个字符。判断是否能成为回文字符串。

**示例 1:**

```
输入: "aba"
输出: True
```

**示例 2:**

```
输入: "abca"
输出: True
解释: 你可以删除c字符。
```

**注意:**

1. 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。







#### 第一版，想差了，不应该用间两端扩展法的

abc

aba

aeeeee



```c++
bool equal(string& s, int low, int high) {
	int cut = 0;
	if (low == high) {
		low--;
		high++;
		cut++;
	}
	while (low >= 0 && high < s.size()) {
		if (s[low] == s[high]) {
			low--;
			high++;
		}
		else
		{
			cut++;
			low--;
			high++;
		}
		if (cut == 2) return false;
	}

	return low == -1 && high == s.size();

}

bool validPalindrome(string s) {
	if (s.size() < 3) return true;

	int len = s.size();
	if (len % 2 == 0) return equal(s, -1 + len / 2, len / 2);
	else
		return equal(s, len / 2, len / 2);

}
```



#### 第二版，应该从两端向中间进发

**从两端向中间进发，遇到不相等的了就加一或者减一再进行判断**

**，千万注意边界的判断情况**

执行用时 :80 ms, 在所有 cpp 提交中击败了74.60%的用户

内存消耗 :21.7 MB, 在所有 cpp 提交中击败了89.60%的用户



```c++
bool equal(string& s, int low, int high) {
	while (low < high && s[low] == s[high]) {
		low++;
		high--;
	}

	return low >= high;
}

bool validPalindrome(string s) {
	if (s.size() < 3) return true;

	int low=0,high = s.size()-1;
	while (s[low] == s[high]&&low < high) {
		low++;
		high--;
	}
	if (low == high ||  low-high==1) return true;
	else if (equal(s, low+1, high) || equal(s, low, high-1))
		return true;
	else
		return false;
		
}


```



