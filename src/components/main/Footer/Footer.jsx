import React from "react";
import css from "./Footer.module.scss";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        let currentpath = window.location.hash;//  #/wechat
        let spans = document.getElementsByClassName(css.box);
        for(let i = 0; i < spans.length; i++) {
            spans[i].children[0].setAttribute("class", "");
        }
        document.getElementById(currentpath).setAttribute("class", css.current);
        console.log("hello")
    }
    render() {
        return <div className={css.footer} >
            <a href="#/wechat">
                <span className={css.box} onClick={this.switchCurrent} >
                    <span id="#/wechat"><img src={require("../../../assets/chat.svg")} width="20px" alt=""/>微信</span>
                </span>
            </a>
            <a href="#/contact">
                <span className={css.box} onClick={this.switchCurrent}>
                    <span id="#/contact"><img src={require("../../../assets/contact.svg")} width="20px" alt=""/>通讯录</span>
                </span>
            </a>
            <a href="#/discovery">
                <span className={css.box} onClick={this.switchCurrent}>
                    <span id="#/discovery"><img src={require("../../../assets/discovery.svg")} width="20px" alt=""/>发现</span>
                </span>
            </a>
            <a href="#/me">
                <span className={css.box} onClick={this.switchCurrent}>
                    <span id="#/me"><img src={require("../../../assets/me.svg")} width="20px" alt=""/>我</span>
                </span>        
            </a> 
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
