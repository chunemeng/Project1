import React, { useState } from 'react';
import { Modal, Input, Button, List } from 'antd';

const ChatBox = ({ visible, onCancel, onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

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
                itemLayout="horizontal"

                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.content}
                        />
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
        <div>
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