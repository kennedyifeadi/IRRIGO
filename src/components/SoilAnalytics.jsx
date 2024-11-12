// // import {Line} from "react-chartjs-2"
// import {Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend} from 'chart.js'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

// Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)
export const SoilAnalytics = () => {
  const [selectedValue, setSelectedValue] = useState("Yesterday");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { value: "Yesterday", label: "Yesterday" },
    { value: "Last Week", label: "Last Week" },
    { value: "Last Month", label: "Last Month" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option.label); 
    setIsDropdownOpen(false); 
  };
  // const options= {}
  // const data= {}
  return (
    <div className="px-4 flex flex-col w-full mt-5 ">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-[24px] font-bold">
          Soil Analytics
        </h1>
        <div className="relative w-[100px] " >
        <RiArrowDropDownLine className={`absolute right-[0px] top-0 text-[24px] ${!isDropdownOpen ? "rotate-[180deg]" : "rotate-0"}`} />
          <div className="bg-[white] px-2 py-1 rounded-full cursor-pointer text-[12px]" onClick={toggleDropdown}>{selectedValue}</div>
          {isDropdownOpen && (
          <div className="absolute top-[110%] text-[12px] left-0 w-[100%] shadow-md rounded-md bg-[#ffffff] z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 cursor-pointer duration-300 rounded-md hover:bg-[#f0f0f0]"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
          </div>
          )}
        </div>
      </div>
      <div>
        {/* <Line options={options} data={data}/> */}
      </div>

    </div>
  )
}

