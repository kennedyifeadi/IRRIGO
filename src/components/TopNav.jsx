import { FaCircleUser } from "react-icons/fa6";
import Irrigo_Logo from "../assets/Irrigo_Logo.png";
import MaleProfile from "../assets/male profile.jpg"


export const TopNav = () => {
  return (
    <div className="w-full z-30 h-[70px] backdrop-blur-sm flex sticky top-0 bg-white/30 px-4 items-center justify-between shadow-md">
      <div className="w-[50%] h-full flex">
      <img src={ Irrigo_Logo } alt="" className="object-cover h-full w-full object-right" />

      </div>
      <span className="text-[36px] text-[#333333] rounded-full w-12 h-12"> <img src={MaleProfile} alt=""  className="w-full h-full rounded-full object-cover"/></span>
    </div>
  )
}
