import {
    login,
    startLogin,
    logout,
    startLogout
} from "../../actions/auth";

test("should setup login action object", () => {
    const uid = "5sdf6sd65f1sd651f";
    const action = login(uid);
    expect(action).toEqual({ type: "LOGIN", uid });
});

test("should setup logout action object", () => {
    const action = logout();
    expect(action).toEqual({ type: "LOGOUT" });
});