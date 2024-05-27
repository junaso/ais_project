import { LoginResponse } from "types/visitRecord"

export const loginMock: LoginResponse = {
    message: "ok",
    employee: {
        empNo: 1,
        empId: "ais123",
        lastName: "南",
        firstName: "俊",
        lastKanaName: "ナム",
        firstKanaName: "ジュン",
        securityLevel: 3,
        mail: "ais@ais.com"
    },
    token: "testToken",
}
