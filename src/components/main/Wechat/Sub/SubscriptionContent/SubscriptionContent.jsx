import React from "react";
import css from "./SubscriptionContent.module.scss";
import imgs from "../../../../../assets/subscriptions/img";

const MAX_ESSAY_NUM = 2;

export default class SubscriptionContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isfold:            true,
        }
    }
    render() {
        let essayList;
        if(this.props.essayNum === 1) essayList = this.props.extract;
        else {
            essayList = this.props.extract.slice(0, this.state.isfold ? MAX_ESSAY_NUM : this.props.essayNum);
        }
        console.log(essayList);
        return <div className={css.items}>
            <div className={css.header}>
                <img src={imgs["img" + this.props.id]} alt="" width="25px"/>
                <span>{this.props.title}</span>
            </div>
            {essayList.map((item) => {
                    return <div className={css.content}>
                    {item}
                </div>})}
        </div>
    }
}
