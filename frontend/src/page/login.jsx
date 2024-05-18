import {Button, Card, Image, Input, message, Row, Space, Tabs} from "antd";
import {useState} from "react";
import {loginApi, registerApi} from "../utils/api.js";
import {Link, useNavigate} from 'react-router-dom';
import {BasicLayout} from "../component/layout";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {LoginForm, LoginFormPage, ProFormText} from "@ant-design/pro-components";
import {login} from "../service/login";
import {handleBaseApiResponse} from "../utils/requestUtils";

const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();
    async function handleClick(values) {
        let email = values['username'];
        let password = values['password'];

        let res = await login(email, password);
        console.log(res);
        handleBaseApiResponse(res, messageApi, () => navigate("/"));
    }

    return (
        <BasicLayout>
            {contextHolder}
            <Card>
                <Row className="flex-raw">
                    <img src={process.env.PUBLIC_URL + "login.png"} style={{width: "60%"}} alt={"null"}></img>
                    <LoginForm
                        title="众智"
                        subTitle="众包平台"
                        logo={process.env.PUBLIC_URL + 'logo.png'}
                        onFinish={handleClick}
                        style={{marginLeft: 0, height: "100%"}}
                    >
                        <ProFormText
                            name="username"
                            fieldProps={{
                                size: 'large',
                                prefix: <UserOutlined className={'prefixIcon'}/>,
                            }}
                            placeholder={'请输入用户名'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        />
                        <ProFormText.Password
                            name="password"
                            fieldProps={{
                                size: 'large',
                                prefix: <LockOutlined className={'prefixIcon'}/>,
                            }}
                            placeholder={'密码'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码！',
                                },
                            ]}
                        />
                        <div
                            style={{
                                marginBlockEnd: 24,
                            }}
                        >
                            <Link to='/register'>新账号？前往注册</Link>
                            <a
                                style={{
                                    float: 'right',
                                    paddingLeft:"140px"
                                }}
                                href="#/"
                            >
                                忘记密码
                            </a>
                        </div>
                    </LoginForm>
                </Row>
            </Card>
        </BasicLayout>
    )
}
export default Login