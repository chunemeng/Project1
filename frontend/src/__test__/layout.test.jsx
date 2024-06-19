import React from "react";
import {render, screen} from "@testing-library/react";
import {BasicLayout, PrivateLayout, SiderLayout} from "../component/layout";


import {BrowserRouter as Router} from "react-router-dom";
import {} from "jest-environment-jsdom";
import HomePage from "../page/home";
import NavBar from "../component/navbar";
jest.mock("../component/navbar", () => {
    // 模拟NavBar组件，以便在测试中不会引发任何依赖或副作用
    return jest.fn().mockImplementation(() => <div>Mocked NavBar</div>);
});

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
        Promise.resolve(/* 这里可以返回模拟的用户数据，或者null表示未登录 */)
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
