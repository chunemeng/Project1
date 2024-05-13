import React from 'react';
import { Tabs,Divider } from 'antd';
import {BasicLayout} from "./layout";

const { TabPane } = Tabs;

const TaskProgress = () => {
    const tasks = [
        // 示例数据
        { id: 1, status: 'new', title: '新订单1', /* ...其他任务详情... */ },
        { id: 2, status: 'in_progress', title: '进行中订单1', /* ...其他任务详情... */ },
        { id: 3, status: 'completed', title: '已结束订单1', /* ...其他任务详情... */ },
        { id: 4, status: 'new', title: '新订单2', /* ...其他任务详情... */ },
        { id: 5, status: 'in_progress', title: '进行中订单2', /* ...其他任务详情... */ },
        { id: 6, status: 'completed', title: '已结束订单2', /* ...其他任务详情... */ },
        // ...更多任务
    ];

    const filteredTasks = (status) => {
        return tasks.filter((task) => task.status === status);
    };

    const handleTaskAction = (task) => {
        // 根据任务状态执行不同的操作，如接受订单、任务分配、任务交付等
        console.log(`处理任务: ${task.title}`);
    };

    return (
        <Tabs defaultActiveKey="new" centered tabPosition={"left"}>
            <TabPane tab="新订单" key="new">
                {filteredTasks('new').map((task) => (
                    <div key={task.id} style={{height:"auto",}}>
                        <h2 style={{display:"inline-block",marginRight:"30px"}}>{task.title}</h2>
                        {/* 根据需要展示任务详情 */}
                        <button style={{display:"inline-block",marginLeft:"30px"}} onClick={() => handleTaskAction(task)}>接受/拒绝</button>
                        <Divider dashed />
                    </div>
                ))}
            </TabPane>
            <TabPane tab="进行中" key="in_progress">
                {filteredTasks('in_progress').map((task) => (
                    <div key={task.id} >
                        <h2 style={{display:"inline-block",marginRight:"30px"}}>{task.title}</h2>
                        {/* 根据需要展示任务详情 */}
                        <button style={{display:"inline-block",marginLeft:"30px"}} onClick={() => handleTaskAction(task)}>任务分配/交付</button>
                        <Divider dashed style/>
                    </div>
                ))}
            </TabPane>
            <TabPane tab="已结束" key="completed">
                {filteredTasks('completed').map((task) => (
                    <div key={task.id} >
                        <h2 style={{display:"inline-block",marginRight:"30px"}}>{task.title}</h2>
                        {/* 根据需要展示任务历史详情 */}
                        <Divider dashed />
                    </div>
                ))}
            </TabPane>
        </Tabs>
    );
};

const TaskProgressPage = () => {
    return (
        <BasicLayout>
            {TaskProgress}
        </BasicLayout>
    )
}

export default TaskProgressPage;
export {TaskProgress};