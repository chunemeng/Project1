import React from 'react';
import {

    Card,

} from 'antd'

import {PrivateLayout} from "../component/layout";
import '../css/global.css'
import {booster, start, statistic, TESTIMONIAL} from "../component/static_component";


export default function HomePage() {
    return (<PrivateLayout>
        {start}
        <Card className={"card-container"}>

            <div style={{marginLeft: "80px", marginRight: "80px"}}>
                {booster}
            </div>
            <div style={{marginLeft: "80px", marginRight: "80px"}}>
                {statistic}
            </div>
            <div style={{marginLeft: "80px", marginRight: "80px"}}>
                {TESTIMONIAL}
            </div>
            <br></br>
            <br/>
        </Card>
    </PrivateLayout>)
}
