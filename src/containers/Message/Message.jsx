import React from "react";
import {connect} from "react-redux";
import css from "./Message.module.scss";
import {withRouter} from "react-router-dom";//用来处理非路由组件要用到history的情况

class Message extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    getLastMsgs = (chatMsgs, userid) => {
        const lastMsgObjs = {};
        chatMsgs.forEach(msg => {
            // if(msg.to === userid && !msg.read) {
            //     msg.unReadCount = 1;
            // }
            // else {
            //     msg.unReadCount = 0;
            // }
            //获取msg的聊天id
            const chatId = msg.chat_id;
            let lastMsg = lastMsgObjs[chatId];
            if(!lastMsg) {
                lastMsgObjs[chatId] = msg;
            }
            else {
                // const unReadCount = lastMsg.unReadCount;
                //如果msg比lastMsg晚，则保存为lastMsg
                if(msg.create_time > lastMsg.create_time) {
                    lastMsgObjs[chatId] = msg;
                }
                // lastMsgObjs[chatId].unReadCount = unReadCount + msg.unReadCount;
            }
        })
        //将所有的lastMsg变为数组
        const lastMsgs = Object.values(lastMsgObjs)
        //排序
        lastMsgs.sort(function(a, b) {
            return b.create_time - a.create_time;
        })

        return lastMsgs;
    }
    render() {
        const {user} = this.props;
        const {users, chatMsgs} = this.props.chat;

        const lastMsgs = this.getLastMsgs(chatMsgs, user._id);
        
        return <div className={css.messageList}>
            <div className={css.comment} onClick={() => {this.props.history.push("/sub")}}>
                <img src={require("../../assets/profile/0.jpg")} alt="" width="50px"/>
                <span className={css.contentandtime}>
                    <span className={css.content}>
                        <h2>订阅号消息</h2>
                        <p>共青团中央：突然！两个车牌号上热搜 ，知道原因后网友爆哭...</p>
                    </span>
                    <span className={css.time}>
                        {/* <p>{item.create_time}</p> */}
                    </span>
                </span>
            </div>
            {
               lastMsgs.map(item => <div key={item._id} className={css.comment} onClick={() => {this.props.history.push(`/chat/${item.to === user._id ? item.from : item.to}`)}}>
               <img src={require(`../../assets/profile/${item.to === user._id ? item.from : item.to}.jpg`)} alt="" width="50px"/>
               <span className={css.contentandtime}>
                   <span className={css.content}>
                       <h2>{users[item.to === user._id ? item.from : item.to].username}</h2>
                       <p>{item.content}</p>
                   </span>
                   <span className={css.time}>
                       {/* <p>{item.create_time}</p> */}
                   </span>
               </span>
           </div>) }
        </div>
        
    }
}

export default connect(
    state => ({user: state.user, chat: state.chat}),{}
)(withRouter(Message))