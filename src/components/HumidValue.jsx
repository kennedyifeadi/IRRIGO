import { WiHumidity } from "react-icons/wi";
export const HumidValue = () => {
  return (
    <div className="h-[90px] rounded-md w-[30%] bg-[#F9A825] p-2 text-[#333333] flex flex-col items-center">
      <span className="text-[22px]"><WiHumidity /> </span>
      <h1 className="text-[24px] font-bold text-[white]">80%</h1>
      <span className="text-[10px] font-bold">Humidity level</span>
      </div>
  )
}

