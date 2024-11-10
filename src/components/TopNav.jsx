import { FaCircleUser } from "react-icons/fa6";

export const TopNav = () => {
  return (
    <div className="w-full z-30 h-[70px] backdrop-blur-sm flex sticky top-0 bg-white/30 px-4 items-center justify-between shadow-md">
      <h1 className="text-[#F9A825] text-[36px] font-bold">Irri<span className="text-[#4CAF50]">Go</span></h1>
      <span className="text-[36px] text-[#333333]"><FaCircleUser /></span>
    </div>
  )
}
