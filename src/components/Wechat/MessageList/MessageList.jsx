import React from "react";
import MessageItem from "./../MessageItem/MessageItem";
import css from "./MessageList.module.scss";

export default class MessageList extends React.Component {
    constructor() {
        super();
        this.state = {
            message : [
                { id:0, user:"订阅号消息", content:"共青团中央：突然！两个车牌号", time:"20分钟前"},
                { id:1, user:"点点", content:"哈哈，沙发", time:"1分钟前"},
                { id:2, user:"面面", content:"哈哈，板凳", time:"2分钟前"},
                { id:3, user:"丸丸", content:"哈哈，凉席", time:"3分钟前"},
                { id:4, user:"闪闪", content:"哈哈，哈哈", time:"4分钟前"},
                { id:5, user:"闪闪", content:"哈哈，哈哈", time:"4分钟前"},
                { id:6, user:"闪闪", content:"哈哈，哈哈", time:"4分钟前"},
                { id:7, user:"闪闪", content:"哈哈，哈哈", time:"4分钟前"},
                { id:8, user:"闪闪", content:"哈哈，哈哈", time:"4分钟前"},
                { id:9, user:"闪闪", content:"哈哈，哈哈", time:"4分钟前"},
            ]
        }
    }
    render() {
        return <div className={css.messageList}>
            {this.state.message.map(item => <MessageItem {...item}></MessageItem>)}
        </div>
    }
}