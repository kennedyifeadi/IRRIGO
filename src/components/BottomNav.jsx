import { IoHomeSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { BsFillBarChartLineFill } from "react-icons/bs";

export const BottomNav = () => {
  return (
    <div className="fixed bottom-3 w-full h-[60px] flex justify-center">
      <div className="flex justify-between h-full shadow-[0px_0px_5px_#0000004d] w-[90%] rounded-full ">
        <ul className="flex justify-between items-center px-5 h-full w-full  ">
          <li className="text-[#4CAF50] text-[24px] flex flex-col justify-center items-center"><IoHomeSharp /> <span className="text-[14px]">Home</span></li>
          <li className="text-[#333333] text-[24px] flex flex-col justify-center items-center "><BsFillBarChartLineFill /> <span className="text-[14px]">Analytics</span></li>
          <li className="text-[#333333] text-[24px] flex flex-col justify-center items-center "><IoMdSettings /> <span className="text-[14px]">Settings</span></li>
        </ul>
      </div>
    </div>
  )
}

