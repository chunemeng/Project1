import React, {useEffect, useState} from 'react';
import {Card, Layout, Menu} from 'antd';
import {HomeOutlined, UserOutlined, TeamOutlined} from '@ant-design/icons';
import PersonalTask from '../component/PersonalTask.js'
import PublicTask from '../component/PublicTask.js'
import MyPublishedTask from '../component/MyPublishedTask.js'
import {SiderLayout} from "../component/layout";

const {Header, Content, Sider} = Layout;

const MyTaskPage = () => {
    const [currentMenuKey, setCurrentMenuKey] = useState('personal'); // 初始状态设置为'personal'

    const handleMenuClick = (key) => {
        setCurrentMenuKey(key);
    };
    const steps = [
        {num : '1',details:'描述'},
        {num : '2',details:'描述'},
        {num : '3',details:'描述'},
    ];
    const pertasks = [
        {name: '任务1', details: '任务1的详情', reward: '100元',currentTaskIndex:'0'},
        {name: '任务2', details: '任务2的详情', reward: '200元',currentTaskIndex:'1'},
        {name: '任务3', details: '任务3的详情', reward: '150元',currentTaskIndex:'2'},
    ];
    const percurrentTaskIndex = 1;

    const pubtasks = [
        {name: '任务1', details: '任务1的详情', reward: '100元',currentTaskIndex:'0',isUnionManager :true},
        {name: '任务2', details: '任务2的详情', reward: '200元',currentTaskIndex:'1',isUnionManager :false},
        {name: '任务3', details: '任务3的详情', reward: '150元',currentTaskIndex:'2',isUnionManager :true},
    ];
    const pubcurrentTaskIndex = 0;
    const isUnionManager = false;

    const publishedTasks = [
        {
            id: 1,
            name: '任务1',
            details: '任务1的详情',
            reward: '100元',
            isTaken: true, // 假设这个任务已被接单
            takerInfo: {name: '张三'}, // 接单者信息
        },
    ];
    const renderContent = () => {
        switch (currentMenuKey.key) {
            case 'personal':
                return <PersonalTask tasks={pertasks} currentTaskIndex={percurrentTaskIndex} steps={steps}/>;
            case 'union':
                return <PublicTask tasks={pubtasks} currentTaskIndex={pubcurrentTaskIndex}
                                   isUnionManager={isUnionManager} steps={steps}/>;
            case 'published':
                return <MyPublishedTask publishedTasks={publishedTasks}/>;
            default:
                return <div>未选择的任务类型</div>;
        }
    };
    const items = [{
        key: 'personal',
        lable: "个人任务",
        icon: <HomeOutlined/>
    }, {
        key: 'union',
        lable: '公会任务',
        icon: <TeamOutlined/>
    }, {
        key: 'published',
        lable: "我发布的任务",
        icon: <UserOutlined/>
    },

    ];

    const taskMenu = () => {
        return <Menu theme="light"
                     mode="inline"
                     defaultSelectedKeys={['personal']}
                     onSelect={handleMenuClick}>
            {items.map((item) => {
                return <Menu.Item key={item.key} icon={item.icon}>{item.lable}</Menu.Item>
            })}
        </Menu>
    }

    return (
        <SiderLayout menus={taskMenu()}>
            <Card className={"card-container"}>
            {renderContent()}
            </Card>
        </SiderLayout>
    );

};

export default MyTaskPage;
//任务页面