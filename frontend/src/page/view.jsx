import {
    Alert,
    Avatar,
    Button,
    Card,
    Descriptions,
    Flex,
    Image,
    message, Row,
    Select,
    Space,
    Typography
} from "antd";
import React, {useEffect, useState} from "react";
import "../css/global.css"

import {biddingByUidPidApi, biddingSaveApi, projectAddApi, projectGetByIdApi} from "../utils/api.js";
import {useNavigate, useParams} from "react-router-dom";
import {BasicLayout} from "../component/layout";

const {Title, Paragraph, Text, Link} = Typography;

const View = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    const [project, setProject] = useState({
        user: {
            avatar: '',
            username: ''
        }
    })

    const [messageApi, contextHolder] = message.useMessage();


    function handleBidding() {
        if (user.id === project.uid) {
            messageApi.error("这个是你发布的竞标任务，不能参与竞标")
        } else {
            biddingByUidPidApi(user.id, project.id).then(resp => {
                if (resp.data.code === 200) {
                    biddingSaveApi({
                        uid: user.id,
                        pid: project.id
                    }).then(resp => {
                        messageApi.success("参与竞争，可在我的任务里面查看竞标情况")
                    })
                } else {
                    messageApi.error("你已参与了这个竞标任务")
                }
            })

        }

    }

    const items = [
        {
            key: '1.1',
            label: '项目名称',
            children: '测试',
            span: 2,
        },
        {
            key: '1',
            label: '类型',
            children: 'APP开发',
            span: 2,
        },
        {
            key: '2',
            label: '环境',
            children: '线上',
            span: 2,
        },
        {
            key: '3',
            label: "时限(分钟)",
            children: '480',
            span: 2,
        },
        {
            key: '4',
            label: '报酬',
            children: '2000',
            span: 2,
        }, {
            key: '5',
            label: '地点要求',
            children: '无',
            span: 4,
        }, {
            key: '6',
            label: '任务要求',
            children:
                <div style={{width: 400}} id="r"
                     className="ne-doc-major-editor"></div>,
            span: 4,
        },
    ];

    return (
        <BasicLayout>
            {contextHolder}
            <Card size={"small"} className={"card-container"}>
                    <Row className="flex-raw" >
                        <Image src={process.env.PUBLIC_URL + 'task1.png'}
                               style={{height: "400px", width: "auto"}}></Image>
                        <Card style={{marginLeft: "100px"}}>
                            <Space>
                                <p>发布者：</p>
                                <Avatar size={80}
                                        src={process.env.PUBLIC_URL + 'male1.png'}/>
                                奥德赛
                            </Space>
                            <Space style={{marginTop: 10, display: "flex", justifyContent: "center"}}
                                   direction={"vertical"}>
                                <Descriptions size={"small"} column={1} bordered items={items}/>
                                <Button type="primary" onClick={handleBidding}
                                        style={{display: "block", width: '100%'}}>竞标</Button>
                            </Space>
                        </Card>
                    </Row>
            </Card>
        </BasicLayout>
    )
}

export default View