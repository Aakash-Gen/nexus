import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {auth , db} from "../firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
  } from "firebase/auth";
import {
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";


function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("");
    const navigate = useNavigate();
    // const [loginsuccess, setLoginsuccess] = useState(false);
    const [emailAlreadyinUse, setEmailAlreadyinUse] = useState(false);

    const registerWithEmailAndPassword = async (name, email, password) => {
        try {
          const res = await createUserWithEmailAndPassword(auth, email, password);
          const user = res.user;
          await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
          });
          navigate('/login');
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
          await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "google",
            email: user.email,
          });
        }
        navigate('/platform');
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    };

    useEffect(()=>{
        setTimeout(()=>{
            setEmailAlreadyinUse(false)
        },5000)
    },[emailAlreadyinUse])
 
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen  ">
        <div className="pb-8 text-4xl font-bold">Sign Up</div>
        <div className=" flex flex-col gap-2">
            <input className="bg-purple-200 border border-gray-300 p-1.5 w-60 text-center rounded-xl text-gray-700 text-md focus:border-emerald-200" type="name" placeholder="Enter Your Name" onChange={(e)=> setName(e.target.value)} />
            <input className="bg-purple-200 border border-gray-300 p-1.5 w-60 text-center rounded-xl text-gray-700 text-md focus:border-emerald-200" type="email" placeholder="Enter your Email" onChange={(e)=> setEmail(e.target.value)} /> 
            <input className="bg-purple-200 border border-gray-300 p-1.5 w-60 text-center rounded-xl text-gray-700 text-md focus:border-emerald-200" type="password" placeholder="Enter your Password" onChange={(e)=> setPassword(e.target.value)}/>
            <button className=" border border-gray-300 p-1.5 w-60 text-center rounded-xl text-gray-700 text-md focus:border-emerald-200 hover:bg-gray-200" onClick={()=> registerWithEmailAndPassword(name,email,password)}>Register</button>
            <div className="flex mt-4 gap-6 items-center ml-1">
                <div className="bg-gray-500 h-0.5 w-20"></div>
                <div>OR</div>
                <div className="bg-gray-500 h-0.5 w-20"></div>
            </div>
            <div>
                <div onClick={ ()=>  signInWithGoogle()} className="flex mt-4 justify-center gap-2 items-center border border-gray-300 w-60 p-1 rounded-lg hover:bg-gray-200 hover:cursor-pointer">
                    <FcGoogle/>
                    Google
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp