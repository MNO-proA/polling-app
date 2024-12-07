// components/AdminButton.tsx
import { Button } from "@/components/ui/button";
import { Ellipsis, UserCog } from "lucide-react";


// props
interface AdminButtonProps {
  isLoading: boolean;
  handleRoute: () => void;
}



export const AdminButton = ({isLoading, handleRoute}: AdminButtonProps) => {


  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleRoute}
      className="rounded-full"
      disabled={isLoading}
    >
      {isLoading? <Ellipsis /> : <UserCog className="h-6 w-6" /> }
      
    </Button>
  );
};