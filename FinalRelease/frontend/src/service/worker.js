import {getJson, PREFIX} from "./common";

export async function getWorkerById(id) {
    const url = `${PREFIX}/worker/${id}`;
    let worker;
    try {
        worker = await getJson(url);
    } catch (e) {
        console.log(e);
        worker = null;
    }
    return worker;
}

export async function searchUnions(keyword, pageIndex, pageSize) {
    const url = `${PREFIX}/unions?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}`;
    let unions;
    try {
        unions = await getJson(url);
    } catch (e) {
        console.log(e);
        unions = {
            total: 0,
            items: []
        };
    }
    return unions;
}

export async function searchWorkers(keyword, pageIndex, pageSize, status) {
    const url = `${PREFIX}/worker/get?keyword=${keyword}&pageIndex=${pageIndex}&pageSize=${pageSize}&status=${status}`;
    let workers;
    try {
        workers = await getJson(url);
    } catch (e) {
        console.log(e);
        workers = {
            total: 0,
            items: []
        };
    }
    return workers;
}