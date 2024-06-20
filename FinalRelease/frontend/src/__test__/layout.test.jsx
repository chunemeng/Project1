import React from "react";
import {render, screen} from "@testing-library/react";
import {BasicLayout, PrivateLayout, SiderLayout} from "../component/layout";


import {BrowserRouter as Router} from "react-router-dom";
import {} from "jest-environment-jsdom";

jest.mock('antd/es/message/useMessage', () => jest.fn());


jest.mock('antd', () => ({
    Layout: jest.fn().mockImplementation(() => ({
        Header: jest.fn().mockReturnValue(<div>Mocked Header</div>),
        Content: jest.fn().mockReturnValue(<div>Mocked Content</div>),
        Footer: jest.fn().mockReturnValue(<div>Mocked Footer</div>),
        Sider: jest.fn().mockReturnValue(<div>Mocked Sider</div>),
    })),
}));

jest.mock("../page/about", () => {
    // 模拟About组件
    return jest.fn().mockImplementation(() => <div>Mocked About</div>);
});

test('renders BasicLayout correctly', () => {
    const children = <div>Test Content</div>;

    const { getByText } = render(
        <Router>
            <BasicLayout user={null}>{children}</BasicLayout>
        </Router>
    );
});

test('renders Private correctly', () => {
    const children = <div>Test Content</div>;

    const { getByText } = render(
        <Router>
            <PrivateLayout user={null}>{children}</PrivateLayout>
        </Router>
    );
});
describe("BasicLayout component", () => {
    it("renders correctly with children and footer", () => {
        const children = <div>Mock Children</div>;

        render(
            <Router>
                <BasicLayout user={null}>{children}</BasicLayout>
            </Router>
        );

        // 检查Header是否正确渲染并包含Mocked NavBar
        const header = screen.getByRole("banner");


        // 检查Content是否正确渲染并包含children
        const content = screen.getByRole("main");


        // 检查Footer是否正确渲染并包含Mocked About
        const footer = screen.getByRole("contentinfo");

    });
});
jest.mock("../service/user", () => ({
    getMe: jest.fn(() =>
        Promise.resolve({})
    ),
}));

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn().mockImplementation(() => jest.fn()),
}));

describe("SiderLayout component", () => {
    it("renders SiderLayout correctly with menus", async () => {
        const children = <div>Mock Children</div>;
        render(
            <Router>
                <SiderLayout user={null}>{children}</SiderLayout>
            </Router>
        );
    });

    // 你可以添加更多的测试用例来覆盖不同的场景，比如用户未登录的情况
});

import { act } from '@testing-library/react';

describe('PrivateLayout', () => {
    test('redirects to login if user is not logged in', async () => {
        // Mock getMe function to return null or false response
        getMe.mockResolvedValueOnce(null);

        // Render PrivateLayout component
        render(<PrivateLayout />);

        // Wait for the checkLogin effect to finish
        await act(async () => {});

        // Expect to navigate to /login
        expect(window.location.pathname).toBe('/login');
    });

    test('renders children if user is logged in', async () => {
        // Mock getMe function to return a valid user object
        const user = { id: 1, username: 'testUser' };
        getMe.mockResolvedValueOnce({ ok: true, data: user });

        // Render PrivateLayout component with children
        render(
            <PrivateLayout>
                <div data-testid="child">Test Child</div>
            </PrivateLayout>
        );

        // Wait for the checkLogin effect to finish
        await act(async () => {});

        // Expect to render the child component
        expect(screen.getByTestId('child')).toBeInTheDocument();
    });
});

describe('SiderLayout', () => {
    test('redirects to login if user is not logged in', async () => {
        // Mock getMe function to return null or false response
        getMe.mockResolvedValueOnce(null);

        // Render SiderLayout component
        render(<SiderLayout menus={<div>Test Menu</div>} />);

        // Wait for the checkLogin effect to finish
        await act(async () => {});

        // Expect to navigate to /login
        expect(window.location.pathname).toBe('/login');
    });

    test('renders children and menus if user is logged in', async () => {
        // Mock getMe function to return a valid user object
        const user = { id: 1, username: 'testUser' };
        getMe.mockResolvedValueOnce({ ok: true, data: user });

        // Render SiderLayout component with children and menus
        render(
            <SiderLayout menus={<div data-testid="menu">Test Menu</div>}>
                <div data-testid="child">Test Child</div>
            </SiderLayout>
        );

        // Wait for the checkLogin effect to finish
        await act(async () => {});

        // Expect to render the child component and menu
        expect(screen.getByTestId('child')).toBeInTheDocument();
        expect(screen.getByTestId('menu')).toBeInTheDocument();
    });
});
describe('PrddivateLayout', () => {
    test('redirects to login if user is not logged in', async () => {
        // Mock getMe function to return null or false response
        getMe.mockResolvedValueOnce(null);

        // Render PrivateLayout component
        render(<PrivateLayout />);

        // Wait for the checkLogin effect to finish
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0)); // 等待异步操作完成
        });

        // Expect to navigate to /login
        expect(window.location.pathname).toBe('/login');
    });

    test('renders children if user is logged in', async () => {
        // Mock getMe function to return a valid user object
        const user = { id: 1, username: 'testUser' };
        getMe.mockResolvedValueOnce({ ok: true, data: user });

        // Render PrivateLayout component with children
        render(
            <PrivateLayout>
                <div data-testid="child">Test Child</div>
            </PrivateLayout>
        );

        // Wait for the checkLogin effect to finish
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 0)); // 等待异步操作完成
        });

        // Expect to render the child component
        expect(screen.getByTestId('child')).toBeInTheDocument();
    });
});

describe('YourComponent', () => {
    test('should execute handleEffect in useEffect with empty dependency array', async () => {
        const mockHandleEffect = jest.fn();

        // 模拟组件渲染
        render(<PrivateLayout handleEffect={mockHandleEffect} />);

        // 等待 useEffect 中的函数执行完成
        await new Promise((resolve) => setTimeout(resolve, 0));

        // 断言 handleEffect 被调用
        expect(mockHandleEffect).toHaveBeenCalled();
    });
});
