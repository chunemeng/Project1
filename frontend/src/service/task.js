import {getJson, PREFIX} from "./common";

export async function searchTasks(keyword, pageIndex, pageSize) {
    const url = `${PREFIX}/tasks?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    let tasks;
    try {
        tasks = await getJson(url);
    } catch (e) {
        console.log(e);
        tasks = {
            total: 0,
            items: []
        };
    }
    return tasks;
}