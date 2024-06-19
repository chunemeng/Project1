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
        </Card>
    </PrivateLayout>)
}
