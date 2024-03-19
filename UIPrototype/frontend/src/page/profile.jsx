import {Avatar, Button, Card, Input, Menu, message, Row, Select, Space, Typography, Upload} from 'antd'
import React, {useState} from "react";
import {putAvatarApi, putUserApi} from "../utils/api.js";
import {useNavigate} from "react-router-dom";
import "../css/global.css"
import {BasicLayout, SiderLayout} from "../component/layout";
import Sider from "antd/es/layout/Sider";

const {Title, Paragraph, Text, Link} = Typography;
const {TextArea} = Input;
const Profile = () => {
    const navigate = useNavigate();


    const [user, setUser] = useState({})
    const [messageApi, contextHolder] = message.useMessage();

    function handleUserUpdate() {
        putUserApi(user).then((resp) => {
            console.log(resp.data)
            if (resp.data.code === 200) {
                sessionStorage.setItem("user", JSON.stringify(resp.data.data))
                messageApi.info(resp.data.msg)
            } else {
                messageApi.error(resp.data.msg)
            }
        })
    }

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
    // setInterval(() => {
    //     const user = JSON.parse(sessionStorage.getItem("user"))
    //     if (user.avatar != null) {
    //         setAvatarUrl(user.avatar)
    //     }
    // }, 500)
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
        }, {
            type: 'group',
            label: '工作台',
            children: [
                {
                    label: (<Link to={"/task"}>我的任务</Link>),
                    key: '/task',
                }, {
                    label: (<Link to={"/published"}>我发布的</Link>),
                    key: '/published',
                },
            ]
        },
    ];

    const handleMenuClick = async (e) => {
        if (e.key.startsWith("/")) {
            navigate(e.key);
        }
    };
    const menus = ()=>{
        return   <Menu items={items} onClick={handleMenuClick}>
        </Menu>;
    };
    return (
        <SiderLayout menus={menus()}>
            <Card className={"card-container"} style={{marginLeft:"0"}}>
                {contextHolder}
                    <Space direction={"vertical"}>
                        <Title level={5}>个人信息</Title>
                        <Space style={{marginTop: 20}} direction={"vertical"}>
                            <Text>头像</Text>
                            <Space>
                                {avatarUrl == null ? <Avatar shape="square" size={88}>未设置</Avatar> :
                                    <Avatar src={avatarUrl} shape="square" size={88}></Avatar>}
                                <Upload onChange={changUploadFile} {...props}>
                                    <Button>更新</Button>
                                </Upload>
                            </Space>
                        </Space>
                        <Space style={{marginTop: 20}}>
                            <Space direction={"vertical"}>
                                <Text>昵称</Text>
                                <Input defaultValue={user.username} onChange={(e) => {
                                    setUser(prevState => ({...prevState, username: e.target.value}))
                                }} style={{width: 220}}/>
                            </Space>
                            <Space style={{marginLeft: 50}} direction={"vertical"}>
                                <Text>专长</Text>
                                <Select
                                    defaultValue={user.speciality}
                                    style={{width: 220}}
                                    onChange={(value) => {
                                        setUser(prevState => ({...prevState, speciality: value}))
                                    }}
                                    options={[
                                        {value: '0', label: '无'},
                                        {value: 'APP开发', label: 'APP开发'},
                                        {value: '小程序开发', label: '小程序开发'},
                                        {value: '网站建设', label: '网站建设',},
                                        {value: '软件开发', label: '软件开发',},
                                        {value: '游戏开发', label: '游戏开发',},
                                    ]}

                                />
                            </Space>
                        </Space>
                        <Space>
                            <Space direction={"vertical"}>
                                <Text>兴趣</Text>
                                <Select
                                    defaultValue={user.interest}
                                    style={{width: 220}}
                                    onChange={(value) => {
                                        setUser(prevState => ({...prevState, interest: value}))
                                    }}
                                    options={[
                                        {value: '0', label: '无'},
                                        {value: '户外', label: '户外'},
                                        {value: '学习', label: '学习'},
                                        {value: '美食', label: '美食',},
                                        {value: '社交', label: '社交',},
                                        {value: '运动', label: '运动',},
                                        {value: '事业', label: '事业',},
                                        {value: '游戏动漫', label: '游戏动漫',},
                                    ]}
                                />
                            </Space>
                            <Space style={{marginLeft: 50}} direction={"vertical"}>
                                <Text>受教育情况</Text>
                                <Select
                                    defaultValue={user.educationalStatus}
                                    style={{width: 220}}
                                    onChange={(value) => {
                                        setUser(prevState => ({...prevState, educationalStatus: value}))
                                    }}
                                    options={[
                                        {value: '0', label: '无'},
                                        {value: '小学', label: '小学'},
                                        {value: '初中', label: '初中'},
                                        {value: '高中', label: '高中',},
                                        {value: '中专', label: '中专',},
                                        {value: '大专', label: '大专',},
                                        {value: '本科', label: '本科',},
                                        {value: '研究生', label: '研究生',},
                                        {value: '博士', label: '博士',},
                                    ]}
                                />
                            </Space>
                        </Space>
                        <Space align={"baseline"}>
                            <Space direction={"vertical"}>
                                <Text>联系方式</Text>
                                <Input
                                    defaultValue={user.contactInformation}

                                    style={{width: 220}}
                                    onChange={(e) => {
                                        setUser(prevState => ({...prevState, contactInformation: e.target.value}))
                                    }}
                                />
                            </Space>
                            <Space style={{marginLeft: 50}} direction={"vertical"}>
                                <Text>所在地区</Text>
                                <TextArea
                                    defaultValue={user.area}
                                    onChange={(e) => {
                                        setUser(prevState => ({...prevState, area: e.target.value}))
                                    }}
                                    style={{width: 220}} rows={2} maxLength={108}/>

                            </Space>
                        </Space>
                        <Space style={{marginTop: 20}}>
                            <Button type="primary" onClick={handleUserUpdate}>更新</Button>
                        </Space>
                    </Space>
            </Card>
        </SiderLayout>
    )
}
export default Profile