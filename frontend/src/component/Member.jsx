import React from 'react';
import {Card} from 'antd';
import ChatTriggerButton from "./chat";

const Member = (Member) => {
    return(
        <Card title={Member.name} style={{marginBottom:"5px",boxShadow:"5px 5px 7.5px 0px rgba(0,0,0,0.25), -5px -5px 7.5px 0px rgba(0,0,0,0.25)"}}>
            <div style={{display: 'flex'}}>
                <p>联系方式：{Member.contact}</p>
                <div style={{marginLeft: '9px ', marginRight: '9px '}}></div>
                <p> 职务：{Member.role}</p>
                <div style={{marginLeft: '9px ', marginRight: '9px '}}></div>
                <ChatTriggerButton>私聊</ChatTriggerButton>
            </div>
        </Card>
    )
}
export default Member;