import {configureStore} from "@reduxjs/toolkit";
import authenticatedUserDataReducer from "./signedInUserDataSlice"

const appStore = configureStore({
     reducer:{
      authenticatedUserData: authenticatedUserDataReducer,
     }
});

export default appStore;