import React, {useEffect} from 'react';
import {useState} from "react"
import {Card, Col, Row, Space, Button, Typography, Breadcrumb, Image, Avatar, Divider} from 'antd'
import {ExclamationCircleOutlined, HomeOutlined, UserOutlined} from '@ant-design/icons';
import {BasicLayout, PrivateLayout} from "../component/layout";
import {Carousel} from 'antd';
import {useParams, useSearchParams} from "react-router-dom";
import {getWorkerById} from "../service/worker";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import {Team, team} from "../component/static_component";

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
        console.log(union);
        setUnion(union);
    }

    useEffect(() => {
        console.log(union);
        getUnion();
    }, [id]);

    return (<PrivateLayout>
        <Card style={{height: "auto", width: "1400px"}}>
            <Breadcrumb
                items={[{
                    href: '/home', title: <HomeOutlined/>,
                }, {
                    href: '/union', title: (<>
                        <UserOutlined/>
                        <span>Application List</span>
                    </>),
                }, {
                    title: 'Application',
                },]}
            />
            <br></br>
            <br></br>
            <Col>
                <Title
                    style={{justifyContent: "center", textAlign: "center", paddingLeft: "40px"}}>{union?.title}</Title>
                <div style={{justifyContent: "center", textAlign: "left", paddingLeft: "80px"}}>
                    <Space size="large">
                        <Avatar icon={<img src={union?.cover}/>}></Avatar>
                        {union?.name}
                    </Space>
                </div>
                <br></br>
                <Row>
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
                    {pricing()}
                </Row>
            </Col>
            <Divider style={{marginTop: "70px"}}></Divider>
            <Typography>
                <Paragraph style={{marginLeft: "100px"}}>
                    <h5>服务描述</h5>
                    {union?.description}
                </Paragraph>
                {<Team members={(union?.users)}/>}
            </Typography>
        </Card>
    </PrivateLayout>);
};

const pricing = () => {
    return <Card style={{zIndex: "2px", position: "absolute", right: "50px"}}>
        <div
            className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                        <span
                            className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">基础版</h2>
            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>$38</span>
                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
            </h1>
            <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
            </p>
            <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
            </p>
            <p className="flex items-center text-gray-600 mb-2">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hexagon neutra unicorn
            </p>
            <p className="flex items-center text-gray-600 mb-6">
            <span
                className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                   className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
            </p>
            <button
                className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                     strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean
                shorts.</p>
        </div>
    </Card>
}
