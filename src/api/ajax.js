// import axios from "axios";

var Ajax = (url, getString, type) => {
    console.log("url:", url);
    console.log("str:", getString);
    let xhr;
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else {
    }
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
        else {
            console.log("readystate:", xhr.readyState);
            console.log("status", xhr.status)
        }
    }
    if(type === "GET") {
        xhr.open("GET", url + "?" + getString);
        xhr.send();
    }
    else {
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(getString);
    }
}

export default function ajax(url, data={}, type="GET") {
    let getString = "";
    if(type === "GET") {
        //data: {username:shaun, password:123}
        //要发送get请求，我们要将发送过来的json中的data拼成如下字符串的形式
        //String: username=shaun&password=123
        Object.keys(data).forEach(key => {
            getString += key + "=" + data[key] + "&" 
        })
        if(getString) {//如果得到的string不为空
            getString.slice(0, -1);//去掉最后一个&
        }

        Ajax(url, getString, "GET");

        // return axios.get(url + "?" + getString);
    }
    else {
        console.log(data)
        getString = "username=" + data.username + "password=" + data.password0;
        Ajax(url, getString, "POST");
        // return axios.post(url, data);
    }
}