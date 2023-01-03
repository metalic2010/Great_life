import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menuActive',
    initialState: false,
    reducers: {
        setStateMenu(state, action) {
            return action.payload = !state
        }
    }
});

export const { setStateMenu } = menuSlice.actions;

export default menuSlice.reducer;