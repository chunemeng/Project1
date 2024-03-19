import React from 'react';
import UnionTask from './UnionTask';
import TaskProgress from "./TaskProgress"; // 引入新的UnionTask组件

const PublicTask = ({ tasks, currentTaskIndex, isUnionManager,steps }) => {
    return (
        <div>
            <h2>工会任务列表</h2>
            {tasks.map((task, index) => (
                <UnionTask
                    key={index}
                    task={task}
                    isUnionManager={task.isUnionManager} // 传递用户角色到UnionTask组件
                    steps={steps}
                />
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

export default PublicTask;
//工会任务页面