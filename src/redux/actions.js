//包含多个action creator
//同步action & 异步action
import {reqRegister, reqLogin} from "../api/index";
import {AUTH_SUCCESS, ERR_MSG} from "./action-types"

//授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user});
//错误提示信息的同步action
const errMsg = (msg) => ({type: ERR_MSG, data: msg});

//注册异步action
export const register = (user) => {
    const {username, password0, password1} = user;//在register.jsx中，state中所有的数据都被传过来了，但是我们在发送请求时不需要用到重复密码
    //做表单的前台检查，如果密码不一致，return一个errMsg的同步action
    if(!username) {
        return errMsg("用户名不能为空！")
    }
    else if(password0 !== password1) {
        return errMsg("密码不一致！")
    }
    //如果表单输入数据合法，返回一个ajax请求的异步action函数
    return async dispatch => {
        //发送注册的异步ajax请求
        const response = await reqRegister({username, password0});
        console.log(response);
        const result = response.data;
        if(result.code === 0) {
            //分发成功的action
            dispatch(authSuccess(result.data));
        }
        else {
            //分发失败的action
            dispatch(errMsg(result.msg));
        }
    }
}

//登录异步action
export const login = (user) => {
    const {username, password} = user;
    //做表单的前台检查，如果密码不一致，return一个errMsg的同步action
    if(!username) {
        return errMsg("用户名不能为空！")
    }
    else if(!password) {
        return errMsg("密码不能为空！")
    }
    //如果表单输入数据合法，返回一个ajax请求的异步action函数
    return async dispatch => {
        const response = await reqLogin(user);
        const result = response.data;
        if(result.code === 0) {
            //分发成功的action
            dispatch(authSuccess(result.data));
        }
        else {
            //分发失败的action
            dispatch(errMsg(result.msg));
        }
    }
}