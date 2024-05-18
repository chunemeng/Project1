import {
    Alert,
    Avatar,
    Breadcrumb,
    Button,
    Card,
    Col,
    Descriptions, Divider,
    Flex,
    Image,
    message,
    Row,
    Select,
    Space,
    Tag,
    Typography
} from "antd";
import React, {useEffect, useState} from "react";
import "../css/global.css"

import {biddingByUidPidApi, biddingSaveApi, projectAddApi, projectGetByIdApi} from "../utils/api.js";
import {useNavigate, useParams} from "react-router-dom";
import {BasicLayout, PrivateLayout} from "../component/layout";
import {handleBaseApiResponse} from "../utils/requestUtils";
import cookie from "react-cookies";
import {getTaskById, orderTask} from "../service/task";
import {HomeOutlined, UserOutlined} from "@ant-design/icons";
import {formatDate} from "../utils/time";

const {Title, Paragraph, Text, Link} = Typography;

export default function TaskView() {
    const [messageApi, contextHolder] = message.useMessage();
    let me = cookie.load("user-sutaats");
    const [task, setTask] = useState(null);
    const [user, setUser] = useState(null);

    let {id} = useParams();

    const getTask = async () => {
        let task = await getTaskById(id);
        console.log(task);
        setTask(task);
    }
    useEffect(() => {
        getTask();
    }, [id]);

    const category_item = ["数据标注", "程序外包", "图形创意"];

    const handlePlaceTask = async () => {
        let res = await orderTask(task.id);
        handleBaseApiResponse(res, messageApi);
    };


    const tabItems = [{
        'key': 'createdTime', 'label': '最新评论'
    }, {
        'key': 'like', 'label': '最热评论'
    }];


    const items = [{
        key: '1.1', label: '项目名称', children: '测试', span: 2,
    }, {
        key: '1', label: '类型', children: 'APP开发', span: 2,
    }, {
        key: '2', label: '环境', children: '线上', span: 2,
    }, {
        key: '3', label: "时限(分钟)", children: '480', span: 2,
    }, {
        key: '4', label: '报酬', children: '2000', span: 2,
    }, {
        key: '5', label: '地点要求', children: '无', span: 4,
    }, {
        key: '6', label: '任务要求', children: <div style={{width: 400}} id="r"
                                                    className="ne-doc-major-editor"></div>, span: 4,
    },];

    return (<PrivateLayout>
        {contextHolder}
        <Breadcrumb
            style={{marginLeft:"-60px"}}
            items={[{
                href: '/home', title: <HomeOutlined/>,
            }, {
                title: task?.title,
            },]}
        />
        <Row style={{marginTop:"20px"}}>
            <Card style={{marginLeft: "-50px", minHeight: "1200px", minWidth: "900px"}}>
                <div className="dark:bg-gray-100 dark:text-gray-800" style={{marginTop: "-10px"}}>
                    <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
                        <div className="flex items-center justify-between">
                        </div>
                        <div className="mt-3">
                            <Row>
                                <p className="text-3xl font-bold">{task?.title}</p>
                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <p className="flex items-center" style={{position: "absolute", right: "10px"}}>
                                            <img src={task?.userCover} alt="avatar"
                                                 className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"/>
                                            <span className="dark:text-gray-600" style={{marginRight:"60px"}}>{task?.userName}</span>
                                        </p>
                                    </div>
                                </div>
                            </Row>
                            <Row style={{marginTop: "5px"}}><Tag color={"green"}>进行中</Tag>
                                <Tag color={"blue"}>{category_item[task?.category]}</Tag>
                                <Tag
                                    className="dark:text-gray-600">{formatDate(task?.createDate)}发布</Tag></Row>
                            <Divider></Divider>
                            <div style={{marginTop: "20px"}}>
                                <Space size={'large'} direction={"vertical"}>
                                    <Row>
                                        <Space>
                                            <p className="text-gray-500">需求标题:</p>
                                            <p className="text-md">{task?.title}</p>
                                        </Space>
                                    </Row>
                                    <Row>
                                        <p>需求描述:</p>
                                        <p>{task?.description}</p>
                                    </Row>
                                    <Row>
                                        <Space className={"flex justify-between"} size="middle">
                                            <p>预算金额:</p>
                                            <p className="text-orange-600 text-xl">${task?.money}</p>
                                        </Space>
                                    </Row>
                                </Space>
                            </div>
                        </div>
                        <Divider></Divider>
                        <div style={{
                            marginTop: "20px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Button size={'large'} onClick={handlePlaceTask}>我能做此需求</Button>
                        </div>
                    </div>
                </div>
            </Card>
            <Card className={""} style={{background:"#f5f5f5", width:"250px"}}></Card>
        </Row>

    </PrivateLayout>)
}