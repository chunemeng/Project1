import {useNavigate} from "react-router-dom";
import {Avatar, Card, Col, Descriptions, Flex, Space, Typography} from "antd";
import React from "react";

export default function WorkerCard({worker}) {
    const navigate = useNavigate();
    return <Card size={"small"} className={"item-card"} style={{width:"370px", height:"auto"}} onClick={() => {
        if (worker.status === true)
        navigate("/union/" + worker?.id);
    } }>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Space direction={"vertical"}>
                <Flex justify={"center"}>
                    <Col>
                        <Space>
                            <Avatar size={100}
                                    src={worker?.cover}
                                    style={{margin: "20px 0", marginLeft: "40px"}}
                            />
                            {worker?.name}
                        </Space>
                        <br></br>
                        <p style={{width:"300px", textAlign:"center"}}>{worker?.description}</p>
                        <br/>
                    </Col>
                </Flex>
                {!worker.status && <Descriptions size={"default"} column={1} bordered items={[
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
                ]}/>}

            </Space>
        </div>
    </Card>
}