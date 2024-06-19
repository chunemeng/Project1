// api.js

import axios from 'axios';

const request = axios.create({
    baseURL: '/api',
});

export async function fetchData() {
    return await request.get('/data');
}

// api.test.js

import MockAdapter from 'axios-mock-adapter';

describe('API requests', () => {
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(request);
    });


    test('should fetch data', async () => {
        const responseData = { message: 'Data fetched successfully' };
        mock.onGet('/api/data').reply(200, responseData);

        const response = await fetchData();
        expect(response.data).toEqual(responseData);
    });
});
