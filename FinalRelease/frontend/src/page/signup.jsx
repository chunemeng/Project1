import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import {
    LoginForm,
    ProConfigProvider,
    ProFormText,
} from "@ant-design/pro-components";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { BasicLayout } from "../component/layout";
import { handleBaseApiResponse } from "../utils/requestUtils";
import { register } from "../service/user";
import {Card, Row} from "antd";
import useMessage from "antd/es/message/useMessage";

export default function SignupPage() {
  const navigate = useNavigate();
  const [messageApi, setMessageApi] = useMessage();
  const tryregister = async ({ username, email, password, password_s }) => {
    console.log({ username, email, password, password_s });
    if (!username || !email || !password) {
      messageApi.error("输入不能为空", 0.5);
    }
    if (password !== password_s) {
      messageApi.error("两次密码不相同", 0.5);
    } else {
      let reg = new RegExp(
        "^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$",
      );
      if (!reg.test(email)) {
        messageApi.error("错误的邮箱格式", 0.5);
      } else {
        let res = await register(username, email, password);
        handleBaseApiResponse(res, messageApi);
      }
    }
  };

  return (
      <BasicLayout>
          <ProConfigProvider hashed={false}>
              <Card className="card-container" style={{width: "80%"}}>
                  <Row className="flex-row">
                      <img
                          src={process.env.PUBLIC_URL + "login.png"}
                          style={{ width: "50%", height: "50%" }}
                          alt="logo"
                      />
                      <Card>
                          <LoginForm
                              logo={process.env.PUBLIC_URL + "logo.png"}
                              subTitle="众智平台"
                              style={{ height: "80%", width: "auto" }}
                              onFinish={tryregister}
                              submitter={{
                                  searchConfig: {
                                      submitText: "注册",
                                  },
                                  submitButtonProps: {
                                      style: {
                                          width: "100%",
                                      },
                                  },
                                  resetButtonProps: false,
                              }}
                          >
                              <ProFormText
                                  name="username"
                                  fieldProps={{
                                      size: "large",
                                      prefix: <UserOutlined className={"prefixIcon"} />,
                                  }}
                                  placeholder={"请输入用户名"}
                                  rules={[
                                      {
                                          required: true,
                                          message: "用户名不能为空",
                                      },
                                  ]}
                              />
                              <ProFormText
                                  name="email"
                                  fieldProps={{
                                      size: "large",
                                      prefix: <MailOutlined className={"prefixIcon"} />,
                                  }}
                                  placeholder={"请输入邮箱"}
                                  rules={[
                                      {
                                          required: true,
                                          message: "邮箱不能为空",
                                      },
                                  ]}
                              />
                              <ProFormText.Password
                                  name="password_s"
                                  fieldProps={{
                                      size: "large",
                                      prefix: <LockOutlined className={"prefixIcon"} />,
                                      strengthtext:
                                          "Password should contain numbers, letters and special characters, at least 8 characters long.",
                                  }}
                                  placeholder={"请输入密码"}
                                  rules={[
                                      {
                                          required: true,
                                          message: "密码不能为空",
                                      },
                                  ]}
                              />
                              <ProFormText.Password
                                  name="password"
                                  fieldProps={{
                                      size: "large",
                                      prefix: <LockOutlined className={"prefixIcon"} />,
                                      strengthtext:
                                          "Password should contain numbers, letters and special characters, at least 8 characters long.",
                                  }}
                                  placeholder={"确认密码"}
                                  rules={[
                                      {
                                          required: true,
                                          message: "密码不能为空",
                                      },
                                  ]}
                              />
                              <div
                                  style={{
                                      marginBlockEnd: 24,
                                      height: 20,
                                  }}
                              >
                                  <Link
                                      to={"/login"}
                                      style={{
                                          float: "left",
                                      }}
                                  >
                                      已有账号？前往登录
                                  </Link>
                                  <a
                                      style={{
                                          float: "right",
                                      }}
                                  >
                                      忘记密码
                                  </a>
                              </div>
                          </LoginForm>
                      </Card>
                  </Row>
              </Card>
          </ProConfigProvider>
      </BasicLayout>
  );
}
