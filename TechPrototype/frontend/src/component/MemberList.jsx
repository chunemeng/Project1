import React from 'react';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';
import Member from './Member';

const MemberList = () => {
    const members = [
        // 示例数据
        { name: '张三', contact: '123456789', role: '会长' },
        { name: '李四', contact: '987654321', role: '副会长' },
        // ...
    ];

    const handleChat = (member) => {
        // 弹出聊天框逻辑
        alert(`开始与${member.name}私聊`);
    };

    return (
        <div>
            <h2>人员列表</h2>
                {members.map((member) => {
                    return <Member Member={member}/>;
                })}
        </div>
    );
};


export default MemberList;
