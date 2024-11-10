import { FaBatteryFull } from "react-icons/fa";
import { FaGlassWaterDroplet } from "react-icons/fa6";

export const WaterLevel = () => {
  return (
    <div className="w-[90%]  flex justify-between  mt-2">
        <div className="flex-col flex justify-center text-[24px] text-[#64B5F6] active:scale-90 duration-300 ease-in-out shadow-md items-center rounded-md bg-white py-1 px-2 ">
        <FaBatteryFull />
        <span className="text-[15px]">
            Battery level
        </span>
        </div>
        <div className="flex flex-col rounded-md text-[24px] justify-center shadow-md active:scale-90 duration-300 ease-in-out items-center bg-white py-2 px-4 text-[#4CAF50] ">
        <FaGlassWaterDroplet />
            <span className="text-[#4CAF50] text-[15px]">
                Water level
            </span>
        </div>
    </div>
  )
}

