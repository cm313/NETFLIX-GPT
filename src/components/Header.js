import React from 'react'
import NetflixLogo from "../images/Netflix_Logo.png"
import {signOut } from "firebase/auth";
import {auth} from "../utils/firbase";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeUser} from "../utils/signedInUserDataSlice";
import {useSelector} from "react-redux";

const Header = () => {
      
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const  userData = useSelector((store)=>store.authenticatedUserData);
 
   const handleLogout= ()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
        dispatch(removeUser());


      }).catch((error) => {
        // An error happened.
         navigate("/error");
      });
   } 

  return (
    <div className="flex justify-between px-4 py-2 ">
      <div className="">
      <img className="z-50  w-36 h-14 hover:cursor-pointer" src = {NetflixLogo} alt="Logo"/>
      </div>
      <div className="items-center">
        <img className="w-9 h-9 rounded-3xl mr-2 " src={userData?.photoURL} alt="Loading..."/>
        <div>{userData?.uid}</div>
        <div>{userData?.displayName}</div>
        <div>{userData?.email}</div>
        <button className="bg-red-800 px-2 py-1 rounded-md font-medium text-white" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Header