import {Button, Card, Input, message, Space, Tabs} from "antd";
import {useState} from "react";
import {loginApi, registerApi} from "@/utils/api.js";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [loginValue, setLoginValue] = useState({
        account: '',
        password: '',
    })
    const [registerValue, setregisterValue] = useState({
        account: '',
        password: '',
        pwd: '',
    })
    const navigate = useNavigate();

    function handleClick() {
        if (loginValue.account !== '' && loginValue.password !== '') {
            loginApi(loginValue).then((resp) => {
                if (resp.data.code == 200) {
                    console.log(resp.data.data)
                    sessionStorage.setItem("user", JSON.stringify(resp.data.data))
                    console.log(JSON.parse(sessionStorage.getItem("user")))
                    messageApi.info("成功登陆")
                    navigate("/")
                } else {
                    console.log(resp.data.msg)
                    messageApi.error(resp.data.msg)
                }
            })
        } else {
            messageApi.error("账户或密码不能为空")
        }
    }

    function handleRegister() {
        if (registerValue.account !== '' && registerValue.password !== '' && registerValue.pwd) {
            if(registerValue.password===registerValue.pwd){
                registerApi(registerValue).then((resp) => {
                    if (resp.data.code == 200) {
                        messageApi.info(resp.data.msg + "，请前往登陆")
                    } else {
                        messageApi.error(resp.data.msg)
                    }
                })
            }else {
                messageApi.error("两次密码不一致")
            }
        } else {
            messageApi.error("账户或密码、确认密码不能为空")
        }
    }

    const items = [
        {
            key: '1',
            label: '登陆',
            children:
                <>
                    {contextHolder}
                    <Space direction={"vertical"} align={"center"}>
                        <Input style={{width:250}} placeholder='账户' onChange={(e) => {
                            setLoginValue(prevState => ({...prevState, account: e.target.value}))
                        }}/>
                        <Input.Password style={{width:250}} placeholder='密码' onChange={(e) => {
                            setLoginValue(prevState => ({...prevState, password: e.target.value}))
                        }}/>
                        <Button type={"primary"} onClick={handleClick}>登陆</Button>
                    </Space>
                </>,
        },
        {
            key: '2',
            label: '注册',
            children: <>
                <Space direction={"vertical"} align={"center"}>
                    <Input style={{width:250}} placeholder='账户' onChange={(e) => {
                        setregisterValue(prevState => ({...prevState, account: e.target.value}))
                    }}/>
                    <Input.Password style={{width:250}} placeholder='密码' onChange={(e) => {
                        setregisterValue(prevState => ({...prevState, password: e.target.value}))
                    }}/>
                    <Input.Password style={{width:250}}  placeholder='确认密码' onChange={(e) => {
                        setregisterValue(prevState => ({...prevState, pwd: e.target.value}))
                    }}/>
                    <Button type={"primary"} onClick={handleRegister}>注册</Button>
                </Space>
            </>,
        }
    ];
    return (
        <>

            <Card>
                <Tabs centered style={{width: 200, margin: '0 auto'}} defaultActiveKey="1" items={items}/>
            </Card>

        </>
    )
}
export default Login