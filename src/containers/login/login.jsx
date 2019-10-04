import React from "react";
import css from "./login.module.scss"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:       "",             //用户名
            password:       "",             //密码
        }
    }
    login = () => {
        console.log(this.state);
    }
    render() {
        return <div className={css.register}>
            <div className={css.signup}>
                    <h1>Sign In</h1>
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