---
layout: post
category: lanuuage
title: Golang学习路线
tagline: by 阿秀
tag: [Golang，学习路线,Golang学习路线]
excerpt: 转为小白新手准备的Goplang求职版学习路线
---



这篇学习路线写完其实很久了，不过前段时间又请组内的Go后端资深研发工程师吃了一顿烤羊腿。

![](https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205052313472.png)向他请教了一些新手学习Go语言需要注意的内容，然后删减了一些不是很好的书籍(Go出的书倒是不少，可好的真的不多)，并且增加了几个不错的项目，最终润色完毕后，才有的这篇学习路线。

![听，是我的钱包在哭泣。。。](https://cdn.jsdelivr.net/gh/forthespada/mediaImage3//image/202112012147946.png)

说回正题，一转眼自己学习和使用Go语言加起来快一年了，对于这门语言，我只能说相见恨晚！

我对于这门语言真的是爱的不行，钩子又多又好用，在实际的生产编码过程中远远没有C++那么麻烦，自带的垃圾回收机制简直不要太爽。

考虑到未来几年校招中可能会出现Java、C++之外的第三门主流后端语言，也就是Golang，于是今天就给大家安排一手Golang的学习路线和资源。

虽然国内使用Go语言的公司远没有Java多，但这是一门生机勃勃的后端语言，字节跳动和腾讯率先拥抱Go语言其实就能说明一些东西了。

如果你想从事后端，但是觉得Java又臭又长，C++学起来直接劝退，那Golang绝对是你的不二之选了。

至于Python，确实不适合作为后端语言，原因不再赘述，以前已经聊过这门语言了，详情见此：



与以前给大家安排的C++学习路线类似，Golang学习路线也一共有四个阶段:

![Golang求职版学习路线](https://cdn.jsdelivr.net/gh/forthespada/mediaImage3//image/202112012147950.png)

第一阶段为计算机基础学习，第二阶段是基础语法，第三阶段是进阶编程，第四阶段是比较热门的微服务相关。

选择性的**学完前三个阶段就可以去找工作**啦，至于微服务相关，有兴趣的可以自己去学习一波。

按照我下面文章推荐的来学习，找到一份Go开发工作绝对没啥问题的。

需要注意的是文中会我推荐一些书籍或者视频，其中纸质版书籍在当当或者JD均有售，如果想要PDF电子版，可以去下面这两个仓库自行查找；

地址1：https://github.com/forthespada/CS-Books

地址2：https://gitee.com/ForthEspada/CS-Books

对应的视频在均已注明地址或者领取方式，注意看即可，好了下面就开始吧。

## 1、计算机基础

首先需要说明的是，不管是什么学习什么语言，对于计算机基础知识都是需要掌握的。

比如操作系统、计算机网络、数据结构与算法、数据库等等，对于这些内容的学习，以前我都有过说明，可以点击下面的链接自己去了解，这里就不再赘述，我们直接进入主题Golang语言的学习。

## 2、Go 语言基础

### 1、语言学习

如果你是 Go 语言零基础，或者刚入门不久，都可以顺着我的这个路径学习巩固一下。

推荐入门书籍《Go程序设计语言》或者《Go 语言学习笔记》，如果你是语言小白，没学过其余语言，那就去看《Go程序设计语言》；如果你有其余语言基础，比如Java或者C++，那就去看《Go 语言学习笔记》即可。

![小白可以看这本](https://cdn.jsdelivr.net/gh/forthespada/mediaImage3//image/202112012147000.png)



![有基础就可以看这本](https://cdn.jsdelivr.net/gh/forthespada/mediaImage3//image/202112080934795.png)

你需要做的就是跟着书籍多敲敲代码，多动手才能学会。

或者也可以直接跟我一样看视频入门也是ok的，我看的是某马的20小时入门视频，我觉得这门课程挺不错的，一共分为上中下三个部分。

![黑马Golang培训班](https://cdn.jsdelivr.net/gh/forthespada/mediaImage3//image/202112012147028.png)

言简意赅，不多BB，上来就带你实操，手底下见真章。

> 在看视频的时候我就把某马准备的教案也一起下载好了，需要的后台可以回复"Golang学习路线"获取我下载的资料。

视频地址

上：https://www.bilibili.com/video/BV1UW411x7v2

中：https://www.bilibili.com/video/BV1UW411x7Ve

下：https://www.bilibili.com/video/BV17W411W7hm

不管看完入门书籍还是跟着一起学完某马的视频，建议你去练习一下，也好加深一下印象。

推荐一个github上不错的Go单元测试仓库，这是仓库地址：https://github.com/quii/learn-go-with-tests，这是对应的gitbook链接：https://studygolang.gitbook.io/learn-go-with-tests/

直接跟着gitbook链接去练就ok了。比如下面这样：

![](https://cdn.jsdelivr.net/gh/forthespada/mediaImage3//image/202112012147486.png)

### 2、练手项目

很多人的可能都比较喜欢实操，这里也推荐两个在学完初级语言基础后可以进行实操的项目。

**starcharts**

生成一个github上的star趋势图，如下

![](https://cdn.jsdelivr.net/gh/forthespada/mediaImage3//image/202111302103632.png)





在这个项目中，你能学到最基本的网络请求，解析等等，代码量也不多，对新手比较友好。

地址：https://github.com/caarlos0/starcharts

**多人聊天室wechat-go**

不知你是否想过自己实现一个微信吗？

这个项目带你做到！这个项目成功模拟了微信网页版的登录/添加联系人/与人在线聊天等。

这个项目主要实现功能如下：

- 支持多用户(多开)
- 支持掉线后免扫码重登
- 功能以插件的形式提供，可以根据用户(比如付费情况）选择加载或者不加载某插件
- 插件编写简单, 可定制性强, 无需关心API和消息分发，二次开发极为方便
- 对于加载的插件, 使用机器人的终端用户可以通过微信聊天界面动态开启/关闭.
- 目前已提供头像(性别／年龄)识别, gif搜索, 笑话大全, "阅后即焚", 消息跨群转发, 中英互译等多个有趣插件
- 可以发送图片/文字/gif/视频/表情等多种消息
- 支持Linux/MacOSX/Windows, 树莓派也可以:)

地址：https://github.com/songtianyi/wechat-go



## 3、Go 语言进阶

一般来说，在具体了解 Go 相关语法知识之后，就需要进一步学一些比较细分的知识了。

这个时候再去看一些高级进阶书籍后就就可以去接触一些企业级开发中常用的一些框架或者中间件了，比较很知名的Gin框架以及Gorm。

### 1、语言学习

这里我推荐的《Go语言高级编程》这本书以及《Go Web 编程》。

![](https://cdn.jsdelivr.net/gh/forthespada/mediaImage3//image/202112012147365.png)



![Go Web 编程](https://cdn.jsdelivr.net/gh/forthespada/mediaImage3//image/202112012147924.png)

其中前者是一些高级用法，其中会涉及一些CGO编程以及Go汇编的知识，还有一些是RPC相关，比较杂。

建议选看，也就是不要一次性看完这本书，可以大致浏览一下，看看每章的内容有哪些，有个大致印象就行，遇到不会的再来查。

就跟我以前看《C++ Primer 中文版第五版》一样，这本书实在是太厚了，大概有800多页，前期看完一遍根本记不住，后来寒假回家后又在家撸了一遍，在实际使用过程中还是记不住，我就放弃了，直接把它当做一本字典来用，就摆在我当初读研的实验室桌子上，哪里不会再去查就是了。

不要打着完全掌握一门语言再去开始做事的想法，那样性价比实在太低。



至于第二本书《Go Web 编程》，还是建议你好好看看的，毕竟使用Go语言的基本都是从事后台开发。

整本书都是围绕一个网络论坛展开，从这个例子入手教你如何使用请求处理器、多路复用器、模板引擎、存储系统等核心组件去构建一个 Go Web 应用。

这也是你在实际生产环境中会遇到一些需求，所以这本书不要错过！



### 2、学习项目

这里提到的学习项目基本都是围绕Gin框架相关的，主要是因为文档比较齐全，官网文档都有中文，查起来也比较方便。

你可能不知道Gin框架是什么？这么跟你说吧，学习Go语言基本都逃不开Gin框架，就好像学习Java的一般也是逃不掉SSM框架一样即Spring + Spring MVC + MyBatis。

很多公司也都有基于Gin框架改良的内部框架，因此如果你有时间的话，建议从基础框架学习。

如果你是工作党，直接学你们公司内部的开源框架就可以啦。

**7DaysGolang(选做)**

这个项目的优点就是代码量不多，属于那种**麻雀虽小五脏俱全**的项目。

可以带你在 7 天时间里使用 Go 从零实现 Web 框架、分布式缓存、ORM 框架、RPC 框架等，你在前期可以学一下实现Web框架，后期有时间再去试试分布式框架或者ORM框架以及RPC框架。

地址：[github.com/geektutu/7days-golang](http://github.com/geektutu/7days-golang)



**Gin(必学)**

Gin框架很是出名，写的也很好，钩子贼多，很好用，但这并不代表我需要去研究它的源码，相反，我们只需要会用就OK啦。

你要是有大毅力者，去研究Gin的源码当然可以，可以简单看一下它的快速入门即可

快速入门链接：https://gin-gonic.com/zh-cn/docs/quickstart/



**Gorm(必学)**

Gorm是Go语言领域内比较成熟的ORM框架了，能够更好的帮你操纵数据库，进行CRUD哈哈。

这个就跟Gin框架一样，会用就OK，照着官方文档敲一遍就ok，有个大致印象，后面遇到不会的再来翻文档就是。

地址：https://gorm.io/zh_CN/



**go-gin-example(必做)**

Gin框架不需要你去仔细学，但是需要你会用，这里推荐一下煎鱼大佬的go-gin-example项目。

看这个名字就知道这个项目是干啥的，就是使用一些example带你学习Gin框架，比如带你去使用JWT进行身份校验、加上Swagger文档以及在Nginx上部署。

这个建议好好跟下来，系统走一遍，你也能对上面的Gin和Gorm的用法有更深一点的了解和认识。

地址：https://github.com/eddycjy/go-gin-example



**go-gin-api(选做)**

再给一些学有余力的小伙伴推荐一个go-api项目，go-gin-api这个项目的功能比go-gin-example更加齐全，具体来说有：

1. 支持 [rate](https://golang.org/x/time/rate) 接口限流
2. 支持 panic 异常时邮件通知
3. 支持 [cors](https://github.com/rs/cors) 接口跨域
4. 支持 [Prometheus](https://github.com/prometheus/client_golang) 指标记录
5. 支持 [Swagger](https://github.com/swaggo/gin-swagger) 接口文档生成
6. 支持 [GraphQL](https://github.com/99designs/gqlgen) 查询语言
7. 支持 trace 项目内部链路追踪
8. 支持 [pprof](https://github.com/gin-contrib/pprof) 性能剖析
9. 支持 errno 统一定义错误码
10. 支持 [zap](https://go.uber.org/zap) 日志收集
11. 支持 [viper](https://github.com/spf13/viper) 配置文件解析
12. 支持 [gorm](https://gorm.io/gorm) 数据库组件
13. 支持 [go-redis](https://github.com/go-redis/redis/v7) 组件
14. 支持 RESTful API 返回值规范
15. 支持 生成数据表 CURD、控制器方法 等代码生成器
16. 支持 [cron](https://github.com/jakecoffman/cron) 定时任务，在后台可界面配置
17. 支持 [websocket](https://github.com/gorilla/websocket) 实时通讯，在后台有界面演示
18. 支持 web 界面，使用的 [Light Year Admin 模板](https://gitee.com/yinqi/Light-Year-Admin-Using-Iframe)

地址：https://github.com/xinliangnote/go-gin-api

## 4、微服务相关

一般来说，你学完前三个基本就可以去找一份Go语言后台研发的工作了，剩下的就是在工作中慢慢学习和进步了。

不过Go语言在微服务领域也比较知名，比如GoKit、Go-Zero框架，不要每个都学，这两个选一个就ok。

推荐一本书《微服务架构设计模式》，这本书我在学校的时候就买了，不过没看完，只看了一半就已经觉得非常不错了。

![](https://cdn.jsdelivr.net/gh/forthespada/mediaImage3//image/202112012147883.png)

这本书粗看是一个设计模式的目录，细看之后就会发现在设计模式中也可以帮助你设计、实现、测试和部署基于微服务的应用程序。

比较知名的Golang微服务框架应该就是**Jupiter**了，这是斗鱼开源的面向服务治理的Golang微服务框架。

对于初学者来说应该不需要学习这个，有需要再去学即可。

地址：https://github.com/douyu/jupiter



好了，以上就是给大家安排的学习路线，资料不在多而在于精，不要贪多，把一两门学好就基本ok够用了。

需要说明的是，学习路线这种东西，每个人的基础都不一样，所以我为了尽可能的照顾大多数人，推荐的资料可能是一些入门级的，如果你有更好的推荐，欢迎你在评论区留言评论。
