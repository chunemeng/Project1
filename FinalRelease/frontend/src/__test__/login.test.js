import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { login, logout } from "../service/login";
import {PREFIX, request} from "../service/common";

const DUMMY_RESPONSE = {
  success: false,
  message: "Dummy response for testing.",
};


const mock = new MockAdapter(request);
describe("User API Tests", () => {
  it("should login successfully", async () => {
    const username = "testUser";
    const password = "testPass";
    const expectedResponse = { ok: true, token: "fake-token" };

    mock.onPost(`${PREFIX}/user/login`).reply(200, expectedResponse);

    const result = await login(username, password);
  });

  it("should handle login error", async () => {
    const username = "testUser";
    const password = "testPass";

    mock.onPost(`${PREFIX}/user/login`).reply(500);

    const result = await login(username, password);
    expect(result).toEqual({
      ok: false,
      message: "网络错误！",
    });
  });

  it("should logout successfully", async () => {
    const expectedResponse = {
      ok: true,
      message: "Logged out successfully",
    };

    mock.onPut(`${PREFIX}/user/logout`).reply(200, expectedResponse);
    const result = await logout();

  });

  it("should handle logout error", async () => {
    mock.onPut(`${PREFIX}/user/logout`).reply(500);

    const result = await logout();
  });
});
