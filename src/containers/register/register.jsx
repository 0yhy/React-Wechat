import React from "react";
import css from "./register.module.scss"

import {connect} from "react-redux";
import {register} from "../../redux/actions";//引入 注册 的异步action
import {Redirect} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:       "",             //用户名
            password:       "",             //密码
            password1:      "",             //确认密码
        }
    }
    register = () => {
        this.props.register(this.state);
    }
    render() {
        const {msg, redirectTo} = this.props.user;
        if(redirectTo) {
            return <Redirect to={redirectTo}></Redirect>
        }
        return <div className={css.register}>
            <div className={css.signup}>
                <h1>Sign Up</h1>
                {msg ? <div className={css.errmsg}>{msg}</div> : null}
                <div className={css.inputs}>
                    <input placeholder="Username" onChange={(e) => this.setState({username:e.target.value})}></input>
                    <input placeholder="Password" onChange={(e) => this.setState({password:e.target.value})}></input>
                    <input placeholder="Repeat Password" onChange={(e) => this.setState({password1:e.target.value})}></input>
                </div>

                <img src={require("../../assets/login_register/enter.svg") } alt="" width="40px" onClick={this.register}/>
                <a href="#/login"><p>Sign In</p></a>
                
            </div>
        </div>
    }
}

//包装成容器组件，传入了注册的action函数
export default connect(
    state => ({user: state.user}), {register}
)(Register)