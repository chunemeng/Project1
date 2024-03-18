import React, {useState} from 'react'
import './App.css'
import {Col, Avatar, Layout, Space, Button, message, Dropdown} from 'antd';
import {Link, Outlet} from "react-router-dom"
import {registerApi, testApi} from "@/utils/api.js";
import {useNavigate} from 'react-router-dom';
import Programmer from "@/views/programmer.jsx";

const {Header, Content, Footer} = Layout;

function App() {

    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const [avatarUrl, setAvatarUrl] = useState(null)
    setInterval(() => {
        const user = JSON.parse(sessionStorage.getItem("user"))
        if (user.avatar != null) {
            setAvatarUrl(user.avatar)
        }
    }, 500)
    const items = [
        {
            key: '1',
            label: (
                <div onClick={() => {
                    navigate("/centre/profile")
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
        },{
            key: '3',
            label: (
                <div onClick={() => {
                    navigate("/login")
                }}> 登陆</div>
            ),
        },
    ];
    return (
        <Layout>
            {contextHolder}
            <Header style={{backgroundColor: '#ffffff', borderBottom: '1px solid #eee', padding: 0}}>
                <div style={{maxWidth: '980px', margin: '0 auto',}}>
                    <div style={{float: "left"}}>
                        <Space size={[20, 0]}>
                            <Avatar shape="square" size={42}>LOGO</Avatar>
                            <Space>
                                <Link to='/'>
                                    <Button type='text'>
                                        首页
                                    </Button>
                                </Link>
                                <Link to='/programmer'>
                                    <Button type="text">
                                        程序员
                                    </Button>
                                </Link>
                                <Link to='/about'>
                                    <Button type="text">关于</Button>
                                </Link>
                            </Space>
                        </Space>
                    </div>
                    <div style={{float: "right"}} >
                        <Space size={[20, 0]}>
                            <Button type="primary" onClick={() => {
                                navigate("/add")
                            }}>发布需求</Button>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                arrow
                            >
                                <div>
                                    {avatarUrl == null ? <Avatar shape="square" size={42}>未设置</Avatar> :
                                        <Avatar src={avatarUrl} shape="square" size={42}></Avatar>}
                                </div>
                            </Dropdown>
                        </Space>
                    </div>
                </div>
            </Header>
            <Content>
                <div style={{maxWidth: '980px', margin: '5px auto'}}>
                    <Outlet/>
                </div>
            </Content>
            <Footer></Footer>
        </Layout>
    )
}

export default App;
