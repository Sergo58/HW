import React from "react";
import Message from "./Message";

export type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}
const messageData: messageDataType = {
    avatar: "https://avatars.mds.yandex.net/get-pdb/1923366/64426749-ba99-4171-abc5-1219f98640a0/s1200?webp=false",
    name: "Goga",
    message: "Hello My name is Goga",
    time: "22:00",

};

function HW1() {
    return (
        <div>
            homeworks 1
            <hr/>
            <Message message={messageData}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
