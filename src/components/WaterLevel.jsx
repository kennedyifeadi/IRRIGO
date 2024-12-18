import { FaBatteryFull } from "react-icons/fa";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Weather } from "./Weather";

export const WaterLevel = () => {
  return (
    <div className="w-[90%] flex justify-between mt-5">
        <div className="flex-col max-w-[100px] flex-1 flex justify-center text-[24px] py-1 px-2 shadow-md rounded-md bg-white text-[#4CAF50]  active:scale-75 duration-300 ease-in-out items-center ">
        <FaBatteryFull />
        <span className="text-[12px] font-bold">
            74%
        </span>
        </div>
        <div className="flex-1 max-w-[100px]">
        <Weather/>
        </div>

        <div className="flex-1 max-w-[100px] flex flex-col text-[24px] justify-center shadow-md py-1 px-2 rounded-md bg-white active:scale-75 duration-300 ease-in-out items-center text-[#64B5F6] ">
        <DotLottieReact
      src="https://lottie.host/2acef84e-da50-4c63-b0a6-bcc12c157bf7/LNv8EEco0f.json"
      loop
      autoplay
      className="w-15 h-10 "
    />
            <span className="text-[12px] font-semibold">
                73 liters
            </span>
        </div>
    </div>
  )
}

