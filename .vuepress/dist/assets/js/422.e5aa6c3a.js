(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{841:function(t,n,s){"use strict";s.r(n);var e=s(62),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",{attrs:{id:"删列造序"}}),t._v(" "),s("h3",{attrs:{id:"_944-删列造序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_944-删列造序"}},[t._v("#")]),t._v(" 944. 删列造序")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/delete-columns-to-make-sorted/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("给定由 "),s("code",[t._v("N")]),t._v(" 个小写字母字符串组成的数组 "),s("code",[t._v("A")]),t._v("，其中每个字符串长度相等。")]),t._v(" "),s("p",[s("strong",[t._v("删除")]),t._v(" 操作的定义是：选出一组要删掉的列，删去 "),s("code",[t._v("A")]),t._v(" 中对应列中的所有字符，形式上，第 "),s("code",[t._v("n")]),t._v(" 列为 "),s("code",[t._v("[A[0][n], A[1][n], ..., A[A.length-1][n]]")]),t._v("）。")]),t._v(" "),s("p",[t._v("比如，有 "),s("code",[t._v('A = ["abcdef", "uvwxyz"]')]),t._v("，")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/07/06/944_1.png",alt:"img"}})]),t._v(" "),s("p",[t._v("要删掉的列为 "),s("code",[t._v("{0, 2, 3}")]),t._v("，删除后 "),s("code",[t._v("A")]),t._v(" 为"),s("code",[t._v('["bef", "vyz"]')]),t._v("， "),s("code",[t._v("A")]),t._v(" 的列分别为"),s("code",[t._v('["b","v"], ["e","y"], ["f","z"]')]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/07/06/944_2.png",alt:"img"}})]),t._v(" "),s("p",[t._v("你需要选出一组要删掉的列 "),s("code",[t._v("D")]),t._v("，对 "),s("code",[t._v("A")]),t._v(" 执行删除操作，使 "),s("code",[t._v("A")]),t._v(" 中剩余的每一列都是 "),s("strong",[t._v("非降序")]),t._v(" 排列的，然后请你返回 "),s("code",[t._v("D.length")]),t._v(" 的最小可能值。")]),t._v(" "),s("p",[s("strong",[t._v("示例 1：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('输入：["cba", "daf", "ghi"]\n输出：1\n解释：\n当选择 D = {1}，删除后 A 的列为：["c","d","g"] 和 ["a","f","i"]，均为非降序排列。\n若选择 D = {}，那么 A 的列 ["b","a","h"] 就不是非降序排列了。\n')])])]),s("p",[s("strong",[t._v("示例 2：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('输入：["a", "b"]\n输出：0\n解释：D = {}\n')])])]),s("p",[s("strong",[t._v("示例 3：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('输入：["zyx", "wvu", "tsr"]\n输出：3\n解释：D = {0, 1, 2}\n')])])]),s("p",[s("strong",[t._v("提示：")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("1 <= A.length <= 100")])]),t._v(" "),s("li",[s("code",[t._v("1 <= A[i].length <= 1000")])])]),t._v(" "),s("h4",{attrs:{id:"第一版-说的很垃圾啊-容易的题目-说的那么难懂"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一版-说的很垃圾啊-容易的题目-说的那么难懂"}},[t._v("#")]),t._v(" 第一版，说的很垃圾啊，容易的题目,说的那么难懂")]),t._v(" "),s("p",[t._v("执行用时 :48 ms, 在所有 cpp 提交中击败了89.00%的用户")]),t._v(" "),s("p",[t._v("内存消耗 :13.1 MB, 在所有 cpp 提交中击败了72.99%的用户")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('int minDeletionSize(vector<string>& A) {\n\tint len1 = A.size(), len2 = A[0].size();\n\n\tint res=0;\n\n\tfor (int i = 0; i < len2; ++i) {\n\t\tfor (int j = 0; j < len1-1; ++j) {\n\t\t\tif (A[j][i] > A[j + 1][i]) {\n\t\t\t\t//cout << A[j][i] << " " << A[j + 1][i] << " j " << j << " i " << i << endl;\n\t\t\t\tres++;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t}\n\n\treturn res;\n\n}\n')])])]),s("p",{attrs:{id:"两地调度"}}),t._v(" "),s("h3",{attrs:{id:"_1029-两地调度-第一道贪心的题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1029-两地调度-第一道贪心的题目"}},[t._v("#")]),t._v(" 1029. 两地调度  第一道贪心的题目")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/two-city-scheduling/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("公司计划面试 "),s("code",[t._v("2N")]),t._v(" 人。第 "),s("code",[t._v("i")]),t._v(" 人飞往 "),s("code",[t._v("A")]),t._v(" 市的费用为 "),s("code",[t._v("costs[i][0]")]),t._v("，飞往 "),s("code",[t._v("B")]),t._v(" 市的费用为 "),s("code",[t._v("costs[i][1]")]),t._v("。")]),t._v(" "),s("p",[t._v("返回将每个人都飞到某座城市的最低费用，要求每个城市都有 "),s("code",[t._v("N")]),t._v(" 人抵达**。**")]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：[[10,20],[30,200],[400,50],[30,20]]\n输出：110\n解释：\n第一个人去 A 市，费用为 10。\n第二个人去 A 市，费用为 30。\n第三个人去 B 市，费用为 50。\n第四个人去 B 市，费用为 20。\n\n最低总费用为 10 + 30 + 50 + 20 = 110，每个城市都有一半的人在面试。\n")])])]),s("p",[s("strong",[t._v("提示：")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("1 <= costs.length <= 100")])]),t._v(" "),s("li",[s("code",[t._v("costs.length")]),t._v(" 为偶数")]),t._v(" "),s("li",[s("code",[t._v("1 <= costs[i][0], costs[i][1] <= 1000")])])]),t._v(" "),s("h4",{attrs:{id:"第一版-看的最优解-挺有道理的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一版-看的最优解-挺有道理的"}},[t._v("#")]),t._v(" 第一版，看的最优解，挺有道理的")]),t._v(" "),s("p",[t._v("以costs[0]-costs[1]的差值从小到大排列，前一半去A，后一半去B")]),t._v(" "),s("p",[t._v("执行用时 :4 ms, 在所有 cpp 提交中击败了96.28%的用户")]),t._v(" "),s("p",[t._v("内存消耗 :9.3 MB, 在所有 cpp 提交中击败了100.00%的用户")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("static bool compare(const vector<int>& a,const vector<int>& b) {\n\n\treturn a[0] - a[1] < b[0] - b[1];\n\n}\nint twoCitySchedCost(vector<vector<int>>& costs) {\n\tsort(costs.begin(), costs.end(), compare);\n\tint count = 0, sum = 0,len=costs.size();\n\n\tfor (auto& cost : costs) {\n\n\t\tif (count * 2 < len) sum += cost[0];\n\t\telse\n\t\t\tsum += cost[1];\n\t\tcount++;\n\t}\n\n\treturn sum;\n\n}\n\n")])])]),s("p",{attrs:{id:"最后一块石头的重量"}}),t._v(" "),s("h3",{attrs:{id:"_1046-最后一块石头的重量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1046-最后一块石头的重量"}},[t._v("#")]),t._v(" 1046. 最后一块石头的重量")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/last-stone-weight/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("有一堆石头，每块石头的重量都是正整数。")]),t._v(" "),s("p",[t._v("每一回合，从中选出两块"),s("strong",[t._v("最重的")]),t._v("石头，然后将它们一起粉碎。假设石头的重量分别为 "),s("code",[t._v("x")]),t._v(" 和 "),s("code",[t._v("y")]),t._v("，且 "),s("code",[t._v("x <= y")]),t._v("。那么粉碎的可能结果如下：")]),t._v(" "),s("ul",[s("li",[t._v("如果 "),s("code",[t._v("x == y")]),t._v("，那么两块石头都会被完全粉碎；")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("x != y")]),t._v("，那么重量为 "),s("code",[t._v("x")]),t._v(" 的石头将会完全粉碎，而重量为 "),s("code",[t._v("y")]),t._v(" 的石头新重量为 "),s("code",[t._v("y-x")]),t._v("。")])]),t._v(" "),s("p",[t._v("最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 "),s("code",[t._v("0")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("提示：")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("1 <= stones.length <= 30")])]),t._v(" "),s("li",[s("code",[t._v("1 <= stones[i] <= 1000")])])]),t._v(" "),s("h4",{attrs:{id:"第一版-优先队列-默认是大顶堆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一版-优先队列-默认是大顶堆"}},[t._v("#")]),t._v(" 第一版，优先队列，默认是大顶堆")]),t._v(" "),s("p",[t._v("执行用时 :4 ms, 在所有 cpp 提交中击败了81.08%的用户")]),t._v(" "),s("p",[t._v("内存消耗 :8.3 MB, 在所有 cpp 提交中击败了100.00%的用户")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("int lastStoneWeight(vector<int>& stones) {\n\t\n\tif (stones.size() == 1) return stones[0];\n\tpriority_queue<int> res;\n\tint s1, s2;\n\tfor (auto& s : stones)\n\t\tres.push(s);\n\n\twhile (res.size() > 1) {\n\t\ts1 = res.top();\n\t\tres.pop();\n\t\ts2 = res.top();\n\t\tres.pop();\n\n\t\tif (s1 != s2) res.push(s1 - s2);//s1>=s2 所以这里是不需要用abs函数的\n\t}\n\treturn res.empty() ? 0 : res.top();\n\n}\n")])])]),s("p",{attrs:{id:"最后一块是你的"}}),t._v(" "),s("h3",{attrs:{id:"_1049-最后一块石头的重量-ii-好题-真的好题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1049-最后一块石头的重量-ii-好题-真的好题"}},[t._v("#")]),t._v(" 1049. 最后一块石头的重量 II   好题，真的好题")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/last-stone-weight-ii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("有一堆石头，每块石头的重量都是正整数。")]),t._v(" "),s("p",[t._v("每一回合，从中选出"),s("strong",[t._v("任意两块石头")]),t._v("，然后将它们一起粉碎。假设石头的重量分别为 "),s("code",[t._v("x")]),t._v(" 和 "),s("code",[t._v("y")]),t._v("，且 "),s("code",[t._v("x <= y")]),t._v("。那么粉碎的可能结果如下：")]),t._v(" "),s("ul",[s("li",[t._v("如果 "),s("code",[t._v("x == y")]),t._v("，那么两块石头都会被完全粉碎；")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("x != y")]),t._v("，那么重量为 "),s("code",[t._v("x")]),t._v(" 的石头将会完全粉碎，而重量为 "),s("code",[t._v("y")]),t._v(" 的石头新重量为 "),s("code",[t._v("y-x")]),t._v("。")])]),t._v(" "),s("p",[t._v("最后，最多只会剩下一块石头。返回此石头"),s("strong",[t._v("最小的可能重量")]),t._v("。如果没有石头剩下，就返回 "),s("code",[t._v("0")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：[2,7,4,1,8,1]\n输出：1\n解释：\n组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，\n组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，\n组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，\n组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。\n")])])]),s("p",[s("strong",[t._v("提示：")])]),t._v(" "),s("ol",[s("li",[s("code",[t._v("1 <= stones.length <= 30")])]),t._v(" "),s("li",[s("code",[t._v("1 <= stones[i] <= 1000")])])]),t._v(" "),s("h4",{attrs:{id:"第一版-完全看的思路问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一版-完全看的思路问题"}},[t._v("#")]),t._v(" 第一版，完全看的思路问题")]),t._v(" "),s("p",[t._v("执行用时 :4 ms, 在所有 cpp 提交中击败了89.93%的用户")]),t._v(" "),s("p",[t._v("内存消耗 :8.6 MB, 在所有 cpp 提交中击败了100.00%的用户")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    int lastStoneWeightII(vector<int>& stones) {\n    \n    int sum = accumulate(stones.begin(), stones.end(), 0);\n\tint target = sum / 2;\n\tvector<int> dp = vector<int>(target + 1, 0);\n\tlong size = stones.size();\n\tfor (int i = 0; i < size; i++) {\n\t\tint s = stones[i];\n\t\tfor (int j = target; j >= s; j--) {\n\t\t\tdp[j] = max(dp[j], dp[j - s] + s);\n\t\t}\n\t}\n\treturn sum - 2 * dp.back();\n    }\n")])])]),s("p",[t._v("等价于最大化半个背包的重量")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("class Solution {\npublic:\n    int lastStoneWeightII(vector<int>& stones) {\n        int sum = accumulate(stones.begin(), stones.end(), 0);\n        int S = sum / 2;\n        int N = stones.size();\n        vector<vector<int> > dp(S + 1, vector<int>(N + 1, 0));\n        for (int i = 1; i <= S; ++i) {\n            for (int j = 1; j <= N; ++j) {\n                dp[i][j] = max(dp[i][j - 1],\n                    (i >= stones[j - 1]) ? dp[i - stones[j - 1]][j - 1] + stones[j - 1] : 0); \n            }\n        }\n        return sum - 2 * dp[S][N];\n    }\n};\n\n// 也可以使用状态压缩后的dp\nclass Solution {\npublic:\n    int lastStoneWeightII(vector<int>& stones) {\n        int sum = accumulate(stones.begin(), stones.end(), 0);\n        int S = sum / 2;\n        int N = stones.size();\n        vector<int> dp(S + 1, 0);\n        for (int i = 0; i < N; ++i) {\n            int w = stones[i];\n            for (int j = S; j >= w; --j) {\n                dp[j] = max(dp[j], dp[j - w] + w);\n            }\n        }\n        return sum - 2 * dp[S];\n    }\n};\n\n\n\n")])])]),s("p",{attrs:{id:"玩筹码"}}),t._v(" "),s("h3",{attrs:{id:"_1217-玩筹码-很无聊的题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1217-玩筹码-很无聊的题目"}},[t._v("#")]),t._v(" 1217. 玩筹码  很无聊的题目")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/play-with-chips/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("数轴上放置了一些筹码，每个筹码的位置存在数组 "),s("code",[t._v("chips")]),t._v(" 当中。")]),t._v(" "),s("p",[t._v("你可以对 "),s("strong",[t._v("任何筹码")]),t._v(" 执行下面两种操作之一（"),s("strong",[t._v("不限操作次数")]),t._v("，0 次也可以）：")]),t._v(" "),s("ul",[s("li",[t._v("将第 "),s("code",[t._v("i")]),t._v(" 个筹码向左或者右移动 2 个单位，代价为 "),s("strong",[t._v("0")]),t._v("。")]),t._v(" "),s("li",[t._v("将第 "),s("code",[t._v("i")]),t._v(" 个筹码向左或者右移动 1 个单位，代价为 "),s("strong",[t._v("1")]),t._v("。")])]),t._v(" "),s("p",[t._v("最开始的时候，同一位置上也可能放着两个或者更多的筹码。")]),t._v(" "),s("p",[t._v("返回将所有筹码移动到同一位置（任意位置）上所需要的最小代价。")]),t._v(" "),s("p",[s("strong",[t._v("示例 1：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：chips = [1,2,3]\n输出：1\n解释：第二个筹码移动到位置三的代价是 1，第一个筹码移动到位置三的代价是 0，总代价为 1。\n")])])]),s("p",[s("strong",[t._v("示例 2：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：chips = [2,2,2,3,3]\n输出：2\n解释：第四和第五个筹码移动到位置二的代价都是 1，所以最小总代价为 2。\n")])])]),s("p",[s("strong",[t._v("提示：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("1 <= chips.length <= 100")])]),t._v(" "),s("li",[s("code",[t._v("1 <= chips[i] <= 10^9")])])]),t._v(" "),s("h4",{attrs:{id:"第一版-真的很无聊"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一版-真的很无聊"}},[t._v("#")]),t._v(" 第一版，真的很无聊")]),t._v(" "),s("p",[t._v("执行用时 :4 ms, 在所有 cpp 提交中击败了77.12%的用户")]),t._v(" "),s("p",[t._v("内存消耗 :8.5 MB, 在所有 cpp 提交中击败了100.00%的用户")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("int minCostToMoveChips(vector<int>& chips) {\n\tint odd = 0, even = 0;\n\tfor (auto& elem : chips)\n\t{\n\t\tif (elem % 2 == 1) {\n\t\t\teven++;\n\t\t}\n\t\telse {\n\t\t\todd++;\n\t\t}\n\t}\n\treturn min(even, odd);\n}\n")])])]),s("p",{attrs:{id:"分割平衡字符串"}}),t._v(" "),s("h3",{attrs:{id:"_1221-分割平衡字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1221-分割平衡字符串"}},[t._v("#")]),t._v(" 1221. 分割平衡字符串")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣原题链接（点我直达）"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。")]),t._v(" "),s("p",[t._v("给出一个平衡字符串 "),s("code",[t._v("s")]),t._v("，请你将它分割成尽可能多的平衡字符串。")]),t._v(" "),s("p",[t._v("返回可以通过分割得到的平衡字符串的最大数量。")]),t._v(" "),s("p",[s("strong",[t._v("示例 1：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('输入：s = "RLRRLLRLRL"\n输出：4\n解释：s 可以分割为 "RL", "RRLL", "RL", "RL", 每个子字符串中都包含相同数量的 \'L\' 和 \'R\'。\n')])])]),s("p",[s("strong",[t._v("示例 2：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('输入：s = "RLLLLRRRLR"\n输出：3\n解释：s 可以分割为 "RL", "LLLRRR", "LR", 每个子字符串中都包含相同数量的 \'L\' 和 \'R\'。\n')])])]),s("p",[s("strong",[t._v("示例 3：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('输入：s = "LLLLRRRR"\n输出：1\n解释：s 只能保持原样 "LLLLRRRR".\n')])])]),s("p",[s("strong",[t._v("提示：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("1 <= s.length <= 1000")])]),t._v(" "),s("li",[s("code",[t._v("s[i] = 'L' 或 'R'")])])]),t._v(" "),s("h4",{attrs:{id:"第一版-入门级题目-但是时间太慢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一版-入门级题目-但是时间太慢"}},[t._v("#")]),t._v(" 第一版，入门级题目，但是时间太慢")]),t._v(" "),s("p",[t._v("执行用时 :8 ms, 在所有 cpp 提交中击败了8.71%的用户")]),t._v(" "),s("p",[t._v("内存消耗 :8.4 MB, 在所有 cpp 提交中击败了100.00%的用户")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("int balancedStringSplit(string s) {\n\n\t//char L = 'L', R = 'R';\n\tint countL = 0, countR = 0,res=0;\n\tfor (auto& a : s) {\n\n\t\tif (a == 'L')  countL++;\n\t\telse\n\t\t\tcountR++;\n\t\tif (countL == countR) {\n\t\t\tres++;\n\t\t\tcountL = 0;\n\t\t\tcountR = 0;\n\t\t}\n\t}\n\treturn res;\n}\n")])])]),s("h4",{attrs:{id:"第二版-其实有一步是可以省去的-这样更快一点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二版-其实有一步是可以省去的-这样更快一点"}},[t._v("#")]),t._v(" 第二版，其实有一步是可以省去的，这样更快一点")]),t._v(" "),s("p",[t._v("执行用时 :4 ms, 在所有 cpp 提交中击败了70.35%的用户")]),t._v(" "),s("p",[t._v("内存消耗 :8.4 MB, 在所有 cpp 提交中击败了100.00%的用户")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  int balancedStringSplit(string s) {    \n int countL = 0, countR = 0,res=0;\n\tfor (auto& a : s) {\n\n\t\tif (a == 'L')  countL++;\n\t\telse\n\t\t\tcountR++;\n\t\tif (countL == countR) {\n\t\t\tres++;\n\t\t}\n\t}\n\treturn res;\n    }\n")])])]),s("h4",{attrs:{id:"第三版-用栈其实也可以-也挺快的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三版-用栈其实也可以-也挺快的"}},[t._v("#")]),t._v(" 第三版，用栈其实也可以，也挺快的")]),t._v(" "),s("p",[t._v("执行用时 :4 ms, 在所有 cpp 提交中击败了70.35%的用户")]),t._v(" "),s("p",[t._v("内存消耗 :8.5 MB, 在所有 cpp 提交中击败了100.00%的用户")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("int balancedStringSplit(string s) {\n\n\tint res=0;\n\tstack<char> st;\n\tfor (auto& a : s) {\n\n\t\tif (st.empty() || a == st.top())\n\t\t\tst.push(a);\n\t\telse\n\t\t\tst.pop();\n\t\tif (st.empty()) ++res;\n\t}\n\treturn res;\n}\n\n")])])]),s("p",{attrs:{id:"最小栈"}}),t._v(" "),s("p",[t._v("​")])])}),[],!1,null,null,null);n.default=a.exports}}]);