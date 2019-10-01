## Wechat

* MessageList

## Address

## Discovery

## Me



# 20190930

### 怎样用`css`改变图标颜色？

在`footer`中需要实现点击不同栏目改变图标颜色的功能，直接切换图片过于麻烦

* 方案一：使用`font awesome`字体图标
* 方案二：使用`css3`滤镜`filter`中的`drop-shadow`属性

在这里我使用了方法二，对`png`与`svg`图片均适用，其原理为：

**对于图标而言，我们施加一个不带模糊的投影，那么相当于生成了另一个颜色的图标**

**我们将原始图标应藏在容器外，而投影图标在容器中间**

### 怎样点击父元素时不会触发子元素的`click`事件？

使用`currentTarget`即可

### 导入图片的注意事项

在`react` `img`标签中导入图片有两种方法

1. `import`方法

   ```
   import imgURL from "";
   <img src={}>
   ```

2. `require`方法

   ```
   <img src={require("")}
   ```

**需要注意的是，`require`里只能写字符串**，不能写变量或者是函数