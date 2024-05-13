import {Avatar, Card, Col, Descriptions, Flex, Space, Typography, Image, Row} from "antd";
import {formatDate} from "../utils/time";
import React from "react";
import {useNavigate} from "react-router-dom";

const {Title, Paragraph, Text, Link} = Typography;

export default function TaskCard({task}) {
    const navigate = useNavigate();
    return <Card onClick={() => {
        navigate("/view")
    }} hoverable={true} size={"small"} className={"item-card"}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Image src={process.env.PUBLIC_URL + `task${task.id}.png`}
                   style={{width: "100%", height: "200px", margin: "0 10px"}}/>
        </div>
        <Col style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h3>{'测试' + task.id}</h3>
            <Text type="secondary">{formatDate(new Date())}</Text>
        </Col>

        <Descriptions size={"small"} column={1} bordered items={[
            {
                key: '1',
                label: '类型',
                children: '小程序开发'
            },
            {
                key: '2',
                label: '环境',
                children: '线上'
            },
            {
                key: '3',
                label: '时限(分钟)',
                children: '480'
            },
            {
                key: '4',
                label: '报酬',
                children: '580'
            },
        ]}/>

    </Card>
}