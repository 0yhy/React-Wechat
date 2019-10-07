import React from "react";
import {connect} from "react-redux";
import css from "./SendCircle.module.scss";
import {sendCircle} from "../../../redux/actions";
// import imgs from "../../assets/profile/imgs";

class SendCircle extends React.Component {
    constructor() {
        super();
        this.state = {
            content:    ""
        }
    }
    componentDidMount() {//滑动到底部 无效？
        window.scrollTo(0, document.body.scrollHeight);
    }
    componentDidUpdate() {//滑动到底部 无效？
        window.scrollTo(0, document.body.scrollHeight);
    }
    sendCircle = () => {
        const user = this.props.user._id;
        const content = this.state.content.trim();
        if(content) {
            this.props.sendCircle({user, content});
        }
        window.history.back();
    //     //清除输入
    //     this.setState({content:""})
    }
    render() {
        return <div className={css.all}>
            <div className={css.header}>
                <img src={require("../../../assets/subscription_header/back.svg")} alt="" width="20px" onClick={() => {window.history.back()}}></img>
                <h2></h2>
                <button onClick={this.sendCircle}>发送</button>
            </div>

            <div className={css.input}>
                <textarea placeholder="你在想啥呢..." onChange={(e) => {this.setState({content: e.target.value})}} value={this.state.content}></textarea>
            </div>
        </div>
    }
}

export default connect(
    state => ({user: state.user, circle: state.circle}),{sendCircle}
)(SendCircle)