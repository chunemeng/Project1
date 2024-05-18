import React from 'react';
import {useState} from "react";
import {Tabs} from 'antd';
import {Layout,Input} from 'antd';
import Course from '../component/courses';
const { Header, Content, Sider } = Layout;

const { TabPane } = Tabs;
const Community = () => {
    const courses_0 = [
        {name:'xxx',lessonnumber:5,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:5,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:5,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:5,studentnumber:57,tested:4,passed:2},
    ];
    const courses_1 = [
        {name:'xxx',lessonnumber:6,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:6,studentnumber:57,tested:4,passed:2},
    ];
    const courses_2 = [
        {name:'xxx',lessonnumber:7,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:7,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:7,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:7,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:7,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:7,studentnumber:57,tested:4,passed:2},
    ];

    const [tag,setTag] = useState(" ")
    const handleTagChange = (event) => {
        setTag(event.target.value);

    }
    const handleSearch = (e) => {
        setTag(" ");
    }

    return (
        <Layout style={{height:'100%',display:'flex'}}>
            <Header style={{width: '100%', height: '30%', backgroundColor: "lightgrey"}}>
                <h1>课程列表</h1>
            </Header>
            <Content>
                <Tabs defaultKey = "a" tabBarExtraContent={<Input.Search value={tag} placeholder="tag" onChange={handleTagChange} onSearch={handleSearch} enterButton />}>
                    <TabPane tab="aaa" key="a">
                        {courses_0.map((course) => {
                            return <Course course={course} />;
                        })}
                    </TabPane>
                    <TabPane tab="bbb" key="b">
                        {courses_1.map((course) => {
                            return <Course course={course} />;
                        })}
                    </TabPane>
                    <TabPane tab="ccc" key="c">
                        {courses_2.map((course) => {
                            return <Course course={course} />;
                        })}
                    </TabPane>
                </Tabs>
            </Content>
        </Layout>
    )
}
export default Community;