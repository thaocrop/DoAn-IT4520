import { PATH_LOCATION } from "@configs";
import axiosClient from "./axiosClient";

export const locationApi = {
    getLocations: async () => {
        const url = PATH_LOCATION;
        return await axiosClient.get(url);
    },
};
