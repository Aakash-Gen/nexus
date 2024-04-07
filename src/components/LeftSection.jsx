import { RiWechatChannelsFill } from "react-icons/ri";
import { IoChatbox } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";
import { MdGroups } from "react-icons/md";

function LeftSection() {
  return (
    <div className="flex flex-col items-center mt-3 gap-12">
        <RiWechatChannelsFill color="white" size={50} className="mb-7 mt-2" />
        <div>
            <LeftSectionOptions name="all chats" icon={<IoChatbox onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} size={25}/>} />
            <LeftSectionOptions name="groups" icon={<MdGroups onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} size={25}/>} />
            <LeftSectionOptions name="friends" icon={<FaUserFriends onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} size={25}/>} />
            <LeftSectionOptions name="archive" icon={<IoMdArchive onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} size={25}/>} />
            <div className="h-0.5 bg-gray-400 mb-7"></div>
            <LeftSectionOptions name="profile" icon={<CgProfile onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} size={25}/>} />
        </div>
        <div>
            <LeftSectionOptions name="logout" icon={<MdOutlineLogout onMouseOver={({target})=>target.style.color="white"} onMouseOut={({target})=>target.style.color="gray"} size={25}/>} />
        </div>
    </div>
  )
}

const LeftSectionOptions =(props)=>{
    return(
        <div className="flex flex-col items-center gap-1 text-sm text-gray-400 mb-7 hover:cursor-pointer hover:text-white">
            {props.icon}
            {props.name}
        </div>
    )
}
export default LeftSection