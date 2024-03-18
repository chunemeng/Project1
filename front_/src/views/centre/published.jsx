import {
    Avatar,
    Button,
    Card, Collapse,
    Descriptions,
    Flex,
    Input,
    Pagination,
    Select,
    Space,
    Steps,
    Tabs,
    Typography,
    Upload
} from 'antd'
import React, {useEffect, useState} from "react";
import {biddingByUIdApi, biddingByUidListApi, projectCompleteBiddingApi} from "@/utils/api.js";
import {useNavigate} from "react-router-dom";

const {Title, Paragraph, Text, Link} = Typography;


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

    const navigate = useNavigate()
    return (
        <>
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
                                        <Space style={{width:'100%'}} direction={"vertical"}>
                                        {
                                            item.biddings.map(i =>
                                                <>
                                                    {i.status!=5?
                                                        <Card style={{borderColor:'red 1px solid'}} size={"small"}>
                                                            <Space direction={"vertical"} style={{width: '100%'}}>
                                                                <Flex justify={"space-between"}>
                                                                    <Space>
                                                                        <Avatar size={26}
                                                                                src={i.user.avatar}/>
                                                                        奥德赛
                                                                    </Space>
                                                                </Flex>
                                                                <Descriptions size={"small"} column={4} bordered items={[
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
                                                                <div style={{margin: "10px auto"}} onClick={()=>{
                                                                    projectCompleteBiddingApi(item.id,i.user.id).then(resp=>{
                                                                        f(1, 0, 0)
                                                                    })
                                                                }}>
                                                                    {
                                                                        item.status==1?<Button  type={"primary"} >确认它为竞争赢家</Button>:''
                                                                    }

                                                                </div>
                                                            </Space>
                                                        </Card>:
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
        </>
    )
}
export default Published;