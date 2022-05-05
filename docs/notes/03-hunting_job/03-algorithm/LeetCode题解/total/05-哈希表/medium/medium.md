<p id="无重复字符的最长子串"></p>



### 3. 无重复字符的最长子串

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。

**示例 1:**

```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```





#### 第一版，没做出来

```c++
int lengthOfLongestSubstring(string s) {

	if (s.size() <= 1) return s.size();
	unordered_set<char>  res;
	int maxLen = 1,low = 0,len=s.size();
	res.insert(s[0]);
	for (int i = 1; i < len; ++i) {
		if (res.find(s[i])!=res.end()) {
			res.insert(s[i]);
		}
		else
		{
			for (int j = low; j < i; ++j) {
				if (s[j] == s[i]) {
					maxLen = max(maxLen, i - j);
					low = j + 1;
					//cout << low << endl;
					res.insert(s[low]);
					break;
				}
				else {
					res.erase(s[j]);
				}
			}
		}

	}

	return maxLen;
}
```









#### 第二版，改动了一下，其实想岔了,没有想象中的那么难

执行用时 :20 ms, 在所有 cpp 提交中击败了61.23%的用户

内存消耗 :11.4 MB, 在所有 cpp 提交中击败了76.90%的用户

```C++
int lengthOfLongestSubstring(string s) {
	if (s.size() <= 1) return s.size();
	unordered_set<char>  res;
	int maxLen = 1,low = 0,len=s.size();
	res.insert(s[0]);
	for (int i = 1; i < len; ++i) {
		if (res.find(s[i])==res.end()) {
			res.insert(s[i]);
		}
		else
		{
			for (int j = low; j < i; ++j) {
				if (s[j] == s[i]) {
					maxLen = max(maxLen, i - low);
					low = j + 1;
					//cout << low << endl;
					res.insert(s[i]);
					break;
				}
				else {
					res.erase(s[j]);
				}
			}
		}

	}

	maxLen = max(maxLen, static_cast<int>(res.size()));
	return maxLen;

}
```





#### 第三版，第三种方法

执行用时 :36 ms, 在所有 cpp 提交中击败了36.36%的用户

内存消耗 :13.2 MB, 在所有 cpp 提交中击败了76.11%的用户

```c++
int lengthOfLongestSubstring(string s) {
	if (s.size() <= 1) return s.size();
	unordered_set<char> res;
	res.insert(s[0]);
	int maxLen = 0, left = 0,len=s.size();
	for (int i = 1; i < len; ++i) {
		while (res.find(s[i]) != res.end()) {
			res.erase(s[left]);
			left++;
		}
		maxLen = max(maxLen, i - left + 1);
		res.insert(s[i]);
	}
	return maxLen;
}
```



<p id="数组中的第个最大元素"></p>



### 215. 数组中的第K个最大元素  经典

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

在未排序的数组中找到第 **k** 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

**示例 1:**

```
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```

**示例 2:**

```
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```

**说明:**

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。





#### 第一版 优先队列，小顶堆

执行用时 :12 ms, 在所有 cpp 提交中击败了89.16%的用户

内存消耗 :9.3 MB, 在所有 cpp 提交中击败了67.49%的用户

```c++
int findKthLargest(vector<int>& nums, int k) {
	priority_queue<int, vector<int>, greater<int>> res;
	for (auto& a : nums) {

		res.push(a);
		if (res.size() > k)
			res.pop();
	}
	return res.top();
}
```

<p id="前可个高频元素"></p>



### 347. 前 K 个高频元素

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/top-k-frequent-elements/)

给定一个非空的整数数组，返回其中出现频率前 **k** 高的元素。

**示例 1:**

```
输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
```

**示例 2:**

```
输入: nums = [1], k = 1
输出: [1]
```

**说明：**

- 你可以假设给定的 *k* 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
- 你的算法的时间复杂度**必须**优于 O(*n* log *n*) , *n* 是数组的大小。
- 

#### 第一版，普通方法，速度较快

执行用时 :16 ms, 在所有 cpp 提交中击败了99.62%的用户

内存消耗 :11.9 MB, 在所有 cpp 提交中击败了10.71%的用户



```c++
bool static  compare(const pair<int, int>& a, const pair<int, int>& b) {
	return a.second > b.second;
}

vector<int> topKFrequent(vector<int>& nums, int k) {
	
	unordered_map<int, int> result(nums.size());//值，次数
	for (auto& a : nums) {
		result[a]++;
	}
	vector<pair<int, int>> resultTemp(result.begin(), result.end());
	sort(resultTemp.begin(), resultTemp.end(), compare);

	vector<int> res;
	res.reserve(k);
	auto beg = resultTemp.begin();
	while (k--) {

		res.push_back(beg->first);
		beg++;
	}

	return res;
	
}
```







#### 第二版，用优先队列，第一次学到这个说法

执行用时 :24 ms, 在所有 cpp 提交中击败了83.01%的用户

内存消耗 :11.2 MB, 在所有 cpp 提交中击败了87.09%的用户



**求前 k 大，用小根堆，求前 k 小，用大根堆。面试的时候如果说反了会挂！**

```c++
struct compare {
	bool operator()(const pair<int, int>& a, const pair<int, int>& b) {
		return a.second > b.second;
	}

};


vector<int> topKFrequent(vector<int>& nums, int k) {
	
	vector<int> ret;
	unordered_map<int, int> hash;
	for (auto &a : nums)
	{
		hash[a]++;
	}
	priority_queue<pair<int, int>, vector<pair<int, int>>, compare> freq;
	for (auto &a : hash)
	{
		freq.push(a);
		if (freq.size() > k)
			freq.pop();
	}
	while (!freq.empty())
	{
		ret.push_back(freq.top().first);
		freq.pop();
	}
	return ret;
}
```

<p id="常数时间插入"></p>



### 380. 常数时间插入、删除和获取随机元素

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/insert-delete-getrandom-o1/)

设计一个支持在*平均* 时间复杂度 **O(1)** 下，执行以下操作的数据结构。

1. `insert(val)`：当元素 val 不存在时，向集合中插入该项。
2. `remove(val)`：元素 val 存在时，从集合中移除该项。
3. `getRandom`：随机返回现有集合中的一项。每个元素应该有**相同的概率**被返回。

**示例 :**

```
// 初始化一个空的集合。
RandomizedSet randomSet = new RandomizedSet();

// 向集合中插入 1 。返回 true 表示 1 被成功地插入。
randomSet.insert(1);

// 返回 false ，表示集合中不存在 2 。
randomSet.remove(2);

// 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
randomSet.insert(2);

// getRandom 应随机返回 1 或 2 。
randomSet.getRandom();

// 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
randomSet.remove(1);

// 2 已在集合中，所以返回 false 。
randomSet.insert(2);

// 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
randomSet.getRandom();
```





#### 第一版，好差的一个数字...



执行用时 :284 ms, 在所有 cpp 提交中击败了5.15%的用户

内存消耗 :121.7 MB, 在所有 cpp 提交中击败了5.07%的用户



```c++
class RandomizedSet {
public:
	/** Initialize your data structure here. */
	RandomizedSet() {

	}

	/** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
	bool insert(int val) {
		if (result.find(val) == result.end())
		{
			result.insert({ val,val });
			return true;
		}
		else
			return false;

	}

	/** Removes a value from the set. Returns true if the set contained the specified element. */
	bool remove(int val) {

		if (result.erase(val) == 1) return true;
		else
			return false;

	}

	/** Get a random element from the set. */
	int getRandom() {

		vector<int> temp;
		temp.reserve(result.size());
		for (auto beg = result.begin(); beg != result.end(); ++beg) {
			temp.push_back(beg->second);
		}

		int index = rand()%temp.size();

		return temp[index];
	}

private:
	unordered_map<int, int> result;
};
```





#### 第二版，别人的做法，很有效



执行用时 :52 ms, 在所有 cpp 提交中击败了99.49%的用户

内存消耗 :22 MB, 在所有 cpp 提交中击败了78.34%的用户



首先，要在O(1)时间内的插入删除，肯定要利用哈希表的。但是问题在于随机返回一个元素，一开始还想着直接随机一个dict.size()范围内的数，然后让一个指向dict头部的迭代器与之相加-----------仔细一想，无序容器的迭代器不支持随机访问。。。但要随机返回某个元素，肯定要用到支持随机访问得迭代器啊！

而显然，支持随机访问的迭代器必须是管理连续内存的容器，常见的有--vector 、deque、C-stying arrary

所以目前需要(1)散列表(2)支持随机访问的迭代器，所以解法是，两者都用。 这里，用vector存储每一个插入的元素，散列表dict存储插入元素的下标。这样问题的关键就不是插入了，而是删除---怎样做到O(1)时间从vector容器内删除元素呢?显然，要从vector容器内删除元素，只能从其尾部删除。所以方法是:先交换vector队尾元素和待删除元素的值(因为dict中存储了下标，所以可以直接得到待删除元素的下标)，然后把队尾元素删除，并更新原队尾元素的下标即可，其他位置的元素下标并没有变化。





```c++
class RandomizedSet {
public:
	/** Initialize your data structure here. */
	RandomizedSet() {

	}

	/** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
 bool insert(int val) {
        if(dict.count(val) > 0)
            return false;
        Numbers.push_back(val);
        dict[val] = Numbers.size()-1; 
        return true;
    }

	/** Removes a value from the set. Returns true if the set contained the specified element. */
	 bool remove(int val) {
        if(dict.count(val) == 0)
            return false;
        dict[Numbers.back()] = dict[val];               //更新原队尾元素的下标
        swap(Numbers.back(),Numbers[dict[val]]);        //交换原队尾元素和待删除元素
        Numbers.pop_back();                            //删除原队尾元素
        dict.erase(val);                               //删除指定元素的下标
        return true;
    }
    
    /** Get a random element from the set. */
    int getRandom() {
        int pos = Numbers.empty() ? 0 :rand() % Numbers.size();
        return Numbers[pos];
    }
private:
	unordered_map<int, int> dict;
    vector<int> Numbers
};
```







#### 第三版，自己又复现一遍



执行用时 :68 ms, 在所有 cpp 提交中击败了84.10%的用户

内存消耗 :22.3 MB, 在所有 cpp 提交中击败了33.18%的用户





```c++
class RandomizedSet {
public:
	/** Initialize your data structure here. */
	RandomizedSet() {}

	/** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
	bool insert(int val) {
		if (dict.find(val) == dict.end())//不在数组中
		{
			dict[val] = result.size();
			result.push_back(val);
			return true;
		}
		return false;

	}

	/** Removes a value from the set. Returns true if the set contained the specified element. */
	bool remove(int val) {

		if (dict.find(val) != dict.end()) {//在内存中		
			dict[result.back()] = dict[val];
			swap(result.back(),result[dict[val]]);
			dict.erase(val);
			result.pop_back();
			return true;
		}
			return false;


	}

	/** Get a random element from the set. */
	int getRandom() {

		int index = result.empty() ? 0 : rand() % result.size();
		return result[index];
	}

private:
	unordered_map<int, int> dict;
	vector<int> result;
};
```

<p id="根据字符出现频率排序"></p>



### 451. 根据字符出现频率排序

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/sort-characters-by-frequency/)

给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

**示例 1:**

```
输入:
"tree"

输出:
"eert"

解释:
'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
```

**示例 2:**

```
输入:
"cccaaa"

输出:
"cccaaa"

解释:
'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
注意"cacaca"是不正确的，因为相同的字母必须放在一起。
```

**示例 3:**

```
输入:
"Aabb"

输出:
"bbAa"

解释:
此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
注意'A'和'a'被认为是两种不同的字符。
```

#### 1、常规做法 借助unordered_map 与 vector

执行用时：36 ms, 在所有 C++ 提交中击败了42.09%的用户

内存消耗：10.9 MB, 在所有 C++ 提交中击败了50.00%的用户

~~~cpp
string frequencySort(string s) {

	unordered_map<char, int> unmp;
	for (auto& a : s)
		unmp[a]++;
	vector<vector<char>> result;
	for (auto it = unmp.begin(); it != unmp.end(); ++it) {
		vector<char> temp;
		for (int i = 0; i < it->second; ++i) {
			temp.push_back(it->first);
		}
		result.push_back(std::move(temp));
	}

	sort(result.begin(), result.end(), [&](const auto a, const auto b) { return a.size() > b.size(); });

	s = "";
	for (auto &a : result) {
		for (auto &b:a)
				s += b;

	}
	return s;
}
~~~



#### 2、自己优化了一点内存

执行用时：36 ms, 在所有 C++ 提交中击败了42.09%的用户

内存消耗：8.9 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
string frequencySort(string s) {

	unordered_map<char, int> unmp;
	for (const auto& a : s)
		unmp[a]++;
	vector<vector<char>> result;
	for (auto it = unmp.begin(); it != unmp.end(); ++it) {
		vector<char> temp;
		for (int i = 0; i < it->second; ++i) {
			temp.push_back(it->first);
		}
		result.push_back(std::move(temp));
	}

	sort(result.begin(), result.end(), [](const vector<char> &a, const vector<char> & b) { return a.size() > b.size(); });//这里改写，不再使用auto了

	s = "";
	for (const auto &a : result) {
		for (const auto &b:a)
				s += b;

	}
	return s;
}
~~~



#### 3、一种别的做法，借助unordered_map 和 mutilmap





<p id="单词替换"></p>



### 648. 单词替换

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/replace-words/)

在英语中，我们有一个叫做 `词根`(root)的概念，它可以跟着其他一些词组成另一个较长的单词——我们称这个词为 `继承词`(successor)。例如，词根`an`，跟随着单词 `other`(其他)，可以形成新的单词 `another`(另一个)。

现在，给定一个由许多词根组成的词典和一个句子。你需要将句子中的所有`继承词`用`词根`替换掉。如果`继承词`有许多可以形成它的`词根`，则用最短的词根替换它。

你需要输出替换之后的句子。

**示例 1:**

```
输入: dict(词典) = ["cat", "bat", "rat"]
sentence(句子) = "the cattle was rattled by the battery"
输出: "the cat was rat by the bat"
```

**注:**

1. 输入只包含小写字母。
2. 1 <= 字典单词数 <=1000
3. 1 <=  句中词语数 <= 1000
4. 1 <= 词根长度 <= 100
5. 1 <= 句中词语长度 <= 1000



#### 第一版，自己写的，比较慢

执行用时 :384 ms, 在所有 cpp 提交中击败了19.37%的用户

内存消耗 :112.3 MB, 在所有 cpp 提交中击败了20.75%的用户

```c++
bool static compare(const string& a, const string& b) {
	return a.size() < b.size();

}

string replaceWords(vector<string>& dict, string sentence) {

	sort(dict.begin(), dict.end(), compare);
	string temp,result;
	for (unsigned i = 0; i < sentence.size(); ++i) {
		temp = "";
		while (sentence[i] != ' ' && i < sentence.size()) {
			temp += sentence[i++];
		}

		for (auto& d : dict) {
			if (temp.substr(0, d.size()) == d) {
				temp = d;
				break;
			}

		}
		result += temp;
		result += " ";

	}

	return result.substr(0, result.size() - 1);

}
```





#### 第二版，改进了一点

执行用时 :108 ms, 在所有 cpp 提交中击败了52.57%的用户

内存消耗 :19.5 MB, 在所有 cpp 提交中击败了92.45%的用户



```c++
string replaceWords(vector<string>& dict, string sentence) {

	unordered_set<string> unst(dict.begin(), dict.end());
	string temp,result;
	for (unsigned i = 0; i < sentence.size(); ++i) {
		temp = "";
		while (sentence[i] != ' ' && i < sentence.size()) {
			temp += sentence[i];
			if (unst.find(temp) != unst.end()) {//此时已经找到了前缀了
				break;
			}
			i++;
		}
		result += temp;
		result += " ";
		while (sentence[i] != ' ' && i < sentence.size())
		{
			++i;
		}//将整个单词跨过去。直到遇到空格	

	}

	return result.substr(0, result.size() - 1);

}
```

<p id="前个高频单词"></p>



### 692. 前K个高频单词

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/top-k-frequent-words/)

给一非空的单词列表，返回前 *k* 个出现次数最多的单词。

返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。

**示例 1：**

```
输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
输出: ["i", "love"]
解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
    注意，按字母顺序 "i" 在 "love" 之前。
```

 

**示例 2：**

```
输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
输出: ["the", "is", "sunny", "day"]
解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
    出现次数依次为 4, 3, 2 和 1 次。
```

 

**注意：**

1. 假定 *k* 总为有效值， 1 ≤ *k* ≤ 集合元素数。
2. 输入的单词均由小写字母组成。

 

**扩展练习：**

1. 尝试以 *O*(*n* log *k*) 时间复杂度和 *O*(*n*) 空间复杂度解决。





#### 第一版，用优先队列解决问题

执行用时 :20 ms, 在所有 cpp 提交中击败了86.48%的用户

内存消耗 :11.4 MB, 在所有 cpp 提交中击败了86.59%的用户



```c++
struct compare {
	bool operator()(const pair<string, int>& a, const pair<string, int>& b) {
		if (a.second == b.second)
			return a < b;
		return a.second > b.second;
	}

};


vector<string> topKFrequent(vector<string>& words, int k) {


	unordered_map<string, int> result(words.size());

	for (auto& a : words) {
		result[a]++;
	}
	priority_queue<pair<string, int>, vector<pair<string, int>>, compare> pri_que;
	for (auto& a : result) {
		pri_que.push(a);
		if (pri_que.size() > k)
			pri_que.pop();
	}

	vector<string> res;
	res.reserve(k);
	while (!pri_que.empty()) {
		res.push_back(pri_que.top().first);
		pri_que.pop();
	}

	reverse(res.begin(), res.end()); //注意翻转一下
	return res;
}
```



#### 第二版，不用优先队列其实更快一点



执行用时 :12 ms, 在所有 cpp 提交中击败了99.81%的用户

内存消耗 :11.1 MB, 在所有 cpp 提交中击败了97.56%的用户



```c++
bool static compare(const pair<string, int>& a, const pair<string, int>& b) {
	if (a.second == b.second)
		return a < b;
	return a.second > b.second;
}



vector<string> topKFrequent(vector<string>& words, int k) {
	unordered_map<string, int> result(words.size());

	for (auto& a : words) {
		result[a]++;
	}
	vector<pair<string, int>> res;
	res.assign(result.begin(), result.end());
	sort(res.begin(), res.end(), compare);

	vector<string> resTemp;
	resTemp.reserve(k);
	auto beg = res.begin();
	while (k--) {
		resTemp.push_back(beg->first);
		++beg;
	}

	return resTemp;
}
```





<p id="最长重复子数组"></p>



### 718. 最长重复子数组  经典

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/)

组 `A` 和 `B` ，返回两个数组中公共的、长度最长的子数组的长度。

**示例 1:**

```
输入:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出: 3
解释: 
长度最长的公共子数组是 [3, 2, 1]。
```

**说明:**

1. 1 <= len(A), len(B) <= 1000

2. 0 <= A[i], B[i] < 100

   

```angelscript
  3 2 1 4 7
1 0 0 1 0 0
2 0 1 0 0 0
3 1 0 0 0 0
2 0 2 0 0 0
1 0 0 3 0 0

```

dp[i][j]代表以A[i-1]与B[j-1]结尾的公共字串的长度,公共字串必须以A[i-1]，B[j-1]结束，即当A[i-1] == B[j-1]时，dp[i][j] = dp[i-1][j-1] + 1; 当A[i-1] != B[j-1]时，以A[i-1]和B[j-1]结尾的公共字串长度为0,dp[i][j] = 0。输出最大的公共字串的长度即为最长重复字串。 打个表会更直观一点

#### 第一版，最大公共子序列和子数组是不同的，DP解法

执行用时 :260 ms, 在所有 cpp 提交中击败了66.71%的用户

内存消耗 :106.1 MB, 在所有 cpp 提交中击败了58.93%的用户



```c++
int findLength(vector<int>& A, vector<int>& B) {
	int len1 = A.size(), len2 = B.size(),maxNum=0;
	vector<vector<int>> dp(len1 , vector<int>(len2 , 0));
	for (int i = 0; i < len1; ++i) {
		for (int j = 0; j < len2; ++j) {
			if (i == 0 || j == 0) {
				dp[i][j] = A[i] == B[j] ? 1 : 0;
			}
			else	if (A[i] == B[j])
			{
				dp[i][j] = dp[i - 1][j - 1] + 1;
				maxNum = max(maxNum, dp[i][j]);
			}
			else
				dp[i][j]=0;

		}
	}

	return maxNum;

}
```





#### 第二版，这是最大公共子序列的解法





  3 2 1 4 7
1 0 0 1 1 1
2 0 1 1 1 1
3 1 1 1 1 1
2 1 2 2 2 2
1 1 2 3 3 3

```c++
    int findLength(vector<int>& A, vector<int>& B) {
    int len1 = A.size(), len2 = B.size();
	vector<vector<int>> dp(len1 , vector<int>(len2 , 0));

	for (int i = 0; i < len1; ++i) {
		if (A[i] == B[0]) {
			while (i < len1)
				dp[i++][0] = 1;
		}

	}


	for (int j = 0; j < len2; ++j) {
		if (B[j] == A[0]) {
			while (j < len2)
				dp[0][j++] = 1;
		}
	}


	for (int i = 1; i < len1; ++i) {
		for (int j = 1; j < len2; ++j) {
			if (A[i] == B[j])
				dp[i][j] = dp[i - 1][j - 1] + 1;
			else
				dp[i][j] = max(dp[i-1][j],dp[i][j-1]);


		}
	}

	return dp[len1 - 1][len2 - 1];

    }
```






