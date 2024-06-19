import {Avatar, Card, Descriptions, Flex, Image, Pagination, Row, Space, Tabs, Typography} from "antd";
import React, {useEffect, useState} from "react";
import {userListApi} from "../utils/api.js";
import {BasicLayout, PrivateLayout} from "../component/layout";
import WorkerList from "../component/workerlIst";
import {useSearchParams} from "react-router-dom";
import {searchTasks} from "../service/task";
import {searchWorkers} from "../service/worker";
import {Tab} from "@headlessui/react";

export default function WorkerPage() {
    const [workers, setWorkers] = useState([]);

    const [totalPage, setTotalPage] = useState(0);
    const [status, setStatus] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    const pageIndex = searchParams.get("pageIndex") != null ? Number.parseInt(searchParams.get("pageIndex")) : 0;
    const pageSize = searchParams.get("pageSize") != null ? Number.parseInt(searchParams.get("pageSize")) : 6;

    const getWorkers = async () => {
        let pagedWorkers = await searchWorkers(keyword, pageIndex, pageSize, status);
        let workers = pagedWorkers.items;
        let totalPage = pagedWorkers.total;
        setWorkers(workers);
        setTotalPage(totalPage);
    };

    useEffect(() => {
        getWorkers();
    }, [keyword, pageIndex, pageSize])

    useEffect(() => {
        getWorkers();
    }, [status])


    const handleSearch = (keyword) => {
        setSearchParams({
            "keyword": keyword, "pageIndex": 0, "pageSize": 6
        });
    };

    const handlePageChange = (page) => {
        setSearchParams({...searchParams, pageIndex: page - 1});
    }

    const onChange = (key) => {
        setSearchParams({...searchParams, pageIndex: 0});
        setStatus(Boolean(key));
    }

    const items = [{
        key: 0, label: '个人',
    }, {
        key: 1, label: '企业',
    }];


    return (<PrivateLayout>
        <Card className="card-container">
            <Row className="flex-raw">
                <img src={process.env.PUBLIC_URL + "background2.png"} alt={""} className={"background-img"}></img>
                <img src={process.env.PUBLIC_URL + "background3.png"} alt={""} className={"background-img"}></img>
            </Row>

            <div style={{marginTop: '-120px'}}>
                <div>
                    <Tabs defaultActiveKey="0" items={items} onChange={onChange} style={{marginLeft:"700px"}}/>
                </div>
                {/*<Space direction={"vertical"} size={'middle'}>*/}
                    <WorkerList workers={workers}></WorkerList>
                    <br></br>
                    <Pagination defaultCurrent={1}
                                current={pageIndex + 1}
                                total={totalPage * pageSize * 10 / 6}
                                onChange={handlePageChange}
                                style={{
                                    display: "flex", justifyContent: "center", alignItems: "center",
                                }}
                                showSizeChanger={false}/>
                {/*</Space>*/}
            </div>


        </Card>
    </PrivateLayout>)
}
