---
layout:  post
category:  algorithm
title:  No17、树的子结构
tagline:  by 阿秀
tags:
    - 原创
    - 剑指offer
    - 数据结构与算法
    - 算法
    - 社招
    - 校招
    - 阿秀
excerpt: No17、树的子结构
comment: false
---

<h1 align="center">带你快速刷完67道剑指offer</h1>

<div style="border-color: #24C6DC;
            background-color: #e9f9f3;         
            margin: 1rem 0;
        padding: .25rem 1rem;
        border-left-width: .3rem;
        border-left-style: solid;
        border-radius: .5rem;
        color: inherit;">
  <p>这是四则或许对你有帮助的讯息</p>
  <p>1、👉 最近发现了一个每日推送都会最新校招咨询的<a style="text-decoration: underline" href="https://flowus.cn/ee50d5eb-3cd5-4f74-880e-95b215dd4ff2" target="_blank">《校招日程》</a>文档，包括大厂、国企、银行、事业编等信息都会定期更新，无偿分享一下。</p>  
  <p>2、😍
    免费分享阿秀个人学习计算机以来的收集到的免费资源，<a style="text-decoration: underline" href="/notes/07-resources/01-free/01-introduce.html" target="_blank">点此白嫖</a>。
  </p>
  <p>3、🚀如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看前人<a style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/npg1k81zeq4wfpyz" target="_blank">踩过的坑</a>和留下的<a style="text-decoration: underline"  target="_blank" href="https://www.yuque.com/tuobaaxiu/httmmc/gge9ppd0mbu2d3dp">经验</a>，事实上你现在遇到的大多数问题你的学长学姐师兄师姐基本都已经遇到过了。
  </p>
  <p>4、🔥 欢迎准备计算机校招的小伙伴加入我的<a  style="text-decoration: underline" href="https://www.yuque.com/tuobaaxiu/httmmc/xg0otqvc17wfx4u9" target="_blank">学习圈子</a>，一个人踽踽独行真的不如一群人报团取暖，好好走下去基本都能拿到不错的offer！如果你需要《阿秀的学习笔记》网站中📚︎校招八股文相关知识点的PDF版本的话，可以<a style="text-decoration: underline" href="/notes/08-other/02-question.html#_5、如何下载阿秀的学习笔记内容pdf版本" target="_blank">点此下载</a> 。</p>   </div>




## **No17、树的子结构**

<font style="font-weight:normal; color:#4169E1;text-decoration:underline;" target="_blank">[牛客网原题链接](https://www.nowcoder.com/practice/6e196c44c7004d15b1610b9afca8bd88?tpId=13&&tqId=11170&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking)</font>

### **题目描述**

输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）

### **示例1**

**输入**

```
{8,8,#,9,#,2,#,5},{8,9,#,2}
```

**返回值**

```
true
```

### **1、解析见[力扣-14 树 - medium - 面试题26](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)，讲得很好**

~~~cpp
    bool HasSubtreeCore(TreeNode* pRoot1, TreeNode* pRoot2){
        if(pRoot2==nullptr)  return true;
        if(pRoot1==nullptr) return false;
        if(pRoot1->val == pRoot2->val)
            return HasSubtreeCore(pRoot1->left,pRoot2->left) && HasSubtreeCore(pRoot1->right,pRoot2->right);
        else
            return false;
    }
    bool HasSubtree(TreeNode* pRoot1, TreeNode* pRoot2)
    {
        if(pRoot1==nullptr || pRoot2==nullptr) return false;
        return HasSubtree(pRoot1->left,pRoot2) ||
               HasSubtree(pRoot1->right,pRoot2) || 
                HasSubtreeCore(pRoot1,pRoot2);
            
     }
~~~



### **二刷：**

### **1、树的题目，大多都是递归来做**

运行时间：2ms  占用内存：484k

~~~cpp
bool HasSubtreeCore(TreeNode* pRoot1, TreeNode* pRoot2){
        
        if(pRoot2 == nullptr) return true;//p2为空 ，那么P1为什么都是相等的了
        if(pRoot1 == nullptr ) return false;//如果p2不为空，但是p1为空，那肯定是不对的
        if(pRoot1->val == pRoot2->val)//当前一样，再判断左右子树，这里必须是 与 的并列关系才行
            return HasSubtreeCore(pRoot1->left,pRoot2->left) && HasSubtreeCore(pRoot1->right,pRoot2->right);
        else{
            return false;
        }
        
    }
    bool HasSubtree(TreeNode* pRoot1, TreeNode* pRoot2)
    {

        if(pRoot1 == nullptr || pRoot2 == nullptr) return false;
        
        return HasSubtree(pRoot1->left, pRoot2) ||//有可能是我的左子树
               HasSubtree(pRoot1->right, pRoot2) || //或则是右子树
                HasSubtreeCore(pRoot1, pRoot2);//或者是当前节点就开始比较，注意这里是 或 的关系

    }
~~~

<p id = "树的子结构"></p>

