import React from 'react';
import { Tabs } from 'antd';
import PrivateLayout from "./layout_1";

const { TabPane } = Tabs;

const TaskProgress = () => {
    const tasks = [
        { id: 1, status: 'new', title: '新订单1', },
        { id: 2, status: 'in_progress', title: '进行中订单1', },
        { id: 3, status: 'completed', title: '已结束订单1', }/* ...其他任务详情... */
    ];

    const filteredTasks = (status) => {
        return tasks.filter((task) => task.status === status);
    };

    const handleTaskAction = (task) => {
        console.log(`处理任务: ${task.title}`);
    };

    return (
        <Tabs defaultActiveKey="new">
            <TabPane tab="新订单" key="new">
                {filteredTasks('new').map((task) => (
                    <div key={task.id}>
                        <h3>{task.title}</h3>
                        {/* 根据需要展示任务详情 */}
                        <button onClick={() => handleTaskAction(task)}>接受/拒绝</button>
                    </div>
                ))}
            </TabPane>
            <TabPane tab="进行中" key="in_progress">
                {filteredTasks('in_progress').map((task) => (
                    <div key={task.id}>
                        <h3>{task.title}</h3>
                        {/* 根据需要展示任务详情 */}
                        <button onClick={() => handleTaskAction(task)}>任务分配/交付</button>
                    </div>
                ))}
            </TabPane>
            <TabPane tab="已结束" key="completed">
                {filteredTasks('completed').map((task) => (
                    <div key={task.id}>
                        <h3>{task.title}</h3>
                        {/* 根据需要展示任务历史详情 */}
                    </div>
                ))}
            </TabPane>
        </Tabs>
    );
};

const TaskProgressPage = () => {
    return (
        <PrivateLayout>
            {TaskProgress}
        </PrivateLayout>
    )
}

export default TaskProgressPage;