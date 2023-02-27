import axios from ".";

export default {
    login: (phoneNumber: string, password: string) =>
        axios.post("/", {
            data: {phoneNumber, password},
            url: "/auth/login",
            method: "POST"
        }),
    getUser: () => axios.post("/", {url: '/v1/current-user-info', method: "GET"}),
};