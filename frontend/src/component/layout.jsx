import {Card, Layout, Menu, Space} from "antd";
import NavBar from "./navbar";
import About from "../page/about";
import React from "react";
import {Link} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;

export function BasicLayout({children}) {
    return (
        <Layout className="basic-layout">
            <Header style={{background: "white"}}><NavBar/></Header>
            <Content className="content">
                {children}
            </Content>
            <Footer style={{display: "flex", justifyContent: "center"}}><About/></Footer>
        </Layout>
    )
}

export function SiderLayout({children, menus}) {
    return <Layout>
        <Header style={{background: "white"}}><NavBar/></Header>
        <Content style={{padding: '0 48px',marginTop: '20px',width:'80%',marginLeft:'170px'}}>
            <Layout
                style={{padding: '24px 0', background: "white", borderRadius: 5}}
            >
                <Sider style={{background: "white"}} width={200}>
                    {menus}
                </Sider>
                <Content style={{padding: '0 24px', minHeight: 280}}>
                    {children}
                </Content>
            </Layout>
        </Content>
        <Footer style={{textAlign: 'center'}}>
            <About/>
        </Footer>
    </Layout>
}

//     return (
//         <Layout>
//             <Header style={{background: "white"}}><NavBar/></Header>
//             <Layout>
//                 <Sider style={{backgroundColor: 'rgba(0,0,0,0%)',marginTop:"20px",marginLeft:"140px"}} width="10%" height="1000px">
//                     <Card style={{height:"98%",justifyContent:"space-between"}}>
//                         {menus}
//                     </Card>
//                 </Sider>
//                 <Layout>
//                     <Content className="content" style={{marginLeft:"0"}} height="1000px">
//                         {children}
//                     </Content>
//                 </Layout>
//             </Layout>
//             <Footer style={{display: "flex", justifyContent: "center"}}><About/></Footer>
//         </Layout>
//     );
// }