import {List, Pagination, Space} from "antd";
import TaskCard from "./taskcard";
import React from "react";

export default function TaskList({tasks}) {
    return <Space direction="vertical" align="center" style={{width: "100%"}}>
        <List
            grid={{
                column: 3
            }}
            dataSource={tasks?.map(w => ({
                ...w,
                name: w.title,
                id: w.id
            }))}
            renderItem={(task) => (
                <List.Item style={{marginLeft: "-25px"}}>
                    <TaskCard task={task}/>
                </List.Item>
            )}
            style={{
                margin: "0  40px",
                minWidth: "1500px",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#f5f5f5"
            }}
        />

    </Space>
}