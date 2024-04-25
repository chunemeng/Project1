import React from 'react';
import {Layout} from 'antd';
import Course from '../component/courses'
const { Header, Content, Sider } = Layout;

const Community = () => {
    const courses = [
        {name:'xxx',lessonnumber:5,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:5,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:5,studentnumber:57,tested:4,passed:2},
        {name:'xxx',lessonnumber:5,studentnumber:57,tested:4,passed:2},
    ];

    return (
        <Layout style={{height:'100%',display:'flex'}}>
            <Header style={{width:'100%',height:'30%'}}>
                
            </Header>
            <Content>
                <Layout>
                <Sider style={{backgroundColor:'white'}}>
                </Sider>
                <Content >
                    <div style={{backgroundColor:'grey',width:'100%',height:'24%',border:'3px',borderRadius:'7px'}}>
                        xxxxxxx
                    </div>
                    <h1>课程列表</h1>
                    {courses.map((course) => {
                        return <Course course={course} />;
                    })}
                </Content>
               </Layout>
            </Content>
        </Layout>
    )
}
export default Community;