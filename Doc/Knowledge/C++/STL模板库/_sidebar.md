[返回](Doc/Knowledge/C++/README.md)

STL模板库

[1、什么是STL？](#什么是stl)

[2、解释一下什么是trivial destructor](#解释一下什么是trivialdestructor)

[3、使用智能指针管理内存资源，RAII是怎么回事？](#使用智能指针管理内存资源)

[4、迭代器：++it、it++哪个好，为什么](#迭代器itit哪个好为什么)

[5、说一下C++左值引用和右值引用](#说一下左值引用和右值引用)

[6、STL中hashtable的实现？](#hashtable的实现)

[7、简单说一下STL中的traits技法](#简单说一下traits技法)

[8、STL的两级空间配置器](#的两级空间配置器)

[9、 vector与list的区别与应用？怎么找某vector或者list的倒数第二个元素](#vector与list的区别与应用怎么找某vector或者list的倒数第二个元素)

[10、STL 中vector删除其中的元素，迭代器如何变化？为什么是两倍扩容？释放空间？](#vector删除其中的元素迭代器如何变化)

[11、Vector如何释放空间?](#如何释放空间)

[12、容器内部删除一个元素](#容器内部删除一个元素)

[13、STL迭代器如何实现](#迭代器如何实现)

[14、map、set是怎么实现的，红黑树是怎么能够同时实现这两种容器？ 为什么使用红黑树？](#set是怎么实现的红黑树)

[15、如何在共享内存上使用STL标准库？](#如何在共享内存上使用标准库)

[16、map插入方式有哪几种？](#map插入方式有哪几种)

[17、STL中unordered_map(hash_map)和map的区别，hash_map如何解决冲突以及扩容](#hashmap如何解决冲突以及扩容)

[18、vector越界访问下标，map越界访问下标？vector删除元素时会不会释放空间？](#vector越界访问下标map越界访问下标vector删除元素时会不会释放空间)

[19、map中[]与find的区别？](#map中与find的区别)

[20、 STL中list与queue之间的区别](#list与queue之间的区别)

[21、STL中的allocator、deallocator](#allocatordeallocator)

[22、STL中hash_map扩容发生什么？](#hashmap扩容发生什么)

[23、常见容器性质总结？](#常见容器性质总结)

[24、vector的增加删除都是怎么做的？为什么是1.5或者是2倍？](#vector的增加删除都是怎么做的为什么是或者是倍)

[25、说一下STL每种容器对应的迭代器](#每种容器对应的迭代器)

[26、STL中迭代器失效的情况有哪些？](#迭代器失效的情况有哪些)

[27、STL中vector的实现](#vector的实现)

[28、STL中slist的实现](#slist的实现)

[29、STL中list的实现](#list的实现)

[30、STL中的deque的实现](#deque的实现)

[31、STL中stack和queue的实现](#stack和queue的实现)

[32、STL中的heap的实现](#heap的实现)

[33、STL中的priority_queue的实现](#priorityqueue的实现)

[34、STL中set的实现？](#set的实现)

[35、STL中map的实现](#map的实现)

[36、set和map的区别，multimap和multiset的区别](#set和map的区别multimap和multiset的区别)

[37、STL中unordered_map和map的区别和应用场景](#unorderedmap和map的区别和应用场景)

[38、hashtable中解决冲突有哪些方法？](#hashtable中解决冲突有哪些方法)

