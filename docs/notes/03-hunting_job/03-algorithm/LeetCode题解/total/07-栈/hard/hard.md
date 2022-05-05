<p id="柱状图中最大的矩形"></p>



### 84. 柱状图中最大的矩形 单调栈，很经典的题目

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)

给定 *n* 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

 

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram.png)

以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 `[2,1,5,6,2,3]`。

 

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram_area.png)

图中阴影部分为所能勾勒出的最大矩形面积，其面积为 `10` 个单位。

 

**示例:**

```
输入: [2,1,5,6,2,3]
输出: 10
```





#### 第一版，看的解答，单调栈

解析：

https://blog.csdn.net/Zolewit/article/details/88863970

执行用时 :16 ms, 在所有 cpp 提交中击败了78.93%的用户

内存消耗 :10.4 MB, 在所有 cpp 提交中击败了52.48%的用户



```c++

int largestRectangleArea(vector<int>& heights) {
	stack<int> st;
	heights.push_back(0);
	int res = 0,temp;
	for (int i = 0; i < heights.size(); ++i) {
		while (!st.empty() && heights[st.top()] >= heights[i]) {
			cout << st.top() << " 出栈,大小为" << heights[st.top()] << endl;;
			temp = st.top();
			st.pop();
			res = max(res, heights[temp] * (st.empty() ? i : (i - st.top() - 1)));
			cout << "maxS:" << res << endl;
		}
		st.push(i);
		cout << i << " 进栈，大小为" << heights[i] << endl;
	}
	return res;


```



0 进栈，大小为2
0 出栈,大小为2
maxS:2
1 进栈，大小为1
2 进栈，大小为5
3 进栈，大小为6
3 出栈,大小为6
maxS:6
2 出栈,大小为5
maxS:10
4 进栈，大小为2
5 进栈，大小为3
5 出栈,大小为3
maxS:10
4 出栈,大小为2
maxS:10
1 出栈,大小为1
maxS:10
6 进栈，大小为0
10请按任意键继续. . .





#### 二刷：1、暴力法超时了

~~~cpp
    int largestRectangleArea(vector<int>& heights) {
        int len=heights.size();
        if(len==0) return 0;
        if(len==1) return heights[0];
        int maxArea = -1;
        for(int i=0;i<len;++i){

            int curHeight = heights[i];
            for(int j=i;j<len;++j){

                if(curHeight>heights[j]) curHeight = heights[j];
                int area = curHeight*(j-i+1);
                if(maxArea<area) maxArea = area;

            }

        }
        return maxArea;
    }
~~~

#### 二刷2、这种做法真的超级好，要善于利用以前的结果

##### 2.1原生版暴力法超时

~~~cpp
 int largestRectangleArea(vector<int>& heights) {
	int len = heights.size();
	if (len == 0) return 0;
	if (len == 1) return heights[0];
	int maxArea = -1;
	vector<int> left(len, 0), right(len, 0);//每个节点左右两边能到达不小于自己高度的最大距离
	for (int i = 0; i < len; ++i) {

		int bound = i;
		while (bound - 1 >= 0 && heights[bound - 1] >= heights[i]) bound--;
		left[i] = bound;

		bound = i;
		while (bound + 1 < len && heights[bound + 1] >= heights[i]) bound++;
		right[i] = bound;
	}

	for (int i = 0; i < len; ++i) {
		maxArea = max(maxArea, (right[i] - left[i] + 1) * heights[i]);
		//cout << (right[i] - left[i] + 1) * heights[i]<<" "<<maxArea << endl;
	}
	return maxArea;
    }
~~~



##### 2.2改良版

执行用时：4 ms, 在所有 C++ 提交中击败了99.99%的用户

内存消耗：8.1 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
int largestRectangleArea(vector<int>& heights) {
	int len = heights.size();
	if (len == 0) return 0;
	if (len == 1) return heights[0];
	int maxArea = -1;
	vector<int> left(len, 0), right(len, 0);//每个节点左右两边能到达不小于自己高度的最大距离
	for (int i = 0; i < len; ++i) {

		int bound = i;
		while (bound > 0 && heights[bound - 1] >= heights[i]) bound=left[bound-1];//，如果说bound -1 的值已经很小了，直接用就行，就不用再自己慢慢遍历了，左边最小就是0了，右边最大也就是len-1
		//要善于利用已经得到的结果
		left[i] = bound;
	}

	for (int i = len-1; i >=0 ; --i) {
		int bound = i;
		while (bound < len - 1 && heights[bound + 1] >= heights[i]) bound = right[bound + 1];
		right[i] = bound;
	}
	for (int i = 0; i < len; ++i) {
		maxArea = max(maxArea, (right[i] - left[i] + 1) * heights[i]);
	}
	return maxArea;
}
~~~





#### 二刷：

~~~cpp
    int largestRectangleArea(vector<int>& heights) {
        int len = heights.size();
        if(len == 0) return 0;
        if(len == 1) return heights[0];
        int maxArea = -1, bound = 0;
        vector<int> left(len,0), right(len,0);
        for(int i = 0; i <= len-1; ++i){
            bound = i;
            while(bound >=1 && heights[bound - 1] >= heights[i]) bound = left[bound - 1];
            left[i] = bound;

        }

        for(int i = len - 1; i >= 0; --i){
            bound = i;
            while(bound <len - 1 && heights[bound + 1] >=heights[i]) bound = right[bound + 1];
            right[i] = bound;

        }

        for(int i = 0; i < len; ++i){
            maxArea = max(maxArea,(right[i] - left[i] +1 ) * heights[i]);
        }

        return maxArea;
    }
~~~

<p id="最大矩形"></p>



### 85. 最大矩形

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/maximal-rectangle/)

给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

**示例:**

```
输入:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出: 6
```

#### 1、是84题的进阶版

执行用时：20 ms, 在所有 C++ 提交中击败了97.63%的用户

内存消耗：9.5 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
int largestRectangleArea(vector<int>& heights) {
	int len = heights.size();
	if (len == 0) return 0;
	if (len == 1) return heights[0];
	int maxArea = -1;
	vector<int> left(len, 0), right(len, 0);//每个节点左右两边能到达不小于自己高度的最大距离
	for (int i = 0; i < len; ++i) {
		int bound = i;
		while (bound > 0 && heights[bound - 1] >= heights[i]) bound=left[bound-1];//，如果说bound -1 的值已经很小了，直接用就行，就不用再自己慢慢遍历了，左边最小就是0了，右边最大也就是len-1
		//要善于利用已经得到的结果
		left[i] = bound;
	}
	for (int i = len-1; i >=0 ; --i) {
		int bound = i;
		while (bound < len - 1 && heights[bound + 1] >= heights[i]) bound = right[bound + 1];
		right[i] = bound;
	}
	for (int i = 0; i < len; ++i) {
		maxArea = max(maxArea, (right[i] - left[i] + 1) * heights[i]);
	}
	return maxArea;
}

public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        if ( matrix.size()==0 || matrix[0].size()==0 ) return 0;
        int row = matrix.size(), col = matrix[0].size();
        int maxArea = -1;
        vector<int> heights(col,0);//这里是列，而不是行
        for(int i=0; i<row; ++i){
            for(int j=0;j<col;++j){
                if(matrix[i][j]=='1') 
                    heights[j]=heights[j]+1;                
                else
                    heights[j]=0;//这里也是异曲同工之妙，如果遇到0，则这条列上的值就是0了
            }
            maxArea = max(maxArea,largestRectangleArea(heights));
            // cout<<i<<" "<<maxArea<<endl;
        }
        return maxArea;
    }
~~~

<p id="去除重复字母"></p>



### 316. 去除重复字母  真的没看懂，不过很经典

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/remove-duplicate-letters/)

给定一个仅包含小写字母的字符串，去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

示例 1:

输入: "bcabc"
输出: "abc"
示例 2:

输入: "cbacdcbc"
输出: "acdb"





#### 第一版，用栈写的，改别人的

执行用时 :0 ms, 在所有 cpp 提交中击败了100.00%的用户

内存消耗 :9 MB, 在所有 cpp 提交中击败了13.28%的用户



```c++
string removeDuplicateLetters(string s) {

	unordered_map<char, int> mp;
	unordered_map<char, int> in_st;
	for (int i = 0; i < s.size(); ++i)
		mp[s[i]] = i;//记录某个字符出现的最后位置
	stack<char> st;//记录结果的栈
	for (int i = 0; i < s.size(); ++i) {
		if (in_st[s[i]])
		{
			//cout << "栈中已有元素 " << s[i] << " 个数为 " << in_st[s[i]] << endl;
			continue;//栈中有当前遍历的字符}
		}

		while (st.size() && s[i] < st.top() && mp[st.top()] > i) {
			
			//cout << "循环s[i] " << s[i] << "  st.back()  " << st.top() << "  mp[st.back()]  " << mp[st.top()] << endl;
			//栈顶元素会在之后的位置出现，且要求字典序最小
			--in_st[st.top()];
			//cout << "出栈 " << st.top() << " in_st[s[i]]  " << in_st[st.top()] << endl;
			st.pop();
			//出栈并抹除记录
		}

		st.push(s[i]);
		++in_st[s[i]];
		//cout << "进栈 " << s[i] << " in_st[s[i]] " << in_st[s[i]] << endl;
		//压栈，并记录出现过
	}
	string res;
	/*for (auto& i : st)res += i;*/
	while (!st.empty()) {
		res += st.top();
		st.pop();
	}
	reverse(res.begin(), res.end());
	return res;

}
```





#### 第二版，用vector来写，也是原作者的写法

执行用时 :4 ms, 在所有 cpp 提交中击败了89.12%的用户

内存消耗 :9 MB, 在所有 cpp 提交中击败了16.41%的用户



**用栈还是快一些**

```c++
string removeDuplicateLetters(string s) {

	unordered_map<char, int> mp;
	unordered_map<char, int> in_st;
	for (int i = 0; i < s.size(); ++i)
		mp[s[i]] = i;//记录某个字符出现的最后位置
	vector<char> st;//记录结果的栈
	for (int i = 0; i < s.size(); ++i) {
		if (in_st[s[i]])
		{
			//cout << "栈中已有元素 " << s[i] << " 个数为 " << in_st[s[i]] << endl;
			continue;//栈中有当前遍历的字符}
		}

		while (st.size() && s[i] < st.back() && mp[st.back()] > i) {
			
			//cout << "循环s[i] " << s[i] << "  st.back()  " << st.top() << "  mp[st.back()]  " << mp[st.top()] << endl;
			//栈顶元素会在之后的位置出现，且要求字典序最小
			--in_st[st.back()];
			//cout << "出栈 " << st.top() << " in_st[s[i]]  " << in_st[st.top()] << endl;
			st.pop_back();
			//出栈并抹除记录
		}

		st.push_back(s[i]);
		++in_st[s[i]];
		//cout << "进栈 " << s[i] << " in_st[s[i]] " << in_st[s[i]] << endl;
		//压栈，并记录出现过
	}
	string res;
	for (auto& i : st)
		res += i;

	return res;

}
```

