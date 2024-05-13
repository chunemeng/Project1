import {getJson, PREFIX} from "./common";

export async function getWorkerById(id) {
    // const url = `${PREFIX}/worker/${id}`;
    // let worker;
    // try {
    //     worker = await getJson(url);
    // } catch (e) {
    //     console.log(e);
    //     worker = null;
    // }
    let worker = {
        "id": id,
        "title": "[自助测试]快速部署用于测试",
        "name":"测试工作室",
        "description": "我们立志于为用户提供测试用例，在服务的100年间，我们收获无数好评"
    };
    return worker;
}