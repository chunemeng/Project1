import {Outlet, useNavigate} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import {
    Tabs,
    Col,
    Row,
    Typography,
    Avatar,
    Card,
    Segmented,
    Space,
    Input,
    Button,
    Flex,
    Divider,
    Descriptions, Pagination
} from 'antd'
import {projectGetApi, userListApi} from "@/utils/api.js";

const {Title, Paragraph, Text, Link} = Typography;

const Index = () => {
    const [project, setProject] = useState({
        records: []
    })
    const [a, seta] = useState({
        type: 0,
        timeLimit: 0,
        tujian: 0,
        shengjiang: 0,
        sous: 0,
        status: 0
    })
    useEffect(() => {
        f(1, 0)
    }, [])
    useEffect(() => {
        f(1, 0)
    }, [a])
    const [state, setState] = useState("推荐")
    const user=JSON.parse(sessionStorage.getItem("user"))

    function f(page, pageSize) {
        // 在 useEffect 中进行异步操作
        // 在 useEffect 中进行异步操作
        projectGetApi(a.type, a.timeLimit, a.tujian, a.shengjiang, a.sous, a.status, page).then(resp => {
            setProject(resp.data.data)
        })
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

    const navigate=useNavigate()
    return (
        <>
            <Card size={"small"} style={{width: '100%'}}>
                <Space direction={"vertical"}>
                    <Space>
                        类型： <Segmented
                        options={['无','APP开发', '小程序开发', '网站建设', '软件开发', '游戏开发']}
                        onChange={(value) => {
                            if(value=='无') {
                                seta(prevState => ({...prevState, type: 0}))
                            }else {
                                seta(prevState => ({...prevState, type: value}))
                            }

                        }}
                        size={'small'}
                    />
                    </Space>
                    <Space>
                        时限：
                        <Segmented
                            options={['无','30分钟', '1小时', '2小时', '3小时', '5小时', '8小时', '16小时', '1天', '3天', '5天', '8天', '16天', '1个月', '3个月', '6个月', '1年',]}
                            onChange={(value) => {
                                if(value=='无') {
                                    seta(prevState => ({...prevState, timeLimit: 0}))
                                }else {
                                    if(value=="30分钟") {
                                        seta(prevState => ({...prevState, timeLimit: 30}))
                                    }else if(value=="1小时") {
                                        seta(prevState => ({...prevState, timeLimit: 60}))
                                    }else if(value=="2小时") {
                                        seta(prevState => ({...prevState, timeLimit: 120}))
                                    }else if(value=="3小时") {
                                        seta(prevState => ({...prevState, timeLimit: 180}))
                                    }else if(value=="5小时") {
                                        seta(prevState => ({...prevState, timeLimit: 300}))
                                    }else if(value=="8小时") {
                                        seta(prevState => ({...prevState, timeLimit: 480}))
                                    }else if(value=="16小时") {
                                        seta(prevState => ({...prevState, timeLimit: 960}))
                                    }else if(value=="1天") {
                                        seta(prevState => ({...prevState, timeLimit: 1440}))
                                    }else if(value=="3天") {
                                        seta(prevState => ({...prevState, timeLimit: 4320}))
                                    }else if(value=="5天") {
                                        seta(prevState => ({...prevState, timeLimit: 7200}))
                                    }else if(value=="16天") {
                                        seta(prevState => ({...prevState, timeLimit: 23040}))
                                    }else if(value=="1个月") {
                                        seta(prevState => ({...prevState, timeLimit: 43200}))
                                    }else if(value=="3个月") {
                                        seta(prevState => ({...prevState, timeLimit: 129600}))
                                    }else if(value=="6个月") {
                                        seta(prevState => ({...prevState, timeLimit: 259200}))
                                    }else if(value=="1年") {
                                        seta(prevState => ({...prevState, timeLimit: 518400}))
                                    }

                                }

                            }}
                            size={'small'}
                        />
                    </Space>
                </Space>
            </Card>
            <Card size={"small"} style={{width: '100%'}}>
                <div style={{height: '5px'}}>
                    <Space style={{float: "left"}}>
                        <Segmented
                            size={"small"}
                            options={['无', '推荐']}
                            onChange={(value) => {
                                if (value == '无') {
                                    seta(prevState => ({...prevState, tujian: 0}))
                                } else {
                                    seta(prevState => ({...prevState, tujian: user.speciality}))
                                }
                            }
                            }
                        />
                        <Segmented
                            size={"small"}
                            options={['无', '升序', '降序']}
                            onChange={(value) => {
                                if (value == '无') {
                                    seta(prevState => ({...prevState, shengjiang: 0}))
                                } else if (value == '升序') {
                                    seta(prevState => ({...prevState, shengjiang: 1}))
                                } else {
                                    seta(prevState => ({...prevState, shengjiang: 2}))
                                }
                            }}
                        />
                    </Space>
                    <Space style={{float: "right"}}>
                        <Input onPressEnter={e=>{
                            if (e.target.value!=''&&e.target.value!=undefined){
                                seta(prevState => ({...prevState, sous: e.target.value}))
                            }else {
                                seta(prevState => ({...prevState, sous: 0}))
                            }
                        }} size={"small"}  placeholder="搜索[回车]"/>
                    </Space>
                </div>
                <Divider/>
                <Space direction={"vertical"} style={{width: '100%'}}>
                    {[1,2,3].map(item =>
                        <>
                            <Card onClick={()=>{navigate("/view")}} size={"small"} style={{width: '100%'}}>
                                <Flex justify={"space-between"}>
                                    <Space>
                                        <Avatar size={26}
                                                src=''/>
                                        {'测试'+item}
                                    </Space>
                                    <Space>
                                        <div style={{height: '26px'}}></div>
                                        <Text type="secondary">{formatDate(new Date())}</Text>
                                    </Space>
                                </Flex>
                                <Flex justify={"space-between"}>
                                    <div  style={{marginTop: 6}}>
                                        <Title  level={4}>{item.name}</Title>
                                    </div>
                                </Flex>
                                <Descriptions size={"small"} column={4} bordered items={[
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
                        </>
                    )}

                </Space>
                <Flex style={{marginTop: 10}}>
                    <Pagination defaultCurrent={1} onChange={f} total={project.total} pageSize={5}
                                current={project.current}/>
                </Flex>
            </Card>

        </>
    )
}
export default Index