import { motion } from "framer-motion"
import { SoilHealth } from "../components/SoilHealth"
import { SoilAnalutics } from "../components/SoilAnalutics"
import { AiInference } from "../components/AiInference"


export const Analytics = () => {
  return (
    <motion.div 
        className="h-full w-full flex flex-col"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <SoilHealth/>
            <SoilAnalutics/>
            <AiInference/>  
        </motion.div>
  )
}
