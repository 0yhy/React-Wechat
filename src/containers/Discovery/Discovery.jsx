import React from "react";
import {connect} from "react-redux";
import css from "./Discovery.module.scss";
import {sendCircle, getCircleList} from "../../redux/actions";
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
        console.log(user);
        const content = this.state.content.trim();
        if(content) {
            this.props.sendCircle({user, content});
        }
    //     //清除输入
    //     this.setState({content:""})
    }
    render() {
        

        const {users, circleMsgs} = this.props.circle;
        
        console.log(circleMsgs);
        
        return <div>
            <div className={css.header}>
                <img src={require("../../assets/subscription_header/back.svg")} alt="" width="20px" onClick={() => {window.history.back()}}></img>
                <h2>朋友圈</h2>
                <img src={require("../../assets/subscription_header/more.svg")} alt="" width="20px"></img>
            </div>
            {circleMsgs.map((item, index) => <div key={index}>
                <div className={css.circleheader}>
                    <img src={require(`../../assets/profile/${item.user}.jpg`)} alt="" width="45px"></img>
                    <p>{users[item.user].username}</p>
                </div>
                <div className={css.content}>
                    <p>{item.content}</p>
                </div>
                

            </div>)}
            <div className={css.input}>
                <input onChange={(e) => {this.setState({content: e.target.value})}} value={this.state.content}></input>
                <button onClick={this.sendCircle}>发送</button>
            </div>
        </div>
    }
}

export default connect(
    state => ({user: state.user, circle: state.circle}),{sendCircle, getCircleList}
)(Discovery)