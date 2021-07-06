<p id="快乐数"></p>

### 202. 快乐数

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/happy-number/)

编写一个算法来判断一个数是不是“快乐数”。

一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

**示例:** 

```
输入: 19
输出: true
解释: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```



#### 第一版，其实不算难，试试几个样例就知道了



不是快乐数的会重复某些过程

执行用时 :4 ms, 在所有 cpp 提交中击败了78.57%的用户

内存消耗 :8.6 MB, 在所有 cpp 提交中击败了7.97%的用户





```c++
bool isHappy(int n) {

	if (n <= 0) return false;
	unordered_set<int> res;
	int sum = 0;
	while (n != 1) {
		sum = 0;
		while (n > 9) {
			sum += (n % 10) * (n % 10);
			n = n / 10;
		}
		sum += n * n;
		if (res.find(sum) != res.end()) return false;
		else res.insert(sum);
		n = sum;
	}

	return true;
}

```

<p id="计数质数"></p>



### 204. 计数质数

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/count-primes/)

统计所有小于非负整数 *n* 的质数的数量。

**示例:**

```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```



#### 第一版，暴力法，超时



```c++
int isPrimes(int i) {


	for (int j = 2; j * j <= i; ++j) {
		if (i % j == 0) return 0;
	}

	return 1;


}
int countPrimes(int n) {
	if (n <= 2) return 0;

	int sum = 0;
	for (int i = 2; i < n; ++i) {
		sum += isPrimes(i);
	}

	return sum;

}




```

#### 第二版，比较牛逼的一种解法



执行用时 :40 ms, 在所有 cpp 提交中击败了91.18%的用户

内存消耗 :21.6 MB, 在所有 cpp 提交中击败了5.23%的用户



这题搜到一个非常牛逼的算法,叫做厄拉多塞筛法. 比如说求20以内质数的个数,首先0,1不是质数.2是第一个质数,然后把20以内所有2的倍数划去.2后面紧跟的数即为下一个质数3,然后把3所有的倍数划去.3后面紧跟的数即为下一个质数5,再把5所有的倍数划去.以此类推.





```c++
int countPrimes(int n) {
	vector<int> a(n);
	int count = 0;
	for (int i = 2; i < n; i++)
		a[i] = 1;

	for (int i = 2; i < n; i++)
		if (a[i])
		{
			count++;
			for (int j = 2 * i; j < n; j += i)
				a[j] = 0;
		}

	return count;

}
```

<p id="同构字符串"></p>



### 205. 同构字符串

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/isomorphic-strings/)

给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

示例 1:

输入: s = "egg", t = "add"
输出: true
示例 2:

输入: s = "foo", t = "bar"
输出: false
示例 3:

输入: s = "paper", t = "title"
输出: true
说明:
你可以假设 s 和 t 具有相同的长度。



#### 第一版，自己写的，常见写法，比较慢

执行用时 :20 ms, 在所有 cpp 提交中击败了42.04%的用户

内存消耗 :10.4 MB, 在所有 cpp 提交中击败了5.09%的用户



```c++
bool isIsomorphic(string s, string t) {
	//if (s.size() == 0) return true;


	unordered_map<char, char> un_mp1(s.size()), un_mp2(s.size());
	for (unsigned i = 0; i < s.size();++i) {
		un_mp1[s[i]]= t[i];
		un_mp2[t[i]]= s[i];
	}


	for (unsigned i = 0; i < s.size(); ++i) {
		if(un_mp1[s[i]]!=t[i]  || un_mp2[t[i]]!=s[i]) return false;
	}

	return true;

}
```



#### 第二版，比较第一次出现的位置

对比两个字符串对应位置的字符在字符串内第一次出现的位置



执行用时 :12 ms, 在所有 cpp 提交中击败了79.16%的用户

内存消耗 :9.2 MB, 在所有 cpp 提交中击败了21.24%的用户

```c++
    bool isIsomorphic(string s, string t) {
        for(int i=0;i<s.size();i++){
            if(s.find(s[i])!=t.find(t[i]))
            return false;
        }
        return true;
```









#### 第三版 ，另一种写法，同步进行相同字符位置的更替



执行用时 :16 ms, 在所有 cpp 提交中击败了58.33%的用户

内存消耗 :9.3 MB, 在所有 cpp 提交中击败了12.83%的用户



```c++
bool isIsomorphic(string s, string t) {
	unordered_map<char, int> un_mp1, un_mp2;
	for (unsigned i = 0; i < s.size(); ++i) {
		un_mp1[s[i]] += 1+i;
		un_mp2[t[i]] += 1+i;
		if (un_mp1[s[i]] !=  un_mp2[t[i]] ) return false;

	}
	return true;

}

```

<p id="单词规律"></p>



### 290. 单词规律

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/word-pattern/)

给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
示例 4:

输入: pattern = "abba", str = "dog dog dog dog"
输出: false
说明:
你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    



#### 第一版，自己写的，参照以前的一个题目,经典的hash方法，非常好

执行用时 :4 ms, 在所有 cpp 提交中击败了76.14%的用户

内存消耗 :8.4 MB, 在所有 cpp 提交中击败了81.29%的用户



```c++
bool wordPattern(string pattern, string str) {

	unordered_map<char, int> patMp;
	unordered_map<string, int> strMp;
	string temp = "";
	int a = 1;
	unsigned i, j;
	for (i = 0, j = 0; i < pattern.size() && j < str.size(); ++j, ++i) {
		temp = "";
		patMp[pattern[i]] += i+a;
		//cout << "pat " << pattern[i] << " int " << patMp[pattern[i]] << endl;
		while (str[j] != ' ' && j < str.size()) {
			temp += str[j++];
		}
		strMp[temp] += i+a;
		//cout << "str " << temp << " int " << strMp[temp] << endl;

		if (patMp[pattern[i]] != strMp[temp]) return false;
}
	//cout << i <<" "<< j << endl;
	return i==pattern.size()&&j==str.size()+1;
}
```

<p id="字符串中的第一个唯一字符"></p>



### 387. 字符串中的第一个唯一字符

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/first-unique-character-in-a-string/)

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

**案例:**

```
s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
```

 

**注意事项：**您可以假定该字符串只包含小写字母。



#### 第一版，自己写的，时间较慢

执行用时 :112 ms, 在所有 cpp 提交中击败了23.15%的用户

内存消耗 :13 MB, 在所有 cpp 提交中击败了80.42%的用户



```c++
int firstUniqChar(string s) {

	if (s.size() == 0) return -1;

	unordered_map<char, pair<int, int>> result;//字符，出现次数，索引号
	for (unsigned i = 0; i < s.size(); ++i) {

		result[s[i]].first += 1;
		result[s[i]].second += i;

		//if (result[s[i]].first >= 2) result.erase(s[i]);
	}

	int res = s.size()-1;

	bool isOnce= false;
	for (auto& a : result) {
		if (a.second.first == 1)
		{
			res = res > a.second.second ? a.second.second : res;
			isOnce = true;
		}
		//cout << a.first << " " << a.second.first << " " << a.second.second << endl;
	}

	if (isOnce)
		return res;
	else
		return -1;

}
```





#### 第二版，看的别人的，快多了



执行用时 :32 ms, 在所有 cpp 提交中击败了91.92%的用户

内存消耗 :12.6 MB, 在所有 cpp 提交中击败了96.83%的用户

**就26个字符，所以直接开辟26个空间，初值都为0**

```c++
int firstUniqChar(string s) {

	int result[26] = { 0 };
	for (auto &i : s)
		result[i - 'a'] ++;//统计每个字母的出现次数，0就是‘a’,1就是‘b’
	for (int i = 0; i < s.size(); i++) {
		if (result[s[i] - 'a'] == 1)//找到第一个就可以
			return i;
	}
	return -1;

}

我的方法必须遍历所以的元素才能找出最小值，这个直接根据s中字母的出现的先后来看
```





#### 第三版，看了第二版又改进的第一版,还是比较慢





执行用时 :84 ms, 在所有 cpp 提交中击败了39.24%的用户

内存消耗 :13.2 MB, 在所有 cpp 提交中击败了70.44%的用户



```c++
int firstUniqChar(string s) {
	unordered_map<char, pair<int, int>> result;//字符，出现次数，索引号
	for (unsigned i = 0; i < s.size(); ++i) {
		result[s[i]].first += 1;
		result[s[i]].second += i;
	}

	for (unsigned i = 0; i < s.size(); ++i) {
	
		if (result[s[i]].first == 1) 
			return result[s[i]].second;
	}
	return -1;

}
```

<p id="最长和谐子序列"></p>



### 594. 最长和谐子序列

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/longest-harmonious-subsequence/)

和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。

现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。

**示例 1:**

```
输入: [1,3,2,2,5,2,3,7]
输出: 5
原因: 最长的和谐数组是：[3,2,2,2,3].
```

**说明:** 输入的数组长度最大不超过20,000.



#### 第一版，犯糊涂了，要用有序的map才对，中规中矩



执行用时 :136 ms, 在所有 cpp 提交中击败了59.33%的用户

内存消耗 :20.7 MB, 在所有 cpp 提交中击败了51.40%的用户



```c++
   int findLHS(vector<int>& nums) {
	if (nums.size() <= 1) return 0;
	sort(nums.begin(), nums.end(), greater<int>());

	map<int, int> result;//元素，次数
	int maxLen = 0, temp,len=nums.size();
	for (unsigned i = 0; i < len; ++i) {
		result[nums[i]]++;
	}


	for (auto beg = result.begin(), beg2 = ++result.begin(); beg2 != result.end() && beg != result.end();++beg,++beg2 ) {
		
		if (1+beg->first == beg2->first) {

			temp = beg->second + beg2->second;
			maxLen = temp > maxLen ? temp : maxLen;
			// cout << maxLen << endl;
			// cout << beg->first << " " << beg2->first << " " << temp << endl;
		}
	}
	// cout << maxLen << endl;

	return maxLen;

}
```

<p id="两个列表的最小索引总和"></p>



### 599. 两个列表的最小索引总和

假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。

示例 1:

输入:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
输出: ["Shogun"]
解释: 他们唯一共同喜爱的餐厅是“Shogun”。
示例 2:

输入:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
输出: ["Shogun"]
解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。
提示:

两个列表的长度范围都在 [1, 1000]内。
两个列表中的字符串的长度将在[1，30]的范围内。
下标从0开始，到列表的长度减1。
两个列表都没有重复的元素。

#### 第一版，自己写的，速度快，内存较大







```c++
 vector<string> findRestaurant(vector<string>& list1, vector<string>& list2) {
    unordered_map<string, pair<int, int>> res;//餐厅名 索引号相加 ,出现次数
	int minIndex = INT_MAX;
	
	multimap<int,string> result;
	for (unsigned i = 0; i < list1.size(); ++i) {
		res[list1[i]] = { i,1 };
	}

	for (unsigned i = 0; i < list2.size(); ++i) {
		
		res[list2[i]].first += i;
		res[list2[i]].second += 1;
	}

	for (auto &a : res) {

		if (a.second.second == 2) {	
			minIndex = a.second.first < minIndex ? a.second.first : minIndex;
			result.insert({ a.second.first, a.first});
		}
	}

	multimap<int, string>::iterator beg, end;
	beg  = result.equal_range(minIndex).first;
	end = result.equal_range(minIndex).second;



	vector<string> r;
	while (beg != end) {
		r.push_back(beg->second);
		beg++;
	}
	
	return r;
        
    }
```





#### 第二版，换了一个写法，反而更差了...

执行用时 :188 ms, 在所有 cpp 提交中击败了40.00%的用户

内存消耗 :32.3 MB, 在所有 cpp 提交中击败了14.21%的用户





```c++
    vector<string> findRestaurant(vector<string>& list1, vector<string>& list2) {
	unordered_map<string, pair<int, int>> res;//餐厅名 索引号相加 ,出现次数
	int minIndex;
	vector<string> result;
	for (unsigned i = 0; i < list1.size(); ++i) {
		res[list1[i]] = { i,1 };
	}

	for (unsigned i = 0; i < list2.size(); ++i) {
		
		res[list2[i]].first += i;
		res[list2[i]].second += 1;
	}

	for (auto &a : res) {
		if (a.second.second == 2) {	

			if (result.empty()) {//第一次为空直接进
				minIndex = a.second.first;
				result.push_back(a.first);
			}
			else//不为空，与上一次最小值进行比较
			{
				if (a.second.first < minIndex) //当前最小值是最小的，进行更替
				{
					result.clear();//清空结果
					minIndex = a.second.first;
					result.push_back(a.first);
				}
				else if (a.second.first == minIndex)//和当前一样大，就直接进去
				{
					result.push_back(a.first);
					
				}

			}
			
		}
	}

	return result;
    }
```



```c++

```





#### 第三版，再换一个写法。。。还是第一版最快

执行用时 :180 ms, 在所有 cpp 提交中击败了44.26%的用户

内存消耗 :32.2 MB, 在所有 cpp 提交中击败了14.74%的用户



```c++
vector<string> findRestaurant(vector<string>& list1, vector<string>& list2) {
	unordered_map<string, pair<int, int>> res;//餐厅名 索引号相加 ,出现次数
	int minIndex;
	vector<string> result;
	for (unsigned i = 0; i < list1.size(); ++i) {
		res[list1[i]] = { i,1 };
	}

	for (unsigned i = 0; i < list2.size(); ++i) {
		
		res[list2[i]].first += i;
		res[list2[i]].second += 1;
		if (res[list2[i]].second == 2)
		{
			if (result.empty()) {//第一次为空直接进
				minIndex = res[list2[i]].first;
				result.push_back(list2[i]);
			}
			else//不为空，与上一次最小值进行比较
			{
				if (res[list2[i]].first < minIndex) //当前最小值是最小的，进行更替
				{
					result.clear();//清空结果
					minIndex = res[list2[i]].first;
					result.push_back(list2[i]);
				}
				else if (res[list2[i]].first == minIndex)//和当前一样大，就直接进去
				{
					result.push_back(list2[i]);
				}

			}

		}
	}

	return result;
}
```



<p id="错误的集合"></p>



### 645. 错误的集合

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/set-mismatch/)

集合 `S` 包含从1到 `n` 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。

给定一个数组 `nums` 代表了集合 `S` 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

**示例 1:**

```
输入: nums = [1,2,2,4]
输出: [2,3]
```

**注意:**

1. 给定数组的长度范围是 [2, 10000]。
2. 给定的数组是无序的。



#### 第一版，自己写的



执行用时 :68 ms, 在所有 cpp 提交中击败了32.82%的用户

内存消耗 :20.6 MB, 在所有 cpp 提交中击败了18.10%的用户



```c++
    vector<int> findErrorNums(vector<int>& nums) {
    unordered_set<int> un_st;
	int len = nums.size(), sum,res;
	sum = (len + 1) * len / 2;
	for (unsigned i = 0; i < len; ++i) {

		if (un_st.insert(nums[i]).second) {
			sum -= nums[i];
		}
		else
		{
			res = nums[i];
		}
	}

	return { res,sum };
       
    }
```



<p id="词典中最长的单词"></p>





### 720. 词典中最长的单词

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/longest-word-in-dictionary/)

给出一个字符串数组`words`组成的一本英语词典。从中找出最长的一个单词，该单词是由`words`词典中其他单词逐步添加一个字母组成。若其中有多个可行的答案，则返回答案中字典序最小的单词。

若无答案，则返回空字符串。

**示例 1:**

```
输入: 
words = ["w","wo","wor","worl", "world"]
输出: "world"
解释: 
单词"world"可由"w", "wo", "wor", 和 "worl"添加一个字母组成。
```

**示例 2:**

```
输入: 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
输出: "apple"
解释: 
"apply"和"apple"都能由词典中的单词组成。但是"apple"得字典序小于"apply"。
```

**注意:**

- 所有输入的字符串都只包含小写字母。
- `words`数组长度范围为`[1,1000]`。
- `words[i]`的长度范围为`[1,30]`。



#### 第一版，看了提示，其实并没有什么窍门



执行用时 :44 ms, 在所有 cpp 提交中击败了99.73%的用户

内存消耗 :16.2 MB, 在所有 cpp 提交中击败了89.41%的用户



```c++
bool compareSize(const string& a, const string& b) {

	if(a.size()!=b.size())
		return a.size() < b.size();
	else
	{
		return a > b;//当size一样时，字典序小的在后面，这一点很厉害
	}
}

string longestWord(vector<string>& words) {

	sort(words.begin(), words.end(), compareSize);
	unordered_set<string> unst;
	for (auto& a : words) {
		unst.insert(a);
	}

	string result;
	for (int i=words.size()-1; i >=0;--i) {//从后往前走

		result = words[i];
		int len = result.size();
		while (len--) {
			result.pop_back();
			if (unst.find(result) == unst.end()) break;
		}

		if (len == 0) {
			result = words[i];
			break;
		}

	}

	return result;

}

```

<p id="两句话中的不常见单词"></p>





### 884. 两句话中的不常见单词

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/)



给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）

如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的。

返回所有不常用单词的列表。

您可以按任何顺序返回列表。

 

示例 1：

输入：A = "this apple is sweet", B = "this apple is sour"
输出：["sweet","sour"]
示例 2：

输入：A = "apple apple", B = "banana"
输出：["banana"]


提示：

0 <= A.length <= 200
0 <= B.length <= 200
A 和 B 都只包含空格和小写字母。





#### 第一版，很容易，自己写的

执行用时 :4 ms, 在所有 cpp 提交中击败了91.83%的用户

内存消耗 :8.7 MB, 在所有 cpp 提交中击败了100.00%的用户

```c++
vector<string> uncommonFromSentences(string A, string B) {

	unordered_map<string,int> un_mp;

	string temp;
	for (unsigned i=0;i<A.size();++i)
	{
		temp = "";
		while (A[i] != ' ' && i < A.size()) {
			temp += A[i++];
		}
		if (temp.size() > 0) ++un_mp[temp];
		
	}

	for (unsigned i = 0; i < B.size(); ++i)
	{
		temp = "";
		while (B[i] != ' ' && i < B.size()) {
			temp += B[i++];
		}
		if (temp.size() > 0) ++un_mp[temp];
	}

	vector<string> res;
	for (auto &a : un_mp) {
		if (a.second == 1) res.push_back(a.first);
		//cout << a.first << " " << a.second << endl;
	}

	return res;

}
```

<p id="强整数"></p>



### 970. 强整数   看的答案，豁然开朗

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/powerful-integers/)

给定两个正整数 `x` 和 `y`，如果某一整数等于 `x^i + y^j`，其中整数 `i >= 0` 且 `j >= 0`，那么我们认为该整数是一个*强整数*。

返回值小于或等于 `bound` 的所有*强整数*组成的列表。

你可以按任何顺序返回答案。在你的回答中，每个值最多出现一次。

 

**示例 1：**

```
输入：x = 2, y = 3, bound = 10
输出：[2,3,4,5,7,9,10]
解释： 
2 = 2^0 + 3^0
3 = 2^1 + 3^0
4 = 2^0 + 3^1
5 = 2^1 + 3^1
7 = 2^2 + 3^1
9 = 2^3 + 3^0
10 = 2^0 + 3^2
```

**示例 2：**

```
输入：x = 3, y = 5, bound = 15
输出：[2,4,6,8,10,14]
```

 

**提示：**

- `1 <= x <= 100`
- `1 <= y <= 100`
- `0 <= bound <= 10^6`





#### 第一版，暴力法，加个上限20



执行用时 :4 ms, 在所有 cpp 提交中击败了80.38%的用户

内存消耗 :8.5 MB, 在所有 cpp 提交中击败了83.33%的用户



这里用unordered_set就可以了，不需要set，说了可以返回无顺序的

```c++
    vector<int> powerfulIntegers(int x, int y, int bound) {
    unordered_set<int> res;
	for (int i = 0; i < 20 && pow(x, i) <= bound; i++) {
		for (int j = 0; j < 20 && pow(y, j) <= bound; j++) {
			int v = int(pow(x, i)) + int(pow(y, j));
			if (v <= bound) res.insert(v);
		}
	}
	vector<int> res2;
	res2.assign(res.begin(), res.end());
	return res2;
        
    }
```

<p id="独一无二的出现次数"></p>



### 1207. 独一无二的出现次数

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/unique-number-of-occurrences/)

给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。

如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。

 

示例 1：

输入：arr = [1,2,2,1,1,3]
输出：true
解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
示例 2：

输入：arr = [1,2]
输出：false
示例 3：

输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
输出：true





#### 第一版 unordered_map,unordered_set

执行用时 :4 ms, 在所有 cpp 提交中击败了88.78%的用户

内存消耗 :8.9 MB, 在所有 cpp 提交中击败了100.00%的用户



```c++

bool uniqueOccurrences(vector<int>& arr) {
	unordered_map<int, int> un_mp(arr.size());
	unordered_set<int> un_st;
	for (auto& a : arr) {
		un_mp[a]++;
	}
	for (auto& a : un_mp) {
		un_st.insert(a.second);	
	}
	return un_st.size() == un_mp.size();


}
```




