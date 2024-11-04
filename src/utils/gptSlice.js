import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState:{
    isGptSearchEnabled: false,
  },
  reducers:{
    toggleGptSearchView: (state)=>{
      state.isGptSearchEnabled= !state.isGptSearchEnabled;
    }
  }
});

export default gptSlice.reducer;
export const{toggleGptSearchView} = gptSlice.actions;