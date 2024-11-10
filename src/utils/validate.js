export const  validateFormData = (email, password)=>{
            const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
            const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/.test(password);
            if(!isEmailValid && !isPasswordValid){
              return "Enter correct email and password";
            }
            if(!isEmailValid){
              return "Check email you have entered ";
            }
            if(!isPasswordValid){
              return "Strong password required";
            }
            return null;
            }