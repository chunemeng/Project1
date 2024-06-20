import {Avatar, Button, Card, Col, Descriptions, Flex, Space} from "antd";
import React, {useEffect} from "react";
import {setWorkers} from "../service/task";

export default function WorkerChooseCard({worker,taskId,handleClick}) {
    return <Card size={"small"} className={"item-card"} style={{width:"870px"}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Space direction={"vertical"}>
                <Flex justify={"center"}>
                    <Col>
                        <Space>
                            <Avatar size={100}
                                    src={worker?.cover}
                                    style={{margin: "20px 0", marginLeft: "-100px"}}
                            />
                            {worker?.name}
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft:"200px"
                            }}>
                                <Button size={'large'} type={"primary"} onClick={() => handleClick(worker?.id)}>确认ta为竞争赢家</Button>
                            </div>
                        </Space>
                        <br></br>
                        <p style={{width: "300px", textAlign: "center"}}>{worker?.description}</p>
                        <br/>
                    </Col>
                </Flex>
                <Descriptions size={"default"} column={8} bordered items={[
                    {
                        key: '1',
                        label: '专长',
                        children: '小程序开发',
                        span: 2
                    },
                    {
                        key: '2',
                        label: '兴趣',
                        children: '户外',
                        span: 2
                    },
                    {
                        key: '3',
                        label: '受教育情况',
                        children: '大学',
                        span: 2
                    },
                    {
                        key: '5',
                        label: '联系方式',
                        children: '',
                        span: 2
                    },
                ]}/>

            </Space>
        </div>
    </Card>
}