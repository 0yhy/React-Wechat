import React from "react";
import css from "./ContactHeader.module.scss"
import {withRouter} from "react-router-dom";

class ContactHeader extends React.Component {
    render() {
        return <div className={css.header}>
            <h2>通讯录</h2>
            <img src={require("../../../assets/wechat_header/search.svg")} alt="" width="20px"></img>
            <img src={require("../../../assets/wechat_header/add.svg")} alt="" width="20px"></img>
        </div>
    }
}

export default withRouter(ContactHeader);