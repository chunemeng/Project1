import {
    Alert,
    Button,
    Card,
    Descriptions,
    Form,
    Input,
    InputNumber,
    Menu,
    message, Pagination,
    Row,
    Select,
    Space,
    Tabs,
    Typography,
    Upload
} from "antd";
import React, {useEffect, useState} from "react";

import {Link, useNavigate, useSearchParams} from "react-router-dom";
import {BasicLayout, PrivateLayout, SiderLayout} from "../component/layout";
import {BarChartOutlined, CommentOutlined, ShoppingCartOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons";
import TabPane from "antd/es/tabs/TabPane";

import DemandTab from "../component/demand_tab";
import {getTaskByUserId, getTaskByWorkerId} from "../service/task";
import TaskPage from "../component/task_page_list";

const {Title} = Typography;

export default function Publish() {
    let user = null;

    const [project, setProject] = useState({
        name: '',
        uid: '',
        projectType: '无',
        environment: '无',
        timeLimit: '无',
        reward: 0,
        locationRequirement: '无',
        taskRequirement: '',
        timeDate: '',
        status: '',
    })
    const [messageApi, contextHolder] = message.useMessage();

    const [tasks, setTasks] = useState([]);

    const [totalPage, setTotalPage] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    const pageIndex = searchParams.get("pageIndex") != null ? Number.parseInt(searchParams.get("pageIndex")) : 0;
    const pageSize = searchParams.get("pageSize") != null ? Number.parseInt(searchParams.get("pageSize")) : 4;
    const [current, setCurrent] = useState(1);


    const getTasks = async () => {
        let pagedTasks;
        switch (current) {
            case 1:
                pagedTasks = await getTaskByUserId(keyword, pageIndex, pageSize, false);
                break;
            case 2:
                pagedTasks = await getTaskByWorkerId(keyword, pageIndex, pageSize, true);
                break;
            case 3:
                return;
        }
        let tasks = pagedTasks.items;
        let totalPage = pagedTasks.total;
        setTasks(tasks);
        setTotalPage(totalPage);
    };

    useEffect(() => {
        getTasks();
    }, [keyword, pageIndex, pageSize, current])

    const handleSearch = (keyword) => {
        setSearchParams({
            "keyword": keyword, "pageIndex": 0, "pageSize": 4
        });
    };

    const handlePageChange = (page) => {
        setSearchParams({...searchParams, pageIndex: page - 1});
    }

    const renderTabPane = (item) => {
        if (!item) return null;
        return (<TabPane tab={item.tab} key={item.id}>
            {item.children}
        </TabPane>);
    };

    const itemss = [{
        id: 1,
        tab: (<Space onClick={() => {
            setCurrent(1);
            handlePageChange(1);
        }}>
            <UserOutlined/>
            发布的任务
        </Space>),
        children: <Space direction="vertical" align="center" size={"middle"} style={{width: "100%", display: "flex"}}>
            <TaskPage tasks={tasks} status={2}></TaskPage>
            <br></br>
            <Pagination defaultCurrent={1}
                        current={pageIndex + 1}
                        total={totalPage * pageSize * 10 / 4}
                        onChange={handlePageChange}
                        style={{
                            display: "flex", justifyContent: "center", alignItems: "center",
                        }}
                        showSizeChanger={false}/>

        </Space>,
    },

        {
            id: 2,
            tab: (<Space onClick={() => {
                setCurrent(2);
                handlePageChange(1);
            }}>
                <CommentOutlined/>
                接取的任务
            </Space>),
            children: <Space direction="vertical" align="center" size={"middle"}
                             style={{width: "100%", display: "flex"}}>
                <TaskPage tasks={tasks} status={1}></TaskPage>
                <br></br>
                <Pagination defaultCurrent={1}
                            current={pageIndex + 1}
                            total={totalPage * pageSize * 10 / 4}
                            onChange={handlePageChange}
                            style={{
                                display: "flex", justifyContent: "center", alignItems: "center",
                            }}
                            showSizeChanger={false}/>

            </Space>,
        },
        {
            id: 3,
            tab: (
                <Space type={"text"} onClick={() => {
                    setCurrent(3)
                }}>
                    <BarChartOutlined/>
                    需求发布
                </Space>
            ),
            children: <DemandTab></DemandTab>
        },
    ].filter(Boolean);

    return (<PrivateLayout>
        {contextHolder}
        <Card className={"card-container"} style={{minHeight: "850px", height: "auto"}}>
            <Tabs
                defaultActiveKey="1"
                tabPosition="left"
                tabBarGutter={"large"}
                style={{width: "100%", height: "85%", position: "absolute", left: "10px", marginTop: "25px"}}
            >
                {itemss.map((item) => renderTabPane(item))}
            </Tabs>
        </Card>
    </PrivateLayout>)
}
