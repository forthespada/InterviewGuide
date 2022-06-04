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

<div align="center">
  <a href="/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子">
      <img src="https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205222116157.png">
  </a></div>


> 如果你想在校招中顺利拿到更好的offer，阿秀建议你多看看<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[前人的经验](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.md)</font> ，比如<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[准备](/notes/05-xiustar/02-campus_prepare/02-01-校招重要时间点科普.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[简历](/notes/05-xiustar/03-resume/01-00-简历开篇词.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[实习](/notes/05-xiustar/04-school_practice/20220320-从公司角度来看，为什么要招实习生.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[上岸总结](/notes/05-xiustar/05-campus_recruitment/2020-12-16-双非渣硕的秋招之路总结（已拿抖音研发岗SP）.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[offer选择](/notes/05-xiustar/06-offer/01-offer_choose.md)</font> 、<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[也欢迎来一起参加秋招打卡活动](/notes/05-xiustar/01-xiustar_reading_guide/01-introduce.html#阿秀组建了一个校招学习圈子)</font> 等；如果你是计算机小白，学习/转行/校招路上感到迷茫或者需要帮助，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此联系阿秀](/notes/08-other/02-question.md#_4、阿秀-如何才能联系到你)</font>；免费分享阿秀个人学习计算机以来的收集到的好资源，<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此白嫖](/notes/07-resources/01-free/01-introduce.md)</font>；如果你需要《阿秀的学习笔记》网站中求职相关知识点的**PDF版本**的话，可以<font style="font-weight:bold; color:#4169E1;text-decoration:underline;">[点此下载](/notes/08-other/02-question.md#_5、如何下载阿秀的学习笔记内容pdf版本)</font> 





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

