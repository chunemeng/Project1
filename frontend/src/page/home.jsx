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
    const [tasks, setTasks] = useState([]);

    const [totalPage, setTotalPage] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    const pageIndex = searchParams.get("pageIndex") != null ? Number.parseInt(searchParams.get("pageIndex")) : 0;
    const pageSize = searchParams.get("pageSize") != null ? Number.parseInt(searchParams.get("pageSize")) : 6;
    const category = searchParams.get("category") != null ? searchParams.get("category") : "";

    const getTasks = async () => {
        let pagedTasks = await searchTasks(keyword, pageIndex, pageSize, category, false);
        let tasks = pagedTasks.items;
        let totalPage = pagedTasks.total;
        setTasks(tasks);
        setTotalPage(totalPage);
    };

    useEffect(() => {
        getTasks();
    }, [keyword, pageIndex, pageSize, category])

    const handleSearch = (keyword) => {
        setSearchParams({
            "keyword": keyword, "pageIndex": 0, "pageSize": 6, category: category
        });
    };

    const handleSelect = (category) => {
        if (category === undefined)
            category = "";

        setSearchParams({
            "keyword": keyword, "pageIndex": 0, "pageSize": 6, category: category
        });
    };

    const handlePageChange = (page) => {
        setSearchParams({keyword: keyword, pageIndex: page - 1, pageSize: pageSize, category: category});
    }
    console.log(totalPage * pageSize);
    const items = [{
        value: 1,
        label: '数据标注', key: 1
    }, {
        value: 2,
        label: '程序外包', key: 2
    }, {
        value: 3,
        label: '图形创意', key: 3
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
                                    allowClear={true}
                                    onChange={handleSelect}
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
                        <Input.Search onSearch={handleSearch} size={"middle"} placeholder="搜索"/>
                    </Space>
                </Card>
            </Row>
        </Card>

        <div style={{marginTop: '-120px'}}>
            <div style={{
                zIndex: 20, display: "flex", height: "auto", width: "1500px", background: "#f5f5f5", marginLeft: "19px"
            }}>
                <Space direction="vertical" align="center" size={"middle"} style={{width: "100%", display: "flex"}}>
                    <TaskList tasks={tasks}></TaskList>
                    <br></br>
                    <Pagination defaultCurrent={1}
                                current={pageIndex + 1}
                                total={totalPage * pageSize * 10 / 6}
                                onChange={handlePageChange}
                                style={{
                                    display: "flex", justifyContent: "center", alignItems: "center",
                                }}
                                showSizeChanger={false}/>

                </Space>
            </div>
        </div>
    </PrivateLayout>)
}
