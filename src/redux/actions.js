//包含多个action creator
//同步action & 异步action
import {reqRegister, reqLogin, reqContact, reqChatMsgList, reqUser, reqCircleList} from "../api/index";
import {AUTH_SUCCESS, ERR_MSG, RECEIVE_USER_LIST, RECEIVE_MSG_LIST, RECEIVE_MSG, RECEIVE_USER, RECEIVE_CIRCLE} from "./action-types"
import io from "socket.io-client";

//单例对象：调用多次io(...)命令，但只创建一个socket对象
function initIO(dispatch, userid) {
    //判断socket是否存在
    if(!io.socket) {
        //创建socket并保存进io中
        io.socket = io("ws://localhost:1027");
    }
    io.socket.on("receiveMsg", function(chatMsg) {
        console.log("客户端接收服务器发送的消息", chatMsg);
        //只有与当前用户有关的消息，才分发同步action保存消息
        if(userid === chatMsg.from || userid === chatMsg.to) {
            dispatch(receiveMsg(chatMsg));
        }
    })
    io.socket.on("receveCircle", function(circleMsg) {
        console.log("客户端收到了circle！！");
        dispatch(receiveCircle(circleMsg));
    })
}

//授权成功的同步action
export const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user});
//错误提示信息的同步action
export const errMsg = (msg) => ({type: ERR_MSG, data: msg});
//接收联系人的同步action
export const receiveUserList = (userList) =>({type: RECEIVE_USER_LIST, data: userList});
//接受消息列表的同步action
export const receiveMsgList = ({users, chatMsgs}) => ({type: RECEIVE_MSG_LIST, data: {users, chatMsgs}});
//接收用户的同步action
export const receiveUser = (user) => ({type:RECEIVE_USER, data :user});
//接受一个消息
export const receiveMsg = (chatMsg) => ({type:RECEIVE_MSG, data:chatMsg});
//接受朋友圈
export const receiveCircle = (circleMsg) => ({type:RECEIVE_CIRCLE, data:circleMsg});

//注册异步action
export const register = (user) => {
    const {username, password, password1} = user;//在register.jsx中，state中所有的数据都被传过来了，但是我们在发送请求时不需要用到重复密码
    //做表单的前台检查，如果密码不一致，return一个errMsg的同步action
    if(!username) {
        return errMsg("用户名不能为空！")
    }
    else if(password !== password1) {
        return errMsg("密码不一致！")
    }
    //如果表单输入数据合法，返回一个ajax请求的异步action函数
    return async dispatch => {
        //发送注册的异步ajax请求
        const response = await reqRegister({username, password});
        const result = response.data;
        if(result.code === 0) {
            //注册成功，调用getMsgList，获取消息列表
            getMsgList(dispatch, result.data._id);
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
        console.log(response);
        const result = response.data;
        if(result.code === 0) {
            getMsgList(dispatch, result.data._id);
            //分发成功的action
            dispatch(authSuccess(result.data));
        }
        else {
            //分发失败的action
            dispatch(errMsg(result.msg));
        }
    }
}

//获取联系人的异步action
export const getUserList = () => {
    return async dispatch => {
        const response = await reqContact();
        const result = response.data;
        if(result.code === 0) {
            dispatch(receiveUserList(result.data))
        }
    }
}

//异步获取消息列表数据
async function getMsgList(dispatch, userid) {
    //登陆成功，那么初始化IO
    initIO(dispatch, userid);
    const response = await reqChatMsgList();
    const result = response.data;
    if(result.code === 0 ) {
        const {users, chatMsgs} = result.data;
        //分发同步action
        dispatch(receiveMsgList({users, chatMsgs}))
    }
} 

export const getCircleList = () => {
    return async dispatch => {
        const response = await reqCircleList();
        const result = response.data;
        // console.log(result);
        if(result.code === 0) {
            dispatch(receiveCircle(result.data));
        }
    }
}
export const sendCircle = ({user, content}) => {
    return dispatch => {
        io.socket.emit("sendCircle", {user, content});
    }
}

//发送消息的异步action
export const sendMsg = ({from, to, content}) => {
    return dispatch => {
        console.log("发送消息", {from, to, content});
        io.socket.emit("sendMsg", {from, to, content});
    }
}

export const getUser = () => {
    return async dispatch => {
        const response = await reqUser();
        const result = response.data;
        if(result.code === 0) {
            getMsgList(dispatch, result.data._id);
            dispatch(receiveUser(result.data));
        }
    }
}