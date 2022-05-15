const queryString = require("query-string");

import { PATH_POST, PATH_POST_ALL } from "@configs";
import { IPostForm, IPostPage } from "@interfaces";
import axiosClient from "./axiosClient";

export const postApi = {
    createPosts: async (params: IPostForm) => {
        const url = PATH_POST;
        return await axiosClient.post(url, params);
    },
    getPosts: async (params: IPostPage) => {
        const url = PATH_POST;
        const query = queryString.stringify(params);
        return await axiosClient.get(`${url}?${query}`);
    },
    getAll: async () => {
        const url = PATH_POST_ALL;
        return await axiosClient.get(`${url}`);
    },
    getPost: async (id: string) => {
        const url = PATH_POST;
        return await axiosClient.get(`${url}/${id}`);
    },
    deletePost: async (id: string) => {
        const url = PATH_POST;
        return await axiosClient.delete(`${url}/${id}`);
    },
};
