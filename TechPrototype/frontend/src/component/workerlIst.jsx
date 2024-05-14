import {List, Pagination, Space} from "antd";
import WorkerCard from "./workercard";

export default function WorkerList({workers}) {
    return <Space direction="vertical" align="center" style={{ width: "100%" }}>
        <List
            grid={{
                gutter: 16, column: 3
            }}
            dataSource={workers.map(w => ({
                ...w,
                name: w,
                id: w
            }))}
            renderItem={(worker) => (
                <List.Item>
                    <WorkerCard worker={worker} />
                </List.Item>
            )}
            style={{margin: "0  40px"}}
        />
        <Pagination style={{margin:"20px 0"}}></Pagination>
    </Space>
}