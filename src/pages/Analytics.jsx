import { motion } from "framer-motion"
import { SoilHealth } from "../components/SoilHealth"
import { SoilAnalytics } from "../components/SoilAnalytics"
import { AiInference } from "../components/AiInference"


export const Analytics = () => {
  return (
    <motion.div 
        className="h-[100dvh] w-full flex flex-col"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <SoilHealth/>
            <SoilAnalytics/>
            <AiInference/>  
        </motion.div>
  )
}
