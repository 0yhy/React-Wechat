import { combineReducers } from "redux";
import { AUTH_SUCCESS, ERR_MSG } from "./action-types";

//包含多个reducer函数
//根据老的state和指定的action返回新的state

const initUser = {
    //后台返回数据时不会返回密码，因此不需要password
    username:   "",
    msg:        "",//存储错误提示信息
}
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state, ...action.data };//解除原本的状态；然后用action.data覆盖掉原来的值
        case ERR_MSG:
            return { ...state, msg: action.data };
        default:
            return state;
    }
}

export default combineReducers({
    user
})