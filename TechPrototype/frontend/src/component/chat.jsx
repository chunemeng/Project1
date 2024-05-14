import React, { useState } from 'react';
import { Modal, Input, Button, List } from 'antd';

const ChatBox = ({ visible, onCancel }) => {
    const [message, setMessage] = useState('');
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    const [messages, setMessages] = useState(data);
    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const onSendMessage = (message) => {
        setMessages([...messages, message]);
    }

    const handleSendMessage = () => {
        onSendMessage(message); // 发送消息到聊天逻辑处理函数
        setMessage(''); // 清空输入框
    };

    return (
        <Modal
            title="聊天窗口"
            visible={visible}
            onCancel={onCancel}
            footer={null}
        >
            <List
                style={{height:"300px",overflowY:"scroll"}}
                itemLayout="horizontal"
                dataSource={messages}
                renderItem={(item) => (
                    <List.Item>
                        {item}
                    </List.Item>
                )}
            />
            <div style={{ marginTop: 16 }}>
                <Input
                    value={message}
                    onChange={handleInputChange}
                    placeholder="输入消息..."
                    style={{ width: '100%' }}
                />
                <Button onClick={handleSendMessage} style={{ marginTop: 8 }}>
                    发送
                </Button>
            </div>
        </Modal>
    );
};

const ChatTriggerButton = () => {
    const [visible, setVisible] = useState(false);

    const showChatBox = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleSendMessage = (message) => {
        // 处理发送消息的逻辑，比如更新UI或发送到后端
        console.log('发送消息:', message);
    };

    return (
        <div style={{}}>
            <Button onClick={showChatBox}>打开聊天框</Button>
            <ChatBox
                visible={visible}
                onCancel={handleCancel}
                onSendMessage={handleSendMessage}
            />
        </div>
    );
};

export default ChatTriggerButton;