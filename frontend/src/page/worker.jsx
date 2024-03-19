import {Avatar, Card, Descriptions, Flex, Image, Pagination, Row, Space, Typography} from "antd";
import React, {useEffect, useState} from "react";
import {userListApi} from "../utils/api.js";
import {BasicLayout} from "../component/layout";
import WorkerList from "../component/workerlIst";

export default function WorkerPage() {
    const [userList, setUserList] = useState({
        records: []
    })
    useEffect(() => {
        f()
    }, []); // 空的依赖数组，确保这个 useEffect 只会在组件首次渲染时执行一次
    async function f(page, pageSize) {
        // 在 useEffect 中进行异步操作
        // 在 useEffect 中进行异步操作
        //
        // userListApi(page === undefined?1:page).then((resp) => {
        //     console.log(resp.data.data);
        //     setUserList(resp.data.data);
        // });
    }

    return (
        <BasicLayout>
            <Card className="card-container">
                <Row className="flex-raw">
                <img src={process.env.PUBLIC_URL + "background2.png"} alt={""} className={"background-img"}></img>
                <img src={process.env.PUBLIC_URL + "background3.png"} alt={""} className={"background-img"}></img>
                </Row>
                <div style={{marginTop: '-120px'}}>
                <WorkerList workers={[1, 2, 3, 4, 5, 6]}></WorkerList>
                </div>
            </Card>
        </BasicLayout>
    )
}
