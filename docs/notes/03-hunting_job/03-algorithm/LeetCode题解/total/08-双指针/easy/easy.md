<p id="数组中的数对"></p>



### 532. 数组中的K-diff数对 绝对的好题

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/k-diff-pairs-in-an-array/)

给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.

示例 1:

输入: [3, 1, 4, 1, 5], k = 2
输出: 2
解释: 数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
尽管数组中有两个1，但我们只应返回不同的数对的数量。
示例 2:

输入:[1, 2, 3, 4, 5], k = 1
输出: 4
解释: 数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5)。
示例 3:

输入: [1, 3, 1, 5, 4], k = 0
输出: 1
解释: 数组中只有一个 0-diff 数对，(1, 1)。
注意:

数对 (i, j) 和数对 (j, i) 被算作同一数对。
数组的长度不超过10,000。
所有输入的整数的范围在 [-1e7, 1e7]。



#### 第一版，好题，我做的太差了

执行用时 :740 ms, 在所有 cpp 提交中击败了7.47%的用户

内存消耗 :11.8 MB, 在所有 cpp 提交中击败了46.66%的用户



```c++
int findPairs(vector<int>& nums, int k) {
	if (k < 0) return 0;
	sort(nums.begin(), nums.end());
	unordered_map<int,int> result;
	//int cut = 0;
	for (unsigned i = 0; i < nums.size(); ++i) {
		//result.clear();
		unsigned j;
		if (k == 0) j = i + 1;
		else
			j = i;
		for (; j < nums.size(); ++j) {
			if (nums[j] - nums[i] == k)
				result.insert({nums[i],nums[j] });
				//if (result.count({nums[i]})

		}
		//count += result.size();
	}
	return result.size();
}

```





#### 第二版，看的别人的，二分查找快一点，学到了



```c++
    int findPairs(vector<int>& nums, int k) 
    {
        sort(nums.begin(),nums.end());
        int n=nums.size();
        int ans=0;
        for(int i=0;i<n;++i)
        {
            if(i!=0&&nums[i]==nums[i-1])
                continue;
            auto it=lower_bound(nums.begin()+i+1,nums.end(),k+nums[i]);
            if(it==nums.end())//查找失败,说明此刻数组中最大值比nums[i]+k小，因此无需再进行查找,这一步很关键
                break;
            if(*it==k+nums[i])
                ++ans;
        }
        return ans;
    }


```

<p id="长按键入"></p>



### 925. 长按键入

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/long-pressed-name/)

你的朋友正在使用键盘输入他的名字 `name`。偶尔，在键入字符 `c` 时，按键可能会被*长按*，而字符可能被输入 1 次或多次。

你将会检查键盘输入的字符 `typed`。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 `True`。

 

**示例 1：**

```
输入：name = "alex", typed = "aaleex"
输出：true
解释：'alex' 中的 'a' 和 'e' 被长按。
```

**示例 2：**

```
输入：name = "saeed", typed = "ssaaedd"
输出：false
解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
```

**示例 3：**

```
输入：name = "leelee", typed = "lleeelee"
输出：true
```

**示例 4：**

```
输入：name = "laiden", typed = "laiden"
输出：true
解释：长按名字中的字符并不是必要的。
```





#### 第一版，这也太容易了吧...

执行用时 :0 ms, 在所有 cpp 提交中击败了100.00%的用户

内存消耗 :8.2 MB, 在所有 cpp 提交中击败了99.22%的用户



```c++
    bool isLongPressedName(string name, string typed) {
    if (typed.size() < name.size()) return false;

	int lenName = name.size(), lenTyped = typed.size();
	unsigned i = 0,j = 0;
	while(i<lenName&&j<lenTyped)
	{
		if (name[i] == typed[j]) {
			++i;
			++j;
		}
		else
		{
			++j;
		}
	}


	if (i == lenName && j <= lenTyped)
		return true;
	else
		return false;
        
    }
```




