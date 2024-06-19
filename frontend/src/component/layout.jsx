import {Card, Layout, Menu, Space} from "antd";
import NavBar from "./navbar";
import About from "../page/about";
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getMe} from "../service/user";
import cookie from 'react-cookies'


const {Header, Content, Footer, Sider} = Layout;

export function BasicLayout({children, user}) {
    return (
        <Layout className="basic-layout">
            <Header style={{background: "white"}}><NavBar user={null}/></Header>
            <Content className="content">
                {children}
            </Content>
            <Footer style={{display: "flex", justifyContent: "center"}}><About/></Footer>
        </Layout>
    )
}

export function PrivateLayout({children}) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const checkLogin = async () => {
        let me = cookie.load("user-sutaats");
        if (!me) {
            me = await getMe();
            if (!me) {
                navigate("/login");
            } else {
                cookie.save("user-sutaats", me);
                console.log(me);
                setUser(me);
            }
        }
        setUser(me);
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return (
        <Layout className="basic-layout">
            <Header style={{background: "white"}}><NavBar user={user}/></Header>
            <Content className="content">
                {children}
            </Content>
            <Footer style={{display: "flex", justifyContent: "center"}}><About/></Footer>
        </Layout>
    )
}

export function SiderLayout({children, menus}) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const checkLogin = async () => {
        let me = cookie.load("user-sutaats");
        if (!me) {
            me = await getMe();
            if (!me) {
                navigate("/login");
            } else {
                cookie.save("user-sutaats", me);
                setUser(me);
            }
        }
        setUser(me);
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return <Layout>
        <Header style={{background: "white"}}><NavBar user={user}/></Header>
        <Content style={{padding: '0 48px', marginTop: '20px', width: '80%', marginLeft: '170px'}}>
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
