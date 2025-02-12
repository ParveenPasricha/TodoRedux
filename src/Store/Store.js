import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from '../Store/Slice'

const Store = configureStore({
    reducer:{
        AddTask: TaskReducer,
    }
})
export default Store