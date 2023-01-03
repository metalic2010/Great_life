import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import menuReducer from './menuSlice';

export default configureStore ({
    reducer: {
        modal: modalReducer,
        menu : menuReducer
    }
})