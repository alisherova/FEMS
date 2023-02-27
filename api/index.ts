import axios from "axios";
import { Cookies } from "react-cookie";
import { setUser, store } from "store";
import Router from "next/router";

export const MainApi = "/api/v1";

const cookie = new Cookies();
console.log(MainApi)
const instance = axios.create({
    baseURL: `${MainApi}/`,
});

instance.interceptors.request.use(
    async (config: any) => {
        config.meta = config.meta || {};
        config.meta.requestStartedAt = new Date().getTime();
        config.headers = {
            "Content-Type": "application/json",
            ...config.headers,
            timeout: 5000,
            "token": cookie.get("token"),
        };
        return config;
    },
    (error) => Promise.reject(error.response)
);

instance.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            cookie.remove("token");
            store.dispatch(setUser(null));
            Router.push("/login");
        }
        return Promise.reject(error.response);
    }
);

export default instance;
