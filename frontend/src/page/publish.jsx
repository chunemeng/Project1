import {
    Alert,
    Button,
    Card,
    Descriptions,
    Form,
    Input,
    InputNumber,
    Menu,
    message,
    Row,
    Select,
    Space,
    Tabs,
    Typography,
    Upload
} from "antd";
import React, {useEffect, useState} from "react";

import {Link, useNavigate} from "react-router-dom";
import {BasicLayout, PrivateLayout, SiderLayout} from "../component/layout";
import {BarChartOutlined, CommentOutlined, ShoppingCartOutlined, UploadOutlined, UserOutlined} from "@ant-design/icons";
import TabPane from "antd/es/tabs/TabPane";
import Mytask from "./mytask";
import {getMe} from "../service/user";
import task from "../component/task";
import About from "./about";

const {Title} = Typography;

const Publish = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const checkLogin = async () => {
        let me = await getMe();
        if (!me) {
            navigate("/login");
        } else {
            setUser(me);
        }
    }

    useEffect(() => {
        checkLogin();
    }, []);


    const [project, setProject] = useState({
        name: '',
        uid: '',
        projectType: '无',
        environment: '无',
        timeLimit: '无',
        reward: 0,
        locationRequirement: '无',
        taskRequirement: '',
        timeDate: '',
        status: '',
    })
    const [messageApi, contextHolder] = message.useMessage();


    const props = {
        name: 'file', action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', headers: {
            authorization: 'authorization-text',
        }, onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const items = [{
        key: '1.1', label: '项目名称', children: <Input value={project.name} onChange={(e) => {
            setProject(prevState => ({...prevState, name: e.target.value}))
        }}/>, span: 6,
    }, {
        key: '1', label: '类型', children: <Select
            defaultValue="无"
            style={{width: 220}}
            value={project.projectType}
            options={[{value: 'APP开发', label: 'APP开发'}, {
                value: '小程序开发',
                label: '小程序开发'
            }, {value: '网站建设', label: '网站建设',}, {value: '软件开发', label: '软件开发',}, {
                value: '游戏开发',
                label: '游戏开发',
            },]}
            onChange={(value) => {
                setProject(prevState => ({...prevState, projectType: value}))
            }}
        />, span: 2,
    }, {
        key: '2', label: '环境', children: <Select
            defaultValue="无"
            style={{width: 220}}
            value={project.environment}
            options={[{value: '0', label: '无'}, {value: '线上', label: '线上'}, {value: '线下', label: '线下'},]}
            onChange={(value) => {
                setProject(prevState => ({...prevState, environment: value}))
            }}
        />, span: 2,
    }, {
        key: '3', label: '时限', children: <Select
            defaultValue="无"
            style={{width: 220}}
            value={project.timeLimit}
            options={[{value: '30', label: '30分钟'}, {value: '60', label: '1小时'}, {
                value: '120',
                label: '2小时'
            }, {value: '180', label: '3小时'}, {value: '300', label: '5小时'}, {
                value: '480',
                label: '8小时'
            }, {value: '960', label: '16小时'}, {value: '1440', label: '1天'}, {
                value: '4320',
                label: '3天'
            }, {value: '7200', label: '5天'}, {value: '23040', label: '16天'}, {
                value: '43200',
                label: '1个月'
            }, {value: '129600', label: '3个月'}, {value: '259200', label: '6个月'}, {value: '518400', label: '1年'},]}
            onChange={(value) => {
                setProject(prevState => ({...prevState, timeLimit: value}))
            }}
        />, span: 2,
    }, {
        key: '4', label: '报酬', children: <InputNumber
            value={project.reward}
            style={{width: 220}}
            min={0}
            defaultValue={0}
            formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            onChange={(value) => {
                setProject(prevState => ({...prevState, reward: value}))
            }}
        />, span: 2,
    }, {
        key: '5', label: '地点要求',

        children: <Input value={project.locationRequirement}
                         onChange={(value) => {
                             setProject(prevState => ({
                                 ...prevState, locationRequirement: value.target.value
                             }))
                         }}
                         defaultValue={'无'}/>, span: 4,
    }, {
        key: '6', label: '任务要求', children: <Upload {...props}>
            <Button icon={<UploadOutlined/>}>Click to Upload</Button>
        </Upload>, span: 4,
    },];


    const renderTabPane = (item) => {
        if (!item) return null;
        return (<TabPane tab={item.tab} key={item.id}>
            {item.children}
        </TabPane>);
    };

    const itemss = [{
        id: 1, tab: (<Space>
            <UserOutlined/>
            发布的任务
        </Space>), children: <About user={user}/>,
    },

        {
            id: 2, tab: (<Space>
                <CommentOutlined/>
                接取的任务
            </Space>), children: <Mytask task={task}/>,
        },
        // user.status && {
        //     id: 3,
        //     tab: (
        //         <Space>
        //             <ShoppingCartOutlined />
        //             订单
        //         </Space>
        //     ),
        //     children: <OrderTab />,
        // },
        //
        {
            id: 4,
            tab: (
                <Space type={"text"} onClick={(user)=>{console.log(user)}}>
                    <BarChartOutlined />
                    需求发布
                </Space>
            ),
        },
        // user.status && {
        //     id: 5,
        //     tab: (
        //         <Space>
        //             <CrownOutlined />
        //             权限
        //         </Space>
        //     ),
        //     children: <AdminBar />,
        // },
    ].filter(Boolean);

    return (<PrivateLayout>
        {contextHolder}
        <Card className={"card-container"} style={{minHeight: "800px"}}>
            <Tabs
                defaultActiveKey="1"
                tabPosition="left"
                tabBarGutter={"large"}
                style={{width: "100%", height: "100%", position: "absolute", left: "10px"}}
            >
                {itemss.map((item) => renderTabPane(item))}

            </Tabs>
        </Card>
    </PrivateLayout>)
}

// <Card size={"small"} style={{width: 'auto', margin: 'auto'}}>
//     <Space direction={"vertical"}>
//         <h2>需求发布</h2>
//         <Descriptions size={"small"} column={4} bordered items={items}/>
//         <Button type="primary" style={{display: "block", width: '100%'}}>发布</Button>
//     </Space>
// </Card>
export default Publish;