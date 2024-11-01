import {createSlice} from "@reduxjs/toolkit";


const signedInUserDataSlice = createSlice({
  name : "authenticatedUserData",
  initialState: null,
  reducers:{
   addUser: (state,action)=>{
      return action.payload;
   },
   removeUser: (state, action)=>{
    return null;
   },
  },
}); 

export default signedInUserDataSlice.reducer;
export const{addUser, removeUser} = signedInUserDataSlice.actions;