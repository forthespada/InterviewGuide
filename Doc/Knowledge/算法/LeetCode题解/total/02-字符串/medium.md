<p id="字形变换"></p>



### 6. Z 字形变换

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/zigzag-conversion/)

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 `"LEETCODEISHIRING"` 行数为 3 时，排列如下：

```
L   C   I   R
E T O E S I I G
E   D   H   N
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"LCIRETOESIIGEDHN"`。

请你实现这个将字符串进行指定行数变换的函数：

```
string convert(string s, int numRows);
```

**示例 1:**

```
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
```

**示例 2:**

```
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
```

#### 第一版，学到了，好厉害

执行用时 :20 ms, 在所有 cpp 提交中击败了45.59%的用户

内存消耗 :12.7 MB, 在所有 cpp 提交中击败了78.87%的用户

```c++
    string convert(string s, int numRows) {
	if (numRows == 1) return s;

	vector<string> rows(min(numRows, int(s.size()))); // 防止s的长度小于行数
	int curRow = 0;
	bool goingDown = false;

	for (char c : s) {
		rows[curRow] += c;
		if (curRow == 0 || curRow == numRows - 1) {// 当前行curRow为0或numRows -1时，箭头发生反向转折
			goingDown = !goingDown;
		}
		curRow += goingDown ? 1 : -1;
	}

	string res;
	for (string row : rows) {// 从上到下遍历行
		res += row;
	}
	return res;
        
    }
```





#### 第二版，时间稍微改进一点

执行用时 :16 ms, 在所有 cpp 提交中击败了65.56%的用户

内存消耗 :12.7 MB, 在所有 cpp 提交中击败了77.96%的用户



```c++
string convert(string s, int numRows) {
	if (numRows == 1) return s;

	vector<string> rows(min(numRows, int(s.size()))); // 防止s的长度小于行数
	int curRow = 0;
	bool goingDown = false;

	for (char &c : s) {
		rows[curRow] += c;
		if (curRow == 0 || curRow == numRows - 1) {// 当前行curRow为0或numRows -1时，箭头发生反向转折
			goingDown = !goingDown;
		}
		curRow += goingDown ? 1 : -1;
	}

	string res;
	for (string &row : rows) {// 从上到下遍历行
		res += row;
	}

	return res;
}
```

<p id="字符串转换整数"></p>



### 8. 字符串转换整数 (atoi)

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/string-to-integer-atoi/)

请你来实现一个 `atoi` 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。接下来的转化规则如下：

- 如果第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字字符组合起来，形成一个有符号整数。
- 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成一个整数。
- 该字符串在有效的整数部分之后也可能会存在多余的字符，那么这些字符可以被忽略，它们对函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换，即无法进行有效转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0 。

**提示：**

- 本题中的空白字符只包括空格字符 `' '` 。
- 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

 

**示例 1:**

```
输入: "42"
输出: 42
```

**示例 2:**

```
输入: "   -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
```

**示例 3:**

```
输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
```

**示例 4:**

```
输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
     因此无法执行有效的转换。
```

**示例 5:**

```
输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。 
     因此返回 INT_MIN (−231) 。
```





这道题看似简单，实际陷阱很多 罗列一下该注意的点： （

1）首先要判断字符串长度，如果长度为 0 就不能进行了，直接返回 

（2）当过滤空格判断符号时也要判断索引是否小于字符串长度，否则可能会越界； 

（3）在判断一个数是否不在环境的存储范围时，不能计算好再判断，这样会可能越界，导致判断错误。如果当前的值是正数，应该在加法之前先判断当前的结果是否已经大于INT_MAX/10，如果大于，当前值乘10一定会越界，负数同样的道理。 

（4）以正数为例，进行步骤（3）的判断后还不完整，如果在加法之前判断当前的结果等于INT_MAX/10，那么要判断接下来要读到的数是否大于INT_MAX的最后一位数，如果大于，直接返回INT_MAX。

##### 1、虽然通过了，但是有些情况并没有考虑清楚

执行用时：4 ms, 在所有 C++ 提交中击败了81.38%的用户

内存消耗：6.2 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~C++
   int myAtoi(string str) {

	int i = 0, flag = 1;
	int isSingal = 0;
	long res = 0; //默认flag = 1，正数
	while (str[i] == ' ') i++; //若str全为空格，str[i] = '\0'(最后一个i)
	if (str[i] == '-') { flag = -1; ++i; isSingal++; }
	if (str[i] == '+') { ++i; isSingal++; }
	if (isSingal > 1) return 0;
	for (  ; i < str.size() && str[i]>='0' && str[i] <= '9'; ++i) {
		res = res * 10 + (str[i] - '0');
		if (res >= INT_MAX && flag == 1) return  INT_MAX;
		if (res > INT_MAX && flag == -1) return  INT_MIN;
	}
	return flag * res;
    }
~~~

##### 2、考虑某些情况，完善代码

执行用时：4 ms, 在所有 C++ 提交中击败了81.38%的用户

内存消耗：6.4 MB, 在所有 C++ 提交中击败了100.00%的用户




~~~C++
	int len = str.size();
	if (len == 0) return 0;//为空，直接返回即可
	int i = 0, flag = 1,isSingal = 0;// 索引 正负号标志位  正负号出现次数
	long res = 0; //默认flag = 1，正数
	while (i<len && str[i] == ' ') i++; //若str全为空格，str[i] = '\0'(最后一个i)
	if (i >= len) return 0;//全部都是空格，直接返回吧
	if (i < len && str[i] == '-') { flag = -1; ++i; isSingal++; }
	if (i < len && str[i] == '+') { ++i; ++isSingal; }
	if (isSingal > 1) return 0;
	for (  ; i < len && str[i]>='0' && str[i] <= '9'; ++i) {
		res = res * 10 + (str[i] - '0');
		if (res >= INT_MAX && flag == 1) return  INT_MAX;
		if (res > INT_MAX && flag == -1) return  INT_MIN;
	}
	return flag * res;
~~~

<p id="电话号码的字母组合"></p>



### 17. 电话号码的字母组合,看完毫无头绪

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。



#### 第一版 借助队列

执行用时 :4 ms, 在所有 C++ 提交中击败了80.09%的用户

内存消耗 :8.9 MB, 在所有 C++ 提交中击败了15.91%的用户

```c
	vector<string> result;//用于输出向量
	map<char, string> m = { {'2',"abc" },{'3',"def"},{'4',"ghi"},{'5',"jkl"},{'6',"mno"},{'7',"pqrs"},{'8',"tuv"},{'9',"wxyz"} };//映射map哈希表
	int size = digits.size();//输入字符串产长度
	queue<string> que;//新建队列

	//先将第一个元素对应的码表入队
	for (int j = 0; j < m[digits[0]].size(); j++)
	{
		string stemp;
		stemp.push_back(m[digits[0]][j]);
		que.push(stemp);//string入队
	}
	string s;//用于存储队头元素
	for (int i = 1; i < size; i++)
	{
		int length = que.size();//当前队列长度
		while (length--)
		{
			for (int j = 0; j < m[digits[i]].size(); j++)
			{
				s = que.front();
				s = s + m[digits[i]][j];//队头元素加上新元素
				que.push(s);//入队
			}
			que.pop();//队头出队
		}
	}
	while (!que.empty())
	{
		result.push_back(que.front());//队头元素存储至res
		que.pop();//队头出队
	}
	return result;//返回
```



#### 第二版，稍微节省了一点空间



执行用时 :0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗 :8.7 MB, 在所有 C++ 提交中击败了37.35%的用户

```c++
vector<string> result;//用于输出向量
	map<char, string> m = { {'2',"abc" },{'3',"def"},{'4',"ghi"},{'5',"jkl"},{'6',"mno"},{'7',"pqrs"},{'8',"tuv"},{'9',"wxyz"} };//映射map哈希表
	unsigned i,j,length,size = digits.size();//输入字符串产长度
	queue<string> que;//新建队列

	//先将第一个元素对应的码表入队
	string stemp;
	for (j = 0; j < m[digits[0]].size(); j++)
	{		
		stemp.push_back(m[digits[0]][j]);
		que.push(stemp);//string入队
		stemp.clear();
	}
	for (i = 1; i < size; i++)
	{
		length = que.size();//当前队列长度
		while (length--)
		{
			for (j = 0; j < m[digits[i]].size(); j++)
			{
				stemp = que.front();
				stemp = stemp + m[digits[i]][j];//队头元素加上新元素
				que.push(stemp);//入队
			}
			que.pop();//队头出队
		}
	}
	while (!que.empty())
	{
		result.push_back(que.front());//队头元素存储至res
		que.pop();//队头出队
	}
	return result;//返回
```

<p id="比较版本号"></p>



### 165. 比较版本号 挺好的一道题

[力扣原题链接（点我直达）](https://leetcode-cn.com/problems/compare-version-numbers/)

比较两个版本号 *version1* 和 *version2*。
如果 `*version1* > *version2*` 返回 `1`，如果 `*version1* < *version2*` 返回 `-1`， 除此之外返回 `0`。

你可以假设版本字符串非空，并且只包含数字和 `.` 字符。

 `.` 字符不代表小数点，而是用于分隔数字序列。

例如，`2.5` 不是“两个半”，也不是“差一半到三”，而是第二版中的第五个小版本。

你可以假设版本号的每一级的默认修订版号为 `0`。例如，版本号 `3.4` 的第一级（大版本）和第二级（小版本）修订号分别为 `3` 和 `4`。其第三级和第四级修订号均为 `0`。


**示例 1:**

```
输入: version1 = "0.1", version2 = "1.1"
输出: -1
```

**示例 2:**

```
输入: version1 = "1.0.1", version2 = "1"
输出: 1
```

**示例 3:**

```
输入: version1 = "7.5.2.4", version2 = "7.5.3"
输出: -1
```

**示例 4：**

```
输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，“01” 和 “001” 表示相同的数字 “1”。
```

**示例 5：**

```
输入：version1 = "1.0", version2 = "1.0.0"
输出：0
解释：version1 没有第三级修订号，这意味着它的第三级修订号默认为 “0”。
```

 

**提示：**

1. 版本字符串由以点 （`.`） 分隔的数字字符串组成。这个数字字符串**可能**有前导零。
2. 版本字符串不以点开始或结束，并且其中不会有两个连续的点。





##### 1、双指针，不过int会溢出

~~~cpp
"19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.00.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000"
"19.8.3.17.5.01.0.0.4.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0000.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.000000"
~~~





~~~cpp
int compareVersion(string version1, string version2) {

        int sum1 = 0, sum2 = 0;
        int len1 = version1.size(),len2 = version2.size();
        int index1 = 0,index2 = 0;

        while(index1 < len1 || index2 < len2){
            int temp = 0;
            while(index1 < len1  && version1[index1] != '.'){
                //if(version1[index1] ==0 && temp == 0) index1++;
                //if(version1[index1] ==0 && temp != 0) temp = temp*10;

                if(version1[index1] == 0) temp = temp*10;

               // if(version1[index1] !=0 && temp != 0) temp = temp*10 + version1[index1]-'0';
                //if(version1[index1] !=0 && temp == 0) temp = version1[index1] - '0';
                if(version1[index1] !=0) temp = temp*10 + version1[index1]-'0';

                index1++;

            }
            sum1 = sum1*10 +temp;

            temp = 0;
            while(index2 < len2  && version2[index2] != '.'){
                //if(version1[index1] ==0 && temp == 0) index1++;
                //if(version1[index1] ==0 && temp != 0) temp = temp*10;

                if(version2[index2] == 0) temp = temp*10;

               // if(version1[index1] !=0 && temp != 0) temp = temp*10 + version1[index1]-'0';
                //if(version1[index1] !=0 && temp == 0) temp = version1[index1] - '0';
                if(version2[index2] !=0) temp = temp*10 + version2[index2]-'0';

                index2++;
            }
            sum2 = sum2*10 +temp;
            //cout<<sum1<<" "<<sum2<<endl;
            index1++;
            index2++;
            if(sum1 > sum2) return 1;
            if(sum1 < sum2) return -1;

        }
        return 0;
    }
~~~





##### 2、改进一下，其实每次比较完毕，如果一样就可以置0，再继续比较下去了

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：6.2 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
int compareVersion(string version1, string version2) {

	int sum1 = 0, sum2 = 0;
	int len1 = version1.size(), len2 = version2.size();
	int index1 = 0, index2 = 0;

	while (index1 < len1 || index2 < len2) {
		int temp = 0;
		while (index1 < len1 && version1[index1] != '.') {
			//if(version1[index1] ==0 && temp == 0) index1++;
			//if(version1[index1] ==0 && temp != 0) temp = temp*10;

			if (version1[index1] == 0) temp = temp * 10;

			// if(version1[index1] !=0 && temp != 0) temp = temp*10 + version1[index1]-'0';
			 //if(version1[index1] !=0 && temp == 0) temp = version1[index1] - '0';
			if (version1[index1] != 0) temp = temp * 10 + version1[index1] - '0';

			index1++;

		}
		sum1 = sum1 * 10 + temp;

		temp = 0;
		while (index2 < len2 && version2[index2] != '.') {
			//if(version1[index1] ==0 && temp == 0) index1++;
			//if(version1[index1] ==0 && temp != 0) temp = temp*10;

			if (version2[index2] == 0) temp = temp * 10;

			// if(version1[index1] !=0 && temp != 0) temp = temp*10 + version1[index1]-'0';
			 //if(version1[index1] !=0 && temp == 0) temp = version1[index1] - '0';
			if (version2[index2] != 0) temp = temp * 10 + version2[index2] - '0';

			index2++;
		}
		sum2 = sum2 * 10 + temp;
		cout<<sum1<<" "<<sum2<<endl;
		index1++;
		index2++;
		if (sum1 > sum2) return 1;
		if (sum1 < sum2) return -1;

		sum1 = 0;//这是关键
		sum2 = 0;

	}
	return 0;
}
~~~

##### 3、精简代码

执行用时：0 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：6.3 MB, 在所有 C++ 提交中击败了100.00%的用户



~~~cpp
int compareVersion(string version1, string version2) {

	int sum1 = 0, sum2 = 0;
	int len1 = version1.size(), len2 = version2.size();
	int index1 = 0, index2 = 0;

	while (index1 < len1 || index2 < len2) {
		sum1 = 0;
		sum2 = 0;

		while (index1 < len1 && version1[index1] != '.') {
			sum1 = sum1 * 10 + version1[index1] - '0';
			index1++;

		}

		while (index2 < len2 && version2[index2] != '.') {
            sum2 = sum2 * 10 + version2[index2] - '0';
			index2++;
		}

		index1++;
		index2++;
		//cout << sum1 << " " << sum2 << endl;
		if (sum1 > sum2) return 1;
		if (sum1 < sum2) return -1;

	}
	return 0;
}
~~~





### [5461. 仅含 1 的子串数](https://leetcode-cn.com/problems/number-of-substrings-with-only-1s/)



给你一个二进制字符串 `s`（仅由 '0' 和 '1' 组成的字符串）。

返回所有字符都为 1 的子字符串的数目。

由于答案可能很大，请你将它对 10^9 + 7 取模后返回。

 

**示例 1：**

```
输入：s = "0110111"
输出：9
解释：共有 9 个子字符串仅由 '1' 组成
"1" -> 5 次
"11" -> 3 次
"111" -> 1 次
```

**示例 2：**

```
输入：s = "101"
输出：2
解释：子字符串 "1" 在 s 中共出现 2 次
```

**示例 3：**

```
输入：s = "111111"
输出：21
解释：每个子字符串都仅由 '1' 组成
```

**示例 4：**

```
输入：s = "000"
输出：0
```

 

**提示：**

- `s[i] == '0'` 或 `s[i] == '1'`
- `1 <= s.length <= 10^5`

#### 1、很简单的做法

C++,双百 为预防数据量过大，先进行结果的保存，结果发现数据量1不是很大...尴尬



~~~cpp


    int numSub(string s) {
        int len = s.size();
        int mod = 1e9 + 7,res = 0;
        vector<int> dp(len + 1, 0);
        for (int i = 1; i <= len; ++i) {
            dp[i] += (dp[i-1] +i)%mod ;
        }
        
        for(int low = 0, high =0; low<len;){          
            if(s[low] == '1'){
                high = low + 1;
                while( high<len && s[high] == '1') { ++high; } //统计连续1的个数              
                res += dp[high-low];
                res %= mod;
                low = high -1;
            }
            low++;
            
        }
        
        return res;       
    }
~~~



#### 2、是我想多了

执行用时：32 ms, 在所有 C++ 提交中击败了100.00%的用户

内存消耗：8.9 MB, 在所有 C++ 提交中击败了100.00%的用户

~~~cpp
    int numSub(string s) {        
        int mod = 1e9+7,len = s.size();
 		int res = 0,count = 0;
        for(int i = 0; i < len; ++i){
            if(s[i] == '1'){
                ++count;
                res = ( res + count )%mod;
            }else{
                count = 0;
            }
        }       
        return res;    
    }
~~~




