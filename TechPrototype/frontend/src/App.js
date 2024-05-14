import Router from "./component/router";
import {ConfigProvider} from "antd";

export default function App() {
    return <>
        <ConfigProvider
            theme={{
                components: {

                    Carousel: {

                        arrowOffset: 0,
                        algorithm: true, // 启用算法
                    }
                },

            }}
        >
        </ConfigProvider>
        <Router></Router>
    </>
}