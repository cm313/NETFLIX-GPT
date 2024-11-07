import React,{useState, useRef} from 'react';
import Header from "./Header";
import {validateFormData} from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firbase";
import profilePic from "../images/ChandraMahesh_ProfilePic.jpg"
import {useDispatch} from "react-redux";
import {addUser} from "../utils/signedInUserDataSlice";
import {BG_IMG_URL} from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const[isSignInForm, setSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);

  const emailObj = useRef(null);
  const passwordObj = useRef(null);
  const nameObj = useRef(null);

  /*useRef() will return a Object, where the data is stored inside "value" property,
   which is present inside "current" object. therefore emailObj.current.value*/

   const updateForm = ()=>{
    setSignInForm(!isSignInForm)
   };


  const handleFormButton = ()=>{
        //Validating form Data
       const message = validateFormData(emailObj.current.value, passwordObj.current.value);
       setErrorMessage(message);
       if(message)
        return;
      if(!isSignInForm){
        // logic for signup form authentication

            createUserWithEmailAndPassword(auth, emailObj.current.value, passwordObj.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: nameObj.current.value, photoURL: profilePic,
              }).then(() => {
                // Profile updated!
                const {uid, displayName, email, photoURL} = auth.currentUser;
                dispatch(addUser({uid: uid, 
                  displayName: displayName, 
                  email: email, 
                  photoURL: photoURL}
                ));
               
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message);
              });
              /* userCredential.user return a Object which contains some details like Acces
                 Toke, email, uid etc.. and stored in a variable called "user"*/
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // If API if failed to signUp then it returns an error;
              setErrorMessage(errorCode+"-"+errorMessage);
              // ..
            });
      }
      else{
        // logic for sigin form authentication
        signInWithEmailAndPassword(auth, emailObj.current.value, passwordObj.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const {uid, displayName, email, photoURL} = user;
                dispatch(addUser({uid: uid, 
                  displayName: displayName, 
                  email: email, 
                  photoURL: photoURL}
                ));
           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage);
          });        
      }
  }

  
  return (
    <div className="m-0 h-[1500px]">
      <Header />
      <div className="absolute">
        <img className="filter brightness-75 z-0" src={BG_IMG_URL} alt="Background Loading"></img>
      </div>
          <form onSubmit ={(event)=>event.preventDefault()} className="z-10 py-16 w-4/12 px-14 bg-black bg-opacity-70 absolute mt-20 mx-auto left-0 right-0 rounded-md text-white ">
          <h1 className="ml-3 mb-5 font-bold text-3xl" >{isSignInForm? "Sign In" : "Sign Up"}</h1>
          {
            !isSignInForm &&
            <input ref={nameObj} className="px-2 py-4 m-2 w-full  bg-gray-600 bg-opacity-55  rounded-md" type="text" placeholder="user name"></input>
          }
            <input ref={emailObj} className="px-2 py-4 m-2 w-full bg-gray-600 bg-opacity-55  rounded-md" type="text" placeholder="email or mobilenumber"></input>
            <input ref={passwordObj} className="px-2 py-4 m-2 w-full bg-gray-600 bg-opacity-55 rounded-md" type="password" placeholder="password"></input>
            <button className=" bg-red-700 p-2 m-2 w-full rounded-md font-medium" onClick={handleFormButton} >{isSignInForm? "Sign In" : "Sign Up"}</button>
            <div className="text-red-500 text-sm py-2">{errorMessage}</div>
            {
              isSignInForm && 
              <div>
              <div className="text-center py-4 font-medium">OR</div>
                <button className="bg-zinc-600 p-2 m-2 rounded-md w-full font-medium bg-opacity-60">Use a sign-in code</button>
                <div className="my-5 text-center">Forgot password?</div>
            </div>
            }
            <div className="my-5">
            <input className="scale-150 accent-orange-700" type="checkbox" id="ChoiceRemember"/>
            <label for="ChoiceRemember" className="text-white pl-2 text-lg">Remember me</label>
            </div>
            {
              isSignInForm ?
            <div className="cursor-pointer" onClick={updateForm}>New to Netflix? <b>Sign up now</b></div>
            : <div className="cursor-pointer" onClick={updateForm}>Already have an account? <b>Sign In</b></div>
            }
          </form>
      <div className="bg-black h-full"></div>
      </div>
  )
}

export default Login