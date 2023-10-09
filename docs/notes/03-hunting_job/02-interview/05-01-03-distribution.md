---
layout:  post
category:  hunting_job
title:  系统设计07-Raft
tagline:  by 阿秀
tags:
    - 原创
    - Raft
excerpt: 系统设计01-03
comment: false
---



<h1 align="center">Raft</h1>





<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是五则或许对你有些许帮助的信息:</p>
<p>0、经常看到有人问哪里有汇总好的校招投递公司信息汇总？甚至还有的人花钱去买这类信息，更有甚者<span style="font-weight:bold;color:red">还有被骗的</span>。。。其实这类信息真的很多，牛客网、前程无忧这些招聘网站都帮你总结好了，这里分享一下一位学弟告知的前程无忧推出的校招信息汇总，他们每天都会在群里发招聘公司、行业、岗位等，<a href="https://mp.weixin.qq.com/s/XVrkXg5P0Z7rWhDAWkJDWA" target="_blank">点此免费获取前程无忧总结好的校招资讯汇总</a></p>  <p>1、👉23年5月份我从<a style="text-decoration: underline" href="https://mp.weixin.qq.com/s/zKItpGwIkHKK4g2aOlL2rA" target="_blank">字节跳动离职跳槽到某外企</a>期间，为<span style="font-weight:bold">方便自己找工作，增加上岸几率</span>，我自己从0开发了一个<span style="font-weight:bold">大厂面试真题解析网站</span>，包括两个前端和一个后端。能够定向查看某些公司的某些岗位面试真题，比如我想查一下行业为互联网，公司为字节跳动，考察岗位为后端，考察时间为最近一年之类的面试题有哪些？
<div align="center">
  <a  style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">  <img src="http://oss.interviewguide.cn/img/202308091638172.png" style="zoom:100%;" /></a>
<p style="font-weight:bold">衷心希望自己开发的这个网站能够帮到更多的人，自己能够以技术服务于大家！</p>
</div>网站地址：<a style="text-decoration: underline" href="https://top.interviewguide.cn/" target="_blank">InterviewGuide大厂面试真题解析网站</a>。点此可以查看该网站的视频介绍：<a style="text-decoration: underline" href="https://www.bilibili.com/video/BV1f94y1C7BL" target="_blank">B站视频讲解</a>   如果可以的话求个B站三连，感谢！
  </p> 
  <p>2、😍
    免费分享阿秀个人学习计算机以来收集到的免费学习资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>；也记录一下自己以前买过的<a style="text-decoration: underline" href="/notes/07-resources/02-precious.html" target="_blank">不错的计算机书籍、网络专栏和垃圾付费专栏</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">留下的经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行不如一群人报团取暖，圈子里沉淀了很多过去21/22/23届学长学姐的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp" target="_blank">经验和总结</a>，好好跟着走下去的，最后基本都可以拿到不错的offer！此外，每周都会进行<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">精华总结和分享！</a>如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/qs0yn66apvkzw0ps" target="_blank">点此下载</a> 。</p>   </div>


## 1、Raft Overview

> Raft 算法讲解  

 		raft 是工程上使用较为广泛的强一致性、去中心化、高可用的分布式协议。在这里强调了是在工程上，因为在学术理论界，最耀眼的还是大名鼎鼎的 Paxos。但 Paxos 是：少数真正理解的人觉得简单，尚未理解的人觉得很难，大多数人都是一知半解。本人也花了很多时间、看了很多材料也没有真正理解。直到看到 raft 的论文，两位研究者也提到，他们也花了很长的时间来理解 Paxos，他们也觉得很难理解，于是研究出了 raft 算法。

​		 raft 是一个共识算法（consensus algorithm），所谓共识，就是多个节点对某个事情达成一致的看法，即使是在部分节点故障、网络延时、网络分割的情况下。这些年最为火热的加密货币（比特币、区块链）就需要共识算法，而在分布式系统中，共识算法更多用于提高系统的容错性，比如分布式存储中的复制集（replication），在[带着问题学习分布式系统之中心化复制集](https://www.cnblogs.com/xybaby/p/7153755.html)一文中介绍了中心化复制集的相关知识。raft 协议就是一种 leader-based 的共识算法，与之相应的是 leaderless 的共识算法。



Raft 算法的头号目标就是容易理解（UnderStandable），这从论文的标题就可以看出来。当然，Raft 增强了可理解性，在性能、可靠性、可用性方面是不输于 Paxos 的。

> Raft more understandable than Paxos and also provides a better foundation for building practical systems

   为了达到易于理解的目标，raft 做了很多努力，其中最主要是两件事情：

*   问题分解
*   状态简化

   问题分解是将 "复制集中节点一致性" 这个复杂的问题划分为数个可以被独立解释、理解、解决的子问题。在 raft，子问题包括，_leader election_， _log replication_，_safety_，_membership changes_。而状态简化更好理解，就是对算法做出一些限制，减少需要考虑的状态数，使得算法更加清晰，更少的不确定性（比如，保证新选举出来的 leader 会包含所有 commited log entry）

> Raft implements consensus by first electing a distinguished leader, then giving the leader complete responsibility for managing the replicated log. The leader accepts log entries from clients, replicates them on other servers, and tells servers when it is safe to apply log entries to their state machines. A leader can fail or become disconnected from the other servers, in which case a new leader is elected.

   上面的引文对 raft 协议的工作原理进行了高度的概括：raft 会先选举出 leader，leader 完全负责 replicated log 的管理。leader 负责接受所有客户端更新请求，然后复制到 follower 节点，并在 “安全” 的时候执行这些请求。如果 leader 故障，followes 会重新选举出新的 leader。

   这就涉及到 raft 最新的两个子问题： leader election 和 log replication

2、leader election
---------------

   raft 协议中，一个节点任一时刻处于以下三个状态之一：

*   leader
*   follower
*   candidate

   给出状态转移图能很直观的直到这三个状态的区别  
![](http://oss.interviewguide.cn/img/202206222245852.png)

  可以看出所有节点启动时都是 follower 状态；在一段时间内如果没有收到来自 leader 的心跳，从 follower 切换到 candidate，发起选举；如果收到 majority 的造成票（含自己的一票）则切换到 leader 状态；如果发现其他节点比自己更新，则主动切换到 follower。

   总之，系统中最多只有一个 leader，如果在一段时间里发现没有 leader，则大家通过选举 - 投票选出 leader。leader 会不停的给 follower 发心跳消息，表明自己的存活状态。如果 leader 故障，那么 follower 会转换成 candidate，重新选出 leader。

### term

   从上面可以看出，哪个节点做 leader 是大家投票选举出来的，每个 leader 工作一段时间，然后选出新的 leader 继续负责。这根民主社会的选举很像，每一届新的履职期称之为一届任期，在 raft 协议中，也是这样的，对应的术语叫 _**term**_。  
![](http://oss.interviewguide.cn/img/202206222245446.png)

   term（任期）以选举（election）开始，然后就是一段或长或短的稳定工作期（normal Operation）。从上图可以看到，任期是递增的，这就充当了逻辑时钟的作用；另外，term 3 展示了一种情况，就是说没有选举出 leader 就结束了，然后会发起新的选举，后面会解释这种 _split vote_ 的情况。

### 选举过程详解

   上面已经说过，如果 follower 在 _election timeout_ 内没有收到来自 leader 的心跳，（也许此时还没有选出 leader，大家都在等；也许 leader 挂了；也许只是 leader 与该 follower 之间网络故障），则会主动发起选举。步骤如下：

*   增加节点本地的 _current term_ ，切换到 candidate 状态
*   投自己一票
*   并行给其他节点发送 _RequestVote RPCs_
*   等待其他节点的回复

   在这个过程中，根据来自其他节点的消息，可能出现三种结果

1.  收到 majority 的投票（含自己的一票），则赢得选举，成为 leader
2.  被告知别人已当选，那么自行切换到 follower
3.  一段时间内没有收到 majority 投票，则保持 candidate 状态，重新发出选举

   第一种情况，赢得了选举之后，新的 leader 会立刻给所有节点发消息，广而告之，避免其余节点触发新的选举。在这里，先回到投票者的视角，投票者如何决定是否给一个选举请求投票呢，有以下约束：

*   在任一任期内，单个节点最多只能投一票
*   候选人知道的信息不能比自己的少（这一部分，后面介绍 log replication 和 safety 的时候会详细介绍）
*   first-come-first-served 先来先得

   第二种情况，比如有三个节点 A B C。A B 同时发起选举，而 A 的选举消息先到达 C，C 给 A 投了一票，当 B 的消息到达 C 时，已经不能满足上面提到的第一个约束，即 C 不会给 B 投票，而 A 和 B 显然都不会给对方投票。A 胜出之后，会给 B,C 发心跳消息，节点 B 发现节点 A 的 term 不低于自己的 term，知道有已经有 Leader 了，于是转换成 follower。

   第三种情况，没有任何节点获得 majority 投票，比如下图这种情况：  
![](http://oss.interviewguide.cn/img/202206222245368.png)

   总共有四个节点，Node C、Node D 同时成为了 candidate，进入了 term 4，但 Node A 投了 NodeD 一票，NodeB 投了 Node C 一票，这就出现了平票 split vote 的情况。这个时候大家都在等啊等，直到超时后重新发起选举。如果出现平票的情况，那么就延长了系统不可用的时间（没有 leader 是不能处理客户端写请求的），因此 raft 引入了 randomized election timeouts 来尽量避免平票情况。同时，leader-based 共识算法中，节点的数目都是奇数个，尽量保证 majority 的出现。

3、log replication
---------------

   当有了 leader，系统应该进入对外工作期了。客户端的一切请求来发送到 leader，leader 来调度这些并发请求的顺序，并且保证 leader 与 followers 状态的一致性。raft 中的做法是，将这些请求以及执行顺序告知 followers。leader 和 followers 以相同的顺序来执行这些请求，保证状态一致。

### Replicated state machines

   共识算法的实现一般是基于复制状态机（Replicated state machines），何为复制状态机：

> If two identical, **deterministic** processes begin in the same state and get the same inputs in the same order, they will produce the same output and end in the same state.

   简单来说：**相同的初识状态 + 相同的输入 = 相同的结束状态**。引文中有一个很重要的词`deterministic`，就是说不同节点要以相同且确定性的函数来处理输入，而不要引入一下不确定的值，比如本地时间等。如何保证所有节点 `get the same inputs in the same order`，使用 replicated log 是一个很不错的注意，log 具有持久化、保序的特点，是大多数分布式系统的基石。

  因此，可以这么说，在 raft 中，leader 将客户端请求（command）封装到一个个 log entry，将这些 log entries 复制（replicate）到所有 follower 节点，然后大家按相同顺序应用（apply）log entry 中的 command，则状态肯定是一致的。

  下图形象展示了这种 log-based replicated state machine  
![](http://oss.interviewguide.cn/img/202206222245321.png)

### 请求完整流程

  当系统（leader）收到一个来自客户端的写请求，到返回给客户端，整个过程从 leader 的视角来看会经历以下步骤：

*   leader append log entry
*   leader issue AppendEntries RPC in parallel
*   leader wait for majority response
*   leader apply entry to state machine
*   leader reply to client
*   leader notify follower apply log

  可以看到日志的提交过程有点类似两阶段提交 (2PC)，不过与 2PC 的区别在于，leader 只需要大多数（majority）节点的回复即可，这样只要超过一半节点处于工作状态则系统就是可用的。

  那么日志在每个节点上是什么样子的呢  
![](http://oss.interviewguide.cn/img/202206222245795.png)

  不难看到，logs 由顺序编号的 log entry 组成 ，每个 log entry 除了包含 command，还包含产生该 log entry 时的 leader term。从上图可以看到，五个节点的日志并不完全一致，raft 算法为了保证高可用，并不是强一致性，而是最终一致性，leader 会不断尝试给 follower 发 log entries，直到所有节点的 log entries 都相同。

  在上面的流程中，leader 只需要日志被复制到大多数节点即可向客户端返回，一旦向客户端返回成功消息，那么系统就必须保证 log（其实是 log 所包含的 command）在任何异常的情况下都不会发生回滚。这里有两个词：commit（committed），apply(applied)，前者是指日志被复制到了大多数节点后日志的状态；而后者则是节点将日志应用到状态机，真正影响到节点状态。

> The leader decides when it is safe to apply a log entry to the state machines; such an entry is called committed. Raft guarantees that committed entries are durable and will eventually be executed by all of the available state machines. A log entry is committed once the leader that created the entry has replicated it on a majority of the servers

4、safety
------

  在上面提到只要日志被复制到 majority 节点，就能保证不会被回滚，即使在各种异常情况下，这根 leader election 提到的选举约束有关。在这一部分，主要讨论 raft 协议在各种各样的异常情况下如何工作的。

  衡量一个分布式算法，有许多属性，如

*   safety：nothing bad happens,
*   liveness： something good eventually happens.

  在任何系统模型下，都需要满足 safety 属性，即在任何情况下，系统都不能出现不可逆的错误，也不能向客户端返回错误的内容。比如，raft 保证被复制到大多数节点的日志不会被回滚，那么就是 safety 属性。而 raft 最终会让所有节点状态一致，这属于 liveness 属性。

  raft 协议会保证以下属性  
![](http://oss.interviewguide.cn/img/202206222245235.png)

### Election safety

  选举安全性，即任一任期内最多一个 leader 被选出。这一点非常重要，在一个复制集中任何时刻只能有一个 leader。系统中同时有多余一个 leader，被称之为脑裂（brain split），这是非常严重的问题，会导致数据的覆盖丢失。在 raft 中，两点保证了这个属性：

*   一个节点某一任期内最多只能投一票；
*   只有获得 majority 投票的节点才会成为 leader。

  因此，**某一任期内一定只有一个 leader**。

### log matching

  很有意思，log 匹配特性， 就是说如果两个节点上的某个 log entry 的 log index 相同且 term 相同，那么在该 index 之前的所有 log entry 应该都是相同的。如何做到的？依赖于以下两点

*   If two entries in different logs have the same index and term, then they store the same command.
*   If two entries in different logs have the same index and term, then the logs are identical in all preceding entries.

  首先，leader 在某一 term 的任一位置只会创建一个 log entry，且 log entry 是 append-only。其次，consistency check。leader 在 AppendEntries 中包含最新 log entry 之前的一个 log 的 term 和 index，如果 follower 在对应的 term index 找不到日志，那么就会告知 leader 不一致。

  在没有异常的情况下，log matching 是很容易满足的，但如果出现了 node crash，情况就会变得负责。比如下图  
![](http://oss.interviewguide.cn/img/202206222245788.png)

  **注意**：上图的 a-f 不是 6 个 follower，而是某个 follower 可能存在的六个状态

  leader、follower 都可能 crash，那么 follower 维护的日志与 leader 相比可能出现以下情况

*   比 leader 日志少，如上图中的 ab
*   比 leader 日志多，如上图中的 cd
*   某些位置比 leader 多，某些日志比 leader 少，如 ef（多少是针对某一任期而言）

  当出现了 leader 与 follower 不一致的情况，leader 强制 follower 复制自己的 log

> To bring a follower’s log into consistency with its own, the leader must find the latest log entry where the two logs agree, delete any entries in the follower’s log after that point, and send the follower all of the leader’s entries after that point.

  leader 会维护一个 nextIndex[] 数组，记录了 leader 可以发送每一个 follower 的 log index，初始化为 eader 最后一个 log index 加 1， 前面也提到，leader 选举成功之后会立即给所有 follower 发送 AppendEntries RPC（不包含任何 log entry， 也充当心跳消息）, 那么流程总结为：

> s1 leader 初始化 nextIndex[x] 为 leader 最后一个 log index + 1  
> s2 AppendEntries 里 prevLogTerm prevLogIndex 来自 logs[nextIndex[x] - 1]  
> s3 如果 follower 判断 prevLogIndex 位置的 log term 不等于 prevLogTerm，那么返回 False，否则返回 True  
> s4 leader 收到 follower 的回复，如果返回值是 False，则 nextIndex[x] -= 1, 跳转到 s2. 否则  
> s5 同步 nextIndex[x] 后的所有 log entries

### leader completeness vs elcetion restriction

  leader 完整性：如果一个 log entry 在某个任期被提交（committed），那么这条日志一定会出现在所有更高 term 的 leader 的日志里面。这个跟 leader election、log replication 都有关。

*   一个日志被复制到 majority 节点才算 committed
*   一个节点得到 majority 的投票才能成为 leader，而节点 A 给节点 B 投票的其中一个前提是，B 的日志不能比 A 的日志旧。下面的引文指处了如何判断日志的新旧

> voter denies its vote if its own log is more up-to-date than that of the candidate.

> If the logs have last entries with different terms, then the log with the later term is more up-to-date. If the logs end with the same term, then whichever log is longer is more up-to-date.

  上面两点都提到了 majority：commit majority and vote majority，根据 Quorum，这两个 majority 一定是有重合的，因此被选举出的 leader 一定包含了最新的 committed 的日志。

  raft 与其他协议（Viewstamped Replication、mongodb）不同，raft 始终保证 leade 包含最新的已提交的日志，因此 leader 不会从 follower catchup 日志，这也大大简化了系统的复杂度。

5、corner case
-----------

stale leader

  raft 保证 Election safety，即一个任期内最多只有一个 leader，但在网络分割（network partition）的情况下，**可能会出现两个 leader，但两个 leader 所处的任期是不同的**。如下图所示  
![](http://oss.interviewguide.cn/img/202206222245777.png)

  系统有 5 个节点 ABCDE 组成，在 term1，Node B 是 leader，但 Node A、B 和 Node C、D、E 之间出现了网络分割，因此 Node C、D、E 无法收到来自 leader（Node B）的消息，在 election time 之后，Node C、D、E 会分期选举，由于满足 majority 条件，Node E 成为了 term 2 的 leader。因此，在系统中貌似出现了两个 leader：term 1 的 Node B， term 2 的 Node E, Node B 的 term 更旧，但由于无法与 Majority 节点通信，NodeB 仍然会认为自己是 leader。

  在这样的情况下，我们来考虑读写。

  首先，如果客户端将请求发送到了 NodeB，NodeB 无法将 log entry 复制到 majority 节点，因此不会告诉客户端写入成功，这就不会有问题。

  对于读请求，stale leader 可能返回 stale data，比如在 read-after-write 的一致性要求下，客户端写入到了 term2 任期的 leader Node E，但读请求发送到了 Node B。如果要保证不返回 stale data，leader 需要 check 自己是否过时了，办法就是与大多数节点通信一次，这个可能会出现效率问题。另一种方式是使用 lease，但这就会依赖物理时钟。

  从 raft 的论文中可以看到，leader 转换成 follower 的条件是收到来自更高 term 的消息，如果网络分割一直持续，那么 stale leader 就会一直存在。而在 raft 的一些实现或者 raft-like 协议中，leader 如果收不到 majority 节点的消息，那么可以自己 step down，自行转换到 follower 状态。

### State Machine Safety

  前面在介绍 safety 的时候有一条属性没有详细介绍，那就是 State Machine Safety：

> State Machine Safety: if a server has applied a log entry at a given index to its state machine, no other server will ever apply a different log entry for the same index.

  如果节点将某一位置的 log entry 应用到了状态机，那么其他节点在同一位置不能应用不同的日志。简单点来说，所有节点在同一位置（index in log entries）应该应用同样的日志。但是似乎有某些情况会违背这个原则：  
![](http://oss.interviewguide.cn/img/202206222245596.png)

  上图是一个较为复杂的情况。在时刻 (a), s1 是 leader，在 term2 提交的日志只赋值到了 s1 s2 两个节点就 crash 了。在时刻（b), s5 成为了 term 3 的 leader，日志只赋值到了 s5，然后 crash。然后在(c) 时刻，s1 又成为了 term 4 的 leader，开始赋值日志，于是把 term2 的日志复制到了 s3，此刻，可以看出 term2 对应的日志已经被复制到了 majority，因此是 committed，可以被状态机应用。不幸的是，接下来（d）时刻，s1 又 crash 了，s5 重新当选，然后将 term3 的日志复制到所有节点，这就出现了一种奇怪的现象：被复制到大多数节点（或者说可能已经应用）的日志被回滚。

  究其根本，是因为 term4 时的 leader s1 在（C）时刻提交了之前 term2 任期的日志。为了杜绝这种情况的发生：

> **Raft never commits log entries from previous terms by counting replicas**.  
> Only log entries from the leader’s current term are committed by counting replicas; once an entry from the current term has been committed in this way, then all prior entries are committed indirectly because of the Log Matching Property.

  也就是说，某个 leader 选举成功之后，不会直接提交前任 leader 时期的日志，而是通过提交当前任期的日志的时候 “顺手” 把之前的日志也提交了，具体怎么实现了，在 log matching 部分有详细介绍。那么问题来了，如果 leader 被选举后没有收到客户端的请求呢，论文中有提到，在任期开始的时候发立即尝试复制、提交一条空的 log

> Raft handles this by having each leader commit a blank no-op entry into the log at the start of its term.

  因此，在上图中，不会出现（C）时刻的情况，即 term4 任期的 leader s1 不会复制 term2 的日志到 s3。而是如同 (e) 描述的情况，通过复制 - 提交 term4 的日志顺便提交 term2 的日志。如果 term4 的日志提交成功，那么 term2 的日志也一定提交成功，此时即使 s1crash，s5 也不会重新当选。

### leader crash

  follower 的 crash 处理方式相对简单，leader 只要不停的给 follower 发消息即可。当 leader crash 的时候，事情就会变得复杂。在[这篇文章](http://www.cnblogs.com/mindwind/p/5231986.html)中，作者就给出了一个更新请求的流程图。  
![](http://oss.interviewguide.cn/img/202206222245472.png)  	我们可以分析 leader 在任意时刻 crash 的情况，有助于理解 raft 算法的容错性。

6、总结
==

  raft 将共识问题分解成两个相对独立的问题，leader election，log replication。流程是先选举出 leader，然后 leader 负责复制、提交 log（log 中包含 command）

  为了在任何异常情况下系统不出错，即满足 safety 属性，对 leader election，log replication 两个子问题有诸多约束

leader election 约束：

*   同一任期内最多只能投一票，先来先得
*   选举人必须比自己知道的更多（比较 term，log index）

log replication 约束：

*   一个 log 被复制到大多数节点，就是 committed，保证不会回滚
*   leader 一定包含最新的 committed log，因此 leader 只会追加日志，不会删除覆盖日志
*   不同节点，某个位置上日志相同，那么这个位置之前的所有日志一定是相同的
*   Raft never commits log entries from previous terms by counting replicas.

  本文是在看完 raft 论文后自己的总结，不一定全面。个人觉得，如果只是相对 raft 协议有一个简单了解，看这个[动画演示](http://thesecretlivesofdata.com/raft/)就足够了，如果想深入了解，还是要看论文，论文中 Figure 2 对 raft 算法进行了概括。最后，还是找一个实现了 raft 算法的系统来看看更好。
