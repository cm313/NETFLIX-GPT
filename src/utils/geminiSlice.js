import { createSlice } from "@reduxjs/toolkit";

const geminiAISlice = createSlice({
  name: "geminiAI",
  initialState:{
    isGptSearchEnabled: false,
    movieNames: null,
    movieResults: null,
  },
  reducers:{
    toggleGptSearchView: (state)=>{
      state.isGptSearchEnabled= !state.isGptSearchEnabled;
    },
    addSearchedMovieLists:(state, action)=>{
      const{movieNames, movieResults} = action.payload;
         state.movieNames = movieNames;
         state.movieResults = movieResults;
    }
  }
});

export default geminiAISlice.reducer;
export const{toggleGptSearchView, addSearchedMovieLists} = geminiAISlice.actions;