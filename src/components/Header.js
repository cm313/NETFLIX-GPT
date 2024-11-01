import React, {useEffect} from 'react'
import NetflixLogo from "../images/Netflix_Logo.png"
import {signOut, onAuthStateChanged  } from "firebase/auth";
import {auth} from "../utils/firbase";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/signedInUserDataSlice";
import {useSelector} from "react-redux";


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  userData = useSelector((store)=>store.authenticatedUserData);

 const handleLogout= ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
       navigate("/error");
    });
 } 

 useEffect(()=>{
  /*When ever the Authentication like signIn, signUp, signOut is triggered this
   onAuthStateChanged API is automatically Called*/
onAuthStateChanged(auth, (user) => {
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
}, []);


  return (
    <div className="w-screen absolute flex justify-between bg-gradient-to-b from-black px-4 py-2 z-10">
      <div>
      <img className="w-36 h-14 hover:cursor-pointer" src = {NetflixLogo} alt="Logo"/>
      </div>
      {
        userData &&
      <div className="items-center flex ">
        <img className="w-9 h-9 rounded-3xl mr-2 " src={userData?.photoURL} alt="Loading..."/>
        <div className="pr-2 font-medium">{userData?.displayName}</div>
        <button className="bg-red-800 px-2 py-1 rounded-md font-medium text-white" onClick={handleLogout}>Logout</button>
      </div>
}
    </div>
  )
}

export default Header;