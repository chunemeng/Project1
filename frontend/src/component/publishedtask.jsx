import React from 'react';
import { Card, Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const Publishedtask = ({ task, isTaken, takerInfo }) => {

    const renderTaskDetails = () => {
        return (
            <Card title={task.name} style={{ marginBottom: 16 }}>
                <p>任务详情: {task.details}</p>
                <p>酬金: {task.reward}</p>
                <p>
                    是否被接单: {isTaken ? '已接单' : '未接单'}
                </p>
                <p>
                    {isTaken && <span> 接单者: {takerInfo.name}</span>}
                </p>
            </Card>
        );
    };

    const handleChatWithTaker = () => {
        // 这里可以添加与接单者私聊的逻辑，比如打开聊天窗口或跳转到聊天页面
        alert(`开始与 ${takerInfo.name} 私聊`);
    };

    return (
        <div>
            {renderTaskDetails()}
            {isTaken && (
                <Button type="link" icon={<MessageOutlined />} onClick={handleChatWithTaker}>
                    与接单者私聊
                </Button>
            )}
        </div>
    );
};

export default Publishedtask;
//我发布的任务：包括任务信息，酬金，是否有人接单，以及接单者信息