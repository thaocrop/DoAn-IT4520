import { AppDispatch } from "./../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@interfaces";
import { userApi } from "@api";
import { RootState } from ".";

interface IState {
    profile?: IUser;
}

const initialState: IState = {
    profile: undefined,
};

export const getUser = () => async (dispatch: AppDispatch) => {
    const response = await userApi.getInfo();
    dispatch(setUser(response.data.data));
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
