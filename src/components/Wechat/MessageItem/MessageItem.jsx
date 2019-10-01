import React from "react";
import css from "./MessageItem.module.scss"

const requireContext = require.context("./../../../assets/profile/",true, /^\.\/.*\.jpg$/);

export default class MessageItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        
        let currentImg = requireContext.keys()[this.props.id];
        console.log(typeof(currentImg))
        let imgUrl = "./../../../assets/profile/" + String(currentImg).slice(2);
        let imgURL = "./../../../assets/profile/0.jpg";
        // console.log(imgUrl);
        return <div className={css.comment}>
            <img src={imgURL} alt="" width="50px" height="50px"/>
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