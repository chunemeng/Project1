import {DUMMY_RESPONSE, PREFIX, getJson, put} from "./common";

export async function getMe() {
    const url = `${PREFIX}/user/me`;
    let me = null;
    try {
        me = await getJson(url);
    } catch (e) {
        console.log(e);
    }
    return me;
}

export async function getUserById(id) {
    const url = `${PREFIX}/user/${id}`;
    let me = null;
    try {
        me = await getJson(url);
    } catch (e) {
        console.log(e);
    }
    return me;
}

export async function changePassword(request) {
    const url = `${PREFIX}/user/me/password`;
    let res;
    try {
        res = await put(url, request);
    } catch (e) {
        console.log(e);
        res = DUMMY_RESPONSE;
    }
    return res;
}

export async function register(username,email,password) {
    const url = `${PREFIX}/user/register`;
    let result;
    try {
        result = await post(url, { username, email,password });
    } catch (e) {
        console.log(e);
        result = {
            ok: false,
            message: "网络错误！",
        };
    }
    return result;
}