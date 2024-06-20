import {
    Avatar, Breadcrumb,
    Button,
    Card, Col, Collapse,
    Descriptions, Divider,
    Flex, message,
    Pagination, Row,
    Space,
    Steps, Tag,
    Typography,
} from 'antd'
import React, {useEffect, useState} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {BasicLayout, PrivateLayout, SiderLayout} from "../component/layout";
import Sider from "antd/es/layout/Sider";
import cookie from "react-cookies";
import {getTaskById, orderTask, setWorker, setWorkers} from "../service/task";
import {handleBaseApiResponse} from "../utils/requestUtils";
import {HomeOutlined} from "@ant-design/icons";
import {formatDate} from "../utils/time";
import {searchWorkers} from "../service/worker";
import WorkerList from "../component/workerlIst";
import WorkerChooseList from "../component/worker_choose_list";
import WorkerCard from "../component/workercard";

const {Title, Paragraph, Text, Link} = Typography;

export default function Published() {
    const [messageApi, contextHolder] = message.useMessage();
    let me = cookie.load("user-sutaats");
    const [task, setTask] = useState(null);
    const [user, setUser] = useState(null);

    const [totalPage, setTotalPage] = useState(0);
    const [status, setStatus] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    const pageIndex = searchParams.get("pageIndex") != null ? Number.parseInt(searchParams.get("pageIndex")) : 0;
    const pageSize = searchParams.get("pageSize") != null ? Number.parseInt(searchParams.get("pageSize")) : 4;
    let {id} = useParams();

    const getTask = async () => {
        let task = await getTaskById(id);
        console.log(task);
        setTask(task);
    }
    useEffect(() => {
        getTask();
    }, [id]);


    const handlePageChange = (page) => {
        setSearchParams({...searchParams, pageIndex: page - 1});
    }


    const handleClick = async (workerId) => {
        let res = await setWorker(id, workerId);
        let task = await getTaskById(id);
        setTask(task);
    }

    const category_item = ["数据标注", "程序外包", "图形创意"];


    return <PrivateLayout>
        {contextHolder}
        <Breadcrumb
            style={{marginLeft: "-60px"}}
            items={[{
                href: '/home', title: <HomeOutlined/>,
            }, {
                title: task?.title,
            },]}
        />
        <Row style={{marginTop: "20px"}}>
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
                                            <span className="dark:text-gray-600"
                                                  style={{marginRight: "60px"}}>{task?.userName}</span>
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

                        <Steps size="small" style={{margin: "30px 0"}}
                               current={task?.status === false ? 0 : 1}

                               items={[
                                   {
                                       title: '竞标中',
                                       status: "process",
                                   },
                                   {
                                       title: '完成竞标',
                                   },
                                   {
                                       title: '项目开发',
                                   },
                                   {
                                       title: '完成开发',
                                   }
                               ]}
                        />
                        <Divider></Divider>
                        {task?.status === false &&
                            <><WorkerChooseList workers={task.waiter} taskId={id}
                                                handleClick={handleClick}></WorkerChooseList>
                                <br></br>
                                <Pagination defaultCurrent={1}
                                            current={pageIndex + 1}
                                            total={totalPage * pageSize * 10 / 4}
                                            onChange={handlePageChange}
                                            style={{
                                                display: "flex", justifyContent: "center", alignItems: "center",
                                            }}
                                            showSizeChanger={false}/></>
                        }
                        {task?.status === true &&
                            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Title>众包者：</Title>
                                <br></br>
                                <WorkerCard worker={task?.worker}></WorkerCard>
                            </Col>
                        }
                    </div>
                </div>
            </Card>
            <Card className={""} style={{background: "#f5f5f5", width: "250px"}}></Card>
        </Row>

    </PrivateLayout>
}