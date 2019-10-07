import { combineReducers } from "redux";
import { AUTH_SUCCESS, ERR_MSG, RECEIVE_USER_LIST, RECEIVE_MSG, RECEIVE_MSG_LIST, RECEIVE_USER, RECEIVE_CIRCLE } from "./action-types";

//包含多个reducer函数
//根据老的state和指定的action返回新的state

const initUser = {
    //后台返回数据时不会返回密码，因此不需要password
    username:   "",
    msg:        "",//存储错误提示信息 
    redirectTo: "",//指定重定向的路由路径
}
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...action.data, redirectTo: "/wechat"};//用action.data覆盖掉原来的值;重定向默认页面
        case ERR_MSG:
            return { ...state, msg: action.data };
        case RECEIVE_USER:
            return action.data;
        default:
            return state;
    }
}

const initUserList = [];
function userList(state = initUserList, action) {
    switch (action.type) {
        case RECEIVE_USER_LIST:
            return action.data;
        default:
            return state;
    }
}

const initChat = {
    users:          {},//所有用户信息的对象 属性名：userid；属性值{username}
    chatMsgs:       [],
    unReadCount:    0//总未读消息数
}
function chat(state = initChat, action) {
    const chatMsg = action.data;
    switch (action.type) {
        case RECEIVE_MSG:
            return {
                users:      state.users,
                chatMsgs:   [...state.chatMsgs, chatMsg],
                unReadCount:0
            };
        case RECEIVE_MSG_LIST:
            const {users, chatMsgs} = action.data;
            return {
                users,
                chatMsgs,
                unReadCount: 0
            };
        default:
            return state;
    }
}

const initCircle = {
    users:          {},
    circleMsgs:     [],
}
function circle(state = initCircle, action) {
    // const circleMsg = action.data;
    // console.log(state.);
    switch (action.type) {
        case RECEIVE_CIRCLE:
            const {users, circleMsgs} = action.data;
            return {
                // users:      state.users,
                // circleMsgs: [...state.circleMsgs, circleMsg],
                users,
                circleMsgs     
            }
        default:
            return state;
    }
}

export default combineReducers({
    user, userList, chat, circle
})
//向外暴露状态的结构：{user: {}, userList: [], chat{}}