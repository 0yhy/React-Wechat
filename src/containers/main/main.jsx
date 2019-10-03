import React from "react";
import {Switch, Route} from "react-router-dom";
//import components
import Wechat from "../../components/Wechat/Wechat";
import Contact from "../../components/Contact/Contact";
import Discovery from "../../components/Discovery/Discovery";
import Me from "../../components/Me/Me";
import Footer from "../../components/Footer/Footer";
import ChatPage from "../../components/Wechat/ChatPage/ChatPage";


export default class Main extends React.Component {
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


    render() {
        const path = this.props.location.pathname;
        const currentNav = this.navList.find(nav => nav.path === path);//获取当前的nav
        return <div>
             <Switch>
                {
                    this.navList.map(nav => <Route path={nav.path} component={nav.component}></Route>)
                }
             </Switch>
             <Route path="/chat/:user_id" component={ChatPage}></Route>
             {/*如果当前的path和我们已有的path相等，那么显示footer，否则不显示 */}
             {currentNav ? <Footer></Footer> : null}
        </div>
    }
}