import { motion } from "framer-motion"
import { Greetings } from "../components/Greetings"
import { TempValue } from "../components/TempValue"
import { HumidValue } from "../components/HumidValue"
import { MoistValue } from "../components/MoistValue"
import { Cycle } from "../components/Cycle"
import { IrrigationMap } from "../components/IrrigationMap"


export const Dashboard = () => {
  return (
    <motion.div 
        className="h-max items-center w-full flex flex-col"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <Greetings />
            <div className="flex w-[90%] h-max rounded-md bg-white">
              <TempValue />
              <HumidValue />
              <MoistValue />
            </div>
            <Cycle />
            <IrrigationMap />
    </motion.div>
  )
}
