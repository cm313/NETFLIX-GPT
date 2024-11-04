import React, {useEffect} from 'react'
import NetflixLogo from "../images/Netflix_Logo.png"
import {signOut, onAuthStateChanged  } from "firebase/auth";
import {auth} from "../utils/firbase";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/signedInUserDataSlice";
import {useSelector} from "react-redux";
import { toggleGptSearchView } from '../utils/gptSlice';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  userData = useSelector((store)=>store?.authenticatedUserData);

 const handleLogout= ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
       navigate("/error");
    });
 } 

 useEffect(()=>{
  /*When ever the Authentication like signIn, signUp, signOut buttons is cliked/triggered this
   onAuthStateChanged API is automatically Called*/
   // This method will return a unsubscribe function
const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // when user is signed in
   /*Here "user" is an object which contains details of the user who is 
   signedIn to the application like accessToken, uid, email, displyName etc.*/
   const {uid, displayName, email, photoURL} = user;
   dispatch(addUser({uid: uid, 
    displayName: displayName, 
    email: email, 
    photoURL: photoURL}
  ));
   navigate("/browse");
  } 
  else {
    //when user is signed out
    dispatch(removeUser()); 
    navigate("/");
  }
});

return ()=> unsubscribe();

}, []);

const handleGptSearchClick = ()=>{
  dispatch(toggleGptSearchView());
}


  return (
    <div className="w-screen absolute flex justify-between bg-gradient-to-b from-black px-4 py-2 z-10">
      <div>
      <img className="w-36 h-14 hover:cursor-pointer" src = {NetflixLogo} alt="Logo"/>
      </div>
      {
        userData &&
      <div className="items-center flex ">
        <button className="bg-green-500 font-medium py-1 px-2 mr-2 rounded-md" onClick={handleGptSearchClick} >GPT Search</button>
        <img className="w-9 h-9 rounded-3xl mr-2 " src={userData?.photoURL} alt="Loading..."/>
        <div className="pr-2 font-medium text-white">{userData?.displayName}</div>
        <button className="bg-red-800 px-2 py-1 rounded-md font-medium text-white" onClick={handleLogout}>Logout</button>
      </div>
}
    </div>
  )
}

export default Header;