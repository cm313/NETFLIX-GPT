export const  validateFormData = (email, password)=>{
            const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
            const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/.test(password);
            if(!isEmailValid && !isPasswordValid){
              return "Email and Password are not valid";
            }
            if(!isEmailValid){
              return "Email  address in not valid";
            }
            if(!isPasswordValid){
              return "Strong password required";
            }
            return null;
            }