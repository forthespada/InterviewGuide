<p id="合并区间"></p>



### 56. 合并区间

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/merge-intervals/)

给出一个区间的集合，请合并所有重叠的区间。

**示例 1:**

```
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

**示例 2:**

```
输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
```





#### 第一版，其实挺简单的

执行用时 :36 ms, 在所有 cpp 提交中击败了51.26%的用户

内存消耗 :12.4 MB, 在所有 cpp 提交中击败了5.08%的用户

```c++
vector<vector<int>> merge(vector<vector<int>>& intervals) {

	if (intervals.size() <= 1) return intervals;

	sort(intervals.begin(), intervals.end(), [](vector<int>& a, vector<int>& b) {return a[0] < b[0]; });
	vector<vector<int>> ans{ intervals[0] };
	int n = intervals.size();
	for (int i = 1; i < n; i++) {
		if (ans.back()[1] >= intervals[i][0]) {
			ans.back()[1] = max(intervals[i][1], ans.back()[1]);
			//continue;
		}
		else {
			ans.push_back(intervals[i]);
			//continue;
		}
	}
	return ans;


}
```

<p id="颜色分类"></p>



### 75. 颜色分类

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/sort-colors/)

给定一个包含红色、白色和蓝色，一共 *n* 个元素的数组，**原地**对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

**注意:**
不能使用代码库中的排序函数来解决这道题。

**示例:**

```
输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
```

**进阶：**

- 一个直观的解决方案是使用计数排序的两趟扫描算法。
  首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
- 你能想出一个仅使用常数空间的一趟扫描算法吗？





#### 第一版，直接解出来

执行用时 :4 ms, 在所有 cpp 提交中击败了90.02%的用户

内存消耗 :8.5 MB, 在所有 cpp 提交中击败了51.89%的用户

```c++
void sortColors(vector<int>& nums) {
	int zeroCut=0, oneCut=0, twoCut=0;

	for (auto& n : nums) {
		if (n == 0) zeroCut++;
		else if (n == 1) oneCut++;
		else twoCut++;
	}

	for (size_t i = 0; i < nums.size(); ++i) {
		if (i < zeroCut) nums[i] = 0;
		else if (i >= zeroCut && i < zeroCut + oneCut) nums[i] = 1;
		else
			nums[i] = 2;

	}


}
```





#### 第二版，进阶，双路快排的思想，感觉时间不太对

执行用时 :0 ms, 在所有 cpp 提交中击败了100.00%的用户

内存消耗 :8.5 MB, 在所有 cpp 提交中击败了50.30%的用户





```c++
    void sortColors(vector<int>& nums) {
	int low = 0, high = nums.size() - 1,index=-1;
	while (low<=high)
	{
		if (nums[low] == 0) swap(nums[++index], nums[low++]);
		else if (nums[low] == 2) swap(nums[high--], nums[low]);
		else
			low++;
	}	
        
    }
```

<p id="删除排序数组中的重复项"></p>



### 80. 删除排序数组中的重复项 II  很好的题目

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/)

给定一个排序数组，你需要在**原地**删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在**原地修改输入数组**并在使用 O(1) 额外空间的条件下完成。

**示例 1:**

```
给定 nums = [1,1,1,2,2,3],

函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。

你不需要考虑数组中超出新长度后面的元素。
```

**示例 2:**

```
给定 nums = [0,0,1,1,1,1,2,3,3],

函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。

你不需要考虑数组中超出新长度后面的元素。
```

**说明:**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以**“引用”**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```





#### 第一版，很简单粗暴,简单有效



执行用时 :12 ms, 在所有 cpp 提交中击败了98.85%的用户

内存消耗 :8.9 MB, 在所有 cpp 提交中击败了73.46%的用户

```c++
    int removeDuplicates(vector<int>& nums) {
        int len = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (len < 2 || nums[i] != nums[len-2])
                nums[len++] = nums[i];
        }
        return len;
        
    }
```





，参考了评论区大佬的解法，在这里给解释一下各个步骤和变量的含义：

- `len`表示的是删除重复元素后新序列的长度，同时也表示新元素进入新序列的索引；
- `i`就是循环变量，用于遍历整个旧序列；
- `if (len < 2) nums[len++] = nums[i];`的意思就是如果新序列的长度小于2（即新序列中不会存在两个相同的元素，这时候`i`位置所在元素不会和新序列中的元素相同），直接将新元素加入到新序列中，并更新新序列的长度；
- `if (nums[i] != nums[len-2]) nums[len++] = nums[i];`的意思就是如果新元素加入后不会和前两个元素构成3个相同的元素（`nums[len-2]`就是直接取新序列中倒数第二个元素，如果该元素和新元素相同，说明加入后会构成3个相同的元素，显然是不符合题意的），就将新元素加入到新序列中，并更新新序列的长度；
- 题意只要求将新序列紧挨在一起就行，多出的长度将不参与评测；



<p id="替换后的最长重复字符"></p>



### 424. 替换后的最长重复字符 心态崩了

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/longest-repeating-character-replacement/)

给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 *k* 次。在执行上述操作后，找到包含重复字母的最长子串的长度。

**注意:**
字符串长度 和 *k* 不会超过 10^4。

**示例 1:**

```
输入:
s = "ABAB", k = 2

输出:
4

解释:
用两个'A'替换为两个'B',反之亦然。
```

**示例 2:**

```
输入:
s = "AABABBA", k = 1

输出:
4

解释:
将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
子串 "BBBB" 有最长重复字母, 答案为 4。
```



<p id="最大连续的个数"></p>



### 485. 最大连续1的个数（easy）

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/max-consecutive-ones/)

给定一个二进制数组， 计算其中最大连续1的个数。

**示例 1:**

```
输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
```

**注意：**

- 输入的数组只包含 `0` 和`1`。
- 输入数组的长度是正整数，且不超过 10,000。







#### 第一版，很容易的题...果然还是被分类在容易类别中的题目啊

执行用时 :32 ms, 在所有 cpp 提交中击败了97.20%的用户

内存消耗 :11.7 MB, 在所有 cpp 提交中击败了71.52%的用户

```C++
    int findMaxConsecutiveOnes(vector<int>& nums) {
        
    size_t result=0, cut = 0;
	for (auto& num : nums) {
		if (num == 1) cut++;
		else {
			result = max(result, cut);
			cut = 0;
		}

	}
    result = max(result, cut);//这一步千万别忘了
	return result;
    }
```

<p id="通过删除字母匹配到字典里最长单词"></p>





### 524. 通过删除字母匹配到字典里最长单词 心态崩了

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/)

给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。

**示例 1:**

```
输入:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

输出: 
"apple"
```

**示例 2:**

```
输入:
s = "abpcplea", d = ["a","b","c"]

输出: 
"a"
```

**说明:**

1. 所有输入的字符串只包含小写字母。
2. 字典的大小不会超过 1000。
3. 所有输入的字符串长度不会超过 1000。



#### 第一版，抄的抄的

执行用时 :152 ms, 在所有 cpp 提交中击败了22.12%的用户

内存消耗 :24.5 MB, 在所有 cpp 提交中击败了25.49%的用户





```c++
static bool tmp(string a, string b) {
	if (a.size() != b.size()) {
		return a.size() > b.size();
	}
	else {
		return a < b;
	}
}

string findLongestWord(string s, vector<string>& d) {
	if (s.size() == 0 || d.size() == 0) return "";
	vector<string> ans;
	for (auto str : d) {
		queue<char> que;
		for (auto ch : str) {
			que.push(ch);
		}
		for (auto &ch : s) {
			if (ch == que.front()) {
				que.pop();
			}
		}
		if (que.empty()) ans.push_back(str);
	}
	if (ans.size() == 0) return "";
	sort(ans.begin(), ans.end(), tmp);
	return ans[0];
}
```





#### 第二版，看的别人的法子

执行用时 :100 ms, 在所有 cpp 提交中击败了63.72%的用户

内存消耗 :16 MB, 在所有 cpp 提交中击败了87.25%的用户



```c++
string findLongestWord(string s, vector<string> & d) {
		int n = d.size(), ns = s.size();
		string res = "";
		sort(d.begin(), d.end());
		for (int i = 0; i < n; i++) {
			int j = 0, k = 0, len1 = d[i].size(), len2 = s.size();
			while (j < len1 && k < len2) {
				if (d[i][j] == s[k]) {
					j++;
					k++;
				}
				else k++;
			}
			if (j == len1 && len1 > res.size()) res = d[i];
		}
		return res;
	}
```

<p id="区间列表的交集"></p>



### 986. 区间列表的交集

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/interval-list-intersections/)

给定两个由一些**闭区间**组成的列表，每个区间列表都是成对不相交的，并且已经排序。

返回这两个区间列表的交集。

*（形式上，闭区间 [a, b]（其中 a <= b）表示实数 x 的集合，而 a <= x <= b。两个闭区间的交集是一组实数，要么为空集，要么为闭区间。例如，[1, 3] 和 [2, 4] 的交集为 [2, 3]。）*

 

**示例：**

**![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/02/02/interval1.png)**

```
输入：A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
输出：[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
注意：输入和所需的输出都是区间对象组成的列表，而不是数组或列表。
```

 

**提示：**

1. `0 <= A.length < 1000`
2. `0 <= B.length < 1000`
3. `0 <= A[i].start, A[i].end, B[i].start, B[i].end < 10^9`





#### 第一版 ，自己做的，好好分析即可



执行用时 :56 ms, 在所有 cpp 提交中击败了94.15%的用户

内存消耗 :15.9 MB, 在所有 cpp 提交中击败了5.88%的用户







 


```C++
		

vector<vector<int>> intervalIntersection(vector<vector<int>>& A, vector<vector<int>>& B) {
    if (A.empty() || B.empty()) return {};
	int i=0,j=0,left = A.size(), right = B.size();
	vector<vector<int>> res;
	while (i < left && j < right) {
		int low = max(A[i][0],B[j][0]);
		int high = min(A[i][1], B[j][1]);
if (low < high) {
			res.push_back({ low,high });
			if (high == A[i][1] && high == B[j][1]) { ++i; ++j; }
			else if (high == A[i][1]) ++i;
			else
				++j;
		}
		else if (low == high) { 
			res.push_back({ low,high });
			if (high == A[i][1] && high == B[j][1]) { ++i; ++j; }
			else if (high == A[i][1]) ++i;
			else
				++j;
		}
		else if(low>high)
		{
			if (high == A[i][1] && high == B[j][1]) { ++i; ++j; }
			else if (high == A[i][1]) ++i;
			else
				++j;
		}
		//cout << low << " " << high <<" i "<<i<<" j "<<j<< endl;

}

return res;
    
}
```




#### 第二版，加了一点空间改进

执行用时 :52 ms, 在所有 cpp 提交中击败了97.07%的用户

内存消耗 :15.4 MB, 在所有 cpp 提交中击败了5.88%的用户



```c++
vector<vector<int>> intervalIntersection(vector<vector<int>>& A, vector<vector<int>>& B) {

	if (A.empty() || B.empty()) return {};

	int i=0,j=0,left = A.size(), right = B.size();

	vector<vector<int>> res;

	res.reserve(left + right);

	while (i < left && j < right) {

		int low = max(A[i][0],B[j][0]);

		int high = min(A[i][1], B[j][1]);



			if (low < high) {

				res.push_back({ low,high });

				if (high == A[i][1] && high == B[j][1]) { ++i; ++j; }

				else if (high == A[i][1]) ++i;

				else

					++j;

			}

			else if (low == high) { 

				res.push_back({ low,high });

				if (high == A[i][1] && high == B[j][1]) { ++i; ++j; }

				else if (high == A[i][1]) ++i;

				else

					++j;

			}

			else if(low>high)

			{

				if (high == A[i][1] && high == B[j][1]) { ++i; ++j; }

				else if (high == A[i][1]) ++i;

				else

					++j;

			}

			//cout << low << " " << high <<" i "<<i<<" j "<<j<< endl;


	}


	return res;


}
```



<p id="最大连续的个数"></p>



### 1004. 最大连续1的个数 III   我还是太菜了，不会不会

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/max-consecutive-ones-iii/)

给定一个由若干 `0` 和 `1` 组成的数组 `A`，我们最多可以将 `K` 个值从 0 变成 1 。

返回仅包含 1 的最长（连续）子数组的长度。

 

**示例 1：**

```
输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
输出：6
解释： 
[1,1,1,0,0,1,1,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 6。
```

**示例 2：**

```
输入：A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
输出：10
解释：
[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 10。
```

 

**提示：**

1. `1 <= A.length <= 20000`
2. `0 <= K <= A.length`
3. `A[i]` 为 `0` 或 `1` 



#### 第一版，超时了....

```c++
int longestOnes(vector<int>& A, int K) {
	if (A.size() == K) return A.size();
	size_t len = A.size();
	size_t temp=0,result=0,zeroCut=0;
	for (size_t i = 0; i < len;++i) {
		zeroCut = 0;
		temp = 0;
		while (i < len&&A[i] == 1) {
			i++;
			temp++;
		}
		for (size_t j = i; j < len; ) {
			if (zeroCut < K&&A[j] == 0 ) {
				temp++;
				zeroCut++;
				j++;
			}
			else if (zeroCut < K&&A[j] == 1 )
			{
				temp++;
				j++;
			}
			if (zeroCut == K) { 
				while (j<len && A[j++] == 1) temp++;
				break; 
			}

		}

		result = max(result, temp);
	}

	return result;

}
```





#### 第二版，想维持一个滑动窗口，还是没做出来



```c++
int longestOnes(vector<int>& A, int K) {
	if (A.size() == K) return A.size();
	size_t len = A.size();
	size_t temp=0,result=0,zeroCut=0;
	queue<int> res;
	for (size_t i = 0; i < len;++i) {
		if (A[i] == 1) {
			res.push(1);
			temp++;
		}
		else
		{
			res.push(0);
			temp++; 
			zeroCut++;
		}
		if (zeroCut == K) {
			result = max(result, temp);
		}
		else if(zeroCut==K+1){
			temp = temp - 1;
			while (res.front() != 0) res.pop();//直到遇到第一个0；
			res.pop();//将 0 pop出去
			zeroCut = K;
			result = max(result, temp);
			temp = res.size();
		}
	}

	return result;

}

```



#### 第三版，看的别人的方法，真的觉得自己蠢的不要不要的...呜呜呜，**感觉自己是真的蠢**



执行用时 :56 ms, 在所有 cpp 提交中击败了95.70%的用户

内存消耗 :13.8 MB, 在所有 cpp 提交中击败了83.98%的用户



```c++
int longestOnes(vector<int>& A, int K) {
	//count用来统计窗口中0的个数
	int left = 0, right = 0, count = 0, result = 0, size = A.size();

	while (right < size)
	{
		if(A[right]==0)
			count += 1;
		while (count > K)//当窗口内0的个数大于K时，需要缩小窗口
		{
			if(A[left]==0)
				count -=1;
			left++;
		}
		//窗口内0的个数小于等于k时，也就是可以该窗口内的0都可以替换，根据该窗口长度来确定是否更新result
		result = max(result, right - left + 1);
		right++;
	}
	return result;
}
```

<p id="满足条件的子序列数目"></p>



### 1498. 满足条件的子序列数目

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/)

给你一个整数数组 `nums` 和一个整数 `target` 。

请你统计并返回 `nums` 中能满足其最小元素与最大元素的 **和** 小于或等于 `target` 的 **非空** 子序列的数目。

由于答案可能很大，请将结果对 10^9 + 7 取余后返回。

 

**示例 1：**

```
输入：nums = [3,5,6,7], target = 9
输出：4
解释：有 4 个子序列满足该条件。
[3] -> 最小元素 + 最大元素 <= target (3 + 3 <= 9)
[3,5] -> (3 + 5 <= 9)
[3,5,6] -> (3 + 6 <= 9)
[3,6] -> (3 + 6 <= 9)
```

**示例 2：**

```
输入：nums = [3,3,6,8], target = 10
输出：6
解释：有 6 个子序列满足该条件。（nums 中可以有重复数字）
[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]
```

**示例 3：**

```
输入：nums = [2,3,3,4,6,7], target = 12
输出：61
解释：共有 63 个非空子序列，其中 2 个不满足条件（[6,7], [7]）
有效序列总数为（63 - 2 = 61）
```

**示例 4：**

```
输入：nums = [5,2,4,1,7,6,8], target = 16
输出：127
解释：所有非空子序列都满足条件 (2^7 - 1) = 127
```

 

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`
- `1 <= target <= 10^6`

#### 1、排序+ 双指针 + 数据预处理

执行用时：412 ms, 在所有 C++ 提交中击败了79.43%的用户

内存消耗：50.1 MB, 在所有 C++ 提交中击败了100.00%的用户



1.算组合数需要多次算 2 的幂，所以直接把幂运算的结果存在数组 v 里
2.求子序列不必保持数组顺序，先把数据排序，方便下一步
3.滑动窗口，先固定左边界，然后找右边界，右边界值尽量大且满足左边界值 + 右边界值 < target，该区间的组合数为 2 的 n-1 次幂，n 为区间元素个数





```c++
    int numSubseq(vector<int>& nums, int target) {
	int mod = 1e9 + 7;
	sort(nums.begin(), nums.end());
	int n = nums.size(), res = 0;
	vector<int>pw(n,0);
	pw[0] = 1;
	for (int i = 1; i < n; i++)
	{
		pw[i] = (pw[i - 1] * 2) % mod;
	}
	for (int i = 0, j = n - 1; i < n; i++)
	{
		while (i <= j && nums[i] + nums[j] > target) j--;
		if (i > j) break;
		res = (res + pw[j - i]) % mod;//固定住底下一位，最多就p[j-i]种，
		//比如 i=1 j =2，就两种情况 一是nums[i]，二是nums[i]和nums[j] ，所以是pw[j-i]
	}
	return res;
    }
```



解析：https://leetcode-cn.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solution/man-zu-tiao-jian-de-zi-xu-lie-shu-mu-by-leetcode-s/
