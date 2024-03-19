import {List, Pagination, Space} from "antd";
import WorkerCard from "./workercard";
import TaskCard from "./taskcard";
import React from "react";

export default function TaskList({tasks}) {
    return <Space direction="vertical" align="center" style={{width: "100%"}}>
        <List
            grid={{
                gutter: 16, column: 3
            }}
            dataSource={tasks.map(w => ({
                ...w,
                name: w,
                id: w
            }))}
            renderItem={(task) => (
                <List.Item>
                    <TaskCard task={task}/>
                </List.Item>
            )}
            style={{margin: "0  40px"}}
        />
        <Pagination/>
    </Space>
}