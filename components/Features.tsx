import React from 'react'

import { motion } from "framer-motion"
import { Vote, Users, Award} from "lucide-react"


const Features = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Vote className="w-8 h-8" />}
            title="Easy Voting"
            description="Simple and intuitive voting interface for your participants"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Multiple Participants"
            description="Support for unlimited voters and candidates"
          />
          <FeatureCard
            icon={<Award className="w-8 h-8" />}
            title="Real-time Results"
            description="Watch results update in real-time as votes come in"
          />
    </div>
  )
}


function FeatureCard({ icon, title, description }: {
    icon: React.ReactNode
    title: string
    description: string
  }) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 rounded-lg border bg-card text-card-foreground"
      >
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
    )
  }

export default Features