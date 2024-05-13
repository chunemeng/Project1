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