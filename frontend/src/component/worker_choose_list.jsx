import {List, Pagination, Space} from "antd";
import WorkerCard from "./workercard";
import WorkerChooseCard from "./worker_choose_card";

export default function WorkerChooseList({workers ,taskId,handleClick}) {
    return <Space direction="vertical" align="center" style={{ width: "100%" }}>
        <List
            grid={{
                gutter: 16, column: 1
            }}
            dataSource={workers?.map(w => ({
                ...w,
            }))}
            renderItem={(worker) => (
                <List.Item>
                    <WorkerChooseCard worker={worker} taskId={taskId} handleClick={handleClick}/>
                </List.Item>
            )}
            style={{margin: "0  0px"}}
        />
    </Space>
}