import {Avatar, Card, Descriptions, Flex, Pagination, Space, Typography} from "antd";
import React, {useEffect, useState} from "react";
import {userListApi} from "@/utils/api.js";

const {Title, Paragraph, Text, Link} = Typography;

const Programmer = () => {
    const [userList, setUserList] = useState({
        records: []
    })
    useEffect(() => {
        f()
    }, []); // 空的依赖数组，确保这个 useEffect 只会在组件首次渲染时执行一次
    function f(page, pageSize) {
        // 在 useEffect 中进行异步操作
        // 在 useEffect 中进行异步操作

        userListApi(page==undefined?1:page).then((resp) => {
            console.log(resp.data.data);
            setUserList(resp.data.data);
        });
    }

    return (
        <>
            <Card size={"small"} style={{width: '100%'}}>
                {[1,2,3].map(item =>
                    <><Card size={"small"} style={{marginTop: 5}}>
                        <Space direction={"vertical"} style={{width: '100%'}}>
                            <Flex justify={"space-between"}>
                                <Space>
                                    <Avatar size={26}
                                            src={item.avatar}/>
                                    {'程序员'+item}
                                </Space>
                            </Flex>
                            <Descriptions size={"small"} column={4} bordered items={[
                                {
                                    key: '1',
                                    label: '专长',
                                    children: '小程序开发',
                                    span: 2
                                },
                                {
                                    key: '2',
                                    label: '兴趣',
                                    children: '户外',
                                    span: 2
                                },
                                {
                                    key: '3',
                                    label: '受教育情况',
                                    children: '大学',
                                    span: 2
                                },
                                {
                                    key: '5',
                                    label: '联系方式',
                                    children:'无',
                                    span: 2
                                }, {
                                    key: '6',
                                    label: '所在地区',
                                    children: '湖南省长沙市',
                                    span: 2
                                },
                            ]}/>
                        </Space>
                    </Card>
                    </>
                )}
                <Flex style={{marginTop: 10}}>
                    <Pagination defaultCurrent={1} onChange={f} total={userList.total} pageSize={5}
                                current={userList.current}/>
                </Flex>
            </Card>
        </>
    )
}
export default Programmer