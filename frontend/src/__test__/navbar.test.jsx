import React from 'react';
import {act} from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import NavBar from '../component/navbar';
import {logout} from '../service/login'; // 导入 logout 函数
import {handleBaseApiResponse} from '../utils/requestUtils'; // 导入 handleBaseApiResponse 函数

// Mock logout function
jest.mock('../service/login', () => ({
    logout: jest.fn(),
}));

jest.mock('antd/es/message/useMessage', () => {
    return jest.fn().mockImplementation(() => ({
        success: jest.fn(),
        error: jest.fn(),
        // Add other methods as needed
    }));
});
jest.mock('antd', () => ({
    Layout: jest.fn().mockImplementation(() => ({
        Header: jest.fn().mockReturnValue(<div>Mocked Header</div>),
        Content: jest.fn().mockReturnValue(<div>Mocked Content</div>),
        Footer: jest.fn().mockReturnValue(<div>Mocked Footer</div>),
        Sider: jest.fn().mockReturnValue(<div>Mocked Sider</div>),
    })),
}));

// Mock handleBaseApiResponse function
jest.mock('../utils/requestUtils', () => ({
    handleBaseApiResponse: jest.fn(),
}));

describe('NavBar', () => {
    test('renders NavBar with logo and links', () => {
        render(
            <MemoryRouter>
                <NavBar user={{nickname: 'TestUser'}}/>
            </MemoryRouter>
        );

        expect(screen.getByAltText('logo')).toBeInTheDocument();
        expect(screen.getByText('众智')).toBeInTheDocument();
        expect(screen.getByText('首页')).toBeInTheDocument();
        expect(screen.getByText('任务')).toBeInTheDocument();
        expect(screen.getByText('众包')).toBeInTheDocument();
        expect(screen.getByText('需求')).toBeInTheDocument();
    });

    test('handles menu click', async () => {
        render(
            <MemoryRouter>
                <NavBar user={{nickname: 'TestUser'}}/>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('任务'));
        expect(window.location.pathname).toBe('/task');

        fireEvent.click(screen.getByText('个人主页'));
        expect(window.location.pathname).toBe('/profile');
    });

    test('handles logout click', async () => {
        render(
            <MemoryRouter>
                <NavBar user={{nickname: 'TestUser'}}/>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('退出登录'));

        // Wait for async operations to finish
        await act(async () => {
        });

        expect(logout).toHaveBeenCalled();
        expect(handleBaseApiResponse).toHaveBeenCalled();
        expect(window.location.pathname).toBe('/login');
    });
});