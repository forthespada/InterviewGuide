<p id="组合总和"></p>



#### 39. 组合总和

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/combination-sum/)

给定一个**无重复元素**的数组 `candidates` 和一个目标数 `target` ，找出 `candidates` 中所有可以使数字和为 `target` 的组合。

`candidates` 中的数字可以无限制重复被选取。

**说明：**

- 所有数字（包括 `target`）都是正整数。
- 解集不能包含重复的组合。 

**示例 1:**

```
输入: candidates = [2,3,6,7], target = 7,
所求解集为:
[
  [7],
  [2,2,3]
]
```

**示例 2:**

```
输入: candidates = [2,3,5], target = 8,
所求解集为:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```



##### 1、经典回溯模板

执行用时：8 ms, 在所有 C++ 提交中击败了83.99%的用户

内存消耗：7.7 MB, 在所有 C++ 提交中击败了100.00%的用户

```cpp
void combinationSumCore(vector<vector<int>>& res, vector<int>& candidates, int target, vector<int>& tmp, int sum, int begin) {
	if (sum == target) {
		res.push_back(tmp);
	}
	else {
		for (int i = begin; i < candidates.size(); ++i) {
			if (sum + candidates[i] <= target) {
				tmp.push_back(candidates[i]);
				combinationumCore(res, candidates, target, tmp, sum + candidates[i], i);
				tmp.pop_back();
			}else{
				return;
			}
		}
	}
}

vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
	vector<vector<int>> res;
	vector<int> tmp;
	sort(candidates.begin(), candidates.end());
	combinationSumCore(res, candidates, target, tmp, 0, 0);//sum 与 index
	return res;

}
```

<p id="我的组合总和"></p>



#### 40. 组合总和 II

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/combination-sum-ii/)

给定一个数组 `candidates` 和一个目标数 `target` ，找出 `candidates` 中所有可以使数字和为 `target` 的组合。

`candidates` 中的每个数字在每个组合中只能使用一次。

**说明：**

- 所有数字（包括目标数）都是正整数。
- 解集不能包含重复的组合。 

**示例 1:**

```
输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```

**示例 2:**

```
输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]
```



##### 1、关键在于去重

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：7.1 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
void combinationSum2Core(vector<int>& candidates, vector<vector<int>>& result, vector<int>& temp, int target, int begin, int sum) {

	if (sum == target)
	{
		result.push_back(temp);
		return;
	}

	for (int i = begin; i < candidates.size(); ++i)
	{
		if (i > begin && candidates[i] == candidates[i - 1]) continue;
		if (sum + candidates[i] <= target) {
			temp.push_back(candidates[i]);
			combinationSum2Core(candidates, result, temp, target, i + 1, sum + candidates[i]);
			temp.pop_back();
		}
		else
			return;
	}
}

vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {

	sort(candidates.begin(), candidates.end());
	vector<int>temp;
	vector<vector<int>> result;
	combinationSum2Core(candidates, result, temp, target, 0, 0);
	return result;

}
~~~

<p id="全排列"></p>



#### 46. 全排列

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/permutations/)

给定一个 **没有重复** 数字的序列，返回其所有可能的全排列。

**示例:**

```
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

##### 1、使用全排列函数next_permutation函数

执行用时：4 ms, 在所有 C++ 提交中击败了88.65%的用户

内存消耗：6.9 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
    vector<vector<int>> permute(vector<int>& nums) {
    if (nums.size() == 0) return vector<vector<int>>();
	vector<vector<int>> result;
	sort(nums.begin(), nums.end());
	do {

		result.push_back(nums);
	} while (next_permutation(nums.begin(), nums.end()));
	return result;
    }
~~~

##### 2、DFS  + 回溯

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：7.4 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
void permuteCore(vector<vector<int>> &result, vector<int>&nums,int begin) {
	if (begin == nums.size() - 1) {
		result.push_back(nums);
		return;
	}

	for (int i = begin; i < nums.size(); ++i) {
		std::swap(nums[i], nums[begin]);
		permuteCore(result, nums, begin+1);
		std::swap(nums[i], nums[begin]);
	}

}
vector<vector<int>> permute(vector<int>& nums) {
	if (nums.size() == 0) return vector<vector<int>>();
	vector<vector<int>> result;
	permuteCore(result, nums, 0);
	return result;
}
~~~

<p id="我的全排列"></p>



#### 47. 全排列 II

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/permutations-ii/)

给定一个可包含重复数字的序列，返回所有不重复的全排列。

**示例:**

```
输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```

##### 1、回溯 + 剪枝

执行用时：20 ms, 在所有 C++ 提交中击败了37.15%的用户

内存消耗：9 MB, 在所有 C++ 提交中击败了100.00%的用户

https://leetcode-cn.com/problems/permutations-ii/solution/hui-su-jian-zhi-deng-jie-ji-chu-quan-pai-lie-by-ge/

~~~cpp
/*
针对同一层次的计算，对连续的相同的元素只选取一个进行后续的替换，即可等价于基础全排列。例如，
当前层次是[1,2, 1, 2], 我们可以只选取第一次出现的元素作为替换： 对于第一个元素1， 第一次出现，则其结果为1与[2, 1, 2]的所有全排列的连接，标记1已使用；
对于第二个元素2，2未使用，则其结果为2与[1, 1, 2]的全排列的连接，并标记2已使用; 对于第3个元素1，其已使用，跳过；对于最后一个元素2，由于2已使用，跳过。
*/
void permuteUniqueCore(vector<int>& nums, vector<vector<int>>& result, int index)
{
	if (index == nums.size())result.push_back(nums);
	else {
		unordered_map<int, int> mp;
		for (int i = index; i < nums.size(); ++i)//index的起始点表示选择列表的范围
		{
			/*剪枝：同层次此元素已使用多次，在使用必然会照成重复全排列，所以直接跳过*/
			if (mp.count(nums[i]) > 0)continue;
			/*决策路径加上这个决策*/
			swap(nums[index], nums[i]);
			/*进入下一步决策*/
			permuteUniqueCore(nums, result, index + 1);
			/*决策路径移除这个决策*/
			swap(nums[index], nums[i]);
			/*标记此层次这个元素已使用一次了*/
			mp[nums[i]]++;
		}
	}
}

vector<vector<int>> permuteUnique(vector<int>& nums)
{
	//vector<int> track(nums.begin(), nums.end());
	sort(nums.begin(), nums.end());
	vector<vector<int>> result;
	permuteUniqueCore(nums, result, 0);
	return result;

}
~~~







#### [面试题 08.08. 有重复字符串的排列组合](https://leetcode-cn.com/problems/permutation-ii-lcci/)



有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。

**示例1:**

```
 输入：S = "qqe"
 输出：["eqq","qeq","qqe"]
```

**示例2:**

```
 输入：S = "ab"
 输出：["ab", "ba"]
```

**提示:**

1. 字符都是英文字母。
2. 字符串长度在[1, 9]之间。



##### 0、直接用next_permutation函数来做就可以，但是要记得先排序，而且是必须排序才可以

执行用时：4 ms, 在所有 C++ 提交中击败了94.10%的用户
内存消耗：7.2 MB, 在所有 C++ 提交中击败了66.42%的用户

~~~cpp

	vector<string> permutation(string S) {

	vector<string> result;

	sort(S.begin(), S.end());
	do {
		result.push_back(S);
	} while (next_permutation(S.begin(), S.end()));
	return result;
	}
~~~






##### 1、回溯

执行用时：16 ms, 在所有 C++ 提交中击败了38.23%的用户

内存消耗：8.3 MB, 在所有 C++ 提交中击败了14.18%的用户

~~~cpp
void permutationCore(vector<string>& result, int index, string &S) {
	if (index == S.size()) {
		result.push_back(S);
		return;
	}
	unordered_map<char, int> unmp;
	for (int i = index; i < S.size(); ++i) {
		if (unmp[S[i]] >0)
		
			continue;
		std::swap(S[index], S[i]);
		
		permutationCore(result, index + 1, S);
		std::swap(S[i], S[index]);
		unmp[S[i]]++;
	}
}



vector<string> permutation(string S) {
	vector<string> result;
	sort(S.begin(), S.end());
	permutationCore(result, 0, S);
	return result;

}
~~~

<p id="子集"></p>



#### 78. 子集

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/subsets/)

给定一组**不含重复元素**的整数数组 *nums*，返回该数组所有可能的子集（幂集）。

**说明：**解集不能包含重复的子集。

**示例:**

```
输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

##### 1、全部返回

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：6.9 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
void subsetsCore(vector<int>& nums, vector<vector<int>>& result, vector<int>&temp,int index)
{
	result.push_back(temp); //因为是全部子集，所以要全部返回
	for (int i = index; i < nums.size(); ++i)//index的起始点表示选择列表的范围
	{
			temp.push_back(nums[i]);
			subsetsCore(nums, result, temp, i + 1);//这里是 i 而不是 index， 因为一到尾巴就算完事了
			temp.pop_back();
	}
}

vector<vector<int>> subsets(vector<int>& nums) {

	//sort(nums.begin(), nums.end());
	vector<vector<int>> result;
	vector<int> temp;
	subsetsCore(nums, result,temp, 0);
	return result;

}
~~~

<p id="我的子集"></p>



#### 90. 子集 II

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/subsets-ii/)

给定一个可能包含重复元素的整数数组 ***nums***，返回该数组所有可能的子集（幂集）。

**说明：**解集不能包含重复的子集。

**示例:**

```
输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```

##### 1、必须要排序才行，使用哈希表做去重处理

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：7.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
void subsetsWithDupCore(vector<int>& nums, vector<vector<int>>& result, vector<int>&temp,int index)
{
	result.push_back(temp); //因为是全部子集，所以要全部返回
	unordered_map<int, int> mp;
	for (int i = index; i < nums.size(); ++i)//index的起始点表示选择列表的范围
	{
		if (mp[nums[i]] > 0) continue;
		temp.push_back(nums[i]);
		subsetsWithDupCore(nums, result, temp, i + 1);//这里是 i 而不是 index 因为一到尾巴就算完事了
		temp.pop_back();
		mp[nums[i]]++;
	}
}

vector<vector<int>> subsetsWithDup(vector<int>& nums) {

    sort(nums.begin(),nums.end());//必不可少
	vector<vector<int>> result;
	vector<int> temp;
	subsetsWithDupCore(nums, result,temp, 0);
	return result;
}
~~~





##### 2、不用map保存结果，中间做去重处理

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：7.1 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
void subsetsWithDupCore(vector<int>& nums, vector<vector<int>>& result, vector<int>& temp, int index)
{
	result.push_back(temp); //因为是全部子集，所以要全部返回
	for (int i = index; i < nums.size(); ++i)//index的起始点表示选择列表的范围
	{
		if (i>index && nums[i]==nums[i-1]) continue;
		temp.push_back(nums[i]);
		subsetsWithDupCore(nums, result, temp, i + 1);//这里是 i 而不是 index 因为一到尾巴就算完事了
		temp.pop_back();
	}
}

vector<vector<int>> subsetsWithDup(vector<int>& nums) {

	sort(nums.begin(), nums.end());//必不可少
	vector<vector<int>> result;
	vector<int> temp;
	subsetsWithDupCore(nums, result, temp, 0);
	return result;
}
~~~

<p id="点游戏"></p>



#### 679. 24 点游戏

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/24-game/)

你有 4 张写有 1 到 9 数字的牌。你需要判断是否能通过 `*`，`/`，`+`，`-`，`(`，`)` 的运算得到 24。

**示例 1:**

```
输入: [4, 1, 8, 7]
输出: True
解释: (8-4) * (7-1) = 24
```

**示例 2:**

```
输入: [1, 2, 1, 2]
输出: False
```

**注意:**

1. 除法运算符 `/` 表示实数除法，而不是整数除法。例如 4 / (1 - 2/3) = 12 。
2. 每个运算符对两个数进行运算。特别是我们不能用 `-` 作为一元运算符。例如，`[1, 1, 1, 1]` 作为输入时，表达式 `-1 - 1 - 1 - 1` 是不允许的。
3. 你不能将数字连接在一起。例如，输入为 `[1, 2, 1, 2]` 时，不能写成 12 + 12 。



##### 1、直接穷举

~~~java
class Solution {
    public boolean judgePoint24(int[] nums) {
        double a = nums[0];
        double b = nums[1];
        double c = nums[2];
        double d = nums[3];
        return judge(a, b, c, d);
    }
    public boolean judge(double a, double b, double c, double d){
        return 
        // a b 
        judge(a + b, c, d) ||
        judge(a * b, c, d) ||
        judge(a - b, c, d) ||  
        judge(b - a, c, d) ||
        judge(a / b, c, d) ||
        judge(b / a, c, d) ||
        // b c 
        judge(c + b, a, d) ||
        judge(c * b, a, d) ||
        judge(c - b, a, d) ||  
        judge(b - c, a, d) ||
        judge(c / b, a, d) ||  
        judge(b / c, a, d) ||
        // c d 
        judge(c + d, a, b) ||
        judge(c * d, a, b) ||
        judge(c - d, a, b) ||  
        judge(d - c, a, b) ||
        judge(c / d, a, b) ||
        judge(d / c, a, b) ||
        // b d 
        judge(b + d, a, c) ||
        judge(b * d, a, c) ||
        judge(b - d, a, c) ||  
        judge(d - b, a, c) ||
        judge(b / d, a, c) ||
        judge(d / b, a, c) ||
        // a c 
        judge(a + c, b, d) ||
        judge(a * c, b, d) || 
        judge(a - c, b, d) ||  
        judge(c - a, b, d) ||
        judge(a / c, b, d) ||
        judge(c / a, b, d) ||
        // a d
        judge(a + d, b, c) ||
        judge(a * d, b, c) ||
        judge(a - d, b, c) ||  
        judge(d - a, b, c) ||
        judge(a / d, b, c) ||
        judge(d / a, b, c) ;
        //
    }
    public boolean judge(double a, double b, double c){// 24 , 3 , 8
        return 
        judge(a + b, c) ||
        judge(a * b, c) ||
        judge(a - b, c) ||  
        judge(b - a, c) || 
        judge(a / b, c) || 
        judge(b / a, c) ||
        //
        judge(c + b, a) ||
        judge(c * b, a) ||
        judge(c - b, a) ||  
        judge(b - c, a) ||
        judge(c / b, a) ||
        judge(b / c, a) ||
        //
        judge(c + a, b) ||
        judge(c * a, b) ||
        judge(c - a, b) ||  
        judge(a - c, b) ||
        judge(c / a, b) ||
        judge(a / c, b);
    }

    public boolean judge(double a, double b){
        return 
        Math.abs(a + b - 24) < 0.001 ||
        Math.abs(a - b - 24) < 0.001 || 
        Math.abs(b - a - 24) < 0.001 ||
        Math.abs(a * b - 24) < 0.001 ||
        Math.abs(a / b - 24) < 0.001 ||
        Math.abs(b / a - 24) < 0.001;
    }
}
~~~



