import {Avatar, Card, Col, Descriptions, Flex, Space, Typography, Image, Row} from "antd";
import {formatDate} from "../utils/time";
import React from "react";
import {useNavigate} from "react-router-dom";


export default function TaskCard({task}) {
    const navigate = useNavigate();
    const category_item = ["数据标注", "程序外包", "图形创意"];
    return <Card className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                 onClick={() => {
                     navigate("/task/" + task?.id);
                 }}
                 style={{height: "250px", width: "450px", marginLeft: "50px", marginTop: "20px"}}
                 hoverable={true}
    >
        <div className="p-6" style={{marginLeft: "-20px"}}>
            <div className="mb-2 flex items-center justify-between" style={{marginTop: "-15px"}}>
                <p className="block font-sans font-medium leading-relaxed text-blue-gray-900 antialiased text-2xl">
                    {task?.title}
                </p>
                <p className="block font-sans text-xl font-medium leading-relaxed text-orange-600 antialiased"
                   style={{marginLeft: "auto"}}>
                    ${task?.money}
                </p>
            </div>
            <p className="block font-sans font-medium leading-relaxed text-blue-gray-900 antialiased"
               style={{marginTop: "-8px"}}>
                {category_item[task?.category - 1]}
            </p>

            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"
               style={{marginTop: "15px"}}>
                {task?.description}
            </p>
        </div>
    </Card>
        ;
}
// return
//     <Card onClick={() => {
//     navigate("/view")
// }} hoverable={true} size={"small"} className={"item-card"} style={{height: "250px", width: "450px"}}>
//     <Col style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
//         <h3>{task.name}</h3>
//         <Text type="secondary">{formatDate(new Date())}</Text>
//     </Col>
//
//     <Descriptions size={"small"} column={1} bordered items={[{
//         key: '1', label: '类型', children: '小程序开发'
//     }, {
//         key: '2', label: '环境', children: '线上'
//     }, {
//         key: '3', label: '时限(分钟)', children: '480'
//     }, {
//         key: '4', label: '报酬', children: '580'
//     },]}/>
//     {cccard}
// </Card>
// }



