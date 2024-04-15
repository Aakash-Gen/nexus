import { RiWechatChannelsFill } from "react-icons/ri";
import { IoChatbox } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { useState } from "react";

function LeftSection() {


  return (
    <div className="flex flex-col items-center mt-3 gap-12">
        <RiWechatChannelsFill color="white" size={50} className="mb-7 mt-2" />
        <div>
            <LeftSectionOptions name="all chats" icon={<IoChatbox  size={25}/>} />
            {/* <div className="text-white">

            <IoChatbox  size={25}/>
            </div> */}
            <LeftSectionOptions name="groups" icon={<MdGroups size={25}/>} />
            <LeftSectionOptions name="friends" icon={<FaUserFriends size={25}/>} />
            <LeftSectionOptions name="archive" icon={<IoMdArchive size={25}/>} />
            <div className="h-0.5 bg-gray-400 mb-7"></div>
            <LeftSectionOptions name="profile" icon={<CgProfile size={25}/>} />
        </div>
        <div>
            <LeftSectionOptions name="logout" icon={<MdOutlineLogout size={25}/>} />
        </div>
    </div>
  )
}

const LeftSectionOptions =(props)=>{
    const [ hover, setHover ] = useState(false);
    return(
        <div className={`flex flex-col items-center gap-1 text-sm text-gray-400 mb-7 hover:cursor-pointer ${hover ? 'text-white' : 'text-gray-500'}`} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
            {props.icon}
            {props.name}
        </div>
    )
}
export default LeftSection