import React from "react";
import Footer from "./components/Footer/Footer";
import Wechat from "./components/Wechat/Wechat"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <div>
            <Wechat></Wechat>
            <Footer></Footer>
        </div>
    }
}