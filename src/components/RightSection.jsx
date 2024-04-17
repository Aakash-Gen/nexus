import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth,db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function RightSection() {
  const [user] = useAuthState(auth);
  if(!user) return null;

  return (
    <div className='h-full flex flex-col gap-2'>
        <div className='bg-white h-[50%] rounded-2xl flex flex-col'>
            <div className="flex justify-center">
              {user && user.photoURL? (
                <img className="h-32 w-32 rounded-full mt-4" src={user.photoURL} alt="Profile Image" />
              ):(
                <img className="h-32 w-32 rounded-full mt-4" src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg" alt="Profile Image" />
              )}
            </div>
            <div className="text-center text-xl mt-2 font-medium">
              {user && user.displayName?(
                user.displayName
              ):(
                "Anonymous"
              )}
            </div>
        </div>
        <div className='bg-white h-[50%] rounded-2xl flex flex-col'>
            <div className="flex justify-center font-medium text-2xl mt-2">
              Group Info
            </div>
        </div>
    </div>
  )
}

export default RightSection