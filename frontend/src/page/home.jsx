import {Outlet, useNavigate, useSearchParams} from 'react-router-dom'
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
    Select,
    Radio
} from 'antd'
import {projectGetApi, userListApi} from "../utils/api.js";
import {formatDate} from "../utils/time";
import {BasicLayout, PrivateLayout} from "../component/layout";
import '../css/global.css'
import WorkerList from "../component/workerlIst";
import TaskList from "../component/tasklist";
import TabPane from "antd/es/tabs/TabPane";
import {booster, start, statistic, TESTIMONIAL} from "../component/static_component";
import {searchTasks} from "../service/task";


export default function HomePage() {
    const [state, setState] = useState("推荐")
    const [tasks, setTasks] = useState([]);

    const [totalPage, setTotalPage] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    const pageIndex = searchParams.get("pageIndex") != null ? Number.parseInt(searchParams.get("pageIndex")) : 0;
    const pageSize = searchParams.get("pageSize") != null ? Number.parseInt(searchParams.get("pageSize")) : 10;

    const getBooks = async () => {
        let pagedTasks = await searchTasks(keyword, pageIndex, pageSize);
        let tasks = pagedTasks.items;
        let totalPage = pagedTasks.total;
        setTasks(tasks);
        setTotalPage(totalPage);
    };

    useEffect(() => {
        getBooks();
    }, [keyword, pageIndex, pageSize])

    const handleSearch = (keyword) => {
        setSearchParams({
            "keyword": keyword,
            "pageIndex": 0,
            "pageSize": 10
        });
    };

    const handlePageChange = (page) => {
        setSearchParams({ ...searchParams, pageIndex: page - 1 });
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

    return (<PrivateLayout>
        {start}
        <Card className={"card-container"}>

            <div style={{marginLeft: "80px", marginRight: "80px"}}>
                {booster}
            </div>
            <div style={{marginLeft: "80px", marginRight: "80px"}}>
                {statistic}
            </div>
            <div style={{marginLeft: "80px", marginRight: "80px"}}>
                {TESTIMONIAL}
            </div>
            <br></br>
            <br/>
            <Row>
                <img src={process.env.PUBLIC_URL + "background1.png"} alt={""} className={"background-img"}/>
                <Card style={{height: "200px", width: "600px", margin: "100px auto", marginLeft: "200px"}}
                      bordered={false}>
                    <Space direction={"vertical"} size="large">
                        <Space size={"large"}>
                            <Select options={items} showSearch
                                    style={{
                                        width: 200,
                                    }}
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
                                    placeholder="任务类型"
                                    optionFilterProp="children">
                            </Select>
                            <Select options={items}
                                    showSearch
                                    style={{
                                        width: 200,
                                    }}
                                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                    filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
                                    placeholder="时间限制"
                                    optionFilterProp="children">
                            </Select>
                        </Space>
                        <Select options={items} showSearch
                                style={{
                                    width: 200,
                                }}
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
                                placeholder="排序方式"
                                optionFilterProp="children">
                        </Select>
                        <Input.Search onPressEnter={e => {
                        }} size={"middle"} placeholder="搜索"/>
                    </Space>
                </Card>
            </Row>
            <div style={{marginTop: '-120px'}}>
                <Divider/>
                <TaskList tasks={tasks}></TaskList>
            </div>
        </Card>
    </PrivateLayout>)
}
