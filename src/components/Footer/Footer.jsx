import React from "react";
import css from "./Footer.module.scss"

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <div className={css.footer} >
            <span className={css.box} onClick={this.switchCurrent}>
                <span className={css.current}><img src={require("./../../assets/chat.svg")} width="20px" alt=""/>微信</span>
            </span>
            <span className={css.box} onClick={this.switchCurrent}>
                <span><img src={require("./../../assets/contact.svg")} width="20px" alt=""/>通讯录</span>
            </span>
            <span className={css.box} onClick={this.switchCurrent}>
                <span><img src={require("./../../assets/discovery.svg")} width="20px" alt=""/>发现</span>
            </span>
            <span className={css.box} onClick={this.switchCurrent}>
                <span><img src={require("./../../assets/me.svg")} width="20px" alt=""/>我</span>
            </span>         
        </div>
    }

    switchCurrent = (event) => {
        let currentspan = event.currentTarget.children[0];
        let spans = document.getElementsByClassName(css.box);
        for(let i = 0; i < spans.length; i++) {
            spans[i].children[0].setAttribute("class", "");
        }
        currentspan.setAttribute("class", css.current);
    }
}