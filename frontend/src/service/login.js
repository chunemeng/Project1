import {PREFIX, post_set, put, DUMMY_RESPONSE} from "./common";
import cookie from "react-cookies";

export async function login(username, password) {
    const url = `${PREFIX}/user/login`;
    let result;
    try {
        result = await post_set(url, {username, password});
        console.log(result);
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
    const url = `${PREFIX}/user/logout`;
    let res;
    try {
        res = await put(url);
    } catch (e) {
        console.log(e);
        res = DUMMY_RESPONSE;
    }
    if (res.ok) {
        cookie.remove("user-sutaats");
    }
    return res;
}