import { BsMoisture } from "react-icons/bs";
export const MoistValue = () => {
  return (
    <div className="h-[90px] rounded-md w-[30%] bg-[#8D6E63] p-2 text-[#333333] flex flex-col items-center">
      <span className="text-[22px]"><BsMoisture /> </span>
      <h1 className="text-[24px] font-bold text-[white]">65%</h1>
      <span className="text-[10px]">Moisture level</span>
      </div>
  )
}
