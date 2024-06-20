// __mocks__/antd.js
import React from 'react';

const messageApiMock = jest.fn();
const contextHolderMock = <div>Mocked Context Holder</div>;

const useMessageMock = jest.fn(() => [messageApiMock, contextHolderMock]);

export const message = {
    useMessage: useMessageMock,
};
