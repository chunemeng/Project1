import {PREFIX, post, put, DUMMY_RESPONSE} from "./common";

export async function login(username, password) {
    const url = `${PREFIX}/user/login`;
    let result;
    try {
        result =
        result = await post(url, {username, password});
    } catch (e) {
        console.log(e);
        result = {
            ok: false,
            message: "网络错误！",
        }
    }
    return result;
}

export async function logout() {
    const url = `${PREFIX}/logout`;
    let res;
    try {
        res = await put(url);
    } catch (e) {
        console.log(e);
        res = DUMMY_RESPONSE;
    }
    return res;
}