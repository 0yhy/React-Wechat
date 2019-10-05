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

>1. 解决了`wechat`页面动态加载头像的问题
>
>2. 初步完善逻辑关系、增加路由
>3. 实现常读订阅号左右滑动、最多只展示两篇订阅号文章，展开/收起待完善

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



## 20191004

### 子元素绝对定位撑不开父元素的问题

昨天发现父元素的`background-color`怎么都设置不出来，扬姐说了之后才注意子元素的定位都是`absolute`，脱离了文档流

### 后台应用

`node + express`

### 使用`postman`发送请求

1. 请求路径
2. 请求方式
3. 请求参数

![1570195943219](E:\BingYan\internship\%5CUsers%5CLucyS%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1570195943219.png)

### 后台应用怎样自动重运行

解决：下载`nodemon`包

`npm install --save-dev nodemon`

配置：在`package.json`中，用`nodemon`在`start`中代替`node`

### 数据库

**下载`mongoose`、`blueimp-md5`（用于加密）**

`npm install --save mongoose blueimp-md5`

```javascript
//1. 连接数据库
//引入mongoose
const mongoose = require("mongoose");
//使用引入模块的方法 连接指定数据库
mongoose.connect("mongodb://localhost:27017/db_test")
//获取连接对象
const conn = mongoose.connection;
//绑定连接完成的监听
conn.on("connected", function() {
    console.log("数据库连接成功，✌")
})
```

其中：

* `mongodb://`是协议
* `localhost`是本地地址
* `:27017`是`mongodb`数据库本地的**端口号**
* `db_test`是数据库名

## 20191005

### promise

`promise`是一个容器，其中保存着某个**未来才会结束的事件**（通常是一个异步操作）

`promise`是一个**对象**， 可以通过它获取异步操作的消息

`promise`提供了统一的`API`，各种异步操作都可以用同样的方法进行处理。

### redux

`redux`是什么?

> 组件化是react最擅长的方面，但是在实际开发中，随着应用复杂度地不断提升，组件之间的状态通信变得越来越多，组件之间的耦合也变得越来越重。
>
> 这时，Redux诞生了，Redux对所有“组件”说：“你们不要在一对一地写信通知状态了，我是组件群的‘通信云盘’，你们把**公共状态存在我这**，只要某个状态一改变，各组件都能取到状态的最新值。

`redux`重要的`api`

* `store`：保存公共数据的地方，一个应用只能创建一个`store`
* `action`: 改变`state`的唯一方法, 它的本质是一个对象, 必须要写一个代表`action`名称的属性 - `type`
* `reducer`: 计算`state`的函数, 接收两个参数: 当前`state`与`action`