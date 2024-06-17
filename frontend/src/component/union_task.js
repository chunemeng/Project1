import React from 'react';
import { Card, Button } from 'antd';
import Progress from './Progress';

const UnionTask = ({ task, isUnionManager,steps }) => {
    const renderTaskDetails = () => {
        const identity = isUnionManager? '管理者' : '工会成员';
        return (
            <Card title={task.name} style={{ marginBottom: 16 }}>
                <p>任务详情: {task.details}</p>
                <p>酬金: {task.reward}</p>
                <p>我的身份: {identity} </p>
                <Progress
                    current={task.currentTaskIndex}
                    steps={steps.map((step, index) => ({
                        title: step.num,
                        description: step.details,
                    }))}
                />
            </Card>
        );
    };

    const renderAssignTask = () => {
        return (
            <div>
                <Button type="primary">分配任务</Button>
                {/* 这里可以添加更复杂的分配任务表单或逻辑 */}
            </div>
        );
    };

    return (
        <div>
            {renderTaskDetails()}
            {isUnionManager && renderAssignTask()}
        </div>
    );
};

export default UnionTask;
