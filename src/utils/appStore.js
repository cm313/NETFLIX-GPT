import {configureStore} from "@reduxjs/toolkit";
import authenticatedUserDataReducer from "./signedInUserDataSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice";


const appStore = configureStore({
     reducer:{
      authenticatedUserData: authenticatedUserDataReducer,
      movies: moviesReducer,
      gpt: gptReducer,
     }
});

export default appStore;