import React, {useState} from 'react';
import { Card,Collapse,Button } from 'antd';

const Course =({course}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    }

    return(
        <Card title={course.name} style={{marginBottom:"5px",boxShadow:"5px 5px 7.5px 0px rgba(0,0,0,0.25), -5px -5px 7.5px 0px rgba(0,0,0,0.25)"}}>
            <div style={{display: 'flex'}}>
                <p>课程数：{course.lessonnumber}</p>
                <div style={{marginLeft: '9px ', marginRight: '9px '}}></div>
                <p> 学习人次：{course.studentnumber}</p>
                <div style={{marginLeft: '9px ', marginRight: '9px '}}></div>
                <p> 考试人次：{course.tested}</p>
                <div style={{marginLeft: '9px ', marginRight: '9px '}}></div>
                <p> 通过人次：{course.passed}</p>
                <div style={{marginLeft: '9px ', marginRight: '9px '}}></div>
                <Button style={{float:"right"}} onClick={toggleContent}>{isExpanded ? '收起' : '展开'}</Button>
            </div>
            {isExpanded && (
                <div>
                    <p>课程信息</p>
                </div>
            )}
        </Card>
    )
}
export default Course;