import { PATH_USER_PROFILE, PATH_USER_ALL } from "@configs";
import axiosClient from "./axiosClient";

export const userApi = {
    getInfo: async () => {
        const url = PATH_USER_PROFILE;
        return await axiosClient.get(url);
    },
    getAll: async () => {
        const url = PATH_USER_ALL;
        return await axiosClient.get(`${url}`);
    },
};
