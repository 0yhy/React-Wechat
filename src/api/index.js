//包含了n个接口请求的函数
//函数返回值类型为promise
import ajax from "./ajax";


//注册接口
export const reqRegister = (user) => ajax("http://localhost:1027/register", "POST", user);
//登录接口
export const reqLogin = (user) => ajax("http://localhost:1027/login", "POST", user);
//通讯录接口
export const reqContact = () => ajax("http://localhost:1027/contact", "GET");
//获取消息列表
export const reqChatMsgList = () => ajax("http://localhost:1027/msglist", "GET");
//修改消息为已读
export const reqReadMsg = (from) => ajax("http://localhost:1027/readmsg", "POST", {from});
//获取用户信息
export const reqUser = () => ajax("http://localhost:1027/user");