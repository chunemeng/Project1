import React from 'react';
import Task from './Task';
import TaskProgress from './TaskProgress';

const PersonalTask = ({ tasks, currentTaskIndex ,steps}) => {
    return (
        <div>
            <h2>任务列表</h2>
            {tasks.map((task, index) => (
                <Task key={index} task={task} steps={steps}/>
            ))}

            <h2>任务进度</h2>
            <TaskProgress
                current={currentTaskIndex}
                steps={tasks.map((task, index) => ({
                    title: task.name,
                    description: `酬金: ${task.reward}`,
                }))}
            />
        </div>
    );
};

export default PersonalTask;
//个人任务组件