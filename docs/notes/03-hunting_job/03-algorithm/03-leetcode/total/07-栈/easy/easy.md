<p id="最小栈"></p>


### 155. 最小栈

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/min-stack/)

设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

- push(x) -- 将元素 x 推入栈中。
- pop() -- 删除栈顶的元素。
- top() -- 获取栈顶元素。
- getMin() -- 检索栈中的最小元素。

**示例:**

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```



#### 第一版，双栈

执行用时 :64 ms, 在所有 C++ 提交中击败了37.18%的用户

内存消耗 :16.8 MB, 在所有 C++ 提交中击败了77.33%的用户

```c++
class MinStack {
public:
	/** Initialize your data structure here. */
	MinStack() {

	}

	/** Push element x to the back of queue. */
	void push(int x) {

		stVal.push(x);
		if (stMin.empty() || x < stMin.top()) //双栈，同步保存当前最小值，如果是第一个x或者小于当前最小值，就把新的最小值存储进来
			stMin.push(x);
		else
			stMin.push(stMin.top());
	}

	/** Removes the element from in front of queue and returns that element. */
	void pop() {

		stMin.pop();
		stVal.pop();
	}

	/** Get the front element. */
	int top() {

		return stVal.top();
	}

	/** Returns whether the queue is empty. */
	int getMin() {
		return stMin.top();
	}

private:
	stack<int> stVal, stMin;
};
```





#### 第二版 ，又一个思路，一次push两个进去

每次push时，第一次push进x，第二次push当前的最小值

执行用时 :64 ms, 在所有 C++ 提交中击败了37.18%的用户

内存消耗 :16.7 MB, 在所有 C++ 提交中击败了93.90%的用户

```C++
class MinStack {
public:
	/** Initialize your data structure here. */
	MinStack() {
	}

	/** Push element x to the back of queue. */
	void push(int x) {
		if (st.empty()) {
			numMin = x;
			st.push(x);
			st.push(x);
		}
		else
		{
			numMin = min(numMin, x);
			st.push(x);
			st.push(numMin);
		}

	}

	/** Removes the element from in front of queue and returns that element. */
	void pop() {
		st.pop();
		st.pop();
		if(!st.empty()) //注意可能会有st为空的情况，直接写numMin=st.top()会报错，要注意更新最小值
			numMin = st.top();
	}

	/** Get the front element. */
	int top() {
		int numMinTemp = st.top();//先保存最后的小的值
		st.pop();
		numTemp = st.top();
		st.push(numMinTemp);
		return numTemp; //不能返回局部变量的值以及地址
	}

	/** Returns whether the queue is empty. */
	int getMin() {
		return st.top();
	}

private:
	stack<int> st = {};
	int numMin, numTemp;
};
```



几个教训：

1、函数返回时，不能返回局部变量的值以及地址

2、注意边界检查，以及最小值的更新



#### 第三版 第二版的变形，但是快很多了



执行用时 :36 ms, 在所有 C++ 提交中击败了90.66%的用户

内存消耗 :17 MB, 在所有 C++ 提交中击败了36.11%的用户

**先输入最小值，再push当前值，这样get_top(),会快一点**

```c++
class MinStack {
public:
	/** Initialize your data structure here. */
	MinStack() {

	}

	/** Push element x to the back of queue. */
	void push(int x) {
		if (st.empty()) {
			numMin = x;
			st.push(x);
			st.push(x);
		}
		else
		{

			numMin = min(numMin, x);
			st.push(numMin);
			st.push(x);
		}

	}

	/** Removes the element from in front of queue and returns that element. */
	void pop() {
		st.pop();
		st.pop();
		if (!st.empty())
		{
			int numTemp = st.top();
			st.pop();
			numMin = st.top();
			st.push(numTemp);
		}
	}

	/** Get the front element. */
	int top() {

		return st.top();
	}

	/** Returns whether the queue is empty. */
	int getMin() {
		int numTempT = st.top();
		st.pop();
		numTemp = st.top();
		st.push(numTempT);
		return numTemp;
	}

private:
	stack<int> st = {};
	int numMin, numTemp;
};
```

<p id="用队列实现栈"></p>


### 225. 用队列实现栈

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/implement-stack-using-queues/)

使用队列实现栈的下列操作：

push(x) -- 元素 x 入栈
pop() -- 移除栈顶元素
top() -- 获取栈顶元素
empty() -- 返回栈是否为空
注意:

你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。





#### 第一版，不难

执行用时 :4 ms, 在所有 C++ 提交中击败了73.27%的用户

内存消耗 :9 MB, 在所有 C++ 提交中击败了23.13%的用户

```c++
class MyStack {
public:
	/** Initialize your data structure here. */
	MyStack() {

	}

	/** Push element x onto stack. */
	void push(int x) {
		in.push(x);
	}

	/** Removes the element on top of the stack and returns that element. */
	int pop() {
		while (in.size()>1) {
			out.push(in.front());
			in.pop();
		}
        int i=in.front();
		in.pop();

		while (!out.empty())
		{
			in.push(out.front());
			out.pop();
		}
        return i;

	}

	/** Get the top element. */
	int top() {
		return in.back();
	}

	/** Returns whether the stack is empty. */
	bool empty() {
		return in.empty() && out.empty();

	}

private:
	queue<int> in;
	queue<int> out;
};
```

<p id="棒球比赛"></p>


### 682. 棒球比赛

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/baseball-game/)

你现在是棒球比赛记录员。
给定一个字符串列表，每个字符串可以是以下四种类型之一：
1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。

2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
你需要返回你在所有回合中得分的总和。

示例 1:

输入: ["5","2","C","D","+"]
输出: 30
解释: 
第1轮：你可以得到5分。总和是：5。
第2轮：你可以得到2分。总和是：7。
操作1：第2轮的数据无效。总和是：5。
第3轮：你可以得到10分（第2轮的数据已被删除）。总数是：15。
第4轮：你可以得到5 + 10 = 15分。总数是：30。
示例 2:

输入: ["5","-2","4","C","D","9","+","+"]
输出: 27
解释: 
第1轮：你可以得到5分。总和是：5。
第2轮：你可以得到-2分。总数是：3。
第3轮：你可以得到4分。总和是：7。
操作1：第3轮的数据无效。总数是：3。
第4轮：你可以得到-4分（第三轮的数据已被删除）。总和是：-1。
第5轮：你可以得到9分。总数是：8。
第6轮：你可以得到-4 + 9 = 5分。总数是13。
第7轮：你可以得到9 + 5 = 14分。总数是27。
注意：

输入列表的大小将介于1和1000之间。
列表中的每个整数都将介于-30000和30000之间。



#### 第一版 自己写的

执行用时 :8 ms, 在所有 cpp 提交中击败了83.02%的用户

内存消耗 :9.3 MB, 在所有 cpp 提交中击败了85.61%的用户



```c++
int calPoints(vector<string>& ops) {
    stack<int> score;
	int doubleScore,temp;
	for (auto it = ops.begin(); it != ops.end(); ++it) {

		if (*it == "C" && !score.empty()) {
			score.pop();
		}

		else if (*it == "D" && !score.empty()) { 
			score.push(score.top()*2); }
		else if (*it == "+") {
			doubleScore = score.top();
			score.pop();
			temp = score.top();
			score.push(doubleScore);
			score.push(doubleScore + temp);
		}
		else {
			doubleScore = 0;
			temp = 1;
			for (auto a : *it) {
				if(a=='-') temp = -1; //注意负数的情况
				else
					doubleScore = doubleScore * 10 + a - '0';
				
			}
			score.push(doubleScore*temp);
		}

	}
	doubleScore = 0;
	while (!score.empty()) {
		doubleScore += score.top();
		score.pop();
	}

	return doubleScore;
        
    }
```

<p id="比较含退格的字符串"></p>


### 844. 比较含退格的字符串

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/backspace-string-compare/)

给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

 

示例 1：

输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
示例 2：

输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
示例 3：

输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
示例 4：

输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。


提示：

1 <= S.length <= 200
1 <= T.length <= 200
S 和 T 只含有小写字母以及字符 '#'。



第一版，学1047题的string作为栈的方法

执行用时 :4 ms, 在所有 C++ 提交中击败了83.55%的用户

内存消耗 :8.5 MB, 在所有 C++ 提交中击败了82.47%的用户

```c++
bool backspaceCompare(string S, string T) {
	string sTemp = "", tTemp = "";
	for (auto s : S) {
		if (s == '#') {
			if (sTemp.size()>0)//注意判断条件
				sTemp.pop_back();
			else
				continue;
		}
		else
			sTemp += s;
	}
	for (auto t : T) {
		if (t == '#') {
			if (tTemp.size()>0)
				tTemp.pop_back();
			else
				continue;
		}
		else
			tTemp += t;
	}
	return sTemp == tTemp;
}
```

<p id="删除字符串中的所有相邻重复项"></p>


### 1047. 删除字符串中的所有相邻重复项

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/)

给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

 

示例：

输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。


提示：

1 <= S.length <= 20000
S 仅由小写英文字母组成。



#### 第一版，自己写的

执行用时 :32 ms, 在所有 C++ 提交中击败了63.22%的用户

内存消耗 :12.1 MB, 在所有 C++ 提交中击败了100.00%的用户

```c++
string removeDuplicates(string S) {
	if (S.size() <= 1) return S;
	stack<char> result;
	for (auto a : S) {
		if (result.empty()) {
			result.push(a);
		}
		else{
			if (a == result.top())
				result.pop();
			else
				result.push(a);
		}
	}
	S = "";
	while (!result.empty()) {
		S += result.top();
		result.pop();
	}
	reverse(S.begin(), S.end());//注意要反转才是正确结果
	return S;

}
```





#### 第二版，使用另一个string作为一个栈

执行用时 :12 ms, 在所有 C++ 提交中击败了99.59%的用户

内存消耗 :12.4 MB, 在所有 C++ 提交中击败了100.00%的用户



```c++
string removeDuplicates(string S) {
	 string res = "";
        for(char c: S)
            if(res.size() && res.back() == c)
                res.pop_back();
            else
                res += c;
        return res;
}
```






