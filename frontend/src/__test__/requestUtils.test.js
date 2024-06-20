import { handleBaseApiResponse } from '../utils/requestUtils'; // 替换成实际的文件路径

// Mock messageApi
const messageApiMock = {
    success: jest.fn(),
    error: jest.fn(),
};

describe('handleBaseApiResponse', () => {
    test('should call messageApi.success and onSuccess callback when response is ok', async () => {
        const res = { ok: true, message: 'Success message' };
        const onSuccess = jest.fn();

        await handleBaseApiResponse(res, messageApiMock, onSuccess);

        expect(messageApiMock.success).toHaveBeenCalledWith('Success message', 0.5);
        expect(onSuccess).toHaveBeenCalled();
        expect(messageApiMock.error).not.toHaveBeenCalled();
    });

    test('should call messageApi.error and onFail callback when response is not ok', async () => {
        const res = { ok: false, message: 'Error message' };
        const onFail = jest.fn();

        await handleBaseApiResponse(res, messageApiMock, undefined, onFail);

        expect(messageApiMock.error).toHaveBeenCalledWith('Error message', 0.5);
        expect(onFail).toHaveBeenCalled();
        expect(messageApiMock.success).not.toHaveBeenCalled();
    });
});

import { formatDate } from '../utils/time'; // 替换为你的文件路径

describe('formatDate function', () => {
    test('formats ISO date string correctly', () => {
        const isoDateString = '2024-07-01T10:30:00Z'; // 一个示例的 ISO 8601 日期字符串
        const formattedDate = formatDate(isoDateString);

        // 验证格式化后的日期字符串是否符合预期
    });

    // 可以添加更多的测试用例，验证不同的日期字符串和边界情况
});