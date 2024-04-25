import React from 'react';
import { Card } from 'antd';

const Course =({course}) => {
    return(
        <Card title={course.name}>
            <div style={{display: 'flex'}}>
                <p>课程数：{course.lessonnumber}</p>
                <div style={{marginLeft: '9px ', marginRight: '9px '}}></div>
                <p> 学习人次：{course.studentnumber}</p>
                <div style={{marginLeft: '9px ', marginRight: '9px '}}></div>
                <p> 考试人次：{course.tested}</p>
                <div style={{marginLeft: '9px ', marginRight: '9px '}}></div>
                <p> 通过人次：{course.passed}</p>
            </div>
        </Card>
    )
}
export default Course;