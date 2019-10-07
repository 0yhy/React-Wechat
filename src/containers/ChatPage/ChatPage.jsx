import React from "react";
import {connect} from "react-redux";
import css from "./ChatPage.module.scss";
import {sendMsg} from "../../redux/actions";
// import imgs from "../../assets/profile/imgs";

class ChatPage extends React.Component {
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
    sendMsg = () => {
        const from = this.props.user._id;
        const to = this.props.match.params.user_id;
        const content = this.state.content.trim();
        if(content) {
            this.props.sendMsg({from, to, content})
        }
        //清楚输入
        this.setState({content:""})
    }
    render() {
        const {user} = this.props;
        const {users, chatMsgs} = this.props.chat;
        
        const my_id = user._id;
        const target_id = this.props.match.params.user_id;
        const chat_id = [my_id, target_id].sort().join("_");
        //对我和所有人的消息进行过滤：通过chat_id
        const msgs = chatMsgs.filter(msg => msg.chat_id === chat_id);
        if(!users[target_id]) {//如果还没有获取到数据，不做显示
            return null;
        }
        return <div>
            <div className={css.header}>
                <img src={require("../../assets/subscription_header/back.svg")} alt="" width="20px" onClick={() => {window.history.back()}}></img>
                <h2>{users[target_id].username}</h2>
                <img src={require("../../assets/subscription_header/more.svg")} alt="" width="20px"></img>
            </div>
            <div className={css.chatBubles}>
                {msgs.map(item => {
                    if(my_id === item.to) {//发给我的
                        return <span key={item._id} className={css.heorshe}>
                            <img className={css.profiles} src={require(`../../assets/profile/${target_id}.jpg`)} alt="" width="30px"></img>
                            <span className={css.heorshebuble}>{item.content}</span>
                        </span>
                    }
                    else {//我发的
                        return <span key={item._id} className={css.me}>
                            <span className={css.mebuble}>{item.content}</span>
                            <img className={css.profiles} src={require(`../../assets/profile/${my_id}.jpg`)} alt="" width="30px"></img>                            
                        </span>
                    }
                })}
            </div>
            <div className={css.input}>
                <input onChange={(e) => {this.setState({content: e.target.value})}} value={this.state.content}></input>
                <button onClick={this.sendMsg}>发送</button>
            </div>
        </div>
    }
}

export default connect(
    state => ({user: state.user, chat: state.chat}),{sendMsg}
)(ChatPage)