import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

export const SoilHealth = () => {
  return (
    <div className="w-full px-4 mt-5 h-max flex justify-between items-center">
        <div>
            <h1 className="font-bold text-[30px] text-[#64B5F6]">
                Soil Health
            </h1>
        </div>
        <div className="flex items-center gap-2">
            <div>
                <span className="font-bold text-[36px]">
                    78%
                </span>
            </div>
            <div className="flex flex-col text-[18px]">
            <BiSolidUpArrow className="text-[#4CAF50]" />
            <BiSolidDownArrow className="text-[red]" />
            </div>
        </div>

    </div>
  )
}