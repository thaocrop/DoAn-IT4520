import { createSlice, Dispatch } from "@reduxjs/toolkit";

import { ILocation } from "@interfaces";
import { locationApi } from "@api";
import { RootState } from ".";

interface IState {
    locations: ILocation[];
}

const initialState: IState = {
    locations: [],
};

export const getLocations = () => async (dispatch: Dispatch<any>) => {
    try {
        const response = await locationApi.getLocations();
        dispatch(setLocations(response.data));
    } catch {
        dispatch(setLocations([]));
    }
};

const configSlice = createSlice({
    name: "config",
    initialState: initialState,
    reducers: {
        resetConfig: () => {
            return initialState;
        },
        setLocations: (state, action) => {
            state.locations = action.payload;
        },
    },
    extraReducers: (builder) => {},
});

export const selectConfig = (state: RootState) => state.config;

export const { resetConfig, setLocations } = configSlice.actions;

export default configSlice.reducer;
