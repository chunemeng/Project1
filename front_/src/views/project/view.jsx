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
import {biddingByUidPidApi, biddingSaveApi, projectAddApi, projectGetByIdApi} from "@/utils/api.js";
import {useNavigate, useParams} from "react-router-dom";

const {Title, Paragraph, Text, Link} = Typography;

const View = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    const [project, setProject] = useState({
        user: {
            avatar: '',
            username: ''
        }
    })

    const [is, setIs] = useState(false)
    // 使用useParams来获取URL中的参数

    const [messageApi, contextHolder] = message.useMessage();
    const c='<h2 data-lake-id="TCu0C" id="TCu0C"><strong><span data-lake-id="ub347697c" id="ub347697c" style="color: rgb(25, 27, 31)">第一关：HTML 标签语法规范</span></strong></h2><p data-lake-id="u1835bf48" id="u1835bf48"><span data-lake-id="ub23836ac" id="ub23836ac" style="color: rgb(25, 27, 31)">本门文程我们学习 HTML 的基本结构。</span></p><p data-lake-id="ua9d9458a" id="ua9d9458a"><span data-lake-id="u7383b7b1" id="u7383b7b1" style="color: rgb(25, 27, 31)">在正式学习之前，我们需要先明确一个问题，</span><strong><span data-lake-id="uee4053c5" id="uee4053c5" style="color: rgb(25, 27, 31)">为什么要学习 HTML 基本结构？</span></strong></p><p data-lake-id="u2509b488" id="u2509b488"><span data-lake-id="ubef53629" id="ubef53629" style="color: rgb(25, 27, 31)">因为身为开发人员，你以后编写的每一个网页都是基于 HTML 的整体结构。所以说，HTML 基本结构至关重要。</span></p><p data-lake-id="u3c08a11e" id="u3c08a11e"><span data-lake-id="u5ae86151" id="u5ae86151" style="color: rgb(25, 27, 31)">在此基础上，我们将学习标签的书写规范及注意事项，完成对于 HTML 基本结构的整体认知。</span></p><p data-lake-id="u0ca43bb4" id="u0ca43bb4"><span data-lake-id="u6edea4ab" id="u6edea4ab" style="color: rgb(25, 27, 31)">最后，我将向大家介绍一个非常牛逼的工具-VSCode，其能够快速的编写 HTML 代码，提高开发效率，在实际工作中发挥重要作用。</span></p><p data-lake-id="u65d6e002" id="u65d6e002"><span data-lake-id="u5fea13e8" id="u5fea13e8" style="color: rgb(25, 27, 31)">学完本课程，你将有如下收获：</span></p><p data-lake-id="ucc288a18" id="ucc288a18"><span data-lake-id="u312bdc75" id="u312bdc75" style="color: rgb(25, 27, 31)">（1）掌握 HTML 标签的书写规范以及注意事项 （2）能够写出 HTML 骨架标签 （3）能够使用 VSCode 工具开发网页</span></p><h3 data-lake-id="dCzNx" id="dCzNx"><strong><span data-lake-id="ub33b6b84" id="ub33b6b84" style="color: rgb(25, 27, 31)">1.网页文件创建</span></strong><strong><span data-lake-id="udaf896d8" id="udaf896d8" style="color: #DF2A3F">​</span></strong></h3><p data-lake-id="u17daab5d" id="u17daab5d"><span data-lake-id="u3b7a840c" id="u3b7a840c" style="color: rgb(25, 27, 31)">在讲解标签的具体语法规范前，我们首先要创建一个网页文件。 说到文件，我们知道文件有类型，也就是有扩展名。例如，记事本文件，它的扩展名为：.txt。</span></p><p data-lake-id="uffd8bbc3" id="uffd8bbc3"><span data-lake-id="u43ec53ea" id="u43ec53ea" style="color: rgb(25, 27, 31)">那么，</span><strong><span data-lake-id="u6b495f5f" id="u6b495f5f" style="color: rgb(25, 27, 31)">网页文件的扩展名是什么呢？</span></strong></p><p data-lake-id="ubb596cbf" id="ubb596cbf"><span data-lake-id="ua25ad8c3" id="ua25ad8c3" style="color: rgb(25, 27, 31)">网页文件的扩展名为：\'.html\' 或者是\'.htm\'。所以，看到以\'.html\'或\'.htm\'结尾的文件，就应该马上get到一个重要的信息：这是网页文件，可通过浏览器打开对应文件，查看具体的网页内容。 但是，需要注意的是：</span><strong><span data-lake-id="ua070fee4" id="ua070fee4" style="color: rgb(25, 27, 31)">不能随意创建网页文件！</span></strong></p><p data-lake-id="u4a4ac965" id="u4a4ac965"><strong><span data-lake-id="u2564afc8" id="u2564afc8" style="color: rgb(25, 27, 31)">为什么呢？</span></strong></p><p data-lake-id="u7f197fe1" id="u7f197fe1"><span data-lake-id="u3218b013" id="u3218b013" style="color: rgb(25, 27, 31)">因为一个网站包含众多网页，相对应的是也会有很多的网页文件；若随意创建，不利于后期管理。</span></p><p data-lake-id="u71070f76" id="u71070f76"><strong><span data-lake-id="u972cceb4" id="u972cceb4" style="color: rgb(25, 27, 31)">那应该如何做？</span></strong></p><p data-lake-id="u4340d785" id="u4340d785"><span data-lake-id="u3e518449" id="u3e518449" style="color: rgb(25, 27, 31)">在桌面、D盘或E盘(当然，你也可以选择你喜欢的一个盘)中创建一个文件夹，将创建的网页文件都放在该文件夹中统一管理；后期即使文件再多，也能及时找到并易于分类管理。</span></p><p data-lake-id="u9173c89f" id="u9173c89f"><strong><span data-lake-id="u1da37857" id="u1da37857" style="color: rgb(25, 27, 31)">接下来，我们就创建第一个网页文件：</span></strong></p><p data-lake-id="u00b2088e" id="u00b2088e"><strong><span data-lake-id="ud3edf6bf" id="ud3edf6bf" style="color: rgb(25, 27, 31)">Step1：</span></strong><span data-lake-id="u89708132" id="u89708132" style="color: rgb(25, 27, 31)">在电脑桌面上新建 一个文件夹，命名为：MyWeb；</span></p><p data-lake-id="ub32774ac" id="ub32774ac"><strong><span data-lake-id="u34a089cb" id="u34a089cb" style="color: rgb(25, 27, 31)">注意：</span></strong><span data-lake-id="u6d0959e8" id="u6d0959e8" style="color: rgb(25, 27, 31)">后续创建的网页文件，均放在此文件夹中进行管理。该文件夹的名称，也可根据自身需求命名。</span></p><p data-lake-id="u134f6405" id="u134f6405"><strong><span data-lake-id="ub6764530" id="ub6764530" style="color: rgb(25, 27, 31)">Step2：</span></strong><span data-lake-id="ubc4d1d50" id="ubc4d1d50" style="color: rgb(25, 27, 31)">在该文件夹内，创建一个文本文件，即扩展名为\'.txt\'的文件；文件可随意命名，此处命名为：index.txt。</span></p><p data-lake-id="ue92c116a" id="ue92c116a"><span data-lake-id="uaac15c6c" id="uaac15c6c" style="color: rgb(25, 27, 31)">文本文件创建完成，如下图所示：</span><span data-lake-id="u971f1437" id="u971f1437" style="color: #DF2A3F">​</span></p>'

   useEffect(()=>{
       const { createOpenViewer } = window.Doc;
// 创建阅读器
       const viewer = createOpenViewer(document.getElementById('r'), {
       });
       // 设置内容
       viewer.setDocument('text/lake', c);
   },[])
    function a(id) {

        const interval = setInterval(() => {
            if (project.uid != undefined) {
                if (user.id === project.uid) {
                    setIs(false)
                } else {
                    biddingByUidPidApi(user.id, id).then(resp => {
                        if (resp.data.code == 200) {
                            setIs(true)
                        } else {
                            setIs(false)
                        }
                    })
                }
            } else {
                clearInterval(interval)
            }
        }, 50)


    }

    function handleBidding() {
        if (user.id === project.uid) {
            messageApi.error("这个是你发布的竞标任务，不能参与竞标")
        } else {
            biddingByUidPidApi(user.id, id).then(resp => {
                if (resp.data.code == 200) {
                    biddingSaveApi({
                        uid: user.id,
                        pid: project.id
                    }).then(resp => {
                        messageApi.success("参与竞争，可在我的任务里面查看竞标情况")
                        a(project.id)
                    })
                } else {
                    messageApi.error("你已参与了这个竞标任务")
                }
            })

        }

    }

    return (
        <>
            {contextHolder}
            <Card size={"small"} style={{width: '100%'}}>
                <Flex justify={"space-between"}>
                    <Space>
                        <Avatar size={36}
                                src={project.user.avatar}/>
                        奥德赛
                    </Space>
                </Flex>
                <Space style={{marginTop: 10, width: "100%"}} direction={"vertical"}>

                    <Descriptions size={"small"} column={4} bordered items={[
                        {
                            key: '1.1',
                            label: '项目名称',
                            children: '测试',
                            span: 6,
                        },
                        {
                            key: '1',
                            label: '类型',
                            children: 'APP开发',
                            span: 2,
                        },
                        {
                            key: '2',
                            label: '环境',
                            children: '线上',
                            span: 2,
                        },
                        {
                            key: '3',
                            label: '时限(分钟)',
                            children: '480',
                            span: 2,
                        },
                        {
                            key: '4',
                            label: '报酬',
                            children:'2000',
                            span: 2,
                        }, {
                            key: '5',
                            label: '地点要求',
                            children: '无',
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


                    <Button type="primary" onClick={handleBidding}
                            style={{display: "block", width: '100%'}}>竞标</Button>


                </Space>
            </Card>
        </>
    )
}

export default View