import {useState} from "react" ;
 import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email,setEmail] = useState("");
 
 
function onChange(e){
setEmail(e.target.value);
   
}
async function  onSubmit(e) {
  e.preventDefault()
  try {
    const auth = getAuth() 
    await sendPasswordResetEmail(auth,email)
    toast.success("Email was sent")
    
  } catch (error) {
    toast.error("could not send resent")
  }
}

  return (   
    <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>
      FORGOTPASSWORD
    </h1>
    <div className='flex justify-center flex-wrap items-center 
      py-12 max-w-6xl mx-auto'>
      <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
        <img src='https://images.unsplash.com/photo-1609770231080-e321deccc34c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtleXxlbnwwfHwwfHx8MA%3D%3D' 
        alt='key' className='w-full rounded-2xl' />
      </div>
      <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
        <form onSubmit={onSubmit} >
          <input className="w-full px-4 py-2 text-xl
           text-gray-700 border-gray-300 mb-4 rounded
           transition ease-in-out" type="email" id="email" 
          placeholder="Email address" value={email} 
          onChange={onChange}  />
          

      <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mt-4">
        <p className="mb-6">Don't have a account?
          <Link to="/sign-up" className="text-red-600 hover:text-red-700
          transition duration-200 ease-in-out ml-1">Register</Link> </p>
          <p>  
            <Link to="/forgot-password" className="text-blue-600 hover:text-blue-700
          transition duration-200 ease-in-out ml-1">Forgot password?</Link>
          </p>
      </div>
      <button className="w-full bg-blue-600 text-white px-7 py-3 font-medium
      uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800" 
       type="submit">SET RESET PASSWORD</button>
       <div className="my-4   flex items-center before:border-t before:flex-1
        before:border-gray-300 after:border-t
        after:border-gray-300 after:flex-1">
        <p className="text-center font-bold mx-4">OR</p>
       </div>
       <OAuth />
      </form>
     
       
      </div>
    </div>
    </section>
  )
}
