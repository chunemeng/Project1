import {Avatar, Button, Card, Input, Menu, message, Row, Select, Space, Typography, Upload} from 'antd'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "../css/global.css"
import {BasicLayout, SiderLayout} from "../component/layout";
import Sider from "antd/es/layout/Sider";
import {getMe} from "../service/user";

const {Title, Paragraph, Text, Link} = Typography;
const {TextArea} = Input;
const Profile = () => {
    const navigate = useNavigate();


    const [user, setUser] = useState({})
    const [messageApi, contextHolder] = message.useMessage();

    const getUser = async () => {
        let res = await getMe();
        setUser(res);
    }

    useEffect(() => {
        getUser();
    }, []);

    const [fileList, setFileList] = useState([]);
    const props = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };

    function changUploadFile() {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('file', file);
        });
        fileList.length = 0;
        putAvatarApi(formData, user.id).then(resp => {
            sessionStorage.setItem("user", JSON.stringify(resp.data.data))
        });
    }


    const [avatarUrl, setAvatarUrl] = useState(null);
    const items = [
        {
            type: 'group',
            label: '账户设置',
            children: [
                {
                    label: (<Link to={"/profile"}>个人信息</Link>),
                    key: '/profile',
                }, {
                    label: (<Link to={"/account"}>账户管理</Link>),
                    key: '/account',
                },
            ]
        }
    ];

    const handleMenuClick = async (e) => {
        if (e.key.startsWith("/")) {
            navigate(e.key);
        }
    };
    const menus = () => {
        return <Menu items={items} onClick={handleMenuClick}>
        </Menu>;
    };
    return (
        <SiderLayout menus={menus()}>
            <Card className={"card-container"} style={{width: "auto", minHeight: "400px"}}>
                {contextHolder}
                <Space direction={"vertical"}>
                    <Title level={5}>个人信息</Title>
                    <Space style={{marginTop: 20}} direction={"vertical"}>
                        <Text>头像</Text>
                        <Space>
                            <Avatar src={user?.cover} shape="square" size={88}></Avatar>
                        </Space>
                    </Space>
                    <Space style={{marginTop: 20}}>
                        <Space direction={"vertical"}>
                            <Text>昵称</Text>
                            <p>{user?.nickname} </p>
                        </Space>
                        <Space style={{marginLeft: 50}} direction={"vertical"}>
                            <Text>联系方式</Text>
                            <p>{user?.email} </p>
                        </Space>
                    </Space>
                </Space>
            </Card>
        </SiderLayout>
    )
}
export default Profile