// someComponent.test.js
import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../page/home';
import Profile from "../page/profile";
import {LoginFormPage} from "@ant-design/pro-components";
import { Typography } from 'antd';
import Login from "../page/login";



// 使用Mock文件来模拟antd模块
jest.mock('antd', () => ({
    useMessage: jest.fn(() => [jest.fn(), <div>Mocked Context Holder</div>])
}));

jest.mock('antd/es/message/useMessage', () => jest.fn());

jest.mock('antd/es/typography', () => {
    return {
        Title: ({children}) => <h1>{children}</h1>,
        Paragraph: ({children}) => <p>{children}</p>,
        Text: ({children}) => <span>{children}</span>,
        Link: ({children, href}) => <a href={href}>{children}</a>,
    };
});

jest.mock('antd', () => ({
    Layout: jest.fn().mockImplementation(() => ({
        Header: jest.fn().mockReturnValue(<div>Mocked Header</div>),
        Content: jest.fn().mockReturnValue(<div>Mocked Content</div>),
        Footer: jest.fn().mockReturnValue(<div>Mocked Footer</div>),
        Sider: jest.fn().mockReturnValue(<div>Mocked Sider</div>),
    })),
}));

jest.mock('antd/es/layout/Sider', () => {
    return ({children}) => <div>{children}</div>;
});

jest.mock('@ant-design/pro-components', () => ({
    LoginForm: jest.fn().mockImplementation(() => <div data-testid="mockLoginForm">Mocked LoginForm</div>),
    LoginFormPage: jest.fn().mockImplementation(() => <div data-testid="mockLoginFormPage">Mocked LoginFormPage</div>),
    ProFormText: jest.fn().mockImplementation(() => <div data-testid="mockProFormText">Mocked ProFormText</div>),
}));

test('should render MyComponent correctly', () => {
    let { getByText } = render(<HomePage />);

});
jest.mock('antd/es/typography', () => {
    const Typography = jest.requireActual('antd/es/typography'); // 导入实际的 Typography 组件
    return {
        ...Typography,
        Title: jest.fn().mockImplementation(({ children }) => <h1>{children}</h1>),
        Paragraph: jest.fn().mockImplementation(({ children }) => <p>{children}</p>),
        Text: jest.fn().mockImplementation(({ children }) => <span>{children}</span>),
        Link: jest.fn().mockImplementation(({ children, href }) => <a href={href}>{children}</a>),
    };
});
test('should render MyComponent correctly1', () => {
    render(<Login/>);
    render(<Profile/>);



});
