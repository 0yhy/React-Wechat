import React from "react";
import {connect} from "react-redux";
import css from "./Discovery.module.scss";
import {sendCircle, getCircleList} from "../../redux/actions";
import {withRouter} from "react-router-dom";//用来处理非路由组件要用到history的情况
// import imgs from "../../assets/profile/imgs";

class Discovery extends React.Component {
    constructor() {
        super();
        this.state = {
            content:    ""
        }
    }
    componentDidMount() {
        this.props.getCircleList();
    }
    sendCircle = () => {
        const user = this.props.user._id;
        // console.log(user);
        const content = this.state.content.trim();
        if(content) {
            this.props.sendCircle({user, content});
        }
    //     //清除输入
    //     this.setState({content:""})
    }
    render() {
        const {users, circleMsgs} = this.props.circle;
        // console.log(circleMsgs);
        
        return <div className={css.all}>
            <div className={css.header}>
                <h2>朋友圈</h2>
                <img src={require("../../assets/wechat_header/search.svg")} alt="" width="20px"></img>
                <img src={require("../../assets/wechat_header/add.svg")} alt="" width="20px" onClick={() => this.props.history.push("/sendCircle")}></img>
            </div>
            {circleMsgs.map((item, index) => <div key={index} className={css.onecircle}>
                <div className={css.circleheader}>
                    <img src={require(`../../assets/profile/${item.user}.jpg`)} alt="" width="45px"></img>
                    <p>{users[item.user].username}</p>
                </div>
                <div className={css.content}>
                    <p>{item.content}</p>
                </div>
                <div className={css.icons}>
                    <img src={require("../../assets/circle/like.svg")} alt="" width="20px"></img>
                    <img src={require("../../assets/circle/comment.svg")} alt="" width="20px"></img>
                    <img src={require("../../assets/circle/repost.svg")} alt="" width="20px"></img>
                </div>
            </div>)}
        </div>
    }
}

export default connect(
    state => ({user: state.user, circle: state.circle}),{sendCircle, getCircleList}
)(withRouter(Discovery))