import React from 'react';
import PublishedTask from './PublishedTask';

const MyPublishedTask = ({ publishedTasks }) => {
    return (
        <div>
            <h2>我发布的任务</h2>
            {publishedTasks.map((task) => {
                const { isTaken, takerInfo } = task; // 假设每个任务对象都包含这些信息
                return <PublishedTask key={task.id} task={task} isTaken={isTaken} takerInfo={takerInfo} />;
            })}
        </div>
    );
};

export default MyPublishedTask;
//我发布的任务页面