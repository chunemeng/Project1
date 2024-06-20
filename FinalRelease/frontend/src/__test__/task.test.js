import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {addTask, getTaskById, getTaskByUserId, getTaskByWorkerId, orderTask, searchTasks} from "../service/task";
import {request} from "../service/common";

const PREFIX = "https://api.example.com";

const mock = new MockAdapter(request);

describe("searchTasks function", () => {

  it("should return tasks successfully", async () => {
    const keyword = "test";
    const pageIndex = 1;
    const pageSize = 10;
    const expectedTasks = {
      total: 5,
      items: [{ id: 1, name: "Task 1" }],
    };

    mock
      .onGet(
        `${PREFIX}/tasks/get?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`
      )
      .reply(200, expectedTasks);

    const tasks = await searchTasks(keyword, pageIndex, pageSize);
  });

  it("should handle error when tasks", async () => {
    const keyword = "test";
    const pageIndex = 1;
    const pageSize = 10;

    mock
        .onGet(
            `${PREFIX}/tasks/get?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`
        )
        .reply(500);

    const tasks = await getTaskByUserId(keyword, pageIndex, pageSize, true);
  });

  it("should handle error when fetching tasks", async () => {
    const keyword = "test";
    const pageIndex = 1;
    const pageSize = 10;

    mock.onGet()

    mock
      .onGet(
        `${PREFIX}/tasks/get?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`
      )
      .reply(500);

    mock.on

    mock
        .onGet(
            `${PREFIX}/task/worker?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`
        )
        .reply(500);
    let id = 1;

    mock.onPost(`${PREFIX}/task/add`).reply(200, 0);

    mock.onGet(`${PREFIX}/task/${id}`).reply(200, []);

    mock.onPost(`${PREFIX}/task/order`).reply(200, []);

    let g = await addTask(keyword);
    g = await orderTask(1);

    g  =  await getTaskById(1);

    g = await getTaskByWorkerId(keyword, pageIndex, pageSize);

    const tasks = await searchTasks(keyword, pageIndex, pageSize);
    expect(tasks).toEqual({
      total: 0,
      items: [],
    });
  });
});
