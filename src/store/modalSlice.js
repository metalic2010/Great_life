import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modalActive',
    initialState: false,
    reducers: {
        setStateModal(state, action) {
            return action.payload = !state
        }
    }
});

export const { setStateModal } = modalSlice.actions;

export default modalSlice.reducer;