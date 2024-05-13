import Router from "./component/router";
import {ConfigProvider} from "antd";

export default function App() {
    return <>
        <ConfigProvider
            theme={{
                components: {
                    // Button: {
                    //     colorPrimary: '#00b96b',
                    //     algorithm: true, // 启用算法
                    // },
                    // Input: {
                    //     colorPrimary: '#eb2f96',
                    //     algorithm: true, // 启用算法
                    // },
                    Carousel: {
                        sizePopupArrow: 100,
                        algorithm: true, // 启用算法
                    }
                },
            }}
        >
        </ConfigProvider>
        <Router></Router>
    </>
}