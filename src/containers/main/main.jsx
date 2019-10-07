import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Cookies from "js-cookie";
//import components
import Wechat from "../../components/main/Wechat/Wechat";
import Contact from "../Contact/Contact";
import Discovery from "../../components/main/Discovery/Discovery";
import Me from "../../components/main/Me/Me";
import Footer from "../../components/main/Footer/Footer";
import ChatPage from "../../containers/ChatPage/ChatPage";
import Sub from "../../components/main/Wechat/Sub/Sub";
import Login from "../login/login";

import {getUser} from "../../redux/actions";



class Main extends React.Component {
    navList = [
        {
            path:               "/wechat",
            component:           Wechat,
            title:              "微信",
        },
        {
            path:               "/contact",
            component:           Contact,
            title:              "通讯录",
        },
        {
            path:               "/discovery",
            component:           Discovery,
            title:              "发现",
        },
        {
            path:               "/me",
            component:           Me,
            title:              "我",
        }
    ]
    
    componentDidMount() {
        const userid = Cookies.get("userid");
        const {_id} = this.props.user;
        if(userid && !_id) {
            this.props.getUser();
        }
    }

    render() {
        //读取cookie中的userid
            //如果没有userid，自动重定向登录界面
            //如果有userid，那么读取redux中的user状态
                //如果user没有_id，返回null
                //如果user有_id，那么显示请求路径对应的界面
        const userid = Cookies.get("userid");
        if(!userid) {
            return <Redirect to="/login"></Redirect>
        }
        // else {
        //     const {user} = this.props;
        //     console.log(user);
        //     if(!user._id) {
        //         return null;
        //     }
        //     else {
        //         // const pathname = this.props.location.pathname;
        //         // return <Redirect to={pathname}></Redirect>
        //     }
        // }
    
        const path = this.props.location.pathname;
        const currentNav = this.navList.find(nav => nav.path === path);//获取当前的nav
        return <div>
             <Switch>
                {
                    this.navList.map(nav => <Route path={nav.path} component={nav.component}></Route>)
                }
             </Switch>
             {/* <Route path="/" component={Wechat}></Route> */}
             <Route path="/chat/:user_id" component={ChatPage}></Route>
             <Route path="/sub" component={Sub}></Route>
             {/*如果当前的path和我们已有的path相等，那么显示footer，否则不显示 */}
             {currentNav ? <Footer></Footer> : null}
        </div>
    }
}

export default connect(
    state => ({user: state.user}),{getUser}
)(Main)

/*
实现自动登录
    1) 如果cookie中有userid，那么发送请求获取user
    2) 如果cookie中没有userid，那么进入login界面
*/