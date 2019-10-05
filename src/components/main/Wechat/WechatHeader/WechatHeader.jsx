import React from "react";
import css from "./WechatHeader.module.scss"

export default class WechatHeader extends React.Component {
    render() {
        return <div className={css.header}>
            <h2>微信(1027)</h2>
            <img src={require("./../../../../assets/wechat_header/search.svg")} alt="" width="20px"></img>
            <img src={require("./../../../../assets/wechat_header/add.svg")} alt="" width="20px"></img>
        </div>
    }
}