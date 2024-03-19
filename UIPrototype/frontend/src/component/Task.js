import React from 'react';
import { Card } from 'antd';
import Progress from './Progress';

const Task = ({ task ,steps}) => {
    return (
        <Card title={task.name} style={{marginBottom: 16}}>
            <p>任务详情: {task.details}</p>
            <p>酬金: {task.reward}</p>
            <p>任务进度</p>
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

export default Task;
//任务组件，展示任务详情和酬金