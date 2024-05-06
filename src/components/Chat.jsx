import { useState ,useEffect, useRef } from "react"
// import { CiSearch } from "react-icons/ci";
import {auth , db}  from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsSendFill } from "react-icons/bs";
import { LuPaperclip } from "react-icons/lu";

import {
    collection,
    addDoc,
    where,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
  } from "firebase/firestore";
import { FaDove } from "react-icons/fa";
import Search from "./Search";

function Chat() {
    // const [search,setSearch] = useState("");
    const [user] = useAuthState(auth);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [showTimeStamp,setShowTimeStamp] = useState(false);
    const scroll = useRef();

    const handleMouseEnter = ()=>{
      setShowTimeStamp(true);
    }
    const handleMouseLeave =()=>{
      setShowTimeStamp(false);
    }

    useEffect(() => {
      const q = query(collection(db, "messages"), orderBy("timestamp"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  
      return () => unsubscribe();
    }, []);

    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
  
    const sendMessage = async (e) => {
      e.preventDefault();
      if (input.trim()) {
        await addDoc(collection(db, "messages"), {
          text: input,
          timestamp: serverTimestamp(),
          uid: user.uid,
          displayName: user.displayName,
          photo : user.photoURL
    });
  
    setInput("");
  } 
} 
  return (
    <div className='bg-white h-full rounded-2xl grid grid-cols-9 p-4' >
        <div className=" flex justify-evenly col-span-3">
            <Search/>
            <div className="bg-gray-200 w-[8px] h-full rounded-full"></div>
        </div>
        <div className="flex flex-col col-span-6">
            <div className="ml-2 text-3xl font-semibold mb-5 text-gray-700">Group Chat</div>
            <div className=" flex-grow overflow-y-auto mb-2 h-[0.8vh]">
              {messages.map(({ id, data }) => (
                <div key={id} className={`message ${data.uid === user.uid ? "sent flex justify-end" : "received"}`}>
                  {data.uid!== user.uid && (
                    <div className="flex items-center mb-3">
                    {data.photo?(
                      <img src={data.photo} alt="photoURL" className="rounded-full w-8 h-8 mr-2" ></img>
                    ):(
                      <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg" alt="photoURL" className="rounded-full w-8 h-8 mr-2" ></img>
                    )}
                    <div className="p-1.5 pr-4 flex items-end gap-6 pl-2 border-1 bg-blue-200 rounded-md justify-between ">
                      <span className="messageText">{data.text}</span>
                      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`text-xs ${showTimeStamp ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 `}>
                        {data.timestamp && new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                  )}
                  {data.uid== user.uid && (
                    <div className="flex items-center mb-3 gap-2">
                    <div className="p-1.5 pr-4 flex items-end gap-6 pl-2 border-1 bg-green-200 rounded-md justify-between ">
                      <span className="messageText">{data.text}</span>
                      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`text-xs ${showTimeStamp ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 `}>
                        {data.timestamp && new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
                      </span>
                    </div>
                    {data.photo?(
                      <img src={data.photo} alt="photoURL" className="rounded-full w-8 h-8 mr-2" ></img>
                    ):(
                      <img src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg" alt="photoURL" className="rounded-full w-8 h-8 mr-2" ></img>
                    )}
                  </div>
                  )}
                </div>
              ))}
              {/* <span ref={scroll}></span> */}
            </div >
            <div className="flex justify-center items-center gap-0.5">
              <div className="p-2.5 bg-blue-400 rounded-xl hover:bg-blue-600 hover:cursor-pointer">
                <LuPaperclip size={20} color="white"/>
              </div>
            <form onSubmit={sendMessage} className="flex justify-center items-center border bg-purple-200 border-gray-300 rounded-md w-[95vh] p-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                className="outline-none flex-grow bg-purple-200 ml-2"
                placeholder="Type your message here..."
              />
            </form>
            <button type="submit" className=" p-2.5 bg-blue-400 text-white rounded-xl hover:bg-blue-600">
                <BsSendFill size={20}/>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Chat