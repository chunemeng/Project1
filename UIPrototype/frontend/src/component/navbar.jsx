import {Button, Col, Dropdown, Image, Menu, Row, Space} from "antd";
import useMessage from "antd/es/message/useMessage";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {AccountBookOutlined, FormOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";
import {BasicLayout} from "./layout";

export default function NavBar() {
    const [current, setCurrent] = useState('');
    const navigate = useNavigate();
    const navItems = [
        {label: "首页", value: "/"},
        {label: "众包者", value: "/worker"},
        {label: "需求发布", value: "/publish"},
        {label:"我的任务", value: "/mytask"}
    ];
    const navMenuItems = navItems.map(item => ({
        key: item.value,
        label: <Link to={item.value}>{item.label}</Link>
    }));
    const [messageApi, contextHolder] = useMessage();


    const handleMenuClick = async (e) => {
        if (e.key.startsWith("/")) {
            navigate(e.key);
        }
    };

    const items = [
        {
            key: '1',
            label: (
                <div onClick={() => {
                    navigate("/profile")
                }}> 个人主页</div>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={() => {
                    sessionStorage.removeItem("user")
                    navigate("/")
                }}> 退出登录</div>
            ),
        }, {
            key: '3',
            label: (
                <div onClick={() => {
                    navigate("/login")
                }}> 登陆</div>
            ),
        },
    ];
    return (
        <Row className={"flex-raw"} >
            {contextHolder}
            <Space size="large" style={{marginLeft: "80px"}}>
                <Image src={process.env.PUBLIC_URL + 'logo.png'} preview={false}
                       style={{height: "40px", width: "40px"}}></Image>
                <Link to="/" style={{fontSize: 25}}>众智</Link>
            </Space>
            <Row className="navbar"
                 style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "auto",paddingRight:"80px"}}>
                <Menu mode="horizontal"
                      items={navMenuItems}
                      onClick={handleMenuClick}
                      style={{fontsize: 18,marginRight: "80px"}}
                />
                <Dropdown menu={{onClick: handleMenuClick, items: items}}>
                    <Button shape="circle" icon={<UserOutlined/>}/>
                </Dropdown>
            </Row>
        </Row>
    );
}