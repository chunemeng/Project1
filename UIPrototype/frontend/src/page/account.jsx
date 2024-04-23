import {Button, Input, message, Space, Typography} from 'antd'
import {useState} from "react";
import {putPasswordApi} from "../utils/api.js";

const {Title, Paragraph, Text, Link} = Typography;
const Account = () => {
    const [pwd, setPwd] = useState({
        pwd: '',
        new_pwd: '',
        new_pwd2: ''
    })
    const [messageApi, contextHolder] = message.useMessage();

    function handlePutPassword() {
        if (pwd.pwd !== '' && pwd.new_pwd !== '' && pwd.new_pwd2 !== '') {
            if (pwd.new_pwd === pwd.new_pwd2) {
                const user = JSON.parse(sessionStorage.getItem("user"))
                if (user.password === pwd.pwd) {
                    putPasswordApi(pwd.new_pwd, user.id).then((resp) => {
                        if (resp.data.code === 200) {
                            messageApi.success("密码已修改")
                            user.password = pwd.new_pwd
                            sessionStorage.setItem("user", JSON.stringify(user))
                            setPwd({
                                pwd: '',
                                new_pwd: '',
                                new_pwd2: ''
                            })
                        }
                    })
                } else {
                    messageApi.error("旧密码不正确")
                }
            } else {
                messageApi.error("两次新密码不一致")
            }
        } else {
            messageApi.error("不能有空")
        }
    }

    return (
        <>
            {contextHolder}
            <Title level={5}>账户管理</Title>
            <Space direction={"vertical"}>
                <Space style={{marginTop: 20}} direction={"vertical"}>
                    <Text>旧密码</Text>
                    <Space>
                        <Input value={pwd.pwd} onChange={(e) => {
                            setPwd(prevState => ({...prevState, pwd: e.target.value}))
                        }}/>
                    </Space>
                    <Text>新密码</Text>
                    <Space>
                        <Input value={pwd.new_pwd} onChange={(e) => {
                            setPwd(prevState => ({...prevState, new_pwd: e.target.value}))
                        }}/>
                    </Space>
                    <Text>确认密码</Text>
                    <Space>
                        <Input value={pwd.new_pwd2} onChange={(e) => {
                            setPwd(prevState => ({...prevState, new_pwd2: e.target.value}))
                        }}/>
                    </Space>
                    <Button type={"primary"} onClick={handlePutPassword}>更新</Button>
                </Space>

            </Space>
        </>
    )
}
export default Account