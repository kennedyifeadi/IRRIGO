import { WiHumidity } from "react-icons/wi";
import axios from "axios"
import { useEffect } from "react";
export const HumidValue = () => {
  useEffect(() => {
    const fetchData = async () =>{
      const body = await axios.get("http://192.168.231.125:8000/api/sensor-data/")
      const response = body.data
      console.log(response)
    }
    fetchData()
  })
  return (
    <div className="h-[90px] rounded-md w-[30%] bg-[#F9A825] p-2 text-[#333333] flex flex-col items-center">
      <span className="text-[22px]"><WiHumidity /> </span>
      <h1 className="text-[24px] font-bold text-[white]">80%</h1>
      <span className="text-[10px] font-bold">Humidity level</span>
      </div>
  )
}

