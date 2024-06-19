import {render, screen} from "@testing-library/react";
import {BasicLayout, PrivateLayout, SiderLayout} from "../component/layout"; // 假设SiderLayout在您的项目中位于这个文件


import {BrowserRouter as Router} from "react-router-dom"; // 使用BrowserRouter而不是MemoryRouter来更真实地模拟路由
import HomePage from '../page/home';

describe('HomePage component', () => {


    test('renders static components', () => {
        const { getByText } = render(<HomePage />);
        expect(getByText('start')).toBeInTheDocument();
        expect(getByText('statistic')).toBeInTheDocument();
        expect(getByText('TESTIMONIAL')).toBeInTheDocument();
    });

    test('renders booster component', () => {
        const { getByText } = render(<HomePage />);
        expect(getByText('booster')).toBeInTheDocument();
    });

    // Add more test cases to cover other parts of the component
});