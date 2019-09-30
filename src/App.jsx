import React from "react";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <div>
            <Footer></Footer>
        </div>
    }
}