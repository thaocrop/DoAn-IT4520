import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

import { IUser } from "@interfaces";
import { userApi } from "@api";
import { RootState } from ".";
import { logout } from "./auth";

interface IState {
    profile?: IUser;
}

const initialState: IState = {
    profile: undefined,
};

export const getUser = () => async (dispatch: Dispatch<any>) => {
    try {
        const response = await userApi.getInfo();
        dispatch(setUser(response.data));
    } catch {
        dispatch(logout());
    }
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.profile = action.payload;
        },
        resetUser: () => {
            return initialState;
        },
    },
});

export const selectUser = (state: RootState) => state.user;

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
