>### 注册
>
>* /register
>
>### 登录
>
>* /login
>
>### 主界面
>
>* 消息列表页
>* 聊天会话页
>* 个人中心页
>* 主界面

# 20191001

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

**需要注意的是，`require`里只能写静态的字符串**，不能写变量或者是函数

# 20191002

`发烧ing...`

# 20191003

**最终的解决方案**：

1. 另外写了一个`img.js`文件包含了所有的图片路径

   ```javascript
   export default {
       img0: require("./0.jpg"),
       img1: require("./1.jpg"),
       img2: require("./2.jpg"),
       img3: require("./3.jpg"),
       img4: require("./4.jpg"),
       img5: require("./5.jpg"),
       img6: require("./6.jpg"),
       img7: require("./7.jpg"),
       img8: require("./8.jpg"),
   }
   ```

2. 使用`import`导入该文件，可以**动态的**选择文件名

   ```javascript
   import imgs from "./../../../assets/profile/img";
   <img src={imgs["img"+this.props.id]} alt=""/>
   ```



### 超出文本宽度的内容省略

使用`ellipsis`属性

```css
overflow:		hidden;
text-overflow:	ellipsis;
```

### 关于`.module.css`需要注意的

如果在`.module.css`等文件中使用了自带的标签名指定元素样式，那么会作用于全局