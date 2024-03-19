import {useNavigate} from "react-router-dom";
import {Avatar, Card, Descriptions, Flex, Space, Typography} from "antd";
import React from "react";

export default function WorkerCard({worker}) {
    const navigate = useNavigate();
    const src = worker.id <= 3 ? `male${worker.id}.png` : `female${worker.id - 3}.png`;
    return <Card size={"small"} className={"item-card"}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Space direction={"vertical"}>
                <Flex justify={"center"}>
                    <Space>
                        <Avatar size={100}
                                src={process.env.PUBLIC_URL + src}
                                style={{margin: "20px 0"}}
                        />
                        {'众包者' + worker.id}
                    </Space>
                </Flex>
                <Descriptions size={"default"} column={1} bordered items={[
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
                        children: '无',
                        span: 2
                    }, {
                        key: '6',
                        label: '所在地区',
                        children: '湖南省长沙市',
                        span: 2
                    },
                ]}/>

            </Space>
        </div>
    </Card>
}