import { PATH_USER_PROFILE } from "@configs";
import axiosClient from "./axiosClient";

export const userApi = {
    getInfo: () => {
        const url = PATH_USER_PROFILE;
        return axiosClient.get(url);
    },
};
