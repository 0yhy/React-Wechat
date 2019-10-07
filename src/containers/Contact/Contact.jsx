import React from "react";
import ContactHeader from "./ContactHeader/ContactHeader";
import css from "./Contact.module.scss";
import {connect} from "react-redux";
import {getUserList} from "../../redux/actions";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        //获取userlist
        this.props.getUserList();
        // console.log(this.props.userList);
        //
    }

    render() {
        var data = [];
        var section = [];
        for(let i = 0; i < 27; i++) {
            section.push([])
        }
        var isdisplay = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let contacts = this.props.userList;
        for(let i = 0; i < contacts.length; i++) {
            let name = contacts[i].username.toUpperCase();
            let firstLetter = name.slice(0, 1);
            if(firstLetter < "A" || firstLetter > "Z") {
                firstLetter = "#";
                isdisplay[26] = 1;
            }
            else {
                isdisplay[firstLetter.charCodeAt() - 65] = 1;
            }
            data.push({
                name:           contacts[i].username,
                firstLetter:    firstLetter,
                _id:            contacts[i]._id
            })
        }
        data.sort(function(a, b) {
            if(a.name === undefined || b.name === undefined) {
                return 1;
            }
            if(a.name > b.name) {
                return 1;
            }
            if(a.name < b.name) {
                return -1;
            }
            return 0;
        })
        //分区
        for(let i = 0; i < data.length; i++) {
            section[data[i].firstLetter.charCodeAt() - 65].push({
                name:           data[i].name,
                _id:            data[i]._id
            })
        }
        return <div>
            <ContactHeader></ContactHeader>
            <div className={css.all}>
                <div className={css.contacts}>
                    {isdisplay.map((item, index) => item === 0 ? null : <div key={index} className={css.indexandname}>
                        <h1 className={css.indexs} id={String.fromCharCode(index + 65)}>{String.fromCharCode(index + 65)}</h1>
                        {section[index].map((i, idx) => <div key={idx} className={css.names} onClick={() => this.props.history.push(`/chat/${i._id}`)}>
                            <img src={require(`../../assets/profile/${i._id}.jpg`)} alt="" width="30px"></img>
                            {i.name}
                        </div>)}
                    </div>)}                          
                </div>
                <div className={css.letters}>
                    {isdisplay.map((item, index) => item === 0 ? null : <span key={index} onClick={() => {
                        document.querySelector("#" + String.fromCharCode(index + 65)).scrollIntoView();
                    }}>
                        {String.fromCharCode(index + 65)}
                    </span>)}
                </div>

            </div>
        </div>
    }
}

export default connect (
    state => ({userList: state.userList}),
    {getUserList}
)(Contact)