import React, {useEffect} from 'react';
import {useState} from "react"
import {Card, Col, Row, Space, Button, Typography, Breadcrumb, Image, Avatar} from 'antd'
import {ExclamationCircleOutlined, HomeOutlined, UserOutlined} from '@ant-design/icons';
import {BasicLayout} from "../component/layout";
import {Carousel} from 'antd';
import {useParams, useSearchParams} from "react-router-dom";
import {getWorkerById} from "../service/worker";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

const imgStyle = {
    width: "100%", height: "100%", objectFit: "cover",
};
export default function UnionInfoPage() {
    const [union, setUnion] = useState(null);
    // const [comments, setComments] = useState(null);
    // const [searchParams, setSearchParams] = useSearchParams();

    let {id} = useParams();
    const getUnion = async () => {
        let union = await getWorkerById(id);
        setUnion(union);
    }

    useEffect(() => {
        getUnion();
    }, [id]);

    console.log(union);

    return (<BasicLayout>
        <Card style={{height: "1000px"}}>
            <Breadcrumb
                items={[{
                    href: '', title: <HomeOutlined/>,
                }, {
                    href: '', title: (<>
                        <UserOutlined/>
                        <span>Application List</span>
                    </>),
                }, {
                    title: 'Application',
                },]}
            />
            <Col>
                <h1 style={{justifyContent: "center", textAlign: "left", paddingLeft: "40px"}}>{union?.title}</h1>
                <div style={{justifyContent: "center", textAlign: "left", paddingLeft: "80px"}}>
                    <Space>
                        <Avatar icon={<img src={"/male1.png"}/>}></Avatar>
                        {union?.name}
                    </Space>
                </div>
                <br></br>
                <Carousel className={"union-carousel"} arrows={true}
                          dots={"slick-dots"}
                          prevArrow={<img src={`/prev.png`} style={{zIndex: 2}}/>}
                          nextArrow={<img src={"/next.png"} style={{zIndex: 2}}/>} autoplay infinite>
                    <div style={{display: "flex"}}>
                        <img src={"/union1.png"} style={imgStyle} alt={"1"}/>

                    </div>
                    <div style={{display: "flex"}}>
                        <img src={"/union2.png"} style={imgStyle} alt={"1"}/>

                    </div>
                    <div style={{display: "flex"}}>
                        <img src={"/union3.png"} style={imgStyle} alt={"1"}/>

                    </div>
                    <div style={{display: "flex"}}>
                        <img src={"/union4.png"} style={imgStyle} alt={"1"}/>
                    </div>
                </Carousel>
            </Col>
            <Typography>
                <h5>服务描述</h5>
                <Paragraph>
                    {union?.description}
                </Paragraph>
            </Typography>
        </Card>
    </BasicLayout>);
};
