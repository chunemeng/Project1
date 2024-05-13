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
    Descriptions,
    Pagination,
    Select, Radio
} from 'antd'
import {projectGetApi, userListApi} from "../utils/api.js";
import {formatDate} from "../utils/time";
import {BasicLayout} from "../component/layout";
import '../css/global.css'
import WorkerList from "../component/workerlIst";
import TaskList from "../component/tasklist";
import TabPane from "antd/es/tabs/TabPane";


export default function HomePage() {
    const [project, setProject] = useState({
        records: []
    })
    const [a, seta] = useState({
        type: 0, timeLimit: 0, tujian: 0, shengjiang: 0, sous: 0, status: 0
    })
    useEffect(() => {
        f(1, 0)
    }, [])
    useEffect(() => {
        f(1, 0)
    }, [a])
    const [state, setState] = useState("推荐")
    const user = JSON.parse(sessionStorage.getItem("user"))

    function f(page, pageSize) {
        // 在 useEffect 中进行异步操作
        // 在 useEffect 中进行异步操作
        // projectGetApi(a.type, a.timeLimit, a.tujian, a.shengjiang, a.sous, a.status, page).then(resp => {
        //     setProject(resp.data.data)
        // })
    }

    const items = [{
        label: '无', key: 1
    }, {
        label: 'APP开发', key: 2
    }, {
        label: '小程序开发', key: 3
    }, {
        label: '网站建设', key: 4
    }, {
        label: '软件开发', key: 5
    }, {
        label: '游戏开发', key: 6
    }]
    const navigate = useNavigate();
    console.log(process.env.PUBLIC_URL);

    return (<BasicLayout>
        <Card className={"card-container"}>
            <Row>
                <img src={process.env.PUBLIC_URL + "background1.png"} alt={""} className={"background-img"}/>
                <Card style={{height: "200px", width: "600px", margin: "100px auto",marginLeft:"200px"}} bordered={false}>
                    <Space direction={"vertical"} size="large">
                        <Space size={"large"}>
                            <Select options={items} showSearch
                                    style={{
                                        width: 200,
                                    }}
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    placeholder="任务类型"
                                    optionFilterProp="children">
                            </Select>
                            <Select options={items}
                                    showSearch
                                    style={{
                                        width: 200,
                                    }}
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    placeholder="时间限制"
                                    optionFilterProp="children">
                            </Select>
                        </Space>
                        <Select options={items} showSearch
                                style={{
                                    width: 200,
                                }}
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                placeholder="排序方式"
                                optionFilterProp="children">
                        </Select>
                        <Input.Search onPressEnter={e => {
                            if (e.target.value !== '' && e.target.value !== undefined) {
                                seta(prevState => ({...prevState, sous: e.target.value}))
                            } else {
                                seta(prevState => ({...prevState, sous: 0}))
                            }
                        }} size={"middle"} placeholder="搜索"/>
                    </Space>
                </Card>
            </Row>
            <div style={{marginTop: '-120px'}}>
                <Divider/>
                <TaskList tasks={[1, 2, 3, 4, 5, 6]}></TaskList>
            </div>
        </Card>
    </BasicLayout>)
}
