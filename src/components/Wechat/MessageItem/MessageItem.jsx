import React from "react";
import css from "./MessageItem.module.scss";
import imgs from "./../../../assets/profile/img";

import {withRouter} from "react-router-dom";//用来处理非路由组件要用到history的情况

class MessageItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <div className={css.comment} onClick={() => {this.props.history.push(`/chat/${this.props.id}`)}}>
            <img className={css.imgs} src={imgs["img"+this.props.id]} alt="" width="50px" height="50px"/>
            {/* <img src={require(`./../../../assets/profile/${this.props.id}.jpg`)}/> */}
            <span className={css.contentandtime}>
                <span className={css.content}>
                    <h2>{this.props.user}</h2>
                    <p>{this.props.content}</p>
                </span>
                <span className={css.time}>
                    <p>{this.props.time}</p>
                </span>
            </span>
        </div>
    }
}

export default withRouter(MessageItem);//用来处理非路由组件要用到history的情况