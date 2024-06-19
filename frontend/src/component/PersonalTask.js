import React from 'react';
import Task from './task';

const PersonalTask = ({ tasks, currentTaskIndex ,steps}) => {
    return (
        <div>
            <h2>任务列表</h2>
            {tasks.map((task, index) => (
                <Task key={index} task={task} steps={steps}/>
            ))}
        </div>
    );
};

export default PersonalTask;
//个人任务组件