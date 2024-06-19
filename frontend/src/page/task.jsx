import {
    Avatar,
    Button,
    Card,
    Col,
    Descriptions,
    Flex,
    Input,
    Pagination,
    Row,
    Select,
    Space,
    Steps,
    Tabs,
    Typography,
    Upload
} from 'antd'
import {
    biddingByUIdApi, projectCompleteDevelopmentApi, projectGetApi, projectProjectDevelopmentApi
} from "../utils/api.js";
import React, {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {formatDate} from "../utils/time";
import {BasicLayout, PrivateLayout, SiderLayout} from "../component/layout";
import Sider from "antd/es/layout/Sider";
import TaskList from "../component/tasklist";
import {searchTasks} from "../service/task";

const {Title, Paragraph, Text, Link} = Typography;


export default function TaskPage() {

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
        if (category === undefined) category = "";

        setSearchParams({
            "keyword": keyword, "pageIndex": 0, "pageSize": 6, category: category
        });
    };

    const handlePageChange = (page) => {
        setSearchParams({keyword: keyword, pageIndex: page - 1, pageSize: pageSize, category: category});
    }

    const items = [{
        value: 1, label: '数据标注', key: 1
    }, {
        value: 2, label: '程序外包', key: 2
    }, {
        value: 3, label: '图形创意', key: 3
    }]
    const navigate = useNavigate();
    return <PrivateLayout><Card className={"card-container"}> <Row>
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

        <div style={{marginTop: '-120px'}}>
            <Col>
                <Space direction="vertical" align="center" size={"middle"} style={{width: "100%", display: "flex"}}>

                    <div style={{
                        zIndex: 20, display: "flex", height: "auto", width: "1500px", background: "#f5f5f5"
                    }}>

                        <TaskList tasks={tasks}></TaskList>
                        <br></br>
                        <br></br>
                    </div>
                    <Pagination defaultCurrent={1}
                                current={pageIndex + 1}
                                total={totalPage * pageSize * 10 / 6}
                                onChange={handlePageChange}
                                style={{
                                    display: "flex", justifyContent: "center", alignItems: "center",
                                }}
                                showSizeChanger={false}/>
                </Space>

            </Col>
        </div>
    </Card>
    </PrivateLayout>
}
