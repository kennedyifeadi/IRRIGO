import { FaCircleUser } from "react-icons/fa6";

export const TopNav = () => {
  return (
    <div className="w-full h-[70px] flex px-4 items-center justify-between shadow-md">
      <h1 className="text-[#F9A825] text-[36px] font-bold">Irri<span className="text-[#4CAF50]">Go</span></h1>
      <span className="text-[36px]"><FaCircleUser /></span>
    </div>
  )
}
