<p id="简化路径"></p>

### 71. 简化路径

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/simplify-path/)

以 Unix 风格给出一个文件的绝对路径，你需要简化它。或者换句话说，将其转换为规范路径。

在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。更多信息请参阅：Linux / Unix中的绝对路径 vs 相对路径

请注意，返回的规范路径必须始终以斜杠 / 开头，并且两个目录名之间必须只有一个斜杠 /。最后一个目录名（如果存在）不能以 / 结尾。此外，规范路径必须是表示绝对路径的最短字符串。

 

示例 1：

输入："/home/"
输出："/home"
解释：注意，最后一个目录名后面没有斜杠。
示例 2：

输入："/../"
输出："/"
解释：从根目录向上一级是不可行的，因为根是你可以到达的最高级。
示例 3：

输入："/home//foo/"
输出："/home/foo"
解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。
示例 4：

输入："/a/./b/../../c/"
输出："/c"
示例 5：

输入："/a/../../b/../c//.//"
输出："/c"
示例 6：

输入："/a//b////c/d//././/.."
输出："/a/b/c"





#### 第一版，看别人的，用vector比栈方便

执行用时 :12 ms, 在所有 cpp 提交中击败了70.22%的用户

内存消耗 :10 MB, 在所有 cpp 提交中击败了90.52%的用户



```c++
 string simplifyPath(string path) {
  	string result;
	vector<string> que;
	for (auto i = 0; i < path.size(); ++i)//这个 i++ 是跳过 /号的
	{
		string temp="";
		while (path[i] != '/' && i < path.size())//遇到 / 则跳出，然后去判断当前temp是什么情况
		{
			temp += path[i++];
		}
		if (temp == ".")
			continue;
		else if (temp == "..")
		{
			if (!que.empty()) //如果为空，已经跳不出去了,直接continue就可以了,不为空就把当前末尾pop出去
				que.pop_back();
			else
				continue;
		}
		else if (temp.size() != 0)
			que.push_back(temp);
	}
	for (int i = 0; i < que.size(); i++)
	{
		result += '/';
		result.append(que[i]);
	}
	return result.size() == 0 ? "/" : result;
    }
```





#### 第二版，稍微改进一点

执行用时 :8 ms, 在所有 cpp 提交中击败了91.91%的用户

内存消耗 :9.8 MB, 在所有 cpp 提交中击败了94.78%的用户



```c++
string simplifyPath(string path) {
	string result;
	vector<string> que;
	for (unsigned i = 0; i < path.size(); ++i)//这个 i++ 是跳过 /号的
	{
		string temp="";
		while (path[i] != '/' && i < path.size())//遇到 / 则跳出，然后去判断当前temp是什么情况
		{
			temp += path[i++];
		}
		if (temp == ".")
			continue;
		else if (temp == "..")
		{
			if (!que.empty()) //如果为空，已经跳不出去了,直接continue就可以了,不为空就把当前末尾pop出去
				que.pop_back();
			else
				continue;
		}
		else if (temp.size() != 0)
			que.push_back(temp);
	}
	for (unsigned i = 0; i < que.size(); i++)
	{
		result += '/';
		result.append(que[i]);
	}

	if (result.size() == 0) return "/";
	else return result;

}
```



<p id="字符串解码"></p>



### 394. 字符串解码

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/decode-string/)

给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例:

s = "3[a]2[bc]", 返回 "aaabcbc".
s = "3[a2[c]]", 返回 "accaccacc".
s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".



#### 第一版，自己写的

执行用时 :8 ms, 在所有 C++ 提交中击败了26.58%的用户

内存消耗 :8.9 MB, 在所有 C++ 提交中击败了57.94%的用户

```c++
string decodeString(string s) {

	string res,temp,countStr;
	int count;

	for (auto i : s) {
		count = 0;
		temp = "";
		countStr = "";
		if (i != ']')
			res.push_back(i);
		else {
			while (res.back() != '[')//直到遇到了[
			{
				temp += res.back();
				res.pop_back();
			}
			res.pop_back();//将 [ 推出去
			
			while (!res.empty() && res.back() >= '0' && res.back() <= '9') {
				countStr += res.back();
				res.pop_back();			
			}
			reverse(countStr.begin(), countStr.end());
			count = stod(countStr, 0);
			reverse(temp.begin(),temp.end());

			for (int j = 0; j < count; ++j) res += temp;
			
		}

	}
	return res;
}
```



<p id="移掉位数字"></p>



### 402. 移掉K位数字 确实不会

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/remove-k-digits/)

给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

注意:

num 的长度小于 10002 且 ≥ k。
num 不会包含任何前导零。
示例 1 :

输入: num = "1432219", k = 3
输出: "1219"
解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
示例 2 :

输入: num = "10200", k = 1
输出: "200"
解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
示例 3 :

输入: num = "10", k = 2
输出: "0"
解释: 从原数字移除所有的数字，剩余为空就是0。



<p id="函数的独占时间"></p>



### 636. 函数的独占时间

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/exclusive-time-of-functions/)

给出一个非抢占单线程CPU的 n 个函数运行日志，找到函数的独占时间。

每个函数都有一个唯一的 Id，从 0 到 n-1，函数可能会递归调用或者被其他函数调用。

日志是具有以下格式的字符串：function_id：start_or_end：timestamp。例如："0:start:0" 表示函数 0 从 0 时刻开始运行。"0:end:0" 表示函数 0 在 0 时刻结束。

函数的独占时间定义是在该方法中花费的时间，调用其他函数花费的时间不算该函数的独占时间。你需要根据函数的 Id 有序地返回每个函数的独占时间。

示例 1:

输入:
n = 2
logs = 
["0:start:0",
 "1:start:2",
 "1:end:5",
 "0:end:6"]
输出:[3, 4]
说明：
函数 0 在时刻 0 开始，在执行了  2个时间单位结束于时刻 1。
现在函数 0 调用函数 1，函数 1 在时刻 2 开始，执行 4 个时间单位后结束于时刻 5。
函数 0 再次在时刻 6 开始执行，并在时刻 6 结束运行，从而执行了 1 个时间单位。
所以函数 0 总共的执行了 2 +1 =3 个时间单位，函数 1 总共执行了 4 个时间单位。
说明：

输入的日志会根据时间戳排序，而不是根据日志Id排序。
你的输出会根据函数Id排序，也就意味着你的输出数组中序号为 0 的元素相当于函数 0 的执行时间。
两个函数不会在同时开始或结束。
函数允许被递归调用，直到运行结束。
1 <= n <= 100





#### 第一版，看了别人的思路，真的厉害



执行用时 :24 ms, 在所有 cpp 提交中击败了99.12%的用户

内存消耗 :11.2 MB, 在所有 cpp 提交中击败了100.00%的用户



```c++
 vector<int> exclusiveTime(int n, vector<string>& logs) {
    vector<int> result(n, 0);
		stack<pair<int, int>> myStack;//辅助栈，<first, second>分别代表<函数id，起始时间>
		//扫描所有log
		for (auto& log : logs) {
			string operation = "";//id的操作，“start”或者“end”
			int funcId = 0, timeStamp = 0, index = 0, logSize = log.size();//log的函数id、操作时间戳
			//第一步：读取函数id
			while (log[index] != ':') {
				funcId = funcId * 10 + log[index++] - '0';
			}
			index += 1;//跳过 : 
			//第二步：读取操作类型
			while (log[index] != ':') {
				operation += log[index++];
			}
			index += 1; //再次跳过 :
			//第三步：读取时间戳
			while (index < logSize) {
				timeStamp = timeStamp * 10 + log[index++] - '0';
			}
			//第四步：根据操作进行不同的处理
			if (operation == "start") {
				//如果是函数start，直接放入stack中
				myStack.push({ funcId, timeStamp });
			}
			else {//函数end的情况
				int runTime = timeStamp - myStack.top().second + 1;//计算栈顶id运行时间
				myStack.pop();
				result[funcId] += runTime;//加入到总时间中
				//如果此时栈还不为空，则说明当前栈顶函数里面嵌套了当前函数id，需要减去当前函数运行的时间
				if (!myStack.empty()) {
					result[myStack.top().first] -= runTime;
				}
			}
		}
		return result; 
    }
```



#### 第二版，自己复现一遍

执行用时 :28 ms, 在所有 cpp 提交中击败了93.86%的用户

内存消耗 :11.1 MB, 在所有 cpp 提交中击败了100.00%的用户



```c++
vector<int> exclusiveTime(int n, vector<string>& logs) {//自己复现一编
	vector<int> res(n,0);
	stack<pair<int, int>>st;//函数ID和起始时间的映射

	for (auto& log : logs) {
				
		int funID = 0, startTime = 0, logSize=log.size(), index=0;
		string opera= "";
		while (log[index] != ':') {//取的函数ID
			funID = funID * 10 + log[index++] - '0';
		}
		index++;//跳过 : 号
		//cout << "funID" << funID << endl;
		while (log[index] != ':') {//取的开始还是结束符号
			opera +=  log[index++];
		}
		//cout << "opera" << opera << endl;
		index++;//再次跳过 :号

		while (index<logSize) {//取的操作时间
			startTime = startTime * 10 + log[index++] - '0';
		}
		//cout << "startTime" << startTime << endl;
		if (opera == "start") {//存入开始时间
			st.push({ funID,startTime });
		}
		else {
			int totalRunTime = startTime - st.top().second + 1;
			//cout << "totaltime " << totalRunTime << endl;
			res[funID] += totalRunTime;//以0为中介，属于自己的就加上则减
			st.pop();
			if (!st.empty()) {
				res[st.top().first] -= totalRunTime;//不属于自己的就减去
			}
		}

	}
	return res;
	
}
```







#### 第三种，别的方法，学到了,但是执行时间较久

学到了istringstream的法子



执行用时 :76 ms, 在所有 cpp 提交中击败了22.81%的用户

内存消耗 :11.1 MB, 在所有 cpp 提交中击败了100.00%的用户

```c++
vector<int> res(n, 0);
	stack<pair<int, int>> stk;

	for (auto &log : logs)
	{
		istringstream ss(log);//初始化一个string流
		string s1, s2, s3;
		getline(ss, s1, ':');//以 ; 为阶段符，将ss符合中的内容输入到 s1中，也就是输入了函数ID，此时ss中被取走的有s1和 “;” 
		getline(ss, s2, ':');//，将s1+";"去除后,对于剩下的ss以 ; 为阶段符，将ss符合中的内容输入到 s2中，也就是输入了start或者end
		getline(ss, s3);//，默认是以 \n 为结束符号的

		int id = stoi(s1), time = stoi(s3);
		string action = s2;
		
		if (action == "start")
		{
			if (!stk.empty())
				res[stk.top().first] += time - stk.top().second;
			stk.push({ id,time });
		}
		else
		{
			pair<int, int> p = stk.top();
			stk.pop();

			res[p.first] += time - p.second + 1;
			if (!stk.empty())
				stk.top().second = time + 1;
		}

	}

	return res;
```

<p id="每日温度"></p>



### 739. 每日温度  经典

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/daily-temperatures/)

根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。





#### 第一版，超时了

```c++

 vector<int> dailyTemperatures(vector<int>& T) {
    vector<int> res;
	res.push_back(0);
	int len = T.size();
	for (int i=len-2; i>=0; --i) {
		int j = i +1;
		while (j != len) {
			if (T[i] < T[j]) { res.push_back(j - i); break; }
			else
				j++;
		}
		if (j == len) res.push_back(0);
	}
	reverse(res.begin(), res.end());

	return res;  
    }
```







#### 第二版，看的别人的

https://leetcode-cn.com/problems/daily-temperatures/solution/jie-ti-si-lu-by-pulsaryu/



执行用时 :224 ms, 在所有 cpp 提交中击败了97.42%的用户

内存消耗 :14.7 MB, 在所有 cpp 提交中击败了94.18%的用户



```c++
    vector<int> dailyTemperatures(vector<int>& T) {
	int len = T.size();
	vector<int> res(len);
	res[len - 1] = 0;
	for (int i = len-2; i >=0 ;--i) {

		for (int j = i + 1; j < len; j += res[j]) 
         // j+= result[j]是利用已经有的结果进行跳跃,只需要找比当前大的值进行比较即可，小于的直接跳过
        {
			if (T[j] > T[i]) { res[i] = j - i; break; }
			if (res[j] == 0) { res[i] = 0; break; }
		}//遇到0表示后面不会有更大的值，那当然当前值就应该也为0

	}
	return res;
    }
```



#### 第三版，稍微改进一点



执行用时 :228 ms, 在所有 cpp 提交中击败了95.98%的用户

内存消耗 :14.6 MB, 在所有 cpp 提交中击败了95.15%的用户

**res(len)时已经初始化为0了，所以可以去掉那两步赋值为0的部分**



```c++
vector<int> dailyTemperatures(vector<int>& T) {
	
	int len = T.size();
	vector<int> res(len);
	//res[len - 1] = 0;
	for (int i = len-2; i >=0 ;--i) {

		for (int j = i + 1; j < len; j += res[j]) {
			if (T[j] > T[i]) { res[i] = j - i; break; }
			if (res[j] == 0) {  break; }
		}

	}
	return res;

}
```

<p id="括号的分数"></p>



### 856. 括号的分数

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/score-of-parentheses/)

给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：

() 得 1 分。
AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
(A) 得 2 * A 分，其中 A 是平衡括号字符串。


示例 1：

输入： "()"
输出： 1
示例 2：

输入： "(())"
输出： 2
示例 3：

输入： "()()"
输出： 2
示例 4：

输入： "(()(()))"
输出： 6


提示：

S 是平衡括号字符串，且只含有 ( 和 ) 。
2 <= S.length <= 50





#### 第一版 抄的，看都看不太懂...



执行用时 :4 ms, 在所有 C++ 提交中击败了76.89%的用户

内存消耗 :8.2 MB, 在所有 C++ 提交中击败了92.86%的用户



```c++
/*
借鉴别人的 (()(())) = (()) + ((())) , 且  分数 = 2^(层数-1)
出现 '(' 代表层数+1 ， 出现 ')' 代表层数 -1
*/
class Solution {
public:
    int scoreOfParentheses(string S) {
        int deep=0,ans=0;
        for(int i=0;i<S.length();i++){
            if(S[i] == '(')deep++;
            else deep--;
            if(S[i]==')' && S[i-1]=='(') ans += 1 << deep;
        }
        return ans;
    }
};
```

<p id="使括号有效的最少添加"></p>



### 921. 使括号有效的最少添加

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/minimum-add-to-make-parentheses-valid/)

给定一个由 '(' 和 ')' 括号组成的字符串 S，我们需要添加最少的括号（ '(' 或是 ')'，可以在任何位置），以使得到的括号字符串有效。

从形式上讲，只有满足下面几点之一，括号字符串才是有效的：

它是一个空字符串，或者
它可以被写成 AB （A 与 B 连接）, 其中 A 和 B 都是有效字符串，或者
它可以被写作 (A)，其中 A 是有效字符串。
给定一个括号字符串，返回为使结果字符串有效而必须添加的最少括号数。



示例 1：

输入："())"
输出：1
示例 2：

输入："((("
输出：3
示例 3：

输入："()"
输出：0
示例 4：

输入："()))(("
输出：4


提示：

S.length <= 1000
S 只包含 '(' 和 ')' 字符。



执行用时 :0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗 :8.7 MB, 在所有 C++ 提交中击败了72.99%的用户



#### 第一版  队列，看完理解了

```C++
int minAddToMakeValid(string S) {
	if (S.size() <= 1) return S.size();
	stack<char> st;
	st.push(S[0]);
	for (int i = 1; i < S.size(); ++i) {
		if (S[i] == ')')	
		{
			if (st.empty()) st.push(')');
			else if(st.top() == '(') st.pop(); 
			else st.push(')');
		}
		else { 
			st.push(S[i]);
		}
	}
	int cut = 0;
	while (!st.empty()) {
		st.pop();
		cut++;
	}
	return cut;
}

```



#### 第二版  自己隔天复现，还可以

执行用时 :4 ms, 在所有 C++ 提交中击败了79.92%的用户

内存消耗 :8.7 MB, 在所有 C++ 提交中击败了41.42%的用户



```C++
vector<string> letterCombinations(string digits) {
	map<char, string> mp = { {'2',"abc"},{'3',"def"},{'4',"ghi"},{'5',"jkl"},{'6',"mno"},{'7',"pqrs"},{'8',"tuv"},{'9',"wxyz"} };//建立映射
	queue<string> que;//借助队列
	vector<string> result;
	unsigned i, j,length;
	string strTemp;

	for (i = 0; i < mp[digits[0]].size(); ++i) { //首先将映射表的第一个元素的内容导入进去
		strTemp.push_back(mp[digits[0]][i]);
		que.push(strTemp);
		strTemp.clear();
	}

	for (i = 1; i < digits.size(); ++i) {//头元素之外的其他元素
		length = que.size();
		while (length--) {//对于当前st的所有元素，挨个取出来与后面的进行组合
			strTemp = que.front(); //把队列头拿出来处理
			for (j = 0; j < mp[digits[i]].size(); ++j) {
				cout << strTemp + mp[digits[i]][j] << endl;
				que.push(strTemp + mp[digits[i]][j]);
			}
			que.pop(); //处理完，去除头部元素
		}
	}

	while (!que.empty()) { //转存到vector上
		result.push_back(que.front());
		que.pop();
	}
	return result;
}

```

<p id="验证栈序列"></p>



### 946. 验证栈序列

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/validate-stack-sequences/)

给定 pushed 和 popped 两个序列，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。

 

示例 1：

输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
示例 2：

输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。


提示：

0 <= pushed.length == popped.length <= 1000
0 <= pushed[i], popped[i] < 1000
pushed 是 popped 的排列。





#### 第一版，自己写的，看错了，改了好久

执行用时 :12 ms, 在所有 cpp 提交中击败了79.08%的用户

内存消耗 :8.9 MB, 在所有 cpp 提交中击败了88.28%的用户



```c++
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
    if (pushed.size() != popped.size()) return false;

	stack<int> st;
	unsigned j=0,lenPush = pushed.size();

	for (unsigned i = 0; i < lenPush && j<lenPush;++i) {
		//cout << "i:" << i << endl;
		st.push(pushed[i]);
		if (popped[j] != st.top())
			continue;
		else
		{
			//cout <<"1:" <<popped[j] << " " << st.top() << endl;
			st.pop();
			j++;
			//cout << "2:" << popped[j] <<" "<<j << endl;
			for (int k = st.size() - 1; k >= 0; --k) {
				
				//cout << "3:" << popped[j] << " " << st.top() <<" j "<<j<< endl;
				if (!st.empty() && st.top() == popped[j]) {
					j++;
					st.pop();
					//cout << "4:" << popped[j] << " " << j << endl;
				}
				else
					break;
			}

		}
	}
	return st.empty() && j  == lenPush;
        
    }
```

<p id="检查替换后的词是否有效"></p>



### 1003. 检查替换后的词是否有效

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/check-if-word-is-valid-after-substitutions/)



给定有效字符串 "abc"。

对于任何有效的字符串 V，我们可以将 V 分成两个部分 X 和 Y，使得 X + Y（X 与 Y 连接）等于 V。（X 或 Y 可以为空。）那么，X + "abc" + Y 也同样是有效的。

例如，如果 S = "abc"，则有效字符串的示例是："abc"，"aabcbc"，"abcabc"，"abcabcababcc"。无效字符串的示例是："abccba"，"ab"，"cababc"，"bac"。

如果给定字符串 S 有效，则返回 true；否则，返回 false。

 

示例 1：

输入："aabcbc"
输出：true
解释：
从有效字符串 "abc" 开始。
然后我们可以在 "a" 和 "bc" 之间插入另一个 "abc"，产生 "a" + "abc" + "bc"，即 "aabcbc"。
示例 2：

输入："abcabcababcc"
输出：true
解释：
"abcabcabc" 是有效的，它可以视作在原串后连续插入 "abc"。
然后我们可以在最后一个字母之前插入 "abc"，产生 "abcabcab" + "abc" + "c"，即 "abcabcababcc"。
示例 3：

输入："abccba"
输出：false
示例 4：

输入："cababc"
输出：false


提示：

1 <= S.length <= 20000
2、S[i] 为 'a'、'b'、或 'c'





#### 第一版，应该先判断是否为空再进行其他

执行用时 :24 ms, 在所有 cpp 提交中击败了63.73%的用户

内存消耗 :10.6 MB, 在所有 cpp 提交中击败了81.74%的用户



```c++
bool isValid(string S) {
	stack<char> st;
	for (auto &ch : S) {
		if (st.empty()){
			st.push(ch);
		}
		else if (ch == 'c') {
			if (!st.empty() && st.top() == 'b'  ) { //在下一步删除前删除前，应该先判断是否为空再进行其他操作
				st.pop();
				if (!st.empty() && st.top() == 'a' ) //在下一步删除前删除前，应该先判断是否为空再进行其他操作
					st.pop();
				else
				{
					st.push('b');
				}
			}
			else
			{
				st.push('c');
			}
		}
		else
			st.push(ch);
	}
	return st.empty();
}
```

<p id="反转每对括号间的子串"></p>



### 1190. 反转每对括号间的子串

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/)

给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。

 

示例 1：

输入：s = "(abcd)"
输出："dcba"
示例 2：

输入：s = "(u(love)i)"
输出："iloveu"
示例 3：

输入：s = "(ed(et(oc))el)"
输出："leetcode"
示例 4：

输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"


提示：

0 <= s.length <= 2000
s 中只有小写英文字母和括号
我们确保所有括号都是成对出现的



#### 第一版 自己写的

执行用时 :4 ms, 在所有 cpp 提交中击败了84.02%的用户

内存消耗 :8.6 MB, 在所有 cpp 提交中击败了100.00%的用户



```c++
    string reverseParentheses(string s) {
    stack<char> res;
	string str="";
	for (auto i : s) {
		if(i==')'){
		
			while (res.top() != '(') {
				str += res.top();
				res.pop();
			}
			res.pop();//将'('推出去

			for(auto j:str)
			{
				res.push(j);
			}
			str = "";

		}
		else {
			res.push(i);
		}

	}
	while (!res.empty()) {
		str += res.top();
		res.pop();
	}
	reverse(str.begin(), str.end());
	return str;   
    }
```





#### 第二版，循环时使用引用

执行用时 :0 ms, 在所有 cpp 提交中击败了100.00%的用户

内存消耗 :8.7 MB, 在所有 cpp 提交中击败了100.00%的用户



```c++
 string reverseParentheses(string s) {
    stack<char> res;
	string str="";
	for (auto &i : s) { //使用引用有很大提升
		if(i==')'){
		
			while (res.top() != '(') {
				str += res.top();
				res.pop();
			}
			res.pop();//将'('推出去

			for(auto &j:str)
			{
				res.push(j);
			}
			str = "";

		}
		else {
			res.push(i);
		}

	}
	while (!res.empty()) {
		str += res.top();
		res.pop();
	}
	reverse(str.begin(), str.end());//注意要反转一下
	return str;   
    }
```



<p id="删除字符串中的所有相邻重复项"></p>



### 1209. 删除字符串中的所有相邻重复项 II

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string-ii/)

给你一个字符串 s，「k 倍重复项删除操作」将会从 s 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。

你需要对 s 重复进行无限次这样的删除操作，直到无法继续为止。

在执行完所有删除操作后，返回最终得到的字符串。

本题答案保证唯一。

 

示例 1：

输入：s = "abcd", k = 2
输出："abcd"
解释：没有要删除的内容。
示例 2：

输入：s = "deeedbbcccbdaa", k = 3
输出："aa"
解释： 
先删除 "eee" 和 "ccc"，得到 "ddbbbdaa"
再删除 "bbb"，得到 "dddaa"
最后删除 "ddd"，得到 "aa"
示例 3：

输入：s = "pbbcggttciiippooaais", k = 2
输出："ps"


提示：

1 <= s.length <= 10^5
2 <= k <= 10^4
s 中只含有小写英文字母。



#### 第一版，真的不会，抄的

执行用时 :52 ms, 在所有 C++ 提交中击败了23.22%的用户

内存消耗 :10.4 MB, 在所有 C++ 提交中击败了100.00%的用户

```c++
string removeDuplicates(string s, int k) {
	//deeedbbcccbda
	stack<int>times;
	stack<char>st;
	for (auto vi : s) {
		if (st.empty() || st.top() != vi)
			st.push(vi), times.push(1);
		else if (st.top() == vi)
			++times.top();

		if (times.top() == k) st.pop(), times.pop();
	}

	string result="";
	while (!st.empty()) {
		result.insert(result.begin(), times.top(), st.top());
		st.pop(), times.pop();
	}
	return result;
}
```





#### 第二版，稍微改进一点

执行用时 :28 ms, 在所有 C++ 提交中击败了34.70%的用户

内存消耗 :10.1 MB, 在所有 C++ 提交中击败了100.00%的用户



```c++
    string removeDuplicates(string s, int k) {
	stack<int>times;
	stack<char>st;
	for (auto vi : s) {
		if (st.empty() || st.top() != vi)
			st.push(vi), times.push(1);
		else if (st.top() == vi)
			++times.top();

		if (times.top() == k) st.pop(), times.pop();
	}

	string result="";
	int i,len;
	char ch;
	while (!st.empty()) {
		/*result.insert(result.begin(), times.top(), st.top());*/
		len = times.top();
		ch = st.top();
		for ( i = 0; i < len; ++i) {
			result += ch;
		}
		st.pop(), times.pop();
	}
        
    reverse(result.begin(),result.end());//很重要
	return result;
        
    }
```











