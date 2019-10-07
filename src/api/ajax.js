import axios from "axios";

export default function ajax(url,  type="GET", data={}) {
    let getString = "";
    if(type === "GET") {
        // console.log(url, data)
        //data: {username:shaun, password:123}
        //要发送get请求，我们要将发送过来的json中的data拼成如下字符串的形式
        //String: username=shaun&password=123
        Object.keys(data).forEach(key => {
            getString += key + "=" + data[key] + "&" 
        })
        if(getString) {//如果得到的string不为空
            getString.slice(0, -1);//去掉最后一个&
        }
        return axios.get(url + "?" + getString, {withCredentials:true});
    }
    else {
        getString = "username=" + data.username + "password=" + data.password;
        return axios.post(url, data, {withCredentials:true});
    }
}