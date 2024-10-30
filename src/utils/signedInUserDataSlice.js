import {createSlice} from "@reduxjs/toolkit";


const signedInUserDataSlice = createSlice({
  name : "authenticatedUserData",
  initialState:{
    usersData:[]
  },
  reducers:{
   addUser: (state,action)=>{
      state.usersData.push(action.payload);
   },
   removeUser: (state)=>{
    state.usersData.pop();
   },
   clearUsersData: ()=>{
    return {usersData: []};
   }
  },
}); 

export default signedInUserDataSlice.reducer;
export const{addUser, removeUser, clearUsersData} = signedInUserDataSlice.actions;