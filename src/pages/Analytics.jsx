import { motion } from "framer-motion"


export const Analytics = () => {
  return (
    <motion.div 
        className="h-full w-full flex flex-col"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            Analytics
        </motion.div>
  )
}
