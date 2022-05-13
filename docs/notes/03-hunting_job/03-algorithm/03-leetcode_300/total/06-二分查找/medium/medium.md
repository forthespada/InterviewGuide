<p id="两数相除"></p>



### 29. 两数相除   没想明白

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/divide-two-integers/)

给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

示例 1:

输入: dividend = 10, divisor = 3
输出: 3
示例 2:

输入: dividend = 7, divisor = -3
输出: -2
说明:

被除数和除数均为 32 位有符号整数。
除数不为 0。
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。



第一版 个人版本，超时了

```c++
int divide(int dividend, int divisor) {//被除数和除数都是整数，且结果不能溢出
	if (dividend == INT_MIN && divisor == -1) return INT_MAX;
	if (dividend == 0) return 0;
	int signal = -1;
	if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0))  signal = 1;
	if (signal == 1)
	{
		signal = 0;
		if (dividend > 0)
		{
			while (dividend >= 0 && signal<=INT_MAX) {
				dividend -= divisor;
				signal += 1;
			}		
		}
		else {
			while (dividend <= 0 && signal <= INT_MAX) {
				dividend -= divisor;
				signal += 1;
			}
		}
		return signal==	INT_MAX?INT_MAX:signal-1;
	}
	else
	{
		signal = 0;
		if (dividend > 0)
		{
			while (dividend >= 0 && signal>=INT_MIN) {
				dividend += divisor;
				signal -= 1;
			}
		}
		else {
			while (dividend <= 0 && signal >= INT_MIN) {
				dividend += divisor;
				signal -= 1;
			}
		}
		return signal == INT_MIN ? INT_MIN : signal + 1;
	}
}
```

<p id="在排序数组中查找元素的第一个和最后一个位置"></p>



### 34. 在排序数组中查找元素的第一个和最后一个位置

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

#### 第一版

最后执行的输入为

**[1,2,2]
2**

返回的错误为：**AddressSanitizer: heap-buffer-overflow on address 0x60200000053c at pc 0x0000004066e1 bp**

这是数组越界的错误

左看右看也没找到越界在哪里

```c++
vector<int> searchRange(vector<int>& nums, int target) {
    if (nums.empty() || nums[0] > target || nums[nums.size() - 1] < target) return vector<int>{-1, -1};//当nums为空或者最小值也大于target或者最大值依然//小于target，直接返回
	
	int minIndex,maxIndex,mid, low = 0, high = nums.size() - 1;
	while (low + 1 < high) {
		mid = low + (high - low) / 2;
		if (nums[mid] == target) //找到目标做处理
		{
			while (nums[mid] == target)
			{
				mid--;
			}
			minIndex = mid + 1;
			mid++;
			while (nums[mid] == target)//越界在这里
			{
				mid++;
			}
			maxIndex = mid - 1;
			return { minIndex,maxIndex };
		}
		else if (nums[mid] > target) {
			high = mid;
		}
		else { low = mid; }
	}

	if (nums[low] == target) {
		if (nums[high] == target)  return { low,high };
		else
			return { low,low };
	}
	else if (nums[high] == target) {
		return { high,high };
	}
	else
		return { -1,-1 };   
    }
```



越界解析 ：nums[2]为最后一个元素，等于target，此时再进入循环，mid++，所以访问nums[3]即为越界，所以判断条件不够，不止上届，同样的下界也应该增加判断条件



#### 第二版

```C++
vector<int> searchRange(vector<int>& nums, int target) {
if (nums.empty() || nums[0] > target || nums[nums.size() - 1] < target) return {-1, -1};

int minIndex,maxIndex,mid, low = 0, high = nums.size() - 1;
while (low + 1 < high) {
	mid = low + (high - low) / 2;
	if (nums[mid] == target)
	{
		while (mid>=0 && nums[mid] == target)//这里增加界限判断，不至于越界访问
		{

			mid--;
		}
		if (mid < 0) { 
			minIndex = 0; mid = 0; 
		}
		else
		{
			minIndex = ++mid;
		}

		while (mid<nums.size() && nums[mid] == target)//这里增加界限判断，不至于越界访问
		{
			mid++;
		}
		if (mid == nums.size()) {//虽然此时满足mid==nums.size(),但10并不是target
			maxIndex = nums.size()-1; 
		}
		else
		{
			minIndex = --mid;
		}

		return { minIndex,maxIndex };
	}
	else if (nums[mid] > target) {
		high = mid;
	}
	else { low = mid; }
}
if (nums[low] == target) {
	if (nums[high] == target)  return { low,high };
	else
		return { low,low };
}
else if (nums[high] == target) {
	return { high,high };
}
else
	return { -1,-1 };
}
```
最后输入为输入：**[5,7,7,8,8,10]  8**  

输出：**[3,5]**

预期：**[3,4]**



此时跟上面又有不同，这里10为末尾元素，也不是目标，10的前面一个是目标元素，虽然此时mid=nums.size(),，但是mid=nums.size()-1=5，还是指的是10，所以如果最后到了数组末尾，还需要再加判断

#### 第三版本

```c++
vector<int> searchRange(vector<int>& nums, int target) {
if (nums.empty() || nums[0] > target || nums[nums.size() - 1] < target) 
	return { -1, -1 };//当nums为空或者最小值也大于target或者最大值依然小于target，直接返回

int minIndex, maxIndex, mid, low = 0, high = nums.size() - 1;
while (low + 1 < high) {//在数组内部查找
	mid = low + (high - low) / 2;
	if (nums[mid] == target)//招到了target
	{
		int tempMid = mid;//双份mid更方便一些,一份查找左边界，一份查找有边界
		while (mid >= 0 && nums[mid] == target)//左侧查找边界
		{
			mid--;
		}
		if (mid < 0) { //到了数组头了，还需要再加判断头元素是不是target
			if (nums[0] == target) minIndex = 0;
			else
				minIndex = mid + 2;
		}
		else //没到数组头，说明头元素不是target
			minIndex = ++mid;

		while (tempMid <= nums.size() - 1 && nums[tempMid] == target)//右侧查找边界
		{
			tempMid++;
		}
		if (tempMid == nums.size()) {//到了数组尾部了，还需要再加判断尾部元素是不是target
			if (nums[nums.size() - 1] == target) maxIndex = nums.size() - 1;
			else
				maxIndex = nums.size() - 2;
		}
		else//没到数组尾部，说明尾部元素不是target
			maxIndex = --tempMid;
		return { minIndex,maxIndex };
	}
	else if (nums[mid] > target) {
		high = mid;
	}
	else { low = mid; }
}

if (nums[low] == target) {//没在数组除了low和high的位置找到target，再处理
	if (nums[high] == target)  return { low,high };
	else
		return { low,low };
}
else if (nums[high] == target) {
	return { high,high };
}
else
	return { -1,-1 };
}

```



执行用时 :8 ms, 在所有 C++ 提交中击败了95.18%的用户

内存消耗 :10.4 MB, 在所有 C++ 提交中击败了76.75%的用户

<p id="寻找旋转排序数组中的最小值"></p>



### 153. 寻找旋转排序数组中的最小值

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)

假设按照升序排序的数组在预先未知的某个点上进行了旋转。**没有想象中的难**

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

请找出其中最小的元素。

你可以假设数组中不存在重复元素。

示例 1:

输入: [3,4,5,1,2]
输出: 1
示例 2:

输入: [4,5,6,7,0,1,2]
输出: 0

```c++
int findMin(vector<int>& nums) {
	if (nums.size() == 1 || nums[0]<nums[nums.size()-1]) return nums[0];
	int high = nums.size() - 1;
	while(nums[high]< nums[0])
	{
		high--;
	}
	++high;
	return nums[high];

}
```

<p id="寻找峰值"></p>



### 162. 寻找峰值

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/find-peak-element/)

峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞。

示例 1:

输入: nums = [1,2,3,1]
输出: 2
解释: 3 是峰值元素，你的函数应该返回其索引 2。
示例 2:

输入: nums = [1,2,1,3,5,6,4]
输出: 1 或 5 
解释: 你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。



#### 第一版，直接暴力法

执行用时 :8 ms, 在所有 C++ 提交中击败了73.77%的用户

内存消耗 :8.7 MB, 在所有 C++ 提交中击败了69.45%的用户





```c++
    int findPeakElement(vector<int>& nums) {
    if (nums.size() <= 1) return 0;
	if (nums[1] < nums[0]) return 0;
	if (nums[nums.size() - 2] < nums[nums.size() - 1]) return nums.size() - 1;
	int temp = 0;
	for (int i = 1; i <= nums.size() - 2;++i) {
		if(nums[i]> nums[i-1] &&  nums[i]>nums[i + 1]) return i;

	}
    return 0;
	}
```





#### 第二版 二分法模板 

**low<=high**

**low=mid+1;**

**high=mid-1;**

结束时，low在high前面一个元素了，差值为0和1时都会继续执行，需要**注意**边界问题

```c++
    int findPeakElement(vector<int>& nums) {
	if (nums.size() <= 1) return 0;
	if (nums[0] > nums[1]) {
		return 0;
	}
	if (nums[nums.size() - 1] > nums[nums.size() - 2]) {
		return nums.size() - 1;
	}
	int l = 0,r = nums.size() - 1;

	while (l  <= r) {
		int m = (l + r) / 2;

		if (m > 0 and nums[m - 1] > nums[m]) {
			r = m-1;
		}
		else if (m < nums.size() and nums[m + 1] > nums[m]) {
			l = m+1;
		}
		else {
			return m;
		}
	}

	return l;
	}
```

<p id="寻找重复数"></p>



### 287. 寻找重复数

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/find-the-duplicate-number/)

给定一个包含 *n* + 1 个整数的数组 *nums*，其数字都在 1 到 *n* 之间（包括 1 和 *n*），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

**示例 1:**

```
输入: [1,3,4,2,2]
输出: 2
```

**示例 2:**

```
输入: [3,1,3,4,2]
输出: 3
```

**说明：**

1. **不能**更改原数组（假设数组是只读的）。
2. 只能使用额外的 *O*(1) 的空间。
3. 时间复杂度小于 *O*(*n*2) 。
4. 数组中只有一个重复的数字，但它可能不止重复出现一次。



#### 第一版，这个要求比较麻烦...，看的别人的,真的厉害

https://leetcode-cn.com/problems/find-the-duplicate-number/solution/er-fen-fa-si-lu-ji-dai-ma-python-by-liweiwei1419/

执行用时 :16 ms, 在所有 cpp 提交中击败了62.53%的用户

内存消耗 :10 MB, 在所有 cpp 提交中击败了12.18%的用户



```c++
int findDuplicate(vector<int>& nums) {
	int len = nums.size();
	int left = 0,counter=0;
	int right = len - 1;

	while (left < right) {
		int mid = (left + right + 1) >> 1;
		for (int &num : nums) {
			if (num < mid) {
				counter++;
			}
		}

		if (counter >= mid) {
			right = mid - 1;
		}
		else {
			left = mid;
		}
	}
	return left;


}
```



#### 第二版，其实也是别人的法子，真的长见识了





(C++)二分法，主要原因是题目给出所有数都是1 - n，二分查找时的Mid就用来探测比Mid小的数有多少个。。。

```C++
class Solution
{
public:
    int findDuplicate(vector<int>& nums)
    {
        int low = 0, high = nums.size() - 1;
        while(low < high)
        {
            int mid = low + ((high - low) >> 2);
            int count = 0;
            for(int num : nums)
                if(num <= mid) count++;
            if(count <= mid) low = mid + 1;
            else high = mid;
        }
        return low;
    }
};
```

<p id="有序矩阵中第小的元素"></p>



### 378. 有序矩阵中第K小的元素

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/)

给定一个 *n x n* 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
**请注意，它是排序后的第k小元素，而不是第k个元素。**

**示例:**

```
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

返回 13。
```

**说明:**
你可以假设 k 的值永远是有效的, 1 ≤ k ≤ n2 。





#### 第一版，优先队列做一次，用大顶堆求top小

~~~C++
 int kthSmallest(vector<vector<int>>& matrix, int k) {
    priority_queue<int,vector<int>,less<int>> result;
	int len = matrix[0].size();
	int count = 0;
	for (unsigned i = 0; i < len; ++i) {
		for (unsigned j = 0; j < len; ++j) {
		if (result.size() >= k) {
            if(result.top()>matrix[i][j]){
			result.push(matrix[i][j]);
			result.pop();
            }
		}
		else
			result.push(matrix[i][j]);
				}
}

return result.top();
    
}
~~~





执行用时 :48 ms, 在所有 cpp 提交中击败了67.71%的用户

内存消耗 :13.1 MB, 在所有 cpp 提交中击败了34.15%的用户



​		

#### 第二版，二分查找 这种法子也可以，但是我不太会...



<p id="寻找右区间"></p>



### 436. 寻找右区间,很好的题

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/find-right-interval/)

执行用时 :124 ms, 在所有 C++ 提交中击败了93.67%的用户

内存消耗 :26.4 MB, 在所有 C++ 提交中击败了5.88%的用户



```c++
vector<int> findRightInterval(vector<vector<int>>& intervals) {
	
	if (intervals.size() <= 1) return {-1};
	vector<int> result;
	map<int, int>record;//需要用到lower_bound，不能用unordered_map
	result.reserve(intervals.size());
	for (int i = 0; i < intervals.size(); ++i) {
		record[intervals[i][0]] = i;//保存区间头和整体区间所在位序
	}

	int pos;
	for (auto a : intervals) {
		auto it = record.lower_bound(a[1]);//查找不小于区间尾的record中元素的最小位置
		if (it != record.end())
		{
			result.push_back(it->second); //找到了，保存该区间所在位序
		}
		else
			result.push_back(-1); //没找到就-1
	}
	return result;

}
```



<p id="四数相加"></p>



### 454. 四数相加 II

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/4sum-ii/)

给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。

为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1 。

例如:

输入:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

输出:
2

解释:
两个元组如下:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0



思路：建立一个哈希映射，一个记录AB数组的组合和，和为key，出现的次数为value
计算CD数组的组合和，得到相反数，若该数存在于key中，即符合要求，将答案加上AB组合和中该数出现的次数(value)





#### 第一版，使用map

```c++
 int fourSumCount(vector<int>& A, vector<int>& B, vector<int>& C, vector<int>& D) {

    int num = 0,temp=0;
	map<int, int>  sum_map;
	for (auto a : A) {
		for (auto b : B) {
			if (sum_map.count(a + b) == 0) sum_map[a + b] = 1;
			else
				++sum_map[a + b];
		}
	}

	for (auto c : C) {
		for (auto d : D) {
			temp = -(c + d);
			if (sum_map.count(temp)) num+=sum_map[temp];
		}
	}

	return num;  
    }
```

执行用时 :492 ms, 在所有 C++ 提交中击败了42.54%的用户

内存消耗 :29.3 MB, 在所有 C++ 提交中击败了57.21%的用户





#### 第二版 ，unordered_map

```c++
int num = 0,temp=0;
	unordered_map<int, int>  sum_map;
	for (auto a : A) {
		for (auto b : B) {
			if (sum_map.count(a + b) == 0) sum_map[a + b] = 1;
			else
				++sum_map[a + b];
		}
	}

	for (auto c : C) {
		for (auto d : D) {
			temp = -(c + d);
			if (sum_map.count(temp)) num+=sum_map[temp];
		}
	}

	return num;
```



执行用时 :1822 ms, 在所有 C++ 提交中击败了98.56%的用户

内存消耗 :28.4 MB, 在所有 C++ 提交中击败了57.21%的用户

<p id="匹配子序列的单词数"></p>



### 792. 匹配子序列的单词数

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/number-of-matching-subsequences/)

给定字符串 `S` 和单词字典 `words`, 求 `words[i]` 中是 `S` 的子序列的单词个数。

```
示例:
输入: 
S = "abcde"
words = ["a", "bb", "acd", "ace"]
输出: 3
解释: 有三个是 S 的子序列的单词: "a", "acd", "ace"。
```

**注意:**

- 所有在`words`和 `S` 里的单词都只由小写字母组成。
- `S` 的长度在 `[1, 50000]`。
- `words` 的长度在 `[1, 5000]`。
- `words[i]`的长度在`[1, 50]`。





#### 第一版 emmmm...自己写的，很差

执行用时 :1136 ms, 在所有 cpp 提交中击败了5.05%的用户

内存消耗 :136 MB, 在所有 cpp 提交中击败了18.75%的用户

```c++
int numMatchingSubseq(string S, vector<string>& words) {

	unordered_map<char, set<int>> mp;
	for (unsigned i = 0; i < S.size(); ++i) {
		mp[S[i]].insert(i);
	}

	int count = 0,temp;
	unsigned i = 0;
	for (auto& word : words) {
		temp = *(mp[word[0]].begin());		
		for (i = 1; i < word.size(); ++i) {
			auto pos = mp[word[i]].upper_bound(temp);
			if (pos != mp[word[i]].end()) {

				if (*pos > temp) temp = *pos;
				else
					break;
			}
			else
				break;

		}

		if (i == word.size()) count++;

	}
	return count;

}
```







#### 第二版，稍微改进一下

执行用时 :308 ms, 在所有 cpp 提交中击败了58.08%的用户

内存消耗 :40.5 MB, 在所有 cpp 提交中击败了65.63%的用户



```c++
int numMatchingSubseq(string S, vector<string>& words) {
	

	unordered_map<char, vector<int>> mp;
	for (unsigned i = 0; i < S.size(); ++i) {
		mp[S[i]].push_back(i);
	}

	int count = 0,temp;
	unsigned i;
	for (auto& word : words) {
		if (mp.find(word[0]) == mp.end()) //时刻注意判断问题
			continue;
		temp = *(mp[word[0]].begin());
		for (i = 1; i < word.size(); ++i) {
			if (mp.find(word[i]) == mp.end()) //时刻注意判断有无问题
				break;
			auto pos = upper_bound(mp[word[i]].begin(), mp[word[i]].end(),temp);
			if (pos != mp[word[i]].end()) {
				temp = *pos;
			}
			else
				break;
		}
		if (i==word.size()) count++;
	}
	return count;

}

```


