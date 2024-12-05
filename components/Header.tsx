
import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import { Vote } from 'lucide-react'
import { Loader2 } from "lucide-react";

const Header = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
  
    const handleRedirect = async () => {
      setIsLoading(true);
      router.push("/vote");
    };

  return (
    <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">PollingApp</h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
               <Button
            variant="default"
            onClick={handleRedirect}
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> // Spinner Icon
            ) : (
              <Vote className="mr-2 h-4 w-4" />
            )}
            {isLoading ? "Redirecting..." : "Vote Now"}
          </Button>
              </motion.div>
        </div>
      </header>
  )
}

export default Header