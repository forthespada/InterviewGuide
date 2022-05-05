<p id="换酒问题"></p>


### 5464. 换酒问题

小区便利店正在促销，用 `numExchange` 个空酒瓶可以兑换一瓶新酒。你购入了 `numBottles` 瓶酒。

如果喝掉了酒瓶中的酒，那么酒瓶就会变成空的。

请你计算 **最多** 能喝到多少瓶酒。

```
输入：numBottles = 9, numExchange = 3
输出：13
解释：你可以用 3 个空酒瓶兑换 1 瓶酒。
所以最多能喝到 9 + 3 + 1 = 13 瓶酒。



输入：numBottles = 15, numExchange = 4
输出：19
解释：你可以用 4 个空酒瓶兑换 1 瓶酒。
所以最多能喝到 15 + 3 + 1 = 19 瓶酒。


输入：numBottles = 5, numExchange = 5
输出：6


输入：numBottles = 2, numExchange = 3
输出：2
```

#### 1、解析，其实并不难，想通了就好了

一共三种情况：

1、当前酒的数量 低于 最低限度，那么一瓶也换不了，最多喝 numBottles 瓶，比如numBottles = 2, numExchange = 3，直接返回 numBottles就完事

2、当前酒的数量 等于 最低限度，那么只能换一瓶，最多喝 numBottles  +1 瓶，比如numBottles = 5, numExchange = 5，返回 numBottles +1 



3、当前酒的数量 大于 最低限度，这里又要分为两种情况，首先能喝到numBottles 瓶，sumNum  +=numBottles 再说。

其实可以假想先找老板白嫖一瓶，拿我手里有的 numExchange -1 个空瓶 + 从老板那里借来的一瓶喝完后，又换成新的一瓶，再还给老板，这样相当于 用 numExchange - 1 个空瓶就喝到了 一瓶新的酒，所以需要判断 已经在手里的酒瓶的数量 与 numExchange -1 是否构成倍数关系再进行下一步

（1）如果是倍数关系，那么能喝的就要加上 -1  + numBottles /(numExchange-1);，对应测试用例 numBottles = 15 ,numExchange =  4，15%(4-1) == 0，所以  sumNum =15+ -1 + 15 /(4-1) ; sumNum = 15 + 

-1 + 5 = 19瓶

（2）如果不是倍数关系，那更方便了，就跟直接白嫖一样啊，直接加上  numBottles /(numExchange-1)；对应测试用例  9  3 ，sumNum = 9 + (9/(3-1)) = 9 + 4 = 11瓶

~~~cpp
    int numWaterBottles(int numBottles, int numExchange) {
        if( numExchange > numBottles) return numBottles;//当前酒的数量 低于 最低限度，一瓶也换不了，最多喝 numBottles 瓶
        if( numExchange == numBottles) return numBottles + 1;//如果两者相同，只能拿喝完的 空瓶 换一瓶，直接加上 1 就完事
        
        int sumNum = numBottles; // 当前能喝 numBottles
        if( numBottles %(numExchange-1) == 0) sumNum += -1 + numBottles /(numExchange-1);//其实可以假想先找老板白嫖一瓶，拿我手里有的 numExchange -1 个空瓶 + 从老板那里借来的一瓶喝完后，又换成新的一瓶，再还给老板，这样相当于 用 numExchange - 1 个空瓶就喝到了 一瓶新的酒，所以需要判断 拿到手的酒的数量 与 numExchange -1 是否是倍数关系，如果是，那么能喝的就要加上 -1，对应测试用例15  4  
        else{
            sumNum += numBottles /(numExchange-1); //不是倍数关系，直接加上就完事  对应测试用例  9  3 
            
        }
        
        return sumNum;//返回即可

    }
~~~

 本人牛客剑指offer 与力扣[刷题笔记](https://github.com/forthespada/LeetCode)，针对秋招定向刷题，只做medium和easy的，拒绝hard，面向offer刷题~ 