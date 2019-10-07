import React from "react";
import css from "./login.module.scss"

import { connect } from "react-redux";
import { login } from "../../redux/actions";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:       "",             //用户名
            password:       "",             //密码
        }
    }
    login = () => {
        this.props.login(this.state);
    }
    render() {
        const {msg, redirectTo} = this.props.user;
        if(redirectTo) {
            return <Redirect to={redirectTo}></Redirect>
        }
        return <div className={css.register}>
            <div className={css.signup}>
                    <h1>Sign In</h1>
                {msg ? <div className={css.errmsg}>{msg}</div> : null}
                <div className={css.inputs}>
                    <input placeholder="Username" onChange={(e) => this.setState({username:e.target.value})}></input>
                    <input placeholder="Password" onChange={(e) => this.setState({password:e.target.value})}></input>
                </div>

                <img src={require("../../assets/login_register/enter.svg")} alt="" width="40px" onClick={this.login}/>
                <a href="#/register"><p>Sign Up</p></a>
                
            </div>
        </div>
    }
}

export default connect(
    state => ({user: state.user}), {login}
)(Login)