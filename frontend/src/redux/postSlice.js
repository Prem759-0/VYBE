import { createSlice } from "@reduxjs/toolkit"
const postSlice=createSlice({
    name:"post",
    initialState:{
        postData:null,
    },
    reducers:{
       setPostData:(state,action)=>{
        state.postData=action.payload
       } 
    }

})

export const {setPostData}=postSlice.actions
export default postSlice.reducer