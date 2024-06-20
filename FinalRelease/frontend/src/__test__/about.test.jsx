// someComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../page/home';
import About from "../page/about"; // 假设这是你要测试的组件

// 使用Mock文件来模拟antd模块
jest.mock('antd', () => ({
    useMessage: jest.fn(() => [jest.fn(), <div>Mocked Context Holder</div>])
}));

jest.mock('antd/es/message/useMessage', () => jest.fn());

jest.mock('antd', () => ({
    Layout: jest.fn().mockImplementation(() => ({
        Header: jest.fn().mockReturnValue(<div>Mocked Header</div>),
        Content: jest.fn().mockReturnValue(<div>Mocked Content</div>),
        Footer: jest.fn().mockReturnValue(<div>Mocked Footer</div>),
        Sider: jest.fn().mockReturnValue(<div>Mocked Sider</div>),
    })),
}));


test('should render MyComponent correctly', () => {
    const { getByText } = render(<About />);

    // 检查是否正确渲染了模拟的contextHolder内容
    expect(getByText('Mocked Context Holder')).toBeInTheDocument();
});
