import React, {useEffect} from 'react'
import StreamAI_Logo from "../images/StreamAI_Logo.png"
import {signOut, onAuthStateChanged  } from "firebase/auth";
import {auth} from "../utils/firbase";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/signedInUserDataSlice";
import {useSelector} from "react-redux";
import { toggleGptSearchView } from '../utils/geminiSlice';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  userData = useSelector((store)=>store?.authenticatedUserData);
  const isGptSearchEnabled = useSelector((store)=>store?.geminiAI?.isGptSearchEnabled);

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
    <div className="w-screen absolute flex flex-col md:flex-row justify-between bg-gradient-to-b from-black px-4 py-2 z-10">
      <div>
      <img className="md:w-32 w-24 mx-auto md:mx-0 h-11 md:h-11 hover:cursor-pointer rounded-lg" src = {StreamAI_Logo} alt="Logo"/>
      </div>
      {
        userData &&
      <div className="items-center flex mx-auto md:mx-0">
        <button className="bg-green-500 hover:bg-green-400 transition-colors duration-300 font-medium py-1 px-2 mr-2 rounded-md" onClick={handleGptSearchClick} >
          {
            isGptSearchEnabled ? "Home" : "AI Search" 
          }
          </button>
          <button className="bg-red-700 hover:bg-red-600 transition-colors duration-300 px-2 py-1 rounded-md font-medium text-white" onClick={handleLogout}>Logout</button>
        <img className="w-9 h-9 rounded-3xl mx-2 " src={userData?.photoURL} alt="Loading..."/>
        <div className="hidden md:inline-block pr-2 font-medium text-white">{userData?.displayName}</div>
        
      </div>
}
    </div>
  )
}

export default Header;