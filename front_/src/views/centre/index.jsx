import React from 'react';
import {Layout, Flex, Menu, Card} from 'antd';
import {Link, Outlet} from "react-router-dom";

const {Header, Footer, Sider, Content} = Layout;
const items = [
    {
        type: 'group',
        label: '账户设置',
        children: [
            {
                label: (<Link to={"/centre/profile"}>个人信息</Link>),
                key: 'profile',
            }, {
                label: (<Link to={"/centre/account"}>账户管理</Link>),
                key: 'account',
            },
        ]
    }, {
        type: 'group',
        label: '工作台',
        children: [
            {
                label: (<Link to={"/centre/task"}>我的任务</Link>),
                key: 'task',
            }, {
                label: (<Link to={"/centre/published"}>我发布的</Link>),
                key: 'published',
            },
        ]
    },
];
const Centre = () => {
    return (
        <>
            <Layout>
                <Sider style={{backgroundColor: 'rgba(0,0,0,0%)'}} width="25%">
                    <Card>
                        <Menu mode="inline" items={items}/>
                    </Card>
                </Sider>
                <Content>
                    <Card>
                        <Outlet/>
                    </Card>
                </Content>
            </Layout>
        </>
    )
}
export default Centre;