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
} from "@/utils/api.js";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const {Title, Paragraph, Text, Link} = Typography;


const Task = () => {

    const [bidding, setBidding] = useState({
        records: [{
            project: {
                user: {}
            }
        }],

    })

    useEffect(() => {
        f(1, 0,0)
    },[])

    function f(page, pageSize,status) {

    }

    function formatDate(isoDateString) {
        const date = new Date(isoDateString); // 解析 ISO 8601 格式的日期字符串
        const year = date.getFullYear(); // 获取年份
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 获取月份，并补零
        const day = String(date.getDate()).padStart(2, '0'); // 获取日期，并补零
        const hours = String(date.getHours()).padStart(2, '0'); // 获取小时，并补零
        const minutes = String(date.getMinutes()).padStart(2, '0'); // 获取分钟，并补零
        const seconds = String(date.getSeconds()).padStart(2, '0'); // 获取秒钟，并补零
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    const navigate = useNavigate()
    return (
        <>
            <Title level={5}>我的任务</Title>
            <Space style={{width: '100%'}} direction={"vertical"}>
                状态：<Select
                defaultValue="无"
                style={{width: 300}}
                onChange={value=>{
                    f(1,0,value)
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
                    <>
                        <Card size={"small"} style={{width: '100%'}}>
                            <Flex justify={"space-between"}>
                                <Space>
                                    <Avatar size={26}
                                            src={item.project.user?.avatar}/>
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
                                   onChange={(e)=>{
                                     if(item.status==2) {
                                         if(e+1-item.status==1) {
                                             projectProjectDevelopmentApi(item.project.id,item.user.id).then(()=>{
                                                 f(1,0,0)
                                             })
                                         }
                                     }
                                       if(item.status==3) {
                                           if(e+1-item.status==1) {
                                               projectCompleteDevelopmentApi(item.project.id,item.user.id).then(()=>{
                                                   f(1,0,0)
                                               })
                                           }
                                       }
                                     //   if(e+1) {
                                     //   }
                                   }}
                                   items={[
                                       {
                                           title: '竞标中',
                                           status:"process",
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
                    </>
                )}
                <Flex style={{marginTop: 10}}>
                    <Pagination defaultCurrent={1} onChange={f} total={bidding.total} pageSize={5}
                                current={bidding.current}/>
                </Flex>
            </Space>
        </>
    )
}
export default Task