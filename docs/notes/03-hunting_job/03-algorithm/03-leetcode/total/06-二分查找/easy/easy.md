<p id="的平方根"></p>



### 69. x 的平方根

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/sqrtx/)

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

#### 相乘穷举，可能溢出

```C++

    int mySqrt(int x) {
	if (x == 0) return 0;
	if (x <= 3) return 1;
	int i = 2;//输入2147395600时报错，（i*i）也是个int，				//int，可保存不了这么大的数字，只好改为					//long
	for (; i < x / 2; ++i)
	{
		if ( (i * i <= x) && ((i + 1)* (i + 1) > x))
			return i;
	}
    return i;
    }
```



```C++
    int mySqrt(int x) {
	if (x == 0) return 0;
	if (x <= 3) return 1;
	long int i = 2;//改为long后通过
	for (; i < x / 2; ++i)
	{
		if ( (i * i <= x) && ((i + 1)* (i + 1) > x))
			return i;
	}
    return i;
    }
```

执行用时 :64 ms, 在所有 C++ 提交中击败了5.00%的用户

内存消耗 :8.1 MB, 在所有 C++ 提交中击败了90.43%的用户



#### 二分法会更快一点

```c++
    int mySqrt(int x) {
	if (x == 0) return 0;
	if (x <= 3) return 1;
	int min = 0;
	int max = x;
	while (max - min > 1)
	{
		int m = (max + min) / 2;
		if (x / m < m)//用x/m<m，而不是m*m<x可以防止溢出
			max = m;
		else
			min = m;
	}
	return min;
    }
```





```C++
    int mySqrt(int x) {
        long mid = 0;
        long left = 0;
        long right = x;
        while (left < right)
        {
            mid = (left + right + 1) / 2;
            long sq = mid * mid; //或者这样也会更快一点
            if (sq > x)
            {
                right = mid - 1;
            }
            else
            {
                left = mid;
            }
        }
        
        return (int)left;
    }
```



<p id="两数之和"></p>



### **167. 两数之和 II - 输入有序数组]**

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

给定一个已按照**升序排列** 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

```C++
输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。


```







##### 第一次

```c++
    vector<int> twoSum(vector<int>& numbers, int target) {
   	vector<int> vIndex;
	vIndex.reserve(2);
	if (numbers[0] + numbers[1] == target)
	{
		vIndex.push_back(1);
		vIndex.push_back(2);
		return vIndex;
	}
	int max = 0,min = 0;
	for (int i=numbers.size()-1;i>=0;--i)
	{
		if (numbers[i] > target && numbers[i - 1] <= target)
		{
			max = i-1;
			break;
		}
	}
	while (max > min)
	{		
		int mid = (max + min) / 2;
		if (numbers[max] + numbers[min] == target)
		{
			vIndex.push_back(min + 1);
			vIndex.push_back(max + 1);
			return vIndex;
		} else if (numbers[mid]*2 > target){
			max = mid;
		}
		else if (numbers[mid]*2<target)	{
			min = mid;
		}
	}
	return vIndex;
    }
```



输入为[2,3,4] 6

**这种情况就是尾数比target还要大，所以有缺陷**



还有就是 有序数组的第一个元素可能为 负数 ，比如[-3,1,2,3,4]，target为 0 ，这样的话，第一步会直接定位到 1 这个元素，所以，找max的那里有缺陷

```c++
	for (int i=numbers.size()-1;i>=0;--i)
	{
		if (numbers[0]+ numbers[i] <= target) { max = i; break; }
		else if (numbers[0] + numbers[i] > target && numbers[0] + numbers[i - 1] <= target)
		{
			max = i-1;
			break;
		}
	}
```



加上首元素，numbers[0]+ numbers[i]来判断就可以防止这种情况了。还有就是要判断尾元素是不是就比target小的情况。



##### 第三次：

```C++
vector<int> vIndex;
	vIndex.reserve(2);
	if (numbers[0] + numbers[1] == target)
	{
		vIndex.push_back(1);
		vIndex.push_back(2);
		return vIndex;
	}
	int max = 0,min = 0;
	for (int i=numbers.size()-1;i>=0;--i)
	{
		if (numbers[0]+ numbers[i] <= target) { max = i; break; }
		else if (numbers[0] + numbers[i] > target && numbers[0] + numbers[i - 1] <= target)
		{
			max = i-1;
			break;
		}
	}
	//cout << "max " << max << endl;
	while (max > min)
	{
		
		int mid = (max + min) / 2;
		//cout << "max " << max << " min" << min << " mid "<<mid<< " numbers[mid]*2:"<< numbers[mid] * 2 <<endl;
		if (numbers[max] + numbers[min] == target)
		{
			//cout << "numbers[max] + numbers[min] == target" << endl;
			vIndex.push_back(min + 1);
			vIndex.push_back(max + 1);
			return vIndex;
		} else if (numbers[mid]*2 > target){
			max = mid;
		}
		else if (numbers[mid]*2<=target)	{
			min = mid;
		}
	}
	return vIndex;
```

输入为 **[1,2,3,4,4,9,56,90]  8**

这种最中间的两个元素是最终结果，所以要在 numbers[mid] *2 <target的基础上加上 = 号



##### 第四次：就告诉我超出时间限制了。。

#####  



#####  **直接双指针，简单粗暴！！**

```C++
vector<int> twoSum(vector<int>& numbers, int target) {
	
	int low = 0, high = numbers.size() - 1;
	while (low < high) {
		int sum = numbers[low] + numbers[high];
		if (sum == target)
			return vector<int>{ low + 1, high + 1 };
		else if (sum < target)
			++low;
		else
			--high;
	}
	return { -1, -1 };

}

```

<p id="第一个错误的版本"></p>



###  278. 第一个错误的版本

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/first-bad-version/)

你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。

假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。

示例:

给定 n = 5，并且 version = 4 是第一个错误的版本。

调用 isBadVersion(3) -> false
调用 isBadVersion(5) -> true
调用 isBadVersion(4) -> true

所以，4 是第一个错误的版本。

#### **二分法，注意边界。**

**不能写 int mid = (lo + hi) / 2; 要写 int mid = lo + (hi - lo) / 2;**

这个题目，返回 lo 或者 hi 都行，因为终止条件是 lo == hi.
这是二分里比较难的题目了吧，找的是分割点，不是某个值。
[********########] 就像这样的有序数组，找第一个 # 号。
二分搜索的演化版本，查找某个值，返回其索引，如果找不到，返回其本来应该所在的位置（比如上面 # 号的位置）。遇到这种二分搜索，就拿这个 bad version 来套就行了。

```C++

bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int lo = 1, hi = n;
        
        while(lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (isBadVersion(mid)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return hi;
    }
};
```





#### 不在循环内定义零时变量

执行用时 :0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗 :8.3 MB, 在所有 C++ 提交中击败了5.38%的用户

```C++
 int firstBadVersion(int n) {
    int low = 1;
    int mid = low+(n-low ) / 2;
	while (low<n)
	{
        
		if (isBadVersion(mid))
		{
			n = mid;
		}
		else
		{
			low = mid+1;
		}
        mid = low+(n-low ) / 2;
	}
	return low;
        
    }
```

<p id="两个数组的交集"></p>



### 350. 两个数组的交集 II

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。
进阶:

如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？



##### 第一种，比较简单易懂：

```c++
vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {

	sort(nums1.begin(), nums1.end());
	sort(nums2.begin(), nums2.end());
	int size1 = nums1.size();
	int size2 = nums2.size();
	int p1 = 0, p2 = 0;
	vector<int> result;
    //result.reserve(size1 > size2 ? size2 : size1);//加上这一句，并不一定会更快一点。
	while (p1 < size1 && p2 < size2) //很重要
	{
		if (nums1[p1] == nums2[p2])
		{
			result.push_back(nums1[p1]);
			p1++;
			p2++;
		}
		else if (nums1[p1] < nums2[p2])
		{
			p1++;
		}
		else
		{
			p2++;
		}
	}
	return result;

}
```





##### 第二种直接在数组上查找

```
 vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        vector<int> res;
        vector<int>::iterator it;
        for(int i=0;i<nums1.size();i++)
        {
            it=find(nums2.begin(),nums2.end(),nums1[i]);
            if(it!=nums2.end())//查找到元素
            {
                res.push_back(*it);
                nums2.erase(it);//删除元素
            }
        }
        return res;
    }
```





##### 第三中，利用map来进行比对

```C++
vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {

	if (nums1.size() > nums2.size()) swap(nums1, nums2);//用元素少的数组元素查找
	map<int, int> a;
	for (int i = 0; i < nums2.size(); i++)//初始化map
	{
		if (!a.count(nums2[i]))
			a.insert(map<int, int>::value_type(nums2[i], 1));
		else a[nums2[i]]++; //统计相同元素的个数
	}
	vector<int> res;
	for (int i = 0; i < nums1.size(); i++)
	{
		if (a.count(nums1[i])) //如果有
		{
			if (a[nums1[i]] != 0)
			{
				res.push_back(nums1[i]);
				a[nums1[i]]--;
			}
		}
	}
	return res;
}
```





##### 第四种,unordered_map更快速

```C++
   vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
         // 建立set
        unordered_map<int,int> s;   // 查找快 和前边区别在于需要记录出现次数
        for(auto n:nums1)
        {
            s[n]++;
        }
        
        // 遍历nums2判断在不在set 里边 在就是交集
        vector<int> ans;
        for(auto n:nums2)
        {
            auto it=s.find(n);
            if(it!=s.end() && it->second>0) // 存在且次数大于0 才可以加入
            {
                ans.push_back(n);
                it->second--;      // 用一次次数减一
               //  s.erase(it);  // 删除已经存在的防止多次输出相同的元素     
            }
        }
        return ans;
    }
```



<p id="有效的完全平方数"></p>



### 367. 有效的完全平方数

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/valid-perfect-square/)

#### 第一种，int型溢出

给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。

示例 1：

输入：16
输出：True
示例 2：

输入：14
输出：False





Line 8: Char 11: runtime error: signed integer overflow: 1073741824 * 1073741824 cannot be represented in type 'int' (solution.cpp

```C++
bool isPerfectSquare(int num) {
	int mid=1,low = 1,high=num;
	while (low<=high)
	{
		mid = low + (high - low) / 2;
		if (mid * mid == num)//这里会溢出，当int为INT_MAX时，mid*mid肯定超过INT_MAX了
		{
			return true;
		}
		else if (mid*mid >num)
		{
			high = mid-1;
		}
		else 
		{
			low = mid+1;
		}

	}
	return false;
}
```

#### 第二种，从46340-1直接搜索

INT_MAX 足最大为 2^32 -1 大约为 2147483647，他的平方差是 46340，直接搜索 从 1-46340搜索就行

46340*46340 = 2,147,395,600

46341*46341 = 2,147,488,281

```C++
    bool isPerfectSquare(int num) {
   	int mid=1,low = 1,high=46340;
	while (low<=high)
	{
		mid = low + (high - low) / 2;
		if (mid * mid == num)
		{
			return true;
		}
		else if (mid*mid >num)
		{
			high = mid-1;
		}
		else 
		{
			low = mid+1;
		}

	}
	return false;
    }
};
```

执行用时 :4 ms, 在所有 C++ 提交中击败了72.54%的用户

内存消耗 :8.1 MB, 在所有 C++ 提交中击败了26.74%的用户



#### 第三种 ，一个完全平方数必是连续奇数的和

 1+3+5+7+9+…+(2n-1)=n^2

```C++
    bool isPerfectSquare(int num) {
	int i = 1;
	while (num > 0)
	{
		num -= i;
		i += 2;
	}
	return num == 0;
    }
```

执行用时 :4 ms, 在所有 C++ 提交中击败了72.54%的用户

内存消耗 :7.9 MB, 在所有 C++ 提交中击败了67.91%的用户

<p id="猜数字大小"></p>



### 374. 猜数字大小

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)

我们正在玩一个猜数字游戏。 游戏规则如下：
我从 **1** 到 ***n*** 选择一个数字。 你需要猜我选择了哪个数字。
每次你猜错了，我会告诉你这个数字是大了还是小了。
你调用一个预先定义好的接口 `guess(int num)`，它会返回 3 个可能的结果（`-1`，`1` 或 `0`）：

```
-1 : 我的数字比较小
 1 : 我的数字比较大
 0 : 恭喜！你猜对了！
```

**示例 :**

```
输入: n = 10, pick = 6
输出: 6
```





#### 二分法

```C++
int guess(int num);

class Solution {
public:
    int guessNumber(int n) {
    int low=1,mid=low+(n-low)/2;
    while(low<=n)
    {
        if(guess(mid)==0) return mid;
        else if(guess(mid)==1){
            low=mid+1;
        }
        else
        {
            n = mid-1;
        }
        mid=low+(n-low)/2;
    }
        return low;
        
    }
};
```

执行用时 :4 ms, 在所有 C++ 提交中击败了70.91%的用户

内存消耗 :8.3 MB, 在所有 C++ 提交中击败了5.38%的用户

<p id="判断子序列"></p>



### 392. 判断子序列

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/is-subsequence/)



给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

示例 1:
s = "abc", t = "ahbgdc"

返回 true.

示例 2:
s = "axc", t = "ahbgdc"

返回 false.

后续挑战 :

如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？





#### 第一版自己写的，比较耗费空间

执行用时 :52 ms, 在所有 cpp 提交中击败了83.51%的用户

内存消耗 :17.1 MB, 在所有 cpp 提交中击败了21.38%的用户



```c++
bool isSubsequence(string s, string t) {

	int len = t.size(),count=0;
	for (unsigned i = 0,j=0; i < s.size(); ++i) {

		while (true) {
			if (j < len && s[i] == t[j]) {
				count++;
				j++;
				break;
			}
			else if (j < len)
				j++;
			else
				break;
		}

		if (j == len && i<s.size()-1) {
			return false;
		}


	}
	if (count == s.size())
		return true;
	else
		return false;


}


```



#### 后续挑战，很不错

后续挑战，输入量大，小写字母创建25的二维数组，存储t的坐标，这样就可以把s的判断直接转为坐标的判断，
dp[0]代表了存储了a出现在t的所有的位置,逐个字符判断s的字符顺序是否在t内，直接返回结果。
时间复杂度O(t.size()+2000)：分别为创建数组需要O(t.size()),
索引是递增的使用二分查找s的单个字符20次之内就可找到需要O(100*20)。
适用大量的输入判断子序列。



```c++
bool isSubsequence(string s, string t) {        
    vector<vector<int>>dp(26);
    int tag=-1;
    for(int i=0;i<t.size();i++)
        dp[t[i]-'a'].push_back(i);
    for(int i=0;i<s.size();i++){
        int now=s[i]-'a';
        int left=0,right=dp[now].size()-1;
        while(left<right){
            int mid=(left+right)/2;
            if(dp[now][mid]>tag)
                right=mid;
            else
                left=mid+1;
        }
        if(right<left || dp[now][left]<tag)return false;
        tag=dp[now][left];
    

}
return true;

}
```



<p id="排列硬币"></p>





### 441. 排列硬币

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/arranging-coins/)

你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。

给定一个数字 n，找出可形成完整阶梯行的总行数。

n 是一个非负整数，并且在32位有符号整型的范围内。

示例 1:

n = 5

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤

因为第三行不完整，所以返回2.
示例 2:

n = 8

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

因为第四行不完整，所以返回3.





#### 第一种，挨个递减

```C++
    int arrangeCoins(int n) {
	if (n == 0) return 0;
	int i = 1;
	while (n > 0)
	{
		n -= i;
		i += 1;
	}
	if (n < 0) return i - 2; //这里需要注意，n是否为当前行最后一个
	else
		return i - 1;
    }
```

执行用时 :12 ms, 在所有 C++ 提交中击败了62.52%的用户

内存消耗 :8.2 MB, 在所有 C++ 提交中击败了75.18%的用户



**比如 10 = 1+2+3+4 ，刚好可以到第四行，所以返回i-1，而对于11=1+2+3+4+1，此时也应该返回4，而此时i=6；所以返回i-2**

```
0   0
1   1
2   1
3   2
4   2
5   2
6   3
7   3
8   3
9   3
10   4
11   4
12   4
13   4
14   4
15   5
16   5
17   5
18   5
19   5
20   5
```

#### 第二种，列数学公式



1+2+3+4+。。+k=k(k+1)/2

所以 k(k+1)/2<=n;

k^2 + k ＜＝ n　×　２；
配方　４ｋ＾２　＋　４ｋ　＋　１　＜＝　８ｎ　＋　１；
２ｋ　＋　１　＜＝　ｓｑｒｔ（８ｎ　＋　１）；
ｋ＜＝（sqrt（８ｎ＋１）－１）／２；

```C++
int arrangeCoins(int n) {
       return (sqrt(n * 8.0 + 1) - 1) / 2;
    }
```

执行用时 :8 ms, 在所有 C++ 提交中击败了80.98%的用户

内存消耗 :8.3 MB, 在所有 C++ 提交中击败了73.70%的用户

<p id="供暖器"></p>



### 475. 供暖器,很经典

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/heaters/)

冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

现在，给出位于一条水平线上的房屋和供暖器的位置，找到可以覆盖所有房屋的最小加热半径。

所以，你的输入将会是房屋和供暖器的位置。你将输出供暖器的最小加热半径。

说明:

给出的房屋和供暖器的数目是非负数且不会超过 25000。
给出的房屋和供暖器的位置均是非负数且不会超过10^9。
只要房屋位于供暖器的半径内(包括在边缘上)，它就可以得到供暖。
所有供暖器都遵循你的半径标准，加热的半径也一样。
示例 1:

输入: [1,2,3],[2]
输出: 1
解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
示例 2:

输入: [1,2,3,4],[1,4]
输出: 1
解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。



#### 第一种，错误的

```c++
int minRadius(vector<int>& houses, int& pos1, int &pos2) {
	vector<int>::iterator it1 = find(houses.begin(), houses.end(), pos1);
	vector<int>::iterator it2 = find(houses.begin(), houses.end(), pos2);
	int radius1 = *(it1 + (it2 - it1) / 2) - pos1,radius2=pos2- *(it1 + (it2 - it1) / 2);
	
	//cout << " pos1 pos2  " << pos1 << "  " << pos2 << "   radius1  radius2 " << radius1 <<"  "<< radius2 << endl;
	return radius1>radius2?radius1:radius2;
}



int findRadius(vector<int>& houses, vector<int>& heaters) {
	if (heaters.size() == 1) return fabs(houses[0] - heaters[0]) > fabs(houses[houses.size() - 1] - heaters[0]) ? fabs(houses[0] - heaters[0]) : fabs(houses[houses.size() - 1] - heaters[0]);
	sort(houses.begin(), houses.end());
	sort(heaters.begin(), heaters.end());
	int maxRaius = 0;
	int temp = fabs(houses[0] - heaters[0]);
	maxRaius = maxRaius > temp ? maxRaius : temp;
	//cout << maxRaius << endl;
	for (vector<int>::iterator it = heaters.begin(); it != heaters.end()-1;++it ) {
		
		temp=minRadius(houses, *it, *(it+1));
		maxRaius = maxRaius > temp ? maxRaius : temp;
		//cout << maxRaius << endl;
	}
	temp = fabs(houses[houses.size() - 1] - heaters[heaters.size()-1]);
	maxRaius = maxRaius > temp ? maxRaius : temp;
	//cout << maxRaius << endl;
	return maxRaius;
}
```



我的想法是，比较每两个热水器中间地方，距离房子的两边距离分别为多少。当然了，热水器为1的时候，就看第一个房子和最后一个房子到热暑期的距离，谁比较大了。比如[1,2,3,4],[1,4]，其实最短距离为1，而不是2。



#### 第二种，直接比较每个房屋前后热水器的距离

房屋左右侧的热水器，取距离小的那个，最终取的是所有房屋所需最大的那个半径。

```c++

int minRadius(vector<int>& heaters, int& target) {
	if (target < heaters[0]) return heaters[0] - target;
	if (target > heaters[heaters.size() - 1]) return target - heaters[heaters.size() - 1];
	int mid = 0, low = 0, high = heaters.size() - 1;
	while (low + 1 < high)
	{
		mid = low + (high - low) / 2;
		if (target == heaters[mid]) return 0;
		else if (target > heaters[mid]) {
			low = mid;
		}
		else {
			high = mid;
		}
	}//差值为1的时候就停止判断，所以需要再进行判断一下

	if (heaters[low] == target || heaters[high] == target) return 0;
	else
	{	return min(fabs(target - heaters[low]), fabs(target - heaters[high]));
	}
}



int findRadius(vector<int>& houses, vector<int>& heaters) {
	if (heaters.size() == 1) return max(heaters[0] - houses[0], houses[houses.size() - 1] - heaters[0]);
	sort(heaters.begin(), heaters.end());//对热水器进行排序
	int temp,maxRaius = 0;
	for (vector<int>::iterator it = houses.begin(); it != houses.end();++it ) {
		
		temp=minRadius(heaters, *it);
		maxRaius = maxRaius > temp ? maxRaius : temp;
		//cout << maxRaius << endl;
	}

	//cout << maxRaius << endl;
	return maxRaius;
}
```

<p id="二分查找"></p>



### 704. 二分查找

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/binary-search/)



给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1


提示：

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。

```C++
    int search(vector<int>& nums, int target) {
	int mid = 0, low = 0, high = nums.size() - 1;
	while (low < high) {
		mid = low + (high - low) / 2;
		if(nums[mid]==target)
		{
			return mid;
		}
		else if (nums[mid] < target) {
			low = mid + 1;
		}
		else
		{
			high = mid - 1;
		}

	}
	if (nums[low] == target) return low;
	else 
		return -1;
    }
```



执行用时 :68 ms, 在所有 C++ 提交中击败了38.93%的用户

内存消耗 :11 MB, 在所有 C++ 提交中击败了69.09%的用户



#### 第二种，二分法经典模板三解析

循环中止条件为 start < end，代表差值为1的时候就中止了
同时
start = mid;
end = mid;
这就代表，如果搜寻到start和end相差为1的时候，循环就已经停止，所以需要在循环结束后继续判断

个人比较喜欢用模版三，因为更加清晰易理解，后面如果需要基于此修改的时候，也更能够想清楚。

```C++
int search(vector<int>& nums, int target) {

    int start = 0;
    int end = nums.size() - 1;
    while (start + 1 < end) {
        //start和end差值为1的时候，直接就中止了。
        int mid = start + (end - start) / 2;
        if (nums[mid] < target) {
            start = mid;
        }
        else {
            end = mid;
        }
    }
    if (nums[start] == target) {
        //因为差值为1的时候，直接就中止了，所以，需要判断start和end
        return start;
    }
    if (nums[end] == target) {
        //因为差值为1的时候，直接就中止了，所以，需要判断start和end
        return end;
    }
    return -1;
}
```

#### 二分法经典模板一解析

循环中止条件为 start <= end，代表差值为1和0的时候都会继续循环。
代码相应的处理方法就是
**start = mid + 1;**
**end = mid - 1;**

```c++
int search(vector<int>& nums, int target) {
if (nums.size() == 0) {
        return -1;
    }
    int start = 0;
    int end = nums.size() - 1;
    while (start <= end) {
        //差值为1的时候，mid优先等于start
        //差值为0的时候，还会继续循环
        int mid = start + (end - start) / 2;
        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] < target) {
            //差值为1的情况下，mid比target小，加一/
            //差值为0的情况下，mid比target小，加一则结束
            start = mid + 1;
        }
        else {
            //差值为1的情况下，mid比target大，那么减一
            //差值为0的情况下，mid比target大，减一则结束 
            end = mid - 1;
        }
    }      
    return -1;
}  
```

<p id="寻找比目标字母大的最小字母"></p>

​        

### 744. 寻找比目标字母大的最小字母

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/)

给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。

数组里字母的顺序是循环的。举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回 'a'。

示例:

输入:
letters = ["c", "f", "j"]
target = "a"
输出: "c"

输入:
letters = ["c", "f", "j"]
target = "c"
输出: "f"

输入:
letters = ["c", "f", "j"]
target = "d"
输出: "f"

输入:
letters = ["c", "f", "j"]
target = "g"
输出: "j"

输入:
letters = ["c", "f", "j"]
target = "j"
输出: "c"

输入:
letters = ["c", "f", "j"]
target = "k"
输出: "c"
注:

letters长度范围在[2, 10000]区间内。
letters 仅由小写字母组成，最少包含两个不同的字母。
目标字母target 是一个小写字母。



#### 二分法，比较绕一点了

```C++
char nextGreatestLetter(vector<char>& letters, char target) {
	int l = 0;
	int r = letters.size() - 1;
	while (l <= r)
	{
		int mid = (l + r) / 2;
		if (target < letters[mid])//确切大于了，右侧再向后退
			r = mid - 1;
		else
			l = mid + 1;//即使是等于，也依然向前走
	}
	return letters[l % letters.size()];//到最后节点了，返回第一个元素
}
```

执行用时 :8 ms, 在所有 C++ 提交中击败了99.29%的用户

内存消耗 :9.1 MB, 在所有 C++ 提交中击败了78.92%的用户








