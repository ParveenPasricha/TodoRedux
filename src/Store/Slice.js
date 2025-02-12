import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "AddTask",
    initialState: {
        TaskList: []
    }, 
    reducers:{
        AddTask: (state, action)=>{
            state.TaskList.push(action.payload.toUpperCase()) 
        }
    }
})
export const {AddTask} = Slice.actions
export default Slice.reducer