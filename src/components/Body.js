import React,{useEffect} from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firbase";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/signedInUserDataSlice";
import {removeUser} from "../utils/signedInUserDataSlice";

const Body = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ]);

useEffect(()=>{
  /*When ever the Authentication like signIn, signUp, signOut is triggered this
   onAuthStateChanged API is automatically Called*/
onAuthStateChanged(auth, (user) => {
  if (user) {
    // when user is signed in
   /*Here "user" is an object which contains details of the user who is 
   signedIn to the application like accessToken, uid, email, displyName etc.*/
    const {uid, displayName, email, photoURL} = user;
    dispatch(addUser({uid: uid, displayName: displayName, email: email, photoURL: photoURL}));
  } 
  else {
    //when user is signed out
    dispatch(removeUser());
    
  }
});
}, []);


  return (
    <div>
      <RouterProvider router = {appRouter}/>
      </div>
  )
}

export default Body