import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice";
import filterReducer from "./Slices/FilterSlice";
import sortReducer from "./Slices/SortSlice";


const store = configureStore({
    reducer: {
        user : useReducer,
        profile: profileReducer,
        filter: filterReducer,
        sort: sortReducer,
    
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;