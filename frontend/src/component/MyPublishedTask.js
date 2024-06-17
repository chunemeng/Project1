import React from 'react';
import Publishedtask from './PublishedTask';

const MyPublishedTask = ({ publishedTasks }) => {
    return (
        <div>
            <h2>我发布的任务</h2>
            {publishedTasks.map((task) => {
                const { isTaken, takerInfo } = task; // 假设每个任务对象都包含这些信息
                return <Publishedtask key={task.id} task={task} isTaken={isTaken} takerInfo={takerInfo} />;
            })}
        </div>
    );
};

export default MyPublishedTask;
//我发布的任务页面