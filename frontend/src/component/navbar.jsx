import {Button, Col, Dropdown, Image, Menu, Row, Space} from "antd";
import useMessage from "antd/es/message/useMessage";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {AccountBookOutlined, FormOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";
import {BasicLayout} from "./layout";

export default function NavBar({user}) {
    const [current, setCurrent] = useState('');
    const navigate = useNavigate();
    const navItems = [
        {label: "首页", value: "/"},
        {label: "众包", value: "/worker"},
        {label: "公会", value: "/union/1"},
        {label: "需求", value: "/publish"},
        {label: "我的任务", value: "/mytask"}
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
            key: '0',
            label: (
                <p>{user?.nickname}</p>
            ),
        },
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
                    navigate("/")
                }}> 退出登录</div>
            ),
        }
    ];
    return (
        <div className={"flex-raw"} style={{minWidth: "1500px"}}>
            {contextHolder}
            <Space size="large" style={{marginLeft: "80px"}}>
                <img src={'/logo.png'}
                     style={{height: "40px", width: "40px", verticalAlign: "center"}}></img>
                <Link to="/" style={{fontSize: 25}}>众智</Link>
            </Space>
            <Space className="navbar"
                   style={{
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       marginLeft: "auto",
                       paddingRight: "80px"
                   }}>
                <Menu mode="horizontal"
                      items={navMenuItems}
                      onClick={handleMenuClick}
                      style={{fontsize: 18, marginRight: "120px"}}
                />
                {user && <Dropdown menu={{onClick: handleMenuClick, items: items}}>
                    <Button shape="circle" icon={<UserOutlined/>}/>
                </Dropdown>}
            </Space>
        </div>
    );
}


