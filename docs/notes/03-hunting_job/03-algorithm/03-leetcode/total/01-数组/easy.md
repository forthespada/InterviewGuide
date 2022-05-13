<p id="构建乘积数组"></p>

### 剑指 Offer 66. 构建乘积数组

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/gou-jian-cheng-ji-shu-zu-lcof/)

给定一个数组 `A[0,1,…,n-1]`，请构建一个数组 `B[0,1,…,n-1]`，其中 `B` 中的元素 `B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]`。不能使用除法。

 

**示例:**

```cpp
输入: [1,2,3,4,5]
输出: [120,60,40,30,24]
```

 

**提示：**

- 所有元素乘积之和不会溢出 32 位整数
- `a.length <= 100000`

#### 1、一种绝妙的作法

执行用时：36 ms, 在所有 C++ 提交中击败了88.82%的用户

内存消耗：24.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
    vector<int> constructArr(vector<int>& a) {
        int len = a.size();
        int temp=1;
        vector<int> b(len);
        for(int i=0;i<len;temp*=a[i],++i)
            b[i] = temp;
        
        temp=1;
        for(int i=len-1;i>=0;temp*=a[i],--i)
            b[i] *=temp;

        return b;
    }
~~~

#### 2、暴力解法  会超时

舍弃





<p id="第三大的数"></p>

### 414. 第三大的数  很不错的题目

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/third-maximum-number/)

给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。

**示例 1:**

```cpp
输入: [3, 2, 1]
输出: 1
解释: 第三大的数是 1.
```

**示例 2:**

```cpp
输入: [1, 2]
输出: 2
解释: 第三大的数不存在, 所以返回最大的数 2 .
```

**示例 3:**

```cpp
输入: [2, 2, 3, 1]
输出: 1
解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
存在两个值为2的数，它们都排第二。
```





#### 第一版，有参考

执行用时 :4 ms, 在所有 cpp 提交中击败了99.23%的用户

内存消耗 :9.1 MB, 在所有 cpp 提交中击败了67.43%的用户

```cpp
 int thirdMax(vector<int>& nums) {
    long long  firstNum = LONG_MIN,secondNum = LONG_MIN,thirdNum = LONG_MIN;
	for (auto& a : nums) {
		if (firstNum < a) { 
			
			thirdNum = secondNum;
			secondNum = firstNum;
			firstNum = a; 
		}
		else if (firstNum > a && secondNum < a) { 
			thirdNum = secondNum;
			secondNum = a; 
		}
		if (secondNum > a && thirdNum<a ) { 
			thirdNum = a; 
		}
	}

	if (thirdNum == LONG_MIN)
		return firstNum;
	else
		return thirdNum;
        
    }
```



<p id="最短无序连续子数组"></p>


### 581. 最短无序连续子数组  很经典的题目，very nice

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/)

给定一个整数数组，你需要寻找一个**连续的子数组**，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是**最短**的，请输出它的长度。

**示例 1:**

```
输入: [2, 6, 4, 8, 10, 9, 15]
输出: 5
解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
```

**说明 :**

1. 输入的数组长度范围在 [1, 10,000]。
2. 输入的数组可能包含**重复**元素 ，所以**升序**的意思是**<=。**



#### 第一版，参考别人的思路

从左到右循环，记录最大值为 max，若 nums[i] < max, 则表明位置 i 需要调整，记录需要调整的最大位置 i 为 low; 同理，从右到左循环，记录最小值为 min, 若 nums[i] > min, 则表明位置 i 需要调整，记录需要调整的最小位置 i 为 high.





**其实并不是的，而是从左向右，保存该过程中的最大值，当当前值与MAX进行对比，如果小于的话说明已经到达了无序列表中了，那就记录当前值，一直到有序列表为止，此时后半部分的有序列表中的第一个值，也要比前面的大或等于前面的最大值，记录下的位置值就不会再改动了，从右到左的部分类似**



执行用时 :24 ms, 在所有 cpp 提交中击败了99.68%的用户

内存消耗 :10.5 MB, 在所有  cpp 提交中击败了85.61%的用户

```c++
int findUnsortedSubarray(vector<int>& nums) {


	if (nums.size() <= 1) return 0;
	int len=nums.size(),low = 0, high = len - 1, maxNum = nums[0], minNum = nums[len - 1];
	for (int i = 1; i < len; i++) {
		maxNum = max(maxNum, nums[i]);
		minNum = min(minNum, nums[len - 1 - i]);
		if (nums[i] < maxNum) low = i;
		if (nums[len - 1 - i] > minNum) high = len - 1 - i;
	}

	return low > high ? low - high + 1 : 0;
}
```





#### 第二版，获得启发，重新写了一遍



执行用时 :44 ms, 在所有 cpp 提交中击败了70.21%的用户

内存消耗 :10.4 MB, 在所有 cpp 提交中击败了94.96%的用户



```c++
if (nums.size() == 1) return 0;

	int low = 0, high = nums.size() - 1,len=nums.size();
	int maxNum = nums[0], minNum = nums[high];
	
	for (int i = 1; i < len ; ++i) {

		maxNum = max(nums[i], maxNum);
		if (nums[i] < maxNum) {		
			low = i;
			//cout << low <<endl;			
		}
}

	for (int j = high-1; j >=0 ; --j) {

		minNum = min(nums[j], minNum);
		if (nums[j] > minNum) {
			high = j ;
			//cout <<"high "<< high << endl;
		}
	}

	//cout << low << " " << high << endl;

	if (low>high)
		return low - high + 1;
	else
		return 0;
```







#### 第三版，将两个循环改为单一循环，加速了一下

执行用时 :28 ms, 在所有 cpp 提交中击败了98.19%的用户

内存消耗 :10.3 MB, 在所有 cpp 提交中击败了97.12%的用户



```c++
 int findUnsortedSubarray(vector<int>& nums) {
	if (nums.size() == 1) return 0;
	int low = 0, high = nums.size() - 1,len=nums.size();
	int maxNum = nums[0], minNum = nums[high];
	
	for (int i = 1; i < len ; ++i) {

		maxNum = max(nums[i], maxNum);
		if (nums[i] < maxNum) {		
			low = i;		
		}

		minNum = min(nums[len-1-i], minNum);
		if (nums[len - 1 - i] > minNum) {
			high = len - 1 - i;
		}
}

	return low > high ? low - high + 1 : 0;
        
    }
```

<p id="种花问题"></p>


### 605. 种花问题  也是很不错的题目

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/can-place-flowers/)

假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 **n** 。能否在不打破种植规则的情况下种入 **n** 朵花？能则返回True，不能则返回False。

**示例 1:**

```
输入: flowerbed = [1,0,0,0,1], n = 1
输出: True
```

**示例 2:**

```
输入: flowerbed = [1,0,0,0,1], n = 2
输出: False
```

**注意:**

1. 数组内已种好的花不会违反种植规则。
2. 输入的数组长度范围为 [1, 20000]。
3. **n** 是非负整数，且不会超过输入数组的大小。





#### 第一版，改了好一会，速度较慢

执行用时 :24 ms, 在所有 cpp 提交中击败了40.79%的用户

内存消耗 :10.4 MB, 在所有 cpp 提交中击败了80.32%的用户

```c++
bool canPlaceFlowers(vector<int>& flowerbed, int n) {

	
	unordered_map<int, int> res;// 0/1,count
	res[0] = 0;
	res[1] = 0;
	size_t i = 0;

	while (i < flowerbed.size() && flowerbed[i] == 0 ) {
		res[0] ++;
		i++;
	}
	if (i == flowerbed.size()) {//全是 0
		return (res[0] + 1) / 2>=n;
	} 

	int plantFlower =  res[0] / 2;//遇到1了，此时flowerbed[i] = 1
	res[1] = 1;
	res[0] = 0;
	i++;
	for (; i < flowerbed.size();++i ) {
		
		res[flowerbed[i]] += 1;

		if (res[1] == 2) {
			//countZero = res[0];
			plantFlower += (res[0] - 1) / 2;
			res[1] = 1;
			res[0] = 0;
		}	

	}
	if (res[1] == 2) {
		//countZero = res[0];
		plantFlower += (res[0] - 1) / 2;
	}
	else if (res[1] == 1) {
		//countZero = res[0];
		plantFlower += res[0] / 2;
	}


	return plantFlower >= n;

}
```





#### 第二版，别的想法，防御性种花，这思路可以的....

防御式编程思想：在 flowerbed 数组两端各增加一个 0， 这样处理的好处在于不用考虑边界条件，任意位置处只要连续出现三个 0 就可以栽上一棵花。



执行用时 :24 ms, 在所有 cpp 提交中击败了40.79%的用户

内存消耗 :10.2 MB, 在所有 cpp 提交中击败了93.09%的用户



```c++
bool canPlaceFlowers(vector<int>& flowerbed, int n) {

	
	int len = 1, ans = 0;                //认为左边界提供1个0
	for (auto &i : flowerbed) {
		if (i) {//为1,遇到1了
			ans += (len - 1) / 2;        //len个0可以种这么多花
			len = 0;
		}
		else {//为0
			++len;
		}
	}
	ans += (len) / 2;                      //处理0尾，认为右边界提供一个0
	return ans >= n;

}
```



<p id="三个数的最大乘积"></p>


### 628. 三个数的最大乘积

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/maximum-product-of-three-numbers/)

给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

**示例 1:**

```cpp
输入: [1,2,3]
输出: 6
```

**示例 2:**

```cpp
输入: [1,2,3,4]
输出: 24
```

**注意:**

1. 给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
2. 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。







#### 第一版，自己写的

执行用时 :68 ms, 在所有 cpp 提交中击败了75.20%的用户

内存消耗 :10.8 MB, 在所有 cpp 提交中击败了86.46%的用户



```cpp
int maximumProduct(vector<int>& nums) {

	if (nums.size() == 3) return nums[0] * nums[1] * nums[2];
	sort(nums.begin(), nums.end());
	int result=0,max = nums[nums.size() - 1], lastMax = nums[nums.size() - 2];
	int secondMin = nums[1];

	if (secondMin < 0) {

		int temp = nums[0] * secondMin * max;
		result = max * lastMax * nums[nums.size() - 3];
		result = result > temp ? result : temp;

	}
	else
	{
		result = max * lastMax * nums[nums.size() - 3];
	}

	return result;
}

```

<p id="子数组最大平均数"></p>


### 643. 子数组最大平均数 I

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/maximum-average-subarray-i/)

给定 `n` 个整数，找出平均数最大且长度为 `k` 的连续子数组，并输出该最大平均数。

**示例 1:**

```
输入: [1,12,-5,-6,50,3], k = 4
输出: 12.75
解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
```

 

**注意:**

1. 1 <= `k` <= `n` <= 30,000。
2. 所给数据范围 [-10,000，10,000]。



#### 第一版，常规遍历，超时

```c++
double aver(vector<int>& res,int k) {
	double sum=0;
	for (auto& a : res) {
		sum += a;
	}
	return sum / k;

}

double findMaxAverage(vector<int>& nums, int k) {
	vector<int> res;
	int i = 0;
	for (int i = 0; i < k; ++i) {
		res.push_back(nums[i]);
	}

	double  average = aver(res,k);
	double temp = 0.0;
	for ( ; i < nums.size(); ++i) {

		res[i% k] = nums[i];
		temp = aver(res, k);
		average = temp > average ? temp : average;
	}

	return average;

}
```





#### 第二版，改进了一下

执行用时 :156 ms, 在所有 cpp 提交中击败了76.31%的用户

内存消耗 :21.1 MB, 在所有 cpp 提交中击败了5.17%的用户

```c++
double findMaxAverage(vector<int>& nums, int k) {
	vector<int> res;
	int i = 0;
	for (int i = 0; i < k; ++i) {
		res.push_back(nums[i]);
	}

	int sum = 0;
	for (auto& a : res) {
		sum += a;
	}
	int result = sum;
	for ( ; i < nums.size(); ++i) {

		sum -= res[i % k];
		res[i% k] = nums[i];
		sum += nums[i];
		result = max(sum,result);
	}
	return result*1.0/k;

}
```





#### 第三版，改进一点点

执行用时 :164 ms, 在所有 cpp 提交中击败了70.34%的用户

内存消耗 :18.7 MB, 在所有 cpp 提交中击败了7.76%的用户

```c++
double findMaxAverage(vector<int>& nums, int k) {
	vector<int> res;
	res.reserve(k);
	int i = 0;
	for (; i < k; ++i) {
		res.push_back(nums[i]);		
	}
	int sum = accumulate(res.begin(), res.end(), 0);
	int result = sum;
	for ( ; i < nums.size(); ++i) {

		sum -= res[i % k];
		res[i% k] = nums[i];
		sum += nums[i];
		result = max(sum,result);
	}
	return result*1.0/k;

}
```

<p id="非递减数列"></p>


### 665. 非递减数列 很好的题

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/non-decreasing-array/)

给定一个长度为 `n` 的整数数组，你的任务是判断在**最多**改变 `1` 个元素的情况下，该数组能否变成一个非递减数列。

我们是这样定义一个非递减数列的： 对于数组中所有的 `i` (1 <= i < n)，满足 `array[i] <= array[i + 1]`。

**示例 1:**

```
输入: [4,2,3]
输出: True
解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
```

**示例 2:**

```
输入: [4,2,1]
输出: False
解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
```

**说明:**  `n` 的范围为 [1, 10,000]。





#### 第一版，没做出来，呜呜呜

```cpp
bool checkPossibility(vector<int>& nums) {//4,2,3
	if (nums.size() <= 2) return true;
	bool found = false;
	int minNum = nums[nums.size()-1];
	for (int i = nums.size()-2; i >=0; --i) {

		minNum = min(minNum, nums[i]);
		if (nums[i]>minNum && !found) {
			
			if (i == nums.size() - 2) {
				minNum = nums[i];
				found = true;
			}
			else if (nums[i] <= nums[i + 2])
			{
				found = true;
				minNum = nums[i];
			}
			else if (i == 0) {
				return true;

			}
			else
				return false;
		}
		else if (nums[i] > minNum && found) return false;
		
	}

	return true;
}
```





#### 第二版，看了解析，只能说差一点就解出来了

解析

这道题给了我们一个数组，说我们最多有1次修改某个数字的机会，
  问能不能将数组变为非递减数组。题目中给的例子太少，不能覆盖所有情况，我们再来看下面三个例子：
	4，2，3
	-1，4，2，3
	2，3，3，2，4
我们通过分析上面三个例子可以发现，当我们发现后面的数字小于前面的数字产生冲突后，
[1]有时候需要修改前面较大的数字(比如前两个例子需要修改4)，
[2]有时候却要修改后面较小的那个数字(比如前第三个例子需要修改2)，
那么有什么内在规律吗？是有的，判断修改那个数字其实跟再前面一个数的大小有关系，
首先如果再前面的数不存在，比如例子1，4前面没有数字了，我们直接修改前面的数字为当前的数字2即可。
而当再前面的数字存在，并且小于当前数时，比如例子2，-1小于2，我们还是需要修改前面的数字4为当前数字2；
如果再前面的数大于当前数，比如例子3，3大于2，我们需要修改当前数2为前面的数3。





执行用时 :32 ms, 在所有 cpp 提交中击败了74.07%的用户

内存消耗 :10.4 MB, 在所有 cpp 提交中击败了70.18%的用户



```cpp
bool checkPossibility(vector<int>& nums) {//4,2,3
	if (nums.size() <= 2) return true;
	int count = 0;
	for (int i = 1; i <nums.size() &&count<2; ++i) {

		if (nums[i - 1] <= nums[i]) continue;
		count++;//前一个数大于当前值
		if (i >= 2 && nums[i - 2] > nums[i])
			nums[i] = nums[i - 1];
		else
			nums[i - 1] = nums[i];


	}

	return count<=1;
}
```

<p id="最长连续递增序列"></p>


### 674. 最长连续递增序列

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/)

给定一个未经排序的整数数组，找到最长且**连续**的的递增序列。

**示例 1:**

```
输入: [1,3,5,4,7]
输出: 3
解释: 最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。 
```

**示例 2:**

```
输入: [2,2,2,2,2]
输出: 1
解释: 最长连续递增序列是 [2], 长度为1。
```

**注意：**数组长度不会超过10000。



#### 第一版，自己写的，很慢啊，比较low

执行用时 :28 ms, 在所有 cpp 提交中击败了14.37%的用户

内存消耗 :25.3 MB, 在所有 cpp 提交中击败了5.21%的用户

```c++
int findLengthOfLCIS(vector<int>& nums) {

	stack<int>res;
	size_t maxLen = 0;
	for (auto& n : nums) {
		
		if (res.empty() || n > res.top())//为空或者当前值大于前面一个值
			res.push(n);

		else//小于等于当前top,千万记得要把这次的值放进去
		{
			maxLen = (res.size() > maxLen ? res.size() : maxLen);
			(stack<int>()).swap(res);
			res.push(n);
		}
		
	}

	maxLen = (res.size() > maxLen ? res.size() : maxLen);
	return maxLen;


}
```





#### 第二版，自己改进了一下，不过性能还是不太行

执行用时 :16 ms, 在所有 cpp 提交中击败了70.37%的用户

内存消耗 :9.5 MB, 在所有 cpp 提交中击败了47.56%的用户



```c++
int findLengthOfLCIS(vector<int>& nums) {


	if (nums.empty()) return 0;
	int temp=nums[0];
	int maxLen = 0,tempLen=0;
	for (auto& n : nums) {	
		if (n > temp)//为空或者当前值大于前面一个值
		{
			temp = n;
			tempLen++;
		}
		else//小于等于当前top,千万记得要把这次的值放进去
		{
			maxLen = (tempLen > maxLen ? tempLen : maxLen);
			tempLen = 1;
			temp = n;		
		}
		
	}

	maxLen = (tempLen > maxLen ? tempLen : maxLen);
	return maxLen;
}
```

<p id="数组的度"></p>


### 697. 数组的度

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/degree-of-an-array/)

给定一个非空且只包含非负数的整数数组 `nums`, 数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是找到与 `nums` 拥有相同大小的度的最短连续子数组，返回其长度。

**示例 1:**

```cpp
输入: [1, 2, 2, 3, 1]
输出: 2
解释: 
输入数组的度是2，因为元素1和2的出现频数最大，均为2.
连续子数组里面拥有相同度的有如下所示:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组[2, 2]的长度为2，所以返回2.
```

**示例 2:**

```
输入: [1,2,2,3,1,4,2]
输出: 6
```

**注意:**

- `nums.length` 在1到50,000区间范围内。
- `nums[i]` 是一个在0到49,999范围内的整数。





#### 第一版 自己写的，还行吧

执行用时 :48 ms, 在所有 cpp 提交中击败了72.42%的用户

内存消耗 :15.2 MB, 在所有 cpp 提交中击败了12.36%的用户



```c++
int findShortestSubArray(vector<int>& nums) {

	unordered_map<int, vector<int>> res;//val first出现的位序,last出现的位序
	int span=0;
	for (size_t i = 0; i < nums.size(); ++i) {
		res[nums[i]].push_back(i);
		span = span > res[nums[i]].size() ? span : res[nums[i]].size();
	}

	int minLen = nums.size(),temp;
	for (auto& r : res) {

		if (r.second.size() == span) {
			temp = r.second[r.second.size() - 1] - r.second[0];
			minLen = minLen < temp ? minLen : temp;
			
		}

	}
	return minLen + 1;
}
```

<p id="比特与比特字符"></p>


### 717. 1比特与2比特字符

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/1-bit-and-2-bit-characters/)

有两种特殊字符。第一种字符可以用一比特`0`来表示。第二种字符可以用两比特(`10` 或 `11`)来表示。

现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。

**示例 1:**

```
输入: 
bits = [1, 0, 0]
输出: True
解释: 
唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。
```

**示例 2:**

```
输入: 
bits = [1, 1, 1, 0]
输出: False
解释: 
唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。
```

**注意:**

- `1 <= len(bits) <= 1000`.
- `bits[i]` 总是`0` 或 `1`.





#### 第一版,自己写的，速度较慢

执行用时 :8 ms, 在所有 cpp 提交中击败了54.05%的用户

内存消耗 :8.6 MB, 在所有 cpp 提交中击败了84.88%的用户

```c++
bool isOneBitCharacter(vector<int>& bits) {


	int low = 0, high = bits.size()-2;
	while (low < high) {

		if (bits[low] == 1) {
			low++;
			if (bits[low] == 1 || bits[low] == 0)  low ++;

		}else if (bits[low] == 0) low++;
	}

	if (low == high) {
		if (bits[low] == 0 && bits[low + 1] == 0)
			return true;
		else
			return false;
	}
	else
		return bits[low] == 0;
}
```





#### 第二版，换了一个思路

执行用时 :4 ms, 在所有 cpp 提交中击败了90.45%的用户

内存消耗 :8.6 MB, 在所有 cpp 提交中击败了80.76%的用户

```c++
bool isOneBitCharacter(vector<int>& bits) {

	if (bits[bits.size() - 1] == 1) return false;

	int low = 0, high = bits.size();
	while (low < high) {

		if (bits[low] == 1) {
			low+=2;

		}
		else if (bits[low] == 0) { 			
			if (low == high - 1) break;
			low++;
		}
	}

	if (low == high-1) {
		return true;
	}
	else
		return false;
}
```

<p id="寻找数组的中心索引"></p>


### 724. 寻找数组的中心索引

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/find-pivot-index/)

给定一个整数类型的数组 `nums`，请编写一个能够返回数组**“中心索引”**的方法。

我们是这样定义数组**中心索引**的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

**示例 1:**

```
输入: 
nums = [1, 7, 3, 6, 5, 6]
输出: 3
解释: 
索引3 (nums[3] = 6) 的左侧数之和(1 + 7 + 3 = 11)，与右侧数之和(5 + 6 = 11)相等。
同时, 3 也是第一个符合要求的中心索引。
```

**示例 2:**

```
输入: 
nums = [1, 2, 3]
输出: -1
解释: 
数组中不存在满足此条件的中心索引。
```

**说明:**

- `nums` 的长度范围为 `[0, 10000]`。
- 任何一个 `nums[i]` 将会是一个范围在 `[-1000, 1000]`的整数。





#### 第一版，这题比想象中的要容易许多啊..

执行用时 :20 ms, 在所有 cpp 提交中击败了98.55%的用户

内存消耗 :9.9 MB, 在所有 cpp 提交中击败了77.04%的用户



```c++
    int pivotIndex(vector<int>& nums) {
    int sum = accumulate(nums.begin(), nums.end(), 0);
	int temp = 0;
	for (int i = 0; i < nums.size(); ++i) {
		if (temp * 2 == sum - nums[i]) {
			return i;
		}
		temp += nums[i];

	}
	return -1;
        
    }
```

<p id="至少是其他数字两倍的最大数"></p>


### 747. 至少是其他数字两倍的最大数

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/)

在一个给定的数组`nums`中，总是存在一个最大元素 。

查找数组中的最大元素是否至少是数组中每个其他数字的两倍。

如果是，则返回最大元素的索引，否则返回-1。

**示例 1:**

```
输入: nums = [3, 6, 1, 0]
输出: 1
解释: 6是最大的整数, 对于数组中的其他整数,
6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
```

 

**示例 2:**

```
输入: nums = [1, 2, 3, 4]
输出: -1
解释: 4没有超过3的两倍大, 所以我们返回 -1.
```

 

**提示:**

1. `nums` 的长度范围在`[1, 50]`.
2. 每个 `nums[i]` 的整数范围在 `[0, 100]`.





#### 第一版，挺简单的



执行用时 :0 ms, 在所有 cpp 提交中击败了100.00%的用户

内存消耗 :8.5 MB, 在所有 cpp 提交中击败了74.18%的用户



```c++
int dominantIndex(vector<int>& nums) {
	
	int index = 0, maxNum = nums[0];
	for (size_t i = 1; i < nums.size(); ++i) {

		if (maxNum < nums[i]) {
			maxNum = nums[i];
			index = i;
		}
	}

	sort(nums.begin(), nums.end());
	for (int i = nums.size() - 2; i >= 0; --i) {
		if (nums[i] * 2 > maxNum) return -1;
	}

	return index;
}
```

<p id="较大分组的位置"></p>
### 830. 较大分组的位置

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/positions-of-large-groups/)

在一个由小写字母构成的字符串 `S` 中，包含由一些连续的相同字符所构成的分组。

例如，在字符串 `S = "abbxxxxzyy"` 中，就含有 `"a"`, `"bb"`, `"xxxx"`, `"z"` 和 `"yy"` 这样的一些分组。

我们称所有包含大于或等于三个连续字符的分组为较大分组。找到每一个较大分组的起始和终止位置。

最终结果按照字典顺序输出。

**示例 1:**

```cpp
输入: "abbxxxxzzy"
输出: [[3,6]]
解释: "xxxx" 是一个起始于 3 且终止于 6 的较大分组。
```

**示例 2:**

```cpp
输入: "abc"
输出: []
解释: "a","b" 和 "c" 均不是符合要求的较大分组。
```

**示例 3:**

```cpp
输入: "abcdddeeeeaabbbcd"
输出: [[3,5],[6,9],[12,14]]
```

**说明:**  `1 <= S.length <= 1000`





#### 第一版，自己写的，比较慢

执行用时 :16 ms, 在所有 cpp 提交中击败了35.69%的用户

内存消耗 :9.3 MB, 在所有 cpp 提交中击败了82.42%的用户



```cpp
vector<vector<int>> largeGroupPositions(string S) {
	if (S.size() <= 2) return {};
	vector<vector<int>> res;
	int len = S.size(), count = 0;
	char ch;
	for (int i = 0; i < len; ) {

		if (S[i] == S[i + 1]) {
			if (S[i + 1] == S[i + 2]) {
				count = 0;
				ch = S[i];
				while (S[i] == ch) {
					count++;
					i++;
				}
				res.push_back({ i - count,i - 1 });
			}
			else
				i++;
		}
		else
			i++;
	}
	return res;

}
```

<p id="矩阵中的幻方"></p>


### 840. 矩阵中的幻方

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/magic-squares-in-grid/)

3 x 3 的幻方是一个填充有**从 1 到 9** 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。

给定一个由整数组成的 `grid`，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。

 

**示例：**

```
输入: [[4,3,8,4],
      [9,5,1,9],
      [2,7,6,2]]
输出: 1
解释: 
下面的子矩阵是一个 3 x 3 的幻方：
438
951
276

而这一个不是：
384
519
762

总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。
```

**提示:**

1. `1 <= grid.length <= 10`
2. `1 <= grid[0].length <= 10`
3. `0 <= grid[i][j] <= 15`





#### 第一版，没意思，纯暴力法，就是比较麻烦

执行用时 :8 ms, 在所有 cpp 提交中击败了51.79%的用户

内存消耗 :9.4 MB, 在所有 cpp 提交中击败了19.05%的用户



```c++
int equal(vector<int>& a, vector<int>& b, vector<int>& c) {
	
	//cout << a[0] << a[1] << a[2] << endl;
	//cout << b[0] << b[1] << b[2] << endl;
	//cout << c[0] << c[1] << c[2] << endl;

	unordered_set<int> res;
	for (auto& i : a) {
		if (i < 1 || i > 9) return 0;
		res.insert(i);
	}
	if (res.size() != 3) return 0;
	for (auto& i : b) {
		if (i < 1 || i > 9) return 0;
		res.insert(i);
	}
	if (res.size() != 6) return 0;
	for (auto& i : c) {
		if (i < 1 || i > 9) return 0;
		res.insert(i);
	}
	if (res.size() != 9) return 0;


	
	int sum = a[0] + a[1] + a[2];
	if (sum == b[0] + b[1] + b[2] && c[0] + c[1] + c[2] == sum) {//行
		if (a[0] + b[0] + c[0] == sum && a[1] + b[1] + c[1]== sum &&  a[2] + b[2] + c[2]==sum) {//列			
			if (a[0] + b[1]+c[2] ==sum&&b[1]+ a[2] + c[0] ==sum) //a0+b1+c2   a2+b1+c0
				return 1;
			else
				return 0;		
		}
		else
			return 0;
	}
	else
		return 0;
}


int numMagicSquaresInside(vector<vector<int>>& grid) {
	if (grid.size() < 3 || grid[0].size() < 3) return 0;
	int count = 0;
	vector<int> a, b, c;
	a.resize(3);
	b.resize(3);
	c.resize(3);
	int len1 = grid.size(), len2 = grid[0].size();//len1=3,len2=4
	for (int i = 0; i <= len1 - 3; ++i) {
		int j = 0;
		while (j <= len2 - 3) {


			a[0]=(grid[i][j + 0]);
			a[1] = (grid[i][j + 1]);
			a[2] = (grid[i][j + 2]);
			//cout << j << " ";
			b[0] = (grid[i+1][j + 0]);
			b[1] = (grid[i+1][j + 1]);
			b[2] = (grid[i+1][j + 2]);
			//cout << j << " ";
			c[0] = (grid[i + 2][j + 0]);
			c[1] = (grid[i + 2][j + 1]);
			c[2] = (grid[i + 2][j + 2]);
			//cout << j << " " << endl;
			count += equal(a, b, c);
			j++;
			//cout << j << " ";
			//cout << endl << "count " << count<<endl;

		}
		//cout << endl;
	}

	return count;

}
```





#### 第二版，经过提示，改进一点

执行用时 :8 ms, 在所有 cpp 提交中击败了51.79%的用户

内存消耗 :8.9 MB, 在所有 cpp 提交中击败了78.57%的用户



中心点必须是5，且每行每列都需要是15才可以



```c++
int equal(vector<int>& a, vector<int>& b, vector<int>& c) {
	
	//cout << a[0] << a[1] << a[2] << endl;
	//cout << b[0] << b[1] << b[2] << endl;
	//cout << c[0] << c[1] << c[2] << endl;

	unordered_set<int> res;
	for (auto& i : a) {
		if (i < 1 || i > 9) return 0;
		res.insert(i);
	}
	if (res.size() != 3) return 0;
	for (auto& i : b) {
		if (i < 1 || i > 9) return 0;
		res.insert(i);
	}
	if (res.size() != 6) return 0;
	for (auto& i : c) {
		if (i < 1 || i > 9) return 0;
		res.insert(i);
	}
	if (res.size() != 9) return 0;


	
	int sum = a[0] + a[1] + a[2]; //sum其实必须是15才可以
	if (sum == b[0] + b[1] + b[2] && c[0] + c[1] + c[2] == sum) {//行
		if (a[0] + b[0] + c[0] == sum && a[1] + b[1] + c[1]== sum &&  a[2] + b[2] + c[2]==sum) {//列			
			if (a[0] + b[1]+c[2] ==sum&&b[1]+ a[2] + c[0] ==sum) //a0+b1+c2   a2+b1+c0
				return 1;
			else
				return 0;		
		}
		else
			return 0;
	}
	else
		return 0;
}


int numMagicSquaresInside(vector<vector<int>>& grid) {
	if (grid.size() < 3 || grid[0].size() < 3) return 0;
	int count = 0;
	vector<int> a, b, c;
	a.resize(3);
	b.resize(3);
	c.resize(3);
	int len1 = grid.size(), len2 = grid[0].size();//len1=3,len2=4
	for (int i = 0; i <= len1 - 3; ++i) {
		int j = 0;
		while (j <= len2 - 3) {

			if (grid[i + 1][j + 1] != 5) { 
				j++;
				continue; 
			}

			a[0]=(grid[i][j + 0]);
			a[1] = (grid[i][j + 1]);
			a[2] = (grid[i][j + 2]);
			//cout << j << " ";
			b[0] = (grid[i+1][j + 0]);
			b[1] = (grid[i+1][j + 1]);
			b[2] = (grid[i+1][j + 2]);
			//cout << j << " ";
			c[0] = (grid[i + 2][j + 0]);
			c[1] = (grid[i + 2][j + 1]);
			c[2] = (grid[i + 2][j + 2]);
			//cout << j << " " << endl;
			count += equal(a, b, c);
			j++;
			//cout << j << " ";
			//cout << endl << "count " << count<<endl;

		}
		//cout << endl;
	}

	return count;

}
```



<p id="到最近的人的最大距离"></p>


### 849. 到最近的人的最大距离 好题

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/maximize-distance-to-closest-person/)

在一排座位（ `seats`）中，`1` 代表有人坐在座位上，`0` 代表座位上是空的。

至少有一个空座位，且至少有一人坐在座位上。

亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。

返回他到离他最近的人的最大距离。

**示例 1：**

```
输入：[1,0,0,0,1,0,1]
输出：2
解释：
如果亚历克斯坐在第二个空位（seats[2]）上，他到离他最近的人的距离为 2 。
如果亚历克斯坐在其它任何一个空位上，他到离他最近的人的距离为 1 。
因此，他到离他最近的人的最大距离是 2 。 
```

**示例 2：**

```
输入：[1,0,0,0]
输出：3
解释： 
如果亚历克斯坐在最后一个座位上，他离最近的人有 3 个座位远。
这是可能的最大距离，所以答案是 3 。
```

**提示：**

1. `1 <= seats.length <= 20000`
2. `seats` 中只含有 0 和 1，至少有一个 `0`，且至少有一个 `1`。



#### 第一版，有参考别人

保存首位连续0的个数，和（中间连续0的个数+1）/2，最近进行比较即可

执行用时 :16 ms, 在所有 cpp 提交中击败了74.71%的用户

内存消耗 :10 MB, 在所有 cpp 提交中击败了82.11%的用户

```c++
int maxDistToClosest(vector<int>& seats) {

	int lowZeroCut=0, highZeroCut = 0,i = 0, len = seats.size();
	int j = len - 1;

	while (seats[i] == 0 && i < len) {
		lowZeroCut++;
		i++;
	}
	i++;//i已经等于1了，跳过即可

	while (seats[j] == 0 && j >=0) {
		highZeroCut++;
		j--;
	}
    //注意这里不可以再像上面一样再跳过j了，还需要他在下面进行一个判断条件
//中间连续的0的判断依据就是遇到1了即可以判断了，仔细想想
	highZeroCut = max(lowZeroCut, highZeroCut);//保存此时的最大值
	lowZeroCut = 0;
	int cut = 0;
	while (i <= j) {
		if (seats[i++] == 0)
		{
			cut++;
		}
		else {//遇到1了
			lowZeroCut = max(cut, lowZeroCut);
			cut = 0;
		}
	}

	highZeroCut = max(highZeroCut, (lowZeroCut + 1) / 2);
	return highZeroCut;

}
```

<p id="公平的糖果交换"></p>


### 888. 公平的糖果交换

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/fair-candy-swap/)

爱丽丝和鲍勃有不同大小的糖果棒：`A[i]` 是爱丽丝拥有的第 `i` 块糖的大小，`B[j]` 是鲍勃拥有的第 `j` 块糖的大小。

因为他们是朋友，所以他们想交换一个糖果棒，这样交换后，他们都有相同的糖果总量。*（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）*

返回一个整数数组 `ans`，其中 `ans[0]` 是爱丽丝必须交换的糖果棒的大小，`ans[1]` 是 Bob 必须交换的糖果棒的大小。

如果有多个答案，你可以返回其中任何一个。保证答案存在。

 

**示例 1：**

```
输入：A = [1,1], B = [2,2]
输出：[1,2]
```

**示例 2：**

```
输入：A = [1,2], B = [2,3]
输出：[1,2]
```

**示例 3：**

```
输入：A = [2], B = [1,3]
输出：[2,3]
```

**示例 4：**

```
输入：A = [1,2,5], B = [2,4]
输出：[5,4]
```

 

**提示：**

- `1 <= A.length <= 10000`
- `1 <= B.length <= 10000`
- `1 <= A[i] <= 100000`
- `1 <= B[i] <= 100000`
- 保证爱丽丝与鲍勃的糖果总量不同。
- 答案肯定存在。



#### 第一版，自己写的，执行这也太慢了

执行用时 :1224 ms, 在所有 cpp 提交中击败了14.22%的用户

内存消耗 :12 MB, 在所有 cpp 提交中击败了95.49%的用户

```c++

 vector<int> fairCandySwap(vector<int>& A, vector<int>& B) {
    int sumA=0, sumB=0;
	for (auto& a : A) {
		sumA += a;
	}
	for (auto& b : B) {
		sumB += b;
	}

	int temp = sumA - sumB > 0 ? sumA - sumB : sumB - sumA;
	temp = temp / 2;
	for (auto& a : A) {

		for (auto& b : B) {
			if (a - b == temp || b - a == temp)
			{
				if(sumA - a + b == sumB - b + a)
					return { a,b };
			}
		}
	}
	return { 0,0 };
        
    }
```





#### 第二版，改进了一下，加一个二分查找，快多了

执行用时 :132 ms, 在所有 cpp 提交中击败了88.39%的用户

内存消耗 :12.2 MB, 在所有 cpp 提交中击败了83.46%的用户



```c++

vector<int> fairCandySwap(vector<int>& A, vector<int>& B) {

	int sumA=0, sumB=0;
	for (auto& a : A) {
		sumA += a;
	}
	for (auto& b : B) {
		sumB += b;
	}

	int b=0,temp = sumA - sumB > 0 ? sumA - sumB : sumB - sumA;
	temp = temp / 2;

	sort(A.begin(), A.end());
	sort(B.begin(), B.end());

	for (auto& a : A) {

			if (lower_bound(B.begin(),B.end(),a + temp)!=B.end())
			{
				b = *(lower_bound(B.begin(), B.end(), a + temp));
				if(sumA - a + b == sumB - b + a)
					return { a,b };
			}
			if (lower_bound(B.begin(), B.end(), a - temp) != B.end())
			{
		
				b = *(lower_bound(B.begin(), B.end(), a - temp));
				if (sumA - a + b == sumB - b + a)
					return { a,b };
			}
	}

	return { 0,0 };

}
```

<p id="卡牌分组"></p>


### 914. 卡牌分组  这也是道好题

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/)

给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 `X`，使我们可以将整副牌按下述规则分成 1 组或更多组：

- 每组都有 `X` 张牌。
- 组内所有的牌上都写着相同的整数。

仅当你可选的 `X >= 2` 时返回 `true`。

 

**示例 1：**

```
输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
```

**示例 2：**

```
输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。
```

**示例 3：**

```
输入：[1]
输出：false
解释：没有满足要求的分组。
```

**示例 4：**

```
输入：[1,1]
输出：true
解释：可行的分组是 [1,1]
```

**示例 5：**

```
输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]
```


**提示：**

1. `1 <= deck.length <= 10000`
2. `0 <= deck[i] < 10000`





#### 第一版，没想完全，还有其他情况



当 [1,1,1,1,2,2,2,2,2,2] 时，相当于 1:4  2:6，此时X为2的时候是可以的，也就是说要算，所有数量的共同最小公倍数，且最小公倍数要为X，X要大于等于2了



```c
bool hasGroupsSizeX(vector<int>& deck) {

	unordered_map<int, int> res;
	for (auto& a : deck) {

		res[a] += 1;
	}

	int minCut = (*(res.begin())).second;
	for (auto it = ++res.begin(); it != res.end(); ++it) {
		minCut = min(minCut, (*it).second);
	}

	if (minCut < 2) return false;



	for (auto& a : res) {
		if (a.second % minCut != 0) return false;//这里不能简单的判断当前值是否可以整除最小值
	}

	return true;


}
```





#### 第二版，改进版本，好题目



执行用时 :16 ms, 在所有 cpp 提交中击败了92.34%的用户

内存消耗 :9.9 MB, 在所有 cpp 提交中击败了73.24%的用户



在运行过程中如果发现最小值小于2或者，当前次数与最小值的最大公约数为1的时候，就该直接返回了



```c++
int greatestCommonDivisor(int a, int b) {
	int c = 0;
	if (a < b) swap(a, b);

	while (true) {
		c = a % b;
		if (c == 0) return b;
		else
		{
			a = b;
			b = c;
		}
	}

}


bool hasGroupsSizeX(vector<int>& deck) {

	unordered_map<int, int> res;
	for (auto& a : deck) {

		res[a] += 1;
	}

	int minCut = (*(res.begin())).second, greatestCommonDivisoreNum = 0;
	for (auto it = res.begin(); it != res.end(); ++it) {
		greatestCommonDivisoreNum = greatestCommonDivisor(minCut, it->second);
		minCut = min(minCut, (*it).second);
		cout << "leastCommonMultipleNum " << greatestCommonDivisoreNum << " minCut " << minCut << endl;
		if (minCut < 2 || greatestCommonDivisoreNum == 1) return false;

	}
	
	return true;

}
```

<p id="有效的山脉数组"></p>


### 941. 有效的山脉数组

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/valid-mountain-array/)

给定一个整数数组 `A`，如果它是有效的山脉数组就返回 `true`，否则返回 `false`。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

- `A.length >= 3`

- 在 

  ```
  0 < i < A.length - 1
  ```

   条件下，存在 

  ```
  i
  ```

   使得：

  - `A[0] < A[1] < ... A[i-1] < A[i]`
  - `A[i] > A[i+1] > ... > A[B.length - 1]`

 

**示例 1：**

```
输入：[2,1]
输出：false
```

**示例 2：**

```
输入：[3,5,5]
输出：false
```

**示例 3：**

```
输入：[0,3,2,1]
输出：true
```

 

**提示：**

1. `0 <= A.length <= 10000`
2. `0 <= A[i] <= 10000 `



#### 第一版，自己写的，还可以

执行用时 :28 ms, 在所有 cpp 提交中击败了97.74%的用户

内存消耗 :10.3 MB, 在所有 cpp 提交中击败了81.20%的用户

```c++
    bool validMountainArray(vector<int>& A) {
    if (A.size() < 3) return false;
	if (A[1] <= A[0]) return false;
	int i = 1, j = A.size() - 1;
	while (i < j) {

		if (A[i] < A[i + 1] && A[j] < A[j - 1]) {
			i++;
			j--;
		}else	if (A[j] < A[j - 1]) {
			j--;
		}
		else if(A[i] < A[i + 1]) {
			i++;
		}
		else
			return false;

	}
	return i==j && j!=A.size()-1;//要预防数组最后一位为最大的情况，也就是j至少要等于A.size()-2
        
    }
```

<p id="数组形式的整数加法"></p>


### 989. 数组形式的整数加法   经典，很经典的题目，一步步渐进，直到最优解法

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/add-to-array-form-of-integer/)

对于非负整数 `X` 而言，*X* 的*数组形式*是每位数字按从左到右的顺序形成的数组。例如，如果 `X = 1231`，那么其数组形式为 `[1,2,3,1]`。

给定非负整数 `X` 的数组形式 `A`，返回整数 `X+K` 的数组形式。

 



**示例 1：**

```
输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
```

**解释 2：**

```
输入：A = [2,7,4], K = 181
输出：[4,5,5]
解释：274 + 181 = 455
```

**示例 3：**

```
输入：A = [2,1,5], K = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021
```

**示例 4：**

```
输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
输出：[1,0,0,0,0,0,0,0,0,0,0]
解释：9999999999 + 1 = 10000000000
```

 

**提示：**

1. `1 <= A.length <= 10000`
2. `0 <= A[i] <= 9`
3. `0 <= K <= 10000`
4. 如果 `A.length > 1`，那么 `A[0] != 0`



#### 第一版，自己写的,时间和空间都一般





执行用时 :180 ms, 在所有 cpp 提交中击败了54.11%的用户

内存消耗 :13.7 MB, 在所有 cpp 提交中击败了39.51%的用户



```c++
vector<int> addToArrayForm(vector<int>& A, int K) { //52134
	
	vector<int> temp,res;
	
	while (K != 0) {

		temp.push_back(K % 10);
		K = K / 10;
	}

	int i = A.size() - 1,j=0;
	for (; i>=0 && j<temp.size(); --i,++j) {
		res.push_back(temp[j] + A[i]);	
	}
	if (j == temp.size() && i>=0) {
		for (   ; i >= 0;--i) {		 
			res.push_back(A[i]);
		}
	}
	else if (i == -1 && j<temp.size())
	{
		for ( ; j<temp.size(); ++j) {
			res.push_back(temp[j]);
		}
	}

	for (i = 0; i < res.size(); ++i) {
		if (res[i] > 9) {
			res[i] = res[i] - 10;
			if (i != res.size() - 1) res[i + 1] = res[i + 1] + 1;
			else
				res.push_back(1);

		}

	}

	reverse(res.begin(), res.end());

	return res;
}

```





#### 第二版，反而越改越差

执行用时 :204 ms, 在所有 cpp 提交中击败了47.70%的用户

内存消耗 :13.8 MB, 在所有 cpp 提交中击败了39.51%的用户

```c++
  vector<int> addToArrayForm(vector<int>& A, int K) {
   vector<int> temp;	
	while (K != 0) {

		temp.push_back(K % 10);
		K = K / 10;
	}

	int i = A.size() - 1,j=0;
	for (; i>=0 && j<temp.size(); --i,++j) {
		temp[j]=temp[j] + A[i];	
	}



	if (j == temp.size() && i>=0) {
		for (   ; i >= 0;--i) {		 
			temp.push_back(A[i]);
		}
	}

	for (i = 0; i < temp.size(); ++i) {
		if (temp[i] > 9) {
			temp[i] = temp[i] - 10;
			if (i != temp.size() - 1) temp[i + 1] = temp[i + 1] + 1;
			else
				temp.push_back(1);

		}

	}
	reverse(temp.begin(), temp.end());

	return temp;
    }
```



#### 第三版，又改进了一下，快多了

执行用时 :136 ms, 在所有 cpp 提交中击败了95.79%的用户

内存消耗 :12.3 MB, 在所有 cpp 提交中击败了92.20%的用户

```c++
    vector<int> addToArrayForm(vector<int>& A, int K) {
	vector<int> temp;	
	while (K != 0) {

		temp.push_back(K % 10);
		K = K / 10;
	}

	reverse(A.begin(), A.end());
	size_t i=0;
	for ( ; i<A.size() && i<temp.size();++i) {
		A[i]=temp[i] + A[i];
		if (A[i] > 9 && i != A.size() - 1) {
			A[i] = A[i] - 10;
			A[i+ 1] = A[i + 1] + 1;
		} 
		else if (A[i] > 9 && i == A.size() - 1) {
			A[i] = A[i] - 10;
			A.push_back(1);
		}
	}


	if (i == temp.size()) {
	for (   ; i <A.size();++i) {		 
		if (A[i] > 9 && i != A.size() - 1) {
			A[i] = A[i] - 10;
			A[i + 1] = A[i + 1] + 1;
		}
		if ( A[i] > 9 && i== A.size() - 1) {
			A[i] = A[i] - 10;
			A.push_back(1);
		}
		}
	}
	else if (i == A.size())
	{
		for (; i < temp.size(); ++i) {
			A.push_back(temp[i]);
		}
	}
	reverse(A.begin(), A.end());
	return A;
    }
```

<p id="复写零"></p>


### 1089. 复写零

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/duplicate-zeros/)

给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

注意：请不要在超过该数组长度的位置写入元素。

要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。

 

示例 1：

输入：[1,0,2,3,0,4,5,0]
输出：null
解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]
示例 2：

输入：[1,2,3]
输出：null
解释：调用函数后，输入的数组将被修改为：[1,2,3]


提示：

1 <= arr.length <= 10000
0 <= arr[i] <= 9

#### 第一步 比较耗时

```cpp
 void duplicateZeros(vector<int>& arr) {
     for (int i=0; i<arr.size(); i++){
            if (arr[i] == 0){
                arr.insert(arr.begin()+i, 0);
                arr.pop_back();//这步很关键
                i++;
            }
        }
    }
```

执行用时 :48 ms, 在所有 C++ 提交中击败了56.70%的用户

内存消耗 :9.5 MB, 在所有 C++ 提交中击败了100.00%的用户



#### 第二种 借助栈，减少时间

```cpp
void duplicateZeros(vector<int>& arr) {
	stack<int> st;
	int temp = 0;
	for (int i = 0; i < arr.size(); ++i) {
		st.push(arr[i]);
		++temp;
		if (arr[i] == 0) {
			if (temp == arr.size())
				break;
			++temp;
			st.push(0);
		}
		if (temp == arr.size())
			break;
	}
	arr.clear();
	while (!st.empty()) {
		arr.push_back(st.top());
		st.pop();
	}
	reverse(arr.begin(), arr.end());
}
```

执行用时 :28 ms, 在所有 C++ 提交中击败了90.69%的用户

内存消耗 :9.5 MB, 在所有 C++ 提交中击败了100.00%的用户

<p id="等价多米诺骨牌对的数量"></p>


### 1128. 等价多米诺骨牌对的数量  好题，真的很好的题

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs/)

给你一个由一些多米诺骨牌组成的列表 `dominoes`。

如果其中某一张多米诺骨牌可以通过旋转 `0` 度或 `180` 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。

形式上，`dominoes[i] = [a, b]` 和 `dominoes[j] = [c, d]` 等价的前提是 `a==c` 且 `b==d`，或是 `a==d` 且 `b==c`。

在 `0 <= i < j < dominoes.length` 的前提下，找出满足 `dominoes[i]` 和 `dominoes[j]` 等价的骨牌对 `(i, j)` 的数量。

 

**示例：**

```
输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
输出：1
```

 

**提示：**

- `1 <= dominoes.length <= 40000`
- `1 <= dominoes[i][j] <= 9`





#### 第一版，直接遍历，超出时间限制

```c++
    int numEquivDominoPairs(vector<vector<int>>& dominoes) {
    int cut = 0;
	for (int i = 0; i < dominoes.size(); ++i) {
		for (int j = i + 1; j < dominoes.size(); ++j) {
			if ((dominoes[i][0] == dominoes[j][0] && dominoes[i][1] == dominoes[j][1]) || (dominoes[i][0] == dominoes[j][1] && dominoes[i][1] == dominoes[j][0]))
				cut++;
		}
	}

	return cut;
        
    }
```





#### 第二版，自己定义unordered_map的键值，为其他类型

执行用时 :52 ms, 在所有 cpp 提交中击败了87.56%的用户

内存消耗 :21 MB, 在所有 cpp 提交中击败了100.00%的用户



实例：https://blog.csdn.net/zhangpiu/article/details/49837387?utm_source=blogxgwz9



```c++
struct KEY
{
	int minNum;
	int maxNum;

	KEY(int f, int s) : minNum(f), maxNum(s) {}
};

struct HashFunc
{
	std::size_t operator()(const KEY& key) const
	{
		using std::size_t;
		using std::hash;

		return ((hash<int>()(key.minNum)
			^ (hash<int>()(key.maxNum) << 1)) >> 1);
	}
};

struct EqualKey
{
	bool operator () (const KEY& lhs, const KEY& rhs) const
	{
		return lhs.minNum == rhs.minNum
			&& lhs.maxNum == rhs.maxNum;
	}
};

int numEquivDominoPairs(vector<vector<int>>& dominoes) {

	unordered_map<KEY,int,HashFunc,EqualKey> unmp;

	int cut = 0;
	int maxNum=0, minNum=0;
	for (auto &n:dominoes) {
		minNum = min(n[0], n[1]);
		maxNum = max(n[0], n[1]);

		if (unmp.find({ minNum,maxNum }) != unmp.end()) {
			cut += unmp[{ minNum, maxNum }];
			unmp[{minNum, maxNum}]++;
		}
		else
			unmp[{minNum,maxNum}]++;
	}

	return cut;
}
```



#### 第三版，参考别人的，会更快一点了



执行用时 :48 ms, 在所有 cpp 提交中击败了95.27%的用户

内存消耗 :21.1 MB, 在所有 cpp 提交中击败了100.00%的用户



```c++

int numEquivDominoPairs(vector<vector<int>>& dominoes) {
	unordered_map<int, int> ret;
	int cut = 0,minNum=0,maxNum=0;

	for (auto& a : dominoes) {
		maxNum = max(a[0], a[1]);
		minNum = min(a[0], a[1]);
		if (ret.find(minNum * 10 + maxNum) != ret.end()) {
			cut += ret[minNum * 10 + maxNum];
		}
		ret[minNum * 10 + maxNum] += 1;

	}

	return cut;
}
```





#### 第四版，别人的写法，化为数学公式来做的

执行用时 :44 ms, 在所有 cpp 提交中击败了97.76%的用户

内存消耗 :21.1 MB, 在所有 cpp 提交中击败了100.00%的用户



```c++
int numEquivDominoPairs(vector<vector<int>>& dominoes) {
        map<int, int> ret;
        int count = 0;
        
        for(int i  = 0; i < dominoes.size(); ++i)
        {
            int k = 0;
            int m = dominoes[i][0];
            int n = dominoes[i][1];
            (m > n) ? k = n * 10 + m : k = m * 10 + n;//这种表达式也是可以的
            ret[k] += 1;
        }
        
        for(auto iter = ret.begin(); iter != ret.end(); ++iter)
        {
            count += iter->second * (iter->second - 1) / 2;
        }

        return count;
    }
```



#### 第五版，结合一下，最快的

执行用时 :40 ms, 在所有 cpp 提交中击败了99.00%的用户

内存消耗 :21 MB, 在所有 cpp 提交中击败了100.00%的用户



```c++
int numEquivDominoPairs(vector<vector<int>>& dominoes) {

	unordered_map<int, int> ret;
	int k = 0, m = 0, n = 0;
	for (int i = 0; i < dominoes.size(); ++i)
	{
		m = dominoes[i][0];
		n = dominoes[i][1];
		(m > n) ? k = n * 10 + m : k = m * 10 + n;//这种表达式也是可以的
		ret[k] += 1;
	}
	int count = 0;
	for (auto &iter:ret)
	{
		count += iter.second * (iter.second - 1) / 2;
	}

	return count;
}
```











![img](https://assets.leetcode-cn.com/aliyun-lc-upload/users/forthespada/avatar_1568598096.png)





















