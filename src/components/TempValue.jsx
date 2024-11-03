import { FaTemperatureLow } from "react-icons/fa";
export const TempValue = () => {
  return (
    <div className="h-[90px] rounded-md w-[30%] bg-[#64B5F6] p-2 text-[#333333] flex flex-col items-center">
      <span className="text-[22px]"><FaTemperatureLow /> </span>
      <h1 className="text-[24px] font-bold text-[white]">40%</h1>
      <span className="text-[10px]">Temp level</span>
      </div>
  )
}
