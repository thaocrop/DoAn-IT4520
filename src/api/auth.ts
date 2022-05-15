import axiosClient from "./axiosClient";
import { ILogin } from "@interfaces";
import { PATH_LOGIN, PATH_REGISTER } from "@configs";

export const authApi = {
    login: async (params: ILogin) => {
        const url = PATH_LOGIN;
        return await axiosClient.post(url, params);
    },
    register: async (params: ILogin) => {
        const url = PATH_REGISTER;
        return await axiosClient.post(url, params);
    },
};
