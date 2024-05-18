import {Card} from "antd";
import React from "react";
import {useNavigate} from "react-router-dom";


export default function ListTaskCard({task}) {
    const navigate = useNavigate();
    const category_item = ["数据标注", "程序外包", "图形创意"];
    return <Card className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                 onClick={() => {
                     navigate("/task/" + task?.id);
                 }}
                 style={{height: "120px", width: "800px", marginLeft: "270px", marginTop: "20px"}}
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
        </div>
    </Card>
}