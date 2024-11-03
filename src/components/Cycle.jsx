import { GiCycle } from "react-icons/gi";
export const Cycle = () => {
  return (
    <div className="w-[90%] rounded-md flex justify-between shadow-md py-2 px-4 bg-white mt-5">
      <div className="flex flex-col " >
      <h1 className="font-bold text-[24px] text-[#333333]">Cycle</h1>
        <div className="flex gap-1 items-center">
          <span className="text-[#333333] text-[36px]"><GiCycle /></span>
          <span className="flex flex-col">
            <span className="text-[18px]">Next Cycle</span>
            <span className="text-[10px] text-[#4CAF50] font-semibold">•15mins•</span>
          </span>
        </div>
      </div>
      <div className="justify-center items-center flex ">
          <button className="bg-[#64B5F6] rounded-lg active:scale-90 duration-200 ease-in-out px-4 text-white py-2">Restart</button>
      </div>
    </div>
  )
}
