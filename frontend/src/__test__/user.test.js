import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getMe, changePassword } from "../service/user"; 
const PREFIX = "https://api.example.com";

const DUMMY_RESPONSE = { status: "error", message: "Something went wrong" };

const mock = new MockAdapter(axios);

describe("getMe function", () => {
  it("should return user information", async () => {
    const expectedUser = { id: 1, username: "testuser" }; 

    mock.onGet(`${PREFIX}/user/me`).reply(200, expectedUser);

    const user = await getMe();
  });

  it("should handle error when fetching user information", async () => {
    mock.onGet(`${PREFIX}/user/me`).reply(500);

    const user = await getMe();
    expect(user).toBeNull(); 
  });
});

describe("changePassword function", () => {
  it("should successfully change password", async () => {
    const request = {oldPassword: "oldpass", newPassword: "newpass"};

    mock.onPut(`${PREFIX}/user/me/password`).reply(200, expectedResponse);

    const response = await changePassword(request);
  });

  it("should handle error when changing password", async () => {
    const request = {oldPassword: "oldpass", newPassword: "newpass"};

    mock.onPut(`${PREFIX}/user/me/password`).reply(500);

    const response = await changePassword(request);
  });
});


