import React from "react";
import SubscriptionHeader from "./SubscriptionHeader/SubscriptionHeader"
import Subscription from "./Subscription/Subscription";
import css from "./Sub.module.scss";

export default class ChatPage extends React.Component {
    render() {
        return <div className={css.subscription}>
            <SubscriptionHeader></SubscriptionHeader>
            <div className={css.usually}>
                <p>常读的订阅号消息</p>
                <div className={css.usually_icons}>
                    <div><img src={require("../../../../assets/subscriptions/0.jpg")} width="45px" alt=""></img><p>冰岩作坊</p></div>
                    <div><img src={require("../../../../assets/subscriptions/1.jpg")} width="45px" alt=""></img><p>小米之家</p></div>
                    <div><img src={require("../../../../assets/subscriptions/2.jpg")} width="45px" alt=""></img><p>共青团中央</p></div>
                    <div><img src={require("../../../../assets/subscriptions/3.jpg")} width="45px" alt=""></img><p>BBC英语听力</p></div>
                    <div><img src={require("../../../../assets/subscriptions/4.jpg")} width="45px" alt=""></img><p>笔吧测试室</p></div>
                    <div><img src={require("../../../../assets/subscriptions/5.jpg")} width="45px" alt=""></img><p>QQ音乐</p></div>
                </div>
            </div>
            <Subscription></Subscription>
        </div>
    }
}