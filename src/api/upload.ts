import axiosClient from "./axiosClient";
import { ILogin } from "@interfaces";
import { PATH_UPLOAD_SINGLE } from "@configs";

export const uploadApi = {
    single: async (params: FormData) => {
        const url = PATH_UPLOAD_SINGLE;
        return await axiosClient.post(url, params);
    },
};
