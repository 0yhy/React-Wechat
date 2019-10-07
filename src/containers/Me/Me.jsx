import React from "react";
import {connect} from "react-redux";
import css from "./Me.module.scss";
import Cookies from "js-cookie";

class Me extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    
    render() {
        const userid = Cookies.get("userid");
        console.log(this.props.user._id);
        console.log(userid);
        return <div className={css.all}>
            {/* <img src={require(`../../assets/profile/${this.props.user._id}.jpg`)} alt="" width="60px"></img> */}
            <h1>{this.props.user.username}</h1>
        </div>
    }
}

export default connect(
    state => ({user: state.user}),{}
)(Me)