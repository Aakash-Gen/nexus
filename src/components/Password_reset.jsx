import { useState } from "react";
import { sendPasswordResetEmail} from "firebase/auth";
import {auth} from "../firebase";

function Password_reset() {
    const [email, setEmail] = useState("");
    const sendPasswordReset = async (email) => {
        try {
          await sendPasswordResetEmail(auth, email);
          alert("Password reset link sent!");
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };
  return (
    <div className="flex flex-col items-center mt-16 gap-4">
        <input className=" flex justify-center text-center border-2 rounded-lg p-1.5 w-96 border-gray-300" type="email" placeholder="Enter you Email" onChange={(e)=>setEmail(e.target.value)} />
        <button className="underline hover:cursor-pointer" onClick={()=>sendPasswordReset(email)}>Send reset link</button>
    </div>
  )
}

export default Password_reset