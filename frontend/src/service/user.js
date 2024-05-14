import {DUMMY_RESPONSE, PREFIX, getJson, put} from "./common";

export async function getMe() {
    let me = {"nickname": "test"};
    return me;
    // const url = `${PREFIX}/user/me`;
    // let me = null;
    // try {
    //     me = await getJson(url);
    // } catch(e) {
    //     console.log(e);
    // }
    // return me;
}

export async function changePassword(request) {
    let res = {"ok": "true"};
    return res;
    // const url = `${PREFIX}/user/me/password`;
    // let res;
    // try {
    //     res = await put(url, request);
    // } catch(e) {
    //     console.log(e);
    //     res = DUMMY_RESPONSE;
    // }
    // return res;
}