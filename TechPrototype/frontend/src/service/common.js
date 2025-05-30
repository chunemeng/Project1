import axios from "axios";

const request = axios.create({
    baseURL: '/api'
});

export async function get(url) {
    return await request.get(url, {
        withCredentials: true,
    });
}

export async function getJson(url) {
    let res = await request.get(url, {
        withCredentials: true,
    });
    return res.data;
}

export async function put(url, data) {
    let res = await request.put(url, JSON.stringify(data), {
        headers: {
            "RequestToken": "RequestTokenValue",

            "Content-Type": "application/json",
        }, withCredentials: true,
    });
    return res.data;
}

export async function del(url) {
    let res = await request.delete(url, {
        withCredentials: true,
    });
    return res.data;
}

export async function post(url, data) {
    let res = await request.post(url, JSON.stringify(data), {
        headers: {
            "RequestToken": "RequestTokenValue", "Content-Type": "application/json",
        }, withCredentials: true,
    });
    return res.data;
}

export const PREFIX = ``;
export const IMAGE_PREFIX = `/images`;
export const DUMMY_RESPONSE = {
    ok: false, message: "网络错误！",
};
