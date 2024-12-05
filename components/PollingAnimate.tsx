import React from 'react'
import { motion } from "framer-motion"
import { Vote} from "lucide-react"
const PollingAnimate = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center"
  >
    <motion.div
      animate={{
        rotate: [0, 360],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="inline-block mb-8"
    >
      <Vote className="w-16 h-16" />
    </motion.div>
    
    <h1 className="text-4xl font-bold mb-4">
      Modern Voting Made Simple
    </h1>
    <p className="text-xl text-muted-foreground mb-12">
      Create and manage polls with ease. Get real-time results and insights.
    </p>
  </motion.div>
  )
}

export default PollingAnimate