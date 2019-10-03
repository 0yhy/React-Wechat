import React from "react";
import css from "./Subscription.module.scss"
import SubscriptionContent from "../SubscriptionContent/SubscriptionContent";

export default class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscription : [
                {
                    id:"0",
                    title:"冰岩作坊",
                    essayNum:1,
                    extract:["浪有所得|2019冰岩作坊秋季招新",],
                    time:"5分钟前"
                },
                {
                    id:"1",
                    title:"QQ音乐",
                    essayNum:1,
                    extract:["假日特技：百大国产动漫歌曲"],
                    time:"8分钟前"
                },
                {
                    id:"4",
                    title:"笔吧评测室",
                    essayNum:"3",
                    extract:[
                        '昨晚微软发新品了，聊聊Surface Pro X的“探路者”',
                        "微软Surface发布会：史上最大惊喜",
                        "AMD：与微软共同开发了数万小时，优化CPU和GPU",
                        ]
                },
                {
                    id:"1",
                    title:"小米之家",
                    essayNum:1,
                    extract:["长假出游，怎样排除人人都点赞的好照片？"]
                },
                {
                    id:"2",
                    title:"共青团中央",
                    essayNum:2,
                    extract:[
                        '青听：别让爱你的人，等太久',
                        "揭秘！昨晚，完成这个环节创世界奇迹！这所高校立功了!"]
                },
                {
                    id:"3",
                    title:"BBC英语听力",
                    essayNum:5,
                    extract:[
                        "《我和我的祖国》歌曲英文版：我们再一次惊艳世人！",
                        "BBC听力|伊朗回绝美国会晤提议",
                        "每日一句|A ship in port is safe, but that's not where ships are built for.",
                        "264部英文原著+有声书，读完让你英文水平提高264个level！免费领！",
                        "英文动画版《西游记》：24集"
                    ]
                }
            ]
        }
    }
    render() {
        return <div className={css.subscription}>
            {this.state.subscription.map(item => <SubscriptionContent {...item}></SubscriptionContent>)}
        </div>
    }
}
