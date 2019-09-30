import React from "react";
import css from "./Footer.module.scss"

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className={css.footer} >
            <span className={css.box} onClick={this.switchCurrent}>
                <span><img src={require("./../../assets/chat.svg")} width="20px" alt=""/>微信</span>
            </span>
            <span className={css.box}>
                <span><img src={require("./../../assets/contact.svg")} width="20px" alt=""/>通讯录</span>
            </span>
            <span className={css.box}>
                <span><img src={require("./../../assets/discovery.svg")} width="20px" alt=""/>发现</span>
            </span>
            <span className={css.box}>
                <span><img src={require("./../../assets/me.svg")} width="20px" alt=""/>我</span>
            </span>         
        </div>
    }

    switchCurrent = (event) => {
        event.stopPropagation();
        console.log(event.target);
    }
}