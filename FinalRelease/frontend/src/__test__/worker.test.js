import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {getWorkerById, searchUnions, searchWorkers} from "../service/worker";
import {request} from "../service/common";
import {setWorker} from "../service/task"; // 假设函数在yourModule.js文件中

// 假设的PREFIX
const PREFIX = "https://api.example.com";

// 创建一个MockAdapter实例
const mock = new MockAdapter(request);

describe("getWorkerById function", () => {
    it("should return a worker object with the given id", () => {
        const id = 123;
        const expectedWorker = {
            id: id,
            title: "[自助测试]快速部署用于自助测试的工作室",
            name: "测试工作室",
            description:
                "我们立志于为用户提供测试用例, 旨在让用户花费最少的价钱, 实现最全面的测试, 在服务的100年间，我们收获无数好评",
        };

        const worker = getWorkerById(id);
    });
});

describe("searchUnions function", () => {
    it("should return a list of unions when search is successful", async () => {
        const keyword = "test";
        const pageIndex = 0;
        const pageSize = 10;
        const expectedUnions = {
            total: 2,
            items: [
                {id: 1, name: "Union 1"},
                {id: 2, name: "Union 2"},
            ],
        };

        mock
            .onGet(
                `${PREFIX}/unions?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`
            )
            .reply(200, expectedUnions);

        const unions = await searchUnions(keyword, pageIndex, pageSize);
    });

    it("should handle error when searching unions", async () => {
        const keyword = "test";
        const pageIndex = 0;
        const pageSize = 10;
        let id = 1, workerId = 1;
        mock.onPut(`${PREFIX}/task/${id}?worker=${workerId}`).reply(200, []);
        let ggg = await setWorker(id, workerId);
        mock
            .onGet(
                `${PREFIX}/unions?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`
            )
            .reply(500);

        mock.onGet(
            `${PREFIX}/worker/get?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&status=${true}`
        ).reply(500);
        let g = await searchWorkers(keyword, pageIndex, pageSize);
        const unions = await searchUnions(keyword, pageIndex, pageSize);
    });
});
