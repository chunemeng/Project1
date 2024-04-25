import React from 'react';
import { Layout, Menu } from 'antd';
import {useNavigate} from "react-router-dom";

const { Header, Content, Sider } = Layout;

const PrivateLayout = ({children}) => {
    const navigate = useNavigate();

    const handleMenuClick = (e) => {
        const str = "/" + e.key;
        navigate(str);
    };
    return (
        <Layout style={{height:'100%'}}>
            <Sider width={200}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['guildInfo']}
                    onSelect={handleMenuClick}
                >
                    <Menu.Item key="guildInfo">公会详情</Menu.Item>
                    <Menu.Item key="memberList">人员列表</Menu.Item>
                    <Menu.Item key="taskProgress">任务进度</Menu.Item>
                </Menu>
            </Sider>
            <Content style={{ padding: '0 50px',height:'750px'}}>
                {children}
            </Content>
        </Layout>
    );
}
export default PrivateLayout;