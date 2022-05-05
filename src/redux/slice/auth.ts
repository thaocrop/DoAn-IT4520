import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuth, IInfo, ILogin } from "src/interfaces";
import { authApi } from "src/api";
import { RootState } from ".";

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
export const getInfo = createAsyncThunk("auth/userInfo", async () => {
  const res = await authApi.getInfo();
  return res.data as IInfo;
});
interface IState {
  auth: IAuth | null;
  isRemember: boolean;
  isLoading: boolean;
  error: string;
  tokenInfoAuth: string;
  userInfo: IInfo | null;
}

const initialState: IState = {
  auth: null,
  isRemember: false,
  isLoading: false,
  error: "",
  tokenInfoAuth: "",
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    setInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setRemember: (state, action: PayloadAction<boolean>) => {
      state.isRemember = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: { payload: IAuth }) => {
      if (action.payload.accessToken) {
        state.auth = action.payload;
      }
      if (!state.isRemember) {
        state.auth!.refreshToken = null;
      }
      state.isLoading = false;
    });

    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(login.rejected, (state) => {
      state.auth = null;
      state.isLoading = false;
    });
    builder.addCase(getInfo.fulfilled, (state, action: { payload: IInfo }) => {
      state.userInfo = action.payload;
    });
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { logout, setAuth, setInfo, setRemember } = authSlice.actions;

export default authSlice.reducer;
