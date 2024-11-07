import {configureStore} from "@reduxjs/toolkit";
import authenticatedUserDataReducer from "./signedInUserDataSlice"
import moviesReducer from "./moviesSlice"
import geminiAIReducer from "./geminiSlice";


const appStore = configureStore({
     reducer:{
      authenticatedUserData: authenticatedUserDataReducer,
      movies: moviesReducer,
      geminiAI: geminiAIReducer,
     }
});

export default appStore;