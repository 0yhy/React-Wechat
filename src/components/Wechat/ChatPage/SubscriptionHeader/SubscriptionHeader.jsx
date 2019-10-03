import React from "react";
import css from "./SubscriptionHeader.module.scss"
import {withRouter} from "react-router-dom";

class SubscriptionHeader extends React.Component {
    render() {
        return <div className={css.header}>
            <img src={require("../../../../assets/subscription_header/back.svg")} alt="" width="20px" onClick={() => {window.history.back()}}></img>
            <h2>订阅号消息</h2>
            <img src={require("../../../../assets/subscription_header/search.svg")} alt="" width="20px"></img>
            <img src={require("../../../../assets/subscription_header/more.svg")} alt="" width="20px"></img>
        </div>
    }
}

export default withRouter(SubscriptionHeader);