import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: 1,
    completed: 0,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        },
        setCompleted: (state, action) => {
            state.completed = action.payload;
        },
    },
});

export const { setActive, setCompleted } = appSlice.actions;

export const selectActive = (state) => state.app.active;
export const selectCompleted = (state) => state.app.completed;

export default appSlice.reducer;
