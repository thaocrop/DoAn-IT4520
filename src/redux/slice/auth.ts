import { createAsyncThunk, createSlice, Dispatch } from "@reduxjs/toolkit";

import { IAuth, ILogin, IRegister } from "@interfaces";
import { authApi } from "@api";
import { RootState } from ".";
import { resetUser } from "./user";

export const login = createAsyncThunk<IAuth, ILogin>(
    "auth/login",
    async (values: ILogin, { rejectWithValue }) => {
        try {
            const res = await authApi.login(values);
            return res.data as IAuth;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const register = createAsyncThunk<IAuth, IRegister>(
    "auth/register",
    async (values: IRegister, { rejectWithValue }) => {
        try {
            const res = await authApi.register({
                user_name: values.user_name,
                password: values.password,
            });
            return res.data as IAuth;
        } catch (err: any) {
            return rejectWithValue(err.response.data);
        }
    }
);

interface IState {
    auth?: IAuth;
}

const initialState: IState = {
    auth: undefined,
};

export const logout = () => (dispatch: Dispatch<any>) => {
    dispatch(resetAuth());
    dispatch(resetUser());
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        resetAuth: () => {
            return initialState;
        },
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action: { payload: IAuth }) => {
            if (action.payload.accessToken) {
                state.auth = action.payload;
            }
        });
        builder.addCase(register.fulfilled, (state, action: { payload: IAuth }) => {
            if (action.payload.accessToken) {
                state.auth = action.payload;
            }
        });
    },
});

export const selectAuth = (state: RootState) => state.auth;

export const { resetAuth, setAuth } = authSlice.actions;

export default authSlice.reducer;
