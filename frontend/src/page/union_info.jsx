import React from 'react';
import {useState} from "react"
import {Card, Divider, Typography, Layout, Avatar, Image, Breadcrumb, Col} from 'antd'
import {HomeOutlined, LeftOutlined, RightOutlined, UserOutlined} from '@ant-design/icons';
import {BasicLayout} from "../component/layout";
import {Carousel} from 'antd';
import {useParams, useSearchParams} from "react-router-dom";

const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
};
export default function UnionInfoPage({Union}) {
    const [union, setUnion] = useState(null);
    const [comments, setComments] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    let { id } = useParams();

    const getUnion = async () => {
        let union = await getUnionById(id);
        setBook(book);
    }

    const getComments = async () => {
        let comments = await getBookComments(id, pageIndex, pageSize, sort);
        setComments(comments);
    }

    useEffect(() => {
        getBook();
        getComments();
    }, [id]);

    useEffect(() => {
        getComments();
    }, [pageIndex, pageSize, sort])

    const handleMutate = () => {
        getComments();
    };

    const handlePageChange = (page) => {
        setSearchParams({
            pageIndex: page - 1,
            pageSize,
            sort
        });
    };

    const handleSortChange = (sort) => {
        setSearchParams({
            pageIndex: 0,
            pageSize,
            sort
        });
    };

    return <PrivateLayout>
        {book && comments && <BookInfoCard
            pageIndex={pageIndex}
            sort={sort}
            book={book}
            comments={comments}
            onMutate={handleMutate}
            onPageChange={handlePageChange}
            onSortChange={handleSortChange}
        />}


    return (<BasicLayout>
        <Card style={{height: "1000px"}}>
            <Col>
                <Breadcrumb
                    items={[
                        {
                            href: '',
                            title: <HomeOutlined/>,
                        },
                        {
                            href: '',
                            title: (
                                <>
                                    <UserOutlined/>
                                    <span>Application List</span>
                                </>
                            ),
                        },
                        {
                            title: 'Application',
                        },
                    ]}
                />
                <Carousel className={"union-carousel"} arrows={true}
                          dots={"slick-dots"}
                          prevArrow={<img src={process.env.PUBLIC_URL + "prev.png"}/>}
                          nextArrow={<img src={process.env.PUBLIC_URL + "next.png"}/>} autoplay infinite>
                    <div>
                        <img src={process.env.PUBLIC_URL + "union1.png"} style={imgStyle} alt={"1"}/>

                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "union2.png"} style={imgStyle} alt={"1"}/>

                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "union3.png"} style={imgStyle} alt={"1"}/>

                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "union4.png"} style={imgStyle} alt={"1"}/>
                    </div>
                </Carousel>
            </Col>
        </Card>
    </BasicLayout>);
};
