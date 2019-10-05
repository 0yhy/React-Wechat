//包含了n个接口请求的函数
//函数返回值类型为promise
import ajax from "./ajax";

//注册接口
export const reqRegister = (user) => ajax("http://localhost:1027/register", user, "POST");
//登录接口
export const reqLogin = (user) => ajax("/login", user, "POST");
//更新用户接口
export const updateUser = (user) => ajax("./update", user, "POST");