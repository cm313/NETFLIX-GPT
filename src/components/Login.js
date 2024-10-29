import React,{useState} from 'react';
import Header from "./Header";


const Login = () => {

  const[isSignInForm, setSignInForm] = useState(true);

  const updateForm = ()=>{
      setSignInForm(!isSignInForm)
  };

  return (
    <div className="m-0 h-[1500px]">
      <Header />
      <div className="absolute">
        <img className="filter brightness-50" src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg" alt="Background Loading"></img>
      </div>
      <form className="z-50 py-16 w-4/12 px-14 bg-black bg-opacity-70 absolute mt-20 mx-auto left-0 right-0 rounded-md text-white ">
      <h1 className="ml-3 mb-5 font-bold text-3xl" >{isSignInForm? "Sign In" : "Sign Up"}</h1>
      {
        !isSignInForm &&
        <input className="px-2 py-2 m-2 w-full  bg-gray-600 bg-opacity-55  rounded-md" type="text" placeholder="user name"></input>
      }
        <input className="px-2 py-4 m-2 w-full bg-gray-600 bg-opacity-55  rounded-md" type="text" placeholder="email or mobilenumber"></input>
        <input className="px-2 py-4 m-2 w-full bg-gray-600 bg-opacity-55 rounded-md" type="password" placeholder="password"></input>
        <button className=" bg-red-700 p-2 m-2 w-full rounded-md font-medium">{isSignInForm? "Sign In" : "Sign Up"}</button>
        {
          isSignInForm && 
          <div>
          <div className="text-center py-4 font-medium">OR</div>
        <button className="bg-zinc-600 p-2 m-2 rounded-md w-full font-medium bg-opacity-60">Use a sign-in code</button>
        <div className="my-5 text-center">Forgot password?</div>
        </div>
         }
        <div className="my-5">
        <input className="scale-150 accent-black" type="checkbox" id="ChoiceRemember"/>
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