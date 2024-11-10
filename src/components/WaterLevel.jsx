import { FaBatteryFull } from "react-icons/fa";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const WaterLevel = () => {
  return (
    <div className="w-[90%] flex justify-between  mt-5">
        <div className="flex-col flex justify-center text-[24px]  text-[#4CAF50]  active:scale-75 duration-300 ease-in-out shadow-md items-center rounded-md bg-white py-1 px-2 ">
        <FaBatteryFull />
        <span className="text-[10px]">
            Battery level
        </span>
        </div>
        <div className="flex flex-col rounded-md text-[24px] justify-center shadow-md active:scale-75 duration-300 ease-in-out items-center bg-white py-2 px-4 text-[#64B5F6] ">
        <DotLottieReact
      src="https://lottie.host/2acef84e-da50-4c63-b0a6-bcc12c157bf7/LNv8EEco0f.json"
      loop
      autoplay
      className="w-15 h-10 "
    />
            <span className="text-[10px]">
                Water level
            </span>
        </div>
    </div>
  )
}

