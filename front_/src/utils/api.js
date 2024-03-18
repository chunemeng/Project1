import {requestUtils} from "./requestUtils.js";

/**
 * @description: 请求方法
 */
const RequestEnum = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

export function testApi() {
    return requestUtils({
        url: '/test',
        method: RequestEnum.GET,
    });
}

export function loginApi(params) {
    return requestUtils({
        url: '/user/login',
        method: RequestEnum.GET,
        params
    });
}

export function registerApi(data) {
    return requestUtils({
        url: '/user/register',
        method: RequestEnum.POST,
        data
    });
}

export function putUserApi(data) {
    return requestUtils({
        url: '/user',
        method: RequestEnum.PUT,
        data
    });
}

export function putAvatarApi(data, id) {
    return requestUtils({
        url: '/user/avatar/'+id,
        method: RequestEnum.PUT,
        data
    });
}
export function putPasswordApi(pwd, id) {
    return requestUtils({
        url: '/user/pwd/'+pwd+'/'+id,
        method: RequestEnum.PUT,
    });
}

export function projectAddApi(data) {
    return requestUtils({
        url: '/project',
        method: RequestEnum.POST,
        data
    });
}
export function userListApi(current) {
    return requestUtils({
        url: '/user/list/'+current,
        method: RequestEnum.GET,
    });
}
export function projectGetApi(type,timeLimit,tuijian,shengjiang,sous,status,current) {
    return requestUtils({
        url: '/project/'+type+'/'+timeLimit+'/'+tuijian+'/'+shengjiang+'/'+sous+'/'+status+'/'+current,
        method: RequestEnum.GET,
    });
}
export function projectGetByIdApi(id) {
    return requestUtils({
        url: '/project/id/'+id,
        method: RequestEnum.GET,
    });
}

export function biddingByUidPidApi(uid,pid) {
    return requestUtils({
        url: '/bidding/'+uid+'/'+pid,
        method: RequestEnum.GET,
    });
}
export function biddingSaveApi(data) {
    return requestUtils({
        url: '/bidding',
        method: RequestEnum.POST,
        data
    });
}
export function biddingByUIdApi(uid,status,current) {
    return requestUtils({
        url: '/bidding/uid/'+uid+"/"+status+"/"+current,
        method: RequestEnum.GET
    });
}
export function biddingByUidListApi(uid,current) {
    return requestUtils({
        url: '/project/list/'+uid+"/"+current,
        method: RequestEnum.GET
    });
}
export function projectCompleteBiddingApi(pid,uid) {
    return requestUtils({
        url: 'project/complete_Bidding/'+pid+"/"+uid,
        method: RequestEnum.POST
    });
}
export function projectProjectDevelopmentApi(pid,uid) {
    return requestUtils({
        url: '/project/project_development/'+pid+"/"+uid,
        method: RequestEnum.POST
    });
}
export function projectCompleteDevelopmentApi(pid,uid) {
    return requestUtils({
        url: '/project/complete_development/'+pid+"/"+uid,
        method: RequestEnum.POST
    });
}