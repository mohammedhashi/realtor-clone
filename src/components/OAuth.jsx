import { getAuth,GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
 
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router';


export default function OAuth() {
  const navigate = useNavigate();
 async function onGoogleClick(){
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result= await signInWithPopup(auth, provider)
      const user = result.user
      console.log(user)
      //check for user
      const docRef = doc(db,"users",user.uid)
      const docSnap = await getDoc(docRef)
      if(!docSnap.exists()){
        await setDoc(docRef,{
          name: user.displayName,
          email:user.email,
          Timestamp:serverTimestamp(),
        })
      }
      navigate("/")
    } catch (error) {
      toast.error("Could not authorize with Google")
      console.log(error)
    }
     
  }
  return (
    <button type='button' onClick={onGoogleClick } className='flex items-center justify-center w-full
     bg-red-700 text-white py-3 px-7 uppercase active:bg-red-900 shadow-md
      font-medium hover:shadow-lg active:shadow-lg
       hover:bg-red-800 transition duration-300 ease-in-out'><FcGoogle className='mr-2 
        text-2xl bg-white rounded-full' /> Continue with Google</button>
  )
}
