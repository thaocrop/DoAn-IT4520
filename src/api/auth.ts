import axiosClient from "./axiosClient";
import { ILogin, ICreatePassword } from "src/interfaces";

export const authApi = {
    login: (params: ILogin) => {
        const url = "/auth/login";
        return axiosClient.post(url, params);
    },
    getInfo: () => {
        const url = "/users/profile";
        return axiosClient.get(url);
    },
    resetPassword: (params: ICreatePassword) => {
        const url = "/auth/reset-password";
        return axiosClient.put(url, params);
    },
    refreshToken: (refreshToken: string) => {
        const url = "/auth/login-refresh-token";
        const params = {
            refreshToken,
        };
        return axiosClient.post(url, params);
    },
    sendEmail: (value: string) => {
        const url = "auth/send-reset-password";
        const params = {
            email: value,
        };
        return axiosClient.post(url, params);
    },
    register: (params: { email: string; inviteId: string }) => {
        const url = "auth/register";
        return axiosClient.post(url, params);
    },
    createPassword: (params: { fullName: string; password: string; resetPasswordId: string }) => {
        const url = "auth/create-password";
        return axiosClient.put(url, params);
    },
};
