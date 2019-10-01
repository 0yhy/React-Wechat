import React from "react";
import WechatHeader from "./WechatHeader/WechatHeader"
import MessageList from "./MessageList/MessageList"

export default class Wechat extends React.Component {
    constructor(props) {
        super(props);
    }    
    render() {
        return <div>
            <WechatHeader></WechatHeader>
            <MessageList></MessageList>
        </div>
    }
}