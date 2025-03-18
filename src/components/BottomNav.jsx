import { IoHomeSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";



export const BottomNav = () => {
  return (
    <div className="fixed bottom-3 w-full h-[60px] flex justify-center">
      <div className="flex justify-between h-full shadow-[0px_0px_5px_#0000004d] bg-white w-[90%] rounded-full ">
        <ul className="flex justify-between items-center px-5 h-full w-full  "> 
        <li className="text-[24px] flex flex-col justify-center items-center">
          <NavLink to="/">
                {({ isActive }) => (
                  <motion.div
                    initial={{ color: isActive ? "#333333" : "#4CAF50" }}
                    animate={{ color: isActive ? "#4CAF50" : "#333333" }}
                    transition={{ duration: 0.3 }}
                    className=" flex flex-col justify-center items-center"
                  >
                    <IoHomeSharp />
                    <span className="text-[14px]">Home</span>
                  </motion.div>
                )}
          </NavLink> 
        </li>
              <li className="text-[24px] flex flex-col justify-center items-center">
        <NavLink
                to="/analytics"
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ color: isActive ? "#333333" : "#4CAF50" }}
                    animate={{ color: isActive ? "#4CAF50" : "#333333" }}
                    transition={{ duration: 0.3 }}
                    className=" flex flex-col justify-center items-center"
                  >
                    <BsFillBarChartLineFill />
                    <span className="text-[14px]">Analytics</span>
                  </motion.div>
                )}
              </NavLink> </li>
              <li className="text-[24px] flex flex-col justify-center items-center">
        <NavLink
                to="/settings"
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ color: isActive ? "#333333" : "#4CAF50" }}
                    animate={{ color: isActive ? "#4CAF50" : "#333333" }}
                    transition={{ duration: 0.3 }}
                    className=" flex flex-col justify-center items-center"
                  >
                    <IoMdSettings />
                    <span className="text-[14px]">Settings</span>
                  </motion.div>
                )}
              </NavLink> 
            </li>
        </ul>
      </div>
    </div>
  )
}

