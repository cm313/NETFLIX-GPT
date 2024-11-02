import {configureStore} from "@reduxjs/toolkit";
import authenticatedUserDataReducer from "./signedInUserDataSlice"
import nowPlayingMoviesReducer from "./moviesSlice"

const appStore = configureStore({
     reducer:{
      authenticatedUserData: authenticatedUserDataReducer,
      nowPlayingMovies: nowPlayingMoviesReducer,
     }
});

export default appStore;