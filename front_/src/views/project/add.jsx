import {
    Alert,
    Avatar,
    Button,
    Card,
    Descriptions,
    Flex,
    Input,
    InputNumber,
    message,
    Select,
    Space,
    Typography
} from "antd";
import React, {useEffect, useState} from "react";
// 语雀
import '@/assets/yuque/doc.css';
import '@/assets/yuque/we.css';

import '@/assets/yuque/lake-content-v1.css';
import '@/assets/yuque/react.production.min';
import '@/assets/yuque/react-dom.production.min.js';
import '@/assets/yuque/doc.umd.js';
import {projectAddApi} from "@/utils/api.js";
import {useNavigate} from "react-router-dom";

const {Title, Paragraph, Text, Link} = Typography;

const Add = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))


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
    function Publish() {
        setProject(prevState => ({...prevState, uid: user.id}))
    }
    const navigate=useNavigate()
    useEffect(()=>{
        const {createOpenEditor} = window.Doc;
        // 创建编辑器
        const editor = createOpenEditor(document.getElementById('r'), {
            input: {},
            image: {
                isCaptureImageURL() {
                    return false;
                },
            },
        });
        // 设置内容
        editor.setDocument('text/lake', '<p><span style="color: rgb(255, 111, 4),rgb(243, 48, 171)">欢迎</span></p>');
        // 监听内容变动
        editor.on('contentchange', () => {
            console.info(editor.getDocument('text/lake'));
            setProject(prevState => ({...prevState, taskRequirement: editor.getDocument('text/lake')}))
        });
    },[])


    return (
        <>
            {contextHolder}
            <link rel="stylesheet" type="text/css" href="https://unpkg.com/antd@4.24.13/dist/antd.css"/>
            <Card size={"small"} style={{width: '100%'}}>
                <Title level={5}>免费发布需求</Title>
                <Alert message="编辑器的图片和视频、文件，不开放使用" type="error"/>
                <Text></Text>
            </Card>
            <Card size={"small"} style={{width: '100%'}}>
                <Space direction={"vertical"}>
                    <Descriptions size={"small"} column={4} bordered items={[
                        {
                            key: '1.1',
                            label: '项目名称',
                            children: <Input value={project.name} onChange={(e) => {
                                setProject(prevState => ({...prevState, name: e.target.value}))
                            }}/>,
                            span: 6,
                        },
                        {
                            key: '1',
                            label: '类型',
                            children: <Select
                                defaultValue="无"
                                style={{width: 220}}
                                value={project.projectType}
                                options={[
                                    {value: 'APP开发', label: 'APP开发'},
                                    {value: '小程序开发', label: '小程序开发'},
                                    {value: '网站建设', label: '网站建设',},
                                    {value: '软件开发', label: '软件开发',},
                                    {value: '游戏开发', label: '游戏开发',},
                                ]}
                                onChange={(value) => {
                                    setProject(prevState => ({...prevState, projectType: value}))
                                }}
                            />,
                            span: 2,
                        },
                        {
                            key: '2',
                            label: '环境',
                            children: <Select
                                defaultValue="无"
                                style={{width: 220}}
                                value={project.environment}
                                options={[
                                    {value: '0', label: '无'},
                                    {value: '线上', label: '线上'},
                                    {value: '线下', label: '线下'},
                                ]}
                                onChange={(value) => {
                                    setProject(prevState => ({...prevState, environment: value}))
                                }}
                            />,
                            span: 2,
                        },
                        {
                            key: '3',
                            label: '时限',
                            children: <Select
                                defaultValue="无"
                                style={{width: 220}}
                                value={project.timeLimit}
                                options={[
                                    {value: '30', label: '30分钟'},
                                    {value: '60', label: '1小时'},
                                    {value: '120', label: '2小时'},
                                    {value: '180', label: '3小时'},
                                    {value: '300', label: '5小时'},
                                    {value: '480', label: '8小时'},
                                    {value: '960', label: '16小时'},
                                    {value: '1440', label: '1天'},
                                    {value: '4320', label: '3天'},
                                    {value: '7200', label: '5天'},
                                    {value: '23040', label: '16天'},
                                    {value: '43200', label: '1个月'},
                                    {value: '129600', label: '3个月'},
                                    {value: '259200', label: '6个月'},
                                    {value: '518400', label: '1年'},
                                ]}
                                onChange={(value) => {
                                    setProject(prevState => ({...prevState, timeLimit: value}))
                                }}
                            />,
                            span: 2,
                        },
                        {
                            key: '4',
                            label: '报酬',
                            children: <InputNumber
                                value={project.reward}
                                style={{width: 220}}
                                min={0}
                                defaultValue={0}
                                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={(value) => {
                                    setProject(prevState => ({...prevState, reward: value}))
                                }}
                            />,
                            span: 2,
                        }, {
                            key: '5',
                            label: '地点要求',

                            children: <Input value={project.locationRequirement}
                                             onChange={(value) => {
                                                 setProject(prevState => ({...prevState, locationRequirement: value.target.value}))
                                             }}
                                             defaultValue={'无'}/>,
                            span: 4,
                        }, {
                            key: '6',
                            label: '任务要求',
                            children:
                                <div style={{width: 820}} id="r"
                                     className="ne-doc-major-editor"></div>,
                            span: 4,
                        },
                    ]}/>

                    <Button type="primary" onClick={Publish} style={{display: "block", width: '100%'}}>发布</Button>
                </Space>
            </Card>
        </>
    )
}

export default Add