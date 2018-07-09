import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
    const state = authReducer({}, { type: "LOGIN", uid: "1" });
    expect(state).toEqual({ uid: "1" });
});

test("should clear uid for logout", () => {
    const state = authReducer({ uid: "anything" }, { type: "LOGOUT" });
    expect(state).toEqual({});
});