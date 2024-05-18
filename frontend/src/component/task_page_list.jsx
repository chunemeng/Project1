import {List, Space} from "antd";
import TaskCard from "./taskcard";
import React from "react";
import ListTaskCard from "./list_task_card";


export default function TaskPage({tasks}) {
    console.log(tasks);
    return <Space direction="vertical" align="center" style={{width: "100%"}}>
        <List
            grid={{
                column: 1
            }}
            dataSource={tasks?.map(w => ({
                ...w,
                name: w.title,
                id: w.id
            }))}
            renderItem={(task) => (
                <List.Item style={{marginLeft: "-25px"}}>
                    <ListTaskCard task={task}/>
                </List.Item>
            )}
            style={{margin: "0  40px", marginLeft: "auto", marginRight: "auto", display: "flex", alignItems: 'center'}}
        />
    </Space>
}