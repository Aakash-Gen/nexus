import Chat from "./components/Chat"
import LeftSection from "./components/LeftSection"
import RightSection from "./components/RightSection"

function Platform() {
  return (
    <div className="bg-gray-800 h-screen w-full flex">
        <div className="w-[6%]">
            <LeftSection/>
        </div>
        <div className="w-[0.5] h-[80%] bg-gray-800"></div>
        <div className="w-[76%] p-3">
            <Chat/>
        </div>
        <div className="w-[18%] py-3 pr-3">
            <RightSection/>
        </div>
    </div>
  )
}

export default Platform