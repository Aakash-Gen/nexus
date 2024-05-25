import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { CiSearch } from "react-icons/ci";
import { TbSquareRoundedLetterC } from "react-icons/tb";
import { auth } from '../firebase';


function Search() {
    const [search, setSearch] = useState("");
    const [user] = useAuthState(auth);
    const [name, setName] = useState(null);

    const handleSearch =()=>{

    }

    const handleKey =(e)=>{
        e.code =="enter" && handleSearch();
    }
  return (
    <div>
        <div className="flex gap-4 items-center border-1  p-1.5 rounded-lg w-[250px] bg-purple-200 h-10 mr-4 mb-6">
            <CiSearch size={20} color="black"/>
            <input className="border-none outline-none bg-purple-200" type="text" placeholder="Search" onKeyDown={handleKey} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <ChatTab name="Aakash" message="hi" photo={user.photoURL}/>
        <ChatTab name="Lycanroc" message="I am the best" photo="src/assets/Lycanroc.jpg" />
        {/* <ChatTab name="Ana de Armas" message="sup" photo="https://hips.hearstapps.com/hmg-prod/images/ana-de-armas-1626771511.jpg?crop=0.6923333333333334xw:1xh;center,top&resize=640:*" /> */}
        <ChatTab name="Aakash1" message="whats up" photo="src/assets/WhatsApp Image 2024-02-18 at 01.01.04.jpeg" />
        <ChatTab name="Me" message="heyyyy" photo="src/assets/WhatsApp Image 2024-04-09 at 12.12.51.jpeg" />
        <ChatTab name="Jain" message="well that's odd" photo="src/assets/WhatsApp Image 2024-04-10 at 14.36.26.jpeg" />
    </div>
  )
}

const ChatTab = (props)=>{
    return(
        <div className='flex gap-6 items-center hover:bg-gray-200 w-[280px] p-2 rounded-md'>
            <div className='bg-black rounded-xl'>
                {/* <img color='white' src="/Anonymous.png" alt="" className=' w-12 h-12'/> */}
                <img color='white' src={props.photo} alt="" className=' w-12 h-12 rounded-xl'/>
            </div>
            <div className='flex flex-col pb-2'>
                <div className='flex'>
                    <div className='text-lg font-medium'>{props.name}</div> 
                </div>
                <div className='text-xs'>{props.message}</div>
            </div>
        </div>
    )
}

export default Search