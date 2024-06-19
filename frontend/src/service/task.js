import {DUMMY_RESPONSE, getJson, PREFIX, post, put} from "./common";

export async function searchTasks(keyword, pageIndex, pageSize, category, status) {
    const url = `${PREFIX}/task/get?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&category=${category}&status=${status}`;
    let tasks;
    try {
        tasks = await getJson(url);
    } catch (e) {
        console.log(e);
        tasks = {
            total: 0, items: []
        };
    }
    return tasks;
}

export async function getTaskByUserId(keyword, pageIndex, pageSize, status) {
    const url = `${PREFIX}/task/mine?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&status=${status}`;
    let tasks;
    try {
        tasks = await getJson(url);
    } catch (e) {
        console.log(e);
        tasks = null;
    }
    return tasks;
}

export async function orderTask(id) {
    const url = `${PREFIX}/task/order`;
    let res;
    try {
        res = await post(url, id);
    } catch (e) {
        console.log(e);
        res = null;
    }
    return res;
}

export async function getTaskByWorkerId(keyword, pageIndex, pageSize, status) {
    const url = `${PREFIX}/task/worker?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&status=${status}`;
    let tasks;
    try {
        tasks = await getJson(url);
    } catch (e) {
        console.log(e);
        tasks = null;
    }
    return tasks;
}

export async function getTaskById(id) {
    const url = `${PREFIX}/task/${id}`;
    let task;
    try {
        task = await getJson(url);
    } catch (e) {
        console.log(e);
        task = null;
    }
    return task;
}

export async function addTask(task) {
    const url = `${PREFIX}/task/add`;
    let res;
    try {
        res = await post(url, task);
    } catch (e) {
        console.log(e);
        res = DUMMY_RESPONSE;
    }
    console.log(res);
    return res;
}

export async function setWorker(id, workerId){
    const url = `${PREFIX}/task/${id}?worker=${workerId}`;
    let res;
    try{
        res = await put(url);
    } catch (e) {
        console.log(e);
        res = DUMMY_RESPONSE;
    }
    console.log(res);
    return res;
}