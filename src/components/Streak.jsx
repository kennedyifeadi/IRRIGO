import { SlCalender } from "react-icons/sl";
import { BsFire } from "react-icons/bs";
import { useEffect, useState } from "react";


export const Streak = () => {
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [day, setDay] = useState('')
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const date = new Date()
    const days = date.getDate()
    const years = date.getFullYear()
    const monthId = date.getMonth()
    useEffect(()=>{
        setMonth(months[monthId])
        setYear(years)
        setDay(days)
    }, [day, month, year])
  return (
    <div className="w-[90%] rounded-md flex justify-between items-center shadow-md py-2 px-4 bg-white mt-5">
      <span className="flex flex-col items-center gap-2 text-[#64B5F6]">
      <SlCalender className="font-blod" />
        <span className="text-[12px]">
            {day}/{month}/{year}
        </span>
      </span>
      <span className="flex text-[red] items-center gap-2 text-[18px]">
      <BsFire className="text-[red]" />
        <span >
            171+
        </span>
      </span>
    </div>
  )
}

