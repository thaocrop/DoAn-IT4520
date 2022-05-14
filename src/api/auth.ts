import axiosClient from "./axiosClient";
import { ILogin } from "@interfaces";
import { PATH_LOGIN, PATH_REGISTER } from "@configs";

export const authApi = {
    login: (params: ILogin) => {
        const url = PATH_LOGIN;
        return axiosClient.post(url, params);
    },
    register: (params: ILogin) => {
        const url = PATH_REGISTER;
        return axiosClient.post(url, params);
    },
};
