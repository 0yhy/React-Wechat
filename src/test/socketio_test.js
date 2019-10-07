import io from "socket.io-client";

//连接服务器，得到与服务器的连接对象
const socket = io("ws://localhost:1027")

//发消息
socket.emit("sendMsg", {name: "hello"});
console.log("客户端向服务器发送了:", {name:"hello"});
socket.on("receiveMsg", function(data) {
    console.log("客户端接收到了服务器的消息：", data);
})