import {
    Avatar,
    Button,
    Card,
    Descriptions,
    Flex,
    Input,
    Pagination,
    Select,
    Space, Steps,
    Tabs,
    Typography,
    Upload
} from 'antd'
import {
    biddingByUIdApi,
    projectCompleteDevelopmentApi,
    projectGetApi,
    projectProjectDevelopmentApi
} from "../utils/api.js";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {formatDate} from "../utils/time";
import {BasicLayout, SiderLayout} from "../component/layout";
import Sider from "antd/es/layout/Sider";

const {Title, Paragraph, Text, Link} = Typography;


export default function TaskPage() {

    const [bidding, setBidding] = useState({
        records: [{
            project: {
                user: {}
            }
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
            <Card className="card-container">
            <Title level={5}>我的任务</Title>
            <Space style={{width: '100%'}} direction={"vertical"}>
                状态：<Select
                defaultValue="无"
                style={{width: 300}}
                onChange={value => {
                    f(1, 0, value)
                }}
                options={[
                    {value: '0', label: '无'},
                    {value: '1', label: '参与竞标'},
                    {value: '2', label: '完成竞标'},
                    {value: '3', label: '项目开发'},
                    {value: '4', label: '完成开发'},
                    {value: '5', label: '竞标失败'},
                ]}
            />
                {bidding.records.map(item =>
                        <Card size={"small"} style={{width: '100%'}}>
                            <Flex justify={"space-between"}>
                                <Space>
                                    <Avatar size={26}
                                    />
                                    {/*src={item.project.user?.avatar}*/}
                                    {item.project.user?.username}
                                </Space>
                                <Space>
                                    <div style={{height: '26px'}}></div>
                                    <Text type="secondary">{formatDate(item.project.timeDate)}</Text>
                                </Space>
                            </Flex>
                            <Flex justify={"space-between"}>
                                <div onClick={() => {
                                    navigate("/view/" + item.project.id)
                                }} style={{marginTop: 6}}>
                                    <Title level={4}>{item.project.name}</Title>
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
                                    children: '线下'
                                },
                                {
                                    key: '3',
                                    label: '时限(分钟)',
                                    children: '480'
                                },
                                {
                                    key: '4',
                                    label: '报酬',
                                    children: '1000'
                                },
                            ]}/>
                            <Steps size="small" style={{margin: "30px 0"}}
                                   current={item.status}
                                   onChange={(e) => {
                                       if (item.status === 2) {
                                           if (e + 1 - item.status === 1) {
                                               projectProjectDevelopmentApi(item.project.id, item.user.id).then(() => {
                                                   f(1, 0, 0)
                                               })
                                           }
                                       }
                                       if (item.status === 3) {
                                           if (e + 1 - item.status === 1) {
                                               projectCompleteDevelopmentApi(item.project.id, item.user.id).then(() => {
                                                   f(1, 0, 0)
                                               })
                                           }
                                       }
                                       //   if(e+1) {
                                       //   }
                                   }}
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
                                       }, {
                                           title: '竞标失败',
                                       },
                                   ]}
                            />
                        </Card>
                )}
                <Flex style={{marginTop: 10}}>
                    <Pagination defaultCurrent={1} onChange={f} total={bidding.total} pageSize={5}
                                current={bidding.current}/>
                </Flex>
            </Space>
            </Card>
        </SiderLayout>

    );
}
