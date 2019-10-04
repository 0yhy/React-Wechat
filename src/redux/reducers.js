import { combineReducers } from "redux";

//包含多个reducer函数
//根据老的state和指定的action返回新的state

var abcD = (state = 0, action) => {
    return state;
}

export default combineReducers({
    abcD,
    
})