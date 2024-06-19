import {
    Avatar, Breadcrumb,
    Button,
    Card, Collapse,
    Descriptions, Divider,
    Flex, message,
    Pagination, Row,
    Space,
    Steps, Tag,
    Typography,
} from 'antd'
import React, {useEffect, useState} from "react";
import {biddingByUIdApi, biddingByUidListApi, projectCompleteBiddingApi} from "../utils/api.js";
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

const {Title, Paragraph, Text, Link} = Typography;

/*
const Published = () => {
    const [bidding, setBidding] = useState({
        records: [{
            project: {
                user: {}
            },
            biddings: [
                {
                    user: {
                        username: '',
                        avatar: ''
                    }
                }
            ]
        }],

    })
    useEffect(() => {
        f(1, 0, 0)
    }, [])

    function f(page, pageSize, status) {

    }

    const navigate = useNavigate();
    const items = [
        {
            type: 'group',
            label: '账户设置',
            children: [
                {
                    label: (<Link to={"/profile"}>个人信息</Link>),
                    key: 'profile',
                }, {
                    label: (<Link to={"/account"}>账户管理</Link>),
                    key: 'account',
                },
            ]
        }, {
            type: 'group',
            label: '工作台',
            children: [
                {
                    label: (<Link to={"/task"}>我的任务</Link>),
                    key: 'task',
                }, {
                    label: (<Link to={"/published"}>我发布的</Link>),
                    key: 'published',
                },
            ]
        },
    ];
    return (
        <SiderLayout items={items}>
            <Card className={"card-container"}>
                <Title level={5}>我发布的</Title>
                <Space style={{width: '100%'}} direction={"vertical"}>
                    {bidding.records.map(item =>
                        <>
                            <Card size={"small"} style={{width: '100%'}}>

                                <Flex justify={"space-between"}>
                                    <div onClick={() => {
                                        navigate("/view/" + item.id)
                                    }} style={{marginTop: 6}}>
                                        <Title level={4}>{item.name}</Title>
                                    </div>
                                </Flex>
                                <Descriptions size={"small"} column={4} bordered items={[
                                    {
                                        key: '1',
                                        label: '类型',
                                        children: 'APP开发'
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
                                        children: 2000
                                    },
                                ]}/>
                                <Steps size="small" style={{margin: "30px 0"}}
                                       current={item.status}

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
                                <Collapse items={[{
                                    label: '竞标候选人',
                                    children:
                                        <>
                                            <Space style={{width: '100%'}} direction={"vertical"}>
                                                {
                                                    item.biddings.map(i =>
                                                        <>
                                                            {i.status !== 5 ?
                                                                <Card style={{borderColor: 'red 1px solid'}}
                                                                      size={"small"}>
                                                                    <Space direction={"vertical"}
                                                                           style={{width: '100%'}}>
                                                                        <Flex justify={"space-between"}>
                                                                            <Space>
                                                                                <Avatar size={26}
                                                                                        src={i?.user?.avatar}/>
                                                                                奥德赛
                                                                            </Space>
                                                                        </Flex>
                                                                        <Descriptions size={"small"} column={4} bordered
                                                                                      items={[
                                                                                          {
                                                                                              key: '1',
                                                                                              label: '专长',
                                                                                              children: 'APP开发',
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
                                                                                              children: '长沙',
                                                                                              span: 2
                                                                                          },
                                                                                      ]}/>
                                                                    </Space>
                                                                    <Space>
                                                                        <div style={{margin: "10px auto"}}
                                                                             onClick={() => {
                                                                                 projectCompleteBiddingApi(item.id, i.user.id).then(resp => {
                                                                                     f(1, 0, 0)
                                                                                 })
                                                                             }}>
                                                                            {
                                                                                item.status === 1 ? <Button
                                                                                    type={"primary"}>确认它为竞争赢家</Button> : ''
                                                                            }

                                                                        </div>
                                                                    </Space>
                                                                </Card> :
                                                                ''
                                                            }

                                                        </>
                                                    )
                                                }
                                            </Space>
                                        </>,
                                }]}/>
                            </Card>
                        </>
                    )}
                    <Flex style={{marginTop: 10}}>
                        <Pagination defaultCurrent={1} onChange={f} total={bidding.total} pageSize={5}
                                    current={bidding.current}/>
                    </Flex>
                </Space>
            </Card>
        </SiderLayout>
    )
}
export default Published;

 */
export default function Published(){
    const [messageApi, contextHolder] = message.useMessage();
    let me = cookie.load("user-sutaats");
    const [task, setTask] = useState(null);
    const [user, setUser] = useState(null);
    const [workers, setWorkers] = useState([]);

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

    const getWorkers = async () => {
        console.log(status);
        let pagedWorkers = await searchWorkers(keyword, pageIndex, pageSize, status);
        let workers = pagedWorkers.items;
        let totalPage = pagedWorkers.total;
        setWorkers(workers);
        setTotalPage(totalPage);
    };

    const handlePageChange = (page) => {
        setSearchParams({...searchParams, pageIndex: page - 1});
    }

    useEffect(() => {
        getWorkers();
    }, [keyword, pageIndex, pageSize, status]);

    const handleClick = async (workerId) => {
        let res = await setWorker(id, workerId);
        let task = await getTaskById(id);
        setTask(task);
    }

    useEffect(() => {
        handleClick();
    }, [task]);

    const category_item = ["数据标注", "程序外包", "图形创意"];


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
                            <><WorkerChooseList workers={workers} taskId={id} handleClick={handleClick}></WorkerChooseList>
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
                    </div>
                </div>
            </Card>
            <Card className={""} style={{background:"#f5f5f5", width:"250px"}}></Card>
        </Row>

    </PrivateLayout>)
}