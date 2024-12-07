
import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import { Vote } from 'lucide-react'
import { Loader2 } from "lucide-react";
import { AdminButton } from "./AdminButton";

const Header = () => {
    const [isToVoteLoading, setIsToVoteLoading] = useState(false);
    const [isToAdminLoading, setIsToAdminLoading] = useState(false);
    const router = useRouter();
  
    const handleRedirectToVote = async () => {
      setIsToVoteLoading(true);
      router.push("/vote");
    };

    const handleRedirectToAdminLogin = async () => {
      setIsToAdminLoading(true);
      router.push('/auth/login');
    }

  return (
    <header className="hidden md:flex p-4 justify-between items-center">
        <h1 className="text-2xl font-bold">PollingApp</h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AdminButton isLoading={isToAdminLoading} handleRoute={handleRedirectToAdminLogin}/>
            </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
               <Button
            variant="default"
            onClick={handleRedirectToVote}
            disabled={isToVoteLoading} 
          >
            {isToVoteLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
            ) : (
              <Vote className="mr-2 h-4 w-4" />
            )}
            {isToVoteLoading? "Redirecting..." : "Vote Now"}
          </Button>
              </motion.div>
              
              
        </div>
      </header>
  )
}

export default Header