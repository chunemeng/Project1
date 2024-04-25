import React from 'react';
import PrivateLayout from "./layout_1";
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';
import ChatTriggerButton from "./chat";

const MemberList = () => {
    const members = [
        // 示例数据
        { name: '成员1', contact: '123456789', role: '会长' },
        { name: '成员2', contact: '987654321', role: '副会长' },
        // ...
    ];

    const handleChat = (member) => {
        // 弹出聊天框逻辑
        alert(`开始与${member.name}私聊`);
    };

    return (
        <div>
            <h2>人员列表</h2>
            <List
                dataSource={members}
                renderItem={(member) => (
                    <List.Item>
                        <List.Item.Meta
                            title={member.name}
                            description={`联系方式: ${member.contact}, 职务: ${member.role}`}
                        />
                        <Link to={`/memberDetails/${member.name}`}>查看详情</Link>
                        <ChatTriggerButton onClick={() => handleChat(member)}>私聊</ChatTriggerButton>
                    </List.Item>
                )}
            />
        </div>
    );
};

const MemberListPage = () => {
    return(
        <PrivateLayout>
            {MemberList}
        </PrivateLayout>
    )
};
export default MemberListPage;