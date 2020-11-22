import React from "react";
import {messageDataType} from "./HW1"
import s from "./Message.module.css"

type PropsType = {
    message: messageDataType
}

function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <div><img src={props.message.avatar}/></div>
            <div className={s.dialog}>
                <div className={s.content}>
                    <span className={s.name}>{props.message.name}</span><br/>
                    <span className={s.text}>{props.message.message}</span><br/>
                    <span className={s.time}>{props.message.time}</span>
                </div>
            </div>



        </div>
    );
}

export default Message;
