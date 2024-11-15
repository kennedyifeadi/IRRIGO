import { motion } from "framer-motion"
import { SettingsPage } from "../components/SeetingsComponent"


export const Settings = () => {
  return (
    <motion.div 
        className="h-full w-full flex flex-col"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <SettingsPage/>
        </motion.div>
  )
}
